import { EmergencyAlgorithm } from '../types';

export const EMERGENCY_ALGORITHMS: EmergencyAlgorithm[] = [
  {
    id: 'acls_cardiac_arrest',
    title: 'ACLS Adult Cardiac Arrest',
    shortDescription: 'Step-by-step management of pulseless cardiac arrest (VF, pulseless VT, PEA, and Asystole).',
    detailedDescription: 'This interactive clinical simulation tests your ability to run an Advanced Cardiovascular Life Support (ACLS) code, recognize rhythms, time CPR cycles, and administer appropriate medications and shocks.',
    category: 'cardiac_arrest',
    startStepId: 'check_responsiveness',
    steps: {
      check_responsiveness: {
        id: 'check_responsiveness',
        title: 'Initial Assessment',
        description: 'You are called to a hospital room. The patient is lying in bed, unresponsive to verbal commands.',
        vitals: { rhythm: 'Unknown', hr: 0, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Check carotid pulse and look for breathing simultaneously (< 10 seconds)',
            nextStepId: 'assess_rhythm_vfpvt',
            rationale: 'Correct! The first step in unresponsive patients is to check for breathing and a carotid pulse simultaneously for no more than 10 seconds.',
            isCorrect: true
          },
          {
            text: 'Immediately obtain a 12-lead ECG',
            nextStepId: 'delay_pulse_check',
            rationale: 'Incorrect. If the patient is unresponsive, delaying a basic check for pulse and breathing to perform a complex task like a 12-lead ECG is dangerous and can lead to prolonged cardiac arrest without perfusion.'
          },
          {
            text: 'Prepare 1mg of Epinephrine IV and inject immediately',
            nextStepId: 'delay_pulse_check',
            rationale: 'Incorrect. You must confirm cardiac arrest and verify pulse/breathing before starting chemical resuscitation.'
          }
        ]
      },
      delay_pulse_check: {
        id: 'delay_pulse_check',
        title: 'Critical Delay',
        description: 'While you set up, the patient remains completely apneic and cyanotic. No chest compressions are being delivered. You realize you must check the pulse first.',
        type: 'decision',
        choices: [
          {
            text: 'Check carotid pulse and start chest compressions immediately',
            nextStepId: 'assess_rhythm_vfpvt',
            rationale: 'Good course correction. You verify that there is NO pulse and NO breathing. Chest compressions are started.',
            isCorrect: true
          }
        ]
      },
      assess_rhythm_vfpvt: {
        id: 'assess_rhythm_vfpvt',
        title: 'Rhythm Analysis',
        description: 'You call for the crash cart, attach monitor pads, and initiate high-quality CPR (100-120 compressions/min, 2 inches deep, full recoil). The monitor screen displays a rapid, disorganized, bizarre waveform with no identifiable P waves, QRS complexes, or T waves.',
        vitals: { rhythm: 'Ventricular Fibrillation (VF)', hr: 230, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Deliver an immediate unsynchronized shock (200J biphasic)',
            nextStepId: 'shock_1_delivered',
            rationale: 'Correct! Ventricular Fibrillation (VF) is a shockable rhythm. Early defibrillation is the single most critical intervention for VF/pVT.',
            isCorrect: true
          },
          {
            text: 'Administer 1mg Epinephrine IV and continue CPR',
            nextStepId: 'med_before_shock_failure',
            rationale: 'Incorrect priority. Do not delay defibrillation of a shockable rhythm to administer drugs. Early shock is the life-saver here!'
          },
          {
            text: 'Perform synchronized cardioversion (100J)',
            nextStepId: 'synchronized_shock_failure',
            rationale: 'Incorrect. In Ventricular Fibrillation, there are no QRS complexes for the defibrillator to synchronize with. Doing a synchronized shock in VF will either fail to fire or deliver a useless delayed discharge.'
          }
        ]
      },
      med_before_shock_failure: {
        id: 'med_before_shock_failure',
        title: 'Inappropriate Medication Order',
        description: 'You waste 45 seconds trying to establish IV access and push epinephrine. The patient remains in VF. The monitor continues to scream.',
        type: 'decision',
        choices: [
          {
            text: 'Deliver a high-energy unsynchronized shock (200J)',
            nextStepId: 'shock_1_delivered',
            rationale: 'Correct. Finally you deliver the shock, though delayed.',
            isCorrect: true
          }
        ]
      },
      synchronized_shock_failure: {
        id: 'synchronized_shock_failure',
        title: 'Defibrillator Sync Mode Active',
        description: 'You press the shock buttons, but because the defibrillator is in SYNC mode, it is waiting for a QRS peak to synchronize with. There are none in VF, so the device refuses to fire. Time is ticking!',
        type: 'decision',
        choices: [
          {
            text: 'Turn off SYNC mode and immediately deliver an unsynchronized shock (200J)',
            nextStepId: 'shock_1_delivered',
            rationale: 'Correct! In VF or pulseless VT, sync mode must be off. Unsynchronized high-energy defibrillation is required.',
            isCorrect: true
          }
        ]
      },
      shock_1_delivered: {
        id: 'shock_1_delivered',
        title: 'Post-Shock Cycle 1',
        description: 'The shock is delivered. The patient\'s chest twitches. What is your immediate next action?',
        vitals: { rhythm: 'VF (Post-Shock)', hr: 0, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Resume chest compressions immediately for 2 minutes (without checking rhythm/pulse)',
            nextStepId: 'cycle_2_assess',
            rationale: 'Excellent! Immediately resume CPR after a shock. Do not stop to check rhythm or pulse; a stunned myocardium takes time to establish a perfusing rhythm and needs continuous CPR support.',
            isCorrect: true
          },
          {
            text: 'Check the monitor to see if the rhythm changed',
            nextStepId: 'stop_for_rhythm_check_error',
            rationale: 'Incorrect. Checking the monitor immediately after a shock delays compressions and reduces coronary perfusion pressure. Do not interrupt compressions for rhythm checks post-shock until 2 full minutes of CPR are complete.'
          },
          {
            text: 'Check for a carotid pulse',
            nextStepId: 'stop_for_rhythm_check_error',
            rationale: 'Incorrect. Pulse checks immediately after defibrillation waste precious perfusion time. Resume CPR immediately.'
          }
        ]
      },
      stop_for_rhythm_check_error: {
        id: 'stop_for_rhythm_check_error',
        title: 'CPR Interruption Warning',
        description: 'The team hesitates. You stop compressions to check the pulse. No pulse is palpable. The coronary perfusion pressure falls to zero. Your supervisor reminds you of ACLS guidelines.',
        type: 'decision',
        choices: [
          {
            text: 'Immediately resume CPR and perform 2 minutes of high-quality chest compressions',
            nextStepId: 'cycle_2_assess',
            rationale: 'Correct. Let\'s get back on the chest immediately.',
            isCorrect: true
          }
        ]
      },
      cycle_2_assess: {
        id: 'cycle_2_assess',
        title: '2-Minute Rhythm Re-evaluation',
        description: 'After 2 minutes of high-quality CPR (during which IO access is successfully established in the proximal tibia), you pause compressions for < 10 seconds. The monitor still shows Ventricular Fibrillation.',
        vitals: { rhythm: 'Persistent VF', hr: 220, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Deliver a 2nd shock (200J) and immediately resume CPR. Administer 1mg Epinephrine IV/IO during this cycle.',
            nextStepId: 'cycle_3_assess',
            rationale: 'Perfect! This is the 2nd rhythm check showing shockable VF. You deliver a 2nd shock and resume CPR. Epinephrine 1mg is now appropriate (given every 3-5 minutes, after the 2nd shock).',
            isCorrect: true
          },
          {
            text: 'Deliver a 2nd shock (200J) and immediately resume CPR. Administer 300mg Amiodarone IV/IO.',
            nextStepId: 'early_amiodarone_error',
            rationale: 'Incorrect timing. Amiodarone (or Lidocaine) is indicated for refractory VF *after* the 3rd shock, not the 2nd. Epinephrine should be administered first.'
          },
          {
            text: 'Continue CPR without shocking to avoid burning out the heart',
            nextStepId: 'delay_second_shock_error',
            rationale: 'Incorrect. If the rhythm remains shockable, shock it. Delaying defibrillation reduces the chance of success.'
          }
        ]
      },
      early_amiodarone_error: {
        id: 'early_amiodarone_error',
        title: 'Refractory VF Protocol Adjust',
        description: 'You administered Amiodarone. Although not harmful, Epinephrine was the standard first drug to give to optimize coronary perfusion pressure during the second cycle. Let\'s continue to the 3rd rhythm check.',
        type: 'decision',
        choices: [
          {
            text: 'Complete the CPR cycle and reassess rhythm',
            nextStepId: 'cycle_3_assess',
            rationale: 'Proceeding to next rhythm assessment.',
            isCorrect: true
          }
        ]
      },
      delay_second_shock_error: {
        id: 'delay_second_shock_error',
        title: 'Missed Shock Opportunity',
        description: 'By failing to shock immediately, the patient\'s heart continues to fibrillate, consuming its depleted ATP reserves.',
        type: 'decision',
        choices: [
          {
            text: 'Deliver the 2nd shock (200J) and continue CPR',
            nextStepId: 'cycle_3_assess',
            rationale: 'Understood. Shocking now.',
            isCorrect: true
          }
        ]
      },
      cycle_3_assess: {
        id: 'cycle_3_assess',
        title: '3rd Rhythm Check (Refractory VF)',
        description: 'Two full minutes of CPR are complete. Epinephrine 1mg has been pushed. You pause compressions. The patient remains in Ventricular Fibrillation. This is refractory VF.',
        vitals: { rhythm: 'Refractory VF', hr: 215, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Deliver a 3rd shock (200J), resume CPR immediately, and administer Amiodarone 300mg IV bolus.',
            nextStepId: 'cycle_4_assess',
            rationale: 'Absolutely correct! Refractory VF after 3 shocks warrants antiarrhythmics. Amiodarone 300mg IV/IO is the first dose (Lidocaine 1 - 1.5 mg/kg is an acceptable alternative).',
            isCorrect: true
          },
          {
            text: 'Deliver a 3rd shock (200J), resume CPR, and administer another 1mg Epinephrine.',
            nextStepId: 'epinephrine_stacking_error',
            rationale: 'Incorrect. Epinephrine should be given every 3 to 5 minutes. Giving another dose right now (only 2 minutes since the last one) risks Epinephrine stacking and severe toxicity.'
          },
          {
            text: 'Stop CPR and perform immediate chest needle decompression',
            nextStepId: 'needle_decompression_unjustified',
            rationale: 'Incorrect. There is no clinical indication of tension pneumotorax (unilateral absent breath sounds, tracheal deviation). Stopping CPR now is harmful.'
          }
        ]
      },
      epinephrine_stacking_error: {
        id: 'epinephrine_stacking_error',
        title: 'Epinephrine Toxicity Risk',
        description: 'You order another epinephrine dose too soon. Remember, too much epinephrine can worsen myocardial ischemia and cause severe post-ROSC tachycardia and arrhythmias. Let\'s correct and administer Amiodarone 300mg instead.',
        type: 'decision',
        choices: [
          {
            text: 'Give Amiodarone 300mg IV/IO and resume compressions',
            nextStepId: 'cycle_4_assess',
            rationale: 'Resuming correct refractory VF protocol.',
            isCorrect: true
          }
        ]
      },
      needle_decompression_unjustified: {
        id: 'needle_decompression_unjustified',
        title: 'Unnecessary Procedure',
        description: 'You perform needle decompression, but there is no rush of air. You have wasted time and interrupted compressions. Let\'s quickly return to high-quality CPR.',
        type: 'decision',
        choices: [
          {
            text: 'Resume compressions and administer Amiodarone 300mg',
            nextStepId: 'cycle_4_assess',
            rationale: 'Returning to chest compressions and shock protocol.',
            isCorrect: true
          }
        ]
      },
      cycle_4_assess: {
        id: 'cycle_4_assess',
        title: 'ROSC Assessment',
        description: 'You complete the 4th cycle of CPR. Amiodarone has been circulated. You pause compressions. The monitor shows a regular, organized, narrow-complex rhythm (Sinus Tachycardia) at a rate of 95 bpm.',
        vitals: { rhythm: 'Sinus Tachycardia', hr: 95, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Check for a carotid pulse',
            nextStepId: 'rosc_confirmed',
            rationale: 'Excellent choice! When an organized rhythm is seen on rhythm check, you must check for a pulse to differentiate between PEA (Pulseless Electrical Activity) and ROSC (Return of Spontaneous Circulation).',
            isCorrect: true
          },
          {
            text: 'Deliver a 4th shock immediately to stabilize the rhythm',
            nextStepId: 'shock_organized_rhythm_disaster',
            rationale: 'Extremely dangerous! Delivering a shock to an organized sinus rhythm is a critical error (you could shock during the vulnerable T-wave and trigger VF again).'
          },
          {
            text: 'Assume the patient is alive and stop all resuscitation interventions',
            nextStepId: 'assume_alive_without_pulse_error',
            rationale: 'Incorrect. An organized rhythm on a monitor does NOT guarantee a pulse (PEA). You must check the carotid pulse.'
          }
        ]
      },
      shock_organized_rhythm_disaster: {
        id: 'shock_organized_rhythm_disaster',
        title: 'Iatrogenic Re-Arrest',
        description: 'You delivered a shock to a regular rhythm. The patient immediately degenerates back into flatline or refractory Ventricular Fibrillation. Your medical director looks horrified.',
        type: 'decision',
        choices: [
          {
            text: 'Immediately resume chest compressions and perform rhythm analysis',
            nextStepId: 'cycle_2_assess',
            rationale: 'Restarting algorithm from a deteriorated state.',
            isCorrect: true
          }
        ]
      },
      assume_alive_without_pulse_error: {
        id: 'assume_alive_without_pulse_error',
        title: 'Neglected Pulseless Electrical Activity (PEA)',
        description: 'You pause all care. After 30 seconds, the patient develops profound brain hypoxia. You must verify if there is actually blood moving by doing a pulse check.',
        type: 'decision',
        choices: [
          {
            text: 'Perform the carotid pulse check',
            nextStepId: 'rosc_confirmed',
            rationale: 'Correct.',
            isCorrect: true
          }
        ]
      },
      rosc_confirmed: {
        id: 'rosc_confirmed',
        title: 'Pulse Detected! ROSC Achieved',
        description: 'You feel a strong, bounding bilateral carotid pulse. The patient has attained Return of Spontaneous Circulation (ROSC). Vitals are updating on the monitor.',
        vitals: { rhythm: 'Sinus Tachycardia', hr: 105, bp: '88/50', spo2: 89, rr: 8, etco2: 24 },
        type: 'decision',
        choices: [
          {
            text: 'Initiate Post-Cardiac Arrest Care: secure airway (intubate), support ventilation, target ETCO2 of 35-45 mmHg, maintain SpO2 92-98%, optimize BP (IV fluids/vasopressors), and obtain a 12-lead ECG.',
            nextStepId: 'acls_success',
            rationale: 'Magnificent! This is the exact comprehensive package for Post-Cardiac Arrest care. Secure ventilation, avoid hyper-oxygenation, obtain an ECG to look for STEMI, and treat hypotension (since BP is 88/50) with IV fluids and vasopressor infusions.',
            isCorrect: true
          },
          {
            text: 'Let the patient sleep and re-assess in 30 minutes',
            nextStepId: 'neglected_post_care_failure',
            rationale: 'Incorrect. Post-ROSC patients are highly unstable. Neglecting them will quickly lead to re-arrest.'
          }
        ]
      },
      neglected_post_care_failure: {
        id: 'neglected_post_care_failure',
        title: 'Post-ROSC Deterioration',
        description: 'Because you did not support ventilation or treat the borderline blood pressure, the patient hypoventilates, hypercapnic acidosis develops, and the blood pressure drops to 60/30. They quickly degenerate back into cardiac arrest!',
        type: 'decision',
        choices: [
          {
            text: 'Resume chest compressions and initiate ACLS resuscitative actions',
            nextStepId: 'check_responsiveness',
            rationale: 'Restarting scenario.'
          }
        ]
      },
      acls_success: {
        id: 'acls_success',
        title: 'Scenario Completed Successfully!',
        description: 'Congratulations! You successfully resuscitated and stabilized the patient according to the latest ACLS Guidelines. Post-arrest care was appropriately instituted, showing high clinical proficiency. Well done!',
        type: 'outcome_success'
      }
    }
  },
  {
    id: 'anaphylaxis_ed',
    title: 'Severe Anaphylaxis in the Emergency Department',
    shortDescription: 'Emergency management of severe allergic systemic reaction (Anaphylaxis) with airway involvement.',
    detailedDescription: 'This clinical simulation walks through the prompt assessment, aggressive epinephrine dosing, airway management, and supportive therapies for a life-threatening anaphylactic shock.',
    category: 'shock',
    startStepId: 'initial_allergist',
    steps: {
      initial_allergist: {
        id: 'initial_allergist',
        title: 'Patient Presentation',
        description: 'A 24-year-old female is rushed to the ED by her friends. She developed severe facial swelling, hives on her chest, and extreme shortness of breath 15 minutes after eating a cookie at a local cafe. She is gasping for air.',
        vitals: { hr: 125, bp: '92/58', spo2: 88, rr: 28 },
        type: 'decision',
        choices: [
          {
            text: 'Immediately administer Epinephrine 0.3mg IM in the anterolateral thigh',
            nextStepId: 'epinephrine_administered',
            rationale: 'Excellent! Intramuscular (IM) Epinephrine (1:1000) in the anterolateral thigh is the first-line, single most important intervention in anaphylaxis. Delaying epinephrine is associated with increased mortality.',
            isCorrect: true
          },
          {
            text: 'Administer IV Diphenhydramine (Benadryl) 50mg and Methylprednisolone 125mg',
            nextStepId: 'delayed_epi_antihistamine',
            rationale: 'Incorrect. Antihistamines and steroids are secondary therapies. They do NOT reverse airway obstruction or shock, and they have an onset of action of hours. Delaying Epinephrine to give secondary drugs is a critical error!'
          },
          {
            text: 'Order a nebulized Albuterol treatment and a chest X-ray',
            nextStepId: 'delayed_epi_asthma_mimic',
            rationale: 'Incorrect. While bronchospasm is present, anaphylaxis is a systemic emergency. Airway compromise and shock must be resolved with intramuscular epinephrine immediately.'
          }
        ]
      },
      delayed_epi_antihistamine: {
        id: 'delayed_epi_antihistamine',
        title: 'Allergic Progression',
        description: 'While you set up the IV antihistamine, the patient\'s lips swell further, she begins making a high-pitched whistling noise on inspiration (stridor), and her oxygen saturation drops to 82%. She is losing her airway.',
        vitals: { hr: 135, bp: '82/44', spo2: 82, rr: 32 },
        type: 'decision',
        choices: [
          {
            text: 'Immediately administer Epinephrine 0.3mg IM in the thigh',
            nextStepId: 'epinephrine_administered',
            rationale: 'Correct! You realize that Epinephrine is the true lifesaving medication. You administer it without further delay.',
            isCorrect: true
          }
        ]
      },
      delayed_epi_asthma_mimic: {
        id: 'delayed_epi_asthma_mimic',
        title: 'Severe Bronchospasm & Stridor',
        description: 'The nebulizer is set up, but the patient cannot draw in enough tidal volume to inhale the albuterol. Stridor becomes audible. The blood pressure continues to slide.',
        vitals: { hr: 138, bp: '80/40', spo2: 80, rr: 34 },
        type: 'decision',
        choices: [
          {
            text: 'Deliver Epinephrine 0.3mg IM in the thigh now',
            nextStepId: 'epinephrine_administered',
            rationale: 'Correct! Epinephrine is delivered immediately.',
            isCorrect: true
          }
        ]
      },
      epinephrine_administered: {
        id: 'epinephrine_administered',
        title: 'Post-Epinephrine Status',
        description: 'Five minutes after the IM Epinephrine injection, the patient\'s breathing is slightly less labored and stridor has decreased, but she remains extremely hypotensive (BP 84/48). The urticaria remains severe. What are your next priorities?',
        vitals: { hr: 118, bp: '84/48', spo2: 91, rr: 22 },
        type: 'decision',
        choices: [
          {
            text: 'Establish large-bore IV access, start an aggressive 1-2L warm Normal Saline fluid bolus, and administer high-flow oxygen.',
            nextStepId: 'fluid_and_oxygen_success',
            rationale: 'Perfect! Anaphylaxis causes severe vasodilation and vascular leakage, leading to massive relative hypovolemia. Aggressive fluid resuscitation is key to supporting blood pressure alongside epinephrine.',
            isCorrect: true
          },
          {
            text: 'Administer another dose of Epinephrine 0.3mg IM immediately',
            nextStepId: 'unnecessary_rapid_epi',
            rationale: 'Incorrect priority. While a second dose of Epinephrine is indicated if there is no improvement, it is usually dosed every 5-15 minutes. At this moment, addressing the severe distributive shock with large IV fluid boluses is the immediate next priority.'
          }
        ]
      },
      unnecessary_rapid_epi: {
        id: 'unnecessary_rapid_epi',
        title: 'Epinephrine Side Effects',
        description: 'You inject a second dose of epinephrine within 3 minutes of the first. The patient becomes extremely tachycardic (HR 155 bpm) and anxious, but her blood pressure remains low (82/46) because her vascular bed is empty. You must replenish volume.',
        type: 'decision',
        choices: [
          {
            text: 'Establish large-bore IVs and run a 1-2L isotonic crystalloid fluid bolus',
            nextStepId: 'fluid_and_oxygen_success',
            rationale: 'Correct. Expanding intravascular volume is absolutely vital.',
            isCorrect: true
          }
        ]
      },
      fluid_and_oxygen_success: {
        id: 'fluid_and_oxygen_success',
        title: 'Airway & Shock Re-assessment',
        description: 'You run 1 Liter of Normal Saline. Oxygen saturation is 94% on non-rebreather. Now, what secondary therapies should be given to resolve histamine release and prevent late-phase biphasic reactions?',
        vitals: { hr: 110, bp: '108/65', spo2: 95, rr: 18 },
        type: 'decision',
        choices: [
          {
            text: 'Administer IV Diphenhydramine (H1 antagonist) 50mg, IV Famotidine (H2 antagonist) 20mg, and IV Methylprednisolone 125mg.',
            nextStepId: 'secondary_meds_given',
            rationale: 'Excellent! This combined "Anaphylaxis cocktail" blocks both H1 and H2 histamine receptors for maximum symptom resolution, and steroids are crucial to blunt the late-phase (biphasic) reaction that can occur 1-72 hours later.',
            isCorrect: true
          },
          {
            text: 'Initiate an immediate IV Norepinephrine drip',
            nextStepId: 'premature_vasopressor',
            rationale: 'Incorrect. The patient\'s blood pressure has stabilized nicely with IM Epinephrine and IV fluids (BP 108/65). Initiating an aggressive vasopressor drip like Norepinephrine is premature and unnecessary.'
          }
        ]
      },
      premature_vasopressor: {
        id: 'premature_vasopressor',
        title: 'Hypertensive Spike',
        description: 'You start the norepinephrine drip. The patient\'s blood pressure spikes to 180/110. You recognize that the patient is over-vasoconstricted and turn off the drip. Let\'s proceed with the secondary allergic medications.',
        type: 'decision',
        choices: [
          {
            text: 'Administer IV H1/H2 blockers and corticosteroids',
            nextStepId: 'secondary_meds_given',
            rationale: 'Correct choice.',
            isCorrect: true
          }
        ]
      },
      secondary_meds_given: {
        id: 'secondary_meds_given',
        title: 'Disposition & Observation',
        description: 'The secondary medications are running. The patient\'s facial edema is receding, hives are fading, and she feels significantly better. Vitals are completely stable.',
        vitals: { hr: 88, bp: '118/72', spo2: 98, rr: 14 },
        type: 'decision',
        choices: [
          {
            text: 'Observe the patient in the ED for a minimum of 4 to 6 hours due to risk of biphasic reaction, then discharge with an EpiPen prescription and primary care follow-up.',
            nextStepId: 'anaphylaxis_success',
            rationale: 'Perfect disposition! Up to 20% of patients experience a "biphasic reaction"—a recurrence of anaphylaxis hours after initial resolution, without re-exposure. Monitoring for 4-6 hours is the standard recommendation. Prescribing an EpiPen is a critical medico-legal and life-safety requirement before discharge.',
            isCorrect: true
          },
          {
            text: 'Discharge the patient immediately to free up an ED bed',
            nextStepId: 'early_discharge_disaster',
            rationale: 'Incorrect. Discharging an anaphylaxis patient immediately is highly risky due to the well-documented risk of life-threatening biphasic reactions.'
          }
        ]
      },
      early_discharge_disaster: {
        id: 'early_discharge_disaster',
        title: 'Biphasic Shock Event',
        description: 'Two hours after discharging her early, she is brought back in by EMS in profound respiratory failure and shock. A biphasic reaction occurred at her home, and she did not have an EpiPen.',
        type: 'decision',
        choices: [
          {
            text: 'Re-initiate severe anaphylaxis resuscitation protocol from Step 1',
            nextStepId: 'initial_allergist',
            rationale: 'Proceeding to start of simulation with lessons learned.'
          }
        ]
      },
      anaphylaxis_success: {
        id: 'anaphylaxis_success',
        title: 'Scenario Completed Successfully!',
        description: 'Incredible work! You handled this high-acuity anaphylactic emergency with perfect sequencing: early IM Epinephrine, aggressive volume expansion, secondary dual antihistamines + corticosteroids, and a safe 6-hour ED monitoring period followed by EpiPen discharge. This is exceptional emergency care!',
        type: 'outcome_success'
      }
    }
  }
];
