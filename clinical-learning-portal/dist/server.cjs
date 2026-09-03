var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json());
app.get("/api/health", (req, res) => {
  const hasKey = !!process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY !== "MY_GEMINI_API_KEY";
  res.json({
    status: "ok",
    geminiConfigured: hasKey,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
var aiClient = null;
function getGeminiClient() {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    throw new Error("GEMINI_API_KEY is not configured in Secrets. Please add it in the Settings panel of AI Studio.");
  }
  if (!aiClient) {
    aiClient = new import_genai.GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
app.post("/api/gemini/generate-scenario", async (req, res) => {
  try {
    const { topic, patientType, difficulty, language } = req.body;
    const client = getGeminiClient();
    const isCzech = language === "cs";
    const prompt = `Generate an interactive Emergency Medicine scenario.
    Topic/Chief Complaint: ${topic || "Chest Pain / ACS"}
    Patient Type: ${patientType || "Adult"}
    Clinical Difficulty: ${difficulty || "Medium"}
    Output Language: ${isCzech ? "Czech" : "English"}

    Please output a medically accurate presentation, realistic vital signs, brief relevant medical background, and 4 challenging choice options. One option must be the clear best next step, two should be plausible but lower priority, and one should be a potential hazard or inappropriate delay.
    ${isCzech ? 'CRITICAL CZECH TRANSLATION RULE: Do NOT use automatic-looking or awkward translated words ("parasite words"). If there is no standard, widely accepted natural Czech medical term, use the standard professional English medical term in double quotes (e.g., "RSI", "CICO", "reversal agent", "induction agent", "vessel-rich group", "arm-brain", "EpiPen", "airway", "shock", "delirium"). Keep all other descriptions in elegant, natural, professional Czech medical jargon.' : ""}`;
    const response = await client.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: `You are an expert Emergency Medicine clinical educator. Your job is to create a realistic, high-fidelity clinical decision simulation in JSON format.
        Make sure the medical scenario feels realistic. The vital signs should match the pathology (e.g. hypoxic patients are tachycardic and tachypneic; shock patients are hypotensive).
        The list of "actions" should represent immediate potential actions at the bedside.`,
        responseMimeType: "application/json",
        responseSchema: {
          type: import_genai.Type.OBJECT,
          properties: {
            title: {
              type: import_genai.Type.STRING,
              description: 'The title of the clinical scenario, e.g. "Severe Asthma Exacerbation" or "Anaphylactic Shock".'
            },
            presentation: {
              type: import_genai.Type.STRING,
              description: "A detailed paragraph describing what you see, hear, and feel when the patient arrives at the bedside."
            },
            vitals: {
              type: import_genai.Type.OBJECT,
              properties: {
                hr: { type: import_genai.Type.STRING, description: 'Heart rate in bpm, e.g., "112"' },
                bp: { type: import_genai.Type.STRING, description: 'Blood pressure in mmHg, e.g., "94/58"' },
                spo2: { type: import_genai.Type.STRING, description: 'Oxygen saturation, e.g., "89%"' },
                rr: { type: import_genai.Type.STRING, description: 'Respiratory rate per min, e.g., "24"' },
                temp: { type: import_genai.Type.STRING, description: 'Temperature in Celsius, e.g., "37.2"' },
                rhythm: { type: import_genai.Type.STRING, description: 'Cardiac monitor rhythm, e.g., "Sinus Tachycardia" or "Sinus Rhythm with frequent PVCs".' }
              },
              required: ["hr", "bp", "spo2", "rr", "temp"]
            },
            background: {
              type: import_genai.Type.STRING,
              description: "Brief medical background, past medical history, and allergies disclosed by the patient, family, or EMS."
            },
            actions: {
              type: import_genai.Type.ARRAY,
              items: { type: import_genai.Type.STRING },
              description: "Four concrete clinical choices or interventions. Keep them active and practical."
            }
          },
          required: ["title", "presentation", "vitals", "background", "actions"]
        }
      }
    });
    if (!response.text) {
      throw new Error("No content returned from Gemini.");
    }
    const data = JSON.parse(response.text.trim());
    res.json(data);
  } catch (error) {
    console.error("Scenario generation error:", error);
    res.status(500).json({ error: error.message || "Failed to generate scenario" });
  }
});
app.post("/api/gemini/evaluate-action", async (req, res) => {
  try {
    const { history, actionTaken, difficulty, language } = req.body;
    const client = getGeminiClient();
    const isCzech = language === "cs";
    const prompt = `Evaluate the action taken by the clinician.
    
    Simulation History:
    ${JSON.stringify(history, null, 2)}
    
    Action Taken: "${actionTaken}"
    Difficulty: ${difficulty || "Medium"}
    Output Language: ${isCzech ? "Czech" : "English"}

    Analyze the clinical correctness of this action. 
    1. Update the patient's state, description, and vitals based on this action.
    2. Provide direct educational "feedback" explaining why this was correct or incorrect, with official guidelines (e.g. AHA, ERC, ASA) if applicable.
    3. Determine if the simulation is terminated (meaning the patient is either fully stabilized/transferred or has died/resuscitated/irreversibly deteriorated).
    4. Set isSuccess to true if the patient is fully stabilized, or false if they died or are still in active crisis.
    5. If NOT terminated, provide 4 new choices for actions. If terminated, leave actions empty.
    ${isCzech ? 'CRITICAL CZECH TRANSLATION RULE: Do NOT use automatic-looking or awkward translated words ("parasite words"). If there is no standard, widely accepted natural Czech medical term, use the standard professional English medical term in double quotes (e.g., "RSI", "CICO", "reversal agent", "induction agent", "vessel-rich group", "arm-brain", "EpiPen", "airway", "shock", "delirium"). Keep all other descriptions in elegant, natural, professional Czech medical jargon.' : ""}`;
    const response = await client.models.generateContent({
      model: "gemini-2.0-flash",
      contents: prompt,
      config: {
        systemInstruction: `You are an expert Emergency Medicine clinical examiner. Evaluate the action taken by the student.
        Respond with realistic physiological responses. For example, giving IV fluids to hypovolemic patients increases BP. Administering correct reversal agents improves ventilation.
        Provide constructive, instructive, and supportive medical critique. Do not make choices trivial; include subtle diagnostic pitfalls (e.g. check for hyperkalemia before succinylcholine).`,
        responseMimeType: "application/json",
        responseSchema: {
          type: import_genai.Type.OBJECT,
          properties: {
            outcome: {
              type: import_genai.Type.STRING,
              description: "Description of what occurs immediately at the bedside after taking the action, and how the patient responds physically."
            },
            vitals: {
              type: import_genai.Type.OBJECT,
              properties: {
                hr: { type: import_genai.Type.STRING },
                bp: { type: import_genai.Type.STRING },
                spo2: { type: import_genai.Type.STRING },
                rr: { type: import_genai.Type.STRING },
                temp: { type: import_genai.Type.STRING },
                rhythm: { type: import_genai.Type.STRING }
              },
              required: ["hr", "bp", "spo2", "rr", "temp"]
            },
            feedback: {
              type: import_genai.Type.STRING,
              description: "Instructive medical critique. Highlight if the action was high-priority, secondary, or dangerous, and explain why."
            },
            isTerminated: {
              type: import_genai.Type.BOOLEAN,
              description: "Whether the scenario has reached an end point (success or failure)."
            },
            isSuccess: {
              type: import_genai.Type.BOOLEAN,
              description: "Whether the patient is safely stabilized and out of danger."
            },
            actions: {
              type: import_genai.Type.ARRAY,
              items: { type: import_genai.Type.STRING },
              description: "If isTerminated is false, provide 4 new clinical action choices. If isTerminated is true, return an empty array."
            }
          },
          required: ["outcome", "vitals", "feedback", "isTerminated", "isSuccess", "actions"]
        }
      }
    });
    if (!response.text) {
      throw new Error("No content returned from Gemini.");
    }
    const data = JSON.parse(response.text.trim());
    res.json(data);
  } catch (error) {
    console.error("Action evaluation error:", error);
    res.status(500).json({ error: error.message || "Failed to evaluate action" });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
    console.log("Vite middleware mounted for development.");
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
    console.log("Serving built static files in production.");
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Clinical Learning Portal server running at http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
