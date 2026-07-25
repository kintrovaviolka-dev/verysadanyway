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
  },
  {
    id: 'thiopental',
    name: 'Thiopental',
    genericName: 'Thiopental sodium (Pentothal)',
    category: 'induction',
    categoryLabel: 'Induction Agent',
    class: 'Barbiturate / GABA-A Modulator',
    mechanism: 'Binds to GABA-A receptors, prolonging the opening time of chloride channels, leading to neuronal hyperpolarization and rapid cerebral suppression.',
    indications: [
      'Induction of general anesthesia (especially in neurosurgery with elevated ICP)',
      'Refractory status epilepticus',
      'Cerebral protection during focal ischemia'
    ],
    dosageInduction: '3.0 - 5.0 mg/kg IV bolus (Reduce to 1.5 - 2.5 mg/kg in elderly or hemodynamically compromised patients).',
    pediatricDosage: '5.0 - 7.0 mg/kg IV (higher dose requirements due to rapid metabolism and larger volume of distribution).',
    standardPrep: 'Reconstituted powder, typically prepared as a 2.5% solution (25 mg/mL).',
    onset: '15 - 30 seconds.',
    duration: '5 - 15 minutes (rapid termination due to redistribution into skeletal muscle).',
    contraindications: [
      'Acute intermittent porphyria or porphyria variegata (absolute)',
      'Severe cardiovascular collapse or hypovolemic shock',
      'Known hypersensitivity to barbiturates'
    ],
    adverseEffects: [
      'Severe arterial vasodilation and myocardial depression (hypotension)',
      'Respiratory depression and apnea',
      'Severe tissue necrosis and spasm if injected intra-arterially or extravasated (alkaline pH ~10.5)',
      'Laryngospasm or bronchospasm if airway manipulated before depth is reached'
    ],
    pearls: [
      'Potent cerebral vasoconstrictor: decreases cerebral blood flow (CBF), cerebral metabolic rate of oxygen (CMRO2), and intracranial pressure (ICP), making it highly neuroprotective.',
      'Absolute contraindication in porphyria: induces ALA synthetase, which triggers a life-threatening porphyric crisis (paralysis, severe abdominal pain).',
      'If accidental intra-arterial injection occurs, keep the catheter in place, inject vasodilators (e.g., papaverine, lidocaine) and heparinize to prevent thrombosis.'
    ]
  },
  {
    id: 'dexmedetomidine',
    name: 'Dexmedetomidine',
    genericName: 'Dexmedetomidine (Precedex)',
    category: 'sedatives',
    categoryLabel: 'Sedative',
    class: 'Highly selective alpha-2 Adrenergic Agonist',
    mechanism: 'Selectively stimulates presynaptic alpha-2 receptors in the locus coeruleus, decreasing norepinephrine release and leading to cooperative sedation (resembling natural sleep) and analgesia.',
    indications: [
      'ICU sedation for mechanically ventilated patients',
      'Procedural sedation (e.g. awake fiberoptic intubation)',
      'Anesthetic adjunct to reduce opioid requirements and prevent emergence delirium'
    ],
    dosageInduction: 'Loading dose: 0.5 - 1.0 mcg/kg IV over 10 minutes (often omitted to prevent bradycardia/hypotension). Maintenance: 0.2 - 0.7 mcg/kg/hr continuous infusion.',
    pediatricDosage: 'Sedation: 0.2 - 1.0 mcg/kg/hr IV infusion.',
    standardPrep: '100 mcg/mL solution, must be diluted to 4 mcg/mL for infusion.',
    onset: '10 - 15 minutes (slower than propofol or midazolam).',
    duration: '1 - 2 hours after stopping infusion (terminal half-life ~2 hours).',
    contraindications: [
      'Severe bradycardia or advanced heart block (2nd or 3rd degree) without a pacemaker',
      'Uncompensated heart failure or severe hypotension'
    ],
    adverseEffects: [
      'Bradycardia (due to decreased sympathetic tone and vagal activation)',
      'Hypotension (initial transient hypertension may occur during rapid loading due to peripheral alpha-2b vasoconstriction)',
      'Dry mouth'
    ],
    pearls: [
      'Provides "cooperative sedation": patients remain easily rousable, cooperative, and able to follow commands, which facilitates weaning from mechanical ventilation.',
      'Provides sedation without causing respiratory depression (does not affect respiratory drive or hypercapnic response), making it uniquely safe for non-intubated patients.',
      'Highly effective at preventing emergence delirium in pediatric patients and reducing shivering in the post-anesthesia care unit.'
    ]
  },
  {
    id: 'norepinephrine',
    name: 'Norepinephrine',
    genericName: 'Norepinephrine (Levophed)',
    category: 'vasoactive',
    categoryLabel: 'Cardiovascular / Vasoactive',
    class: 'Direct-acting Sympathomimetic (Alpha-1 > Beta-1 agonist)',
    mechanism: 'Directly stimulates alpha-1 receptors to cause potent arterial and venous vasoconstriction; moderately stimulates beta-1 receptors to increase cardiac contractility.',
    indications: [
      'First-line vasopressor for septic, cardiogenic, or neurogenic shock',
      'Refractory hypotension unresponsive to fluid resuscitation'
    ],
    dosageInduction: 'Infusion: 0.05 - 1.0 mcg/kg/min IV, titrated to target Mean Arterial Pressure (MAP > 65 mmHg).',
    pediatricDosage: '0.05 - 0.5 mcg/kg/min IV infusion.',
    standardPrep: 'Typically 4 mg in 250 mL D5W or Normal Saline (16 mcg/mL) for peripheral/central administration, or concentrated 4 mg in 50 mL (80 mcg/mL) for central venous syringe pump.',
    onset: '1 - 2 minutes IV.',
    duration: '1 - 2 minutes after infusion is discontinued (rapidly metabolized by COMT and MAO).',
    contraindications: [
      'Hypovolemia (must correct volume status first, unless used as temporary emergency measure)',
      'Known hypersensitivity to norepinephrine'
    ],
    adverseEffects: [
      'Severe organ or limb ischemia due to excessive vasoconstriction',
      'Reflex bradycardia (though offset by beta-1 chronotropy)',
      'Arrhythmias (tachycardia, atrial fibrillation)',
      'Tissue necrosis and sloughing if extravasation occurs'
    ],
    pearls: [
      'The absolute first-line vasopressor in septic shock, superior to dopamine as it is less arrhythmogenic and associated with lower mortality.',
      'Extravasation is a medical emergency! If peripheral infiltration occurs, treat immediately with local subcutaneous phentolamine (alpha-blocker) to prevent tissue necrosis.',
      'Preferably administered via a central venous catheter; peripheral infusion should only be short-term in a large, secure vein.'
    ]
  },
  {
    id: 'atropine',
    name: 'Atropine',
    genericName: 'Atropine sulfate',
    category: 'vasoactive',
    categoryLabel: 'Cardiovascular / Vasoactive',
    class: 'Anticholinergic / Antimuscarinic',
    mechanism: 'Competitive antagonist of acetylcholine at muscarinic receptors, blocking parasympathetic vagal activity on the sinoatrial and atrioventricular nodes, thereby increasing heart rate.',
    indications: [
      'Symptomatic or hemodynamically unstable bradycardia (ACLS first-line)',
      'Preoperative reduction of salivary/airway secretions',
      'Antidote for organophosphate poisoning or cholinergic crisis'
    ],
    dosageInduction: 'Bradycardia: 1.0 mg IV bolus, repeat every 3-5 minutes (Max total dose 3.0 mg). Secretions: 0.4 - 0.6 mg IV/IM.',
    pediatricDosage: '0.02 mg/kg IV (minimum dose 0.1 mg to prevent paradoxical bradycardia).',
    standardPrep: '0.5 mg/mL or 1 mg/mL syringes/vials.',
    onset: '2 - 4 minutes IV.',
    duration: '2 - 4 hours (longer for pupil dilation).',
    contraindications: [
      'Known hypersensitivity to anticholinergics',
      'Narrow-angle glaucoma (absolute contraindicated due to risk of pupillary block)',
      'Thyrotoxicosis or active myocardial ischemia (tachycardia increases oxygen demand)'
    ],
    adverseEffects: [
      'Tachycardia, arrhythmias, or palpitations',
      'Anticholinergic symptoms: dry mouth, blurred vision, urinary retention, flushed skin, hyperthermia, and central anticholinergic syndrome (confusion/delirium in elderly)'
    ],
    pearls: [
      'ACLS guidelines recommend an initial bradycardia dose of 1.0 mg IV, repeated every 3-5 minutes.',
      'Doses less than 0.5 mg IV in adults must be avoided, as low doses can cause paradoxical bradycardia due to central vagal stimulation or presynaptic M1 receptor blockade.',
      'Will not reverse bradycardia in patients with heart transplants or high-degree block (Type II 2nd degree or 3rd degree AV block with wide QRS) because these lack vagal innervation (requires transcutaneous pacing).'
    ]
  },
  {
    id: 'naloxone',
    name: 'Naloxone',
    genericName: 'Naloxone hydrochloride (Narcan)',
    category: 'reversal',
    categoryLabel: 'Reversal Agent',
    class: 'Competitive Opioid Receptor Antagonist',
    mechanism: 'Competitive antagonist with high affinity for mu, kappa, and delta opioid receptors, displacing opioid molecules and completely reversing opioid-mediated effects.',
    indications: [
      'Reversal of opioid-induced respiratory depression and sedation',
      'Diagnosis of suspected acute opioid overdose'
    ],
    dosageInduction: '0.04 - 0.4 mg IV/IM/SC, titrated slowly in post-operative patients to reverse respiratory depression without losing analgesia. In emergency overdose, 0.4 - 2.0 mg IV/IM/IN, repeat every 2-3 minutes.',
    pediatricDosage: '0.01 - 0.1 mg/kg IV/IM.',
    standardPrep: '0.4 mg/mL vial or prefilled syringes.',
    onset: '1 - 2 minutes IV; 2 - 5 minutes IM/SC.',
    duration: '30 - 90 minutes (shorter than the duration of most opioids, requiring monitoring for re-sedation).',
    contraindications: [
      'Known hypersensitivity to naloxone',
      'Opioid dependence (relative - will precipitate acute withdrawal)'
    ],
    adverseEffects: [
      'Acute opioid withdrawal syndrome: severe agitation, sweating, nausea/vomiting, hypertension, tachycardia, and gooseflesh',
      'Severe pulmonary edema or ventricular arrhythmias (associated with rapid reversal of high-dose opioids due to massive catecholamine surge)'
    ],
    pearls: [
      'Crucial watch-out: the duration of action of Naloxone (~45-90 min) is shorter than that of many opioids (e.g., morphine, methadone, fentanyl patches). Patients must be monitored closely for recurrent respiratory depression ("re-narcotization").',
      'In post-operative patients, titrate in tiny increments (e.g., 0.04 mg) to restore adequate ventilation while preserving some level of pain control.',
      'The sudden opioid reversal can trigger a massive surge in endogenous catecholamines, which can cause acute pulmonary edema, severe hypertension, or cardiac arrest in patients with pre-existing heart disease.'
    ]
  },
  {
    id: 'neostigmine',
    name: 'Neostigmine',
    genericName: 'Neostigmine methylsulfate',
    category: 'reversal',
    categoryLabel: 'Reversal Agent',
    class: 'Acetylcholinesterase Inhibitor',
    mechanism: 'Reversibly binds to and inhibits acetylcholinesterase, preventing the breakdown of acetylcholine. This increases acetylcholine concentration at the neuromuscular junction, outcompeting non-depolarizing muscle relaxants.',
    indications: [
      'Reversal of non-depolarizing neuromuscular blockade (rocuronium, vecuronium, cisatracurium) at the end of surgery',
      'Treatment of myasthenia gravis or acute colonic pseudo-obstruction (Ogilvie syndrome)'
    ],
    dosageInduction: '0.03 - 0.07 mg/kg IV (Max single dose 5.0 mg in adults). Must be co-administered with an anticholinergic (usually Glycopyrrolate or Atropine) to prevent profound bradycardia.',
    pediatricDosage: '0.03 - 0.07 mg/kg IV combined with atropine.',
    standardPrep: '0.5 mg/mL or 1.0 mg/mL vials.',
    onset: '7 - 11 minutes (slow onset, requires active twitches on Train-of-Four).',
    duration: '60 - 120 minutes.',
    contraindications: [
      'Mechanical intestinal or urinary tract obstruction',
      'Severe bradycardia or active bronchospasm',
      'Known hypersensitivity to neostigmine'
    ],
    adverseEffects: [
      'Severe bradycardia, AV blocks, or asystole (parasympathetic overstimulation)',
      'Bronchoconstriction and increased airway secretions (bronchospasm)',
      'Increased gastrointestinal motility, cramping, and salivation',
      'Miosis'
    ],
    pearls: [
      'Must ALWAYS be administered with an anticholinergic agent (Glycopyrrolate 0.2 mg per 1.0 mg of Neostigmine, or Atropine 0.015 mg/kg) to block the severe muscarinic side effects (bradycardia, salivation, bronchospasm).',
      'Can only be administered when there is evidence of spontaneous recovery (at least 2-4 twitches on Train-of-Four monitoring). If given during deep neuromuscular blockade, it can cause a depolarizing-like block due to excess acetylcholine, worsening paralysis.',
      'Does not reverse depolarizing blockers like succinylcholine—it actually prolongs succinylcholine-induced paralysis by inhibiting pseudocholinesterase.'
    ]
  },
  {
    id: 'dexamethasone',
    name: 'Dexamethasone',
    genericName: 'Dexamethasone (Decadron)',
    category: 'reversal',
    categoryLabel: 'Antiemetic / Corticosteroid',
    class: 'Synthetic Corticosteroid / Glucocorticoid Receptor Agonist',
    mechanism: 'Suppresses inflammation and normal immune response; reduces prostaglandin synthesis and serotonin in the central nervous system, preventing postoperative nausea and vomiting.',
    indications: [
      'Prophylaxis of post-operative nausea and vomiting (PONV)',
      'Reduction of laryngeal edema / airway swelling',
      'Adjunctive treatment of severe croup or anaphylaxis'
    ],
    dosageInduction: '4 - 10 mg IV bolus (typically administered shortly after induction for PONV prophylaxis).',
    pediatricDosage: '0.15 - 0.5 mg/kg IV (max 10mg).',
    standardPrep: '4 mg/mL or 8 mg/mL vials.',
    onset: '1 - 2 hours (delayed genomic effects, though anti-inflammatory effects begin sooner).',
    duration: '36 - 72 hours (long biological half-life).',
    contraindications: [
      'Active systemic fungal infections',
      'Severe uncontrolled diabetes (relative)',
      'Known hypersensitivity to dexamethasone'
    ],
    adverseEffects: [
      'Transient perineal burning or pruritus (if injected rapidly in awake patients)',
      'Hyperglycemia (increases blood glucose levels)',
      'Delayed wound healing or increased infection risk (with prolonged use, rare with single dose)',
      'Insomnia or mild agitation'
    ],
    pearls: [
      'Extremely effective for PONV prophylaxis when combined with Ondansetron (acting synergistically via different pathways).',
      'Warn awake patients before administering rapidly: it causes a characteristic, self-limiting but intense burning sensation in the perineal region.',
      'Significantly reduces swelling and airway edema after traumatic or prolonged intubations; ideal for post-extubation stridor prevention.'
    ]
  }
];
