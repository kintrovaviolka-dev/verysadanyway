// feedback.js - Globální kód pro zpětnou vazbu se screenshotem napříč všemi statickými portály

(function () {
  let html2canvasLoaded = false;
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
              <textarea id="feedback-comment-input" class="feedback-textarea" placeholder="Popište chybu nebo navrhněte zlepšení..." required></textarea>
              
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

    // Dismiss with Escape key
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
    if (commentInput) {
      commentInput.value = '';
      commentInput.focus();
    }
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
    if (overlay) overlay.classList.remove('open');

    // Návrat fokusu na tlačítko, které modal otevřelo
    const triggerBtn = document.getElementById('feedback-trigger-btn');
    if (triggerBtn) triggerBtn.focus();
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
                <textarea id="feedback-comment-input" class="feedback-textarea" placeholder="Popište chybu nebo navrhněte zlepšení..." required></textarea>
                
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
})();
