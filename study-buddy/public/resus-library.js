// Every phone card is a crop of the rendered source diagram. The original PDF
// remains available alongside it, so the reader never substitutes a summary
// for the supplied algorithm.
export const RESUS_PHONE_PANEL_COUNT = 8;

export const RESUS_ALGORITHMS = [
  { id: 'adult-cardiac-arrest', title: 'Rozšířená resuscitace dospělých', group: 'Dospělí', pdf: 'adult-cardiac-arrest.pdf', preview: 'adult-cardiac-arrest.webp', focus: 'defibrilovatelný a nedefibrilovatelný rytmus' },
  { id: 'adult-tachycardia', title: 'Tachyarytmie u dospělých', group: 'Dospělí', pdf: 'adult-tachycardia.pdf', preview: 'adult-tachycardia.webp', focus: 'nestabilní vs. stabilní pacient, QRS' },
  { id: 'adult-bradycardia', title: 'Bradyarytmie u dospělých', group: 'Dospělí', pdf: 'adult-bradycardia.pdf', preview: 'adult-bradycardia.webp', focus: 'bradyarytmie a život ohrožující příznaky' },
  { id: 'adult-hyperkalemia-erc', title: 'Hyperkalémie u dospělých (ERC 2025)', group: 'Dospělí', pdf: 'adult-hyperkalemia-erc.pdf', alternatePdf: 'adult-hyperkalemia.pdf', preview: 'adult-hyperkalemia-erc.webp', focus: 'EKG změny, kalcium, posun K⁺' },
  { id: 'adult-hypokalemia', title: 'Hypokalémie u dospělých', group: 'Dospělí', pdf: 'adult-hypokalemia.pdf', preview: 'adult-hypokalemia.webp', focus: 'závažnost, EKG a substituce' },
  { id: 'adult-hypothermia', title: 'Hypotermie u dospělých', group: 'Dospělí', pdf: 'adult-hypothermia.pdf', preview: 'adult-hypothermia.webp', focus: 'teplota, šetrná manipulace a resuscitace' },
  { id: 'acute-coronary-thrombosis', title: 'Akutní koronární trombóza', group: 'Dospělí', pdf: 'acute-coronary-thrombosis.pdf', preview: 'acute-coronary-thrombosis.webp', focus: 'časná rozvaha a eskalace péče' },
  { id: 'pediatric-resuscitation', title: 'Resuscitace dětí', group: 'Pediatrie', pdf: 'pediatric-resuscitation.pdf', preview: 'pediatric-resuscitation.webp', focus: 'dětská KPR a reverzibilní příčiny' },
  { id: 'neonatal-resuscitation', title: 'Resuscitace novorozence', group: 'Pediatrie', pdf: 'neonatal-resuscitation.pdf', preview: 'neonatal-resuscitation.webp', focus: 'první minuty po narození' },
  { id: 'traumatic-cardiac-arrest', title: 'Traumatická zástava oběhu', group: 'Trauma', pdf: 'traumatic-cardiac-arrest.pdf', preview: 'traumatic-cardiac-arrest.webp', focus: 'reverzibilní trauma příčiny' }
];

export const RESUS_DOSE_TABLES = [
  {
    title: 'Hyperkalémie u dospělých - dávky ze zdrojového algoritmu ERC 2025',
    sourceId: 'adult-hyperkalemia-erc',
    note: 'Učební přepis přímo z dodaného algoritmu; při péči o pacienta vždy otevři originál a postupuj podle lokálních postupů.',
    rows: [
      ['EKG změny / arytmie: kalcium i.v. (6,8 mmol)', '30 ml 10% glukonátu vápenatého i.v. po dobu 10 minut; nebo 10 ml 10% chloridu vápenatého i.v. po dobu 5 minut při srdeční či perioperační zástavě.']
    ]
  },
  {
    title: 'Bradyarytmie u dospělých - dávky ze zdrojového algoritmu ERC 2025',
    sourceId: 'adult-bradycardia',
    note: 'Pouze pro procvičení. Kontraindikace, monitoraci a celý rozhodovací strom ověř vždy v originálním algoritmu.',
    rows: [
      ['Atropin', '0,5 mg i.v.; opakovat až do celkové dávky 3 mg.'],
      ['Isoprenalin', '5 µg/min i.v.'],
      ['Adrenalin', '2–10 µg/min i.v.']
    ]
  },
  {
    title: 'Tachyarytmie u dospělých - dávky ze zdrojového algoritmu ERC 2025',
    sourceId: 'adult-tachycardia',
    note: 'Jde o položky v konkrétních větvích algoritmu, nikoli univerzální dávkovník pro každou tachyarytmii.',
    rows: [
      ['Amiodaron', '300 mg i.v. po dobu 10–20 minut.'],
      ['Procainamid', '10–15 mg/kg i.v. (max. 1 g) po dobu 20 minut.']
    ]
  },
  {
    title: 'Resuscitace dětí - defibrilační větev ze zdrojového algoritmu ERC 2025',
    sourceId: 'pediatric-resuscitation',
    note: 'Pouze větev VF/bezpulzová VT. Ostatní kroky, načasování a maximální dávky ověř v plném algoritmu.',
    rows: [
      ['Defibrilace', '4 J/kg; při refrakterní VF/bezpulzové VT až 8 J/kg, maximálně 360 J.'],
      ['Adrenalin po třetím výboji', '10 µg/kg i.v./i.o., maximálně 1 mg.'],
      ['Amiodaron po třetím výboji', '5 mg/kg, maximálně 300 mg.'],
      ['Amiodaron po pátém výboji', '5 mg/kg, maximálně 150 mg.']
    ]
  },
  {
    title: 'Resuscitace novorozence - čitelné položky ze zdrojového algoritmu ERC 2025',
    sourceId: 'neonatal-resuscitation',
    note: 'Zkrácený přepis pouze tří jednoznačně čitelných položek; pro celý novorozenecký postup otevři originál.',
    rows: [
      ['Adrenalin', '10–30 µg/kg každé 4 minuty.'],
      ['Tekutiny', '10 ml/kg.'],
      ['Glukóza 10%', '2 ml/kg.']
    ]
  }
];

export const RESUS_DRILLS = [
  {
    id: 'tachycardia-first-minute',
    title: 'Kazuistika: tachyarytmie, první minuta',
    sourceId: 'adult-tachycardia',
    intro: 'Dospělý pacient má tachyarytmii. Postupuj podle dodaného algoritmu; procvičuješ rozcestník, ne nahrazuješ klinické rozhodnutí.',
    steps: [
      {
        prompt: 'Který krok patří do úvodního ABCDE zhodnocení?',
        options: ['Monitorovat SpO₂, EKG a TK; podat kyslík, pokud SpO₂ <94 %; zajistit i.v. vstup a 12svodové EKG.', 'Hned rozhodnout, zda je QRS úzký nebo široký.', 'Podat antiarytmikum bez zhodnocení pacienta.'],
        correct: 0,
        explanation: 'Algoritmus začíná ABCDE, monitoringem, cíleným kyslíkem, i.v. vstupem, 12svodovým EKG a hledáním reverzibilní příčiny.'
      },
      {
        prompt: 'Pacient má šok, ischemickou bolest na hrudi a známky srdečního selhání. Kterou větev algoritmu volíš?',
        options: ['Nestabilní - kardioverze synchronizovaným výbojem.', 'Stabilní - nejprve rozdělit podle šířky QRS.', 'Vyčkat bez zásahu a zopakovat EKG za hodinu.'],
        correct: 0,
        explanation: 'Šok, synkopa se závažnou pre-synkopou, ischemická bolest, srdeční selhání s plicním edémem či stav bezprostředně po ROSC patří mezi život ohrožující příznaky v algoritmu.'
      },
      {
        prompt: 'Při stabilní pravidelné tachyarytmii s úzkým QRS algoritmus nejdříve směřuje k:',
        options: ['Vagovým manévrům, při neúspěchu adenozinu a případně kardioverzi synchronizovaným výbojem.', 'Okamžité nesynchronizované defibrilaci.', 'Léčbě jako fibrilace síní bez další rozvahy.'],
        correct: 0,
        explanation: 'Toto je větev pro pravidelný úzký QRS; plné podmínky, dávky a kontraindikace zůstávají v originálním algoritmu.'
      }
    ]
  },
  {
    id: 'hyperkalemia-ecg',
    title: 'Kazuistika: hyperkalémie s EKG změnami',
    sourceId: 'adult-hyperkalemia-erc',
    intro: 'Pacient má K⁺ 6,7 mmol/l a EKG změny. Procvič si pořadí zdrojového algoritmu ERC 2025.',
    steps: [
      {
        prompt: 'Jak je v algoritmu klasifikována hodnota K⁺ 6,7 mmol/l?',
        options: ['Závažná hyperkalémie - indikována neodkladná léčba.', 'Středně závažná bez potřeby EKG.', 'Hodnota bez klinického významu.'],
        correct: 0,
        explanation: 'Algoritmus označuje K⁺ ≥6,5 mmol/l za závažnou hyperkalémii.'
      },
      {
        prompt: 'Při EKG změnách nebo arytmii je v algoritmu uveden první ochranný krok:',
        options: ['Kalcium i.v. (6,8 mmol).', 'Vazač draslíku jako jediná intervence.', 'Vyčkat na kontrolní odběr bez monitorace.'],
        correct: 0,
        explanation: 'Dávkování a možné přípravky jsou v přehledu dávek a v originálním PDF.'
      },
      {
        prompt: 'Po řešení elektrické nestability algoritmus zahrnuje:',
        options: ['Inzulín s glukózou, podle situace salbutamol, vazače draslíku a zvážení dialýzy; monitorovat K⁺ a glykémii.', 'Jen opakovat EKG následující den.', 'Zastavit monitoraci po podání kalcia.'],
        correct: 0,
        explanation: 'Tento sled kroků a průběžný monitoring jsou součástí dodaného algoritmu.'
      }
    ]
  },
  {
    id: 'adult-cardiac-arrest-rhythm',
    title: 'Kazuistika: zástava oběhu a rytmus',
    sourceId: 'adult-cardiac-arrest',
    intro: 'Pacient nereaguje a nedýchá normálně. Procvičuješ pouze rozpoznání hlavních větví ALS algoritmu.',
    steps: [
      {
        prompt: 'Co podle algoritmu následuje po rozpoznání stavu?',
        options: ['Zahájit KPR 30:2, připojit defibrilátor/monitor a přivolat resuscitační tým.', 'Nejprve provést kompletní laboratorní vyšetření.', 'Čekat na spontánní úpravu rytmu.'],
        correct: 0,
        explanation: 'Jde o úvodní krok z dodaného algoritmu rozšířené resuscitace dospělých.'
      },
      {
        prompt: 'Rytmus je defibrilovatelný (VF/bezpulzová VT). Co po výboji?',
        options: ['Okamžitě pokračovat v KPR po dobu 2 minut.', 'Dlouhá pauza na další analýzu rytmu.', 'Ukončit KPR po prvním výboji.'],
        correct: 0,
        explanation: 'Algoritmus uvádí po výboji bezprostřední pokračování KPR po 2 minuty.'
      },
      {
        prompt: 'Nezávisle na větvi algoritmus průběžně zdůrazňuje:',
        options: ['Rozpoznat a řešit reverzibilní příčiny.', 'Zaměřit se jen na monitor.', 'Odložit hledání příčiny až po propuštění pacienta.'],
        correct: 0,
        explanation: 'Reverzibilní příčiny jsou vyznačené v pravé části zdrojového algoritmu.'
      }
    ]
  }
];

export function algorithmById(id) {
  return RESUS_ALGORITHMS.find((algorithm) => algorithm.id === id);
}
