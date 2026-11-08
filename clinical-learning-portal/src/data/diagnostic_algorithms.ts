import { AlgorithmStep, AlgorithmStepVitals, EmergencyAlgorithm } from '../types';

/**
 * Diagnostické (nikoli resuscitační) algoritmy urgentního příjmu.
 * Zdroj textů je dvojjazyčný; níže se z něj generují pole pro CS a EN verzi.
 * Výukový obsah – před klinickým použitím ověřte aktuální doporučení a lokální protokoly.
 */

interface Bi {
  cs: string;
  en: string;
}

interface RawChoice {
  text: Bi;
  why: Bi;
  /** Cíl správné volby. Chybná volba (ok !== true) vrací studenta na stejný krok. */
  to?: string;
  ok?: boolean;
}

interface RawStep {
  id: string;
  title: Bi;
  desc: Bi;
  vitals?: AlgorithmStepVitals;
  choices?: RawChoice[];
  outcome?: boolean;
  note?: Bi;
}

interface RawAlgorithm {
  id: string;
  title: Bi;
  short: Bi;
  detail: Bi;
  start: string;
  steps: RawStep[];
}

const b = (cs: string, en: string): Bi => ({ cs, en });

const RAW: RawAlgorithm[] = [
  // ------------------------------------------------------------------ YEARS
  {
    id: 'dx_years_pe',
    title: b('YEARS algoritmus – podezření na plicní embolii', 'YEARS Algorithm – Suspected Pulmonary Embolism'),
    short: b(
      'Hemodynamicky stabilní pacient s podezřením na PE: 3 položky YEARS a flexibilní práh D-dimeru.',
      'Hemodynamically stable patient with suspected PE: three YEARS items and an adaptive D-dimer threshold.'
    ),
    detail: b(
      'Diagnostická simulace: určíte, zda je pacient vhodný pro YEARS, spočítáte položky, zvolíte správný práh D-dimeru a rozhodnete o CT angiografii.',
      'Diagnostic simulation: decide whether the patient is suitable for YEARS, count the items, choose the correct D-dimer threshold and decide on CT pulmonary angiography.'
    ),
    start: 'start',
    steps: [
      {
        id: 'start',
        title: b('Prezentace pacienta', 'Patient presentation'),
        desc: b(
          '58letý muž přichází pro dušnost a pleurální bolest vpravo, která začala před 2 dny po dlouhém letu. Je při vědomí, mluví celými větami. Levé lýtko je ve srovnání s pravým výrazně oteklé a bolestivé. Bez hemoptýzy.',
          'A 58-year-old man presents with dyspnoea and right-sided pleuritic pain that began 2 days after a long flight. He is alert and speaks in full sentences. The left calf is clearly swollen and tender compared with the right. No haemoptysis.'
        ),
        vitals: { hr: 98, bp: '128/82', spo2: 94, rr: 20 },
        choices: [
          {
            text: b(
              'Ověřit hemodynamickou stabilitu a použít YEARS u stabilního pacienta s podezřením na PE',
              'Confirm haemodynamic stability and apply YEARS in this stable patient with suspected PE'
            ),
            to: 'items',
            ok: true,
            why: b(
              'Správně. YEARS je určen pro hemodynamicky stabilní pacienty. Při šoku nebo hypotenzi se postupuje jinak (okamžitá echokardiografie / CTPA a reperfuzní strategie).',
              'Correct. YEARS is for haemodynamically stable patients. In shock or hypotension a different pathway applies (immediate echo / CTPA and reperfusion strategy).'
            ),
          },
          {
            text: b('Odeslat D-dimer a řídit se jen jeho výsledkem', 'Send a D-dimer and act on the result alone'),
            why: b(
              'Nesprávně. D-dimer se interpretuje až společně s klinickou pravděpodobností (u YEARS podle počtu položek). Samotný výsledek bez kontextu vede k chybám.',
              'Incorrect. A D-dimer must be interpreted together with clinical probability (here the YEARS item count). The result alone, without context, leads to errors.'
            ),
          },
          {
            text: b('Propustit s analgetiky pro pleuritidu', 'Discharge with analgesia for pleurisy'),
            why: b(
              'Nesprávně. Pleurální bolest, dušnost, hypoxemie a známky DVT po dlouhém letu jsou vysoce suspektní z PE.',
              'Incorrect. Pleuritic pain, dyspnoea, hypoxaemia and signs of DVT after a long flight strongly suggest PE.'
            ),
          },
        ],
      },
      {
        id: 'items',
        title: b('Položky YEARS', 'YEARS items'),
        desc: b(
          'Položky YEARS: (1) klinické známky hluboké žilní trombózy, (2) hemoptýza, (3) PE je nejpravděpodobnější diagnóza. U pacienta je přítomna asymetrie lýtek s otokem a bolestivostí. Rentgen hrudníku je bez infiltrátu a pneumotoraxu, jiná diagnóza vysvětlující stav není zřejmá. Kolik položek splňuje?',
          'YEARS items: (1) clinical signs of deep vein thrombosis, (2) haemoptysis, (3) PE is the most likely diagnosis. The patient has calf asymmetry with swelling and tenderness. The chest X-ray shows no infiltrate or pneumothorax and no alternative explanation is evident. How many items does he meet?'
        ),
        choices: [
          {
            text: b('2 položky (známky DVT + PE nejpravděpodobnější diagnóza)', '2 items (DVT signs + PE most likely diagnosis)'),
            to: 'ddimer',
            ok: true,
            why: b(
              'Správně. Hemoptýza chybí, ale známky DVT i „PE je nejpravděpodobnější“ platí. Při ≥ 1 položce je práh D-dimeru 500 ng/ml.',
              'Correct. Haemoptysis is absent, but DVT signs and "PE most likely" both apply. With ≥ 1 item the D-dimer threshold is 500 ng/ml.'
            ),
          },
          {
            text: b('0 položek – lýtko je jen „otlačené“ z letadla', '0 items – the calf is merely "compressed" from the flight'),
            why: b(
              'Nesprávně. Jednostranný otok a bolest lýtka jsou klinické známky DVT. Podhodnocení položek vede k příliš vysokému prahu D-dimeru.',
              'Incorrect. Unilateral calf swelling and tenderness are clinical signs of DVT. Under-counting items leads to an overly high D-dimer threshold.'
            ),
          },
          {
            text: b('3 položky včetně hemoptýzy', '3 items including haemoptysis'),
            why: b('Nesprávně. Hemoptýza u pacienta není přítomna.', 'Incorrect. The patient has no haemoptysis.'),
          },
        ],
      },
      {
        id: 'ddimer',
        title: b('Volba prahu D-dimeru', 'Choosing the D-dimer threshold'),
        desc: b(
          'Laboratoř hlásí D-dimer 720 ng/ml (FEU). Jak výsledek interpretujete u pacienta s 2 položkami YEARS?',
          'The laboratory reports a D-dimer of 720 ng/ml (FEU). How do you interpret it in a patient with 2 YEARS items?'
        ),
        choices: [
          {
            text: b(
              'Hodnota ≥ 500 ng/ml při ≥ 1 položce → PE nelze vyloučit, indikovat CT plicní angiografii',
              'Value ≥ 500 ng/ml with ≥ 1 item → PE is not excluded, order CT pulmonary angiography'
            ),
            to: 'ctpa',
            ok: true,
            why: b(
              'Správně. Pouze pacienti s 0 položkami a D-dimerem < 1000 ng/ml, nebo s ≥ 1 položkou a D-dimerem < 500 ng/ml, mohou mít PE vyloučenu bez zobrazení.',
              'Correct. Only patients with 0 items and D-dimer < 1000 ng/ml, or ≥ 1 item and D-dimer < 500 ng/ml, can have PE excluded without imaging.'
            ),
          },
          {
            text: b('Hodnota < 1000 ng/ml → PE vyloučena', 'Value < 1000 ng/ml → PE excluded'),
            why: b(
              'Nesprávně. Práh 1000 ng/ml platí jen při 0 položkách YEARS. U tohoto pacienta platí práh 500 ng/ml.',
              'Incorrect. The 1000 ng/ml threshold applies only with 0 YEARS items. This patient needs the 500 ng/ml threshold.'
            ),
          },
          {
            text: b('Zopakovat D-dimer za 6 hodin', 'Repeat the D-dimer in 6 hours'),
            why: b(
              'Nesprávně. Opakování D-dimeru nic nemění na indikaci zobrazení; zdržuje diagnózu.',
              'Incorrect. Repeating the D-dimer does not change the need for imaging and delays the diagnosis.'
            ),
          },
        ],
      },
      {
        id: 'ctpa',
        title: b('Výsledek CTPA', 'CTPA result'),
        desc: b(
          'CTPA ukazuje segmentální embolii v pravém dolním laloku bez známek přetížení pravé komory. Pacient je dál stabilní. Jaký je další krok?',
          'CTPA shows a segmental embolus in the right lower lobe without right ventricular strain. The patient remains stable. What is the next step?'
        ),
        choices: [
          {
            text: b(
              'Zahájit antikoagulaci, stratifikovat riziko (např. sPESI, troponin, RV na CT/echo) a rozhodnout o dispozici',
              'Start anticoagulation, risk-stratify (e.g. sPESI, troponin, RV on CT/echo) and decide on disposition'
            ),
            to: 'done',
            ok: true,
            why: b(
              'Správně. Potvrzená PE se léčí antikoagulací; riziková stratifikace určí, zda je možná časná dispozice domů, nebo hospitalizace.',
              'Correct. Confirmed PE is treated with anticoagulation; risk stratification decides between early discharge and admission.'
            ),
          },
          {
            text: b('Považovat nález za náhodný a nelécit', 'Treat the finding as incidental and give no treatment'),
            why: b(
              'Nesprávně. Symptomatická segmentální PE se léčí.',
              'Incorrect. Symptomatic segmental PE is treated.'
            ),
          },
        ],
      },
      {
        id: 'done',
        title: b('Diagnostický postup dokončen', 'Diagnostic pathway completed'),
        desc: b(
          'Správně jste použili YEARS: stabilita → počet položek → odpovídající práh D-dimeru → CTPA → léčba a stratifikace. Poznámka: v těhotenství se YEARS používá s modifikací (CTPA/UZ dle protokolu), vždy si ověřte lokální postup.',
          'You applied YEARS correctly: stability → item count → matching D-dimer threshold → CTPA → treatment and stratification. Note: in pregnancy YEARS is used with modifications (CTPA/ultrasound per protocol); always check the local pathway.'
        ),
        outcome: true,
      },
    ],
  },

  // --------------------------------------------------------------- SNNOOP10
  {
    id: 'dx_snnoop10_headache',
    title: b('SNOOP / SNNOOP10 – červené vlajky bolesti hlavy', 'SNOOP / SNNOOP10 – Headache Red Flags'),
    short: b(
      'Odlišení sekundární bolesti hlavy: systematické hledání červených vlajek SNNOOP10 a první kroky.',
      'Identifying secondary headache: systematic search for SNNOOP10 red flags and first steps.'
    ),
    detail: b(
      'Diagnostická simulace: projdete červené vlajky bolesti hlavy (Systemic symptoms, Neoplasm, Neurologic deficit, Onset sudden, Older age, Pattern change, Positional, Precipitated by Valsalva, Papilloedema, Progressive/atypical, Pregnancy, Painful eye, Post-traumatic, Pathology of immune system, Painkiller overuse).',
      'Diagnostic simulation: you work through the headache red flags (Systemic symptoms, Neoplasm, Neurologic deficit, Onset sudden, Older age, Pattern change, Positional, Precipitated by Valsalva, Papilloedema, Progressive/atypical, Pregnancy, Painful eye, Post-traumatic, Pathology of immune system, Painkiller overuse).'
    ),
    start: 'start',
    steps: [
      {
        id: 'start',
        title: b('Prezentace pacientky', 'Patient presentation'),
        desc: b(
          '62letá žena přichází pro 3 dny trvající bolest hlavy, kterou dosud nikdy neměla. Má teplotu 38,4 °C, je unavená a bolí ji při předklonu šíje.',
          'A 62-year-old woman presents with a 3-day headache unlike any she has had before. She has a temperature of 38.4 °C, feels unwell and has pain on neck flexion.'
        ),
        vitals: { hr: 104, bp: '118/70', spo2: 97, rr: 18 },
        choices: [
          {
            text: b(
              'Systematicky projít červené vlajky SNNOOP10 dříve, než bolest označím za primární',
              'Systematically review the SNNOOP10 red flags before labelling the headache as primary'
            ),
            to: 'flags',
            ok: true,
            why: b(
              'Správně. Primární bolest hlavy je diagnóza per exclusionem – nejdřív je potřeba vyloučit sekundární příčiny podle červených vlajek.',
              'Correct. Primary headache is a diagnosis of exclusion – secondary causes must be excluded first using red flags.'
            ),
          },
          {
            text: b('Podat analgetika a diagnostikovat migrénu', 'Give analgesia and diagnose migraine'),
            why: b(
              'Nesprávně. Nová bolest hlavy po 50. roce s horečkou a meningeálním drážděním není migréna, dokud není vyloučena sekundární příčina.',
              'Incorrect. A new headache after age 50 with fever and meningism is not migraine until a secondary cause is excluded.'
            ),
          },
        ],
      },
      {
        id: 'flags',
        title: b('Vyhodnocení červených vlajek', 'Red-flag assessment'),
        desc: b(
          'Které vlajky u pacientky jsou přítomny a co z nich plyne?',
          'Which flags are present and what follows?'
        ),
        choices: [
          {
            text: b(
              'Systemic (horečka), Older age (nový začátek > 50 let) a meningeální dráždění → sekundární příčina, nejspíše infekce CNS; neodkládat vyšetření a léčbu',
              'Systemic (fever), Older age (new onset > 50 years) and meningism → secondary cause, likely CNS infection; do not delay work-up and treatment'
            ),
            to: 'tx',
            ok: true,
            why: b(
              'Správně. Již jediná červená vlajka vyžaduje další vyšetření; zde jsou tři a obraz odpovídá podezření na bakteriální meningitidu.',
              'Correct. A single red flag already warrants further work-up; here there are three and the picture suggests bacterial meningitis.'
            ),
          },
          {
            text: b('Žádná vlajka, horečka a ztuhlost šíje jsou nespecifické', 'No flags – fever and neck stiffness are non-specific'),
            why: b(
              'Nesprávně. Systémové příznaky (horečka) a věk nad 50 let jsou typické červené vlajky.',
              'Incorrect. Systemic symptoms (fever) and age over 50 are classic red flags.'
            ),
          },
        ],
      },
      {
        id: 'tx',
        title: b('Postup při podezření na bakteriální meningitidu', 'Management of suspected bacterial meningitis'),
        desc: b(
          'Neurologicky: GCS 14, bez ložiskového deficitu, bez epileptického záchvatu, bez papiloedému, imunokompetentní. Jaký je správný postup?',
          'Neurologically: GCS 14, no focal deficit, no seizure, no papilloedema, immunocompetent. What is the correct approach?'
        ),
        choices: [
          {
            text: b(
              'Odběr hemokultur, okamžité empirické antibiotikum + dexamethason; lumbální punkce lze provést bez předchozího CT, protože nejsou kontraindikační nálezy',
              'Take blood cultures, give empirical antibiotic + dexamethasone immediately; lumbar puncture can proceed without prior CT because there are no contraindicating findings'
            ),
            to: 'done',
            ok: true,
            why: b(
              'Správně. Antibiotika se neodkládají kvůli zobrazení. CT před LP je namístě při ložiskovém deficitu, záchvatu, výrazné poruše vědomí, papiloedému nebo imunosupresi.',
              'Correct. Antibiotics must not be delayed for imaging. CT before LP is indicated with focal deficit, seizure, markedly reduced consciousness, papilloedema or immunosuppression.'
            ),
          },
          {
            text: b('Nejprve CT hlavy a LP, antibiotika až po výsledku likvoru', 'CT head and LP first, antibiotics only after CSF results'),
            why: b(
              'Nesprávně. Odkládání antibiotik zvyšuje mortalitu. Léčba se zahajuje ihned po odběru hemokultur.',
              'Incorrect. Delaying antibiotics increases mortality. Treatment starts right after blood cultures.'
            ),
          },
        ],
      },
      {
        id: 'done',
        title: b('Diagnostický postup dokončen', 'Diagnostic pathway completed'),
        desc: b(
          'Využili jste SNNOOP10 správně: červené vlajky → rozpoznání sekundární příčiny → včasná léčba. Pozn.: náhlý začátek („hromová“ bolest) řeší samostatně pravidlo Ottawa pro SAH.',
          'You used SNNOOP10 correctly: red flags → recognise a secondary cause → timely treatment. Note: sudden-onset ("thunderclap") headache is handled separately by the Ottawa SAH Rule.'
        ),
        outcome: true,
      },
    ],
  },

  // --------------------------------------------------------------- Ottawa SAH
  {
    id: 'dx_ottawa_sah',
    title: b('Ottawa SAH pravidlo – náhlá silná bolest hlavy', 'Ottawa SAH Rule – Acute Severe Headache'),
    short: b(
      'Kdy je nutné vyšetřovat subarachnoidální krvácení u nové, silné bolesti hlavy.',
      'When to investigate for subarachnoid haemorrhage in new severe headache.'
    ),
    detail: b(
      'Diagnostická simulace: ověříte, zda lze pravidlo použít, vyhodnotíte kritéria (věk ≥ 40, bolest/ztuhlost šíje, svědkem pozorovaná ztráta vědomí, nástup při námaze, hromová bolest, omezená flexe krku) a zvolíte další vyšetření.',
      'Diagnostic simulation: you verify the rule applies, evaluate the criteria (age ≥ 40, neck pain/stiffness, witnessed LOC, onset during exertion, thunderclap headache, limited neck flexion) and choose the next test.'
    ),
    start: 'start',
    steps: [
      {
        id: 'start',
        title: b('Prezentace pacienta', 'Patient presentation'),
        desc: b(
          '34letý muž udává náhlou, nejsilnější bolest hlavy v životě, která vznikla před 3 hodinami při posilování. Je při vědomí (GCS 15), bez ložiskového neurologického deficitu, bez trauma, dříve migrénu neměl.',
          'A 34-year-old man reports a sudden, worst-ever headache that began 3 hours ago while weightlifting. He is alert (GCS 15), has no focal neurological deficit, no trauma and no prior migraine history.'
        ),
        vitals: { hr: 82, bp: '146/90', spo2: 98, rr: 16 },
        choices: [
          {
            text: b(
              'Ověřit, že je pacient vhodný pro pravidlo (≥ 15 let, nová silná atraumatická bolest, maximum do 1 h, bez nového deficitu)',
              'Confirm he qualifies for the rule (≥ 15 years, new severe atraumatic headache, peak within 1 h, no new deficit)'
            ),
            to: 'criteria',
            ok: true,
            why: b(
              'Správně. Pravidlo se nepoužívá u pacientů s novým neurologickým deficitem, dříve známým aneuryzmatem/SAH/nádorem mozku nebo opakovanými bolestmi hlavy.',
              'Correct. The rule is not used in patients with new neurological deficit, known aneurysm/SAH/brain tumour, or recurrent headaches.'
            ),
          },
          {
            text: b('Podat triptan a pozorovat', 'Give a triptan and observe'),
            why: b(
              'Nesprávně. Triptany jsou při podezření na SAH nevhodné a diagnóza nebyla vyloučena.',
              'Incorrect. Triptans are inappropriate when SAH is suspected and the diagnosis has not been excluded.'
            ),
          },
        ],
      },
      {
        id: 'criteria',
        title: b('Vyhodnocení kritérií', 'Evaluating the criteria'),
        desc: b(
          'Pacient je mladší než 40 let. Bolest vznikla při námaze a vrcholila během sekund. Šíje je volná, ztrátu vědomí neměl. Je pravidlo pozitivní?',
          'The patient is younger than 40. Pain began on exertion and peaked within seconds. Neck is supple, no loss of consciousness. Is the rule positive?'
        ),
        choices: [
          {
            text: b(
              'Ano – nástup při námaze a hromová bolest jsou kritéria; stačí jedno splněné kritérium',
              'Yes – onset during exertion and thunderclap headache are criteria; one positive criterion suffices'
            ),
            to: 'ct',
            ok: true,
            why: b(
              'Správně. Pravidlo je pozitivní při jakémkoli splněném kritériu, proto je nutné další vyšetření.',
              'Correct. The rule is positive with any single criterion, so further investigation is required.'
            ),
          },
          {
            text: b('Ne – je mu méně než 40 let, takže je pravidlo negativní', 'No – he is under 40, so the rule is negative'),
            why: b(
              'Nesprávně. Věk je jen jedno z kritérií; ostatní se hodnotí nezávisle.',
              'Incorrect. Age is just one criterion; the others are assessed independently.'
            ),
          },
        ],
      },
      {
        id: 'ct',
        title: b('Zobrazení', 'Imaging'),
        desc: b(
          'Nekontrastní CT hlavy provedené 3 hodiny od začátku bolesti, hodnocené zkušeným radiologem na moderním přístroji, je negativní. Jak postupovat?',
          'A non-contrast head CT performed 3 hours from onset, read by an experienced radiologist on a modern scanner, is negative. How do you proceed?'
        ),
        choices: [
          {
            text: b(
              'CT do 6 hodin od začátku s kvalitním čtením je negativní → SAH je velmi nepravděpodobná; hledat jiné příčiny (např. disekce, RCVS, benigní hromová bolest)',
              'CT within 6 hours of onset with expert reading is negative → SAH is very unlikely; look for other causes (e.g. dissection, RCVS, benign thunderclap headache)'
            ),
            to: 'done',
            ok: true,
            why: b(
              'Správně. U negativního časného CT je SAH velmi nepravděpodobná. Při pozdějším CT (> 6 h), neadekvátním čtení nebo vysokém podezření se doplňuje LP či CTA podle lokálního postupu.',
              'Correct. After an early negative CT, SAH is very unlikely. If the CT is later (> 6 h), reading is inadequate or suspicion remains high, add LP or CTA per local pathway.'
            ),
          },
          {
            text: b('Provést vždy LP bez ohledu na časné negativní CT', 'Always perform LP regardless of the early negative CT'),
            why: b(
              'Nesprávně. LP je vyhrazena pro CT po 6 hodinách, pochybné čtení nebo trvající vysoké podezření.',
              'Incorrect. LP is reserved for CT after 6 hours, inconclusive reading or persistent high suspicion.'
            ),
          },
        ],
      },
      {
        id: 'done',
        title: b('Diagnostický postup dokončen', 'Diagnostic pathway completed'),
        desc: b(
          'Správně jste použili Ottawa SAH pravidlo: vhodnost pacienta → kritéria → časné CT → hledání alternativ. Pravidlo slouží k rozhodnutí o vyšetřování, nenahrazuje klinický úsudek.',
          'You applied the Ottawa SAH Rule correctly: eligibility → criteria → early CT → searching for alternatives. The rule supports the decision to investigate and does not replace clinical judgement.'
        ),
        outcome: true,
      },
    ],
  },

  // ------------------------------------------------------------------ HEART
  {
    id: 'dx_heart_score',
    title: b('HEART skóre – bolest na hrudi', 'HEART Score – Chest Pain'),
    short: b(
      'Stratifikace rizika MACE u pacienta s bolestí na hrudi: History, ECG, Age, Risk factors, Troponin.',
      'MACE risk stratification in chest pain: History, ECG, Age, Risk factors, Troponin.'
    ),
    detail: b(
      'Diagnostická simulace: spočítáte HEART skóre, zařadíte pacienta do rizikové skupiny a zvolíte vhodnou dispozici.',
      'Diagnostic simulation: calculate the HEART score, assign a risk group and choose an appropriate disposition.'
    ),
    start: 'start',
    steps: [
      {
        id: 'start',
        title: b('Prezentace pacienta', 'Patient presentation'),
        desc: b(
          '52letý muž s hypertenzí, hypercholesterolemií a kouřením přichází pro tlak na hrudi trvající hodinu, částečně pohybově závislý. Anamnéza je mírně suspektní. EKG ukazuje nespecifické repolarizační změny bez ST elevací. Troponin je při příjmu v normě.',
          'A 52-year-old man with hypertension, hypercholesterolaemia and smoking presents with chest pressure for one hour, partly positional. History is moderately suspicious. ECG shows non-specific repolarisation changes without ST elevation. Troponin on arrival is normal.'
        ),
        vitals: { hr: 78, bp: '142/88', spo2: 98, rr: 16, rhythm: 'SR' },
        choices: [
          {
            text: b(
              'Spočítat HEART skóre z pěti složek (History, ECG, Age, Risk factors, Troponin)',
              'Calculate the HEART score from five components (History, ECG, Age, Risk factors, Troponin)'
            ),
            to: 'score',
            ok: true,
            why: b(
              'Správně. Normální počáteční troponin sám nestačí – je třeba posoudit celkové riziko a případně opakovat měření.',
              'Correct. A normal initial troponin is not enough – overall risk must be assessed and the measurement possibly repeated.'
            ),
          },
          {
            text: b('Propustit, protože je troponin v normě', 'Discharge because troponin is normal'),
            why: b(
              'Nesprávně. Jediný normální troponin při krátkém trvání potíží nevylučuje AKS a neřeší celkové riziko.',
              'Incorrect. A single normal troponin early in symptom course does not exclude ACS or address overall risk.'
            ),
          },
        ],
      },
      {
        id: 'score',
        title: b('Výpočet skóre', 'Score calculation'),
        desc: b(
          'History: mírně suspektní = 1. ECG: nespecifické repolarizační změny = 1. Age: 52 let (45–64) = 1. Risk factors: ≥ 3 rizikové faktory (hypertenze, hypercholesterolemie, kouření) = 2. Troponin: v normě = 0. Jaký je výsledek?',
          'History: moderately suspicious = 1. ECG: non-specific repolarisation changes = 1. Age: 52 (45–64) = 1. Risk factors: ≥ 3 factors (hypertension, hypercholesterolaemia, smoking) = 2. Troponin: normal = 0. What is the result?'
        ),
        choices: [
          {
            text: b('5 bodů – střední riziko (4–6 bodů)', '5 points – moderate risk (4–6 points)'),
            to: 'dispo',
            ok: true,
            why: b(
              '1 + 1 + 1 + 2 + 0 = 5. Střední riziko odpovídá výrazně vyššímu riziku MACE než nízké skupiny (0–3).',
              '1 + 1 + 1 + 2 + 0 = 5. Moderate risk corresponds to a markedly higher MACE risk than the low group (0–3).'
            ),
          },
          {
            text: b('2 body – nízké riziko', '2 points – low risk'),
            why: b(
              'Nesprávně. Součet je 5. Podhodnocení skóre by vedlo k nebezpečnému propuštění.',
              'Incorrect. The sum is 5. Under-scoring would lead to an unsafe discharge.'
            ),
          },
          {
            text: b('8 bodů – vysoké riziko', '8 points – high risk'),
            why: b('Nesprávně. Součet je 5.', 'Incorrect. The sum is 5.'),
          },
        ],
      },
      {
        id: 'dispo',
        title: b('Dispozice', 'Disposition'),
        desc: b(
          'Jak naložíte s pacientem se skóre 5?',
          'How do you manage a patient with a score of 5?'
        ),
        choices: [
          {
            text: b(
              'Observace/hospitalizace, sériové (hs-)troponiny dle protokolu, monitorace a další testování (zátěžový test nebo CT koronarografie)',
              'Observation/admission, serial (hs-)troponins per protocol, monitoring and further testing (stress test or coronary CTA)'
            ),
            to: 'done',
            ok: true,
            why: b(
              'Správně. Střední riziko vyžaduje observaci a další vyšetření. Propuštění je vyhrazeno pro nízké riziko (0–3) po sériových normálních troponinech.',
              'Correct. Moderate risk requires observation and further testing. Discharge is reserved for low risk (0–3) after serially normal troponins.'
            ),
          },
          {
            text: b('Propustit s doporučením návštěvy praktika', 'Discharge with advice to see a GP'),
            why: b(
              'Nesprávně. Skóre 5 není kandidát na časné propuštění bez dalšího vyšetření.',
              'Incorrect. A score of 5 is not a candidate for early discharge without further evaluation.'
            ),
          },
        ],
      },
      {
        id: 'done',
        title: b('Diagnostický postup dokončen', 'Diagnostic pathway completed'),
        desc: b(
          'Správně jste použili HEART skóre: výpočet → rizikové pásmo → dispozice. Pozn.: skóre doplňuje, ale nenahrazuje klinický úsudek ani lokální protokol (např. ESC 0/1 h hs-troponin).',
          'You applied the HEART score correctly: calculation → risk band → disposition. Note: the score complements but does not replace clinical judgement or local protocol (e.g. ESC 0/1 h hs-troponin).'
        ),
        outcome: true,
      },
    ],
  },
];

const localize = (lang: 'cs' | 'en'): EmergencyAlgorithm[] =>
  RAW.map((algo) => {
    const steps: Record<string, AlgorithmStep> = {};
    for (const s of algo.steps) {
      const step: AlgorithmStep = {
        id: s.id,
        title: s.title[lang],
        description: s.desc[lang],
        type: s.outcome ? 'outcome_success' : 'decision',
      };
      if (s.vitals) step.vitals = s.vitals;
      if (s.note) step.criticalNote = s.note[lang];
      if (s.choices) {
        step.choices = s.choices.map((c) => ({
          text: c.text[lang],
          nextStepId: c.ok && c.to ? c.to : s.id,
          rationale: c.why[lang],
          ...(c.ok ? { isCorrect: true } : {}),
        }));
      }
      steps[s.id] = step;
    }
    return {
      id: algo.id,
      title: algo.title[lang],
      shortDescription: algo.short[lang],
      detailedDescription: algo.detail[lang],
      category: 'diagnostic' as const,
      startStepId: algo.start,
      steps,
    };
  });

export const DIAGNOSTIC_ALGORITHMS_CS: EmergencyAlgorithm[] = localize('cs');
export const DIAGNOSTIC_ALGORITHMS_EN: EmergencyAlgorithm[] = localize('en');
