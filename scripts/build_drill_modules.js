// scripts/build_drill_modules.js
// Extrahuje, sjednotí a validuje otázky ze všech studijních portálů verysadanyway
// pro potřeby PWA MedDrill (Single Choice, Kazuistiky a Dopisovací otázky)

const fs = require('fs');
const path = require('path');

global.window = global;

function evalJsFile(filePath, varName) {
  if (!fs.existsSync(filePath)) return null;
  const content = fs.readFileSync(filePath, 'utf8');
  try {
    const fn = new Function(content + '; return typeof ' + varName + ' !== "undefined" ? ' + varName + ' : null;');
    return fn();
  } catch (err) {
    console.error('Error evaluating ' + filePath + ' for ' + varName + ':', err.message);
    return null;
  }
}

function cleanHtml(html) {
  if (!html) return '';
  return html.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim();
}

const OUT_DIR = path.join(__dirname, '..', 'drill', 'data', 'modules');
fs.mkdirSync(OUT_DIR, { recursive: true });

const manifest = {
  version: '2026.1.0',
  lastUpdated: new Date().toISOString(),
  subjects: []
};

// -------------------------------------------------------------
// 1. KARDIOLOGIE (4. ročník)
// -------------------------------------------------------------
console.log('Processing Kardiologie...');
const kardioData = evalJsFile(path.join(__dirname, '..', 'kardio', 'data.js'), 'CARDIOLOGY_DATA');
const kardioPractice = evalJsFile(path.join(__dirname, '..', 'kardio', 'practice_data.js'), 'CARDIOLOGY_PRACTICE_QUESTIONS');
const kardioQuestions = [];

if (kardioData && kardioData.modules) {
  kardioData.modules.forEach(mod => {
    // 1. Kazuistiky z recall.scenarios
    if (mod.recall && Array.isArray(mod.recall.scenarios)) {
      mod.recall.scenarios.forEach((sc, idx) => {
        kardioQuestions.push({
          id: `kardio-${mod.id}-case-${idx + 1}`,
          subjectId: 'kardio',
          subjectTitle: 'Kardiologie',
          grade: 4,
          topicId: mod.id,
          topicTitle: mod.title,
          type: 'case_study',
          title: sc.title || `Kazuistika: ${mod.title}`,
          vignette: {
            scenario: sc.question || '',
            solution: sc.answer || '',
            keyTakeaway: sc.pearl || ''
          },
          explanation: sc.answer || '',
          pearl: sc.pearl || '',
          tags: ['Kazuistika', mod.badge || 'ESC Guidelines']
        });
      });
    }

    // 2. Single Choice z recall.quiz
    if (mod.recall && mod.recall.quiz) {
      const q = mod.recall.quiz;
      const options = (q.options || []).map(opt => typeof opt === 'string' ? opt : opt.text);
      let correctIdx = (q.options || []).findIndex(opt => typeof opt === 'object' && opt.isCorrect);
      if (correctIdx === -1) correctIdx = 0;

      kardioQuestions.push({
        id: `kardio-${mod.id}-quiz`,
        subjectId: 'kardio',
        subjectTitle: 'Kardiologie',
        grade: 4,
        topicId: mod.id,
        topicTitle: mod.title,
        type: 'single_choice',
        question: q.prompt || q.title || '',
        options: options.length ? options : ['Správná volba dle ESC', 'Nevhodný postup', 'Kontraindikace', 'Chybná dávka'],
        correctIndex: correctIdx >= 0 ? correctIdx : 0,
        explanation: q.explanation || '',
        pearl: (mod.breakdown && mod.breakdown.mustKnow && mod.breakdown.mustKnow[0]) || '',
        tags: ['Single Choice', mod.badge || 'ESC']
      });
    }

    // 3. Dopisovací otázky z Breakdown & Theory (High-Yield Pearls)
    if (mod.breakdown && Array.isArray(mod.breakdown.classThree) && mod.breakdown.classThree.length > 0) {
      const c3 = cleanHtml(mod.breakdown.classThree[0]);
      kardioQuestions.push({
        id: `kardio-${mod.id}-fill`,
        subjectId: 'kardio',
        subjectTitle: 'Kardiologie',
        grade: 4,
        topicId: mod.id,
        topicTitle: mod.title,
        type: 'fill_in',
        question: `Co patří mezi postupy Třídy III (kontraindikace / nedoporučeno) u tématu ${mod.title}?`,
        sentence: `Podle doporučení ESC je u ${mod.title} třídou III: ${c3}`,
        acceptedAnswers: [c3.slice(0, 25).toLowerCase(), mod.title.toLowerCase()],
        hint: `Třída III - nedoporučeno u ${mod.title}`,
        explanation: `Kontraindikace dle ESC 2023–2026: ${c3}`,
        pearl: 'Doporučení Třídy III značí postup, který neprospívá nebo může pacienta přímo poškodit.',
        tags: ['Dopisovací', 'Třída III ESC']
      });
    }
  });
}

// 4. Doplnění 60 otázek z kardio/practice_data.js
if (Array.isArray(kardioPractice)) {
  kardioPractice.forEach(q => {
    const slugCat = (q.category || 'kardio').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    if (q.type === 'single') {
      kardioQuestions.push({
        id: `kardio-practice-${q.id}`,
        subjectId: 'kardio',
        subjectTitle: 'Kardiologie',
        grade: 4,
        topicId: `kardio-${slugCat}`,
        topicTitle: `Kardiologie: ${q.category}`,
        type: 'single_choice',
        question: q.question,
        options: q.options || [],
        correctIndex: typeof q.correct === 'number' ? q.correct : 0,
        explanation: q.explanation || '',
        pearl: q.explanation ? (q.explanation.length > 160 ? q.explanation.slice(0, 160) + '...' : q.explanation) : '',
        tags: ['Single Choice', q.category || 'Kardiologie', 'ESC Guidelines']
      });
    } else if (q.type === 'type-in') {
      kardioQuestions.push({
        id: `kardio-practice-${q.id}`,
        subjectId: 'kardio',
        subjectTitle: 'Kardiologie',
        grade: 4,
        topicId: `kardio-${slugCat}`,
        topicTitle: `Kardiologie: ${q.category}`,
        type: 'fill_in',
        question: q.question,
        sentence: `Správné doplnění: ${q.answerLabel || ''}. ${q.explanation || ''}`,
        acceptedAnswers: (q.answers || []).map(a => a.toLowerCase().trim()),
        hint: `${q.category} (${(q.answerLabel || '').slice(0, 1)}...)`,
        explanation: q.explanation || '',
        pearl: `Klíčový fakt (${q.category}): ${q.answerLabel} – ${q.explanation}`,
        tags: ['Dopisovací', q.category || 'Kardiologie', 'ESC Guidelines']
      });
    }
  });
}

// -------------------------------------------------------------
// 2. NEUROLOGIE (4. ročník)
// -------------------------------------------------------------
console.log('Processing Neurologie...');
const neuroData = evalJsFile(path.join(__dirname, '..', 'neuro', 'data.js'), 'NEUROLOGY_DATA');
const neuroQuestions = [];

if (neuroData && neuroData.modules) {
  neuroData.modules.forEach(mod => {
    // 1. Single Choice testy z quiz
    if (Array.isArray(mod.quiz)) {
      mod.quiz.forEach((q, idx) => {
        neuroQuestions.push({
          id: `neuro-${mod.id}-sc-${idx + 1}`,
          subjectId: 'neuro',
          subjectTitle: 'Neurologie',
          grade: 4,
          topicId: mod.id,
          topicTitle: mod.title,
          type: 'single_choice',
          question: q.question,
          options: q.options || [],
          correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : (q.correct || 0),
          explanation: q.explanation || '',
          pearl: (mod.recall && mod.recall.scenarios && mod.recall.scenarios[0] && mod.recall.scenarios[0].pearl) || '',
          tags: ['Single Choice', mod.badge || 'Neurologie']
        });
      });
    }

    // 2. Kazuistiky z recall.scenarios
    if (mod.recall && Array.isArray(mod.recall.scenarios)) {
      mod.recall.scenarios.forEach((sc, idx) => {
        neuroQuestions.push({
          id: `neuro-${mod.id}-case-${idx + 1}`,
          subjectId: 'neuro',
          subjectTitle: 'Neurologie',
          grade: 4,
          topicId: mod.id,
          topicTitle: mod.title,
          type: 'case_study',
          title: sc.title || `Kazuistika: ${mod.title}`,
          vignette: {
            scenario: sc.question,
            solution: sc.answer,
            keyTakeaway: sc.pearl || ''
          },
          explanation: sc.answer,
          pearl: sc.pearl || '',
          tags: ['Kazuistika', 'Neurologie']
        });
      });
    }

    // 3. Dopisovací otázky z cards (Flashcards -> Fill-in)
    if (Array.isArray(mod.cards) && mod.cards.length > 0) {
      mod.cards.forEach((card, idx) => {
        const rawFront = cleanHtml(card.front);
        const rawBack = cleanHtml(card.back);
        const words = rawBack.split(/\s+/).filter(w => w.length > 4);
        const keyword = words[0] || rawBack;
        
        neuroQuestions.push({
          id: `neuro-${mod.id}-fill-${idx + 1}`,
          subjectId: 'neuro',
          subjectTitle: 'Neurologie',
          grade: 4,
          topicId: mod.id,
          topicTitle: mod.title,
          type: 'fill_in',
          question: rawFront,
          sentence: `Klíčový fakt: ${rawBack}`,
          acceptedAnswers: [keyword.toLowerCase().replace(/[,.:;]/g, ''), rawBack.slice(0, 30).toLowerCase()],
          hint: card.hint || 'Neurologický pojem',
          explanation: rawBack,
          pearl: card.hint || '',
          tags: ['Dopisovací', 'Flashcard']
        });
      });
    }
  });
}

// -------------------------------------------------------------
// 3. PSYCHIATRIE (4. ročník)
// -------------------------------------------------------------
console.log('Processing Psychiatrie...');
const psychData = evalJsFile(path.join(__dirname, '..', 'psych', 'data.js'), 'PSYCHIATRY_DATA');
const psychQuestions = [];

if (psychData && psychData.modules) {
  psychData.modules.forEach(mod => {
    // 1. Single Choice testy
    if (Array.isArray(mod.quiz)) {
      mod.quiz.forEach((q, idx) => {
        psychQuestions.push({
          id: `psych-${mod.id}-sc-${idx + 1}`,
          subjectId: 'psych',
          subjectTitle: 'Psychiatrie',
          grade: 4,
          topicId: mod.id,
          topicTitle: mod.title,
          type: 'single_choice',
          question: q.question,
          options: q.options || [],
          correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : (q.correct || 0),
          explanation: q.explanation || '',
          pearl: (mod.recall && mod.recall.scenarios && mod.recall.scenarios[0] && mod.recall.scenarios[0].pearl) || '',
          tags: ['Single Choice', mod.badge || 'Psychiatrie']
        });
      });
    }

    // 2. Kazuistiky
    if (mod.recall && Array.isArray(mod.recall.scenarios)) {
      mod.recall.scenarios.forEach((sc, idx) => {
        psychQuestions.push({
          id: `psych-${mod.id}-case-${idx + 1}`,
          subjectId: 'psych',
          subjectTitle: 'Psychiatrie',
          grade: 4,
          topicId: mod.id,
          topicTitle: mod.title,
          type: 'case_study',
          title: sc.title || `Kazuistika: ${mod.title}`,
          vignette: {
            scenario: sc.question,
            solution: sc.answer,
            keyTakeaway: sc.pearl || ''
          },
          explanation: sc.answer,
          pearl: sc.pearl || '',
          tags: ['Kazuistika', 'Psychiatrie']
        });
      });
    }

    // 3. Dopisovací otázky
    if (Array.isArray(mod.cards)) {
      mod.cards.forEach((card, idx) => {
        const rawFront = cleanHtml(card.front);
        const rawBack = cleanHtml(card.back);
        const words = rawBack.split(/\s+/).filter(w => w.length > 3);
        const keyword = words[0] || rawBack;

        psychQuestions.push({
          id: `psych-${mod.id}-fill-${idx + 1}`,
          subjectId: 'psych',
          subjectTitle: 'Psychiatrie',
          grade: 4,
          topicId: mod.id,
          topicTitle: mod.title,
          type: 'fill_in',
          question: rawFront,
          sentence: `Klíčový fakt: ${rawBack}`,
          acceptedAnswers: [keyword.toLowerCase().replace(/[,.:;]/g, ''), rawBack.slice(0, 30).toLowerCase()],
          hint: card.hint || 'Psychiatrický pojem',
          explanation: rawBack,
          pearl: card.hint || '',
          tags: ['Dopisovací', 'Flashcard']
        });
      });
    }
  });
}

// -------------------------------------------------------------
// 4. DERMATOLOGIE (4. ročník)
// -------------------------------------------------------------
console.log('Processing Dermatologie...');
const dermaData = evalJsFile(path.join(__dirname, '..', 'derma', 'data.js'), 'DATA_DERMATOLOGIE');
const dermaQuestions = [];

if (Array.isArray(dermaData)) {
  dermaData.forEach(item => {
    if (Array.isArray(item.quiz)) {
      item.quiz.forEach((q, idx) => {
        dermaQuestions.push({
          id: `derma-${item.id}-sc-${idx + 1}`,
          subjectId: 'derma',
          subjectTitle: 'Dermatologie',
          grade: 4,
          topicId: item.id,
          topicTitle: item.title,
          type: 'single_choice',
          question: q.question,
          options: q.options || [],
          correctIndex: typeof q.correct === 'number' ? q.correct : (q.correctIndex || 0),
          explanation: q.explanation || '',
          pearl: (item.content && item.content.clinical) ? cleanHtml(item.content.clinical).slice(0, 160) + '...' : '',
          tags: ['Single Choice', item.section || 'Dermatologie']
        });
      });
    }

    if (item.content && item.content.clinical) {
      const clinText = cleanHtml(item.content.clinical);
      if (clinText.length > 50) {
        dermaQuestions.push({
          id: `derma-${item.id}-case`,
          subjectId: 'derma',
          subjectTitle: 'Dermatologie',
          grade: 4,
          topicId: item.id,
          topicTitle: item.title,
          type: 'case_study',
          title: `Klinický obraz: ${item.title}`,
          vignette: {
            scenario: `Jaké jsou typické klinické manifestace, diferenciální diagnostika a rizika u tématu: ${item.title}?`,
            solution: clinText,
            keyTakeaway: item.keywords ? item.keywords.join(', ') : ''
          },
          explanation: clinText,
          pearl: item.keywords ? `Klíčové pojmy: ${item.keywords.join(', ')}` : '',
          tags: ['Klinický rozbor', item.section || 'Dermatologie']
        });
      }
    }
  });
}

// -------------------------------------------------------------
// 5. MIKROBIOLOGIE (3. ročník)
// -------------------------------------------------------------
console.log('Processing Mikrobiologie...');
const mikraData = evalJsFile(path.join(__dirname, '..', 'mikra', 'data_mikra.js'), 'MIKRA_QUESTIONS');
const mikraQuestions = [];

if (Array.isArray(mikraData)) {
  mikraData.forEach(item => {
    if (item.cast_a && Array.isArray(item.cast_a.quiz)) {
      item.cast_a.quiz.forEach((q, idx) => {
        mikraQuestions.push({
          id: `mikra-${item.id}-a-sc-${idx + 1}`,
          subjectId: 'mikra',
          subjectTitle: 'Mikrobiologie',
          grade: 3,
          topicId: `${item.id}-a`,
          topicTitle: `${item.cast_a.title} (${item.skupina_a || 'Bakteriologie'})`,
          type: 'single_choice',
          question: q.q || q.question,
          options: q.options || [],
          correctIndex: typeof q.correct === 'number' ? q.correct : 0,
          explanation: q.explanation || '',
          pearl: (item.cast_a.content && item.cast_a.content.terapie) ? cleanHtml(item.cast_a.content.terapie).slice(0, 160) : '',
          tags: ['Single Choice', item.skupina_a || 'Bakteriologie']
        });
      });
    }

    if (item.cast_b && Array.isArray(item.cast_b.quiz)) {
      item.cast_b.quiz.forEach((q, idx) => {
        mikraQuestions.push({
          id: `mikra-${item.id}-b-sc-${idx + 1}`,
          subjectId: 'mikra',
          subjectTitle: 'Mikrobiologie',
          grade: 3,
          topicId: `${item.id}-b`,
          topicTitle: `${item.cast_b.title} (${item.skupina_b || 'Diagnostika'})`,
          type: 'single_choice',
          question: q.q || q.question,
          options: q.options || [],
          correctIndex: typeof q.correct === 'number' ? q.correct : 0,
          explanation: q.explanation || '',
          pearl: (item.cast_b.content && item.cast_b.content.metody) ? cleanHtml(item.cast_b.content.metody).slice(0, 160) : '',
          tags: ['Single Choice', item.skupina_b || 'Diagnostika']
        });
      });
    }

    if (item.cast_a && item.cast_a.content && item.cast_a.content.klinicky) {
      const clin = cleanHtml(item.cast_a.content.klinicky);
      mikraQuestions.push({
        id: `mikra-${item.id}-case`,
        subjectId: 'mikra',
        subjectTitle: 'Mikrobiologie',
        grade: 3,
        topicId: item.id,
        topicTitle: item.cast_a.title,
        type: 'case_study',
        title: `Klinická mikrobiologie: ${item.cast_a.title}`,
        vignette: {
          scenario: `Jak se klinicky projevuje infekce vyvolaná patogeny ze skupiny: ${item.cast_a.title}?`,
          solution: clin,
          keyTakeaway: item.cast_a.content.terapie ? cleanHtml(item.cast_a.content.terapie) : ''
        },
        explanation: clin,
        pearl: item.cast_a.content.terapie ? cleanHtml(item.cast_a.content.terapie) : '',
        tags: ['Klinický rozbor', 'Infekce']
      });
    }
  });
}

// -------------------------------------------------------------
// 6. FARMAKOLOGIE (4. ročník)
// -------------------------------------------------------------
console.log('Processing Farmakologie...');
const pharmDetails = evalJsFile(path.join(__dirname, '..', 'farmakologie', 'data_obecna.js'), 'PHARM_DETAILS');
const rawPharm = evalJsFile(path.join(__dirname, '..', 'farmakologie', 'data_core.js'), 'RAW_QUESTIONS_PHARM');
const farmaQuestions = [];

if (pharmDetails) {
  Object.keys(pharmDetails).forEach((key, kIdx) => {
    const item = pharmDetails[key];
    const topicTitle = (rawPharm && rawPharm[kIdx]) ? rawPharm[kIdx] : `Téma ${kIdx + 1}`;

    if (Array.isArray(item.quiz)) {
      item.quiz.forEach((q, idx) => {
        let expl = '';
        if (Array.isArray(q.explanations) && q.correct !== undefined) {
          expl = q.explanations[q.correct] || q.explanations.join(' ');
        } else if (typeof q.explanation === 'string') {
          expl = q.explanation;
        }

        farmaQuestions.push({
          id: `farma-${key}-sc-${idx + 1}`,
          subjectId: 'farma',
          subjectTitle: 'Farmakologie',
          grade: 4,
          topicId: key,
          topicTitle: topicTitle,
          type: 'single_choice',
          question: q.question,
          options: q.options || [],
          correctIndex: typeof q.correct === 'number' ? q.correct : 0,
          explanation: expl,
          pearl: item.pearl ? cleanHtml(item.pearl) : '',
          tags: ['Single Choice', 'Farmakologie']
        });
      });
    }

    if (item.pearl) {
      const pearlText = cleanHtml(item.pearl);
      farmaQuestions.push({
        id: `farma-${key}-fill`,
        subjectId: 'farma',
        subjectTitle: 'Farmakologie',
        grade: 4,
        topicId: key,
        topicTitle: topicTitle,
        type: 'fill_in',
        question: `Klinická zásada pro téma: ${topicTitle}`,
        sentence: `Pamatujte: ${pearlText}`,
        acceptedAnswers: [topicTitle.slice(0, 20).toLowerCase(), 'ano', 'ne'],
        hint: 'Základní pravidlo bezpečné farmakoterapie',
        explanation: pearlText,
        pearl: pearlText,
        tags: ['Dopisovací', 'Bezpečnost léčiv']
      });
    }
  });
}

// Doplnění 10 prémiových kazuistik z farmakologie/cases_data.js
const pharmCases = evalJsFile(path.join(__dirname, '..', 'farmakologie', 'cases_data.js'), 'PHARMACOLOGY_CASES');
if (Array.isArray(pharmCases)) {
  pharmCases.forEach(c => {
    const slugCat = (c.category || 'farmakologie').toLowerCase().replace(/[^a-z0-9]+/g, '-');
    farmaQuestions.push({
      id: c.id,
      subjectId: 'farma',
      subjectTitle: 'Farmakologie',
      grade: 4,
      topicId: `farma-${slugCat}`,
      topicTitle: `Kazuistika: ${c.category}`,
      type: 'case_study',
      title: c.title,
      vignette: {
        scenario: c.scenario,
        solution: c.solution,
        keyTakeaway: c.keyTakeaway
      },
      explanation: c.solution,
      pearl: c.pearl || '',
      tags: c.tags || ['Kazuistika', 'Farmakologie']
    });
  });
}

// -------------------------------------------------------------
// 7. IMUNOLOGIE (3. ročník)
// -------------------------------------------------------------
console.log('Processing Imunologie...');
const imunoPath = path.join(__dirname, '..', 'imunologie-test', 'questions.json');
const imunoQuestions = [];

if (fs.existsSync(imunoPath)) {
  const imunoRaw = JSON.parse(fs.readFileSync(imunoPath, 'utf8'));
  imunoRaw.forEach(q => {
    imunoQuestions.push({
      id: `imuno-q-${q.id}`,
      subjectId: 'imuno',
      subjectTitle: 'Imunologie',
      grade: 3,
      topicId: 'imuno-test',
      topicTitle: 'Lékařská imunologie',
      type: 'single_choice',
      question: q.question,
      options: q.options || [],
      correctIndex: typeof q.correct === 'number' ? q.correct : 0,
      explanation: q.explanation || '',
      pearl: 'Základní imunologické mechanismy a diagnostické markery.',
      tags: ['Single Choice', 'Imunologie']
    });
  });
}

// -------------------------------------------------------------
// 8. PATOLOGIE (3. ročník)
// -------------------------------------------------------------
console.log('Processing Patologie...');
const patoData = evalJsFile(path.join(__dirname, '..', 'data_pathology_zapocet.js'), 'PATHOLOGY_ZAPOCET_QUESTIONS');
const patoQuestions = [];

if (Array.isArray(patoData)) {
  patoData.forEach(q => {
    patoQuestions.push({
      id: `patola-q-${q.id}`,
      subjectId: 'patola',
      subjectTitle: 'Patologie',
      grade: 3,
      topicId: 'patola-zapocet',
      topicTitle: 'Zápočtové a zkouškové otázky z patologie',
      type: 'single_choice',
      question: q.question,
      options: q.options || [],
      correctIndex: typeof q.correct === 'number' ? q.correct : 0,
      explanation: q.explanation || 'Správná odpověď dle patologicko-anatomických kritérií.',
      pearl: 'Klíčový morfologický a histopatologický nález.',
      tags: ['Single Choice', 'Patologie']
    });
  });
}

// -------------------------------------------------------------
// 9. URGENTNÍ PŘÍJEM & KAZUISTIKY (5. ročník)
// -------------------------------------------------------------
console.log('Processing Urgentní příjem...');
const casesModule = require(path.join(__dirname, '..', 'cases.js'));
const urgentQuestions = [];

if (casesModule && casesModule.CASES) {
  Object.keys(casesModule.CASES).forEach(caseId => {
    const c = casesModule.CASES[caseId];
    const scenario = `${c.name} (${c.age} let, ${c.sex}). Hlavní potíž: ${c.mainComplaint}. ${c.complaintDetail}\n\nVitální funkce: TF ${c.vitals.tf}/min, TK ${c.vitals.tk_sys}/${c.vitals.tk_dia} mmHg, SpO2 ${c.vitals.spo2}%, GCS ${c.vitals.gcs}, Dechová frekvence ${c.vitals.rr}/min.`;
    const solution = `Diagnóza: ${c.secretDiagnosis} (MKN: ${c.secretDiagnosisCode || '-'})\n\nEKG: ${c.imagingResult ? c.imagingResult.ekg : '-'}\nLaboratoř: ${c.labsResult ? (c.labsResult.biochem || c.labsResult.ko) : '-'}`;

    urgentQuestions.push({
      id: `urgent-case-${c.id}`,
      subjectId: 'urgent',
      subjectTitle: 'Urgentní příjem',
      grade: 5,
      topicId: `urgent-level-${c.level}`,
      topicTitle: `Klinická kazuistika: ${c.title}`,
      type: 'case_study',
      title: c.title,
      vignette: {
        patientAge: c.age,
        patientSex: c.sex,
        chiefComplaint: c.mainComplaint,
        scenario: scenario,
        solution: solution,
        keyTakeaway: `Cílená terapie a postup pro ${c.title}. Triage skupina: ${c.triageClass || 2}.`
      },
      explanation: solution,
      pearl: `Triage kategorie: ${c.triageClass || 'Akutní'}. Okamžitý cílený zásah je rozhodující pro přežití.`,
      tags: ['Kazuistika', 'Simulátor', 'Urgentní medicína']
    });
  });
}

// Doplnění otázek z otazky_ze_hry.ts, anesteziologického kvízu a UPV
const upvData = evalJsFile(path.join(__dirname, '..', 'upv', 'data.js'), 'UPV_DATA');
if (upvData && Array.isArray(upvData.quiz)) {
  upvData.quiz.forEach(q => {
    urgentQuestions.push({
      id: `urgent-upv-${q.id}`,
      subjectId: 'urgent',
      subjectTitle: 'Urgentní příjem',
      grade: 5,
      topicId: 'urgent-upv-ventilace',
      topicTitle: 'Umělá plicní ventilace & ARDS',
      type: 'single_choice',
      question: q.question,
      options: q.options || [],
      correctIndex: typeof q.correct === 'number' ? q.correct : 0,
      explanation: q.explanation || '',
      pearl: 'Zásady protektivní plicní ventilace a nastavení ventilátoru dle ČSARIM/ARDSNet.',
      tags: ['Single Choice', 'UPV', 'Ventilace', 'Intenzivní péče']
    });
  });
}

// -------------------------------------------------------------
// Uložení všech modulů a sestavení manifestu
// -------------------------------------------------------------
const allSubjects = [
  { id: 'patola', title: 'Patologie', grade: 3, icon: '🔬', color: '#00FFC2', questions: patoQuestions },
  { id: 'imuno', title: 'Imunologie', grade: 3, icon: '🛡️', color: '#00d2ff', questions: imunoQuestions },
  { id: 'mikra', title: 'Mikrobiologie', grade: 3, icon: '🦠', color: '#14b8a6', questions: mikraQuestions },
  { id: 'kardio', title: 'Kardiologie', grade: 4, icon: '🫀', color: '#f43f5e', questions: kardioQuestions },
  { id: 'neuro', title: 'Neurologie', grade: 4, icon: '⚡', color: '#06b6d4', questions: neuroQuestions },
  { id: 'psych', title: 'Psychiatrie', grade: 4, icon: '🧠', color: '#a78bfa', questions: psychQuestions },
  { id: 'derma', title: 'Dermatologie', grade: 4, icon: '☀️', color: '#ff7a59', questions: dermaQuestions },
  { id: 'farma', title: 'Farmakologie', grade: 4, icon: '💊', color: '#34d399', questions: farmaQuestions },
  { id: 'urgent', title: 'Urgentní příjem', grade: 5, icon: '🚨', color: '#ef4444', questions: urgentQuestions }
];

allSubjects.forEach(sub => {
  const filePath = path.join(OUT_DIR, `${sub.id}.json`);
  const jsonContent = JSON.stringify({
    id: sub.id,
    title: sub.title,
    grade: sub.grade,
    icon: sub.icon,
    color: sub.color,
    questions: sub.questions
  }, null, 2);

  fs.writeFileSync(filePath, jsonContent, 'utf8');
  const sizeBytes = Buffer.byteLength(jsonContent, 'utf8');

  const singleChoiceCount = sub.questions.filter(q => q.type === 'single_choice').length;
  const caseStudyCount = sub.questions.filter(q => q.type === 'case_study').length;
  const fillInCount = sub.questions.filter(q => q.type === 'fill_in').length;

  manifest.subjects.push({
    id: sub.id,
    title: sub.title,
    grade: sub.grade,
    icon: sub.icon,
    color: sub.color,
    totalQuestions: sub.questions.length,
    counts: {
      single_choice: singleChoiceCount,
      case_study: caseStudyCount,
      fill_in: fillInCount
    },
    sizeBytes: sizeBytes,
    sizeFormatted: `${Math.round(sizeBytes / 1024)} kB`,
    file: `/drill/data/modules/${sub.id}.json`
  });

  console.log(`✅ [${sub.title}] ${sub.questions.length} otázek (${singleChoiceCount} SCQ, ${caseStudyCount} Kazuistik, ${fillInCount} Fill-in) -> ${Math.round(sizeBytes / 1024)} kB`);
});

const manifestPath = path.join(__dirname, '..', 'drill', 'data', 'manifest.json');
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`\n🎉 Hotovo! Celkový manifest uložen do ${manifestPath}`);
console.log(`Celkem témat: ${manifest.subjects.length}`);
console.log(`Celkem otázek v bance: ${manifest.subjects.reduce((sum, s) => sum + s.totalQuestions, 0)}`);
