import { Medication } from '../types';

export const ANESTHESIA_MEDS: Medication[] = [
  {
    id: 'propofol',
    name: 'Propofol',
    genericName: 'Propofol (Diprivan)',
    category: 'induction',
    categoryLabel: 'Induction Agent',
    class: 'Alkylphenol derivative / GABA-A Agonist',
    mechanism: 'Potentiates GABA-A receptors, increasing chloride conductance, which leads to hyperpolarization and rapid cerebral suppression.',
    indications: [
      'Induction of general anesthesia',
      'Maintenance of anesthesia (TIVA - Total Intravenous Anesthesia)',
      'ICU sedation / procedural sedation'
    ],
    dosageInduction: '1.5 - 2.5 mg/kg IV bolus (Reduce dose to 1.0 - 1.5 mg/kg in elderly or ASA III/IV patients).',
    pediatricDosage: '2.5 - 3.5 mg/kg IV (higher weight-based requirements due to larger volume of distribution).',
    standardPrep: '1% emulsion (10 mg/mL) in 20mL or 50mL vials.',
    onset: '30 - 45 seconds (Rapid arm-brain travel time).',
    duration: '5 - 10 minutes (due to rapid redistribution out of vessel-rich group).',
    contraindications: [
      'Hypersensitivity to propofol, egg lecithin, or soybean oil (caution)',
      'Hemodynamic instability / severe hypovolemic shock',
      'Severe aortic stenosis (highly sensitive to vasodilation)'
    ],
    adverseEffects: [
      'Significant hypotension (systemic vasodilation and mild myocardial depression)',
      'Dose-dependent respiratory depression and transient apnea',
      'Pain on injection (can be minimized by pre-administering lidocaine or using a large vein)',
      'Myoclonus on induction (non-epileptiform)'
    ],
    pearls: [
      'Possesses powerful antiemetic properties, making it the agent of choice for patients with a high risk of PONV (Postoperative Nausea and Vomiting).',
      'Blunts airway reflexes exceptionally well, facilitating easier laryngeal mask airway (LMA) placement without muscle relaxants.',
      'Prolonged high-dose infusion (>48 hours, >5 mg/kg/hr) can lead to Propofol Infusion Syndrome (PRIS): severe metabolic acidosis, rhabdomyolysis, hyperkalemia, and cardiovascular collapse.'
    ]
  },
  {
    id: 'ketamine',
    name: 'Ketamine',
    genericName: 'Ketamine (Ketalar)',
    category: 'induction',
    categoryLabel: 'Induction Agent / Analgesic',
    class: 'Phencyclidine derivative / NMDA Receptor Antagonist',
    mechanism: 'Non-competitive antagonist of NMDA receptors, inhibiting glutamate-mediated excitatory neurotransmission; also inhibits neuronal reuptake of catecholamines.',
    indications: [
      'Induction of general anesthesia (especially in shock, hypovolemia, or severe bronchospasm)',
      'Analgesic adjunct in sub-anesthetic doses (e.g. chronic pain, post-op pain)',
      'Procedural sedation in pediatric or emergency medicine'
    ],
    dosageInduction: '1.0 - 2.0 mg/kg IV or 4.0 - 10.0 mg/kg IM.',
    pediatricDosage: '1.5 - 2.0 mg/kg IV or 4.0 - 8.0 mg/kg IM.',
    standardPrep: '10 mg/mL, 50 mg/mL, or 100 mg/mL solutions.',
    onset: '30 - 60 seconds IV; 3 - 5 minutes IM.',
    duration: '10 - 20 minutes IV (redistribution half-life). Complete recovery takes 1-2 hours.',
    contraindications: [
      'Severe uncompensated hypertension or coronary artery disease',
      'Increased intraocular pressure or open eye injury (relative)',
      'Known psychiatric illness / schizophrenia (high risk of hallucinations)'
    ],
    adverseEffects: [
      'Sympathetic stimulation: transient hypertension, tachycardia, and increased myocardial oxygen demand',
      'Emergence delirium, vivid dreams, or hallucinations (mitigated by co-administering midazolam)',
      'Hypersalivation (can be mitigated by glycopyrrolate)',
      'Laryngospasm (rare, but increased risk due to preserved upper airway reflexes)'
    ],
    pearls: [
      'Produces "dissociative anesthesia": the patient appears awake (eyes open, blank stare) but is disconnected from their environment and feels no pain.',
      'Maintains protective airway reflexes and spontaneous respiration better than any other induction agent (though apnea can still occur with rapid IV injection).',
      'Acts as a potent bronchodilator by releasing endogenous catecholamines. Excellent choice for patients with active severe asthma or status asthmaticus.'
    ]
  },
  {
    id: 'etomidate',
    name: 'Etomidate',
    genericName: 'Etomidate (Amidate)',
    category: 'induction',
    categoryLabel: 'Induction Agent',
    class: 'Carboxylated imidazole derivative / GABA-A Agonist',
    mechanism: 'Facilitates GABA-A receptor neurotransmission to hyperpolarize neuronal membranes.',
    indications: [
      'Induction of general anesthesia, especially in patients with severe cardiovascular disease, valvular dysfunction, hypovolemia, or CAD.'
    ],
    dosageInduction: '0.2 - 0.3 mg/kg IV.',
    pediatricDosage: '0.2 - 0.3 mg/kg IV (not commonly used under age 10 unless hemodynamically unstable).',
    standardPrep: '2 mg/mL solution.',
    onset: '30 - 60 seconds.',
    duration: '3 - 5 minutes (rapid recovery due to redistribution).',
    contraindications: [
      'Known hypersensitivity to etomidate',
      'Severe sepsis/septic shock (relative, due to adrenal suppression)',
      'Adrenal insufficiency'
    ],
    adverseEffects: [
      'Myoclonus (involuntary muscle movement on induction) - highly common unless pre-treated with fentanyl or midazolam',
      'Adrenocortical suppression: inhibits 11-beta-hydroxylase, blocking cortisol synthesis for 12-24 hours after a single dose',
      'Pain on injection and high incidence of postoperative nausea and vomiting (PONV)'
    ],
    pearls: [
      'The most hemodynamically stable induction agent available. Negligible myocardial depression and vasodilation; blood pressure remains stable on induction.',
      'Does not release histamine, making it incredibly safe for patients with high allergic potential or severe reactive airway disease.',
      'The adrenal suppression issue remains highly debated. While a single dose increases cortisol-free periods, large RCTs show minimal clinically significant increase in mortality for septic patients received in ED, but continuous infusions are strictly avoided.'
    ]
  },
  {
    id: 'succinylcholine',
    name: 'Succinylcholine',
    genericName: 'Succinylcholine (Anectine / Sux)',
    category: 'paralytics',
    categoryLabel: 'Muscle Relaxant',
    class: 'Depolarizing Neuromuscular Blocker (NMB)',
    mechanism: 'Acts as an agonist at nicotinic acetylcholine receptors at the motor endplate, causing prolonged depolarization which prevents further action potentials.',
    indications: [
      'Rapid Sequence Induction and Intubation (RSI) to rapidly secure the airway',
      'Treatment of acute laryngospasm'
    ],
    dosageInduction: '1.0 - 1.5 mg/kg IV (based on actual body weight) or 3 - 4 mg/kg IM (if no IV access).',
    pediatricDosage: '1.5 - 2.0 mg/kg IV (infants require higher doses due to larger extracellular fluid volume).',
    standardPrep: '20 mg/mL solution.',
    onset: '30 - 60 seconds IV (fastest onset of all paralytics).',
    duration: '5 - 10 minutes (rapid hydrolysis by plasma cholinesterase / pseudocholinesterase).',
    contraindications: [
      'Known genetic abnormality of pseudocholinesterase (prolonged paralysis)',
      'Hyperkalemia or risk of hyperkalemia (burns >24 hours old, spinal cord injury/paralysis, severe crush injuries, chronic disuse atrophy)',
      'History of Malignant Hyperthermia (absolute trigger)',
      'Penetrating eye injury (depolarization transiently raises intraocular pressure)'
    ],
    adverseEffects: [
      'Transient hyperkalemia (typically increases serum K+ by 0.5 - 1.0 mEq/L safely, but dangerous in vulnerable populations)',
      'Fasciculations (muscle twitching) which can cause post-operative muscle soreness (myalgia)',
      'Bradycardia (especially in pediatric patients or with a second dose - pre-treat children with atropine)',
      'Malignant Hyperthermia (severe trigger - requires dantrolene)'
    ],
    pearls: [
      'The classic "gold standard" for Rapid Sequence Induction (RSI) because of its unmatched dual speed of rapid onset (30-60s) and brief duration (~5-10min).',
      'If intubation fails and mask ventilation is impossible, its short duration is a key safety net—the patient will resume spontaneous ventilation quickly.',
      'Does not have a chemical reversal agent; must wait for metabolism by plasma pseudocholinesterase.'
    ]
  },
  {
    id: 'rocuronium',
    name: 'Rocuronium',
    genericName: 'Rocuronium bromide (Zemuron)',
    category: 'paralytics',
    categoryLabel: 'Muscle Relaxant',
    class: 'Non-depolarizing NMB (Aminosteroid)',
    mechanism: 'Acts as a competitive antagonist at nicotinic acetylcholine receptors, blocking acetylcholine from binding and preventing depolarization.',
    indications: [
      'Facilitation of tracheal intubation during routine or Rapid Sequence Induction (RSI)',
      'Intraoperative skeletal muscle relaxation during surgery',
      'ICU paralysis to facilitate mechanical ventilation'
    ],
    dosageInduction: '0.6 mg/kg IV for standard intubation; 1.0 - 1.2 mg/kg IV for Rapid Sequence Induction (RSI).',
    pediatricDosage: '0.6 - 1.0 mg/kg IV.',
    standardPrep: '10 mg/mL solution.',
    onset: '60 - 90 seconds (at RSI dose of 1.2 mg/kg, onset matches succinylcholine at ~60 seconds).',
    duration: '35 - 50 minutes (intermediate-acting, but prolonged in hepatic impairment or elderly).',
    contraindications: [
      'Hypersensitivity to rocuronium or other aminosteroid neuromuscular blockers'
    ],
    adverseEffects: [
      'Prolonged neuromuscular blockade (especially if hypothermia or acidosis is present)',
      'Anaphylaxis (rare, but neuromuscular blockers are the most common cause of perioperative anaphylaxis)'
    ],
    pearls: [
      'Often replaces succinylcholine for RSI in patients with hyperkalemia, renal failure, neuromuscular disease, or burns.',
      'Can be instantly reversed at any depth of blockade using Sugammadex (Bridion) at appropriate doses (2, 4, or 16 mg/kg depending on depth).',
      'Does not cause fasciculations or raise intraocular pressure.'
    ]
  },
  {
    id: 'fentanyl',
    name: 'Fentanyl',
    genericName: 'Fentanyl (Sublimaze)',
    category: 'analgesics',
    categoryLabel: 'Analgesic (Opioid)',
    class: 'Synthetic Opioid / mu-Receptor Agonist',
    mechanism: 'Binds to mu-opioid receptors in the central nervous system, inhibiting ascending pain pathways and altering pain perception and response.',
    indications: [
      'Analgesic adjunct on induction of anesthesia (blunts sympathetic pressor response to intubation)',
      'Intraoperative pain control',
      'Postoperative analgesia and ICU sedation'
    ],
    dosageInduction: '1 - 2 mcg/kg IV (up to 5 - 10 mcg/kg for cardiac anesthesia or strong reflex suppression).',
    pediatricDosage: '1 - 2 mcg/kg IV.',
    standardPrep: '50 mcg/mL solution.',
    onset: '1 - 2 minutes IV.',
    duration: '30 - 60 minutes (intermediate, rapid termination due to redistribution into fat and muscle).',
    contraindications: [
      'Severe respiratory depression (if not intubating or ventilated)',
      'Hypersensitivity to fentanyl or opioid class'
    ],
    adverseEffects: [
      'Respiratory depression and secondary apnea',
      'Bradycardia (central vagal stimulation)',
      'Nausea and vomiting (stimulation of chemoreceptor trigger zone)',
      'Pruritus (itching - though far less histamine release than morphine)',
      'Chest wall rigidity ("stiff chest syndrome") with rapid high-dose IV administration (>5 mcg/kg) - treated with muscle relaxants'
    ],
    pearls: [
      'A primary agent used to blunt the "pressor response" (hypertension and tachycardia) caused by laryngoscopy and tracheal intubation.',
      'Highly lipophilic, crossing the blood-brain barrier rapidly, and has virtually no histamine release—making it highly stable hemodynamically.',
      'Can be reversed with Naloxone (0.04 - 0.4 mg IV) if respiratory depression occurs.'
    ]
  },
  {
    id: 'midazolam',
    name: 'Midazolam',
    genericName: 'Midazolam (Versed)',
    category: 'sedatives',
    categoryLabel: 'Sedative / Anxiolytic',
    class: 'Benzodiazepine',
    mechanism: 'Enhances the inhibitory effect of GABA-A receptors by increasing the frequency of chloride channel opening, leading to sedation and amnesia.',
    indications: [
      'Preoperative anxiolysis and sedation (pre-medication)',
      'Procedural sedation',
      'Co-induction agent to reduce required doses of induction drugs'
    ],
    dosageInduction: '0.02 - 0.1 mg/kg IV titration (usually 1 - 2.5 mg pre-op dose for anxiolysis).',
    pediatricDosage: '0.25 - 0.5 mg/kg orally (max 15mg) or 0.05 - 0.15 mg/kg IV.',
    standardPrep: '1 mg/mL or 5 mg/mL solutions.',
    onset: '1 - 3 minutes IV; 15 - 20 minutes orally.',
    duration: '30 - 120 minutes (short-acting compared to diazepam or lorazepam).',
    contraindications: [
      'Acute narrow-angle glaucoma',
      'Severe respiratory depression (unmonitored)',
      'Severe hepatic impairment'
    ],
    adverseEffects: [
      'Dose-dependent respiratory depression and airway obstruction',
      'Hypotension (especially when combined with opioids)',
      'Paradoxical excitation/agitation (rare, more common in pediatrics or elderly)'
    ],
    pearls: [
      'Produces excellent anterograde amnesia (the patient forgets events occurring after administration, which is highly desirable for anesthesia induction).',
      'Water-soluble in its ampoule but becomes highly lipophilic inside physiological pH, allowing rapid brain onset.',
      'Reversible with Flumazenil (0.2 mg IV increments, up to 1 mg total).'
    ]
  },
  {
    id: 'phenylephrine',
    name: 'Phenylephrine',
    genericName: 'Phenylephrine (Neo-Synephrine)',
    category: 'vasoactive',
    categoryLabel: 'Cardiovascular / Vasoactive',
    class: 'Pure alpha-1 Adrenergic Agonist',
    mechanism: 'Directly stimulates vascular smooth muscle alpha-1 receptors, causing vasoconstriction and raising systemic vascular resistance (SVR) and blood pressure.',
    indications: [
      'Treatment of hypotension under general or spinal anesthesia',
      'Vasodilatory shock (neurogenic shock, sepsis)'
    ],
    dosageInduction: '40 - 100 mcg IV boluses (Often prepared in "Neo sticks" of 100 mcg/mL). Infusion: 0.1 - 2.0 mcg/kg/min.',
    pediatricDosage: '5 - 10 mcg/kg IV bolus.',
    standardPrep: '10 mg/mL vial (Must be diluted! Usually 10mg diluted in 100mL to make 100 mcg/mL).',
    onset: 'Immediate IV.',
    duration: '15 - 20 minutes.',
    contraindications: [
      'Severe bradycardia (relative, as vasoconstriction causes reflex bradycardia)',
      'Severe coronary artery disease / acute myocardial ischemia (increased afterload)'
    ],
    adverseEffects: [
      'Reflex bradycardia (baroreceptor response to sudden BP elevation)',
      'Decreased cardiac output (due to excessive afterload and reflex bradycardia)',
      'Arrhythmias / tissue ischemia with extravasation (peripheral infiltration)'
    ],
    pearls: [
      'The drug of choice to treat spinal anesthesia-induced hypotension (spinal blockade causes severe sympathetic vasodilation; phenylephrine directly counters this).',
      'Does not cause tachycardia—unlike ephedrine—making it ideal for tachycardic hypotensive patients.',
      'Be alert to the reflex bradycardia; if heart rate drops too low (<45-50) while BP rises, hold phenylephrine and consider switching to glycopyrrolate or ephedrine.'
    ]
  },
  {
    id: 'ephedrine',
    name: 'Ephedrine',
    genericName: 'Ephedrine',
    category: 'vasoactive',
    categoryLabel: 'Cardiovascular / Vasoactive',
    class: 'Sympathomimetic Agent (Mixed alpha/beta agonist)',
    mechanism: 'Directly stimulates alpha and beta-adrenergic receptors and indirectly increases blood pressure and heart rate by releasing endogenous norepinephrine.',
    indications: [
      'Anesthesia-induced hypotension, especially if accompanied by relative bradycardia.'
    ],
    dosageInduction: '5 - 10 mg IV boluses titrated to response.',
    pediatricDosage: '0.1 - 0.2 mg/kg IV bolus.',
    standardPrep: '50 mg/mL vial (Typically diluted to 5 mg/mL in a 10mL syringe).',
    onset: '1 - 2 minutes IV.',
    duration: '10 - 60 minutes.',
    contraindications: [
      'Tachycardia or active myocardial ischemia',
      'Patients taking Monoamine Oxidase Inhibitors (MAOIs - risk of hypertensive crisis)'
    ],
    adverseEffects: [
      'Tachycardia, palpitations, or arrhythmias',
      'Myocardial ischemia due to increased oxygen demand',
      'Tachyphylaxis: repeated doses lead to decreasing effectiveness as endogenous norepinephrine stores become depleted.'
    ],
    pearls: [
      'Restores blood pressure while simultaneously raising or maintaining heart rate. Perfect if the hypotension is accompanied by bradycardia (unlike Phenylephrine which slows HR).',
      'Maintains uterine blood flow in obstetric spinal anesthesia exceptionally well, and was historically preferred in C-section anesthesia.',
      'Since it relies heavily on indirect norepinephrine release, its effect is reduced in patients with catecholamine depletion (e.g. chronic severe heart failure, chronic cocaine use).'
    ]
  },
  {
    id: 'sugammadex',
    name: 'Sugammadex',
    genericName: 'Sugammadex (Bridion)',
    category: 'reversal',
    categoryLabel: 'Reversal Agent',
    class: 'Selective Relaxant Binding Agent (SRBA)',
    mechanism: 'A modified gamma-cyclodextrin that encapsulates neuromuscular blockers (Rocuronium > Vecuronium) in plasma, preventing them from binding to receptors and shifting concentration gradient away from neuromuscular junction.',
    indications: [
      'Reversal of moderate or deep rocuronium or vecuronium-induced neuromuscular blockade.',
      'Immediate reversal of rocuronium after a "Can\'t Intubate, Can\'t Oxygenate" (CICO) scenario.'
    ],
    dosageInduction: '2.0 mg/kg IV for moderate block (reappearance of TOF 2); 4.0 mg/kg for deep block (post-tetanic count 1-2); 16.0 mg/kg for immediate emergency rescue reversal of rocuronium.',
    standardPrep: '100 mg/mL solution in 2mL or 5mL vials.',
    onset: '1 - 3 minutes (reverses muscle block significantly faster and more completely than anticholinisterase/antimuscarinic combinations).',
    duration: 'Highly stable. Eliminated unchanged by kidneys.',
    contraindications: [
      'Severe renal impairment / dialysis (not recommended as the cyclodextrin-complex is renal-cleared)',
      'Severe hypersensitivity'
    ],
    adverseEffects: [
      'Anaphylaxis (rare, occurs in ~0.3%)',
      'Transient bradycardia / QT prolongation',
      'Interaction with oral contraceptives: binds to progesterone, making a single dose equivalent to missing one daily pill (patients must use backup contraception for 7 days).'
    ],
    pearls: [
      'An absolute revolution in anesthesia safety! It has no autonomic side effects—completely bypassing the severe bradycardia/bronchospasm risk of Neostigmine reversal.',
      'Can reverse a profound, high-dose rocuronium block (1.2 mg/kg) in under 3 minutes—faster than the natural recovery time of succinylcholine, solving safety dilemmas for RSI.',
      'Does not reverse depolarizing agents (succinylcholine) or benzylisoquinoliniums (cisatracurium).'
    ]
  }
];
