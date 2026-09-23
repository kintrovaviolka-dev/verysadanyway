/**
 * presentation.js - Controlador de la presentación de Insuficiencia Cardíaca ESC 2026
 * Cátedra de Medicina Interna I (7º Semestre)
 */

document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const slides = Array.from(document.querySelectorAll('.slide'));
  const totalSlides = slides.length;
  let currentSlide = 1;

  const progressBar = document.getElementById('progressBar');
  const slideIndicator = document.getElementById('slideIndicator');
  const slideDots = document.getElementById('slideDots');

  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnFullscreen = document.getElementById('btnFullscreen');
  const btnGrid = document.getElementById('btnGrid');
  const btnNotes = document.getElementById('btnNotes');

  const gridModal = document.getElementById('gridModal');
  const gridBackdrop = document.getElementById('gridBackdrop');
  const btnCloseGrid = document.getElementById('btnCloseGrid');
  const gridThumbnails = document.getElementById('gridThumbnails');

  const notesDrawer = document.getElementById('notesDrawer');
  const btnCloseNotes = document.getElementById('btnCloseNotes');
  const notesContent = document.getElementById('notesContent');

  const leftTouch = document.getElementById('leftTouch');
  const rightTouch = document.getElementById('rightTouch');

  // Generate dots in footer
  function renderDots() {
    slideDots.innerHTML = '';
    for (let i = 1; i <= totalSlides; i++) {
      const dot = document.createElement('div');
      dot.className = `dot ${i === currentSlide ? 'active' : ''}`;
      dot.title = `Ir a diapositiva ${i}`;
      dot.addEventListener('click', () => goToSlide(i));
      slideDots.appendChild(dot);
    }
  }

  // Generate thumbnails for overview grid
  function renderThumbnails() {
    gridThumbnails.innerHTML = '';
    slides.forEach((slide, index) => {
      const slideNum = index + 1;
      const titleElem = slide.querySelector('.slide-title') || slide.querySelector('.hero-title');
      const titleText = titleElem ? titleElem.innerText.replace(/\n/g, ' ') : `Diapositiva ${slideNum}`;

      const card = document.createElement('div');
      card.className = `thumbnail-card ${slideNum === currentSlide ? 'active-thumb' : ''}`;
      card.innerHTML = `
        <span class="thumb-num">SLIDE ${slideNum.toString().padStart(2, '0')}</span>
        <span class="thumb-title">${titleText}</span>
      `;
      card.addEventListener('click', () => {
        goToSlide(slideNum);
        closeGrid();
      });
      gridThumbnails.appendChild(card);
    });
  }

  // Core navigation function
  window.goToSlide = function(targetIndex) {
    if (targetIndex < 1 || targetIndex > totalSlides || targetIndex === currentSlide) return;

    const previousSlide = currentSlide;
    currentSlide = targetIndex;

    slides.forEach((slide, index) => {
      const slideNum = index + 1;
      slide.classList.remove('active', 'prev');
      if (slideNum === currentSlide) {
        slide.classList.add('active');
      } else if (slideNum < currentSlide) {
        slide.classList.add('prev');
      }
    });

    // Update progress bar
    const progressPercent = (currentSlide / totalSlides) * 100;
    progressBar.style.width = `${progressPercent}%`;

    // Update indicators
    slideIndicator.innerText = `${currentSlide} / ${totalSlides}`;

    // Update buttons state
    btnPrev.disabled = (currentSlide === 1);
    btnNext.disabled = (currentSlide === totalSlides);
    if (currentSlide === totalSlides) {
      btnNext.querySelector('span').innerText = 'Fin';
    } else {
      btnNext.querySelector('span').innerText = 'Siguiente';
    }

    // Update dots
    const allDots = slideDots.querySelectorAll('.dot');
    allDots.forEach((d, idx) => {
      d.classList.toggle('active', idx + 1 === currentSlide);
    });

    // Update thumbnails in modal
    const allThumbs = gridThumbnails.querySelectorAll('.thumbnail-card');
    allThumbs.forEach((th, idx) => {
      th.classList.toggle('active-thumb', idx + 1 === currentSlide);
    });

    // Update speaker notes
    updateNotes();

    // Reset slide scroll position
    const currentSlideContent = slides[currentSlide - 1].querySelector('.slide-content');
    if (currentSlideContent) currentSlideContent.scrollTop = 0;
  };

  function nextSlide() {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1);
    }
  }

  function prevSlide() {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  }

  // Speaker notes
  function updateNotes() {
    const activeSlide = slides[currentSlide - 1];
    const notesText = activeSlide.getAttribute('data-notes') || 'No hay notas para esta diapositiva.';
    notesContent.innerHTML = `<p><strong>[Diapositiva ${currentSlide}]:</strong> ${notesText}</p>`;
  }

  function toggleNotes() {
    notesDrawer.classList.toggle('open');
  }

  // Grid modal
  function openGrid() {
    renderThumbnails();
    gridModal.classList.add('open');
  }

  function closeGrid() {
    gridModal.classList.remove('open');
  }

  // Fullscreen toggle
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.log(err));
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    // If modal is open, Escape closes it
    if (e.key === 'Escape') {
      if (gridModal.classList.contains('open')) {
        closeGrid();
        return;
      }
      if (notesDrawer.classList.contains('open')) {
        notesDrawer.classList.remove('open');
        return;
      }
    }

    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
      e.preventDefault();
      prevSlide();
    } else if (e.key === 'Home') {
      e.preventDefault();
      goToSlide(1);
    } else if (e.key === 'End') {
      e.preventDefault();
      goToSlide(totalSlides);
    } else if (e.key === 'g' || e.key === 'G') {
      e.preventDefault();
      if (gridModal.classList.contains('open')) closeGrid(); else openGrid();
    } else if (e.key === 'n' || e.key === 'N') {
      e.preventDefault();
      toggleNotes();
    } else if (e.key === 'f' || e.key === 'F') {
      e.preventDefault();
      toggleFullscreen();
    }
  });

  // Touch & Swipe gesture handling
  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].screenX;
    const touchEndY = e.changedTouches[0].screenY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    // Horizontal swipe threshold
    if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX < 0) {
        nextSlide(); // Swipe Left -> Next
      } else {
        prevSlide(); // Swipe Right -> Prev
      }
    }
  }, { passive: true });

  // Tap zones
  leftTouch.addEventListener('click', prevSlide);
  rightTouch.addEventListener('click', nextSlide);

  // Button clicks
  btnPrev.addEventListener('click', prevSlide);
  btnNext.addEventListener('click', nextSlide);
  btnFullscreen.addEventListener('click', toggleFullscreen);
  btnGrid.addEventListener('click', openGrid);
  btnCloseGrid.addEventListener('click', closeGrid);
  gridBackdrop.addEventListener('click', closeGrid);
  btnNotes.addEventListener('click', toggleNotes);
  btnCloseNotes.addEventListener('click', () => notesDrawer.classList.remove('open'));

  // Initialize
  renderDots();
  renderThumbnails();
  updateNotes();
  btnPrev.disabled = true;
});

// Interactive Case Options Handler (Global)
window.handleCaseAnswer = function(buttonElem, caseNumber, isCorrect) {
  const container = buttonElem.closest('.case-interactive-panel');
  const allButtons = container.querySelectorAll('.case-opt-btn');
  const feedbackElem = document.getElementById(`caseFeedback${caseNumber}`);

  allButtons.forEach(btn => {
    btn.disabled = true;
    if (btn.getAttribute('data-correct') === 'true') {
      btn.classList.add('correct-ans');
    }
  });

  if (!isCorrect) {
    buttonElem.classList.add('wrong-ans');
  }

  feedbackElem.className = 'case-feedback show-feedback ' + (isCorrect ? 'fb-correct' : 'fb-wrong');

  if (caseNumber === 1) {
    if (isCorrect) {
      feedbackElem.innerHTML = `<strong>✓ ¡Excelente Razonamiento Clínico!</strong><br>
        En la ICFEr de novo tras un infarto agudo de miocardio con FEVI 34%, las <em>Guías ESC 2026</em> recomiendan iniciar precozmente la <strong>Terapia Médica Fundamental de los 4 Pilares</strong> (ARNI + Betabloqueante + ARM + iSGLT2) a dosis bajas antes del alta hospitalaria. Retrasar el inicio incrementa significativamente el riesgo de muerte súbita y reingreso hospitalario precoz.`;
    } else {
      feedbackElem.innerHTML = `<strong>✗ Opción Incorrecta:</strong><br>
        La estrategia histórica de esperar meses entre fármacos está obsoleta y aumenta la mortalidad. Además, fármacos como verapamilo o diltiazem están formalmente contraindicados en ICFEr debido a su potente efecto inotrópico negativo. La conducta correcta es el inicio simultáneo rápido de los 4 pilares.`;
    }
  } else if (caseNumber === 2) {
    if (isCorrect) {
      feedbackElem.innerHTML = `<strong>✓ ¡Respuesta Correcta!</strong><br>
        En la ICFEp (FEVI 58%) con fenotipo cardiometabólico (obesidad, diabetes, HTA), los <strong>iSGLT2 (Empagliflozina/Dapagliflozina)</strong> son fármacos de <strong>Clase I, A</strong> para reducir hospitalizaciones y muerte cardiovascular. La <strong>Espironolactona (ARM)</strong> reduce la rigidez miocárdica y la <strong>Semaglutida/Tirzepatida</strong> proporciona un beneficio masivo en calidad de vida, pérdida ponderal y reducción de sobrecarga pericárdica.`;
    } else {
      feedbackElem.innerHTML = `<strong>✗ Opción Incorrecta:</strong><br>
        Hoy en día la ICFEp ya no carece de fármacos pronósticos. Los ensayos <em>EMPEROR-Preserved</em>, <em>DELIVER</em> y <em>STEP-HFpEF</em> han demostrado que los iSGLT2 y los análogos de GLP-1 son indispensables para frenar el remodelado y mejorar los síntomas y la supervivencia.`;
    }
  }
};
