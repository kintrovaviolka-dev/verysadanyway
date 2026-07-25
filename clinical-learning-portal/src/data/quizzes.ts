import { QuizQuestion } from '../types';

export const ANESTHESIA_QUIZ: QuizQuestion[] = [
  {
    id: 'q1',
    caseContext: 'A 68-year-old male with a history of severe aortic stenosis and severe hypovolemic shock due to an active upper GI bleed requires immediate endotracheal intubation. His blood pressure is currently 78/42 mmHg and heart rate is 112 bpm.',
    question: 'Which induction agent is the most hemodynamically stable and suitable choice for this patient?',
    options: [
      'Propofol 2 mg/kg IV',
      'Ketamine 2 mg/kg IV',
      'Etomidate 0.3 mg/kg IV',
      'Midazolam 0.1 mg/kg IV'
    ],
    correctAnswerIndex: 2,
    explanation: 'Etomidate (0.2 - 0.3 mg/kg IV) is the drug of choice in hemodynamically unstable shock patients, particularly those with valvular disorders like aortic stenosis. Etomidate has negligible effects on myocardial contractility and systemic vascular resistance, making it uniquely stable. Propofol is highly contraindicated here as it causes profound vasodilation and myocardial depression. While Ketamine is also used in shock, its sympathetic stimulation increases heart rate and myocardial oxygen demand, which is highly dangerous in severe aortic stenosis.',
    medicationId: 'etomidate'
  },
  {
    id: 'q2',
    caseContext: 'An obese 42-year-old female is scheduled for emergency laparoscopic cholecystectomy. She has a history of gastroesophageal reflux disease (GERD) and requires a Rapid Sequence Induction (RSI). You are planning to use Succinylcholine to facilitate rapid intubation.',
    question: 'In which of the following patient scenarios would Succinylcholine be ABSOLUTELY contraindicated?',
    options: [
      'Patient with an estimated GFR of 45 mL/min (moderate chronic kidney disease)',
      'Patient with a complete T6 spinal cord transaction injury sustained 12 months ago',
      'Patient with a history of severe post-operative nausea and vomiting (PONV)',
      'Patient with a documented allergy to penicillin and egg'
    ],
    correctAnswerIndex: 1,
    explanation: 'Succinylcholine is absolutely contraindicated in patients with chronic spinal cord injuries (typically beginning 24-48 hours after injury, lasting up to 1-2 years or indefinitely). Denervation of muscle leads to up-regulation of extrajunctional nicotinic acetylcholine receptors. If Succinylcholine binds to these receptors, it causes massive potassium release, resulting in hyperkalemia, ventricular fibrillation, and cardiac arrest. Mild-to-moderate CKD is not a contraindication unless active severe hyperkalemia is present.',
    medicationId: 'succinylcholine'
  },
  {
    id: 'q3',
    caseContext: 'A 70kg (Ideal Body Weight) patient with normal liver and renal function is induced for routine orthopaedic surgery. The anesthetist administers Rocuronium 50mg IV (approx. 0.7 mg/kg) to facilitate intubation.',
    question: 'During airway management, the anesthetist encounters a "Can\'t Intubate, Can\'t Oxygenate" (CICO) scenario 2 minutes after drug administration. What is the most appropriate rescue reversal regimen?',
    options: [
      'Administer Neostigmine 0.05 mg/kg IV combined with Glycopyrrolate',
      'Wait 30-40 minutes for natural Rocuronium redistribution and clearance',
      'Administer Sugammadex 16.0 mg/kg IV immediately',
      'Administer Sugammadex 2.0 mg/kg IV immediately'
    ],
    correctAnswerIndex: 2,
    explanation: 'For emergency rescue reversal of profound, deep rocuronium blockade shortly after an induction dose of 1.2 mg/kg or 0.6 mg/kg, the required dose of Sugammadex is 16.0 mg/kg IV. This dose completely encapsulates the circulating rocuronium molecules in plasma, restoring neuromuscular transmission and spontaneous ventilation in less than 3 minutes, which can be life-saving in a CICO crisis. 2.0 mg/kg is only for moderate blocks (reappearance of TOF 2), and Neostigmine cannot reverse a deep, immediate block.',
    medicationId: 'sugammadex'
  },
  {
    id: 'q4',
    caseContext: 'A 28-year-old male with a history of severe brittle asthma is brought to the OR for emergency appendectomy. He is actively wheezing and has an expiratory wheeze in all lung fields.',
    question: 'Which induction agent is the most beneficial for this patient due to its active bronchodilating properties?',
    options: [
      'Propofol',
      'Ketamine',
      'Etomidate',
      'Midazolam'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ketamine is highly beneficial in patients with active asthma or bronchospasm. It stimulates the sympathetic nervous system, causing the release of endogenous catecholamines, which directly stimulate beta-2 receptors in the lungs to produce smooth muscle relaxation and bronchodilation. It also relaxes airway smooth muscle directly. Propofol also has some bronchodilating effects, but Ketamine is uniquely powerful and preferred in active asthmatic crises requiring intubation.',
    medicationId: 'ketamine'
  },
  {
    id: 'q5',
    caseContext: 'During induction of general anesthesia with Propofol 150mg and Fentanyl 100mcg in a 65-year-old female, the patient\'s blood pressure drops from 128/76 mmHg to 82/48 mmHg. Her heart rate also slows from 74 bpm to 52 bpm.',
    question: 'Which vasoactive drug and dose is the most appropriate first-line treatment to restore her hemodynamics?',
    options: [
      'Phenylephrine 50-100 mcg IV bolus',
      'Ephedrine 5-10 mg IV bolus',
      'Atropine 0.5 mg IV bolus',
      'Epinephrine 1 mg IV push'
    ],
    correctAnswerIndex: 1,
    explanation: 'Ephedrine (5-10 mg IV bolus) is the ideal drug here because the patient is suffering from BOTH hypotension (BP 82/48) and bradycardia (HR 52 bpm), typical of combined propofol and opioid side effects. Ephedrine stimulates alpha and beta receptors, which increases systemic vascular resistance (raising BP) and increases heart rate. Phenylephrine is a pure alpha-1 agonist that would raise BP but would cause a further decrease in heart rate via reflex bradycardia, making it less suitable for bradycardic patients.',
    medicationId: 'ephedrine'
  },
  {
    id: 'q6',
    caseContext: 'You are preparing an induction dose of Propofol for a stable 80-year-old female (weighing 60kg) undergoing an elective hernia repair. She has a history of controlled hypertension and osteoarthritis.',
    question: 'What is the most appropriate adjusted induction dose of Propofol for this elderly patient?',
    options: [
      '120 mg to 150 mg IV bolus (2.0 - 2.5 mg/kg)',
      '60 mg to 90 mg IV bolus (1.0 - 1.5 mg/kg)',
      '30 mg to 40 mg IV bolus (0.5 mg/kg)',
      '180 mg to 210 mg IV bolus (3.0 - 3.5 mg/kg)'
    ],
    correctAnswerIndex: 1,
    explanation: 'In elderly patients (typically over age 65-70), the required induction dose of Propofol is reduced by 30-50% (to approximately 1.0 - 1.5 mg/kg IV). Elderly patients have a reduced volume of distribution, slower clearance, and increased sensitivity to the cardiovascular depressant effects (significant hypotension) of Propofol. For a 60kg patient, 60-90mg is the correct adjusted dose range.',
    medicationId: 'propofol'
  },
  {
    id: 'q7',
    caseContext: 'A patient is being managed under spinal anesthesia for a cesarean section. Immediately after the intrathecal block, the patient becomes lightheaded, and her blood pressure drops to 88/44 mmHg. Her heart rate is 98 bpm.',
    question: 'Which vasoactive agent is preferred in obstetric spinal anesthesia to treat hypotension without causing fetal acidosis or maternal tachycardia?',
    options: [
      'Norepinephrine',
      'Ephedrine',
      'Phenylephrine',
      'Dopamine'
    ],
    correctAnswerIndex: 2,
    explanation: 'Phenylephrine (40 - 100 mcg IV boluses or continuous infusion) is the preferred drug of choice for treating spinal anesthesia-induced hypotension in obstetric anesthesia. Extensive clinical studies have shown that phenylephrine maintains uterine blood flow and is associated with a more favorable fetal acid-base status (less fetal acidosis) compared to ephedrine. It also controls maternal heart rate, preventing excessive tachycardia. Ephedrine is an alternative but is associated with more fetal metabolic activity and lower umbilical artery pH.',
    medicationId: 'phenylephrine'
  },
  {
    id: 'q8',
    caseContext: 'A 28-year-old female is scheduled for elective laparoscopic surgery. During anesthesia counseling, she discloses that her sister suffered from a life-threatening, massive spike in body temperature, rigid muscles, and high carbon dioxide levels during a minor knee surgery under general anesthesia.',
    question: 'Which of the following medications is a potential trigger for this suspected genetic condition (Malignant Hyperthermia) and must be strictly avoided?',
    options: [
      'Propofol',
      'Rocuronium',
      'Succinylcholine',
      'Ketamine'
    ],
    correctAnswerIndex: 2,
    explanation: 'Malignant Hyperthermia (MH) is a rare, life-threatening genetic hypermetabolic crisis triggered by exposure to volatile inhalational anesthetic gases (e.g. Sevoflurane, Isoflurane) or the depolarizing muscle relaxant Succinylcholine. It causes uncontrolled calcium release from the sarcoplasmic reticulum, causing severe muscle rigidity, hyperthermia, metabolic acidosis, rhabdomyolysis, and tachycardia. Non-depolarizing paralytics like Rocuronium and induction agents like Propofol/Ketamine are completely safe in MH-susceptible patients.',
    medicationId: 'succinylcholine'
  },
  {
    id: 'q9',
    caseContext: 'A 32-year-old female is scheduled for elective laparoscopic appendectomy. During pre-op assessment, she mentions a history of acute intermittent porphyria (AIP) in her family. The resident anesthesiologist prepares Thiopental for induction.',
    question: 'What is the most appropriate safety action regarding the use of Thiopental in this patient?',
    options: [
      'Administer Thiopental as planned; AIP is not a contraindication.',
      'Avoid Thiopental completely; it is a potent inducer of ALA synthetase and can trigger a life-threatening crisis.',
      'Administer Thiopental but co-administer high-dose Fentanyl to prevent the crisis.',
      'Avoid Thiopental only if the patient has active abdominal pain at the time of surgery.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Thiopental (and all barbiturates) are absolutely contraindicated in patients with acute intermittent porphyria (AIP) or other hepatic porphyrias. Barbiturates induce the enzyme delta-aminolevulinic acid (ALA) synthetase, which leads to a massive accumulation of porphyrins. This can trigger a severe, life-threatening porphyric crisis characterized by severe abdominal pain, psychiatric symptoms, autonomic instability, and ascending motor paralysis. Propofol or Ketamine are safe alternatives.',
    medicationId: 'thiopental'
  },
  {
    id: 'q10',
    caseContext: 'A 45-year-old male with severe COPD is in the ICU, recovering from emergency abdominal surgery. He is extubated but highly agitated, tachycardic, and refusing his non-invasive ventilation mask, putting him at high risk for re-intubation.',
    question: 'Which sedative agent is the most appropriate to manage his agitation without compromising his respiratory drive?',
    options: [
      'Propofol continuous infusion',
      'Midazolam IV boluses as needed',
      'Dexmedetomidine continuous infusion',
      'Fentanyl continuous infusion'
    ],
    correctAnswerIndex: 2,
    explanation: 'Dexmedetomidine is unique among sedatives because it provides "cooperative sedation" and does not cause respiratory depression (unlike propofol, benzodiazepines, or opioids). It acts on presynaptic alpha-2 receptors in the locus coeruleus, preserving the patient\'s respiratory drive and response to hypercapnia. This makes it the ideal agent for patients who are agitated but need to maintain spontaneous ventilation, such as those on non-invasive ventilation (NIV/BiPAP) or undergoing weaning from mechanical ventilation.',
    medicationId: 'dexmedetomidine'
  },
  {
    id: 'q11',
    caseContext: 'A patient in septic shock is receiving a continuous infusion of Norepinephrine via a temporary peripheral IV line in the forearm. During your rounds, you notice that the insertion site is swollen, cold, and pale, and the patient complains of severe burning pain.',
    question: 'What is the most immediate and appropriate action to take?',
    options: [
      'Increase the infusion rate to maintain the target MAP, and apply a warm compress.',
      'Stop the infusion immediately, aspirate residual drug from the catheter, and administer subcutaneous Phentolamine locally.',
      'Apply ice packs to the area and flush the catheter with 10 mL of heparinized saline.',
      'Slow the infusion rate by half and elevate the arm above the level of the heart.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Norepinephrine extravasation is a medical emergency because local vasoconstriction can cause severe ischemic tissue necrosis and sloughing. The infusion must be stopped immediately. You should leave the cannula in place to attempt to aspirate any remaining drug, then inject the antidote Phentolamine (an alpha-receptor antagonist, usually 5-10 mg diluted in 10 mL saline) through the catheter and subcutaneously around the infiltrated area to reverse the vasoconstriction.',
    medicationId: 'norepinephrine'
  },
  {
    id: 'q12',
    caseContext: 'An anesthetist is treating a 75-year-old male who develops severe sinus bradycardia (HR 32 bpm) and hypotension (BP 72/40 mmHg) during surgery. The resident prepares Atropine but administers a very small dose of 0.1 mg IV, fearing tachycardia.',
    question: 'What is the likely pharmacological consequence of administering this sub-therapeutic dose of Atropine?',
    options: [
      'A mild but adequate increase in heart rate to around 50 bpm.',
      'No change in heart rate; 0.1 mg is completely inert in adults.',
      'A paradoxical worsening of the bradycardia and potential heart block.',
      'Immediate severe sinus tachycardia and myocardial ischemia.'
    ],
    correctAnswerIndex: 2,
    explanation: 'Low doses of Atropine (less than 0.5 mg in adults or 0.1 mg in children) can cause a paradoxical worsening of bradycardia. This occurs because low doses block presynaptic inhibitory muscarinic (M1) receptors on vagal nerve endings, which increases acetylcholine release, or due to direct central vagal stimulation. Therefore, the standard adult ACLS dose of Atropine is 1.0 mg IV, and lower doses should be strictly avoided.',
    medicationId: 'atropine'
  },
  {
    id: 'q13',
    caseContext: 'You successfully reverse respiratory depression (RR 4/min, SpO2 78%) in a post-operative patient in the recovery room by administering Naloxone 0.2 mg IV. The patient is now awake, alert, and breathing at 14 breaths/min with SpO2 98%.',
    question: 'What is the most critical monitoring requirement for this patient following Naloxone administration?',
    options: [
      'Discharge the patient immediately to the ward as the airway is safe.',
      'Monitor the patient closely for at least 1-2 hours, as the duration of Naloxone is shorter than most opioids, risking recurrent respiratory depression.',
      'Check the patient\'s pupils every 5 minutes; if dilated, administer another dose of Naloxone.',
      'Start a continuous Naloxone infusion immediately in all reversed patients.'
    ],
    correctAnswerIndex: 1,
    explanation: 'The duration of action of Naloxone (approx. 30-90 minutes) is significantly shorter than the duration of action of most clinical opioids (e.g. morphine, fentanyl, hydromorphone). Once Naloxone is metabolized and cleared, the remaining opioid molecules can re-bind to the receptors, causing recurrent respiratory depression and sedation ("re-narcotization"). Therefore, patients must be observed for at least 1-2 hours after the last dose of Naloxone.',
    medicationId: 'naloxone'
  },
  {
    id: 'q14',
    caseContext: 'At the end of a surgery, the surgical team requests reversal of Rocuronium. The patient has a Train-of-Four (TOF) count of 3. The anesthesia resident decides to administer Neostigmine 2.5 mg IV.',
    question: 'What other pharmacological action MUST the resident take when administering Neostigmine?',
    options: [
      'Administer Neostigmine alone; no adjunct is required.',
      'Co-administer an anticholinergic agent (such as Glycopyrrolate or Atropine) to block severe muscarinic side effects.',
      'Co-administer Sugammadex to double the speed of reversal.',
      'Administer a beta-blocker to prevent severe tachycardia caused by Neostigmine.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Neostigmine is an acetylcholinesterase inhibitor that increases acetylcholine levels at BOTH nicotinic receptors (reversing neuromuscular blockade) and muscarinic receptors. Muscarinic stimulation causes severe bradycardia, AV block, bronchospasm, hypersalivation, and increased GI motility. To prevent these life-threatening parasympathetic side effects, Neostigmine must ALWAYS be co-administered with an antimuscarinic/anticholinergic drug (such as Glycopyrrolate or Atropine).',
    medicationId: 'neostigmine'
  },
  {
    id: 'q15',
    caseContext: 'A 60-year-old male is scheduled for a major orthopedic surgery. He has a high risk of postoperative nausea and vomiting (PONV) based on his Apfel score. The anesthesiologist decides to administer Dexamethasone shortly after induction.',
    question: 'What is the primary mechanism and clinical advantage of Dexamethasone in this scenario?',
    options: [
      'It acts as an immediate sedative, reducing the requirement for Propofol.',
      'It is a potent antiemetic that reduces prostaglandin synthesis and central serotonin levels, working synergistically with Ondansetron.',
      'It reverses neuromuscular blockade by accelerating acetylcholine release.',
      'It is a pure analgesic that completely replaces the need for intraoperative opioids.'
    ],
    correctAnswerIndex: 1,
    explanation: 'Dexamethasone (4-10 mg IV) is a highly effective antiemetic used for PONV prophylaxis. It acts by reducing prostaglandin synthesis and decreasing central serotonin levels. When combined with a 5-HT3 receptor antagonist like Ondansetron, it exhibits significant synergy. It is administered shortly after induction due to its delayed onset (1-2 hours). Awake patients should be warned of temporary perineal pruritus/burning if injected rapidly.',
    medicationId: 'dexamethasone'
  }
];
