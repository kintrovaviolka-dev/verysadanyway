const fs = require('fs');
const path = require('path');

const workspaceDir = '/Users/violakintrova/Downloads/verysadanyway-main/urgentni-prijem';
const casesDir = path.join(workspaceDir, 'src/data/cases');

const specialtyMap = {
  "1": "Kardiologie",
  "2": "Pneumologie",
  "3": "Traumatologie",
  "4": "Pediatrie",
  "5": "Infektologie",
  "6": "Alergologie",
  "7": "Chirurgie",
  "8": "Toxikologie",
  "9": "Pediatrie",
  "10": "Pediatrie",
  "11": "Pediatrie",
  "12": "Kardiologie",
  "13": "Neurologie"
};

const defaultFeedback = {
  "1": "Akutní STEMI vyžaduje okamžitou reperfuzi (PCI) a podání antiagregace a heparinu.",
  "2": "Plicní embolie se středním rizikem vyžaduje antikoagulační léčbu a pečlivý monitoring.",
  "3": "Masivní polytrauma s hemoragickým šokem vyžaduje okamžitou stabilizaci oběhu a trauma tým.",
  "4": "Subglotická laryngitida u dětí se léčí chladným vzduchem a kortikoidy (dexamethason).",
  "5": "Meningokoková sepse vyžaduje okamžité podání širokospektrých antibiotik STATIM.",
  "6": "Anafylaktický šok vyžaduje okamžitou intramuskulární aplikaci adrenalinu.",
  "7": "Akutní pankreatitida vyžaduje intenzivní hydrataci, analgézii a klid střev.",
  "8": "Předávkování TCA vyžaduje natrium bikarbonát k prevenci a léčbě kardiotoxicity.",
  "9": "Febrilní křeče u dětí vyžadují podání diazepamu rektálně při trvání nad 5 minut.",
  "10": "Status asthmaticus vyžaduje inhalaci beta-mimetik, kyslík a systémové kortikoidy.",
  "11": "Akutní epiglotitida je kritický stav vyžadující klid, inhalaci adrenalinu a připravenost k intubaci.",
  "12": "Kardiogenní šok vyžaduje inotropní podporu, ventilaci a emergentní revaskularizaci.",
  "13": "iCMP v časném okně je indikována k systémové trombolýze k obnovení perfuze mozku."
};

for (let id = 1; id <= 13; id++) {
  const filePath = path.join(casesDir, `${id}.json`);
  if (!fs.existsSync(filePath)) continue;

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  
  data.specialty = specialtyMap[id.toString()] || "Všeobecné lékařství";
  data.difficulty = data.level === 3 ? "hard" : data.level === 2 ? "medium" : "easy";
  data.patientHistory = data.history;
  data.vitalSigns = data.vitals;
  data.physicalExam = `Fyzikální vyšetření: ${data.complaintDetail}`;
  data.labValues = data.labsResult;
  
  data.decisionNodes = [
    {
      "question": `Jaký je klíčový první krok u pacienta s diagnózou: ${data.title}?`,
      "options": [
        "Zahájit specifickou emergentní léčbu a monitoring vitálních funkcí",
        "Odeslat pacienta na ambulantní došetření",
        "Pouze sledovat bez aktivní intervence"
      ],
      "feedback": defaultFeedback[id.toString()] || "Postupujte podle standardů ČLS JEP pro daný akutní stav."
    }
  ];
  data.feedback = defaultFeedback[id.toString()] || "Postupujte podle standardů ČLS JEP.";

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
}

console.log("Successfully enriched all 13 existing cases with clinical schema fields!");
