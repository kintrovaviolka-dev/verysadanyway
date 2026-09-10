document.addEventListener("DOMContentLoaded", () => {
  // --- APPLICATION STATE ---
  let state = {
    clientToken: 'super_secret_medical_study_token_2026',
    selectedFile: null,
    activeTab: 'file-upload-tab', // 'file-upload-tab' or 'text-input-tab'
    dialogue: [],
    captcha: {
      num1: 0,
      num2: 0,
      solution: 0
    }
  };

  // --- DOM ELEMENTS ---
  // Steps
  const stepIndicators = [
    document.getElementById("step-indicator-1"),
    document.getElementById("step-indicator-2"),
    document.getElementById("step-indicator-3")
  ];
  const stepLines = [
    document.getElementById("step-line-1"),
    document.getElementById("step-line-2")
  ];

  // Panels
  const panelUpload = document.getElementById("panel-upload");
  const panelScript = document.getElementById("panel-script");
  const panelPodcast = document.getElementById("panel-podcast");

  // Tabs
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  // File Upload Tab
  const dropZone = document.getElementById("drop-zone");
  const fileInput = document.getElementById("file-input");
  const selectedFileInfo = document.getElementById("selected-file-info");
  const fileDisplayName = document.getElementById("file-display-name");
  const removeFileBtn = document.getElementById("remove-file-btn");

  // Text Input Tab
  const textInput = document.getElementById("text-input");
  const charCount = document.getElementById("char-count");

  // Captcha
  const captchaQuestionText = document.getElementById("captcha-question-text");
  const captchaAnswerInput = document.getElementById("captcha-answer");
  const refreshCaptchaBtn = document.getElementById("refresh-captcha-btn");

  // Action Buttons & Errors Panel 1
  const btnGenerateScript = document.getElementById("btn-generate-script");
  const uploadError = document.getElementById("upload-error");

  // Script Editor Panel 2
  const scriptContainer = document.getElementById("script-container");
  const btnAddReplica = document.getElementById("btn-add-replica");
  const btnBackToUpload = document.getElementById("btn-back-to-upload");
  const btnGenerateAudio = document.getElementById("btn-generate-audio");
  const scriptError = document.getElementById("script-error");

  // Audio Player Panel 3
  const audioPlayer = document.getElementById("audio-player");
  const audioVisualizer = document.querySelector(".audio-visualizer-wave");
  const btnDownloadMp3 = document.getElementById("btn-download-mp3");
  const btnStartOver = document.getElementById("btn-start-over");

  // Loading Overlay
  const loadingOverlay = document.getElementById("loading-overlay");
  const loadingTitle = document.getElementById("loading-title");
  const loadingSubtitle = document.getElementById("loading-subtitle");
  const lSteps = [
    document.getElementById("l-step-1"),
    document.getElementById("l-step-2"),
    document.getElementById("l-step-3")
  ];

  // --- INITIALIZATION ---
  async function init() {
    if (window.location.protocol === 'file:') {
      const banner = document.getElementById("protocol-warning-banner");
      if (banner) banner.style.display = "flex";
    }
    await fetchConfig();
    generateCaptcha();
    setupEventListeners();
    updateGenerateButtonState();
  }

  // Fetch client token from backend
  async function fetchConfig() {
    try {
      const res = await fetch("/api/config");
      if (res.ok) {
        const data = await res.json();
        if (data.clientToken) {
          state.clientToken = data.clientToken;
        }
      }
    } catch (err) {
      console.warn("Could not fetch client token from /api/config. Using default fallback.");
    }
  }

  // --- CAPTCHA GENERATOR ---
  function generateCaptcha() {
    state.captcha.num1 = Math.floor(Math.random() * 9) + 2; // 2-10
    state.captcha.num2 = Math.floor(Math.random() * 9) + 2; // 2-10
    state.captcha.solution = state.captcha.num1 + state.captcha.num2;
    
    captchaQuestionText.textContent = `${state.captcha.num1} + ${state.captcha.num2}`;
    captchaAnswerInput.value = "";
    updateGenerateButtonState();
  }

  // --- STEP & PANEL NAVIGATION ---
  function showPanel(panelName) {
    // Hide all
    panelUpload.classList.remove("active");
    panelScript.classList.remove("active");
    panelPodcast.classList.remove("active");

    // Reset step indicators
    stepIndicators.forEach(step => {
      step.classList.remove("active", "completed");
    });
    stepLines.forEach(line => {
      line.classList.remove("active");
    });

    if (panelName === 'upload') {
      panelUpload.classList.add("active");
      stepIndicators[0].classList.add("active");
    } else if (panelName === 'script') {
      panelScript.classList.add("active");
      stepIndicators[0].classList.add("completed");
      stepIndicators[1].classList.add("active");
      stepLines[0].classList.add("active");
    } else if (panelName === 'podcast') {
      panelPodcast.classList.add("active");
      stepIndicators[0].classList.add("completed");
      stepIndicators[1].classList.add("completed");
      stepIndicators[2].classList.add("active");
      stepLines[0].classList.add("active");
      stepLines[1].classList.add("active");
    }
  }

  // --- LOADING OVERLAY STATE ---
  function showLoading(title, subtitle, stepIndex) {
    loadingTitle.textContent = title;
    loadingSubtitle.textContent = subtitle;
    
    lSteps.forEach((step, idx) => {
      step.classList.remove("active", "completed");
      const icon = step.querySelector(".status-icon");
      
      if (idx < stepIndex) {
        step.classList.add("completed");
        icon.textContent = "✅";
      } else if (idx === stepIndex) {
        step.classList.add("active");
        icon.textContent = "⏳";
      } else {
        icon.textContent = "💤";
      }
    });

    loadingOverlay.style.display = "flex";
  }

  function hideLoading() {
    loadingOverlay.style.display = "none";
  }

  // --- INPUT VALIDATION & ACTION STATUS ---
  function updateGenerateButtonState() {
    if (window.location.protocol === 'file:') {
      btnGenerateScript.disabled = true;
      return;
    }
    const isCaptchaFilled = captchaAnswerInput.value.trim() !== "";
    let isInputProvided = false;

    if (state.activeTab === 'file-upload-tab') {
      isInputProvided = state.selectedFile !== null;
    } else {
      isInputProvided = textInput.value.trim().length >= 50; // Min 50 characters for meaningful podcast
    }

    btnGenerateScript.disabled = !(isCaptchaFilled && isInputProvided);
  }

  // --- FILE HANDLING ---
  function handleFileSelected(file) {
    if (!file) return;

    // Validate size (5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      showUploadError("Soubor je příliš velký. Maximální povolená velikost je 5 MB.");
      resetFileSelection();
      return;
    }

    // Validate extension
    const allowedExts = ['.pdf', '.docx', '.txt'];
    const fileName = file.name.toLowerCase();
    const isAllowed = allowedExts.some(ext => fileName.endsWith(ext));
    if (!isAllowed) {
      showUploadError("Nepodporovaný typ souboru. Nahrajte prosím PDF, Word (DOCX) nebo TXT soubor.");
      resetFileSelection();
      return;
    }

    // Save state
    state.selectedFile = file;
    fileDisplayName.textContent = file.name;
    selectedFileInfo.style.display = "inline-flex";
    uploadError.style.display = "none";
    updateGenerateButtonState();
  }

  function resetFileSelection() {
    state.selectedFile = null;
    fileInput.value = "";
    selectedFileInfo.style.display = "none";
    updateGenerateButtonState();
  }

  function showUploadError(msg) {
    uploadError.textContent = msg;
    uploadError.style.display = "block";
  }

  // --- EVENT LISTENERS ---
  function setupEventListeners() {
    // 1. Tab Switching
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        btn.classList.add("active");
        const targetTabId = btn.getAttribute("data-tab");
        document.getElementById(targetTabId).classList.add("active");

        state.activeTab = targetTabId;
        uploadError.style.display = "none";
        updateGenerateButtonState();
      });
    });

    // 2. Drag & Drop Zone
    dropZone.addEventListener("click", () => fileInput.click());
    
    fileInput.addEventListener("change", (e) => {
      handleFileSelected(e.target.files[0]);
    });

    ['dragenter', 'dragover'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.add("dragover");
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropZone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropZone.classList.remove("dragover");
      }, false);
    });

    dropZone.addEventListener("drop", (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      handleFileSelected(files[0]);
    });

    removeFileBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Avoid triggering file input click
      resetFileSelection();
    });

    // 3. Text Input counter
    textInput.addEventListener("input", () => {
      const count = textInput.value.length;
      charCount.textContent = count.toLocaleString();
      updateGenerateButtonState();
    });

    // 4. Captcha Interaction
    captchaAnswerInput.addEventListener("input", updateGenerateButtonState);
    refreshCaptchaBtn.addEventListener("click", generateCaptcha);

    // 5. Back navigation on Header
    document.getElementById("back-to-hub").addEventListener("click", (e) => {
      // If user is editing a script, confirm before leaving
      if (panelScript.classList.contains("active")) {
        if (!confirm("Opravdu chcete odejít? Rozpracovaný scénář bude ztracen.")) {
          e.preventDefault();
        }
      }
    });

    // --- ENDPOINTS TRIGGER ---
    
    // Panel 1 -> Panel 2: Generate Script
    btnGenerateScript.addEventListener("click", async () => {
      uploadError.style.display = "none";
      
      const captchaAns = parseInt(captchaAnswerInput.value);
      if (captchaAns !== state.captcha.solution) {
        showUploadError("Neplatný výsledek Captcha testu. Zkuste to prosím znovu.");
        generateCaptcha();
        return;
      }

      showLoading("Zpracování dokumentu...", "Extrahuji a čistím text z podkladů...", 0);

      try {
        const formData = new FormData();
        formData.append("captchaNum1", state.captcha.num1);
        formData.append("captchaNum2", state.captcha.num2);
        formData.append("captchaSolution", captchaAns);

        let requestOptions = {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${state.clientToken}`
          }
        };

        if (state.activeTab === 'file-upload-tab') {
          formData.append("file", state.selectedFile);
          requestOptions.body = formData;
        } else {
          // Send as standard body
          requestOptions.headers['Content-Type'] = 'application/json';
          requestOptions.body = JSON.stringify({
            text: textInput.value,
            captchaNum1: state.captcha.num1,
            captchaNum2: state.captcha.num2,
            captchaSolution: captchaAns
          });
        }

        // Transition loading step to Gemini Generation
        showLoading("Generování scénáře...", "Gemini AI sestavuje edukační dialog...", 1);

        const response = await fetch('/api/generate-script', requestOptions);
        
        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || "Nepodařilo se vygenerovat scénář.");
        }

        const data = await response.json();
        state.dialogue = data.dialogue || [];
        
        // Render script editor
        renderScriptEditor();
        
        hideLoading();
        showPanel('script');

      } catch (err) {
        hideLoading();
        showUploadError(err.message);
        generateCaptcha();
      }
    });

    // Panel 2 -> Panel 1: Back
    btnBackToUpload.addEventListener("click", () => {
      if (confirm("Opravdu se chcete vrátit? Změny ve scénáři budou ztraceny.")) {
        generateCaptcha();
        showPanel('upload');
      }
    });

    // Panel 2: Add Replica
    btnAddReplica.addEventListener("click", () => {
      state.dialogue.push({
        speaker: 'Teacher',
        text: ''
      });
      renderScriptEditor();
      // Scroll to bottom of script container
      scriptContainer.scrollTop = scriptContainer.scrollHeight;
    });

    // Panel 2 -> Panel 3: Generate Audio
    btnGenerateAudio.addEventListener("click", async () => {
      scriptError.style.display = "none";
      
      // Update state dialogue from input fields
      const replicaItems = document.querySelectorAll(".replica-item");
      const dialogueData = [];

      let isValid = true;
      replicaItems.forEach((item, index) => {
        const speaker = item.querySelector(".select-speaker").value;
        const text = item.querySelector(".replica-text-input").value.trim();
        
        if (!text) {
          isValid = false;
          item.querySelector(".replica-text-input").classList.add("error");
        } else {
          item.querySelector(".replica-text-input").classList.remove("error");
        }

        dialogueData.push({ speaker, text });
      });

      if (!isValid) {
        showScriptError("Prosím, vyplňte text pro všechny repliky.");
        return;
      }

      state.dialogue = dialogueData;

      // Limit dialogue to max 25 replicas
      if (state.dialogue.length > 25) {
        showScriptError("Příliš mnoho replik. Maximální počet je 25 replik.");
        return;
      }

      showLoading("Hlasová syntéza...", "Fish AI 2.1 generuje hlasy Učitele a Studenta...", 2);

      try {
        const response = await fetch('/api/generate-audio', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${state.clientToken}`
          },
          body: JSON.stringify({
            dialogue: state.dialogue,
            captchaNum1: state.captcha.num1,
            captchaNum2: state.captcha.num2,
            captchaSolution: state.captcha.solution // Use verified captcha from initial step
          })
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || "Nepodařilo se vygenerovat audio.");
        }

        const data = await response.json();
        
        // Setup player
        audioPlayer.src = data.audioUrl;
        btnDownloadMp3.href = data.audioUrl;

        hideLoading();
        showPanel('podcast');

      } catch (err) {
        hideLoading();
        showScriptError(err.message);
      }
    });

    // Panel 3 Audio Visualizer syncing
    audioPlayer.addEventListener("play", () => {
      audioVisualizer.classList.add("playing");
    });

    audioPlayer.addEventListener("pause", () => {
      audioVisualizer.classList.remove("playing");
    });

    audioPlayer.addEventListener("ended", () => {
      audioVisualizer.classList.remove("playing");
    });

    // Panel 3 -> Panel 1: Start Over
    btnStartOver.addEventListener("click", () => {
      // Reset state
      state.selectedFile = null;
      state.dialogue = [];
      fileInput.value = "";
      selectedFileInfo.style.display = "none";
      textInput.value = "";
      charCount.textContent = "0";
      audioPlayer.src = "";
      
      generateCaptcha();
      showPanel('upload');
    });
  }

  function showScriptError(msg) {
    scriptError.textContent = msg;
    scriptError.style.display = "block";
  }

  // --- RENDER SCRIPT EDITOR ---
  function renderScriptEditor() {
    scriptContainer.innerHTML = "";
    
    if (state.dialogue.length === 0) {
      scriptContainer.innerHTML = `<div class="info-banner warning-banner" style="margin-bottom:0;">Scénář je prázdný. Klikněte na tlačítko níže pro přidání repliky.</div>`;
      return;
    }

    state.dialogue.forEach((replica, index) => {
      const item = document.createElement("div");
      item.className = `replica-item ${replica.speaker}`;
      item.setAttribute("data-index", index);

      item.innerHTML = `
        <div class="replica-controls">
          <select class="select-speaker">
            <option value="Teacher" ${replica.speaker === 'Teacher' ? 'selected' : ''}>👨‍🏫 Učitel</option>
            <option value="Student" ${replica.speaker === 'Student' ? 'selected' : ''}>🧑‍🎓 Student</option>
          </select>
          <button type="button" class="btn-delete-replica" title="Smazat repliku">Smazat</button>
        </div>
        <div class="replica-content">
          <textarea class="replica-text-input" placeholder="Zadejte repliku...">${replica.text}</textarea>
        </div>
      `;

      // Event listeners for individual replica
      const select = item.querySelector(".select-speaker");
      const textarea = item.querySelector(".replica-text-input");
      const deleteBtn = item.querySelector(".btn-delete-replica");

      // Sync class on speaker change
      select.addEventListener("change", (e) => {
        const val = e.target.value;
        item.className = `replica-item ${val}`;
        state.dialogue[index].speaker = val;
      });

      // Sync state on text change
      textarea.addEventListener("input", (e) => {
        state.dialogue[index].text = e.target.value;
      });

      // Handle delete
      deleteBtn.addEventListener("click", () => {
        state.dialogue.splice(index, 1);
        renderScriptEditor();
      });

      scriptContainer.appendChild(item);
    });
  }

  // Run app
  init();
});
