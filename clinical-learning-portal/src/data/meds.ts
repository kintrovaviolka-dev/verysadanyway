import { Medication } from '../types';

export const ANESTHESIA_MEDS: Medication[] = [
  {
    id: 'propofol',
    name: 'Propofol',
    genericName: 'Propofol (Diprivan)',
    category: 'induction',
    categoryLabel: 'Induction Agent',
    class: 'Alkylphenol derivative / positive allosteric modulator of GABA-A receptors',
    mechanism: 'Positive allosteric modulator of GABA-A receptors: binds to transmembrane domains of the β-subunits (primarily β2 and β3), dramatically increasing receptor affinity for endogenous GABA and prolonging the open duration of chloride channels. At higher concentrations, it directly activates chloride channels (GABA-mimetic action) even in the absence of GABA. The resulting massive influx of Cl⁻ leads to neuronal hyperpolarization and rapid cerebral depression (hypnosis and amnesia without intrinsic analgesia). Additionally inhibits NMDA glutamate receptors and modulates voltage-gated calcium channels. In the cardiovascular system, it produces potent systemic arterial and venous vasodilation (via suppression of central sympathetic tone and direct inhibition of intracellular Ca²⁺ mobilization in vascular smooth muscle) coupled with mild negative inotropy. Crucially, it blunts the arterial baroreceptor reflex (compensatory tachycardia is frequently absent), precipitating marked hypotension. In the respiratory centers, it induces dose-dependent ventilatory depression with blunted responses to both hypercapnia and hypoxia.',
    indications: [
      'Induction of general anesthesia',
      'Maintenance of general anesthesia (TIVA – Total Intravenous Anesthesia)',
      'Procedural sedation and ICU sedation for mechanically ventilated patients'
    ],
    dosageInduction: '1.5 - 2.5 mg/kg IV bolus (reduce to 1.0 - 1.5 mg/kg in elderly or ASA III/IV patients).',
    pediatricDosage: '2.5 - 3.5 mg/kg IV (higher dose requirement due to larger volume of distribution in children).',
    standardPrep: '1% lipid emulsion (10 mg/mL) in 20mL or 50mL ampoules/vials; 2% emulsion (20 mg/mL) also available.',
    onset: '30 - 45 seconds (rapid circulation arm-brain time).',
    duration: '5 - 10 minutes (due to rapid redistribution from the vessel-rich vessel group into muscle and fat).',
    contraindications: [
      'Hypersensitivity to propofol, egg lecithin, or soybean oil (caution)',
      'Severe hemodynamic instability or uncorrected hypovolemic shock',
      'Critical aortic stenosis (extreme vulnerability to sudden loss of systemic afterload)'
    ],
    adverseEffects: [
      'Significant hypotension (loss of preload and afterload paired with baroreflex blunting)',
      'Dose-dependent respiratory depression and transient apnea',
      'Pain on IV injection (mitigated by IV lidocaine 0.5 mg/kg pretreatment or large antecubital vein usage)',
      'Involuntary myoclonic movements upon induction (non-epileptic subcortical origin)'
    ],
    pearls: [
      'Exerts potent intrinsic antiemetic properties (via subcortical dopamine modulation and 5-HT3 receptor antagonism in the area postrema), making it the gold standard in patients at high risk for PONV.',
      'Exceptionally effective at suppressing pharyngeal and laryngeal airway reflexes, facilitating smooth LMA insertion without neuromuscular blockade.',
      'Prolonged high-dose infusions (>48 h, >4–5 mg/kg/h) can trigger Propofol Infusion Syndrome (PRIS): mitochondrial fatty acid oxidation failure and uncoupling of oxidative phosphorylation $\\rightarrow$ severe metabolic acidosis, rhabdomyolysis, hyperkalemia, acute kidney injury, and refractory cardiogenic shock.'
    ]
  },
  {
    id: 'ketamine',
    name: 'Ketamine',
    genericName: 'Ketamine (Ketalar)',
    category: 'induction',
    categoryLabel: 'Induction Agent / Analgesic',
    class: 'Arylcyclohexylamine / non-competitive NMDA receptor antagonist',
    mechanism: 'Non-competitive antagonist at NMDA glutamate receptors: binds to the phencyclidine (PCP) site within the open ion channel of the NMDA receptor complex, blocking transmembrane Ca²⁺ and Na⁺ influx upon glutamatergic stimulation. Produces functional and electrophysiological dissociation between the limbic system and thalamocortical pathways ("dissociative anesthesia" – patient appears awake with open eyes and preserved airway reflexes, yet experiences profound analgesia, amnesia, and catatonia). Also acts as an agonist at opioid receptors (μ, κ) and inhibits neuronal reuptake of norepinephrine, dopamine, and serotonin. Cardiovascular effects are biphasic: in patients with intact sympathetic tone, it produces central sympathetic stimulation (raising HR, BP, and cardiac output). CRITICAL MODERN INSIGHT: Ketamine is intrinsically a direct myocardial depressant (negative inotrope). In critically ill or prolonged shock patients with depleted endogenous catecholamine stores, its direct cardiodepressant effect is unmasked, which can precipitate abrupt cardiovascular collapse! Also produces potent bronchodilation via direct bronchial smooth muscle relaxation and catecholamine release.',
    indications: [
      'Induction of anesthesia in hemodynamically compromised shock (hypovolemia, trauma, sepsis with sympathetic reserve)',
      'Severe refractory bronchospasm and status asthmaticus',
      'Procedural analgosedation in emergency medicine and pediatrics',
      'Subanesthetic adjuvant infusion for multimodal perioperative analgesia (preventing central sensitization and opioid-induced hyperalgesia)'
    ],
    dosageInduction: '1.0 - 2.0 mg/kg IV or 4.0 - 8.0 mg/kg IM.',
    pediatricDosage: '1.5 - 2.0 mg/kg IV or 3.0 - 5.0 mg/kg IM.',
    standardPrep: '10 mg/mL (1%) or 50 mg/mL (5%) solution.',
    onset: '30 - 60 seconds IV; 3 - 5 minutes IM.',
    duration: '10 - 20 minutes IV (redistribution-dependent; full neuropsychiatric emergence takes 60–120 minutes).',
    contraindications: [
      'Severe uncontrolled hypertension, severe coronary ischemia, or aortic dissection',
      'Penetrating globe injury or acute glaucoma (transient increase in intraocular pressure)',
      'Active psychotic disorder or schizophrenia (risk of exacerbating hallucinations)'
    ],
    adverseEffects: [
      'Sympathomimetic cardiovascular stimulation: hypertension, tachycardia, and elevated myocardial oxygen demand',
      'Emergence delirium: vivid unpleasant dreams, visual hallucinations, and agitation (significantly mitigated by co-administering midazolam)',
      'Hypersalivation and tracheobronchial hypersecretion (can be blunted by glycopyrrolate or atropine)',
      'Laryngospasm risk from pooled secretions in the presence of preserved upper airway reflexes'
    ],
    pearls: [
      'Maintains protective airway reflexes and spontaneous ventilation better than other induction agents, though transient apnea can still occur following rapid IV push.',
      'S(+)-ketamine (esketamine) has twice the anesthetic and analgesic potency of racemic ketamine, with faster cognitive recovery and lower incidence of emergence delirium.',
      'Warning in exhausted septic or polytrauma patients: if catecholamine reserves are depleted, its direct myocardial depressant action dominates, precipitating sudden hypotension.'
    ]
  },
  {
    id: 'etomidate',
    name: 'Etomidate',
    genericName: 'Etomidate (Amidate / Hypnomidate)',
    category: 'induction',
    categoryLabel: 'Induction Agent',
    class: 'Carboxylated imidazole derivative / selective GABA-A positive modulator',
    mechanism: 'Potent, highly selective positive allosteric modulator of GABA-A receptors (binding specifically to the interface of α and β2/β3 subunits), enhancing chloride current and inducing neuronal hyperpolarization. Notable for its exceptional cardiovascular stability: it does not alter peripheral vascular tone (neither capacitance nor resistance vessels), lacks direct negative inotropic effects on the myocardium, and leaves baroreceptor reflex sensitivity intact. Systemic blood pressure, cardiac output, and coronary perfusion are preserved. CRITICAL ENDOCRINE EFFECT: Reversibly and potently inhibits the mitochondrial enzyme 11β-hydroxylase (CYP11B1) in the adrenal cortex, which converts 11-deoxycortisol to cortisol and 11-deoxycorticosterone to corticosterone. Even a single induction dose induces significant adrenocortical suppression (reduced cortisol and aldosterone production) lasting 12–24 hours. Decreases cerebral metabolic rate of oxygen (CMRO2) and intracranial pressure (ICP) while maintaining cerebral perfusion pressure (CPP).',
    indications: [
      'Induction of general anesthesia in patients with severe cardiac disease (CAD, severe valvular dysfunction, cardiomyopathy)',
      'Rapid Sequence Induction (RSI) in critically ill trauma or shock patients where hemodynamic collapse must be avoided'
    ],
    dosageInduction: '0.2 - 0.3 mg/kg IV.',
    pediatricDosage: '0.2 - 0.3 mg/kg IV (less commonly used in children <10 years unless hemodynamically unstable).',
    standardPrep: '2 mg/mL solution in 35% propylene glycol or lipid emulsion formulation.',
    onset: '30 - 60 seconds.',
    duration: '3 - 5 minutes (rapid termination due to redistribution into peripheral compartments).',
    contraindications: [
      'Known hypersensitivity to etomidate or formulation vehicle',
      'Primary adrenal cortical insufficiency (Addison disease)',
      'Continuous maintenance infusion (strictly contraindicated due to lethal prolonged adrenal shutdown)'
    ],
    adverseEffects: [
      'Transient inhibition of 11β-hydroxylase causing adrenocortical suppression (blunted stress response for 12–24 h)',
      'High incidence of myoclonus upon induction (50–70% if unmitigated; blunted by fentanyl or midazolam pretreatment)',
      'High rate of postoperative nausea and vomiting (PONV)',
      'Pain on injection and superficial phlebitis (propylene glycol vehicle)'
    ],
    pearls: [
      'The most hemodynamically neutral induction agent in existence: myocardial contractility and systemic vascular resistance remain stable.',
      'Does not cause histamine release, making it safe for patients with severe reactive airway disease or allergic diathesis.',
      'The impact of single-dose adrenal suppression on sepsis mortality remains debated: while continuous infusions were abandoned, a single bolus for emergency RSI in shock remains an accepted tool to avoid cardiac arrest on induction.'
    ]
  },
  {
    id: 'succinylcholine',
    name: 'Succinylcholine',
    genericName: 'Succinylcholine / Suxamethonium (Anectine / Quelicin)',
    category: 'paralytics',
    categoryLabel: 'Muscle Relaxant',
    class: 'Depolarizing neuromuscular blocking agent (quaternary ammonium compound)',
    mechanism: 'The only clinically used depolarizing neuromuscular blocker (structurally two conjoined acetylcholine molecules). Acts as an agonist at nicotinic acetylcholine receptors (nAChR) on the skeletal muscle motor endplate. Induces opening of the channel pore and persistent endplate depolarization, clinically manifesting as generalized transient muscle fasciculations. Because succinylcholine is not hydrolyzed by synaptic acetylcholinesterase, it maintains the motor endplate in a sustained depolarized state. This inactivates perijunctional voltage-gated sodium channels (Phase I block), preventing generation of subsequent muscle action potentials. Prolonged or repeated exposure leads to desensitization (Phase II block). It is metabolized only upon diffusing back into the circulation by plasma pseudocholinesterase (butyrylcholinesterase). Causes physiological cellular potassium efflux (raising plasma K⁺ by ~0.5 mEq/L; in patients with upregulated immature extrajunctional nAChR receptors after burns, denervation, spinal cord injury, or prolonged immobility, this causes catastrophic hyperkalemia). Direct stimulation of cardiac muscarinic M2 receptors can cause sinus bradycardia or asystole.',
    indications: [
      'Rapid Sequence Induction (RSI) for prompt airway control in patients at high risk of aspiration',
      'Emergency treatment of severe laryngospasm refractory to positive-pressure mask ventilation'
    ],
    dosageInduction: '1.0 - 1.5 mg/kg IV based on total body weight (TBW) or 3.0 - 4.0 mg/kg IM (if IV access is unavailable).',
    pediatricDosage: '1.5 - 2.0 mg/kg IV (infants require higher doses due to larger extracellular fluid volume).',
    standardPrep: '20 mg/mL solution in 5mL or 10mL vials; or dry powder for reconstitution.',
    onset: '30 - 60 seconds IV (fastest onset of any neuromuscular blocker).',
    duration: '5 - 10 minutes (rapid hydrolysis by plasma pseudocholinesterase).',
    contraindications: [
      'Personal or family history of malignant hyperthermia (absolute trigger!)',
      'Known genetic pseudocholinesterase deficiency (atypical variant causing hours of paralysis)',
      'Severe hyperkalemia risk: burns >24 hours old, spinal cord injury/paraplegia, crush trauma, motor neuron diseases (ALS, Guillain-Barré, muscular dystrophies)',
      'Penetrating open eye injury (transient rise in intraocular pressure)'
    ],
    adverseEffects: [
      'Transient hyperkalemia (0.5 mEq/L rise normally, but fatal in susceptible patients)',
      'Muscle fasciculations followed by diffuse postoperative myalgia',
      'Sinus bradycardia and nodal rhythm (common after a 2nd dose or in children via M2 vagal stimulation)',
      'Trigger for malignant hyperthermia (uncontrolled calcium efflux via mutated ryanodine RYR1 channels)'
    ],
    pearls: [
      'The classic gold standard for RSI due to its unmatched combination of 45-second onset and spontaneous recovery within 10 minutes.',
      'No specific reversal agent exists: neostigmine is strictly contraindicated because it inhibits pseudocholinesterase and prolongs the block.',
      'In pediatric patients, pre-treatment with atropine is mandatory to prevent severe vagal bradycardia.'
    ]
  },
  {
    id: 'rocuronium',
    name: 'Rocuronium',
    genericName: 'Rocuronium bromide (Zemuron / Esmeron)',
    category: 'paralytics',
    categoryLabel: 'Muscle Relaxant',
    class: 'Non-depolarizing neuromuscular blocking agent (aminosteroid derivative)',
    mechanism: 'Competitive antagonist at nicotinic acetylcholine receptors (nAChR) on the postsynaptic skeletal muscle motor endplate. Competitively prevents endogenous acetylcholine from binding to the receptor α-subunits without causing conformational change or channel opening (paralysis occurs without depolarization or fasciculations). Paralysis begins when >75–80% of receptors are occupied, with profound block occurring at >90%. Has moderate receptor affinity, necessitating higher molar plasma concentrations; this creates a steep concentration gradient between plasma and the neuromuscular junction, driving an exceptionally rapid onset. At the RSI dose (1.0–1.2 mg/kg, equivalent to 4× ED95), intubating conditions are achieved in 45–60 seconds, matching succinylcholine. Lacks autonomic ganglionic or vagolytic effects, causes zero histamine release, and maintains hemodynamic stability. Elimination is predominantly hepatic (hepatocyte uptake and biliary excretion ~70%) and renal (~30%); uniquely and instantaneously reversible by sugammadex at any depth of block.',
    indications: [
      'Facilitation of tracheal intubation during routine induction and Rapid Sequence Induction (RSI)',
      'Surgical muscle relaxation throughout operative procedures',
      'ICU paralysis to facilitate mechanical ventilation (e.g., severe ARDS synchrony)'
    ],
    dosageInduction: '0.6 mg/kg IV for routine intubation (2× ED95); 1.0 - 1.2 mg/kg IV for Rapid Sequence Induction (RSI).',
    pediatricDosage: '0.6 - 1.0 mg/kg IV (similar profile to adults; slightly longer duration in infants).',
    standardPrep: '10 mg/mL solution in 5mL or 10mL vials.',
    onset: '60 - 90 seconds at 0.6 mg/kg; 45 - 60 seconds at RSI doses of 1.0–1.2 mg/kg.',
    duration: '35 - 50 minutes (intermediate duration; significantly prolonged in severe hepatic dysfunction and elderly).',
    contraindications: [
      'Hypersensitivity to rocuronium or other aminosteroid neuromuscular blocking agents'
    ],
    adverseEffects: [
      'Prolonged residual paralysis (particularly in hypothermia, acidosis, or severe liver disease)',
      'Perioperative anaphylaxis (NMBAs represent one of the most common causes of IgE-mediated anaphylaxis in anesthesia)'
    ],
    pearls: [
      'Modern RSI alternative of choice to succinylcholine whenever hyperkalemia risk, burns, renal failure, or malignant hyperthermia susceptibility is present.',
      'Immediate complete reversal can be achieved at any block depth with sugammadex (16 mg/kg reverses profound block after 1.2 mg/kg within ~3 minutes).',
      'Does not cause fasciculations or increases in intraocular, intracranial, or intragastric pressure.'
    ]
  },
  {
    id: 'fentanyl',
    name: 'Fentanyl',
    genericName: 'Fentanyl (Sublimaze)',
    category: 'analgesics',
    categoryLabel: 'Analgesic (Opioid)',
    class: 'Synthetic lipophilic opioid (4-anilidopiperidine derivative) / μ-receptor agonist',
    mechanism: 'Potent, highly selective full agonist at μ-opioid receptors (MOR, coupled to inhibitory Gi/Go proteins) in the central nervous system and dorsal horn substantia gelatinosa. Receptor activation inhibits adenylyl cyclase (lowering intracellular cAMP), closes presynaptic voltage-gated Ca²⁺ channels (suppressing release of excitatory transmitters like substance P and glutamate), and opens postsynaptic inwardly rectifying K⁺ channels (GIRK), resulting in neuronal hyperpolarization and blunting of ascending pain transmission. High lipophilicity (1000× more lipophilic than morphine) allows instantaneous blood-brain barrier penetration. The short duration of a single bolus (30–60 min) is governed entirely by rapid redistribution from the vessel-rich central compartment into muscle and fat; with repeated doses or continuous infusion, peripheral reservoirs saturate and context-sensitive half-time (CSHT) rises dramatically. Does not trigger histamine release, preserving hemodynamic stability; central vagal stimulation in the medulla can induce bradycardia. Rapid high-dose IV administration can induce chest wall rigidity ("wooden chest syndrome").',
    indications: [
      'Analgesic adjunct during induction of anesthesia (attenuates sympathetic pressor and tachycardia responses to laryngoscopy)',
      'Intraoperative and postoperative acute pain management',
      'Analgesic sedation for mechanically ventilated ICU patients'
    ],
    dosageInduction: '1 - 2 mcg/kg IV (up to 5 - 10 mcg/kg in cardiac anesthesia for profound stress response suppression).',
    pediatricDosage: '1 - 2 mcg/kg IV.',
    standardPrep: '50 mcg/mL (0.05 mg/mL) solution in 2mL or 10mL ampoules.',
    onset: '1 - 2 minutes IV.',
    duration: '30 - 60 minutes (short duration following single bolus due to redistribution).',
    contraindications: [
      'Severe respiratory depression in unmonitored / non-intubated patients',
      'Hypersensitivity to fentanyl or piperidine opioids'
    ],
    adverseEffects: [
      'Dose-dependent respiratory depression and decreased ventilatory responsiveness to CO₂',
      'Centrally mediated bradycardia (vagal nucleus stimulation)',
      'Chest wall rigidity ("wooden chest syndrome") upon rapid high-dose IV bolus >5 mcg/kg (requires neuromuscular blocker to ventilate)',
      'Postoperative nausea and vomiting (PONV via chemoreceptor trigger zone stimulation)'
    ],
    pearls: [
      'Core drug used to blunt the tachycardia and hypertension caused by direct laryngoscopy and endotracheal intubation.',
      'Devoid of histamine release (unlike morphine), minimizing risk of bronchospasm or sudden peripheral vasodilation.',
      'Promptly and specifically reversible by naloxone (0.04 - 0.4 mg IV) if life-threatening hypoventilation occurs.'
    ]
  },
  {
    id: 'midazolam',
    name: 'Midazolam',
    genericName: 'Midazolam (Versed / Dormicum)',
    category: 'sedatives',
    categoryLabel: 'Sedative / Anxiolytic',
    class: 'Short-acting imidazobenzodiazepine / GABA-A modulator',
    mechanism: 'Positive allosteric modulator of GABA-A receptors in the CNS: binds to the specific pocket at the interface of α (α1, α2, α3, α5) and γ2 subunits. Enhances receptor affinity for endogenous GABA and increases the frequency of chloride channel opening in the presence of GABA. Influx of Cl⁻ produces postsynaptic membrane hyperpolarization, suppressing neuronal excitability in the cerebral cortex, limbic system, and reticular activating system. Induces potent anterograde amnesia, anxiolysis, sedation, anticonvulsant activity, and central muscle relaxation. Unique physicochemical property: at pH < 4 in the vial, the imidazole ring is open, making the molecule water-soluble (stable aqueous solution, painless injection, non-irritating to veins); after IV administration at physiological blood pH (7.4), the ring closes, becoming highly lipophilic and crossing the blood-brain barrier within seconds. Metabolized by CYP3A4 to the active metabolite 1-hydroxymidazolam, which is cleared renally.',
    indications: [
      'Preoperative anxiolysis and sedation (premedication)',
      'Procedural conscious sedation for diagnostic and minor surgical interventions (e.g., endoscopy, bronchoscopy)',
      'Co-induction agent during general anesthesia induction (synergistically decreases propofol requirements)',
      'Emergency control of acute status epilepticus'
    ],
    dosageInduction: '0.02 - 0.1 mg/kg IV slowly titrated (typical adult premedication dose 1 - 2.5 mg IV).',
    pediatricDosage: '0.25 - 0.5 mg/kg oral (max 15 mg) or 0.05 - 0.15 mg/kg IV.',
    standardPrep: '1 mg/mL or 5 mg/mL solution.',
    onset: '1 - 3 minutes IV; 15 - 20 minutes oral.',
    duration: '30 - 120 minutes (dose-dependent, prolonged in renal/hepatic failure).',
    contraindications: [
      'Severe respiratory failure in non-intubated patients',
      'Acute narrow-angle glaucoma',
      'Severe hepatic encephalopathy'
    ],
    adverseEffects: [
      'Dose-dependent hypoventilation and upper airway obstruction (dramatically synergistic with opioids!)',
      'Hypotension (due to modest reduction in systemic vascular resistance and sympathetic tone)',
      'Paradoxical reactions (agitation, restlessness, aggression – more frequent in pediatric and elderly populations)'
    ],
    pearls: [
      'Produces the most profound anterograde amnesia of all common sedatives: patients forget procedural discomfort after administration.',
      'Titrate cautiously in elderly patients due to decreased clearance, increased receptor sensitivity, and risk of prolonged postoperative delirium.',
      'Specifically and immediately reversible with flumazenil (0.2 mg IV increments up to 1 mg).'
    ]
  },
  {
    id: 'phenylephrine',
    name: 'Phenylephrine',
    genericName: 'Phenylephrine (Neo-Synephrine)',
    category: 'vasoactive',
    categoryLabel: 'Cardiovascular / Vasoactive',
    class: 'Selective direct sympathomimetic (pure α1-adrenergic agonist)',
    mechanism: 'Synthetic direct-acting sympathomimetic with pure and highly selective agonist activity at postsynaptic α1-adrenergic receptors coupled to Gq proteins. Activates phospholipase C (PLC), which cleaves PIP2 into IP3 and diacylglycerol (DAG); IP3 mobilizes Ca²⁺ from the sarcoplasmic reticulum into the cytosol of vascular smooth muscle cells, causing powerful vasoconstriction of both resistance arterioles and capacitance veins. The net result is a steep rise in systemic vascular resistance (SVR) and mean arterial pressure (MAP). CRITICAL HEMODYNAMIC CONSEQUENCE: The surge in afterload stimulates carotid sinus and aortic arch baroreceptors, triggering prominent reflex vagal bradycardia. Because phenylephrine possesses zero β1-inotropic activity, this combination of bradycardia and increased afterload frequently precipitates a SIGNIFICANT REDUCTION IN STROKE VOLUME (SV) AND CARDIAC OUTPUT (CO). In modern obstetric anesthesia, it is the first-line vasopressor for spinal hypotension during cesarean delivery, preserving maternal blood pressure without triggering fetal acidosis.',
    indications: [
      'Hypotension induced by spinal, epidural, or general anesthesia (first-line choice in cesarean sections)',
      'Vasoplegic states associated with baseline tachycardia (where heart rate acceleration is undesirable)',
      'Maintenance of coronary perfusion pressure in critical aortic stenosis'
    ],
    dosageInduction: '40 - 100 mcg IV boluses ("Neo sticks" at 100 mcg/mL); continuous infusion 0.1 - 2.0 mcg/kg/min.',
    pediatricDosage: '5 - 10 mcg/kg IV bolus.',
    standardPrep: '10 mg/mL vial (MUST be diluted! Typically 10 mg into 100 mL for 100 mcg/mL, or 1 mg into 100 mL for 10 mcg/mL).',
    onset: 'Immediate IV (10 - 30 seconds).',
    duration: '15 - 20 minutes.',
    contraindications: [
      'Severe bradycardia (relative/absolute due to further baroreflex-mediated slowing)',
      'Cardiogenic shock or severe left ventricular systolic failure (afterload excess compromises ejection)',
      'Severe ischemic heart disease with compromised cardiac index'
    ],
    adverseEffects: [
      'Reflex baroreceptor bradycardia (may require holding medication if HR drops <45–50 bpm)',
      'Decline in stroke volume and cardiac output due to excessive afterload',
      'Severe local tissue ischemia and necrosis upon peripheral line extravasation'
    ],
    pearls: [
      'Ideal vasopressor when the hypotensive patient is already tachycardic: restores SVR without accelerating heart rate.',
      'Replaced ephedrine as the standard of care for obstetric spinal hypotension: preserves maternal blood pressure with significantly higher umbilical artery pH (less fetal acidosis).',
      'If heart rate drops significantly as blood pressure rises, discontinue phenylephrine and switch to a mixed or inotropic vasopressor (ephedrine, norepinephrine).'
    ]
  },
  {
    id: 'ephedrine',
    name: 'Ephedrine',
    genericName: 'Ephedrine (Ephedrine sulfate)',
    category: 'vasoactive',
    categoryLabel: 'Cardiovascular / Vasoactive',
    class: 'Mixed-acting sympathomimetic (indirect norepinephrine releaser + direct agonist)',
    mechanism: 'Mixed-acting sympathomimetic with a dual mechanism: acts indirectly by entering presynaptic sympathetic nerve terminals via the norepinephrine transporter (NET) and displacing endogenous norepinephrine from storage vesicles via VMAT-2 into the synaptic cleft (while also inhibiting norepinephrine reuptake); directly acts as a weaker agonist at β1, β2, and α1 adrenergic receptors. Repeated dosing leads to rapid tachyphylaxis as vesicular norepinephrine stores become depleted. PARADIGM SHIFT IN HEMODYNAMIC MECHANISM: Historically, ephedrine was believed to raise arterial pressure primarily via arterial vasoconstriction (elevating SVR) like phenylephrine. Contemporary advanced hemodynamic investigations (pulse contour analysis, echocardiography, and mean systemic filling pressure studies) have proven that ephedrine restores blood pressure predominantly by INCREASING CARDIAC OUTPUT (CO) AND STROKE VOLUME (SV)! It stimulates α1 receptors on venous capacitance vessels (particularly in the splanchnic circulation), inducing VENOCONSTRICTION, mobilizing unstressed volume, and increasing mean systemic filling pressure (Pmsf), thereby augmenting venous return (preload) to the right heart. Combined with direct/indirect myocardial β1 inotropy and chronotropy, this drives up stroke volume and cardiac output. Systemic vascular resistance (SVR) remains largely unchanged or may even slightly decrease due to counterbalancing β2-mediated vasodilation. OBSTETRIC GUIDELINE EVOLUTION: Historically favored for cesarean deliveries, international guidelines (SOAP, ESAIC) now recommend phenylephrine (or low-dose norepinephrine infusion) over ephedrine, because ephedrine readily crosses the placenta, stimulates fetal β-receptors, accelerates fetal metabolism and oxygen consumption, causing fetal lactic acidosis (lower umbilical artery pH).',
    indications: [
      'Anesthesia-induced hypotension accompanied by relative bradycardia or low normal heart rate',
      'Hypotension where preservation or augmentation of stroke volume and cardiac output is desired without excessive afterload',
      'Hypotension with co-existing mild bronchospasm (adjuvant β2 bronchodilation)'
    ],
    dosageInduction: '5 - 10 mg IV boluses titrated to hemodynamic response (max cumulative dose ~30–50 mg).',
    pediatricDosage: '0.1 - 0.2 mg/kg IV bolus.',
    standardPrep: '50 mg/mL vial (MUST be diluted: 1 mL + 9 mL normal saline in a 10mL syringe $\\rightarrow$ 5 mg/mL concentration).',
    onset: '1 - 2 minutes IV.',
    duration: '10 - 60 minutes.',
    contraindications: [
      'Tachycardia or active tachyarrhythmias',
      'Acute coronary syndrome / active myocardial ischemia (elevated cardiac oxygen demand)',
      'Concurrent therapy with Monoamine Oxidase Inhibitors (MAOIs – severe hypertensive crisis risk)'
    ],
    adverseEffects: [
      'Tachycardia, palpitations, and supraventricular or ventricular arrhythmias',
      'Myocardial ischemia from increased oxygen consumption outpacing delivery',
      'Tachyphylaxis: progressive loss of pressor efficacy with repeated doses due to catecholamine depletion',
      'Fetal acidosis when used in obstetric spinal anesthesia'
    ],
    pearls: [
      'Modern physiological understanding: elevates blood pressure by increasing cardiac output and stroke volume via venoconstriction (preload recruitment) and inotropy, NOT by arterial vasoconstriction (SVR remains flat).',
      'Blunted in patients with depleted catecholamine stores (chronic congestive heart failure, prolonged ICU stay, chronic cocaine/amphetamine use) – direct catecholamines (norepinephrine) must be used instead.',
      'Obstetric shift: once preferred for cesarean spinal hypotension, it has been largely superseded by phenylephrine and norepinephrine infusions to safeguard fetal acid-base status.'
    ]
  },
  {
    id: 'sugammadex',
    name: 'Sugammadex',
    genericName: 'Sugammadex (Bridion)',
    category: 'reversal',
    categoryLabel: 'Reversal Agent',
    class: 'Selective Relaxant Binding Agent (SRBA)',
    mechanism: 'Modified γ-cyclodextrin consisting of 8 glucopyranose units forming a truncated cone with a central lipophilic cavity and 8 negatively charged side chains. Functions as a Selective Relaxant Binding Agent (SRBA) by forming a tight 1:1 inclusion complex with aminosteroid neuromuscular blocking agents. The hydrophobic cavity spatially and electrostatically accommodates the 4 steroid rings of rocuronium with extraordinary affinity (association constant Ka ≈ 10⁷ M⁻¹); binds vecuronium ~3× less avidly, and pancuronium minimally. In the intravascular space, sugammadex encapsulates free rocuronium molecules, driving free plasma concentration to zero. The steep concentration gradient rapidly pulls rocuronium off motor endplate nAChR receptors back into plasma, where it is irreversibly trapped inside the cyclodextrin cavity. Restores neuromuscular transmission within 1.5–3 minutes regardless of the initial depth of block. Does not inhibit acetylcholinesterase or activate muscarinic receptors, avoiding anticholinergic co-administration. Complex is excreted unchanged by the kidneys (>95%).',
    indications: [
      'Routine reversal of shallow, moderate, or deep neuromuscular block induced by rocuronium or vecuronium',
      'Immediate rescue reversal of profound rocuronium block (1.2 mg/kg) in emergency airway management'
    ],
    dosageInduction: 'Adults based on total body weight (TBW): 2 mg/kg IV at reappearance of T2; 4 mg/kg IV for deep block (TOF count 0, PTC 1–2); 16 mg/kg IV for immediate reversal ~3 min following rocuronium 1.2 mg/kg per SPC.',
    standardPrep: '100 mg/mL solution in 2mL (200 mg) or 5mL (500 mg) vials.',
    onset: '1.5 - 3 minutes (restores TOF ratio >0.9 significantly faster and more reliably than neostigmine).',
    duration: 'Highly stable complex; excreted unchanged via glomerular filtration.',
    contraindications: [
      'Severe renal impairment with eGFR <30 mL/min or dialysis (not recommended due to prolonged complex retention)',
      'Severe hypersensitivity to sugammadex or excipients'
    ],
    adverseEffects: [
      'Severe bradycardia and cardiac arrest (rare but life-threatening – continuous ECG monitoring is mandatory!)',
      'Hypersensitivity and anaphylactoid reactions (~0.3% incidence due to pre-existing anti-cyclodextrin antibodies)',
      'Oral contraceptive interaction: encapsulates progesterone (one dose is equivalent to one missed daily pill – barrier contraception required for 7 days)'
    ],
    pearls: [
      'CICO emergency rule: in a Cannot Intubate, Cannot Oxygenate scenario, administration of sugammadex must never delay emergency front-of-neck access (eFONA) – reversing paralysis does not guarantee airway patency in anatomical or edematous collapse!',
      'Does not reverse depolarizing agents (succinylcholine) or benzylisoquinolines (cisatracurium, atracurium).',
      'If re-paralysis is urgently needed after sugammadex within 24 hours, use a non-steroidal blocker (cisatracurium).'
    ]
  },
  {
    id: 'thiopental',
    name: 'Thiopental',
    genericName: 'Thiopental sodium (Pentothal)',
    category: 'induction',
    categoryLabel: 'Induction Agent',
    class: 'Ultra-short-acting thiobarbiturate / GABA-A receptor modulator',
    mechanism: 'Ultra-short-acting sulfur-substituted thiobarbiturate. Acts as a positive allosteric modulator of GABA-A receptors: binds to allosteric sites and prolongs the duration of chloride channel openings induced by GABA (unlike benzodiazepines, which increase opening frequency). At high concentrations, directly gates chloride channels in the absence of GABA and additionally inhibits excitatory AMPA/kainate glutamate receptors. Produces rapid loss of consciousness within 15–30 seconds. CEREBROPROTECTIVE PROFILE: Induces intense cerebral vasoconstriction, substantially decreasing cerebral blood flow (CBF) and intracranial pressure (ICP). Concurrently suppresses neuronal metabolic activity, reducing cerebral metabolic rate of oxygen (CMRO2) by up to 50% (until an isoelectric EEG is reached), protecting ischemic cerebral tissue while maintaining cerebral perfusion pressure (CPP). In the cardiovascular system, it causes profound venodilation (pooling in capacitance vessels, reducing venous return and preload) and direct myocardial depression, resulting in sharp hypotension in hypovolemic patients. Absolutely contraindicated in acute inducible porphyrias by inducing ALAS1 (delta-aminolevulinic acid synthase), triggering fatal neurovisceral crises.',
    indications: [
      'Induction of general anesthesia in neurosurgery for patients with elevated intracranial pressure (ICP)',
      'Refractory status epilepticus unresponsive to first-line anticonvulsants and benzodiazepines',
      'Cerebral protection during temporary arterial occlusion (e.g., carotid endarterectomy)'
    ],
    dosageInduction: '3.0 - 5.0 mg/kg IV bolus (reduce to 1.5 - 2.5 mg/kg in elderly, debilitated, or hypovolemic patients).',
    pediatricDosage: '5.0 - 7.0 mg/kg IV (higher dose requirements due to enhanced metabolic clearance and larger Vd).',
    standardPrep: '0.5 g or 1.0 g powder reconstituted with sterile water to a 2.5% solution (25 mg/mL, pH ~10.5).',
    onset: '15 - 30 seconds (one arm-brain circulation time).',
    duration: '5 - 15 minutes (awakening driven by rapid redistribution into skeletal muscle and viscera).',
    contraindications: [
      'Acute intermittent porphyria or porphyria variegata (absolute contraindication!)',
      'Severe cardiovascular collapse or uncorrected hypovolemic shock',
      'Severe status asthmaticus (risk of severe bronchospasm upon airway manipulation in light anesthesia)'
    ],
    adverseEffects: [
      'Marked hypotension from venous pooling (reduced preload) and direct negative inotropy',
      'Respiratory depression and apnea',
      'Severe tissue necrosis, gangrene, and arterial spasm following accidental intra-arterial injection or extravasation (alkaline pH ~10.5)',
      'Laryngospasm and bronchospasm upon light airway instrumentation'
    ],
    pearls: [
      'The classic benchmark for neuroprotection: reduces CMRO2 and intracranial pressure more reliably than modern alternatives.',
      'Absolute contraindication in porphyria: stimulation of ALA synthase leads to life-threatening attacks with quadriplegia and severe abdominal pain.',
      'If accidentally injected into an artery: leave the catheter in place, inject vasodilators (papaverine, lidocaine, phentolamine), and heparinize to prevent thrombosis.'
    ]
  },
  {
    id: 'dexmedetomidine',
    name: 'Dexmedetomidine',
    genericName: 'Dexmedetomidine (Precedex / Dexdor)',
    category: 'sedatives',
    categoryLabel: 'Sedative / Adjuvant Analgesic',
    class: 'Superselective α2-adrenergic receptor agonist',
    mechanism: 'Superselective full agonist at presynaptic and postsynaptic α2-adrenergic receptors (α2:α1 selectivity ratio of 1620:1, approximately 8× more selective than clonidine). Acts on Gi-coupled α2 receptors in the locus coeruleus of the brainstem. Adenylyl cyclase inhibition, inward-rectifying K⁺ channel opening, and voltage-gated Ca²⁺ channel inhibition extinguish noradrenergic firing and shut down ascending arousal pathways. COOPERATIVE SEDATION PHENOMENON: Produces a unique sedative state that electrophysiologically and clinically mirrors natural non-REM sleep (stage N2). The patient is easily aroused with verbal or gentle tactile stimuli, can communicate and cooperate with neurological assessments or awake intubation, and smoothly returns to sleep when unprovoked. CRITICAL RESPIRATORY ADVANTAGE: Does not cause primary central respiratory depression – preserves spontaneous respiratory drive and intact ventilatory response to hypercapnia. Acts on spinal α2 receptors in the dorsal horn substantia gelatinosa to deliver opioid-sparing analgesia. Blunts sympathetic surges, reduces circulating catecholamines, and proven in multiple trials to reduce postoperative delirium in ICU and surgical patients.',
    indications: [
      'ICU sedation for mechanically ventilated patients aimed at facilitating early weaning and extubation',
      'Procedural conscious sedation in non-intubated patients before or during invasive procedures (e.g., awake fiberoptic intubation)',
      'Prevention and treatment of postoperative delirium in high-risk geriatric and ICU patients',
      'Adjuvant multimodal analgesia to decrease perioperative opioid consumption'
    ],
    dosageInduction: 'Loading dose: 0.5 - 1.0 mcg/kg IV over 10–20 minutes (frequently omitted in anesthesia to prevent bradycardia/hypotension). Maintenance: 0.2 - 1.4 mcg/kg/h continuous infusion.',
    pediatricDosage: '0.2 - 1.0 mcg/kg/h IV continuous infusion.',
    standardPrep: '100 mcg/mL concentrate (MUST be diluted, typically to 4 mcg/mL in normal saline).',
    onset: '10 - 15 minutes (slower onset than propofol or midazolam).',
    duration: '1 - 2 hours after infusion termination (elimination half-life ~2 hours).',
    contraindications: [
      'Severe bradycardia or advanced atrioventricular block (2nd or 3rd degree AV block without a pacemaker)',
      'Severe uncompensated hypotension or left ventricular systolic failure'
    ],
    adverseEffects: [
      'Bradycardia (central sympatholysis and heightened vagal tone)',
      'Hypotension (central reduction of vascular tone; rapid IV bolus can paradoxically trigger transient hypertension via peripheral vascular α2B receptors)',
      'Dry mouth (xerostomia)'
    ],
    pearls: [
      'The gold standard for awake fiberoptic intubation: the patient remains calm and comfortable, tolerates the endoscope, and maintains spontaneous ventilation.',
      'Does not cause respiratory depression or airway collapse, making it ideal for patients with severe obstructive sleep apnea (OSA).',
      'In pediatric anesthesia, highly effective for preventing emergence delirium following sevoflurane anesthesia.'
    ]
  },
  {
    id: 'norepinephrine',
    name: 'Norepinephrine',
    genericName: 'Norepinephrine / Noradrenaline (Levophed)',
    category: 'vasoactive',
    categoryLabel: 'Cardiovascular / Vasoactive',
    class: 'Endogenous catecholamine / potent direct sympathomimetic (α1 > β1 ≫ β2)',
    mechanism: 'Endogenous catecholamine and potent direct adrenergic agonist with predominant activity at α1 and α2 receptors, combined with balanced myocardial β1 stimulation (and negligible β2 activity). Stimulation of vascular smooth muscle α1 receptors (via Gq and IP3/DAG signaling) produces intense arterial vasoconstriction, sharply elevating systemic vascular resistance (SVR) and mean arterial pressure (MAP). PRELOAD RECRUITMENT AND CARDIAC OUTPUT: Constriction of splanchnic and systemic venous capacitance beds mobilizes unstressed volume into the active circulation, increasing mean systemic filling pressure (Pmsf) and augmenting venous return (preload) to the right heart. Concurrently, moderate myocardial β1 stimulation (positive inotropy and chronotropy) offsets baroreflex-mediated bradycardia; stroke volume (SV) and cardiac output (CO) are therefore preserved or increased (unlike pure α1-agonists like phenylephrine, which depress CO). CLINICAL STATUS: First-line vasopressor for septic shock (Surviving Sepsis Campaign guidelines), vasoplegic shock, and profound vasodilation. Demonstrates significantly lower arrhythmogenicity and lower mortality than dopamine. In modern anesthesia, low-dose early peripheral infusion is widely employed for tight hemodynamic control.',
    indications: [
      'First-line vasopressor in septic shock and systemic inflammatory response syndrome (SIRS)',
      'Vasoplegic shock following cardiopulmonary bypass or anesthesia-induced vasodilation',
      'Cardiogenic and neurogenic shock (as part of combined inotropic and vasopressor support)'
    ],
    dosageInduction: 'Continuous infusion: 0.02 - 1.0 mcg/kg/min IV, titrated to target mean arterial pressure (MAP ≥ 65 mmHg).',
    pediatricDosage: '0.05 - 0.5 mcg/kg/min IV continuous infusion.',
    standardPrep: 'Central line: 4 mg in 50 mL NS (80 mcg/mL); peripheral safety dilution: 4 mg in 250 mL NS (16 mcg/mL).',
    onset: '1 - 2 minutes IV.',
    duration: '1 - 2 minutes after infusion cessation (rapid clearance via COMT, MAO, and neuronal reuptake).',
    contraindications: [
      'Uncorrected severe hypovolemia (adequate volume resuscitation must accompany or precede vasopressor therapy except in emergency bridge)',
      'Severe tachyarrhythmias and ventricular fibrillation'
    ],
    adverseEffects: [
      'Peripheral and splanchnic organ hypoperfusion from excessive vasoconstriction and uncorrected hypovolemia',
      'Cardiac arrhythmias (tachycardia, atrial fibrillation) mediated by β1 stimulation',
      'Extensive tissue ischemia and necrosis upon peripheral line extravasation'
    ],
    pearls: [
      'The premier vasopressor in critical care: the landmark SOAP II trial demonstrated superior survival and fewer arrhythmias compared to dopamine in septic shock.',
      'Extravasation emergency: immediately infiltrate phentolamine (5–10 mg in 10 mL saline) locally into the blanched area to antagonize α-receptors and prevent necrosis.',
      'Modern anesthesia practice safely supports early peripheral administration of dilute solutions (16 mcg/mL) via a large forearm vein while central access is established.'
    ]
  },
  {
    id: 'atropine',
    name: 'Atropine',
    genericName: 'Atropine sulfate',
    category: 'vasoactive',
    categoryLabel: 'Cardiovascular / Vasoactive',
    class: 'Tertiary amine parasympatholytic / competitive antimuscarinic',
    mechanism: 'Natural tertiary amine alkaloid functioning as a competitive, reversible antagonist of acetylcholine at all muscarinic receptor subtypes (M1–M5). CARDIAC MECHANISM: In the myocardium, it selectively blocks muscarinic M2 receptors in the sinoatrial (SA) and atrioventricular (AV) nodes, which are normally coupled to inhibitory Gi proteins. By relieving parasympathetic (vagal) inhibitory tone, it increases intracellular cAMP, accelerates phase 4 spontaneous diastolic depolarization in the SA node, and shortens AV node refractory period, resulting in positive chronotropy and dromotropy. RECENT GUIDELINES REVISION (ERC / AHA ACLS): The initial recommended bolus dose for hemodynamically unstable bradycardia in adults was raised from 0.5 mg to 1.0 mg IV (repeated every 3–5 min up to a total vagolytic dose of 3.0 mg). PARADOXICAL LOW-DOSE BRADYCARDIA: Subtherapeutic doses (<0.5 mg in adults) are hazardous and contraindicated; they block presynaptic inhibitory M1 autoreceptors on postganglionic vagal terminals (which normally limit acetylcholine release), paradoxically increasing acetylcholine output and worsening bradycardia. In the respiratory tract, it blocks M3 receptors, suppressing secretions and inducing mild bronchodilation. Ineffective in denervated hearts (heart transplant) and infranodal conduction disease (Mobitz II, complete 3rd degree block with wide QRS).',
    indications: [
      'Symptomatic and hemodynamically unstable sinus bradycardia (ACLS first-line agent)',
      'Prevention and treatment of vagal reflex bradycardia during airway instrumentation (especially in children prior to succinylcholine)',
      'Preoperative reduction of excessive oral and tracheobronchial secretions',
      'Specific antidote for organophosphate, carbamate, and nerve agent anticholinesterase toxicity'
    ],
    dosageInduction: 'Unstable bradycardia: 1.0 mg IV bolus every 3-5 minutes (maximum total vagolytic dose 3.0 mg). Antisialagogue: 0.4 - 0.6 mg IV/IM.',
    pediatricDosage: '0.02 mg/kg IV (minimum single dose 0.1 mg to prevent paradoxical bradycardia; max single dose 0.5 mg).',
    standardPrep: '0.5 mg/mL or 1.0 mg/mL ampoules.',
    onset: '1 - 2 minutes IV.',
    duration: '2 - 4 hours (ocular effects such as mydriasis and cycloplegia persist longer).',
    contraindications: [
      'Acute closed-angle glaucoma (mydriasis triggers pupillary block and acute crisis)',
      'Acute coronary syndrome and tachyarrhythmias (tachycardia increases myocardial oxygen demand)',
      'Severe obstructive GI disease and prostatic hypertrophy with urinary retention'
    ],
    adverseEffects: [
      'Sinus tachycardia, palpitations, and ventricular ectopy',
      'Anticholinergic toxidrome: dry mouth, mydriasis, blurred vision, flushed dry skin, hyperthermia, constipation, urinary retention',
      'Central anticholinergic syndrome: agitation, hallucinations, delirium (crosses the blood-brain barrier)'
    ],
    pearls: [
      'Guideline change: start with 1.0 mg IV for unstable bradycardia, not 0.5 mg, to avoid paradoxical vagal slowing.',
      'Doses under 0.5 mg in adults are dangerous: presynaptic M1 blockade paradoxically increases acetylcholine release.',
      'Completely ineffective in cardiac transplant recipients due to lack of vagal innervation; direct adrenergic agonists (isoproterenol, epinephrine) or pacing must be used.'
    ]
  },
  {
    id: 'naloxone',
    name: 'Naloxone',
    genericName: 'Naloxone (Narcan)',
    category: 'reversal',
    categoryLabel: 'Reversal Agent',
    class: 'Pure competitive opioid receptor antagonist',
    mechanism: 'Pure synthetic competitive opioid antagonist without intrinsic agonist activity. Displays highest binding affinity for μ-opioid receptors (MOR), with lower affinity for κ and δ receptors. Competitively displaces exogenous and endogenous opioid ligands from the receptor binding pocket without activating Gi-coupled signaling. Rapidly reverses all opioid actions in the CNS and periphery – promptly restoring respiratory rate, tidal volume, and hypercapnic ventilatory drive, reversing miosis, and terminating sedation and analgesia. CRITICAL PHARMACOKINETIC MISMATCH (t1/2): Naloxone has an extremely short elimination half-life (only 30–90 minutes). The duration of action of almost all clinical opioids (morphine, methadone, oxycodone, transdermal fentanyl) is substantially longer (3–24+ hours). Once naloxone clears the receptor, the patient is at high risk for RENARCOTIZATION and recurrent fatal apnea, mandating extended clinical monitoring. SYMPATHETIC CATECHOLAMINE STORM: Rapid high-dose bolus reversal in opioid-dependent or postoperative patients causes an explosive surge of endogenous catecholamines due to acute excruciating pain and withdrawal. This can trigger acute flash non-cardiogenic pulmonary edema, malignant arrhythmias, and hypertensive crisis. In postoperative care, it must be micro-titrated (0.04 mg IV every 2 minutes) to restore ventilation while sparing analgesia.',
    indications: [
      'Prompt reversal of life-threatening opioid-induced respiratory depression and coma',
      'Emergency diagnosis and treatment of known or suspected acute opioid overdose',
      'Postoperative titration to reverse excessive opioid sedation while preserving adequate analgesia'
    ],
    dosageInduction: 'Postoperative titration: 0.04 - 0.08 mg IV every 2 minutes until ventilation returns; severe overdose / cardiac arrest: 0.4 - 2.0 mg IV/IM/IN every 2-3 minutes (up to 10 mg).',
    pediatricDosage: '0.01 - 0.1 mg/kg IV/IM/IO.',
    standardPrep: '0.4 mg/mL ampoules (for postoperative titration, dilute 1 mL into 10 mL saline $\\rightarrow$ 0.04 mg/mL).',
    onset: '1 - 2 minutes IV; 2 - 5 minutes IM/IN.',
    duration: '30 - 90 minutes (significantly shorter than most opioid agonists).',
    contraindications: [
      'Known hypersensitivity to naloxone',
      'Opioid dependency (relative – titrate cautiously to avoid precipitating acute severe withdrawal syndrome)'
    ],
    adverseEffects: [
      'Acute withdrawal syndrome: severe agitation, diaphoresis, vomiting, abdominal cramping, hypertension, and tachycardia',
      'Acute flash non-cardiogenic pulmonary edema and ventricular arrhythmias (catecholamine storm from abrupt pain return)',
      'Total loss of postoperative analgesia leading to excruciating pain'
    ],
    pearls: [
      'The cardinal clinical danger is renarcotization: naloxone wears off in 45–90 min while long-acting opioids remain active. Monitoring for at least 2–4 hours is mandatory.',
      'Postoperative golden rule: never push a whole 0.4 mg vial IV in an awakened post-op patient! Dilute to 0.04 mg/mL and titrate 1 mL at a time to restore breathing without causing agony.',
      'Intranasal naloxone spray is a proven life-saving community and first-responder tool for acute opioid overdose.'
    ]
  },
  {
    id: 'neostigmine',
    name: 'Neostigmine',
    genericName: 'Neostigmine methylsulfate (Prostigmin / Syntostigmin)',
    category: 'reversal',
    categoryLabel: 'Reversal Agent',
    class: 'Reversible acetylcholinesterase inhibitor (anticholinesterase)',
    mechanism: 'Carbamate-type reversible inhibitor of acetylcholinesterase (AChE) and pseudocholinesterase. Binds to both the esteratic and anionic active sites of the enzyme, forming a carbamylated enzyme complex. Hydrolysis of this complex occurs very slowly (taking tens of minutes compared to microseconds for natural acetylcholine), temporarily arresting acetylcholine breakdown in synaptic clefts. This results in massive accumulation of endogenous acetylcholine at the neuromuscular junction, which competitively displaces non-depolarizing neuromuscular blockers (rocuronium, vecuronium, cisatracurium) from postsynaptic nAChR receptors, restoring neuromuscular transmission. NON-SELECTIVITY AND SEVERE MUSCARINIC EFFECTS: Acetylcholine accumulates not only at nicotinic muscle receptors but also at all parasympathetic muscarinic receptors (M1, M2, M3). This produces severe bradycardia, AV nodal blocks, asystole, bronchospasm, profuse tracheobronchial secretions, and gastrointestinal hypermotility. Consequently, it MUST ALWAYS BE CO-ADMINISTERED WITH AN ANTIMUSCARINIC (glycopyrrolate 0.2 mg per 1 mg neostigmine, or atropine 0.015 mg/kg) with a matched pharmacokinetic onset. PREREQUISITES: Only effective when spontaneous recovery is already underway (minimum 2, preferably 4 twitches on TOF). Administering into deep block is ineffective and can paradoxically induce a depolarizing desensitization block. Cannot reverse succinylcholine (in fact, pseudocholinesterase inhibition severely prolongs succinylcholine block!).',
    indications: [
      'Reversal of residual non-depolarizing neuromuscular blockade (rocuronium, cisatracurium, atracurium) at end of surgery',
      'Symptomatic management of myasthenia gravis',
      'Acute colonic pseudo-obstruction (Ogilvie syndrome)'
    ],
    dosageInduction: '0.03 - 0.05 mg/kg IV (max single dose 5.0 mg). ALWAYS co-administered with glycopyrrolate (0.2 mg per 1 mg neostigmine) or atropine (0.015 mg/kg).',
    pediatricDosage: '0.03 - 0.05 mg/kg IV always paired with atropine (0.015 - 0.02 mg/kg).',
    standardPrep: '0.5 mg/mL or 1.0 mg/mL ampoules.',
    onset: '7 - 11 minutes (slow onset; requires time for accumulated acetylcholine to displace relaxant).',
    duration: '60 - 120 minutes.',
    contraindications: [
      'Mechanical gastrointestinal or urinary tract obstruction',
      'Severe baseline bradycardia, AV conduction defects, or active uncontrolled bronchospasm',
      'Hypersensitivity to neostigmine or bromides/methylsulfates'
    ],
    adverseEffects: [
      'Severe bradycardia, junctional rhythm, AV block, and asystolic cardiac arrest (M2 muscarinic effect)',
      'Bronchoconstriction, bronchospasm, and copious airway secretions (M3 muscarinic effect)',
      'Increased salivation, nausea, vomiting, abdominal cramping, and diarrhea',
      'Muscle fasciculations and weakness if overdosed (cholinergic crisis)'
    ],
    pearls: [
      'Absolute safety rule: NEVER administer neostigmine without an antimuscarinic agent! Immediate asystolic arrest and severe bronchospasm can result.',
      'Timing requirement: only administer when spontaneous recovery is confirmed (at least 2, ideally 4 twitches on TOF). In deep block, neostigmine is ineffective.',
      'While sugammadex is preferred for aminosteroids (rocuronium), neostigmine remains the cornerstone for reversing benzylisoquinolines (cisatracurium).'
    ]
  },
  {
    id: 'dexamethasone',
    name: 'Dexamethasone',
    genericName: 'Dexamethasone (Decadron / Fortecortin)',
    category: 'reversal',
    categoryLabel: 'Antiemetic / Glucocorticoid',
    class: 'Long-acting synthetic fluorinated glucocorticoid',
    mechanism: 'Long-acting, highly potent synthetic glucocorticoid with negligible mineralocorticoid activity (anti-inflammatory potency is ~25–30× higher than hydrocortisone). Freely diffuses across cell membranes and binds to cytoplasmic glucocorticoid receptors (GR). The hormone-receptor complex dissociates from heat shock proteins (Hsp90), homodimerizes, and translocates into the nucleus. It exerts dual genomic actions: 1) Transrepression: directly inhibits master pro-inflammatory transcription factors (NF-κB and AP-1), suppressing transcription of pro-inflammatory cytokines (IL-1, IL-6, TNF-α), cyclooxygenase-2 (COX-2), and inducible nitric oxide synthase (iNOS); 2) Transactivation: stimulates synthesis of anti-inflammatory proteins, notably lipocortin-1 (annexin A1), which inhibits phospholipase A2 (PLA2) and blunts the arachidonic acid cascade. ANTIEMETIC MECHANISM (PONV): Inhibits central prostaglandin synthesis in the brainstem, modulates serotonergic signaling in the solitary tract nucleus and area postrema, reduces blood-brain barrier permeability to circulating emetogenic toxins, and sensitizes 5-HT3 receptors to antagonism (synergy with ondansetron). Because its primary mechanism depends on protein synthesis and gene transcription, onset takes 1–2 hours – hence it must be given at induction, not at emergence. Biological half-life is 36–72 hours. Reduces soft tissue airway edema following traumatic or prolonged intubation, preventing post-extubation stridor.',
    indications: [
      'Prophylaxis of postoperative nausea and vomiting (PONV) in moderate-to-high risk patients (Apfel score ≥2)',
      'Prevention and treatment of post-extubation laryngeal edema and stridor',
      'Adjuvant therapy in severe anaphylaxis and refractory bronchospasm',
      'Prolongation of analgesia in peripheral nerve blocks (perineural or systemic adjuvant)'
    ],
    dosageInduction: 'PONV prophylaxis: 4 - 8 mg IV bolus at induction of anesthesia; airway edema prevention: 8 - 12 mg IV.',
    pediatricDosage: '0.15 - 0.3 mg/kg IV (max 8–10 mg).',
    standardPrep: '4 mg/mL or 8 mg/mL ampoules.',
    onset: '1 - 2 hours (genomic mechanism requiring gene transcription and protein synthesis).',
    duration: '36 - 72 hours (extended biological half-life).',
    contraindications: [
      'Systemic untreated fungal infections',
      'Severe uncontrolled diabetic ketoacidosis or brittle hyperglycemia (relative)',
      'Known hypersensitivity to dexamethasone'
    ],
    adverseEffects: [
      'Transient intense perineal burning, itching, or tingling upon rapid IV push in awake patients (phosphate ester vehicle effect)',
      'Transient postoperative hyperglycemia (requires blood glucose monitoring in diabetic patients)',
      'Mild sleep disturbances or agitation in the postoperative period'
    ],
    pearls: [
      'Critical timing: administer dexamethasone AT INDUCTION of anesthesia! Its genomic mechanism requires 1–2 hours to achieve antiemetic efficacy.',
      'Combination PONV prophylaxis: dexamethasone (4–8 mg) at induction plus ondansetron (4 mg) at emergence yields the highest synergistic protection.',
      'Always warn awake patients before IV injection about the harmless but startling transient burning sensation in the perineum; infusing slowly over 1–2 minutes avoids this.'
    ]
  }
];
