// feedback.js - Globální kód pro zpětnou vazbu se screenshotem napříč všemi statickými portály

(function () {
  // Inject feedback modal styles dynamically
  const css = `
    .feedback-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 10px 18px;
      border-radius: 12px;
      font-size: 0.8rem;
      font-weight: 600;
      text-decoration: none;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.08);
      color: #94a3b8;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      cursor: pointer;
      user-select: none;
    }

    .feedback-btn:hover {
      background: rgba(255, 255, 255, 0.08);
      border-color: rgba(59, 130, 246, 0.3);
      color: #fff;
      transform: translateY(-1px) scale(1.02);
    }

    .feedback-icon {
      width: 16px;
      height: 16px;
      color: #64748b;
      transition: color 0.3s ease;
      flex-shrink: 0;
    }

    .feedback-btn:hover .feedback-icon {
      color: #3b82f6;
    }

    /* Feedback Modal Overlay */
    .feedback-modal-overlay {
      position: fixed;
      inset: 0;
      z-index: 99999;
      background: rgba(3, 7, 18, 0.85);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease;
    }

    .feedback-modal-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }

    /* Feedback Modal Card */
    .feedback-modal-card {
      width: 100%;
      max-width: 500px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
      overflow: hidden;
      transform: scale(0.95);
      transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .feedback-modal-overlay.open .feedback-modal-card {
      transform: scale(1);
    }

    /* Header */
    .feedback-modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 20px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    }

    .feedback-modal-header h3 {
      font-size: 0.9rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #fff;
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 0;
    }

    .feedback-modal-close-btn {
      background: transparent;
      border: none;
      color: #64748b;
      cursor: pointer;
      padding: 4px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
    }

    .feedback-modal-close-btn:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
    }

    /* Form & Body */
    .feedback-modal-body {
      padding: 20px;
    }

    .feedback-form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .feedback-textarea {
      width: 100%;
      height: 120px;
      padding: 12px;
      background: rgba(255, 255, 255, 0.03);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 12px;
      color: #fff;
      font-family: inherit;
      font-size: 0.85rem;
      resize: none;
      box-sizing: border-box;
      transition: border-color 0.2s ease;
    }

    .feedback-textarea:focus {
      outline: none;
      border-color: #3b82f6;
      background: rgba(255, 255, 255, 0.05);
    }

    /* Screenshot panel */
    .feedback-screenshot-panel {
      background: rgba(255, 255, 255, 0.02);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 12px;
      padding: 12px;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .feedback-checkbox-label {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 0.75rem;
      color: #94a3b8;
      font-weight: 600;
      cursor: pointer;
      user-select: none;
    }

    .feedback-checkbox-label input[type="checkbox"] {
      width: 16px;
      height: 16px;
      accent-color: #3b82f6;
      cursor: pointer;
    }

    .feedback-screenshot-status {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.7rem;
      color: #64748b;
    }

    .feedback-screenshot-preview {
      width: 100%;
      max-height: 140px;
      border-radius: 8px;
      border: 1px solid rgba(255, 255, 255, 0.08);
      overflow: hidden;
      background: rgba(0,0,0,0.3);
    }

    .feedback-screenshot-preview img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      max-height: 140px;
      display: block;
    }

    /* Footer / Action buttons */
    .feedback-modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      margin-top: 8px;
      padding-top: 16px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
    }

    .feedback-btn-cancel {
      padding: 8px 16px;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: #94a3b8;
      font-size: 0.75rem;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .feedback-btn-cancel:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
    }

    .feedback-btn-submit {
      padding: 8px 20px;
      background: #3b82f6;
      border: none;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .feedback-btn-submit:hover {
      background: #2563eb;
    }

    .feedback-btn-submit:disabled {
      background: rgba(255, 255, 255, 0.05);
      color: #64748b;
      box-shadow: none;
      cursor: not-allowed;
    }

    /* Success View */
    .feedback-success-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 40px 20px;
      gap: 16px;
    }

    .feedback-success-icon {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: rgba(16, 185, 129, 0.1);
      border: 1px solid rgba(16, 185, 129, 0.2);
      color: #10b981;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
    }

    .feedback-success-view h4 {
      font-size: 1rem;
      color: #fff;
      margin: 0;
    }

    /* Spinner loader */
    .feedback-spinner {
      width: 14px;
      height: 14px;
      border: 2px solid rgba(255,255,255,0.3);
      border-radius: 50%;
      border-top-color: #fff;
      animation: feedback-spin 0.8s linear infinite;
      display: inline-block;
    }

    @keyframes feedback-spin {
      to { transform: rotate(360deg); }
    }

    .feedback-error-text {
      color: #f87171;
      font-size: 0.75rem;
      font-weight: 600;
    }

    /* Floating Support Popup Toast */
    .support-popup-toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      width: 320px;
      background: rgba(15, 23, 42, 0.9);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 18px;
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 1px 1px 0 rgba(255, 255, 255, 0.05) inset;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      gap: 12px;
      transform: translateY(40px) scale(0.95);
      opacity: 0;
      pointer-events: none;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .support-popup-toast.show {
      transform: translateY(0) scale(1);
      opacity: 1;
      pointer-events: auto;
    }
    .support-popup-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .support-popup-title {
      font-size: 0.95rem;
      font-weight: 700;
      color: #fff;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .support-popup-close-btn {
      background: transparent;
      border: none;
      color: #64748b;
      cursor: pointer;
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      border-radius: 6px;
      transition: all 0.2s ease;
      line-height: 1;
    }
    .support-popup-close-btn:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
    }
    .support-popup-body {
      font-size: 0.8rem;
      color: #94a3b8;
      line-height: 1.45;
      margin: 0;
    }
    .support-popup-footer {
      display: flex;
      gap: 8px;
    }
    .support-popup-btn-kofi {
      flex: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 8px 12px;
      background: linear-gradient(135deg, #ff5e5b 0%, #d13d3a 100%);
      border: none;
      border-radius: 8px;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 700;
      text-decoration: none;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 4px 12px rgba(255, 94, 91, 0.2);
    }
    .support-popup-btn-kofi:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 16px rgba(255, 94, 91, 0.3);
    }
    .support-popup-btn-later {
      padding: 8px 12px;
      background: transparent;
      border: 1px solid rgba(255, 255, 255, 0.08);
      border-radius: 8px;
      color: #94a3b8;
      font-size: 0.75rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .support-popup-btn-later:hover {
      background: rgba(255, 255, 255, 0.05);
      color: #fff;
    }
  `;
  const styleElement = document.createElement('style');
  styleElement.textContent = css;
  document.head.appendChild(styleElement);

  let html2canvasLoaded = false;
  let lastFocusedElement = null;
  let screenshotBase64 = null;

  // 1. Dynamické načtení html2canvas z CDN
  function loadHtml2Canvas() {
    if (window.html2canvas) {
      html2canvasLoaded = true;
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
    script.async = true;
    script.onload = function () {
      html2canvasLoaded = true;
    };
    script.onerror = function () {
      console.error('Nepodařilo se načíst knihovnu html2canvas pro snímky obrazovky.');
    };
    document.head.appendChild(script);
  }

  loadHtml2Canvas();

  // 2. Inicializace prvků po načtení DOM
  document.addEventListener('DOMContentLoaded', function () {
    // Vytvoření tlačítek a modálu
    initFeedbackWidget();
  });

  function initFeedbackWidget() {
    // Zabránění duplicitní inicializaci
    if (document.getElementById('feedback-modal-overlay')) return;

    // A. Vložení tlačítka do patičky / nebo jako plovoucího tlačítka
    const footerContent = document.querySelector('.footer-content') || document.querySelector('footer');
    
    const btnHtml = `
      <button id="feedback-trigger-btn" class="feedback-btn" type="button" title="Chyba / Návrh na zlepšení">
        <svg class="feedback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
        <span>Chyba / Návrh 💬</span>
      </button>
    `;

    if (footerContent) {
      const supportBtn = footerContent.querySelector('.support-btn');
      if (supportBtn) {
        supportBtn.insertAdjacentHTML('afterend', btnHtml);
      } else {
        // Vyhledáme nějaký odstavec nebo vnitřní obal, abychom to vložili vedle autorských práv
        footerContent.insertAdjacentHTML('beforeend', btnHtml);
      }
    } else {
      // Pokud na stránce není patička, přidáme plovoucí tlačítko vpravo dole
      const floatingContainerHtml = `
        <div id="feedback-floating-container" style="position: fixed; bottom: 20px; right: 20px; z-index: 99990;">
          <button id="feedback-trigger-btn" class="feedback-btn" type="button" style="box-shadow: 0 4px 16px rgba(0,0,0,0.5); background: rgba(15, 23, 42, 0.95); border: 1px solid rgba(255,255,255,0.12); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);">
            <svg class="feedback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Chyba / Návrh 💬</span>
          </button>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', floatingContainerHtml);
    }

    // B. Vložení HTML struktury modálního okna
    const modalHtml = `
      <div id="feedback-modal-overlay" class="feedback-modal-overlay">
        <div class="feedback-modal-card">
          <div class="feedback-modal-header">
            <h3>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:4px;">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              Zpětná vazba / Chyba
            </h3>
            <button id="feedback-modal-close" class="feedback-modal-close-btn" type="button" aria-label="Zavřít">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          <div class="feedback-modal-body" id="feedback-modal-body-container">
            <form class="feedback-form" id="feedback-form-element">
              <textarea id="feedback-comment-input" class="feedback-textarea" placeholder="Popište chybu nebo navrhněte zlepšení..." aria-label="Vaše zpráva nebo návrh" required></textarea>
              
              <div class="feedback-screenshot-panel">
                <label class="feedback-checkbox-label">
                  <input type="checkbox" id="feedback-include-screenshot-checkbox" checked />
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                    <circle cx="12" cy="13" r="4"></circle>
                  </svg>
                  Zahrnout snímek aktuální obrazovky
                </label>
                
                <div id="feedback-screenshot-status" class="feedback-screenshot-status">
                  <span class="feedback-spinner"></span>
                  <span>Generuji snímek obrazovky, vyčkejte prosím...</span>
                </div>
                
                <div id="feedback-screenshot-preview" class="feedback-screenshot-preview" style="display: none;">
                  <img id="feedback-screenshot-img" src="" alt="Screenshot Preview" />
                </div>
              </div>
              
              <div id="feedback-error-message" class="feedback-error-text" style="display: none;"></div>
              
              <div class="feedback-modal-footer">
                <button type="button" id="feedback-modal-cancel" class="feedback-btn-cancel">Zrušit</button>
                <button type="submit" id="feedback-modal-submit" class="feedback-btn-submit">
                  <span>Odeslat</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // C. Navázání eventů
    const triggerBtn = document.getElementById('feedback-trigger-btn');
    const modalOverlay = document.getElementById('feedback-modal-overlay');
    const closeBtn = document.getElementById('feedback-modal-close');
    const cancelBtn = document.getElementById('feedback-modal-cancel');
    const formElement = document.getElementById('feedback-form-element');
    const includeScreenshotCheckbox = document.getElementById('feedback-include-screenshot-checkbox');

    if (triggerBtn) triggerBtn.addEventListener('click', openModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    if (formElement) formElement.addEventListener('submit', handleFormSubmit);
    
    if (includeScreenshotCheckbox) {
      includeScreenshotCheckbox.addEventListener('change', function (e) {
        const preview = document.getElementById('feedback-screenshot-preview');
        if (preview && screenshotBase64) {
          preview.style.display = e.target.checked ? 'block' : 'none';
        }
      });
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        const overlay = document.getElementById('feedback-modal-overlay');
        if (overlay && overlay.classList.contains('open')) {
          closeModal();
        }
      }
    });
  }

  // 3. Otevření modálu a vygenerování screenshotu
  function openModal() {
    lastFocusedElement = document.activeElement;
    const overlay = document.getElementById('feedback-modal-overlay');

    const commentInput = document.getElementById('feedback-comment-input');
    const statusText = document.getElementById('feedback-screenshot-status');
    const previewArea = document.getElementById('feedback-screenshot-preview');
    const errorText = document.getElementById('feedback-error-message');
    const submitBtn = document.getElementById('feedback-modal-submit');
    const checkbox = document.getElementById('feedback-include-screenshot-checkbox');

    if (!overlay) return;

    // Reset formuláře
    overlay.classList.add('open');
    if (commentInput) commentInput.value = '';
    if (errorText) {
      errorText.style.display = 'none';
      errorText.innerHTML = '';
    }
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = '<span>Odeslat</span>';
    }
    if (checkbox) {
      checkbox.checked = true;
      checkbox.disabled = true; // Zablokujeme do načtení screenshotu
    }

    screenshotBase64 = null;
    if (statusText) {
      statusText.style.display = 'flex';
      statusText.innerHTML = `
        <span class="feedback-spinner"></span>
        <span>Generuji snímek obrazovky, vyčkejte prosím...</span>
      `;
    }
    if (previewArea) previewArea.style.display = 'none';

    setTimeout(function () {
      const commentInput = document.getElementById('feedback-comment-input');
      if (commentInput) {
        commentInput.focus();
      }
    }, 50);

    // Generování screenshotu s krátkou prodlevou
    setTimeout(function () {
      if (window.html2canvas && html2canvasLoaded) {
        html2canvas(document.body, {
          useCORS: true,
          allowTaint: true,
          logging: false,
          ignoreElements: function (element) {
            // Skryjeme modál, aby nebyl součástí screenshotu
            return (
              element.id === 'feedback-modal-overlay' ||
              element.classList.contains('feedback-modal-overlay') ||
              element.id === 'feedback-floating-container'
            );
          }
        }).then(function (canvas) {
          // Komprese a uložení do base64
          screenshotBase64 = canvas.toDataURL('image/jpeg', 0.6);
          
          const previewImg = document.getElementById('feedback-screenshot-img');
          if (previewImg) previewImg.src = screenshotBase64;
          
          if (statusText) statusText.style.display = 'none';
          if (previewArea) previewArea.style.display = 'block';
          if (checkbox) checkbox.disabled = false;
        }).catch(function (err) {
          console.error('Chyba při tvorbě snímku:', err);
          if (statusText) {
            statusText.innerHTML = '⚠️ Snímek obrazovky se nepodařilo vygenerovat.';
          }
        });
      } else {
        if (statusText) {
          statusText.innerHTML = '⚠️ Knihovna pro snímek obrazovky se stále načítá...';
        }
      }
    }, 200);
  }

  // 4. Zavření modálu
  function closeModal(e) {
    // Pokud je vyvoláno kliknutím na overlay, zavřeme pouze pokud se nekliklo dovnitř karty
    if (e && e.target !== e.currentTarget && e.currentTarget.id === 'feedback-modal-overlay') return;
    
    const overlay = document.getElementById('feedback-modal-overlay');
    if (overlay) {
      overlay.classList.remove('open');
      if (lastFocusedElement) {
        lastFocusedElement.focus();
        lastFocusedElement = null;
      }
    }
  }

  // 5. Odeslání formuláře na Apps Script backend
  function handleFormSubmit(e) {
    e.preventDefault();
    
    const commentInput = document.getElementById('feedback-comment-input');
    const checkbox = document.getElementById('feedback-include-screenshot-checkbox');
    const submitBtn = document.getElementById('feedback-modal-submit');
    const errorText = document.getElementById('feedback-error-message');
    const modalBody = document.getElementById('feedback-modal-body-container');

    if (!commentInput || !commentInput.value.trim()) return;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="feedback-spinner"></span>
        <span>Odesílám...</span>
      `;
    }
    if (errorText) errorText.style.display = 'none';

    const payload = {
      pageUrl: window.location.href,
      comment: commentInput.value,
      screenshotBase64: (checkbox && checkbox.checked) ? screenshotBase64 : null
    };

    fetch('https://script.google.com/macros/s/AKfycbzwMiIXvrTQR4Of5dAwkc_sbC8gMrd7rtxX9wrG6xrzsd3xZcIUk_g7c_oEKLqeVp-l/exec', {
      method: 'POST',
      mode: 'no-cors', // Důležité pro Google Apps Script přesměrování
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(function () {
      // Zobrazení děkovné zprávy
      if (modalBody) {
        modalBody.innerHTML = `
          <div class="feedback-success-view">
            <div class="feedback-success-icon">✓</div>
            <h4>Děkujeme za zpětnou vazbu!</h4>
          </div>
        `;
      }

      // Zavření modálu po 2 sekundách a obnova vnitřního HTML pro další otevření
      setTimeout(function () {
        closeModal();
        // Počkáme na konec animace a pak obnovíme formulář
        setTimeout(function () {
          if (modalBody) {
            modalBody.innerHTML = `
              <form class="feedback-form" id="feedback-form-element">
                <textarea id="feedback-comment-input" class="feedback-textarea" placeholder="Popište chybu nebo navrhněte zlepšení..." aria-label="Vaše zpráva nebo návrh" required></textarea>
                
                <div class="feedback-screenshot-panel">
                  <label class="feedback-checkbox-label">
                    <input type="checkbox" id="feedback-include-screenshot-checkbox" checked />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle;">
                      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                      <circle cx="12" cy="13" r="4"></circle>
                    </svg>
                    Zahrnout snímek aktuální obrazovky
                  </label>
                  
                  <div id="feedback-screenshot-status" class="feedback-screenshot-status">
                    <span class="feedback-spinner"></span>
                    <span>Generuji snímek obrazovky, vyčkejte prosím...</span>
                  </div>
                  
                  <div id="feedback-screenshot-preview" class="feedback-screenshot-preview" style="display: none;">
                    <img id="feedback-screenshot-img" src="" alt="Screenshot Preview" />
                  </div>
                </div>
                
                <div id="feedback-error-message" class="feedback-error-text" style="display: none;"></div>
                
                <div class="feedback-modal-footer">
                  <button type="button" id="feedback-modal-cancel" class="feedback-btn-cancel">Zrušit</button>
                  <button type="submit" id="feedback-modal-submit" class="feedback-btn-submit">
                    <span>Odeslat</span>
                  </button>
                </div>
              </form>
            `;
            // Znovu navážeme event handlery na nový formulář
            const form = document.getElementById('feedback-form-element');
            if (form) form.addEventListener('submit', handleFormSubmit);
            const cancel = document.getElementById('feedback-modal-cancel');
            if (cancel) cancel.addEventListener('click', closeModal);
            const chbox = document.getElementById('feedback-include-screenshot-checkbox');
            if (chbox) {
              chbox.addEventListener('change', function (e) {
                const preview = document.getElementById('feedback-screenshot-preview');
                if (preview && screenshotBase64) {
                  preview.style.display = e.target.checked ? 'block' : 'none';
                }
              });
            }
          }
        }, 300);
      }, 2000);
    })
    .catch(function (err) {
      console.error('Chyba při odesílání feedbacku:', err);
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<span>Odeslat</span>';
      }
      if (errorText) {
        errorText.style.display = 'block';
        errorText.innerHTML = 'Odeslání selhalo. Zkuste to prosím znovu.';
      }
    });
  }

  // Support Popup logic
  function initSupportPopup() {
    // Pro klid v duši a eliminaci zbytečného otravování uživatelů
    const dismissedUntil = localStorage.getItem('support_popup_dismissed_until');
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) {
      return;
    }
    if (sessionStorage.getItem('support_popup_shown_session')) {
      return;
    }

    // Zobrazení po 45 sekundách aktivního prohlížení
    setTimeout(function() {
      // Vytvoření elementu pop-upu
      const popupHtml = `
        <div id="support-popup-toast" class="support-popup-toast">
          <div class="support-popup-header">
            <h4 class="support-popup-title">Líbí se ti portál? ☕</h4>
            <button id="support-popup-close" class="support-popup-close-btn" aria-label="Zavřít">&times;</button>
          </div>
          <p class="support-popup-body">
            Ahoj! Pokud ti tenhle portál pomáhá při studiu a šetří čas, zvaž prosím drobnou podporu na Ko-fi. Každý příspěvek mi pomáhá s provozem a dalším vylepšováním. Děkuju! ❤️
          </p>
          <div class="support-popup-footer">
            <a href="https://ko-fi.com/violkadev" target="_blank" id="support-popup-kofi-btn" class="support-popup-btn-kofi">
              <span>Podpořit na Ko-fi</span>
              <span>☕</span>
            </a>
            <button id="support-popup-later-btn" class="support-popup-btn-later">Později</button>
          </div>
        </div>
      `;
      document.body.insertAdjacentHTML('beforeend', popupHtml);
      
      const toast = document.getElementById('support-popup-toast');
      const closeBtn = document.getElementById('support-popup-close');
      const kofiBtn = document.getElementById('support-popup-kofi-btn');
      const laterBtn = document.getElementById('support-popup-later-btn');

      // Animace zobrazení
      setTimeout(function() {
        if (toast) toast.classList.add('show');
      }, 100);

      function dismissPopup(days) {
        localStorage.setItem('support_popup_dismissed_until', Date.now() + days * 24 * 60 * 60 * 1000);
        sessionStorage.setItem('support_popup_shown_session', 'true');
        if (toast) {
          toast.classList.remove('show');
          setTimeout(function() {
            toast.remove();
          }, 400);
        }
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', function() { dismissPopup(30); }); // 30 dní klid
      }
      if (laterBtn) {
        laterBtn.addEventListener('click', function() { dismissPopup(7); });   // 7 dní klid
      }
      if (kofiBtn) {
        kofiBtn.addEventListener('click', function() { dismissPopup(90); });  // 90 dní klid
      }
    }, 45000);
  }

  // Spuštění inicializace pop-upu
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSupportPopup);
  } else {
    initSupportPopup();
  }
})();
