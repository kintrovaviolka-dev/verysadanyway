export type LocalizedText = { cs: string; en: string };
const text = (cs: string, en: string): LocalizedText => ({ cs, en });

export const ESSENTIALS_SOURCES = {
  asra: {
    title: 'ASRA: LAST checklist (2020)',
    url: 'https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2020/11/01/checklist-for-treatment-of-local-anesthetic-systemic-toxicity',
  },
  das: {
    title: 'DAS: Unanticipated difficult intubation (2025)',
    url: 'https://www.bjanaesthesia.org/article/S0007-0912(25)00862-1/fulltext',
  },
  abg: {
    title: 'OpenAnesthesia: Arterial blood gas analysis',
    url: 'https://www.openanesthesia.org/keywords/arterial-blood-gas-analysis/',
  },
  acidBase: {
    title: 'Yee et al.: Fundamentals of arterial blood gas interpretation (2022)',
    url: 'https://pubmed.ncbi.nlm.nih.gov/36176645/',
  },
  spinal: {
    title: 'OpenAnesthesia: Spinal anesthesia in adults',
    url: 'https://www.openanesthesia.org/keywords/spinal-anesthesia-in-adults-anatomy-indications-and-physiological-effects/',
  },
  inhaled: {
    title: 'OpenAnesthesia: Inhaled anesthetics in clinical use',
    url: 'https://www.openanesthesia.org/keywords/inhaled-anesthetics-in-clinical-use/',
  },
  mh: {
    title: 'MHAUS: Managing a malignant hyperthermia crisis',
    url: 'https://www.mhaus.org/healthcare-professionals/managing-a-crisis/',
  },
  tof: {
    title: 'APSF: ASA guidelines for neuromuscular blockade (2023)',
    url: 'https://www.apsf.org/article/new-practice-guidelines-for-neuromuscular-blockade/',
  },
  sugammadex: {
    title: 'EMA: Bridion — product information',
    url: 'https://www.ema.europa.eu/en/medicines/human/EPAR/bridion',
  },
};

export interface EssentialsCase {
  id: string;
  presentation: LocalizedText;
  question: LocalizedText;
  options: LocalizedText[];
  correctIndex: number;
  explanation: LocalizedText;
}

export interface EssentialsLesson {
  id: string;
  title: LocalizedText;
  goal: LocalizedText;
  sections: { heading: LocalizedText; body: LocalizedText }[];
  steps: LocalizedText[];
  pitfall: LocalizedText;
  sources: (keyof typeof ESSENTIALS_SOURCES)[];
  cases: EssentialsCase[];
}

export const ESSENTIALS_VERSION = '2026-10-17';

export const ESSENTIALS_LESSONS: EssentialsLesson[] = [
  {
    id: 'last',
    title: text('LAST: toxicita lokálních anestetik', 'LAST: local anesthetic systemic toxicity'),
    goal: text('Rozpoznat toxicitu, přivolat pomoc a vysvětlit, čím se léčba liší od běžné resuscitace.',
      'Recognise toxicity, call for help and explain how treatment differs from standard resuscitation.'),
    sections: [
      {
        heading: text('Mechanismus a prevence', 'Mechanism and prevention'),
        body: text('LAST vzniká při vysoké systémové koncentraci lokálního anestetika, například po nechtěné intravaskulární injekci nebo vstřebání z tkáně. Může nastat i bez překročení tabulkové maximální dávky. Počítejte celkovou dávku v mg ze všech míst a přípravků; toxicita kombinovaných anestetik se sčítá. Používejte nejnižší účinnou dávku, frakcionované podání, opakovanou aspiraci a monitoraci. Negativní aspirace ani ultrazvuk LAST nevylučují.',
          'LAST results from a high systemic local anesthetic concentration, for example after unintended intravascular injection or tissue absorption. It can occur below a published maximum dose. Add up the dose in mg from all sites and preparations; toxicity of combined agents is additive. Use the lowest effective dose, incremental injection, repeated aspiration and monitoring. Negative aspiration and ultrasound do not exclude LAST.'),
      },
      {
        heading: text('Rozpoznání a odlišení', 'Recognition and differential diagnosis'),
        body: text('Varovné projevy zahrnují periorální parestezie, kovovou chuť, tinnitus, agitovanost a křeče; mohou následovat poruchy vedení, arytmie a oběhové selhání. Projevy mohou být opožděné a v sedaci nemusí být neurologické varování patrné. Odlišujte anafylaxi, hypoxii, vazovagální reakci a vysokou spinální blokádu. Náhlý kolaps po bloku vyžaduje okamžité ABC, nikoli čekání na jistotu diagnózy.',
          'Warning signs include perioral paraesthesia, metallic taste, tinnitus, agitation and seizures; conduction disturbances, arrhythmias and cardiovascular collapse may follow. Presentation may be delayed and sedation may hide neurological warnings. Consider anaphylaxis, hypoxia, a vasovagal episode and high spinal block. Collapse after a block requires immediate ABC support, not diagnostic certainty.'),
      },
      {
        heading: text('20% lipidová emulze: čtení checklistu ASRA', '20% lipid emulsion: reading the ASRA checklist'),
        body: text('Pod 70 kg: bolus přibližně 1,5 ml/kg během 2–3 minut, poté infuze přibližně 0,25 ml/kg/min. Nad 70 kg uvádí ASRA přibližně 100 ml během 2–3 minut a přibližně 250 ml během 15–20 minut. Při přetrvávající nestabilitě se bolus opakuje a infuze zdvojnásobí. Po stabilizaci pokračovat déle než 15 minut; maximální celková dávka je 12 ml/kg. Na hranici 70 kg použijte pracovištní checklist. Jde o studium algoritmu, ne individuální dávkovací kalkulátor.',
          'Below 70 kg: approximately 1.5 mL/kg over 2–3 minutes, then approximately 0.25 mL/kg/min. Above 70 kg, ASRA lists approximately 100 mL over 2–3 minutes and approximately 250 mL over 15–20 minutes. If instability persists, repeat the bolus and double the infusion. Continue for more than 15 minutes after haemodynamic stability; maximum total dose is 12 mL/kg. At the 70 kg boundary, use the local checklist. This is algorithm teaching, not an individual dosing calculator.'),
      },
      {
        heading: text('Odlišnosti resuscitace a následné sledování', 'Resuscitation differences and observation'),
        body: text('Křeče přednostně léčit benzodiazepinem a zabránit hypoxii a acidóze. ASRA doporučuje při potřebě adrenalinu menší dávky, začít pod 1 mikrogram/kg; vyhnout se vazopresinu, beta-blokátorům, blokátorům kalciových kanálů a dalším lokálním anestetikům. Propofol není náhradou lipidové emulze. Po stabilizaci sledovat alespoň 2 hodiny po křečích, 4–6 hodin po kardiovaskulární nestabilitě; po zástavě dle intenzivní péče.',
          'Prefer a benzodiazepine for seizures and prevent hypoxia and acidosis. When epinephrine is needed, ASRA favours smaller doses, starting below 1 microgram/kg; avoid vasopressin, beta-blockers, calcium-channel blockers and additional local anesthetics. Propofol is not a substitute for lipid emulsion. After stabilisation, observe for at least 2 hours after seizures, 4–6 hours after cardiovascular instability, and as appropriate in critical care after arrest.'),
      },
    ],
    steps: [
      text('Zastavit podávání anestetika, přivolat seniora a přinést LAST set/checklist.', 'Stop local anesthetic administration, call senior help and obtain the LAST kit/checklist.'),
      text('Zajistit oxygenaci a ventilaci, monitoraci a žilní přístup; léčit křeče.', 'Support oxygenation and ventilation, monitoring and IV access; treat seizures.'),
      text('Při závažné toxicitě včas podat 20% lipidovou emulzi podle checklistu.', 'Give 20% lipid emulsion early in severe toxicity according to the checklist.'),
      text('Při zástavě provádět KPR a defibrilaci dle rytmu, respektovat lékové odlišnosti LAST; při refrakterním průběhu kontaktovat tým mimotělní podpory.', 'In arrest, provide CPR and rhythm-appropriate defibrillation with LAST-specific drug modifications; contact an extracorporeal support team for refractory collapse.'),
      text('Po stabilizaci zajistit sledování, dokumentaci dávky, času a průběhu reakce.', 'Arrange observation and document dose, timing and the clinical course after stabilisation.'),
    ],
    pitfall: text('Normální dávka ani nepřítomnost křečí LAST nevylučují. Nezaměňovat ml, mg a koncentraci; 1% roztok obsahuje 10 mg/ml.',
      'A usual dose and absence of seizures do not rule out LAST. Do not confuse mL, mg and concentration; a 1% solution contains 10 mg/mL.'),
    sources: ['asra'],
    cases: [
      {
        id: 'last-recognition',
        presentation: text('Během periferního bloku pacient udává kovovou chuť a tinnitus, následně začne mít křeče.', 'During a peripheral block, a patient reports metallic taste and tinnitus, then develops seizures.'),
        question: text('Jaká je správná bezprostřední reakce?', 'What is the appropriate immediate response?'),
        options: [
          text('Dokončit blok, protože nebyla překročena maximální dávka.', 'Complete the block because the maximum dose was not exceeded.'),
          text('Zastavit injekci, přivolat pomoc, zajistit ABC a zahájit postup pro podezření na LAST.', 'Stop injection, call for help, support ABC and initiate the suspected-LAST pathway.'),
          text('Vyčkat na stanovení plazmatické koncentrace anestetika.', 'Wait for a plasma local anesthetic concentration.'),
        ],
        correctIndex: 1,
        explanation: text('Časová souvislost a neurologické projevy podporují LAST. Nečekáme na laboratorní potvrzení ani na oběhovou zástavu. Pokračování injekce může stav zhoršit; tabulková maximální dávka nezaručuje bezpečnost.',
          'The timing and neurological signs suggest LAST. Do not wait for laboratory confirmation or cardiac arrest. Continuing injection can worsen toxicity; a published maximum dose does not guarantee safety.'),
      },
      {
        id: 'last-lipid',
        presentation: text('Dospělý pacient váží 60 kg a má závažnou LAST. Tým používá checklist ASRA 2020.', 'A 60 kg adult has severe LAST. The team is using the ASRA 2020 checklist.'),
        question: text('Který úvodní režim 20% lipidové emulze odpovídá checklistu?', 'Which initial 20% lipid emulsion regimen matches the checklist?'),
        options: [
          text('90 ml během 2–3 minut, následně 15 ml/min.', '90 mL over 2–3 minutes, followed by 15 mL/min.'),
          text('90 mg rychle i.v., další podání není potřeba.', '90 mg rapidly IV, with no further administration.'),
          text('Podat propofol místo lipidové emulze.', 'Give propofol instead of lipid emulsion.'),
        ],
        correctIndex: 0,
        explanation: text('1,5 ml/kg × 60 kg = 90 ml; 0,25 ml/kg/min × 60 kg = 15 ml/min. Počítá se objem 20% emulze, nikoli mg. Sledujte celkový podaný objem, odpověď a limit 12 ml/kg; propofol lipidovou léčbu nenahrazuje.',
          '1.5 mL/kg × 60 kg = 90 mL; 0.25 mL/kg/min × 60 kg = 15 mL/min. This is the volume of 20% emulsion, not mg. Track total volume, response and the 12 mL/kg limit; propofol does not replace lipid rescue.'),
      },
      {
        id: 'last-resuscitation',
        presentation: text('Po lipidové léčbě se oběh stabilizoval. Kolega chce pacienta ihned propustit.', 'Circulation has stabilised after lipid treatment. A colleague wants to discharge the patient immediately.'),
        question: text('Co je správně?', 'Which statement is correct?'),
        options: [
          text('Úprava tlaku vylučuje návrat toxicity.', 'Normalisation of blood pressure excludes recurrent toxicity.'),
          text('Stačí ukončit infuzi v okamžiku prvního normálního tlaku.', 'Stop the infusion at the first normal blood pressure.'),
          text('Pokračovat dle checklistu a zajistit monitorované sledování po kardiovaskulární nestabilitě.', 'Continue according to the checklist and arrange monitored observation after cardiovascular instability.'),
        ],
        correctIndex: 2,
        explanation: text('ASRA uvádí pokračování lipidové infuze déle než 15 minut po stabilizaci a sledování 4–6 hodin po kardiovaskulární nestabilitě. Po zástavě je potřebná individualizovaná intenzivní péče. Okamžité propuštění je nevhodné.',
          'ASRA lists lipid infusion for more than 15 minutes after stability and 4–6 hours of observation after cardiovascular instability. Arrest requires individualised critical care. Immediate discharge is inappropriate.'),
      },
    ],
  },
  {
    id: 'airway',
    title: text('Obtížné dýchací cesty a CICO', 'Difficult airway and CICO'),
    goal: text('Oddělit obtížnou intubaci od nemožnosti oxygenace a znát bezpečný přechod mezi plány.',
      'Distinguish difficult intubation from failed oxygenation and know when to move between plans.'),
    sections: [
      {
        heading: text('Vyšetření není jen Mallampati', 'Assessment is more than Mallampati'),
        body: text('Zjišťujte předchozí obtíže, otevření úst, chrup, pohyb krku, anatomii obličeje a krku, obezitu/OSA a patologii horních DC. Zvlášť posuzujte možnost ventilace maskou, intubace, zavedení supraglotické pomůcky a přístupu na krku. Mallampati či LEMON jsou pomůcky, nikoli záruky. Přidejte fyziologické riziko: hypoxemii, šok, těžkou acidózu a riziko aspirace.',
          'Review previous difficulty, mouth opening, teeth, neck movement, face and neck anatomy, obesity/OSA and upper airway pathology. Assess mask ventilation, intubation, supraglottic device placement and front-of-neck access separately. Mallampati or LEMON are aids, not guarantees. Include physiological risks: hypoxaemia, shock, severe acidosis and aspiration risk.'),
      },
      {
        heading: text('Příprava a očekávané obtíže', 'Preparation and anticipated difficulty'),
        body: text('Před úvodem si tým rozdělí role, zkontroluje odsávání, pomůcky, kapnografii a plán selhání. Optimalizujte polohu, preoxygenaci a oběh; oxygenaci udržujte i mezi pokusy. Očekávaná obtížná ventilace/intubace, špatná tolerance apnoe nebo obtížný záchranný přístup mohou vést k volbě intubace při vědomí zkušeným týmem. RSI řeší riziko aspirace, nenahrazuje plán obtížných DC.',
          'Before induction, allocate roles and check suction, devices, capnography and rescue plans. Optimise positioning, preoxygenation and haemodynamics; maintain oxygenation between attempts. Anticipated difficulty with ventilation/intubation, poor apnoea tolerance or difficult rescue access may favour awake intubation by an experienced team. RSI addresses aspiration risk; it does not replace an airway plan.'),
      },
      {
        heading: text('Plány A–D', 'Plans A–D'),
        body: text('A: optimalizovaný pokus o intubaci, časná pomoc a omezení pokusů. B: oxygenace supraglotickou pomůckou. C: ventilace maskou; pokud lze oxygenovat, zastavit se a rozhodnout o probuzení či dalším postupu se seniorem. D: při selhání oxygenace maskou i supraglotickou pomůckou po neúspěšné intubaci vyhlásit CICO a ihned přejít k eFONA. Neopakujte neúčinné pokusy; mezi pokusy změňte podmínky, pomůcku nebo operatéra. Limity a techniku nacvičujte podle aktuálního místního algoritmu.',
          'A: optimised intubation attempt, early help and limited attempts. B: oxygenation with a supraglottic device. C: facemask ventilation; if oxygenation is possible, stop and decide with a senior whether to wake the patient or proceed. D: failed oxygenation by mask and supraglottic device after failed intubation means declare CICO and proceed immediately to eFONA. Do not repeat ineffective attempts; change conditions, device or operator. Rehearse limits and techniques using the current local algorithm.'),
      },
      {
        heading: text('Potvrzení a bezpečné ukončení', 'Confirmation and safe completion'),
        body: text('Po intubaci vyžadujte trvalou kapnografickou křivku, ověřte ventilaci a hloubku kanyly. Zamlžení kanyly ani samotný poslech nestačí. Chybějící vydechovaný CO2 vyžaduje okamžité vyloučení jícnové intubace; při zástavě může být CO2 nízký. Obtížné DC dokumentujte, informujte pacienta a připravte plán extubace i reintubace.',
          'After intubation, require sustained waveform capnography and verify ventilation and tube depth. Tube misting or auscultation alone is insufficient. Absent exhaled CO2 requires immediate exclusion of oesophageal intubation; CO2 may be low in cardiac arrest. Document difficulty, inform the patient and plan both extubation and reintubation.'),
      },
    ],
    steps: [
      text('Před úvodem vyšetřit anatomické i fyziologické riziko a domluvit záložní plán.', 'Assess anatomical and physiological risk and agree a rescue plan before induction.'),
      text('Přivolat pomoc včas, optimalizovat polohu, oxygenaci, oběh a podmínky prvního pokusu.', 'Call for help early; optimise positioning, oxygenation, circulation and first-attempt conditions.'),
      text('Po neúspěchu omezit další pokusy a přejít k záchranné oxygenaci.', 'After failure, limit further attempts and move to rescue oxygenation.'),
      text('CICO: deklarovat stav a provést neodkladný eFONA vyškoleným týmem. Nečekat na pokles SpO2 pod konkrétní číslo ani na účinek sugammadexu.', 'CICO: declare the emergency and perform immediate eFONA by the trained team. Do not wait for a specific SpO2 threshold or for sugammadex to work.'),
      text('Potvrdit ventilaci kapnografií a naplánovat další péči a bezpečnou extubaci.', 'Confirm ventilation with capnography and plan further care and safe extubation.'),
    ],
    pitfall: text('Reverze rokuronia neodstraňuje anatomickou obstrukci ani nezaručuje oxygenaci. Sugammadex nesmí zdržet eFONA. Samotné čtení algoritmu nenahrazuje nácvik výkonu.',
      'Reversing rocuronium does not remove anatomical obstruction or guarantee oxygenation. Sugammadex must not delay eFONA. Reading an algorithm does not replace procedural training.'),
    sources: ['das', 'sugammadex'],
    cases: [
      {
        id: 'airway-oxygenated',
        presentation: text('Intubace se nezdařila, ale supraglotickou pomůckou lze spolehlivě ventilovat a oxygenovat.', 'Intubation has failed, but ventilation and oxygenation through a supraglottic device are effective.'),
        question: text('Jde o CICO?', 'Is this CICO?'),
        options: [
          text('Ano, každá neúspěšná intubace je CICO.', 'Yes, every failed intubation is CICO.'),
          text('Je nutná další okamžitá laryngoskopie bez změny podmínek.', 'Another immediate laryngoscopy without changing conditions is required.'),
          text('Ne. Udržovat oxygenaci, přivolat seniora a rozhodnout o probuzení či bezpečném dalším plánu.', 'No. Maintain oxygenation, call a senior and decide whether to wake the patient or follow a safe alternative plan.'),
        ],
        correctIndex: 2,
        explanation: text('CICO znamená nemožnost intubace i oxygenace. Funkční záchranná oxygenace poskytuje čas k rozvaze; neznamená automatické svolení pokračovat v operaci. Opakované traumatizující pokusy mohou situaci zhoršit.',
          'CICO means failed intubation and failed oxygenation. Effective rescue oxygenation provides time to reassess; it is not automatic permission to continue surgery. Repeated traumatic attempts can worsen the situation.'),
      },
      {
        id: 'airway-cico',
        presentation: text('U dospělého nelze intubovat ani oxygenovat optimalizovanou ventilací maskou či supraglotickou pomůckou. Sugammadex je na stole.', 'An adult cannot be intubated or oxygenated by optimised mask ventilation or a supraglottic device. Sugammadex is available.'),
        question: text('Co má prioritu?', 'What takes priority?'),
        options: [
          text('Vyhlásit CICO a bez prodlení přejít k eFONA.', 'Declare CICO and proceed to eFONA without delay.'),
          text('Podat sugammadex a tři minuty vyčkat.', 'Give sugammadex and wait three minutes.'),
          text('Čekat, až SpO2 klesne pod 60 %.', 'Wait until SpO2 drops below 60%.'),
        ],
        correctIndex: 0,
        explanation: text('Rozhoduje nemožnost oxygenace, nikoli konkrétní hodnota saturace. Sugammadex nemusí obnovit průchodnost DC ani ventilaci a nesmí odložit eFONA. Výkon vyžaduje praktický nácvik a připravené vybavení.',
          'Failure to oxygenate, not a particular saturation, determines the emergency. Sugammadex may not restore airway patency or ventilation and must not delay eFONA. The procedure requires rehearsal and ready equipment.'),
      },
      {
        id: 'airway-capnography',
        presentation: text('Po zavedení kanyly se hrudník zdánlivě zvedá, ale není přítomna trvalá kapnografická křivka.', 'After tube insertion, the chest appears to rise, but no sustained capnography waveform is present.'),
        question: text('Jak interpretovat nález?', 'How should this be interpreted?'),
        options: [
          text('Zamlžení kanyly bezpečně potvrzuje intubaci.', 'Tube misting reliably confirms intubation.'),
          text('Polohu nelze považovat za potvrzenou; okamžitě ověřit DC, ventilaci a vyloučit jícnovou intubaci.', 'Placement is not confirmed; immediately reassess the airway and ventilation and exclude oesophageal intubation.'),
          text('Stačí zvýšit FiO2 a pokračovat v operaci.', 'Increase FiO2 and continue surgery.'),
        ],
        correctIndex: 1,
        explanation: text('Trvalá křivka vydechovaného CO2 je zásadním potvrzením ventilace plic. Absenci signálu nesmíme bez ověření připsat technické závadě. Současně zhodnotíme oběh, okruh a možnou obstrukci.',
          'Sustained exhaled CO2 is central to confirming lung ventilation. Do not assume a technical fault without verification. Also assess circulation, the circuit and possible obstruction.'),
      },
    ],
  },
  {
    id: 'blood-gas',
    title: text('Krevní plyny a acidobazická rovnováha', 'Blood gases and acid–base balance'),
    goal: text('Přečíst výsledek po jednotlivých parametrech, určit primární poruchu a hledat neadekvátní kompenzaci.',
      'Read individual parameters, identify the primary disorder and look for inappropriate compensation.'),
    sections: [
      {
        heading: text('pH a pCO2: acidémie není totéž co acidóza', 'pH and pCO2: acidaemia versus acidosis'),
        body: text('Orientační arteriální pH je 7,35–7,45. Acidémie/alkalémie popisuje výsledné pH; acidóza/alkalóza označuje proces. Normální pH nevylučuje dvě protichůdné poruchy. PaCO2 odráží alveolární ventilaci: přibližně 4,7–6,0 kPa (35–45 mmHg). Vyšší CO2 působí acidifikačně. Převod: 1 kPa ≈ 7,5 mmHg. Rozmezí vždy vztahujte k laboratoři a klinice.',
          'An approximate arterial pH range is 7.35–7.45. Acidaemia/alkalaemia describes the resulting pH; acidosis/alkalosis describes a process. Normal pH does not exclude opposing disorders. PaCO2 reflects alveolar ventilation: approximately 4.7–6.0 kPa (35–45 mmHg). Higher CO2 has an acidifying effect. Conversion: 1 kPa ≈ 7.5 mmHg. Interpret ranges against the laboratory and clinical context.'),
      },
      {
        heading: text('HCO3 a BE: metabolická složka', 'HCO3 and BE: the metabolic component'),
        body: text('HCO3− bývá přibližně 22–26 mmol/l a na analyzátoru je obvykle vypočteno z pH a pCO2. Mění se i při kompenzaci respirační poruchy. BE (base excess, obvykle −2 až +2 mmol/l) charakterizuje metabolickou složku: záporné BE znamená deficit bází, kladné přebytek. Ani BE ani HCO3 samy neurčují příčinu nebo automatickou indikaci bikarbonátu. Rozlišujte aktuální a standardní bikarbonát podle označení laboratoře.',
          'HCO3− is approximately 22–26 mmol/L and is usually calculated from pH and pCO2 on the analyzer. It also changes during compensation of respiratory disorders. BE (base excess, usually −2 to +2 mmol/L) describes the metabolic component: negative BE indicates a base deficit, positive BE an excess. Neither BE nor HCO3 alone determines the cause or automatically indicates bicarbonate treatment. Distinguish actual from standard bicarbonate in the laboratory report.'),
      },
      {
        heading: text('pO2, saturace, hemoglobin a laktát', 'pO2, saturation, haemoglobin and lactate'),
        body: text('PaO2 hodnotí oxygenaci, nikoli ventilaci; závisí na FiO2, věku a podmínkách odběru. U mladého dospělého na vzduchu přibližně 10,7–13,3 kPa (80–100 mmHg). SpO2 je pulzní oxymetrie, SaO2 saturace arteriální krve (měřená kooximetrií nebo vypočtená — zkontrolujte výstup). Dobrá saturace nevylučuje nízký obsah kyslíku při anémii ani intoxikaci CO. Laktát obvykle pod 2 mmol/l: zvýšení může souviset s hypoperfuzí, křečemi, adrenergní stimulací či poruchou clearance; samo nepotvrzuje sepsi.',
          'PaO2 assesses oxygenation, not ventilation; it depends on FiO2, age and sampling conditions. In a young adult breathing air, approximately 10.7–13.3 kPa (80–100 mmHg). SpO2 is pulse oximetry; SaO2 is arterial saturation (measured by co-oximetry or calculated — check the report). A good saturation does not exclude low oxygen content from anaemia or carbon monoxide poisoning. Lactate is usually below 2 mmol/L: elevation can reflect hypoperfusion, seizures, adrenergic stimulation or impaired clearance; it does not diagnose sepsis by itself.'),
      },
      {
        heading: text('Ionty, odběr a spolehlivost výsledku', 'Electrolytes, sampling and reliability'),
        body: text('Na+, K+, Cl−, ionizované Ca2+, glukóza a Hb mohou být na přístroji měřeny samostatně. K+ spojuje ABR s rizikem arytmie; ionizované Ca závisí i na pH. Pro anion gap potřebujete Na, Cl a HCO3, pro jeho korekci albumin. Zapište arteriální/venózní původ, FiO2, čas a stav pacienta. Venózní pO2 nelze použít k hodnocení arteriální oxygenace; pH a CO2 také nejsou univerzálně zaměnitelné, zvlášť při šoku. Vzduchová bublina, prodleva nebo kontaminace infuzí mohou výsledek změnit.',
          'Na+, K+, Cl−, ionised Ca2+, glucose and Hb may be measured separately by the device. K+ links acid–base disorders to arrhythmia risk; ionised calcium also depends on pH. The anion gap needs Na, Cl and HCO3; correction needs albumin. Record arterial/venous origin, FiO2, time and patient state. Venous pO2 cannot assess arterial oxygenation; pH and CO2 are not universally interchangeable either, particularly in shock. Air bubbles, delays or infusion contamination can alter results.'),
      },
      {
        heading: text('Kompenzace a smíšené poruchy', 'Compensation and mixed disorders'),
        body: text('U metabolické acidózy: očekávané PaCO2 v mmHg = 1,5 × HCO3 + 8 ± 2 (Winter). Před dosazením převeďte kPa! Vyšší naměřené CO2 ukazuje na přidruženou respirační acidózu, nižší na respirační alkalózu. Při respirační acidóze vzroste HCO3 přibližně o 1 mmol/l akutně nebo 3,5–4 chronicky na každých +10 mmHg CO2 nad 40; při respirační alkalóze klesá asi o 2 akutně nebo 4–5 chronicky na každých −10 mmHg. Jde o orientační očekávání, ne léčebné cíle.',
          'In metabolic acidosis: expected PaCO2 in mmHg = 1.5 × HCO3 + 8 ± 2 (Winter). Convert kPa first! Higher measured CO2 suggests additional respiratory acidosis; lower suggests respiratory alkalosis. In respiratory acidosis, HCO3 rises by approximately 1 mmol/L acutely or 3.5–4 chronically per +10 mmHg CO2 above 40; in respiratory alkalosis it falls by about 2 acutely or 4–5 chronically per −10 mmHg. These are approximate expectations, not treatment targets.'),
      },
      {
        heading: text('Anion gap a vazba na ventilátor', 'Anion gap and the ventilator'),
        body: text('AG bez K = Na − (Cl + HCO3), obvykle asi 8–12 mmol/l podle laboratoře. Nízký albumin může zvýšení AG skrýt; orientační korekce = AG + 2,5 × (4 − albumin v g/dl). Vyšší AG vede k hledání laktátu, ketonů, renálního selhání či toxinů. Oxygenaci mění především FiO2 a PEEP; CO2 alveolární ventilace. U obstrukce může zvýšení frekvence zhoršit air trapping. Při intubaci těžké metabolické acidózy hrozí ztráta kompenzační hyperventilace.',
          'AG without K = Na − (Cl + HCO3), usually about 8–12 mmol/L depending on the laboratory. Low albumin can hide an elevated AG; approximate correction = AG + 2.5 × (4 − albumin in g/dL). An elevated AG prompts assessment for lactate, ketones, renal failure or toxins. FiO2 and PEEP primarily affect oxygenation; alveolar ventilation affects CO2. Increasing rate in obstruction can worsen air trapping. Intubation during severe metabolic acidosis risks losing compensatory hyperventilation.'),
      },
    ],
    steps: [
      text('Ověřit pacienta, typ odběru, jednotky, FiO2 a možné chyby vzorku.', 'Verify the patient, sample type, units, FiO2 and possible sampling errors.'),
      text('Přečíst pH a určit, zda CO2 a HCO3 vysvětlují jeho směr.', 'Read pH and determine whether CO2 and HCO3 explain its direction.'),
      text('Porovnat kompenzaci s očekáváním a hledat druhou poruchu.', 'Compare compensation with expectations and look for a second disorder.'),
      text('Zhodnotit AG, albumin, laktát, ionty a samostatně oxygenaci.', 'Assess AG, albumin, lactate, electrolytes and oxygenation separately.'),
      text('Léčit příčinu, zohlednit klinický stav a po intervenci zhodnotit trend.', 'Treat the cause, account for the clinical state and reassess the trend after intervention.'),
    ],
    pitfall: text('„Normální pH“ ani „dobrá saturace“ neznamenají normální ABR. Výpočty kompenzace neřeší automaticky diagnózu ani léčbu.',
      'A normal pH or good saturation does not mean a normal acid–base state. Compensation calculations do not automatically establish diagnosis or treatment.'),
    sources: ['abg', 'acidBase'],
    cases: [
      {
        id: 'abg-ventilation',
        presentation: text('Po opioidu: arteriální pH 7,25, PaCO2 8,0 kPa (60 mmHg), HCO3 26 mmol/l. Pacient dýchá pomalu.', 'After an opioid: arterial pH 7.25, PaCO2 8.0 kPa (60 mmHg), HCO3 26 mmol/L. The patient is breathing slowly.'),
        question: text('Jaká je hlavní porucha?', 'What is the primary disorder?'),
        options: [
          text('Metabolická alkalóza.', 'Metabolic alkalosis.'),
          text('Akutní respirační acidóza; prioritou je zhodnocení a podpora ventilace.', 'Acute respiratory acidosis; assess and support ventilation as a priority.'),
          text('Normální nález, protože HCO3 je v rozmezí.', 'Normal findings because HCO3 is within range.'),
        ],
        correctIndex: 1,
        explanation: text('Acidémii vysvětluje zvýšené CO2. Při akutním vzestupu CO2 ze 40 na 60 mmHg odpovídá HCO3 přibližně 26. Samotné zvýšení FiO2 neodstraní hypoventilaci; posuzujeme DC, dechový útlum a potřebu jeho léčby.',
          'Elevated CO2 explains the acidaemia. An acute rise from 40 to 60 mmHg is consistent with HCO3 around 26. Increasing FiO2 alone does not correct hypoventilation; assess airway patency, respiratory depression and its treatment.'),
      },
      {
        id: 'abg-winter',
        presentation: text('Arteriální pH 7,10, HCO3 12 mmol/l, PaCO2 40 mmHg (5,3 kPa).', 'Arterial pH 7.10, HCO3 12 mmol/L, PaCO2 40 mmHg (5.3 kPa).'),
        question: text('Je PaCO2 adekvátní kompenzací?', 'Is PaCO2 appropriate compensation?'),
        options: [
          text('Ano, protože 40 mmHg je normální hodnota.', 'Yes, because 40 mmHg is normal.'),
          text('Jde jen o respirační alkalózu.', 'This is only respiratory alkalosis.'),
          text('Ne. Očekáváme 24–28 mmHg; je přítomna i respirační acidóza.', 'No. Expected PaCO2 is 24–28 mmHg; respiratory acidosis is also present.'),
        ],
        correctIndex: 2,
        explanation: text('Winter: 1,5 × 12 + 8 = 26 ± 2 mmHg. Naměřených 40 je vzhledem k metabolické acidóze příliš mnoho. „Normální CO2“ zde představuje nedostatečnou ventilaci vůči potřebě kompenzace, nikoli normální ABR.',
          'Winter: 1.5 × 12 + 8 = 26 ± 2 mmHg. Measured CO2 of 40 is too high for this metabolic acidosis. A normal-range CO2 here indicates inadequate ventilation relative to compensation needs, not normal acid–base balance.'),
      },
      {
        id: 'abg-sample',
        presentation: text('Venózní krev má pO2 5 kPa. SpO2 je 97 % na vzduchu, pacient bez dechové tísně.', 'Venous blood has pO2 5 kPa. SpO2 is 97% on room air and the patient has no respiratory distress.'),
        question: text('Co z výsledku plyne?', 'What can be concluded?'),
        options: [
          text('Venózní pO2 nelze vykládat jako arteriální hypoxemii; hodnotit kliniku a podle potřeby ověřit arteriální oxygenaci.', 'Venous pO2 cannot be interpreted as arterial hypoxaemia; assess clinically and verify arterial oxygenation if needed.'),
          text('Arteriální PaO2 je určitě také 5 kPa.', 'Arterial PaO2 must also be 5 kPa.'),
          text('Každý pacient s tímto venózním výsledkem musí být intubován.', 'Every patient with this venous result requires intubation.'),
        ],
        correctIndex: 0,
        explanation: text('Venózní pO2 odráží také extrakci kyslíku tkáněmi a místo odběru. Není zaměnitelné s PaO2. O další diagnostice rozhoduje klinický stav, spolehlivost oxymetrie a konkrétní otázka.',
          'Venous pO2 also reflects tissue oxygen extraction and sampling site. It is not interchangeable with PaO2. Further testing depends on the clinical state, reliability of oximetry and the specific clinical question.'),
      },
      {
        id: 'abg-gap',
        presentation: text('Na 140, Cl 110, HCO3 18 mmol/l; albumin 20 g/l (= 2 g/dl).', 'Na 140, Cl 110, HCO3 18 mmol/L; albumin 20 g/L (= 2 g/dL).'),
        question: text('Jaká je orientační hodnota AG korigovaného na albumin?', 'What is the approximate albumin-corrected AG?'),
        options: [
          text('12 mmol/l; albumin nemá význam.', '12 mmol/L; albumin is irrelevant.'),
          text('17 mmol/l; hypoalbuminémie může skrýt zvýšený AG.', '17 mmol/L; hypoalbuminaemia can hide an elevated AG.'),
          text('−28 mmol/l, protože albumin dosadíme jako 20.', '−28 mmol/L because albumin should be entered as 20.'),
        ],
        correctIndex: 1,
        explanation: text('AG = 140 − (110 + 18) = 12. Korekce = 12 + 2,5 × (4 − 2) = 17 mmol/l. V této podobě vzorce patří albumin v g/dl, ne g/l. Výsledek vede k hledání příčiny, sám ji neurčuje.',
          'AG = 140 − (110 + 18) = 12. Correction = 12 + 2.5 × (4 − 2) = 17 mmol/L. This formula uses albumin in g/dL, not g/L. The result prompts a search for the cause; it does not identify it.'),
      },
    ],
  },
  {
    id: 'regional',
    title: text('Regionální anestezie: bezpečné základy', 'Regional anesthesia: safety essentials'),
    goal: text('Rozlišit spinální, epidurální a periferní blok a poznat komplikaci vyžadující okamžitou pomoc.',
      'Distinguish spinal, epidural and peripheral blocks and recognise complications requiring urgent help.'),
    sections: [
      {
        heading: text('Kam léčivo patří', 'Where the drug goes'),
        body: text('Spinální anestezie je podání do mozkomíšního moku, obvykle s rychlým nástupem a malou dávkou. Epidurální podání je mimo duru, bývá pomalejší a umožňuje titraci katétrem. Periferní blok cílí na nerv nebo plexus. Liší se koncentrace, objemy, časování i rizika; epidurální dávka nesmí být zaměněna za intratekální. Analgezie, sedace a svalová relaxace nejsou totéž.',
          'Spinal anesthesia delivers drug into cerebrospinal fluid, usually with rapid onset and a small dose. Epidural administration is outside the dura, is generally slower and allows catheter titration. Peripheral blocks target a nerve or plexus. Concentrations, volumes, timing and risks differ; never substitute an epidural dose for an intrathecal dose. Analgesia, sedation and muscle relaxation are distinct.'),
      },
      {
        heading: text('Před blokem', 'Before the block'),
        body: text('Ověřit souhlas, správnou stranu a výkon, alergie, neurologický výchozí stav, infekci, oběhovou stabilitu a antitrombotika. U neuraxiálního výkonu rozhoduje konkrétní léčivo, dávka, poslední podání, renální funkce a také plán odstranění katétru; neexistuje jeden bezpečný čas pro všechna antikoagulancia. Použít aktuální doporučení a seniorní rozhodnutí. Zajistit sterilitu, monitoraci, IV přístup a dostupnost resuscitačního vybavení i lipidové emulze.',
          'Check consent, side and procedure, allergies, baseline neurology, infection, haemodynamic stability and antithrombotic drugs. Neuraxial decisions depend on the agent, dose, last administration, renal function and catheter removal plan; there is no single safe interval for all anticoagulants. Use current guidance and senior judgement. Ensure sterility, monitoring, IV access and access to resuscitation equipment and lipid emulsion.'),
      },
      {
        heading: text('Vysoký blok, hematom a LAST nejsou totéž', 'High block, haematoma and LAST are different'),
        body: text('Sympatická blokáda může vyvolat hypotenzi a bradykardii. Rychle stoupající blok se slabostí horních končetin, dušností či poruchou vědomí může být vysoká/totální spinální blokáda: okamžitá pomoc, podpora DC, ventilace a oběhu. Nová či progredující slabost, silná bolest zad nebo porucha sfinkterů po neuraxiálním výkonu vyžaduje urgentní vyšetření pro kompresivní hematom/absces. Křeče a arytmie po lokálním anestetiku vedou také k podezření na LAST.',
          'Sympathetic blockade can cause hypotension and bradycardia. A rapidly ascending block with arm weakness, dyspnoea or altered consciousness may be high/total spinal block: call for immediate help and support airway, ventilation and circulation. New or progressive weakness, severe back pain or sphincter dysfunction after neuraxial anesthesia requires urgent assessment for compressive haematoma/abscess. Seizures and arrhythmias after local anesthetic also suggest LAST.'),
      },
    ],
    steps: [
      text('Zkontrolovat souhlas, stranu, kontraindikace a antitrombotickou léčbu včetně katétru.', 'Check consent, side, contraindications and antithrombotic treatment, including catheter management.'),
      text('Označit přípravky a cesty podání, spočítat celkovou dávku anestetik.', 'Label preparations and routes and calculate the total local anesthetic dose.'),
      text('Před incizí ověřit rozsah a kvalitu bloku; při bolesti výkon přerušit a řešit plán se seniorem.', 'Verify block extent and quality before incision; stop for pain and discuss the plan with a senior.'),
      text('Sledovat vědomí, dech, oběh a rozsah bloku; při komplikaci okamžitě ABC a pomoc.', 'Monitor consciousness, breathing, circulation and block level; initiate ABC support and call for help for complications.'),
      text('Předat informace o katétru, antikoagulaci, motorickém bloku a varovných příznacích.', 'Hand over catheter, anticoagulation and motor block details and warning signs.'),
    ],
    pitfall: text('Sedace nesmí zakrýt nedostatečnou chirurgickou anestezii. Antikoagulační intervaly ani dávky nelze přenášet mezi různými bloky a přípravky.',
      'Sedation must not conceal inadequate surgical anesthesia. Do not transfer anticoagulation intervals or doses between different blocks and preparations.'),
    sources: ['spinal', 'asra'],
    cases: [
      {
        id: 'regional-high-block',
        presentation: text('Po spinální anestezii prudce klesá tlak, pacient má slabé ruce a obtížně dýchá.', 'After spinal anesthesia, blood pressure falls sharply, the patient develops arm weakness and has difficulty breathing.'),
        question: text('Jak postupovat?', 'What should happen next?'),
        options: [
          text('Přidat sedativum a pokračovat, jde o běžnou úzkost.', 'Give more sedation and continue; this is routine anxiety.'),
          text('Vyčkat, dokud se nezastaví dech.', 'Wait until breathing stops.'),
          text('Přivolat pomoc a ihned podpořit DC, ventilaci a oběh při podezření na vysoký blok.', 'Call for help and immediately support airway, ventilation and circulation for suspected high block.'),
        ],
        correctIndex: 2,
        explanation: text('Stoupající blok s motorickou slabostí horních končetin a dechovými obtížemi je varovný. Nelze jej bezpečně označit za úzkost. Prioritou je ABC; podle průběhu může být nutná intubace a oběhová podpora.',
          'An ascending block with upper limb weakness and breathing difficulty is a warning sign, not safely attributable to anxiety. ABC support takes priority; intubation and circulatory support may be needed.'),
      },
      {
        id: 'regional-anticoagulation',
        presentation: text('Pacient má epidurální katétr a má dostat další dávku antikoagulancia. Čas poslední dávky není znám.', 'A patient has an epidural catheter and is due another anticoagulant dose. The last dose time is unknown.'),
        question: text('Jaké rozhodnutí je bezpečné?', 'Which decision is safe?'),
        options: [
          text('Před podáním či odstraněním katétru ověřit léčivo, dávku, časy a renální funkci a domluvit postup dle aktuálního doporučení.', 'Before dosing or catheter removal, verify the drug, dose, timing and renal function and agree a plan using current guidance.'),
          text('Katétr vždy vyjmout hned; riziko se týká pouze zavádění.', 'Always remove the catheter now; the risk only concerns insertion.'),
          text('Pro všechna antikoagulancia platí stejný odstup.', 'The same interval applies to all anticoagulants.'),
        ],
        correctIndex: 0,
        explanation: text('Krvácivé riziko se týká i odstranění katétru. Bez znalosti přípravku a časování nelze bezpečný interval určit; rozhodnutí musí zohlednit také trombotické riziko a seniorní plán.',
          'Bleeding risk also applies to catheter removal. A safe interval cannot be determined without the agent and timing; the decision must also account for thrombotic risk and a senior plan.'),
      },
    ],
  },
  {
    id: 'inhalational',
    title: text('Inhalační anestezie a maligní hypertermie', 'Inhalational anesthesia and malignant hyperthermia'),
    goal: text('Vysvětlit MAC a monitoraci anestetika a rozpoznat maligní hypertermii před vzestupem teploty.',
      'Explain MAC and anesthetic monitoring and recognise malignant hyperthermia before a temperature rise.'),
    sections: [
      {
        heading: text('Koncentrace není dávka v mg/kg', 'Concentration is not a dose in mg/kg'),
        body: text('Sevofluran, isofluran a desfluran se podávají jako páry. Nižší rozpustnost krev/plyn obecně umožňuje rychlejší změnu alveolární koncentrace a probouzení, ale záleží i na ventilaci, průtoku, době podání a oběhu. MAC je alveolární koncentrace zabraňující pohybu na standardní chirurgický podnět u 50 % osob; není přímým měřítkem vědomí ani individuální zárukou dostatečné anestezie. MAC závisí na věku a dalších lécích.',
          'Sevoflurane, isoflurane and desflurane are delivered as vapours. Lower blood/gas solubility generally allows faster changes in alveolar concentration and emergence, but ventilation, flow, exposure duration and circulation also matter. MAC is the alveolar concentration preventing movement to a standard surgical stimulus in 50% of people; it is not a direct measure of consciousness or an individual guarantee of adequate anesthesia. MAC depends on age and other drugs.'),
      },
      {
        heading: text('Co sledovat na přístroji', 'What to monitor on the machine'),
        body: text('Rozlišujte nastavení odpařovače, inspirační koncentraci a end-tidal koncentraci. Sledujte vdechovaný O2, vydechovaný CO2, koncentraci anestetika, ventilaci, oběh a teplotu; nízký průtok vyžaduje spolehlivou analýzu plynů a znalost přístroje. Volatilní anestetika mohou tlumit ventilaci a snižovat tlak. N2O má analgetický účinek, ale zvětšuje uzavřené plynové prostory; je nevhodný například při pneumotoraxu. N2O není spouštěč maligní hypertermie.',
          'Distinguish vaporizer setting, inspired concentration and end-tidal concentration. Monitor inspired O2, exhaled CO2, agent concentration, ventilation, circulation and temperature; low-flow anesthesia requires reliable gas analysis and familiarity with the machine. Volatile agents can depress ventilation and lower blood pressure. N2O provides analgesia but expands closed gas spaces and is unsuitable in conditions such as pneumothorax. N2O does not trigger malignant hyperthermia.'),
      },
      {
        heading: text('Maligní hypertermie: nečekat na horečku', 'Malignant hyperthermia: do not wait for fever'),
        body: text('Spouštěči jsou volatilní anestetika a sukcinylcholin u vnímavého pacienta. Časným varováním může být nevysvětlitelný nárůst EtCO2 navzdory ventilaci, tachykardie a rigidita; hypertermie může přijít později. Odlišit hypoventilaci, rebreathing a jiné příčiny, ale neoddalovat léčbu při důvodném podezření. MHAUS doporučuje přerušit spouštěče, volat pomoc, ventilovat 100% O2 vysokým průtokem a podat dantrolen úvodně 2,5 mg/kg i.v., opakovat podle odpovědi.',
          'Triggers are volatile agents and succinylcholine in susceptible patients. Early warnings can include unexplained rising EtCO2 despite ventilation, tachycardia and rigidity; hyperthermia may develop later. Consider hypoventilation, rebreathing and other causes, but do not delay treatment when suspicion is strong. MHAUS recommends stopping triggers, calling for help, ventilating with high-flow 100% O2 and giving an initial IV dantrolene dose of 2.5 mg/kg, repeated according to response.'),
      },
    ],
    steps: [
      text('Zjistit osobní i rodinnou anamnézu komplikací anestezie; u rizika MH předem domluvit bezspouštěčovou techniku a přípravu přístroje.', 'Review personal and family anesthesia complications; for MH risk, plan trigger-free anesthesia and machine preparation in advance.'),
      text('Před úvodem zkontrolovat přístroj, zásobu kyslíku, okruh, odsávání a monitoraci plynů.', 'Before induction, check the machine, oxygen supply, circuit, suction and gas monitoring.'),
      text('Při podezření na MH zastavit spouštěče, informovat chirurga, přivolat pomoc a přinést MH set.', 'For suspected MH, stop triggers, inform the surgeon, call for help and obtain the MH kit.'),
      text('Zahájit oxygenaci/ventilaci a dantrolen dle krizového protokolu; řešit hyperkalémii, acidózu a teplotu.', 'Start oxygenation/ventilation and dantrolene according to the crisis protocol; manage hyperkalaemia, acidosis and temperature.'),
      text('Po stabilizaci zajistit intenzivní sledování alespoň 24 hodin a následné došetření susceptibility.', 'After stabilisation, arrange at least 24 hours of intensive monitoring and subsequent susceptibility assessment.'),
    ],
    pitfall: text('Normální teplota nevylučuje začínající MH. Hloubku anestezie nelze zaručit jedním číslem MAC. Tento přehled není celý MH krizový checklist.',
      'Normal temperature does not exclude early MH. Anesthetic depth cannot be guaranteed by one MAC value. This overview is not a complete MH crisis checklist.'),
    sources: ['inhaled', 'mh'],
    cases: [
      {
        id: 'inhalational-mac',
        presentation: text('Monitor ukazuje 1,0 MAC. Pacient je relaxovaný a nemůže se pohybovat.', 'The monitor shows 1.0 MAC. The patient is paralysed and cannot move.'),
        question: text('Co lze bezpečně tvrdit?', 'Which statement is justified?'),
        options: [
          text('Pacient má zaručeně dostatečnou hypnózu i analgezii.', 'Adequate hypnosis and analgesia are guaranteed.'),
          text('MAC je populační ukazatel účinku na pohyb; vyžaduje kontext věku, dalších léků a monitorace.', 'MAC is a population measure of immobility and requires context from age, other drugs and monitoring.'),
          text('MAC je koncentrace kyslíku ve směsi.', 'MAC is the oxygen concentration in the mixture.'),
        ],
        correctIndex: 1,
        explanation: text('MAC nevyjadřuje přímo vědomí ani analgezii jednotlivce. Relaxace navíc odstraní pohyb jako varovný příznak. Hodnotíme podávanou anestezii a monitoraci jako celek.',
          'MAC does not directly measure an individual patient’s consciousness or analgesia. Paralysis also removes movement as a warning sign. Assess the anesthetic delivery and monitoring as a whole.'),
      },
      {
        id: 'inhalational-mh',
        presentation: text('Při sevofluranu rychle roste EtCO2 navzdory zvýšení ventilace; přidává se tachykardie a rigidita. Teplota je zatím 37,2 °C.', 'During sevoflurane anesthesia, EtCO2 rises rapidly despite increased ventilation, with tachycardia and rigidity. Temperature is still 37.2 °C.'),
        question: text('Je bezpečné čekat na hypertermii?', 'Is it safe to wait for hyperthermia?'),
        options: [
          text('Ne. Při podezření zahájit MH protokol, zastavit spouštěče, volat pomoc a připravit dantrolen.', 'No. Initiate the suspected-MH protocol, stop triggers, call for help and prepare dantrolene.'),
          text('Ano, MH vyžaduje teplotu nad 40 °C.', 'Yes, MH requires a temperature above 40 °C.'),
          text('Stačí podat další sukcinylcholin proti rigiditě.', 'Give more succinylcholine to treat rigidity.'),
        ],
        correctIndex: 0,
        explanation: text('Hypertermie může být pozdní. Kombinace nevysvětlitelné hyperkapnie a rigidity při expozici spouštěči je varovná. Sukcinylcholin je sám spouštěč, ne léčba MH.',
          'Hyperthermia can be late. Unexplained hypercapnia and rigidity during trigger exposure are warning signs. Succinylcholine is itself a trigger, not treatment for MH.'),
      },
    ],
  },
  {
    id: 'perioperative',
    title: text('Od předoperačního vyšetření k předání', 'From preoperative assessment to handover'),
    goal: text('Spojit přípravu, monitoraci, analgezii, reverzi blokády a bezpečné předání do jednoho postupu.',
      'Connect preparation, monitoring, analgesia, block reversal and safe handover into one pathway.'),
    sections: [
      {
        heading: text('Před výkonem a při úvodu', 'Before the procedure and at induction'),
        body: text('Ověřit identitu, výkon, souhlas, alergie, komorbidity, obvyklé léky a předchozí anestezie. ASA popisuje celkový stav, nikoli samo o sobě celé operační riziko. Zjišťovat čas i typ posledního jídla/pití a individuální riziko aspirace; dodržet místní pravidla lačnění a plán pro urgentní výkon. Předem domluvit DC, analgezii, oběhovou podporu, krevní ztrátu a pooperační péči. Nestabilní pacient může potřebovat resuscitaci již před úvodem.',
          'Verify identity, procedure, consent, allergies, comorbidities, usual medication and previous anesthesia. ASA describes physical status, not the entire operative risk. Establish the time and type of last intake and individual aspiration risk; use local fasting rules and an emergency-procedure plan. Agree airway, analgesia, haemodynamic support, blood-loss and postoperative plans in advance. An unstable patient may need resuscitation before induction.'),
      },
      {
        heading: text('Během výkonu a při náhlé hypotenzi', 'During surgery and sudden hypotension'),
        body: text('Průběžně sledovat EKG, krevní tlak, oxygenaci, ventilaci, koncentraci anestetika podle techniky, teplotu a při relaxaci kvantitativní nervosvalovou monitoraci. Při hypotenzi ověřit měření a hledat příčinu: hloubku anestezie, krvácení/hypovolémii, arytmii, anafylaxi či obstrukční příčinu. Tekutina a vazopresor nejsou vzájemně zaměnitelné. Posuzovat odpověď, perfuzi, ztráty, diurézu a trend laktátu; při velkém krvácení aktivovat pracovištní protokol.',
          'Monitor ECG, blood pressure, oxygenation, ventilation, agent concentration as appropriate, temperature and quantitative neuromuscular function when paralysis is used. For hypotension, verify the measurement and seek a cause: anesthetic depth, bleeding/hypovolaemia, arrhythmia, anaphylaxis or obstruction. Fluid and vasopressor therapy are not interchangeable. Assess response, perfusion, losses, urine output and lactate trend; activate the local major-haemorrhage protocol when appropriate.'),
      },
      {
        heading: text('TOF a extubace', 'TOF and extubation'),
        body: text('TOF count je počet záškubů (0–4); TOF ratio je poměr čtvrté a první odpovědi. Čtyři záškuby ani zvednutí hlavy nevylučují reziduální blok. ASA doporučuje kvantitativně potvrdit TOF ratio alespoň 0,9 před extubací. Volba reverze závisí na relaxanciu a hloubce bloku, ne jen na hmotnosti. K extubaci je navíc potřeba odpovídající vědomí, ventilace, oxygenace, ochrana DC a plán při selhání; samotné TOF nestačí.',
          'TOF count is the number of twitches (0–4); TOF ratio is the fourth response divided by the first. Four twitches or a head lift do not exclude residual block. ASA recommends quantitative confirmation of a TOF ratio of at least 0.9 before extubation. Reversal depends on the blocking agent and block depth, not weight alone. Extubation also requires appropriate consciousness, ventilation, oxygenation, airway protection and a rescue plan; TOF alone is insufficient.'),
      },
      {
        heading: text('Bolest, PONV a předání', 'Pain, PONV and handover'),
        body: text('Plánovat multimodální analgezii podle výkonu a kontraindikací, opioidy titrovat s monitorací sedace a dechu. Riziko PONV zvyšuje ženské pohlaví, nekuřáctví, anamnéza PONV/kinetóz a pooperační opioidy (Apfel); profylaxe má odpovídat riziku a místnímu protokolu. Předat průběh výkonu, DC, alergie, podané léky a časy, relaxaci/reverzi a TOF, ztráty/tekutiny, bolest, PONV a plán sledování. Po naloxonu hrozí opětovný útlum, protože opioid může působit déle.',
          'Plan multimodal analgesia according to the procedure and contraindications; titrate opioids with sedation and breathing monitoring. Female sex, non-smoking, a history of PONV/motion sickness and postoperative opioids increase PONV risk (Apfel); match prophylaxis to risk and local protocols. Hand over the procedure, airway, allergies, drugs and times, paralysis/reversal and TOF, losses/fluids, pain, PONV and monitoring plan. Respiratory depression can recur after naloxone because the opioid may outlast it.'),
      },
    ],
    steps: [
      text('Před výkonem společně ověřit rizika, připravenost přístroje, pomůcek a záložních plánů.', 'Before the procedure, jointly check risks, machine readiness, equipment and rescue plans.'),
      text('Během výkonu zapisovat trendy a řešit příčiny změn, nikoli jen jednotlivá čísla.', 'During surgery, record trends and treat causes of changes, not just individual numbers.'),
      text('Před ukončením zajistit analgezii, profylaxi PONV a adekvátní zotavení z blokády.', 'Before emergence, ensure analgesia, PONV prophylaxis and adequate recovery from block.'),
      text('Extubovat podle souboru klinických podmínek s připravenou možností záchrany.', 'Extubate using the full set of clinical criteria with rescue options ready.'),
      text('Strukturovaně předat a určit, kdo sleduje pacienta a kdy volat pomoc.', 'Provide structured handover and specify who will monitor the patient and when to call for help.'),
    ],
    pitfall: text('Výsledek tohoto kurzu je jen zpětná vazba k procvičeným otázkám. Neopravňuje k samostatné anestezii a nepotvrzuje atestační úroveň.',
      'Course results are feedback on the questions practised only. They do not authorise independent anesthesia or certify specialist competence.'),
    sources: ['tof', 'sugammadex', 'das'],
    cases: [
      {
        id: 'perioperative-tof',
        presentation: text('Pacient zvedne hlavu a má čtyři záškuby, kvantitativní TOF ratio je 0,65.', 'The patient can lift their head and has four twitches, but the quantitative TOF ratio is 0.65.'),
        question: text('Je nervosvalové zotavení dostatečně potvrzeno pro extubaci?', 'Is neuromuscular recovery adequately confirmed for extubation?'),
        options: [
          text('Ano, čtyři záškuby vždy znamenají plné zotavení.', 'Yes, four twitches always mean full recovery.'),
          text('Ne; řešit reziduální blok a kvantitativně potvrdit TOF ratio alespoň 0,9, spolu s ostatními podmínkami extubace.', 'No; address residual block and quantitatively confirm TOF ratio at least 0.9 alongside the other extubation criteria.'),
          text('Stačí odhad podle času od podání rokuronia.', 'Time elapsed since rocuronium is sufficient.'),
        ],
        correctIndex: 1,
        explanation: text('TOF count a TOF ratio nejsou totéž. Reziduální slabost může být přítomna i při čtyřech odpovědích a zvednutí hlavy. Ani dosažení 0,9 nenahrazuje ostatní podmínky bezpečné extubace.',
          'TOF count and ratio are different. Residual weakness may remain despite four responses and a head lift. Reaching 0.9 does not replace the other safe-extubation criteria either.'),
      },
      {
        id: 'perioperative-hypotension',
        presentation: text('Při operaci klesá tlak, roste krevní ztráta a pacient je tachykardický.', 'During surgery, blood pressure falls, blood loss increases and the patient becomes tachycardic.'),
        question: text('Co je vhodné?', 'What is appropriate?'),
        options: [
          text('Jen opakovat vazopresor bez komunikace s chirurgem.', 'Only repeat a vasopressor without communicating with the surgeon.'),
          text('Ignorovat trend, pokud je SpO2 normální.', 'Ignore the trend if SpO2 is normal.'),
          text('Volat pomoc, ověřit příčinu, komunikovat o kontrole krvácení a zahájit cílenou resuscitaci dle protokolu.', 'Call for help, establish the cause, discuss haemorrhage control and start targeted protocol-based resuscitation.'),
        ],
        correctIndex: 2,
        explanation: text('Normální saturace nezaručuje perfuzi ani dostatečný obsah kyslíku. Vazopresor může být součástí podpory, ale nenahrazuje kontrolu krvácení a adekvátní objemovou/transfuzní strategii.',
          'Normal saturation does not guarantee perfusion or adequate oxygen content. A vasopressor may be part of support but does not replace bleeding control and appropriate volume/transfusion management.'),
      },
      {
        id: 'perioperative-handover',
        presentation: text('Po naloxonu je pacient bdělý a chce okamžitě odejít z dospávacího pokoje.', 'After naloxone, the patient is awake and wants to leave recovery immediately.'),
        question: text('Jaká informace je pro další péči zásadní?', 'What is essential for further care?'),
        options: [
          text('Může se vrátit dechový útlum; předat léky a časy a pokračovat v monitoraci dle průběhu.', 'Respiratory depression may recur; hand over drugs and timing and continue appropriate monitoring.'),
          text('Naloxon trvale ruší všechny účinky jakéhokoli opioidu.', 'Naloxone permanently reverses every effect of any opioid.'),
          text('Bdělost sama prokazuje připravenost k propuštění.', 'Wakefulness alone proves readiness for discharge.'),
        ],
        correctIndex: 0,
        explanation: text('Některé opioidy působí déle než naloxon. Rozhoduje trvalá stabilita dechu, vědomí a oběhu i další kritéria propuštění, nikoli okamžitá odpověď na antidotum.',
          'Some opioids outlast naloxone. Sustained respiratory, neurological and haemodynamic stability and other discharge criteria matter, not just the immediate response to reversal.'),
      },
    ],
  },
];

export type EssentialsAnswers = Record<string, number>;

export function parseEssentialsProgress(raw: string | null): EssentialsAnswers {
  if (raw === null) return {};
  const saved: unknown = JSON.parse(raw);
  if (!saved || typeof saved !== 'object' || !('version' in saved) || saved.version !== ESSENTIALS_VERSION ||
      !('answers' in saved) || !saved.answers || typeof saved.answers !== 'object' || Array.isArray(saved.answers)) {
    throw new Error('Invalid or outdated essentials progress');
  }
  const cases = new Map(ESSENTIALS_LESSONS.flatMap(lesson => lesson.cases.map(item => [item.id, item] as const)));
  const answers: EssentialsAnswers = {};
  for (const [id, value] of Object.entries(saved.answers)) {
    const item = cases.get(id);
    if (!item || typeof value !== 'number' || !Number.isInteger(value) || value < 0 || value >= item.options.length) {
      throw new Error(`Invalid essentials answer: ${id}`);
    }
    answers[id] = value;
  }
  return answers;
}
