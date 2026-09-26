// data_es.js - Base de datos completa de Cardiología en Español
// 12 módulos (3 fases: Teoría/Learn -> Active Recall -> Resumen/Breakdown) + 115+ Flashcards
// Actualizado según las últimas Guías ESC (2023–2026)

const CARDIOLOGY_DATA_ES = {
  modules: [
{
      id: "aks",
      number: 1,
      title: "Síndromes Coronarios Agudos (SCA)",
      shortDesc: "SCACEST, SCASEST y angina inestable. Guías ESC 2023, algoritmo hs-cTn 0h/1h, tiempos de coronariografía, estrategia DAPT y pre-tratamiento.",
      icon: "🫀",
      badge: "Guías ESC 2023",
      badgeColor: "rose",
            guidelineLinks: [
        { title: "2023 ESC Guidelines for the Management of Acute Coronary Syndromes", url: "https://academic.oup.com/eurheartj/article/44/38/3720/7243210", year: "2023" }
      ],
theory: {
        banner: {
          tag: "Cambio de paradigma (ESC 2023)",
          title: "El SCA como un espectro integrado de enfermedad",
          text: "Por primera vez, la ESC unifica las recomendaciones de SCACEST y SCASEST en un solo documento común. Se enfatiza que el síndrome coronario agudo es un continuum que abarca desde la angina inestable y el SCASEST hasta el SCACEST transmural, compartiendo una fisiopatología común (rotura o erosión de placa aterosclerótica con trombosis sobreañadida)."
        },
        sections: [
          {
            title: "Diagnóstico rápido: hs-cTn (Algoritmo 0 h / 1 h o 0 h / 2 h)",
            color: "rose",
            content: `
              <p class="mb-4 text-slate-300">La base del diagnóstico en el SCASEST es la determinación de <strong>troponina cardíaca de alta sensibilidad (hs-cTnI / hs-cTnT)</strong>. Las extracciones se realizan a las 0 h y 1 h (o 2 h).</p>
              <div class="grid md:grid-cols-3 gap-4 my-4">
                <div class="bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl">
                  <div class="text-emerald-400 font-bold mb-1">📉 RULE-OUT (Descarte)</div>
                  <p class="text-xs text-slate-300 leading-relaxed">Valor basal muy bajo de hs-cTn (0h) <strong>O</strong> valor basal bajo sin incremento significativo a la 1h (Δ1h por debajo del punto de corte). Bajo riesgo: considerar alta y estudio ambulatorio.</p>
                </div>
                <div class="bg-amber-950/40 border border-amber-500/30 p-4 rounded-xl">
                  <div class="text-amber-400 font-bold mb-1">👀 OBSERVE (Observación)</div>
                  <p class="text-xs text-slate-300 leading-relaxed">Pacientes que no cumplen criterios ni de descarte ni de confirmación. Requiere <strong>tercera toma a las 3 horas</strong> y ecocardiografía urgente.</p>
                </div>
                <div class="bg-rose-950/40 border border-rose-500/30 p-4 rounded-xl">
                  <div class="text-rose-400 font-bold mb-1">📈 RULE-IN (Confirmación)</div>
                  <p class="text-xs text-slate-300 leading-relaxed">hs-cTn muy elevada al ingreso <strong>O</strong> aumento absoluto significativo a la 1h/2h. Indicación de ingreso en Unidad Coronaria y coronariografía invasiva.</p>
                </div>
              </div>
            `
          },
          {
            title: "Tiempos de la estrategia invasiva (Coronariografía diagnóstica)",
            color: "amber",
            content: `
              <div class="space-y-3">
                <div class="p-4 rounded-xl bg-rose-950/30 border border-rose-500/30">
                  <div class="font-bold text-rose-400 text-sm mb-1">🚨 Estrategia invasiva inmediata (&lt; 2 horas - Emergencia)</div>
                  <p class="text-xs text-slate-300 mb-2"><strong>Todos los SCACEST</strong> (objetivo FMC-to-wire &lt; 90 min) y <strong>SCASEST de muy alto riesgo</strong>:</p>
                  <ul class="list-disc ml-5 text-xs text-slate-300 space-y-1">
                    <li>Shock cardiogénico o inestabilidad hemodinámica.</li>
                    <li>Dolor torácico refractario o recurrente en reposo pese a tratamiento médico.</li>
                    <li>Arritmias ventriculares malignas (TV/FV) o parada cardiorrespiratoria reanimada.</li>
                    <li>Insuficiencia cardíaca aguda secundaria a isquemia miocárdica en curso.</li>
                    <li>Cambios dinámicos del segmento ST-T (especialmente elevación intermitente del ST).</li>
                  </ul>
                </div>
                <div class="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30">
                  <div class="font-bold text-amber-400 text-sm mb-1">⏱️ Estrategia invasiva precoz (&lt; 24 horas)</div>
                  <p class="text-xs text-slate-300 mb-2"><strong>SCASEST de alto riesgo</strong> (recomendación Clase IIa - durante el ingreso):</p>
                  <ul class="list-disc ml-5 text-xs text-slate-300 space-y-1">
                    <li>SCASEST confirmado (según algoritmo de hs-cTn).</li>
                    <li>Puntuación de riesgo GRACE &gt; 140 puntos.</li>
                    <li>Cambios dinámicos del segmento ST o de las ondas T (sintomáticos o silentes).</li>
                  </ul>
                </div>
              </div>
            `
          },
          {
            title: "Tratamiento antiagregante y anticoagulante (DAPT y Pre-tratamiento)",
            color: "cyan",
            content: `
              <div class="grid md:grid-cols-2 gap-4">
                <div class="p-4 rounded-xl bg-slate-900 border border-slate-700">
                  <h4 class="font-bold text-cyan-400 mb-2 text-sm">❌ Prohibición de pre-tratamiento en SCASEST</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    La administración rutinaria de un inhibidor del receptor P2Y12 (prasugrel / ticagrelor / clopidogrel) antes de conocer la anatomía coronaria en SCASEST <strong>no se recomienda (Clase III)</strong> cuando se planea coronariografía precoz en &lt; 24h. Aumenta el riesgo de hemorragia y retrasa un bypass coronario urgente. El fármaco se administra en la sala de hemodinámica tras confirmar la ICP.
                  </p>
                </div>
                <div class="p-4 rounded-xl bg-slate-900 border border-slate-700">
                  <h4 class="font-bold text-cyan-400 mb-2 text-sm">💊 Elección del inhibidor P2Y12 y DAPT</h4>
                  <p class="text-xs text-slate-300 leading-relaxed">
                    En la ICP por SCA, se prefiere <strong>Prasugrel</strong> (carga de 60 mg, 10 mg/día) frente a Ticagrelor (basado en el ensayo ISAR-REACT 5). La DAPT estándar = <strong>12 meses</strong> (AAS + P2Y12 potente). En pacientes estables sin eventos, se puede considerar desescalar a monoterapia con P2Y12 tras 3–6 meses.
                  </p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "aks-r1",
            title: "Pregunta 1: Pre-tratamiento en SCASEST",
            question: "Varón de 68 años ingresa en urgencias por dolor retroesternal opresivo. EKG: descenso del ST en derivaciones V4-V6 de 1.5 mm sin elevación del ST. La hs-cTnI resulta positiva. Programa coronariografía para mañana por la mañana (dentro de 16 horas). ¿Debe administrar una dosis de carga de Prasugrel en planta?",
            answer: "NO DEBE. El pre-tratamiento rutinario con inhibidores P2Y12 en SCASEST antes de conocer la anatomía coronaria no se recomienda (ESC Clase III) si la estrategia invasiva está planificada en las primeras 24 horas. La carga se administra en la sala de hemodinámica tras visualizar las arterias coronarias y decidir la ICP.",
            pearl: "El pre-tratamiento aumenta el riesgo de hemorragia sin reducir eventos isquémicos y dificulta una cirugía de revascularización coronaria (CABG) urgente."
          },
          {
            id: "aks-r2",
            title: "Pregunta 2: Fibrilación Auricular + SCA (Estrategia antitrombótica)",
            question: "Paciente de 72 años tras ICP exitosa con implante de stent farmacoactivo (DES) por NSTEMI. Presenta fibrilación auricular crónica en tratamiento con Apixabán (CHA2DS2-VASc = 4). ¿Cuál es la pauta antitrombótica recomendada al alta?",
            answer: "Terapia triple (TAT: ACOD + Aspirina + Clopidogrel) únicamente durante el ingreso hospitalario / hasta 1 semana, seguida de Terapia Doble (DAT: ACOD a dosis completa + Clopidogrel 75 mg) durante 12 meses. A partir del mes 12, se continúa únicamente con monoterapia de ACOD.",
            pearl: "Nunca combine un ACOD con Prasugrel o Ticagrelor en el régimen triple (Clase III) por el riesgo prohibitivo de hemorragia mortal."
          },
          {
            id: "aks-r3",
            title: "Pregunta 3: Desescalada del tratamiento antiplaquetario",
            question: "Paciente a los 14 días de un SCACEST tratado con DAPT (Aspirina + Prasugrel) refiere pequeños hematomas en antebrazos. ¿Recomienda el cambio inmediato de Prasugrel a Clopidogrel?",
            answer: "NO LO RECOMIENDA. La desescalada del tratamiento antiplaquetario (de Prasugrel/Ticagrelor a Clopidogrel) durante los primeros 30 días tras un SCA está contraindicada (Clase III). El riesgo de trombosis aguda del stent y reinfarto es máximo en el primer mes.",
            pearl: "Ante hematomas cutáneos leves sin signos de sangrado mayor, se tranquiliza al paciente y se mantiene la medicación sin cambios durante los primeros 30 días."
          }
        ],
        quiz: {
          title: "Miniquiz de decisión: Shock cardiogénico y complicaciones mecánicas",
          prompt: "Paciente de 62 años con SCACEST de cara inferior presenta súbitamente al 4.º día hipotensión grave (PA 75/40 mmHg), taquipnea, nuevo soplo holosistólico rudo con máxima intensidad en ápex e irradiación a axila, y crepitantes húmedos bilaterales hasta campos medios. ¿Cuál es el diagnóstico más probable y la conducta inmediata?",
          options: [
            { text: "A) Rotura de músculo papilar con insuficiencia mitral aguda -> ecocardiograma urgente inmediato y revisión quirúrgica cardiotorácica de emergencia", isCorrect: true },
            { text: "B) Rotura de pared libre del ventrículo izquierdo -> pericardiocentesis inmediata en cama", isCorrect: false },
            { text: "C) Progresión de infarto de ventrículo derecho -> sobrecarga de volumen con 2 litros de cristaloides", isCorrect: false },
            { text: "D) Hipotensión farmacológica por IECA -> suspender medicación y monitorizar", isCorrect: false }
          ],
          explanation: "La aparición de un nuevo soplo holosistólico con edema agudo de pulmón y shock cardiogénico tras un infarto inferior (frecuentemente en territorio de la ACD que irriga el músculo papilar posteromedial mediante un flujo arterial único) indica rotura del músculo papilar e insuficiencia mitral aguda masiva. Requiere ecocardiografía urgente e intervención quirúrgica de emergencia."
        }
      },
      breakdown: {
        classThree: [
          "Administración rutinaria de oxígeno en pacientes con SCA si la saturación de SpO2 es ≥ 90 %.",
          "Pre-tratamiento sistemático con inhibidor P2Y12 en SCASEST antes de coronariografía cuando la estrategia invasiva es &lt; 24h.",
          "Desescalada del tratamiento antiplaquetario en los primeros 30 días posteriores al SCA.",
          "Uso de Prasugrel o Ticagrelor en terapia triple (TAT) combinados con anticoagulante oral (ACOD / AVK).",
          "Tromboaspiración manual rutinaria durante la ICP primaria en SCACEST."
        ],
        mustKnow: [
          "Criterios de SCACEST: Elevación del ST en el punto J en 2 derivaciones contiguas (varones &lt; 40 años: ≥ 2.5 mm en V2-V3; varones ≥ 40 años: ≥ 2.0 mm; mujeres: ≥ 1.5 mm; otras derivaciones ≥ 1.0 mm) o bloqueo de rama nuevo con clínica isquémica.",
          "Ventana temporal dorada: FMC-to-wire &lt; 90 min (en centro con hemodinámica &lt; 60 min). Si el traslado supera los 120 minutos, se indica fibrinólisis sistémica en los primeros 10 minutos.",
          "Prevención secundaria tras SCA: 'The Big 5' = DAPT (12 meses), Estatina de alta potencia (objetivo LDL &lt; 1.4 mmol/l y reducción ≥ 50 %), IECA/ARA-II (en FEVI &lt; 40 %, DM o HTA), Betabloqueante (en FEVI &lt; 40 %), ARM (espironolactona/eplerenona en FEVI &lt; 40 % e IC)."
        ]
      }
    },
{
      id: "midef",
      number: 2,
      title: "5.ª Definición Universal del Infarto de Miocardio (2026)",
      shortDesc: "Daño miocárdico vs. infarto de miocardio, tipos 1–5 de IM, MINOCA e interpretación clínica de la cinética de troponinas.",
      icon: "🔬",
      badge: "Definición 2026",
      badgeColor: "emerald",
            guidelineLinks: [
        { title: "Fifth Universal Definition of Myocardial Infarction Consensus Document", url: "https://academic.oup.com/eurheartj/article-lookup/doi/10.1093/eurheartj/ehae555", year: "2026" }
      ],
theory: {
        banner: {
          tag: "Diferenciación crucial",
          title: "Myocardial Injury (Daño) vs. Myocardial Infarction (Infarto)",
          text: "Un valor elevado de troponina cardíaca por encima del percentil 99 del límite superior de referencia define el **daño miocárdico (Myocardial Injury)**. Para clasificar el cuadro como **infarto de miocardio (IM)**, debe existir una dinámica de troponina (ascenso/descenso) Y ADEMÁS al menos una evidencia clínica de isquemia miocárdica aguda."
        },
        sections: [
          {
            title: "5 Tipos de Infarto de Miocardio",
            color: "emerald",
            content: `
              <div class="space-y-3">
                <div class="p-3 bg-slate-900 border-l-4 border-rose-500 rounded-r-xl">
                  <span class="font-bold text-rose-400 text-sm">Tipo 1 (Aterotrombótico)</span>
                  <p class="text-xs text-slate-300 mt-1">Desencadenado por rotura, fisura, erosión o disección de placa aterosclerótica con trombo intraluminal en la arteria coronaria.</p>
                </div>
                <div class="p-3 bg-slate-900 border-l-4 border-amber-500 rounded-r-xl">
                  <span class="font-bold text-amber-400 text-sm">Tipo 2 (Desbalance aporte/demanda de O2)</span>
                  <p class="text-xs text-slate-300 mt-1">Isquemia originada por desajuste entre el aporte y la demanda de oxígeno sin aterotrombosis aguda (ej. anemia grave, sepsis, taquiarritmia, hipotensión grave, vasoespasmo, SCAD).</p>
                </div>
                <div class="p-3 bg-slate-900 border-l-4 border-purple-500 rounded-r-xl">
                  <span class="font-bold text-purple-400 text-sm">Tipo 3 (Muerte súbita cardíaca)</span>
                  <p class="text-xs text-slate-300 mt-1">Muerte de origen cardíaco con síntomas isquémicos y cambios electrocardiográficos, cuando el paciente fallece antes de poder extraer biomarcadores.</p>
                </div>
                <div class="p-3 bg-slate-900 border-l-4 border-cyan-500 rounded-r-xl">
                  <span class="font-bold text-cyan-400 text-sm">Tipo 4 (Relacionado con ICP)</span>
                  <p class="text-xs text-slate-300 mt-1"><strong>4a:</strong> IM periprocedimiento en ICP (elevación de cTn &gt; 5× por encima del percentil 99 con basal normal). <strong>4b:</strong> Trombosis del stent demostrada angiográfica o anatomopatológicamente. <strong>4c:</strong> Reestenosis intrastent.</p>
                </div>
                <div class="p-3 bg-slate-900 border-l-4 border-blue-500 rounded-r-xl">
                  <span class="font-bold text-blue-400 text-sm">Tipo 5 (Relacionado con cirugía CABG)</span>
                  <p class="text-xs text-slate-300 mt-1">IM perioperatorio tras bypass coronario (elevación de cTn &gt; 10× por encima del percentil 99 con nueva onda Q patológica o nueva oclusión de injerto).</p>
                </div>
              </div>
            `
          },
          {
            title: "MINOCA (Infarto de miocardio sin arterias coronarias obstructivas)",
            color: "cyan",
            content: `
              <p class="text-xs text-slate-300 leading-relaxed mb-3">
                El diagnóstico de MINOCA es un diagnóstico de trabajo en pacientes con infarto de miocardio establecido (dinámica de troponina + evidencia isquémica) que presentan en la coronariografía <strong>arterias coronarias normales o estenosis &lt; 50 %</strong>.
              </p>
              <div class="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs text-slate-200">
                <strong>Prueba estándar de oro:</strong> La Resonancia Magnética Cardíaca (RMC / CMR) está <strong>recomendada en todos los pacientes con MINOCA (Clase I)</strong> para diferenciar un infarto verdadero (realce tardío de gadolinio subendocárdico), miocarditis (realce subepicárdico o mesocárdico) y síndrome de Takotsubo (acinesia apical típica sin realce tardío).
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "midef-r1",
            title: "Pregunta 1: Diferenciación del tipo de IM",
            question: "Mujer pluripatológica de 82 años ingresa por urosepsis con fiebre, hipotensión (PA 80/50 mmHg) y taquicardia sinusal a 140 lpm. EKG: descenso horizontal difuso del ST de 1 mm. La hs-cTnI de control asciende de 45 a 180 ng/l. La coronariografía muestra aterosclerosis difusa crónica sin trombo agudo. ¿De qué tipo de IM se trata?",
            answer: "Infarto de Miocardio Tipo 2. La isquemia se produce por un desajuste entre el aporte de oxígeno (hipotensión, taquicardia que acorta la diástole coronaria) y el incremento de demanda metabólica por la sepsis, sin rotura aguda de placa.",
            pearl: "El tratamiento del IM tipo 2 no consiste en ICP urgente, sino en corregir la causa desencadenante (tratar la sepsis, hidratar, estabilizar presión y frecuencia)."
          },
          {
            id: "midef-r2",
            title: "Pregunta 2: Conducta diagnóstica en MINOCA",
            question: "Mujer de 48 años sin factores de riesgo cardiovascular ingresa tras un episodio de estrés emocional grave con dolor torácico típico, elevación del ST en V2-V4 y troponina de 850 ng/l. La coronariografía urgente revela coronarias lisas sin lesiones obstructivas (&lt; 20 %). ¿Qué estudio está indicado obligatoriamente para filiar el diagnóstico?",
            answer: "Resonancia Magnética Cardíaca (CMR). Permite diferenciar con alta especificidad miocardiopatía de Takotsubo, miocarditis aguda o infarto microembólico.",
            pearl: "Hasta un 30-40 % de los casos inicialmente catalogados como MINOCA son en realidad miocarditis agudas."
          }
        ],
        quiz: {
          title: "Quiz: Myocardial Injury vs Infarto de Miocardio",
          prompt: "¿Cuál de los siguientes pacientes presenta ÚNICAMENTE daño miocárdico (Myocardial Injury) y NO cumple criterios de infarto de miocardio según la 5.ª definición universal?",
          options: [
            { text: "A) Paciente con insuficiencia renal crónica y elevación estable y crónica de hs-cTn en 60 ng/l sin síntomas, sin alteraciones en EKG y sin cinética de ascenso/descenso.", isCorrect: true },
            { text: "B) Paciente con opresión torácica, inversión de ondas T y ascenso de hs-cTn de 15 a 150 ng/l.", isCorrect: false },
            { text: "C) Paciente tras parada cardiorrespiratoria con nueva onda Q patológica en II, III, aVF y ascenso de troponina.", isCorrect: false },
            { text: "D) Paciente séptico con nueva alteración de la motilidad segmentaria de la cara inferior en ecocardiograma y ascenso de troponina.", isCorrect: false }
          ],
          explanation: "La elevación crónica y estable de troponina sin ascenso/descenso agudo y sin ningún dato de isquemia miocárdica (dolor, nuevo cambio en EKG, alteración ecográfica de la contractilidad) cumple únicamente la definición de daño miocárdico crónico (chronic myocardial injury)."
        }
      },
      breakdown: {
        classThree: [
          "No catalogar cualquier elevación aislada de troponina automáticamente como trombosis coronaria aguda (IM tipo 1) con indicación de cateterismo urgente.",
          "No pautar tratamiento invasivo rutinario (heparina, DAPT) en pacientes con daño miocárdico estable crónico en ausencia de isquemia."
        ],
        mustKnow: [
          "Criterios de IM: Aumento o descenso de hs-cTn por encima del percentil 99 + al menos 1 de: síntomas isquémicos, nuevos cambios electrocardiográficos isquémicos (ST-T o nueva onda Q), evidencia en imagen de nueva pérdida de miocardio viable / nueva alteración segmentaria de motilidad, o identificación de trombo intracoronario en angiografía.",
          "5 tipos: 1 = aterotrombosis de placa; 2 = desajuste aporte/demanda O2; 3 = muerte súbita; 4 = relacionado con ICP; 5 = relacionado con CABG."
        ]
      }
    },
{
      id: "hf",
      number: 3,
      title: "Insuficiencia Cardíaca (Guías ESC 2026)",
      shortDesc: "Nueva clasificación por estadios A–D, desaparición de la HFmrEF, los 4 pilares de la Terapia Médica Fundacional (FMT), IC aguda y shock cardiogénico.",
      icon: "🫁",
      badge: "Guías ESC 2026",
      badgeColor: "cyan",
            guidelineLinks: [
        { title: "2026 ESC Guidelines for the Diagnosis and Treatment of Acute and Chronic Heart Failure", url: "https://academic.oup.com/eurheartj/article/42/36/3599/6358045", year: "2026" }
      ],
theory: {
        banner: {
          tag: "Revolución en Guías 2026",
          title: "Clasificación simplificada y nueva nomenclatura terapéutica",
          text: "Las Guías ESC 2026 unifican la clasificación: se elimina la categoría intermedia HFmrEF y los pacientes se dividen de forma binaria en **IC-FEr (FEVI ≤ 40 %)** e **IC-FEp (FEVI > 40 %)**. Se adoptan los **estadios A–D** con gran énfasis en prevención y se sustituye el término GDMT por la división entre **FMT (Foundational Medical Therapy)** y **AMT (Additional Medical Therapy)**."
        },
        sections: [
          {
            title: "Estadios de la Insuficiencia Cardíaca (A -> D)",
            color: "cyan",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <div class="font-bold text-slate-200">Estadio A: En riesgo (At Risk)</div>
                  <p class="text-slate-400 mt-1">Pacientes con HTA, DM, obesidad o enfermedad cardiovascular, pero SIN alteración estructural cardíaca y SIN biomarcadores/síntomas.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <div class="font-bold text-cyan-400">Estadio B: Pre-insuficiencia cardíaca</div>
                  <p class="text-slate-400 mt-1">Asintomáticos, pero TIENEN cardiopatía estructural (hipertrofia de VI, alteración de contractilidad) O péptidos natriuréticos elevados (BNP/NT-proBNP).</p>
                </div>
                <div class="p-3 bg-slate-900 border border-amber-500/50 rounded-xl">
                  <div class="font-bold text-amber-400">Estadio C: Insuficiencia cardíaca sintomática</div>
                  <p class="text-slate-400 mt-1">Pacientes con síntomas actuales o previos de insuficiencia cardíaca (disnea, edemas, astenia) y cardiopatía estructural documentada.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-rose-500/50 rounded-xl">
                  <div class="font-bold text-rose-400">Estadio D: IC avanzada (Advanced HF)</div>
                  <p class="text-slate-400 mt-1">Síntomas graves refractarios en reposo pese a tratamiento médico óptimo. Indicación de asistencia ventricular mecánica (LVAD) o trasplante cardíaco.</p>
                </div>
              </div>
            `
          },
          {
            title: "Los 4 Pilares del Tratamiento Médico Fundacional en IC-FEr (FMT)",
            color: "emerald",
            content: `
              <p class="text-xs text-slate-300 mb-3">En todo paciente con IC-FEr (FEVI ≤ 40 %) debe instaurarse precozmente la **cuádruple terapia fundacional (FMT)**, que reduce la mortalidad en más de un 60 %:</p>
              <div class="grid sm:grid-cols-2 gap-3">
                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400 text-xs">1. ARNI (Sacubitrilo/Valsartán)</div>
                  <p class="text-[11px] text-slate-300 mt-0.5">O IECA/ARA-II si no se tolera. ARNI es la primera opción preferente.</p>
                </div>
                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400 text-xs">2. Betabloqueantes</div>
                  <p class="text-[11px] text-slate-300 mt-0.5">Únicamente los 4 con evidencia en mortalidad: Bisoprolol, Succinato de Metoprolol, Carvedilol, Nebivolol.</p>
                </div>
                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400 text-xs">3. ARM (Antagonistas del receptor mineralocorticoide)</div>
                  <p class="text-[11px] text-slate-300 mt-0.5">Espironolactona o Eplerenona. ¡Controlar potasio sérico y función renal!</p>
                </div>
                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400 text-xs">4. Inhibidores SGLT2 (Gliflozinas)</div>
                  <p class="text-[11px] text-slate-300 mt-0.5">Dapagliflozina o Empagliflozina. ¡Eficaces en IC-FEr e IC-FEp, con o sin diabetes!</p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "hf-r1",
            title: "Pregunta 1: Transición de IECA a ARNI",
            question: "Paciente con IC-FEr toma Ramipril 10 mg/día de forma estable. Decide cambiar el tratamiento a Sacubitrilo/Valsartán (ARNI). ¿Cuánto tiempo de ventana libre de fármaco (periodo de lavado/wash-out) debe respetarse entre la última toma de Ramipril y el primer comprimido de ARNI?",
            answer: "Al menos 36 horas. La administración conjunta o inmediata de IECA y ARNI provoca acumulación masiva de bradicinina y desencadena angioedema potencialmente mortal.",
            pearl: "En la transición desde antagonistas de los receptores de angiotensina (ARA-II) a ARNI no es necesario periodo de lavado; puede iniciarse al día siguiente."
          },
          {
            id: "hf-r2",
            title: "Pregunta 2: Tratamiento de la IC-FEp (Fracción de eyección preservada)",
            question: "Mujer de 74 años con HTA y obesidad presenta disnea de esfuerzo NYHA III, NT-proBNP 1400 pg/ml, ecocardiograma con FEVI 55 % y datos de disfunción diastólica (IC-FEp). ¿Qué grupo farmacológico ha demostrado de forma concluyente reducir la mortalidad cardiovascular y las hospitalizaciones en IC-FEp (Clase I)?",
            answer: "Los inhibidores de SGLT2 (Empagliflozina o Dapagliflozina). Basado en los ensayos EMPEROR-Preserved y DELIVER, las gliflozinas son el tratamiento de primera línea de elección para la IC-FEp.",
            pearl: "Los diuréticos de asa (furosemida) se añaden de forma sintomática para alcanzar y mantener la euvolemia."
          }
        ],
        quiz: {
          title: "Quiz: Manejo de la Insuficiencia Cardíaca Aguda",
          prompt: "En un paciente que ingresa por edema agudo de pulmón (perfil 'caliente y húmedo': PA 175/100 mmHg, taquipnea, crepitantes en 1/2 inferior de ambos campos pulmonares, SpO2 88 %), la prioridad farmacológica urgente es:",
          options: [
            { text: "A) Oxigenoterapia (si SpO2 < 90 %), bolo i.v. de Furosemida y vasodilatadores i.v. (nitratos) para reducir la precarga y postcarga", isCorrect: true },
            { text: "B) Infusión inmediata de Dobutamina y Noradrenalina", isCorrect: false },
            { text: "C) Administración rápida de 1000 ml de suero fisiológico", isCorrect: false },
            { text: "D) Inicio inmediato de dosis altas de betabloqueante intravenoso", isCorrect: false }
          ],
          explanation: "En el edema agudo de pulmón hipertensivo ('caliente y húmedo'), la clave es reducir las presiones de llenado y la postcarga combinando nitratos intravenosos (dinitrato de isosorbida / nitroglicerina) y diuréticos de asa i.v. (furosemida) junto con soporte de oxígeno o ventilación no invasiva (VNI)."
        }
      },
      breakdown: {
        classThree: [
          "Administración de ARNI dentro de las 36 horas posteriores a la última dosis de un IECA (riesgo grave de angioedema).",
          "Inicio o aumento de dosis de betabloqueantes durante una descompensación aguda grave de insuficiencia cardíaca.",
          "Uso de AINEs y glitazonas (aumentan la retención hidrosalina y descompensan la IC).",
          "Uso de antagonistas del calcio no dihidropiridínicos (verapamilo, diltiazem) en IC-FEr (efecto inotrópico negativo)."
        ],
        mustKnow: [
          "4 pilares FMT: ARNI/IECA + Betabloqueante + ARM + iSGLT2. Todo paciente con IC-FEr debe recibir los cuatro fármacos.",
          "Los diuréticos no han demostrado reducir la mortalidad a largo plazo, pero son indispensables para lograr la descongestión y euvolemia.",
          "El DAI (desfibrilador automático implantable) está indicado en prevención primaria en pacientes sintomáticos (NYHA II–III) con FEVI ≤ 35 % tras ≥ 3 meses de tratamiento médico óptimo."
        ]
      }
    },
{
      id: "htn",
      number: 4,
      title: "Hipertensión Arterial (Guías ESC 2024)",
      shortDesc: "Nueva categoría de PA elevada, objetivos de 120–129 mmHg, combinaciones fijas en un solo comprimido y despistaje de HTA secundaria.",
      icon: "🩺",
      badge: "Guías ESC 2024",
      badgeColor: "amber",
            guidelineLinks: [
        { title: "2024 ESC Guidelines for the Management of Elevated Blood Pressure and Hypertension", url: "https://academic.oup.com/eurheartj/article/45/39/3912/7741355", year: "2024" }
      ],
theory: {
        banner: {
          tag: "Nueva clasificación (ESC 2024)",
          title: "Objetivos más estrictos y categoría de 'Presión Arterial Elevada'",
          text: "La ESC 2024 establece 3 categorías de presión arterial: 1. **PA Normal (< 120/70 mmHg)**, 2. **PA Elevada (Elevated BP: 120–139 / 70–89 mmHg)** y 3. **Hipertensión (≥ 140/90 mmHg)**. El objetivo de presión arterial sistólica para la gran mayoría de adultos en tratamiento se unifica en **120–129 mmHg** (siempre que sea bien tolerado)."
        },
        sections: [
          {
            title: "Estrategia de inicio: Combinación en un solo comprimido (Single-Pill Combination)",
            color: "amber",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 leading-relaxed">
                <p class="mb-2"><strong>Regla esencial 2024:</strong> El inicio del tratamiento antihipertensivo con <strong>terapia combinada doble en un solo comprimido (SPC)</strong> se recomienda para la inmensa mayoría de pacientes (Clase I).</p>
                <div class="grid sm:grid-cols-3 gap-3 my-3">
                  <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-600">
                    <span class="font-bold text-amber-400">Paso 1: Terapia doble (SPC)</span>
                    <p class="text-[11px] mt-1 text-slate-300">IECA o ARA-II + Antagonista del calcio (DHP) O diurético tiazídico/tiazida-like.</p>
                  </div>
                  <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-600">
                    <span class="font-bold text-amber-400">Paso 2: Terapia triple (SPC)</span>
                    <p class="text-[11px] mt-1 text-slate-300">IECA/ARA-II + Antagonista del calcio + Diurético tiazídico en 1 comprimido.</p>
                  </div>
                  <div class="p-2.5 bg-slate-800 rounded-lg border border-slate-600">
                    <span class="font-bold text-amber-400">Paso 3: HTA resistente</span>
                    <p class="text-[11px] mt-1 text-slate-300">Terapia triple + Espironolactona (25–50 mg) o betabloqueante/fármaco central.</p>
                  </div>
                </div>
                <p class="text-slate-400">La monoterapia queda reservada únicamente a pacientes ancianos frágiles o hipertensión de bajo riesgo grado 1 (PA &lt; 150/95 mmHg).</p>
              </div>
            `
          },
          {
            title: "Hipertensión Arterial Secundaria (¿Cuándo sospecharla?)",
            color: "rose",
            content: `
              <ul class="list-disc ml-5 text-xs text-slate-300 space-y-1.5">
                <li><strong>Edad joven (&lt; 35 años)</strong> o aparición brusca de hipertensión grave/maligna.</li>
                <li><strong>Hipertensión resistente</strong> (cifras no controladas pese a triple terapia a dosis plenas incluyendo un diurético).</li>
                <li><strong>Hipopotasemia</strong> (espontánea o tras dosis bajas de diuréticos) -> sospecha de <em>hiperaldosteronismo primario (síndrome de Conn)</em> -> ratio aldosterona/renina (ARR).</li>
                <li><strong>Asimetría renal / soplo abdominal</strong> -> <em>hipertensión renovascular</em> (aterosclerosis en ancianos, displasia fibromuscular en mujeres jóvenes).</li>
                <li><strong>Crisis paroxísticas con la tríada clásica (cefalea, sudoración, palpitaciones)</strong> -> <em>feocromocitoma</em> (metanefrinas plasmáticas o urinarias).</li>
                <li><strong>Síndrome de apnea obstructiva del sueño (SAOS)</strong> – ¡la causa secundaria más frecuente!</li>
              </ul>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "htn-r1",
            title: "Pregunta 1: Diagnóstico de hiperaldosteronismo primario",
            question: "Varón de 42 años con hipertensión refractaria (PA 165/105 mmHg con triple terapia) presenta en analítica potasio sérico de 3.1 mmol/l. ¿Cuál es la prueba de cribado inicial ante la sospecha de síndrome de Conn y qué fármacos deben suspenderse previamente?",
            answer: "Determinación del cociente aldosterona plasmática / actividad o concentración de renina plasmática (ARR = Aldosterone-to-Renin Ratio). Al menos 4 semanas antes de la prueba se deben suspender los antagonistas del receptor mineralocorticoide (Espironolactona, Eplerenona).",
            pearl: "Si el ARR resulta positivo, se realiza prueba de confirmación (ej. sobrecarga salina i.v.) y TC de glándulas suprarrenales."
          },
          {
            id: "htn-r2",
            title: "Pregunta 2: Crisis hipertensiva – Emergencia vs Urgencia",
            question: "¿Cuál es la diferencia fundamental entre una emergencia hipertensiva y una urgencia hipertensiva y cómo varía su tratamiento?",
            answer: "La emergencia hipertensiva es una elevación grave de la PA (habitualmente > 180/120 mmHg) ACOMPAÑADA de daño agudo progresivo en órganos diana (edema agudo de pulmón, disección aórtica, eclampsia, encefalopatía). Precisa ingreso en UCI y tratamiento parenteral (i.v.) con descenso progresivo y controlado de la PA. La urgencia hipertensiva no presenta daño agudo de órgano diana y se maneja con medicación oral de forma ambulatoria.",
            pearl: "En la emergencia hipertensiva (excepto en la disección aórtica aguda), la PA no debe reducirse más de un 25 % en la primera hora para no provocar isquemia cerebral o renal."
          }
        ],
        quiz: {
          title: "Quiz: Selección de antihipertensivos",
          prompt: "¿Cuál de las siguientes combinaciones antihipertensivas está CONTRAINDICADA por elevado riesgo de hiperpotasemia, hipotensión grave y fracaso renal agudo?",
          options: [
            { text: "A) Coadministración de un IECA (ej. Perindopril) y un ARA-II (ej. Telmisartán)", isCorrect: true },
            { text: "B) IECA + Antagonista del calcio", isCorrect: false },
            { text: "C) ARA-II + Indapamida", isCorrect: false },
            { text: "D) Triple terapia IECA + Antagonista del calcio + Espironolactona", isCorrect: false }
          ],
          explanation: "El doble bloqueo del SRAA (combinación de IECA + ARA-II o inhibidor directo de la renina) está formalmente contraindicado (Clase III) por los estudios ONTARGET y ALTITUDE, al multiplicar los episodios de fallo renal e hiperpotasemia sin aportar ningún beneficio cardiovascular."
        }
      },
      breakdown: {
        classThree: [
          "Combinación simultánea de dos bloqueadores del SRAA (IECA + ARA-II / inhibidor directo de renina).",
          "Prescripción de betabloqueantes como fármaco de primera línea rutinario para la HTA esencial no complicada (salvo en cardiopatía isquémica, arritmias o insuficiencia cardíaca).",
          "Descenso excesivamente brusco de la PA en el ictus isquémico agudo (salvo indicación de trombólisis)."
        ],
        mustKnow: [
          "Objetivo de PA: 120–129 / 70–79 mmHg para la gran mayoría de pacientes.",
          "Estrategia principal: Combinación doble fija en 1 comprimido (Single-Pill Combination) desde el inicio.",
          "Emergencias hipertensivas: tratamiento intravenoso inmediato (Urapidilo, Labetalol, Nitroglicerina, Nitroprusiato)."
        ]
      }
    },
{
      id: "afib",
      number: 5,
      title: "Fibrilación y Flutter Auricular (Guías ESC 2024)",
      shortDesc: "Estrategia CARE, puntuación CHA2DS2-VA (eliminación del sexo femenino), indicación de ACOD, control de ritmo vs. frecuencia y ablación por catéter.",
      icon: "⚡",
      badge: "Guías ESC 2024",
      badgeColor: "purple",
            guidelineLinks: [
        { title: "2024 ESC Guidelines for the Management of Atrial Fibrillation", url: "https://academic.oup.com/eurheartj/article/45/39/3314/7741354", year: "2024" }
      ],
theory: {
        banner: {
          tag: "Novedad ESC 2024",
          title: "Estrategia CARE y eliminación de 'Sc' en la escala CHA2DS2-VA",
          text: "Las guías ESC 2024 introducen el enfoque integral **CARE** (Comorbidity management, Avoid stroke, Reduce symptoms, Evaluate). La novedad principal es la transición a la escala **CHA2DS2-VA**: el sexo femenino (Sc) deja de computar un punto independiente, ya que ser mujer en ausencia de otros factores de riesgo cardiovascular no incrementa per se el riesgo de ictus."
        },
        sections: [
          {
            title: "Indicación de anticoagulación oral (CHA2DS2-VA)",
            color: "purple",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs space-y-3">
                <p class="text-slate-300"><strong>Criterios de inicio de ACOD (Apixabán, Edoxabán, Rivaroxabán, Dabigatrán):</strong></p>
                <div class="grid sm:grid-cols-3 gap-3">
                  <div class="p-3 bg-rose-950/40 border border-rose-500/30 rounded-lg">
                    <span class="font-bold text-rose-400 text-sm">Puntuación ≥ 2 puntos</span>
                    <p class="text-slate-300 mt-1">Anticoagulación <strong>CLARAMENTE INDICADA (Clase I)</strong>.</p>
                  </div>
                  <div class="p-3 bg-amber-950/40 border border-amber-500/30 rounded-lg">
                    <span class="font-bold text-amber-400 text-sm">Puntuación = 1 punto</span>
                    <p class="text-slate-300 mt-1">Anticoagulación <strong>DEBE CONSIDERARSE (Clase IIa)</strong>.</p>
                  </div>
                  <div class="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-lg">
                    <span class="font-bold text-emerald-400 text-sm">Puntuación = 0 puntos</span>
                    <p class="text-slate-300 mt-1">Anticoagulación <strong>NO INDICADA (Clase III)</strong>.</p>
                  </div>
                </div>
                <p class="text-slate-400">Los ACOD son de elección preferente frente a los antagonistas de la vitamina K (Warfarina/Acenocumarol) en toda FA no valvular.</p>
              </div>
            `
          },
          {
            title: "Control de Ritmo vs. Control de Frecuencia y Ablación por Catéter",
            color: "cyan",
            content: `
              <div class="grid md:grid-cols-2 gap-4 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <h4 class="font-bold text-cyan-400 mb-1">Control de frecuencia (Rate Control)</h4>
                  <p class="text-slate-300 leading-relaxed">
                    Objetivo de FC en reposo &lt; 100–110 lpm. Fármacos de 1.ª elección: <strong>Betabloqueantes</strong> o calcioantagonistas no dihidropiridínicos (Verapamilo/Diltiazem, ¡solo si FEVI &gt; 40 %!). En insuficiencia cardíaca: Digoxina.
                  </p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <h4 class="font-bold text-cyan-400 mb-1">Ablación por catéter (Aislamiento de venas pulmonares - PVI)</h4>
                  <p class="text-slate-300 leading-relaxed">
                    El aislamiento de venas pulmonares está recomendado en 2024 como <strong>tratamiento de primera línea (Clase I)</strong> en FA paroxística sintomática incluso antes del fracaso de antiarrítmicos, y especialmente en pacientes con FA e insuficiencia cardíaca (IC-FEr).
                  </p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "af-r1",
            title: "Pregunta 1: ¿Cuándo sigue siendo insustituible el Sintrom / Warfarina?",
            question: "¿En qué dos grupos específicos de pacientes con fibrilación auricular están formalmente contraindicados los ACOD y el fármaco de elección sigue siendo el antagonista de la vitamina K (AVK) con control estricto de INR?",
            answer: "1. Pacientes portadores de prótesis valvulares cardíacas mecánicas. 2. Pacientes con estenosis mitral moderada o grave (típicamente de origen reumático).",
            pearl: "En prótesis biológicas o tras plastia valvular, los ACOD son seguros una vez transcurrido el periodo postoperatorio inicial."
          },
          {
            id: "af-r2",
            title: "Pregunta 2: Cardioversión eléctrica y ecocardiograma transesofágico",
            question: "Paciente acude por palpitaciones de 4 días de evolución. El EKG confirma fibrilación auricular con respuesta ventricular rápida. No tomaba anticoagulantes previamente. Desea realizar cardioversión eléctrica programada. ¿Cuál es el protocolo?",
            answer: "Si la arritmia dura > 48 horas y el paciente no ha estado correctamente anticoagulado durante al menos 3 semanas, es obligatorio realizar ANTES de la cardioversión un ecocardiograma transesofágico (ETE) para descartar trombo en la orejuela izquierda. Posteriormente, la anticoagulación debe mantenerse al menos 4 semanas tras el procedimiento.",
            pearl: "En caso de inestabilidad hemodinámica (shock, edema pulmonar), se realiza cardioversión eléctrica urgente con bolo de heparina sin demorarla por el ETE."
          }
        ],
        quiz: {
          title: "Quiz: Antiarrítmicos en fibrilación auricular",
          prompt: "¿Cuál de los siguientes antiarrítmicos es SEGURO para el mantenimiento del ritmo sinusal en un paciente con fibrilación auricular y disfunción ventricular izquierda grave (FEVI 28 %)?",
          options: [
            { text: "A) Amiodarona", isCorrect: true },
            { text: "B) Propafenona (Clase Ic)", isCorrect: false },
            { text: "C) Flecainida (Clase Ic)", isCorrect: false },
            { text: "D) Dronedarona", isCorrect: false }
          ],
          explanation: "Los antiarrítmicos de clase Ic (Propafenona, Flecainida) y la Dronedarona están contraindicados en pacientes con cardiopatía estructural o FEVI reducida por su elevado riesgo proarrítmico y mortalidad (estudio CAST). En la IC-FEr, el único antiarrítmico seguro es la Amiodarona."
        }
      },
      breakdown: {
        classThree: [
          "Uso de ACOD en pacientes con prótesis mecánicas o estenosis mitral significativa.",
          "Uso de antiarrítmicos de clase Ic (Propafenona, Flecainida) en pacientes con infarto previo o IC-FEr.",
          "Uso de Verapamilo o Diltiazem en pacientes con IC-FEr (FEVI ≤ 40 %).",
          "Monoterapia con antiagregantes plaquetarios (Aspirina) para prevención de ictus en fibrilación auricular (ineficaz y hemorrágica)."
        ],
        mustKnow: [
          "Escala CHA2DS2-VA: C (insuficiencia 1p), H (hipertensión 1p), A2 (edad ≥ 75 2p), D (diabetes 1p), S2 (ictus/AIT 2p), V (enfermedad vascular 1p), A (edad 65–74 1p).",
          "Estrategia Pill-in-the-pocket: Dosis única oral de Propafenona (450–600 mg) en pacientes seleccionados sin cardiopatía estructural.",
          "La ablación por catéter (PVI) tiene recomendación Clase I en FA sintomática y en FA con insuficiencia cardíaca."
        ]
      }
    },
{
      id: "arytmie",
      number: 6,
      title: "Otras arritmias y trastornos de la conducción",
      shortDesc: "Taquicardias supraventriculares (AVNRT, AVRT/WPW), taquicardias ventriculares, bloqueos AV de I-III grado y bloqueos de rama.",
      icon: "⚡",
      badge: "Cardiología y EKG",
      badgeColor: "blue",
            guidelineLinks: [
        { title: "2022 ESC Guidelines for the Management of Ventricular Arrhythmias and Prevention of SCD", url: "https://academic.oup.com/eurheartj/article/43/40/3997/6675633", year: "2022" },
        { title: "2019 ESC Guidelines for the Management of Supraventricular Tachycardia", url: "https://academic.oup.com/eurheartj/article/41/7/655/5556821", year: "2019" }
      ],
theory: {
        banner: {
          tag: "Diagnóstico diferencial",
          title: "Taquicardia de QRS estrecho vs. QRS ancho",
          text: "QRS estrecho (&lt; 120 ms) = origen supraventricular (AVNRT, AVRT, fibrilación/flutter auricular, taquicardia sinusal). QRS ancho (≥ 120 ms) = **en el 80 % de los casos es taquicardia ventricular (TV)** hasta que se demuestre lo contrario. ¡Nunca administre verapamilo en una taquicardia de QRS ancho de origen indeterminado!"
        },
        sections: [
          {
            title: "Taquicardias supraventriculares (TSV)",
            color: "blue",
            content: `
              <div class="space-y-3 text-xs text-slate-300">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-blue-400">AVNRT (Taquicardia por reentrada intranodal)</span>
                  <p class="mt-1">La TSV regular más frecuente. Inicio y fin bruscos (palpitaciones en cuello - 'signo de la rana'). EKG: QRS estrecho, onda P oculta en el QRS o inmediatamente posterior (pseudo r' en V1).</p>
                  <p class="mt-1 text-slate-400"><strong>Tratamiento:</strong> Maniobras vagales (Valsalva modificada), si fracasa <strong>Adenosina i.v.</strong> en bolo rápido (6 mg -> 12 mg). Curativo: ablación por radiofrecuencia de la vía lenta nodal.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-blue-400">Síndrome de WPW (Wolff-Parkinson-White / AVRT)</span>
                  <p class="mt-1">Vía accesoria auriculoventricular (haz de Kent). EKG basal: PR corto (&lt; 120 ms), <strong>onda delta</strong>, QRS ensanchado.</p>
                  <p class="mt-1 text-rose-300"><strong>Peligro: Fibrilación auricular en WPW (taquicardia FBI - Fast, Broad, Irregular):</strong> La conducción anterógrada por la vía accesoria puede superar los 300 lpm y degenerar en fibrilación ventricular. ¡Los frenadores del nodo AV (verapamilo, digoxina, adenosina) están PROHIBIDOS! Tratamiento: cardioversión eléctrica o Ibutilida / Procainamida i.v.</p>
                </div>
              </div>
            `
          },
          {
            title: "Trastornos de la conducción (Bloqueos AV y Bloqueos de Rama)",
            color: "amber",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-amber-400">Bloqueos AV</span>
                  <ul class="list-disc ml-4 mt-1 text-slate-300 space-y-1">
                    <li><strong>1.er grado:</strong> PR &gt; 200 ms constante, todas las P conducen.</li>
                    <li><strong>2.º grado Mobitz I (Wenckebach):</strong> alargamiento progresivo del PR hasta que una P no conduce. Generalmente benigno e intranodal.</li>
                    <li><strong>2.º grado Mobitz II:</strong> PR constante con fallo súbito de conducción de ondas P. Infranodal y alto riesgo -> indicación de marcapasos.</li>
                    <li><strong>3.er grado (Completo):</strong> disociación auriculoventricular completa. ¡Indicación formal de marcapasos definitivo!</li>
                  </ul>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-amber-400">Bloqueos de rama (BRI vs BRD)</span>
                  <ul class="list-disc ml-4 mt-1 text-slate-300 space-y-1">
                    <li><strong>BRI (Bloqueo de rama izquierda):</strong> QRS ≥ 120 ms, onda S ancha y profunda en V1–V2, onda R ancha y mellada en M en V5–V6, I y aVL. ¡Enmascara el infarto! BRI nuevo con dolor torácico = equivalente a SCACEST.</li>
                    <li><strong>BRD (Bloqueo de rama derecha):</strong> QRS ≥ 120 ms, patrón rsR' ('orejas de conejo') en V1–V2, onda S empastada en V5–V6. Frecuente en cor pulmonale o embolia pulmonar.</li>
                  </ul>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "ary-r1",
            title: "Pregunta 1: Parada cardíaca y ritmos",
            question: "¿Cuáles son los 2 ritmos desfibrilables y cuáles los 2 ritmos no desfibrilables en la parada cardiorrespiratoria?",
            answer: "Desfibrilables: 1. Fibrilación ventricular (FV), 2. Taquicardia ventricular sin pulso (TVSP). No desfibrilables: 1. Asistolia, 2. Actividad eléctrica sin pulso (AESP).",
            pearl: "En los ritmos desfibrilables, la Adrenalina (1 mg i.v.) se administra tras el 3.er choque (y luego en ciclos alternos) junto con Amiodarona (300 mg i.v.)."
          },
          {
            id: "ary-r2",
            title: "Pregunta 2: Manejo de la bradicardia aguda",
            question: "Paciente con infarto agudo de cara inferior presenta bradicardia a 32 lpm, hipotensión de 70/40 mmHg y palidez. El EKG muestra bloqueo AV de tercer grado. ¿Cuál es el fármaco de primera línea de elección?",
            answer: "Atropina 0.5 mg – 1.0 mg en bolo i.v. (repetible hasta dosis máxima de 3 mg). Si no responde, iniciar inmediatamente marcapasos transcutáneo temporal o infusión de isoprenalina/adrenalina mientras se traslada a implante de marcapasos transvenoso temporal.",
            pearl: "En bloqueos infranodales (Mobitz II o bloqueo trifascicular), la atropina no suele ser eficaz y se requiere marcapasos."
          }
        ],
        quiz: {
          title: "Quiz: Torsades de Pointes",
          prompt: "Mujer en tratamiento con sotalol y ciprofloxacino presenta en el EKG un intervalo QTc corregido de 560 ms y desarrolla salvas de taquicardia ventricular polimórfica helicoidal (Torsades de Pointes). ¿Cuál es el tratamiento farmacológico de primera elección?",
          options: [
            { text: "A) Sulfato de Magnesio 2g i.v. en inyección lenta", isCorrect: true },
            { text: "B) Amiodarona 300 mg i.v.", isCorrect: false },
            { text: "C) Verapamilo 5 mg i.v.", isCorrect: false },
            { text: "D) Digoxina 0.5 mg i.v.", isCorrect: false }
          ],
          explanation: "El sulfato de magnesio intravenoso es el fármaco de primera elección en las Torsades de Pointes asociadas a QT largo. La amiodarona está formalmente contraindicada porque prolonga aún más el intervalo QT y puede inducir fibrilación ventricular refractaria."
        }
      },
      breakdown: {
        classThree: [
          "Administración de Verapamilo o Diltiazem en taquicardias de QRS ancho de origen no filiado (riesgo de colapso o asistolia si se trata de TV).",
          "Uso de fármacos bloqueadores del nodo AV (Adenosina, Verapamilo, Digoxina, Betabloqueantes) en fibrilación auricular preexcitada (WPW).",
          "Uso de fármacos que prolongan el intervalo QT (Amiodarona, Sotalol, Macrólidos, Quinolonas) en pacientes con síndrome de QT largo congénito o Torsades de Pointes."
        ],
        mustKnow: [
          "Adenosina en AVNRT: Bolo i.v. ultra-rápido seguido de lavado con 20 ml de suero fisiológico y elevación del brazo (vida media ultracorta &lt; 10 segundos).",
          "Indicaciones de marcapasos permanente: Bradicardia sinusal sintomática, Bloqueo AV de 2.º grado Mobitz II, Bloqueo AV de 3.er grado, bloqueo bifascicular alternante.",
          "BRI de nueva aparición + clínica isquémica = indicación de cateterismo emergente equivalente a SCACEST."
        ]
      }
    },
{
      id: "chlopne",
      number: 7,
      title: "Valvulopatías cardíacas",
      shortDesc: "Estenosis e insuficiencia aórtica, estenosis e insuficiencia mitral, valvulopatías tricuspídeas, TAVI vs. recambio quirúrgico.",
      icon: "🚪",
      badge: "Valvulopatías",
      badgeColor: "rose",
            guidelineLinks: [
        { title: "2021 ESC/EACTS Guidelines for the Management of Valvular Heart Disease", url: "https://academic.oup.com/eurheartj/article/42/41/4293/6358463", year: "2021" }
      ],
theory: {
        banner: {
          tag: "Cardiología valvular",
          title: "La estenosis aórtica como valvulopatía más prevalente del adulto",
          text: "La estenosis aórtica (EA) es la valvulopatía más frecuente en países desarrollados (degenerativa calcificada senil o sobre válvula bicúspide congénita). Tríada clásica de síntomas: **Disnea, Angina de pecho, Síncope**. Tras el debut de los síntomas, la mortalidad sin cirugía se dispara (mediana de supervivencia 2–3 años)."
        },
        sections: [
          {
            title: "Estenosis Aórtica (EA) y TAVI vs SAVR",
            color: "rose",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs space-y-3">
                <div class="font-bold text-rose-400">Criterios de Estenosis Aórtica Grave:</div>
                <div class="grid sm:grid-cols-3 gap-2 text-slate-300">
                  <div class="p-2 bg-slate-800 rounded">Área valvular aórtica (AVA): <strong>&lt; 1.0 cm²</strong> (o &lt; 0.6 cm²/m²)</div>
                  <div class="p-2 bg-slate-800 rounded">Gradiente medio (meanPG): <strong>≥ 40 mmHg</strong></div>
                  <div class="p-2 bg-slate-800 rounded">Velocidad máxima (Vmax): <strong>≥ 4.0 m/s</strong></div>
                </div>
                <div class="mt-2 text-slate-300">
                  <strong>Elección de la intervención:</strong>
                  <ul class="list-disc ml-5 mt-1 space-y-1">
                    <li><strong>TAVI (Implante transcatéter):</strong> Preferido en pacientes de <strong>≥ 75 años</strong> o con riesgo quirúrgico elevado (STS/EuroSCORE).</li>
                    <li><strong>SAVR (Recambio quirúrgico):</strong> Preferido en pacientes jóvenes <strong>&lt; 75 años</strong> con bajo riesgo o con indicación simultánea de CABG o cirugía de aorta ascendente.</li>
                  </ul>
                </div>
              </div>
            `
          },
          {
            title: "Resumen de hallazgos auscultatorios en valvulopatías",
            color: "cyan",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-cyan-400">Estenosis Aórtica (EA)</span>
                  <p class="text-slate-300 mt-1">Soplo sistólico eyectivo rudo en 2.º espacio intercostal derecho con irradiación a carótidas. 2.º tono disminuido, pulso parvus et tardus.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-cyan-400">Insuficiencia Aórtica (IA)</span>
                  <p class="text-slate-300 mt-1">Soplo diastólico precoz en decrescendo en foco aórtico y punto de Erb. Presión de pulso amplia (pulso celer et magnus / signo de Corrigan).</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-emerald-400">Insuficiencia Mitral (IM)</span>
                  <p class="text-slate-300 mt-1">Soplo holosistólico en ápex con irradiación a la axila izquierda. 1.er tono disminuido, frecuente 3.er tono.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-emerald-400">Estenosis Mitral (EM)</span>
                  <p class="text-slate-300 mt-1">1.er tono brillante, chasquido de apertura mitral y arrastre diastólico (retumbo) con refuerzo presistólico.</p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "chl-r1",
            title: "Pregunta 1: Prótesis Mecánica vs. Biológica",
            question: "Varón de 34 años es intervenido para recambio valvular aórtico mediante prótesis mecánica. ¿Cuál es el tratamiento antitrombótico de por vida y cuál el objetivo de INR?",
            answer: "Anticoagulación oral de por vida con Warfarina/Acenocumarol con objetivo de INR 2.0–3.0 (posición aórtica sin factores de riesgo adicionales) o 2.5–3.5 (posición mitral o con factores de riesgo). ¡Los ACOD están estrictamente contraindicados!",
            pearl: "Una prótesis biológica no requiere anticoagulación indefinida (solo 3-6 meses tras el implante), pero tiene durabilidad limitada (10-15 años)."
          },
          {
            id: "chl-r2",
            title: "Pregunta 2: Estenosis aórtica grave asintomática",
            question: "Varón de 68 años presenta en ecocardiograma estenosis aórtica grave (AVA 0.7 cm², gradiente medio 48 mmHg), pero asegura estar completamente asintomático. ¿Qué prueba objetiva su situación funcional e indicación quirúrgica?",
            answer: "Ergometría / prueba de esfuerzo en tapiz o bicicleta. Si durante el esfuerzo aparecen síntomas (disnea, angina, mareo) o una caída de la presión arterial por debajo del valor basal, el paciente se reclasifica como sintomático y se indica la intervención valvular (Clase I).",
            pearl: "La ergometría está terminantemente contraindicada si la estenosis aórtica grave ya es sintomática."
          }
        ],
        quiz: {
          title: "Quiz: Insuficiencia aórtica aguda",
          prompt: "En un paciente con insuficiencia aórtica aguda grave (ej. por disección de aorta tipo A o endocarditis infecciosa), está formalmente CONTRAINDICADO el uso de:",
          options: [
            { text: "A) Balón de contrapulsación intraaórtico (BCIA / IABP)", isCorrect: true },
            { text: "B) Vasodilatadores intravenosos (Nitroprusiato)", isCorrect: false },
            { text: "C) Cirugía urgente de recambio valvular", isCorrect: false },
            { text: "D) Diuréticos de asa para la congestión pulmonar", isCorrect: false }
          ],
          explanation: "El balón de contrapulsación intraaórtico (BCIA) se infla durante la diástole. En presencia de insuficiencia aórtica, el inflado diastólico del balón incrementa masivamente el flujo retrógrado regurgitante hacia el ventrículo izquierdo, provocando una sobrecarga diastólica fatal y edema pulmonar masivo."
        }
      },
      breakdown: {
        classThree: [
          "Uso de ACOD en pacientes con prótesis valvulares mecánicas (aumentó la tasa de trombosis y sangrado frente a warfarina en el ensayo RE-ALIGN).",
          "Realización de ergometría en pacientes con estenosis aórtica grave sintomática conocida.",
          "Uso de balón de contrapulsación intraaórtico (BCIA) en insuficiencia aórtica grave."
        ],
        mustKnow: [
          "Criterios de EA grave: AVA &lt; 1.0 cm², gradiente medio ≥ 40 mmHg, Vmax ≥ 4.0 m/s.",
          "TAVI es el estándar en pacientes ≥ 75 años o alto riesgo; SAVR en jóvenes &lt; 75 años de bajo riesgo.",
          "En prótesis mecánicas, el único anticoagulante aprobado es el antagonista de la vitamina K (AVK) con monitorización periódica de INR."
        ]
      }
    },
{
      id: "kmp",
      number: 8,
      title: "Miocardiopatías (MCP)",
      shortDesc: "Dilatada (MCD), Hipertrófica obstructiva/no obstructiva (MCH/MCHO), Restrictiva (MCR), Displasia Arritmogénica y Miocardiopatía de Takotsubo.",
      icon: "💔",
      badge: "Enfermedades Miocárdicas",
      badgeColor: "purple",
            guidelineLinks: [
        { title: "2023 ESC Guidelines for the Management of Cardiomyopathies", url: "https://academic.oup.com/eurheartj/article/44/37/3503/7243211", year: "2023" }
      ],
theory: {
        banner: {
          tag: "Clasificación de miocardiopatías",
          title: "Enfermedades estructurales y funcionales del músculo cardíaco",
          text: "Las miocardiopatías son enfermedades primarias del miocardio no atribuibles a cardiopatía isquémica, hipertensión o valvulopatías. Se clasifican en: **Hipertrófica (MCH/MCHO)**, **Dilatada (MCD)**, **Restrictiva (MCR)**, **Miocardiopatía Arritmogénica del Ventrículo Derecho (MCA/DAVD)** y síndromes específicos como **Takotsubo (miocardiopatía por estrés)**."
        },
        sections: [
          {
            title: "Miocardiopatía Hipertrófica (MCH / MCHO)",
            color: "purple",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs space-y-2 text-slate-300">
                <p>La cardiopatía genética más frecuente (mutaciones autosómicas dominantes en proteínas sarcoméricas como MYH7 y MYBPC3). Se caracteriza por <strong>hipertrofia asimétrica del septo interventricular (grosor de pared ≥ 15 mm)</strong> en ausencia de otra causa explicativa.</p>
                <div class="p-3 bg-purple-950/40 border border-purple-500/30 rounded-lg">
                  <span class="font-bold text-purple-400">Fenómeno SAM (Systolic Anterior Motion):</span>
                  <p class="mt-1">El velo anterior mitral es succionado en sístole por efecto Venturi hacia el tracto de salida del VI (TSVI) -> obstrucción dinámica al flujo (MCHO) e insuficiencia mitral secundaria.</p>
                </div>
                <p><strong>Tratamiento de la MCHO:</strong> Betabloqueantes no vasodilatadores, Verapamilo, o el nuevo inhibidor selectivo de la miosina cardíaca <strong>Mavacamten</strong>. Miectomía quirúrgica o ablación septal con alcohol en casos refractarios.</p>
              </div>
            `
          },
          {
            title: "Miocardiopatía de Takotsubo (Síndrome del corazón roto)",
            color: "rose",
            content: `
              <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-1.5">
                <p>Disfunción miocárdica transitoria desencadenada por estrés emocional o físico intenso con liberación masiva de catecolaminas. Predomina en mujeres posmenopáusicas.</p>
                <p><strong>Clínica:</strong> Simula un SCACEST agudo (dolor torácico, elevación del ST, troponina positiva). En la coronariografía las arterias están <strong>sin lesiones obstructivas</strong>. Ecocardiograma característico: <strong>abombamiento apical (apical ballooning)</strong> con acinesia del ápex e hipercontractilidad de la base.</p>
                <p class="text-emerald-400 font-medium">El pronóstico suele ser favorable y la función del VI se recupera por completo en semanas o meses.</p>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "kmp-r1",
            title: "Pregunta 1: Fármacos contraindicados en MCHO",
            question: "¿Qué fármacos cardiológicos habituales están formalmente contraindicados en pacientes con miocardiopatía hipertrófica obstructiva (MCHO) porque empeoran el gradiente dinámico del TSVI?",
            answer: "1. Fármacos inotrópicos positivos (Digoxina, catecolaminas). 2. Nitratos y vasodilatadores (reducen el llenado ventricular y la precarga, aumentando la succión del velo mitral). 3. Calcioantagonistas dihidropiridínicos y diuréticos a dosis altas.",
            pearl: "En la MCHO se busca un ventrículo 'lleno y pausado', por lo que los betabloqueantes y el verapamilo son los fármacos de elección."
          },
          {
            id: "kmp-r2",
            title: "Pregunta 2: Miocardiopatía arritmogénica (DAVD/MCA)",
            question: "Atleta joven sufre síncope durante un partido. El EKG muestra ondas T negativas en V1–V3 y en V1 se observa una pequeña deflexión al final del QRS (onda épsilon). ¿Qué patología sospecha y cuál es su sustrato fisiopatológico?",
            answer: "Miocardiopatía Arritmogénica del Ventrículo Derecho (DAVD/MCA). Sustitución progresiva fibro-adiposa del miocardio del ventrículo derecho con elevado riesgo de arritmias ventriculares malignas y muerte súbita en deportistas jóvenes.",
            pearl: "La onda Épsilon en derivaciones precordiales derechas (V1-V2) es el signo electrocardiográfico patognomónico de la DAVD."
          }
        ],
        quiz: {
          title: "Quiz: Miocardiopatía restrictiva y Amiloidosis",
          prompt: "En un paciente de 72 años con insuficiencia cardíaca, bajo voltaje de QRS en el EKG y miocardio engrosado y refringente en el ecocardiograma (patrón 'sparkling' granular), la causa más frecuente es:",
          options: [
            { text: "A) Amiloidosis cardíaca (amiloidosis AL o por transtiretina ATTR)", isCorrect: true },
            { text: "B) Cardiopatía isquémica", isCorrect: false },
            { text: "C) Sarcoidosis", isCorrect: false },
            { text: "D) Miocardiopatía dilatada", isCorrect: false }
          ],
          explanation: "La discrepancia entre el bajo voltaje de los complejos QRS en el EKG y el marcado engrosamiento de las paredes ventriculares en el ecocardiograma es el signo característico de la amiloidosis cardíaca por depósito extracelular de fibrillas amiloides. El diagnóstico incluye gammagrafía con 99mTc-DPD y estudio de cadenas ligeras libres en suero."
        }
      },
      breakdown: {
        classThree: [
          "Uso de Digoxina, Nitratos y calcioantagonistas DHP en la miocardiopatía hipertrófica obstructiva (MCHO).",
          "Recomendación de deportes competitivos o de contacto de alta intensidad en pacientes con MCH, DAVD o mutaciones de lámina A/C (LMNA).",
          "Uso de antiinflamatorios no esteroideos y vasodilatadores a dosis altas en miocardiopatía restrictiva avanzada."
        ],
        mustKnow: [
          "MCH: Grosor parietal del VI ≥ 15 mm en ausencia de otra causa. Hipertrofia septal asimétrica, fenómeno SAM.",
          "Tratamiento de MCHO: Betabloqueantes, Mavacamten, miectomía. Digoxina y nitratos PROHIBIDOS.",
          "Takotsubo: Balonamiento apical, coronarias normales en cateterismo, generalmente reversible tras ceder el estrés."
        ]
      }
    },
{
      id: "zanety",
      number: 9,
      title: "Pericarditis y Endocarditis Infecciosa",
      shortDesc: "Endocarditis infecciosa (criterios de Duke), Miocarditis, Pericarditis aguda, Taponamiento cardíaco y Pericarditis constrictiva.",
      icon: "🔥",
      badge: "Infección y Pericardio",
      badgeColor: "rose",
            guidelineLinks: [
        { title: "2023 ESC Guidelines for the Management of Endocarditis", url: "https://academic.oup.com/eurheartj/article/44/39/3948/7243212", year: "2023" },
        { title: "2015 ESC Guidelines for the Diagnosis and Management of Pericardial Diseases", url: "https://academic.oup.com/eurheartj/article/36/42/2921/2293385", year: "2015" }
      ],
theory: {
        banner: {
          tag: "Cuadros críticos",
          title: "Endocarditis infecciosa y Taponamiento cardíaco",
          text: "La endocarditis infecciosa (EI) es una patología séptica con alta mortalidad (20–30 %). Su diagnóstico se basa en los **criterios de Duke modificados** (hemocultivos + ecocardiografía). El taponamiento cardíaco es la compresión mecánica aguda del corazón por líquido pericárdico con la clásica **tríada de Beck**."
        },
        sections: [
          {
            title: "Endocarditis Infecciosa (Criterios de Duke y Tratamiento)",
            color: "rose",
            content: `
              <div class="p-4 bg-slate-900 border border-slate-700 rounded-xl text-xs space-y-2 text-slate-300">
                <span class="font-bold text-rose-400">Criterios mayores de Duke:</span>
                <ul class="list-disc ml-4 space-y-1">
                  <li><strong>Hemocultivos positivos:</strong> Microorganismos típicos (S. aureus, estreptococos del grupo viridans, enterococos, grupo HACEK) en 2 tomas independientes.</li>
                  <li><strong>Evidencia de afectación endocárdica:</strong> Vegetación, absceso, nueva dehiscencia de prótesis valvular en ETE/ETT o nueva regurgitación valvular.</li>
                </ul>
                <p class="mt-2"><strong>Tratamiento antibiótico:</strong> Pauta bactericida intravenosa prolongada (4–6 semanas). Empírico: Ampicilina + Cloxacilina/Gentamicina o Vancomicina + Gentamicina en infecciones nosocomiales o sobre prótesis.</p>
              </div>
            `
          },
          {
            title: "Pericarditis aguda vs. Taponamiento cardíaco",
            color: "cyan",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-cyan-400">Pericarditis aguda</span>
                  <p class="text-slate-300 mt-1">Dolor torácico pleurítico punzante que <strong>mejora al inclinarse hacia adelante</strong> y empeora en decúbito y con la inspiración. EKG: <strong>elevación difusa cóncava del segmento ST</strong> con descenso del segmento PR.</p>
                  <p class="text-slate-400 mt-1"><strong>Tratamiento:</strong> AINEs a dosis altas (Ibuprofeno 600 mg c/8h / Aspirina) + <strong>Colchicina 0.5 mg/día durante 3 meses</strong> (¡prevención de recurrencias!).</p>
                </div>
                <div class="p-3 bg-slate-900 border border-rose-500/40 rounded-xl">
                  <span class="font-bold text-rose-400">Taponamiento cardíaco</span>
                  <p class="text-slate-300 mt-1"><strong>Tríada de Beck:</strong> 1. Hipotensión arterial, 2. Ingurgitación yugular, 3. Tonos cardíacos apagados (silencio auscultatorio). Se acompaña de <strong>pulso paradójico</strong> (caída de PAS &gt; 10 mmHg en inspiración).</p>
                  <p class="text-emerald-400 font-bold mt-1">Tratamiento: ¡Pericardiocentesis urgente guiada por ecografía!</p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "zan-r1",
            title: "Pregunta 1: Profilaxis de la Endocarditis Infecciosa",
            question: "¿Qué pacientes y en qué tipo de procedimientos tienen indicación formal de profilaxis antibiótica frente a endocarditis infecciosa según las guías?",
            answer: "Únicamente los pacientes de ALTO riesgo: 1. Portadores de prótesis valvulares (quirúrgicas o TAVI) o material protésico de reparación. 2. Episodio previo documentado de EI. 3. Cardiopatías congénitas cianógenas no corregidas. La profilaxis (Amoxicilina 2g v.o. 30–60 min antes) se administra EXCLUSIVAMENTE en procedimientos odontológicos que implican manipulación gingival o de la región periapical.",
            pearl: "En gastroscopias, colonoscopias o procedimientos urogenitales ya no está indicada la profilaxis rutinaria de EI."
          },
          {
            id: "zan-r2",
            title: "Pregunta 2: Diagnóstico diferencial en EKG entre pericarditis y SCACEST",
            question: "¿Cómo diferencia con seguridad en el EKG una pericarditis aguda de un SCACEST transmural?",
            answer: "La pericarditis presenta elevación cóncava difusa del segmento ST en la gran mayoría de derivaciones (I, II, aVF, V2-V6), con descenso concomitante del segmento PR y sin imágenes especulares recíprocas (salvo en aVR). El SCACEST presenta elevación convexa del ST localizada en un territorio vascular coronario específico, con descensos especulares del ST recíprocos y posterior desarrollo de ondas Q de necrosis.",
            pearl: "En la pericarditis aguda nunca se generan ondas Q patológicas de necrosis."
          }
        ],
        quiz: {
          title: "Quiz: Tratamiento de la Pericarditis Aguda",
          prompt: "¿Qué fármaco se asocia de forma estándar a los AINEs en el primer episodio de pericarditis aguda al haber demostrado reducir la tasa de recurrencias en más de un 50 %?",
          options: [
            { text: "A) Colchicina (0.5 mg 1–2 veces al día durante 3 meses)", isCorrect: true },
            { text: "B) Corticoides sistémicos a dosis altas (Prednisona 1 mg/kg)", isCorrect: false },
            { text: "C) Warfarina", isCorrect: false },
            { text: "D) Amiodarona", isCorrect: false }
          ],
          explanation: "La colchicina es el fármaco de primera línea junto con AINEs o aspirina. Los corticoides sistémicos son fármacos de segunda línea cuando hay intolerancia o contraindicación a AINEs, ya que su uso inicial favorece la cronificación y recurrencia de la pericarditis."
        }
      },
      breakdown: {
        classThree: [
          "Uso rutinario de corticoides como primera línea en pericarditis aguda (multiplican la tasa de recidivas).",
          "Anticoagulación en pericarditis aguda no complicada sin otra indicación formal (riesgo de hemopericardio y taponamiento).",
          "Profilaxis de endocarditis en pacientes de bajo riesgo o en procedimientos odontológicos superficiales no invasivos."
        ],
        mustKnow: [
          "Endocarditis: ¡Extraer al menos 3 pares de hemocultivos antes de iniciar los antibióticos! ETE para documentar vegetaciones.",
          "Taponamiento: Tríada de Beck (hipotensión, tonos apagados, ingurgitación yugular) + pulso paradójico -> pericardiocentesis evacuadora.",
          "Pericarditis: El dolor mejora al inclinarse hacia adelante, ST cóncavo difuso + descenso del PR -> Ibuprofeno + Colchicina."
        ]
      }
    },
{
      id: "pe",
      number: 10,
      title: "Embolia Pulmonar e Hipertensión Pulmonar",
      shortDesc: "Tromboembolismo pulmonar agudo (estratificación de riesgo ESC, sPESI, fibrinólisis sistémica, ACOD), cor pulmonale y los 5 grupos de hipertensión pulmonar.",
      icon: "🫁",
      badge: "Circulación Pulmonar",
      badgeColor: "cyan",
            guidelineLinks: [
        { title: "2019 ESC Guidelines for the Diagnosis and Management of Acute Pulmonary Embolism", url: "https://academic.oup.com/eurheartj/article/41/4/543/5556136", year: "2019" },
        { title: "2024 ESC Guidelines for the Management of Peripheral Arterial and Aortic Diseases", url: "https://academic.oup.com/eurheartj/article/45/39/3680/7741356", year: "2024" }
      ],
theory: {
        banner: {
          tag: "Guías ESC para TEP",
          title: "Estratificación de riesgo del TEP e indicación de trombólisis",
          text: "El tromboembolismo pulmonar (TEP) se estratifica según la presencia de **inestabilidad hemodinámica (shock o hipotensión persistente)** en: **Alto riesgo (High Risk)** vs. **Intermedio (Intermediate)** vs. **Bajo riesgo (Low Risk)**. ¡Únicamente en el TEP de alto riesgo está indicada la fibrinólisis sistémica inmediata!"
        },
        sections: [
          {
            title: "Estratificación pronóstica del TEP agudo",
            color: "cyan",
            content: `
              <div class="space-y-3 text-xs">
                <div class="p-3 bg-rose-950/40 border border-rose-500/30 rounded-xl">
                  <div class="font-bold text-rose-400">🚨 Alto riesgo (High Risk / TEP Masivo)</div>
                  <p class="text-slate-300 mt-0.5">Presencia de shock cardiogénico o hipotensión persistente (PAS &lt; 90 mmHg o caída de PAS ≥ 40 mmHg durante &gt; 15 min). <strong>Tratamiento: Fibrinólisis sistémica inmediata (Alteplasa 100 mg i.v.)</strong> + heparina no fraccionada (HNF). ¡Angio-TC de tórax solo si el paciente está hemodinámicamente estable para el traslado!</p>
                </div>
                <div class="p-3 bg-amber-950/40 border border-amber-500/30 rounded-xl">
                  <div class="font-bold text-amber-400">Riesgo Intermedio-Alto:</div>
                  <p class="text-slate-300 mt-0.5">Presión arterial normal, pero CON disfunción del ventrículo derecho en ECO/TC Y ADEMÁS troponina positiva. <strong>Tratamiento: Anticoagulación (HBPM/ACOD)</strong> + vigilancia estrecha en UCI (fibrinólisis de rescate si empeora).</p>
                </div>
                <div class="p-3 bg-emerald-950/40 border border-emerald-500/30 rounded-xl">
                  <div class="font-bold text-emerald-400">Bajo riesgo (Low Risk):</div>
                  <p class="text-slate-300 mt-0.5">sPESI = 0 puntos, sin disfunción de VD y troponinas normales. Puede valorarse alta precoz y manejo ambulatorio con ACOD (Rivaroxabán o Apixabán).</p>
                </div>
              </div>
            `
          },
          {
            title: "Hipertensión Pulmonar (Definición y 5 grupos clínicos)",
            color: "blue",
            content: `
              <p class="text-xs text-slate-300 mb-2"><strong>Definición hemodinámica:</strong> Presión media en la arteria pulmonar (mPAP) <strong>&gt; 20 mmHg</strong> en reposo medida por cateterismo cardíaco derecho.</p>
              <div class="grid sm:grid-cols-2 gap-2 text-xs text-slate-300">
                <div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg"><strong>Grupo 1:</strong> Hipertensión arterial pulmonar (HAP - idiopática, hereditaria, fármacos).</div>
                <div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg"><strong>Grupo 2:</strong> Asociada a cardiopatía izquierda (¡la más frecuente! IC-FEr, IC-FEp, valvulopatías).</div>
                <div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg"><strong>Grupo 3:</strong> Asociada a enfermedades pulmonares / hipoxia (EPOC, fibrosis intersticial).</div>
                <div class="p-2.5 bg-slate-900 border border-slate-700 rounded-lg"><strong>Grupo 4:</strong> Hipertensión pulmonar tromboembólica crónica (HPTEC / CTEPH) - ¡curable mediante endarterectomía!</div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "pe-r1",
            title: "Pregunta 1: Signos de sobrecarga derecha en el EKG",
            question: "¿Cuáles son los signos electrocardiográficos característicos del cor pulmonale agudo / TEP masivo?",
            answer: "1. Taquicardia sinusal (el más frecuente). 2. Patrón clásico S1Q3T3 de McGinn-White (onda S profunda en I, onda Q en III, onda T negativa en III). 3. Bloqueo de rama derecha nuevo (completo o incompleto). 4. Inversión de ondas T en derivaciones precordiales derechas V1–V4. 5. P-pulmonale.",
            pearl: "Un EKG completamente normal no excluye un tromboembolismo pulmonar."
          },
          {
            id: "pe-r2",
            title: "Pregunta 2: Duración de la anticoagulación tras un TEP",
            question: "¿Cuánto tiempo debe prolongarse la anticoagulación tras un primer episodio de TEP provocado por un factor de riesgo transitorio mayor (ej. cirugía ortopédica) frente a un TEP no provocado (idiopático)?",
            answer: "TEP provocado por factor transitorio mayor: mínimo 3 meses de anticoagulación (y suspender tras la resolución del factor). TEP no provocado (idiopático) o recurrente: anticoagulación prolongada o indefinida (si el riesgo hemorrágico no es prohibitivo).",
            pearl: "Los fármacos de primera elección para el tratamiento oral del TEP son los ACOD (Apixabán, Rivaroxabán, Edoxabán, Dabigatrán)."
          }
        ],
        quiz: {
          title: "Quiz: Dímero D en el diagnóstico del TEP",
          prompt: "¿En cuál de los siguientes pacientes tiene la determinación del Dímero D su máximo valor para descartar de forma segura un TEP?",
          options: [
            { text: "A) Paciente con probabilidad clínica baja o intermedia según la escala de Wells o Ginebra", isCorrect: true },
            { text: "B) Paciente con probabilidad clínica alta y shock", isCorrect: false },
            { text: "C) Paciente oncológico pluripatológico tras politraumatismo grave", isCorrect: false },
            { text: "D) Paciente gestante en el tercer trimestre", isCorrect: false }
          ],
          explanation: "El dímero D tiene una sensibilidad y un valor predictivo negativo excepcionales (> 99 %) en pacientes con probabilidad clínica BAJA o INTERMEDIA. Ante una probabilidad alta no se solicita dímero D y se procede directamente a realizar una angio-TC pulmonar."
        }
      },
      breakdown: {
        classThree: [
          "Fibrinólisis sistémica en pacientes con TEP hemodinámicamente estables de bajo riesgo.",
          "Confiar en un dímero D negativo para descartar TEP en un paciente con alta probabilidad clínica (debe realizarse angio-TC).",
          "Uso de vasodilatadores pulmonares específicos de la HAP (prostaciclinas, ERA) en pacientes con hipertensión pulmonar del Grupo 2 (por cardiopatía izquierda: precipita edema de pulmón).",
          "Uso de filtros de vena cava inferior de forma rutinaria sin contraindicación absoluta para anticoagulación."
        ],
        mustKnow: [
          "TEP de alto riesgo (shock/hipotensión) = fibrinólisis sistémica inmediata (Alteplasa 100 mg i.v.).",
          "Tratamiento del TEP estable: ACOD (Apixabán o Rivaroxabán desde el inicio sin necesidad de puente con HBPM; Dabigatrán o Edoxabán tras 5 días de HBPM).",
          "Hipertensión pulmonar: mPAP &gt; 20 mmHg. El grupo 2 (cardiopatía izquierda) es con diferencia el más frecuente."
        ]
      }
    },
{
      id: "ccs",
      number: 11,
      title: "Síndromes Coronarios Crónicos (SCC)",
      shortDesc: "Angina de pecho estable, probabilidad pre-test (PTP), coronariografía por TC frente a pruebas funcionales de isquemia y terapia médica.",
      icon: "🫀",
      badge: "Cardiopatía Isquémica",
      badgeColor: "amber",
            guidelineLinks: [
        { title: "2024 ESC Guidelines for the Management of Chronic Coronary Syndromes", url: "https://academic.oup.com/eurheartj/article/45/39/3415/7741357", year: "2024" }
      ],
theory: {
        banner: {
          tag: "Diagnóstico moderno de la CI",
          title: "Coronariografía por TC vs. Pruebas Funcionales",
          text: "La ESC prioriza las pruebas diagnósticas no invasivas anatómicas y funcionales. La **angio-TC coronaria (CCTA)** es la prueba de elección en pacientes con probabilidad pre-test (PTP) baja o intermedia para descartar estenosis coronarias gracias a su altísimo valor predictivo negativo."
        },
        sections: [
          {
            title: "Algoritmo diagnóstico ante sospecha de SCC",
            color: "amber",
            content: `
              <div class="space-y-2 text-xs text-slate-300">
                <p>1. Caracterización de los síntomas (angina típica vs. atípica vs. dolor no cardíaco) y cálculo de la probabilidad pre-test (PTP) según edad, sexo y tipo de dolor.</p>
                <div class="grid sm:grid-cols-2 gap-3 my-2">
                  <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                    <span class="font-bold text-amber-400">Estudio anatómico (Angio-TC coronaria)</span>
                    <p class="mt-1">De elección en PTP baja-intermedia sin cardiopatía isquémica previa conocida y ausencia de calcificaciones coronarias masivas.</p>
                  </div>
                  <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                    <span class="font-bold text-amber-400">Pruebas funcionales de isquemia (Eco-estrés, RMC, SPECT)</span>
                    <p class="mt-1">Preferidas en PTP más elevada, pacientes con cardiopatía isquémica conocida o revascularización previa (stents, bypass).</p>
                  </div>
                </div>
              </div>
            `
          },
          {
            title: "Tratamiento antianginoso y pronóstico",
            color: "emerald",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-emerald-400">Tratamiento pronóstico (reduce eventos CV):</span>
                  <ul class="list-disc ml-4 mt-1 text-slate-300 space-y-1">
                    <li><strong>Aspirina 100 mg/día</strong> (o Clopidogrel si intolerancia).</li>
                    <li><strong>Estatina de alta potencia</strong> (objetivo LDL &lt; 1.4 mmol/l) ± Ezetimiba.</li>
                    <li><strong>IECA / ARA-II</strong> (si HTA, DM, FEVI &lt; 40 %).</li>
                  </ul>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-emerald-400">Tratamiento sintomático antianginoso:</span>
                  <ul class="list-disc ml-4 mt-1 text-slate-300 space-y-1">
                    <li><strong>1.ª línea:</strong> Betabloqueantes y/o calcioantagonistas (DHP o no DHP).</li>
                    <li><strong>2.ª línea:</strong> Nitratos de acción prolongada, Ranolazina, Ivabradina, Trimetazidina.</li>
                    <li><strong>Alivio agudo:</strong> Nitroglicerina sublingual (spray/comprimidos).</li>
                  </ul>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "ccs-r1",
            title: "Pregunta 1: Los 3 criterios de la angina típica",
            question: "¿Cuáles son las 3 características clásicas que definen la angina de pecho típica?",
            answer: "1. Dolor u opresión retroesternal de cualidad y duración características. 2. Desencadenado por el esfuerzo físico o el estrés emocional. 3. Cede con el reposo o la administración de nitroglicerina sublingual en pocos minutos (menos de 5 min). (La angina atípica cumple 2 de estos 3 criterios).",
            pearl: "Si el dolor es punzante en un solo punto y se modifica con la palpación o los movimientos posturales, su origen es casi con seguridad osteomuscular (no cardíaco)."
          },
          {
            id: "ccs-r2",
            title: "Pregunta 2: Ivabradina – mecanismo e indicación",
            question: "¿Cuál es el mecanismo de acción de la Ivabradina y qué condición es indispensable para que sea efectiva en la angina de pecho?",
            answer: "Inhibe selectivamente los canales If del nodo sinusal, reduciendo la frecuencia cardíaca sin deprimir la contractilidad miocárdica ni modificar la presión arterial. Es condición indispensable que el paciente esté en ritmo sinusal (es ineficaz en fibrilación auricular) y con FC basal ≥ 70 lpm.",
            pearl: "La ivabradina es idónea en pacientes con intolerancia o contraindicación a betabloqueantes (ej. asma grave) o combinada con ellos si la FC sigue elevada."
          }
        ],
        quiz: {
          title: "Quiz: Objetivos de colesterol LDL en SCC",
          prompt: "En un paciente con cardiopatía isquémica estable establecida (muy alto riesgo cardiovascular), el objetivo terapéutico de c-LDL según las guías ESC es:",
          options: [
            { text: "A) LDL < 1.4 mmol/l (< 55 mg/dl) y además una reducción de al menos el 50 % respecto al valor basal", isCorrect: true },
            { text: "B) LDL < 2.6 mmol/l (< 100 mg/dl)", isCorrect: false },
            { text: "C) LDL < 3.0 mmol/l (< 115 mg/dl)", isCorrect: false },
            { text: "D) LDL < 1.8 mmol/l sin requerimiento de porcentaje de descenso", isCorrect: false }
          ],
          explanation: "En todos los pacientes con enfermedad cardiovascular establecida (muy alto riesgo CV), el objetivo es alcanzar un c-LDL < 1.4 mmol/l (< 55 mg/dl) junto a una reducción relativa de al menos el 50 % respecto a las cifras basales previas al tratamiento."
        }
      },
      breakdown: {
        classThree: [
          "Realización de angio-TC coronaria en pacientes con arritmias graves, taquicardia no controlada o calcificaciones vasculares masivas (artefactos y baja rentabilidad).",
          "Uso de Ivabradina en pacientes sin ritmo sinusal (ej. en fibrilación auricular).",
          "Administración de nitratos en las 24–48 horas posteriores al uso de inhibidores de la fosfodiesterasa-5 (Sildenafilo, Tadalafilo) por riesgo de hipotensión mortal refractaria."
        ],
        mustKnow: [
          "Diagnóstico: La angio-TC coronaria descarta estenosis anatómicas; las pruebas de estrés (eco, RMC, SPECT) demuestran isquemia funcional.",
          "Tratamiento pronóstico: Estatina de alta potencia (LDL &lt; 1.4 mmol/l) + Aspirina 100 mg/día + IECA/ARA-II.",
          "Revascularización pronóstica (ICP vs. CABG): Aumenta la supervivencia en lesión de tronco común izquierdo (TCI), descendente anterior proximal (DA) o enfermedad multivaso con disfunción del VI."
        ]
      }
    },
{
      id: "ekg",
      number: 12,
      title: "EKG en cardiología aguda y trastornos iónicos",
      shortDesc: "Localización de infartos, cambios especulares, bloqueos de rama, alteraciones electrolíticas (hiperpotasemia, hipopotasemia, calcio) y síndrome de QT largo.",
      icon: "📈",
      badge: "EKG y Diagnóstico",
      badgeColor: "emerald",
            guidelineLinks: [
        { title: "2023 ESC Guidelines for the Management of Acute Coronary Syndromes (ECG Appendix)", url: "https://academic.oup.com/eurheartj/article/44/38/3720/7243210", year: "2023" }
      ],
theory: {
        banner: {
          tag: "Brújula del EKG",
          title: "Anatomía topográfica del infarto en el EKG de 12 derivaciones",
          text: "Según las derivaciones con elevación del segmento ST localizamos la arteria coronaria responsable: **Cara inferior (diafragmática: II, III, aVF)** -> ACD / ACx. **Cara anterior y septal (V1–V4)** -> DA. **Cara lateral (I, aVL, V5–V6)** -> ACx / DA. **Cara posterior (descensos en V1–V3)** -> ACD / ACx."
        },
        sections: [
          {
            title: "Localización electrocardiográfica del infarto agudo",
            color: "emerald",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-rose-400">Cara inferior (II, III, aVF)</span>
                  <p class="mt-1">Territorio de arteria coronaria derecha (ACD en el 85 %) o ACx. Frecuente bradicardia y bloqueos AV. ¡Descenso especular del ST en aVL!</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-rose-400">Cara anterior (V1–V4) / Anteroseptal</span>
                  <p class="mt-1">Territorio de arteria descendente anterior (DA/LAD). Gran extensión de miocardio en riesgo, peligro de shock cardiogénico y rotura septal.</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-rose-400">Cara lateral (I, aVL, V5–V6)</span>
                  <p class="mt-1">Territorio de arteria circunfleja (ACx) o ramas diagonales de la DA. Descenso especular en cara inferior (III, aVF).</p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-rose-400">Cara posterior (posterobasal)</span>
                  <p class="mt-1">Descenso horizontal del ST y ondas R altas y prominentes en V1–V3. ¡Colocar derivaciones posteriores V7–V9 (elevación ≥ 0.5 mm confirma SCACEST posterior)!</p>
                </div>
              </div>
            `
          },
          {
            title: "Trastornos electrolíticos en el EKG",
            color: "amber",
            content: `
              <div class="grid sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-amber-400">Hiperpotasemia (K+ &gt; 5.5 mmol/l)</span>
                  <p class="mt-1">1. Ondas T altas, picudas y simétricas ('en tienda de campaña'). 2. Aplanamiento y desaparición de la onda P con prolongación del PR. 3. Ensanchamiento extremo del QRS (onda sinusoidal -> fibrilación ventricular o asistolia). <strong>¡Gluconato cálcico i.v. inmediato para estabilizar membrana!</strong></p>
                </div>
                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                  <span class="font-bold text-cyan-400">Hipopotasemia (K+ &lt; 3.5 mmol/l)</span>
                  <p class="mt-1">Aplanamiento o inversión de ondas T, descenso del ST, aparición de una prominente <strong>onda U</strong> y aparente prolongación del intervalo QT (intervalo QU). ¡Alto riesgo de arritmias ventriculares malignas!</p>
                </div>
              </div>
            `
          }
        ]
      },
      recall: {
        scenarios: [
          {
            id: "ekg-r1",
            title: "Pregunta 1: Infarto de ventrículo derecho",
            question: "En un paciente con SCACEST de cara inferior (elevación en II, III, aVF) se constata una hipotensión grave brusca tras la toma de 1 comprimido de nitroglicerina sublingual. ¿Qué complicación debe sospechar inmediatamente, qué derivaciones debe registrar y cuál es el manejo?",
            answer: "Sospechar infarto asociado de ventrículo derecho (ocurre en un 30–40 % de los infartos inferiores). Registrar derivaciones precordiales derechas V3R–V6R (elevación del ST ≥ 0.5–1.0 mm en V4R confirma infarto de VD). Manejo: fluidoterapia intravenosa inmediata con cristaloides para mantener la precarga del VD. Los nitratos y diuréticos están formalmente prohibidos.",
            pearl: "El ventrículo derecho es extraordinariamente dependiente de la precarga; los vasodilatadores provocan un colapso catastrófico del gasto cardíaco."
          },
          {
            id: "ekg-r2",
            title: "Pregunta 2: Criterios de Sgarbossa",
            question: "¿Para qué se utilizan los criterios de Sgarbossa (o criterios modificados de Smith-Sgarbossa) en el EKG?",
            answer: "Sirven para diagnosticar SCACEST agudo en presencia de bloqueo completo de rama izquierda (BRI) o ritmo estimulado por marcapasos en ventrículo derecho (VVI), situaciones que normalmente distorsionan e impiden la visualización de la elevación del ST isquémica habitual.",
            pearl: "El criterio más específico es la elevación concordante del ST ≥ 1 mm en derivaciones con QRS predominantemente positivo."
          }
        ],
        quiz: {
          title: "Quiz: Hiperpotasemia y Gluconato Cálcico",
          prompt: "Paciente con anuria presenta en el EKG ondas T picudas 'en tienda de campaña' y ensanchamiento difuso del QRS (K+ 7.8 mmol/l). ¿Cuál es la medida farmacológica más urgente para evitar la parada cardíaca inminente?",
          options: [
            { text: "A) Gluconato Cálcico al 10 % (o Cloruro Cálcico) i.v. para estabilización inmediata de la membrana miocárdica", isCorrect: true },
            { text: "B) Administración de resinas de intercambio iónico oral", isCorrect: false },
            { text: "C) Inhalación de salbutamol", isCorrect: false },
            { text: "D) Infusión de glucosa con insulina", isCorrect: false }
          ],
          explanation: "El calcio intravenoso no reduce los niveles de potasio en suero, pero antagoniza el efecto tóxico de la hiperpotasemia sobre el potencial de membrana de los miocardiocitos y estabiliza el miocardio en 1–3 minutos frente a la fibrilación ventricular o asistolia. Posteriormente se pauta insulina con glucosa, salbutamol o diálisis para descender el potasio."
        }
      },
      breakdown: {
        classThree: [
          "Administración de nitratos y diuréticos en SCACEST de cara inferior con afectación de ventrículo derecho (elevación en V4R).",
          "Uso de calcio i.v. en intoxicación digitálica (puede inducir parada cardíaca irreversible en sístole - corazón de piedra).",
          "Demorar la ICP primaria en un paciente con dolor isquémico típico y BRI nuevo."
        ],
        mustKnow: [
          "Cara inferior: II, III, aVF (ACD). Cara anterior: V1–V4 (DA). Cara lateral: I, aVL, V5–V6 (ACx).",
          "Infarto posterior: Descensos especulares en V1–V3 -> registrar V7–V9.",
          "Infarto de VD: Elevación en V4R -> tratamiento con sueros, ¡prohibidos nitratos!",
          "Hiperpotasemia: T picuda -> QRS ancho -> parada. ¡Gluconato cálcico i.v. urgente!"
        ]
      }
    }
  ],
flashcards: [
    // --- SCA y Síndromes Coronarios (1-15) ---
    {
      id: "fc-1",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuál es el tiempo máximo recomendado para la ICP primaria desde el diagnóstico de SCACEST (FMC-to-wire)?",
      answer: "Menos de 90 minutos (en centro con hemodinámica menos de 60 minutos). Si el tiempo de traslado al centro de ICP supera los 120 minutos, se indica fibrinólisis sistémica inmediata en los primeros 10 minutos desde el diagnóstico.",
      highYield: "FMC-to-wire < 90 min; Fibrinólisis < 10 min si traslado > 120 min."
    },
    {
      id: "fc-2",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuál es la recomendación de las guías ESC 2023 respecto al pre-tratamiento con P2Y12 en SCASEST?",
      answer: "El pre-tratamiento sistemático con un inhibidor P2Y12 antes de conocer la anatomía coronaria NO SE RECOMIENDA (Clase III) si se planea coronariografía precoz en las primeras 24 horas. Se administra en la sala tras visualizar las arterias.",
      highYield: "SCASEST: ¡El pre-tratamiento con P2Y12 es Clase III!"
    },
    {
      id: "fc-3",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿A qué inhibidor P2Y12 otorga preferencia la ESC 2023 en la ICP por SCA?",
      answer: "A Prasugrel frente a Ticagrelor (basado en el estudio ISAR-REACT 5). Clopidogrel se reserva para alto riesgo hemorrágico o necesidad de anticoagulación oral.",
      highYield: "Prasugrel > Ticagrelor > Clopidogrel en ICP por SCA."
    },
    {
      id: "fc-4",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuál es la duración estándar de la DAPT tras un SCA y cuándo se puede desescalar a monoterapia?",
      answer: "La duración estándar es de 12 meses. Tras 3–6 meses sin eventos isquémicos se puede valorar pasar a monoterapia con inhibidor P2Y12 (retirando la aspirina). ¡La desescalada en los primeros 30 días está contraindicada!",
      highYield: "DAPT estándar = 12 meses. Prohibida desescalada en los primeros 30 días."
    },
    {
      id: "fc-5",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuáles son los criterios de coronariografía inmediata urgente (< 2h) en el SCASEST?",
      answer: "Shock cardiogénico / inestabilidad hemodinámica, dolor torácico refractario a fármacos, arritmias malignas / PCR recuperada, insuficiencia cardíaca aguda por isquemia y cambios dinámicos del ST-T.",
      highYield: "Muy alto riesgo en SCASEST = coronariografía en < 2 horas."
    },
    {
      id: "fc-6",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuándo está indicada la oxigenoterapia en un paciente con SCA?",
      answer: "Únicamente en presencia de hipoxemia con saturación periférica SpO2 < 90 %. La administración rutinaria de O2 en pacientes normóxicos está contraindicada (Clase III) por inducir vasoconstricción coronaria y estrés oxidativo.",
      highYield: "Oxígeno solo si SpO2 < 90 %."
    },
    {
      id: "fc-7",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuál es la estrategia antitrombótica en un paciente con fibrilación auricular sometido a ICP por SCA?",
      answer: "Terapia triple (ACOD + Aspirina + Clopidogrel) durante el ingreso (hasta 1 semana), seguida de Terapia Doble (ACOD + Clopidogrel) hasta completar 12 meses, y posteriormente ACOD en monoterapia.",
      highYield: "TAT ≤ 1 semana -> DAT (ACOD + Clopidogrel) hasta 12M -> monoterapia ACOD."
    },
    {
      id: "fc-8",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuáles son los criterios electrocardiográficos de elevación del ST en el punto J para SCACEST?",
      answer: "Elevación del ST en 2 derivaciones contiguas: V2-V3: varones < 40 años ≥ 2.5 mm; varones ≥ 40 años ≥ 2.0 mm; mujeres ≥ 1.5 mm. En todas las demás derivaciones ≥ 1.0 mm.",
      highYield: "V2-V3 según edad y sexo (1.5 - 2.5 mm); demás derivaciones ≥ 1 mm."
    },
    {
      id: "fc-9",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Qué arteria coronaria está implicada con mayor frecuencia en el infarto inferior y qué complicaciones pueden surgir?",
      answer: "Arteria coronaria derecha (ACD, en el 85 %) o circunfleja (ACx). Complicaciones: bradicardia y bloqueos AV (por irrigación del nodo AV), infarto de ventrículo derecho y rotura de músculo papilar posteromedial.",
      highYield: "Infarto inferior = ACD -> bloqueos AV, infarto VD, rotura de músculo papilar."
    },
    {
      id: "fc-10",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuál es el objetivo de colesterol LDL tras un infarto de miocardio?",
      answer: "c-LDL < 1.4 mmol/l (< 55 mg/dl) y además una reducción relativa de al menos el 50 % respecto al valor basal. La base es una estatina de alta potencia (Atorvastatina 80 mg / Rosuvastatina 40 mg) ± Ezetimiba.",
      highYield: "Objetivo LDL tras SCA: < 1.4 mmol/l (< 55 mg/dl) y descenso ≥ 50 %."
    },

    // --- Definición de IM & MINOCA (11-15) ---
    {
      id: "fc-11",
      moduleId: "midef",
      category: "Definición de IM y MINOCA",
      question: "¿Qué diferencia al infarto de miocardio del simple daño miocárdico (Myocardial Injury)?",
      answer: "El infarto de miocardio requiere una cinética de ascenso/descenso de troponina por encima del percentil 99 Y ADEMÁS al menos una evidencia de isquemia aguda (síntomas, nuevo cambio en EKG, alteración ecográfica de motilidad o trombo coronario).",
      highYield: "Infarto = Dinámica de troponinas + Evidencia de isquemia clínica."
    },
    {
      id: "fc-12",
      moduleId: "midef",
      category: "Definición de IM y MINOCA",
      question: "¿Cuál es la causa del Infarto de Miocardio Tipo 2?",
      answer: "Isquemia miocárdica debida a un desequilibrio entre el aporte y la demanda de oxígeno sin aterotrombosis aguda ni rotura de placa (ej. sepsis grave, anemia severa, taquiarritmia, hipotensión, vasoespasmo).",
      highYield: "Tipo 2 = Desajuste aporte/demanda de O2 sin rotura de placa."
    },
    {
      id: "fc-13",
      moduleId: "midef",
      category: "Definición de IM y MINOCA",
      question: "¿Qué significa el acrónimo MINOCA y cuáles son sus 3 criterios diagnósticos?",
      answer: "Myocardial Infarction with Non-Obstructive Coronary Arteries. 1. Cumplir criterios de infarto de miocardio, 2. Arterias coronarias angiográficamente normales o con estenosis < 50 %, 3. Ausencia de otra causa no isquémica evidente.",
      highYield: "MINOCA = Infarto de miocardio + coronarias sin estenosis obstructiva (<50%)."
    },
    {
      id: "fc-14",
      moduleId: "midef",
      category: "Definición de IM y MINOCA",
      question: "¿Qué prueba diagnóstica es de primera elección (Clase I) para filiar la causa de un MINOCA?",
      answer: "Resonancia Magnética Cardíaca (RMC / CMR). Permite discriminar infarto verdadero (LGE subendocárdico), miocarditis (LGE subepicárdico) y miocardiopatía de Takotsubo.",
      highYield: "MINOCA -> ¡Indicar resonancia magnética cardíaca (CMR) urgente!"
    },
    {
      id: "fc-15",
      moduleId: "midef",
      category: "Definición de IM y MINOCA",
      question: "¿Cómo se definen los Infartos de Miocardio Tipo 4a y Tipo 4b?",
      answer: "El tipo 4a es el infarto periprocedimiento asociado a ICP (elevación de cTn > 5× por encima del percentil 99 con isquemia). El tipo 4b es la trombosis del stent demostrada por angiografía o autopsia.",
      highYield: "4a = periprocedimiento de ICP; 4b = trombosis de stent."
    },

    // --- Insuficiencia Cardíaca (16-25) ---
    {
      id: "fc-16",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cómo clasifican la insuficiencia cardíaca las Guías ESC 2026 según la fracción de eyección?",
      answer: "De forma binaria en dos categorías: IC-FEr (FEVI ≤ 40 %, reducida) e IC-FEp (FEVI > 40 %, preservada). Se elimina la categoría intermedia HFmrEF.",
      highYield: "2026: IC-FEr (FEVI ≤ 40 %) vs. IC-FEp (FEVI > 40 %)."
    },
    {
      id: "fc-17",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cuáles son los 4 grupos farmacológicos que constituyen la Terapia Médica Fundacional (FMT) en IC-FEr?",
      answer: "1. ARNI (Sacubitrilo/Valsartán) o IECA/ARA-II, 2. Betabloqueantes (Bisoprolol, Metoprolol succinato, Carvedilol, Nebivolol), 3. ARM (Espironolactona/Eplerenona), 4. Inhibidores SGLT2 (Dapagliflozina/Empagliflozina).",
      highYield: "FMT 4 pilares: ARNI + Betabloqueante + ARM + iSGLT2."
    },
    {
      id: "fc-18",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Por qué debe respetarse un periodo de lavado de 36 horas al cambiar de un IECA a un ARNI?",
      answer: "Para evitar la acumulación masiva de bradicinina debida al bloqueo simultáneo de su degradación por la ECA y la neprilisina, lo cual provocaría angioedema con riesgo vital.",
      highYield: "Transición IECA -> ARNI: ¡Obligatorio periodo de lavado de 36 horas!"
    },
    {
      id: "fc-19",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Qué clase farmacológica tiene recomendación Clase I para reducir mortalidad y hospitalizaciones en IC-FEp (FEVI > 40 %)?",
      answer: "Los inhibidores de SGLT2 (Empagliflozina o Dapagliflozina).",
      highYield: "Base de tratamiento en IC-FEp = inhibidores SGLT2 (gliflozinas)."
    },
    {
      id: "fc-20",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cuáles son los 4 estadios de la insuficiencia cardíaca según la clasificación actual?",
      answer: "Estadio A: En riesgo (At Risk - HTA, DM), Estadio B: Pre-insuficiencia cardíaca (cardiopatía estructural/BNP sin síntomas), Estadio C: IC sintomática, Estadio D: IC avanzada refractaria (Advanced HF).",
      highYield: "Estadios A (riesgo), B (pre-IC), C (síntomas), D (avanzada)."
    },
    {
      id: "fc-21",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cuándo está indicado el implante de un DAI en prevención primaria en la IC-FEr?",
      answer: "En pacientes sintomáticos (NYHA II–III) con FEVI ≤ 35 % a pesar de al menos 3 meses de tratamiento médico fundacional óptimo (FMT) y con expectativa de vida superior a 1 año.",
      highYield: "DAI en prevención primaria: FEVI ≤ 35 %, NYHA II-III tras ≥ 3 meses de FMT."
    },
    {
      id: "fc-22",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cuándo está indicada la Terapia de Resincronización Cardíaca (TRC / CRT)?",
      answer: "En pacientes con IC-FEr (FEVI ≤ 35 %), en ritmo sinusal, síntomas persistentes (NYHA II-IV) y QRS ancho con morfología de bloqueo de rama izquierda (BRI) ≥ 130–150 ms.",
      highYield: "TRC: FEVI ≤ 35 % + BRI con QRS ≥ 130-150 ms en ritmo sinusal."
    },
    {
      id: "fc-23",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cuál es el perfil hemodinámico más común de insuficiencia cardíaca aguda y cómo se maneja?",
      answer: "Perfil 'Caliente y Húmedo' (Warm and Wet: congestión pulmonar con buena perfusión periférica y PA conservada/alta). Tratamiento: diuréticos de asa i.v. (furosemida) + vasodilatadores i.v. (nitratos) + soporte respiratorio.",
      highYield: "Caliente y Húmedo = congestión sin shock -> Furosemida i.v. + Nitratos i.v."
    },
    {
      id: "fc-24",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Qué define el shock cardiogénico ('Frío y Húmedo / Frío y Seco')?",
      answer: "Hipoperfusión tisular grave de origen cardíaco primario: hipotensión (PAS < 90 mmHg), oliguria (< 0.5 ml/kg/h), extremidades frías y mal perfundidas, alteración del sensorio y elevación de lactato > 2 mmol/l.",
      highYield: "Shock cardiogénico: PAS < 90 mmHg + signos de hipoperfusión + lactato > 2."
    },
    {
      id: "fc-25",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cuál es el vasopresor/inotrópico de primera línea en el shock cardiogénico para restaurar la presión de perfusión?",
      answer: "Noradrenalina (vasopresor de primera elección para elevar la PAM) combinado con Dobutamina (inotrópico para incrementar el gasto cardíaco).",
      highYield: "Shock cardiogénico: Noradrenalina + Dobutamina."
    },

    // --- Hipertensión Arterial (26-33) ---
    {
      id: "fc-26",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Cuáles son las 3 categorías de presión arterial en las Guías ESC 2024?",
      answer: "1. PA Normal (< 120/70 mmHg), 2. PA Elevada (Elevated BP: 120–139 / 70–89 mmHg), 3. Hipertensión (≥ 140/90 mmHg en consulta).",
      highYield: "Normal (<120/70), Elevada (120-139/70-89), Hipertensión (≥140/90)."
    },
    {
      id: "fc-27",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Cuál es el objetivo de PA sistólica para la mayoría de adultos en tratamiento según la ESC 2024?",
      answer: "120–129 mmHg (siempre que el paciente lo tolere adecuadamente sin efectos adversos).",
      highYield: "Objetivo de PA: 120–129 mmHg."
    },
    {
      id: "fc-28",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Cuál es la estrategia básica de inicio farmacológico en la hipertensión según la ESC?",
      answer: "Terapia combinada doble en un solo comprimido (SPC - Single Pill Combination): IECA o ARA-II + Antagonista del Calcio (DHP) o Diurético tiazídico/tiazida-like.",
      highYield: "Inicio de tratamiento: ¡Doble terapia combinada en 1 comprimido (SPC)!"
    },
    {
      id: "fc-29",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Cómo se define la hipertensión resistente y cuál es el fármaco de elección a añadir?",
      answer: "Cifras de PA no controladas (≥ 140/90 mmHg) pese al uso de triple terapia (IECA/ARA-II + Calcioantagonista + Diurético) a dosis plenas toleradas. Fármaco a añadir: Espironolactona (25–50 mg/día).",
      highYield: "HTA resistente = 3 fármacos con diurético fallan -> añadir Espironolactona."
    },
    {
      id: "fc-30",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Por qué está contraindicada la combinación de un IECA y un ARA-II?",
      answer: "El doble bloqueo del sistema renina-angiotensina aumenta significativamente los episodios de hiperpotasemia, hipotensión y fallo renal agudo sin reducir eventos cardiovasculares (ensayo ONTARGET).",
      highYield: "IECA + ARA-II = Clase III (combinación formalmente prohibida)."
    },
    {
      id: "fc-31",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Qué prueba de cribado está indicada ante la sospecha de hiperaldosteronismo primario (síndrome de Conn)?",
      answer: "El cociente aldosterona plasmática / renina plasmática (ARR = Aldosterone-to-Renin Ratio). Se deben suspender los ARM al menos 4 semanas antes.",
      highYield: "Cribado de Conn: Ratio aldosterona/renina (ARR)."
    },
    {
      id: "fc-32",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Cuál es la tríada clínica clásica del feocromocitoma?",
      answer: "Cefalea paroxística, sudoración profusa y palpitaciones (asociadas habitualmente a crisis hipertensivas y palidez). Cribado: metanefrinas libres en plasma u orina.",
      highYield: "Feocromocitoma: Cefalea + Sudoración + Palpitaciones."
    },
    {
      id: "fc-33",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Cuál es la diferencia de manejo entre una emergencia y una urgencia hipertensiva?",
      answer: "La emergencia (con daño agudo de órgano diana) requiere tratamiento intravenoso inmediato en UCI (Urapidilo, Labetalol, Nitroglicerina). La urgencia (sin daño de órgano diana) se maneja con medicación oral ambulatoria.",
      highYield: "Emergencia = daño agudo de órgano -> tratamiento i.v. en UCI."
    },

    // --- Fibrilación Auricular & Arritmias (34-43) ---
    {
      id: "fc-34",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿Qué escala se emplea en las guías ESC 2024 para indicar anticoagulación en fibrilación auricular?",
      answer: "La escala CHA2DS2-VA (se eliminó el punto por sexo femenino Sc). Puntos: C=1, H=1, A2(edad≥75)=2, D=1, S2(Ictus/AIT)=2, V=1, A(edad 65-74)=1.",
      highYield: "CHA2DS2-VA (tanto en varones como en mujeres: ≥ 2 puntos = indicación de ACOD Clase I)."
    },
    {
      id: "fc-35",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿Cuándo están contraindicados los ACOD en la FA y es obligatorio el uso de Warfarina/Sintrom?",
      answer: "En pacientes con prótesis valvulares cardíacas mecánicas y en pacientes con estenosis mitral moderada o grave de origen reumático.",
      highYield: "AVK (Warfarina/Sintrom) obligatorio solo en: prótesis mecánicas y estenosis mitral."
    },
    {
      id: "fc-36",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿Qué estudio es preceptivo antes de una cardioversión programada en FA > 48 horas sin anticoagulación previa?",
      answer: "Ecocardiograma transesofágico (ETE) para descartar la presencia de trombos en la orejuela izquierda (LAA). La alternativa es anticoagulación terapéutica durante al menos 3 semanas previas.",
      highYield: "FA > 48h sin anticoagular -> ¡ETE previo a la cardioversión!"
    },
    {
      id: "fc-37",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿Cuál es la indicación de la ablación por catéter (PVI) en las Guías ESC 2024?",
      answer: "Recomendación Clase I de primera elección en FA paroxística sintomática (incluso antes de probar fármacos antiarrítmicos) y en pacientes con FA e insuficiencia cardíaca (IC-FEr).",
      highYield: "Ablación (PVI) = Clase I en FA paroxística sintomática y en IC-FEr."
    },
    {
      id: "fc-38",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿Qué antiarrítmico puede utilizarse con seguridad para mantener el ritmo sinusal en un paciente con FA y FEVI 25 %?",
      answer: "Únicamente Amiodarona. Los fármacos de clase Ic (Propafenona, Flecainida) y la Dronedarona están prohibidos en presencia de disfunción ventricular o cardiopatía isquémica.",
      highYield: "Cardiopatía estructural o FEVI deprimida = exclusivamente Amiodarona."
    },
    {
      id: "fc-39",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Cuál es la secuencia de manejo de una TSV regular de QRS estrecho (AVNRT)?",
      answer: "1. Maniobras vagales (Valsalva modificada), 2. Bolo rápido i.v. de Adenosina (6 mg -> 12 mg con lavado rápido de suero), 3. Verapamilo/Metoprolol i.v., 4. Cardioversión eléctrica si inestabilidad.",
      highYield: "AVNRT: Maniobras vagales -> Adenosina 6 mg i.v. -> 12 mg i.v."
    },
    {
      id: "fc-40",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Por qué están prohibidos los frenadores del nodo AV (Verapamilo, Adenosina, Digoxina) en la FA con WPW?",
      answer: "Bloquear el nodo AV desvía todos los impulsos auriculares a través de la vía accesoria de conducción rápida, provocando frecuencias ventriculares superiores a 300 lpm y parada por fibrilación ventricular.",
      highYield: "FA + WPW: ¡Frenadores del nodo AV prohibidos! Tratamiento = cardioversión / Ibutilida."
    },
    {
      id: "fc-41",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Cuál es el patrón EKG del bloqueo AV de 2.º grado Mobitz II y cuál es su tratamiento?",
      answer: "Intervalo PR constante con fallo súbito e inesperado de conducción del complejo QRS. Tratamiento: indicación formal de implante de marcapasos permanente por alto riesgo de progresión a bloqueo completo.",
      highYield: "Mobitz II = PR constante + onda P bloqueada -> requiere marcapasos definitivo."
    },
    {
      id: "fc-42",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Qué características en el EKG definen un bloqueo completo de rama izquierda (BRI / LBBB)?",
      answer: "Anchura del QRS ≥ 120 ms, onda S ancha y profunda en V1-V2, onda R ancha y mellada (patrón en M) en derivaciones I, aVL, V5-V6 y desaparición de q septal en I, V5-V6.",
      highYield: "BRI: QRS ≥ 120 ms, patrón en M en V5-V6 y S ancha en V1."
    },
    {
      id: "fc-43",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Cuál es el fármaco de primera elección en la taquicardia ventricular polimórfica Torsades de Pointes?",
      answer: "Sulfato de Magnesio 2g en bolo intravenoso lento. Suspender inmediatamente fármacos que alargan el QT y corregir la hipopotasemia.",
      highYield: "Torsades de Pointes = ¡Sulfato de Magnesio i.v.!"
    },

    // --- Valvulopatías (44-48) ---
    {
      id: "fc-44",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Cuáles son los criterios ecocardiográficos de estenosis aórtica grave?",
      answer: "Área valvular aórtica (AVA) < 1.0 cm² (o indexada < 0.6 cm²/m²), gradiente de presión medio ≥ 40 mmHg y velocidad transvalvular máxima Vmax ≥ 4.0 m/s.",
      highYield: "EA grave: AVA < 1.0 cm², gradiente medio ≥ 40 mmHg, Vmax ≥ 4 m/s."
    },
    {
      id: "fc-45",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Cuál es la tríada clásica de síntomas de la estenosis aórtica?",
      answer: "1. Disnea de esfuerzo (insuficiencia cardíaca), 2. Angina de pecho, 3. Síncope de esfuerzo.",
      highYield: "Tríada de estenosis aórtica: Disnea + Angina + Síncope."
    },
    {
      id: "fc-46",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Cuándo se prefiere TAVI frente a recambio quirúrgico (SAVR) en estenosis aórtica?",
      answer: "TAVI se prefiere en pacientes de edad ≥ 75 años o con alto riesgo quirúrgico. SAVR en menores de 75 años con bajo riesgo o necesidad simultánea de bypass coronario.",
      highYield: "TAVI: edad ≥ 75 años / alto riesgo. SAVR: < 75 años / bajo riesgo."
    },
    {
      id: "fc-47",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Cuál es el hallazgo auscultatorio clásico de la insuficiencia mitral?",
      answer: "Soplo holosistólico regurgitante en el ápex con irradiación a la axila izquierda, a menudo acompañado de primer tono disminuido y presencia de tercer tono.",
      highYield: "Insuficiencia mitral: Soplo holosistólico en ápex con irradiación a axila."
    },
    {
      id: "fc-48",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Por qué está contraindicado el balón de contrapulsación intraaórtico (BCIA) en la insuficiencia aórtica?",
      answer: "El inflado del balón durante la diástole incrementa masivamente el reflujo regurgitante hacia el ventrículo izquierdo, provocando una sobrecarga diastólica fatal y edema de pulmón.",
      highYield: "¡El balón intraaórtico está formalmente prohibido en insuficiencia aórtica!"
    },

    // --- Miocardiopatías (49-53) ---
    {
      id: "fc-49",
      moduleId: "kmp",
      category: "Miocardiopatías",
      question: "¿Qué es el fenómeno SAM en la miocardiopatía hipertrófica (MCHO)?",
      answer: "Systolic Anterior Motion – movimiento sistólico anterior del velo mitral que es succionado hacia el tracto de salida del VI (TSVI), originando obstrucción dinámica al flujo e insuficiencia mitral.",
      highYield: "SAM = succión sistólica del velo mitral hacia el TSVI en la MCHO."
    },
    {
      id: "fc-50",
      moduleId: "kmp",
      category: "Miocardiopatías",
      question: "¿Qué fármacos están formalmente contraindicados en la MCHO?",
      answer: "Inotrópicos positivos (Digoxina), vasodilatadores y nitratos, y diuréticos a dosis altas (reducen el volumen ventricular y aumentan el gradiente obstructivo).",
      highYield: "MCHO: ¡Prohibidos Digoxina, Nitratos y vasodilatadores!"
    },
    {
      id: "fc-51",
      moduleId: "kmp",
      category: "Miocardiopatías",
      question: "¿Qué es el Mavacamten y cuál es su mecanismo de acción?",
      answer: "El primer inhibidor alostérico selectivo de la miosina cardíaca. Disminuye la formación de puentes actina-miosina, reduciendo la hipercontractilidad y aboliendo la obstrucción del TSVI en la MCHO.",
      highYield: "Mavacamten = inhibidor selectivo de miosina para MCHO."
    },
    {
      id: "fc-52",
      moduleId: "kmp",
      category: "Miocardiopatías",
      question: "¿Cuál es el hallazgo característico de la miocardiopatía de Takotsubo en coronariografía y ecocardiograma?",
      answer: "En coronariografía las arterias no muestran lesiones obstructivas (< 50 %). En ecocardiograma se observa el característico abombamiento apical (apical ballooning) con acinesia del ápex e hipercontractilidad basal.",
      highYield: "Takotsubo: Abombamiento apical + coronarias sin lesiones obstructivas."
    },
    {
      id: "fc-53",
      moduleId: "kmp",
      category: "Miocardiopatías",
      question: "¿Qué hallazgos en EKG y ecocardiograma sugieren amiloidosis cardíaca?",
      answer: "Complejos QRS de bajo voltaje en el EKG en claro contraste con un miocardio masivamente engrosado e hiperrefringente ('sparkling') con severa disfunción diastólica en ecocardiograma.",
      highYield: "Amiloidosis: Bajo voltaje en EKG + engrosamiento ventricular en ECO."
    },

    // --- Inflamación y Pericardio (54-58) ---
    {
      id: "fc-54",
      moduleId: "zanety",
      category: "Pericarditis y Endocarditis",
      question: "¿Cuáles son los 2 criterios mayores de Duke para el diagnóstico de endocarditis infecciosa?",
      answer: "1. Hemocultivos positivos (microorganismos típicos en al menos 2 tomas separadas). 2. Evidencia de afectación endocárdica en imagen (vegetación, absceso o nueva dehiscencia protésica en ETE/ETT).",
      highYield: "Criterios mayores de Duke: Hemocultivos típicos + Vegetaciones en ECO."
    },
    {
      id: "fc-55",
      moduleId: "zanety",
      category: "Pericarditis y Endocarditis",
      question: "¿Cuáles son los componentes de la tríada de Beck en el taponamiento cardíaco?",
      answer: "1. Hipotensión arterial, 2. Ingurgitación de venas yugulares, 3. Tonos cardíacos apagados o disminuidos.",
      highYield: "Tríada de Beck: Hipotensión + Ingurgitación yugular + Tonos apagados."
    },
    {
      id: "fc-56",
      moduleId: "zanety",
      category: "Pericarditis y Endocarditis",
      question: "¿Qué es el pulso paradójico y en qué patología es típico?",
      answer: "Una disminución de la presión arterial sistólica superior a 10 mmHg durante la inspiración tranquila. Es el signo clásico del taponamiento cardíaco (y del asma grave o pericarditis constrictiva).",
      highYield: "Pulso paradójico = caída de PAS > 10 mmHg en inspiración en taponamiento."
    },
    {
      id: "fc-57",
      moduleId: "zanety",
      category: "Pericarditis y Endocarditis",
      question: "¿Cuál es el tratamiento médico de primera línea en la pericarditis aguda?",
      answer: "AINEs a dosis plenas (ej. Ibuprofeno 600 mg cada 8 horas o Aspirina) + Colchicina (0.5 mg al día durante 3 meses para prevenir recurrencias).",
      highYield: "Pericarditis aguda: AINEs + Colchicina durante 3 meses."
    },
    {
      id: "fc-58",
      moduleId: "zanety",
      category: "Pericarditis y Endocarditis",
      question: "¿En qué pacientes está indicada la profilaxis antibiótica de endocarditis infecciosa?",
      answer: "Únicamente en pacientes de alto riesgo (portadores de prótesis valvulares, episodio previo de EI, cardiopatías congénitas cianógenas) y exclusivamente en procedimientos dentales que manipulen la encía.",
      highYield: "Profilaxis EI: Solo prótesis/EI previa + procedimientos odontológicos."
    },

    // --- TEP, EKG & Varios (59-115) ---
    {
      id: "fc-59",
      moduleId: "pe",
      category: "Embolia Pulmonar",
      question: "¿Cuándo está indicada la fibrinólisis sistémica inmediata en el tromboembolismo pulmonar?",
      answer: "Únicamente en el TEP de alto riesgo (TEP masivo) que cursa con inestabilidad hemodinámica, shock cardiogénico o hipotensión persistente (PAS < 90 mmHg).",
      highYield: "Fibrinólisis en TEP solo ante hipotensión persistente o shock (Alto Riesgo)."
    },
    {
      id: "fc-60",
      moduleId: "pe",
      category: "Embolia Pulmonar",
      question: "¿Qué representa el patrón S1Q3T3 en el EKG?",
      answer: "Onda S en derivación I, onda Q en derivación III y onda T negativa en derivación III. Signo clásico de sobrecarga aguda del ventrículo derecho (cor pulmonale agudo / TEP masivo).",
      highYield: "S1Q3T3 = sobrecarga aguda de cavidades derechas en TEP."
    },
    {
      id: "fc-61",
      moduleId: "pe",
      category: "Embolia Pulmonar",
      question: "¿Cuál es la definición hemodinámica de hipertensión pulmonar por cateterismo derecho?",
      answer: "Presión media en arteria pulmonar en reposo (mPAP) > 20 mmHg.",
      highYield: "Hipertensión pulmonar: mPAP > 20 mmHg."
    },
    {
      id: "fc-62",
      moduleId: "ekg",
      category: "Diagnóstico por EKG",
      question: "¿Qué derivaciones del EKG exploran las caras inferior, anterior y lateral del VI?",
      answer: "Cara inferior: II, III, aVF (ACD). Cara anterior y septal: V1–V4 (DA). Cara lateral: I, aVL, V5–V6 (ACx / DA).",
      highYield: "Inferior: II, III, aVF; Anterior: V1-V4; Lateral: I, aVL, V5-V6."
    },
    {
      id: "fc-63",
      moduleId: "ekg",
      category: "Diagnóstico por EKG",
      question: "¿Qué alteraciones electrocardiográficas produce la hiperpotasemia grave?",
      answer: "1. Ondas T altas, picudas y simétricas ('en tienda de campaña'), 2. Aplanamiento y desaparición de ondas P con PR largo, 3. QRS ancho que evoluciona a onda sinusoidal y asistolia.",
      highYield: "Hiperpotasemia: T picuda -> pérdida de P -> QRS ancho -> parada."
    },
    {
      id: "fc-64",
      moduleId: "ekg",
      category: "Diagnóstico por EKG",
      question: "¿Por qué se administra Gluconato Cálcico i.v. ante una hiperpotasemia grave con cambios en el EKG?",
      answer: "El calcio no reduce el potasio sérico, pero estabiliza de inmediato el potencial de membrana del miocardiocito, protegiendo al corazón de fibrilación ventricular y asistolia en 1–3 minutos.",
      highYield: "Calcio i.v. = estabilización inmediata de membrana frente a arritmias mortales."
    },
    {
      id: "fc-65",
      moduleId: "ccs",
      category: "Síndromes Coronarios Crónicos",
      question: "¿Cuál es la prueba no invasiva de primera línea para descartar coronariopatía en probabilidad pre-test baja/intermedia?",
      answer: "La angio-TC coronaria (CCTA), debido a su excelente valor predictivo negativo (> 99 %).",
      highYield: "PTP baja/intermedia = Angio-TC coronaria (CCTA)."
    },
    {
      id: "fc-66",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Qué es el síndrome de Wellens en el EKG y qué indica?",
      answer: "Ondas T bifásicas o profundamente invertidas y simétricas en V2–V3 sin ondas Q patológicas y con troponina normal o ligeramente elevada. Indica estenosis crítica proximal de la arteria descendente anterior (DA) con riesgo inminente de infarto anterior masivo.",
      highYield: "Síndrome de Wellens: Ondas T invertidas/bifásicas en V2-V3 = estenosis crítica de la DA."
    },
    {
      id: "fc-67",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Qué es el patrón electrocardiográfico de de Winter?",
      answer: "Descenso del ST en el punto J de 1–3 mm en V1–V6 que continúa con ondas T altas, simétricas y prominentes, acompañado de elevación del ST en aVR. Es un equivalente a SCACEST por oclusión aguda de la DA proximal sin elevación típica del ST.",
      highYield: "Patrón de de Winter: Descenso de punto J + T alta simétrica = equivalente a SCACEST."
    },
    {
      id: "fc-68",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuáles son las 3 complicaciones mecánicas del infarto de miocardio?",
      answer: "1. Rotura de pared libre del VI (taponamiento cardíaco, disociación electromecánica), 2. Rotura del septo interventricular (defecto CIV, soplo holosistólico rudo), 3. Rotura de músculo papilar (insuficiencia mitral masiva aguda, edema agudo de pulmón, shock).",
      highYield: "Complicaciones mecánicas del IM: Rotura de pared libre, de septo o de papilar."
    },
    {
      id: "fc-69",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuál es la clasificación de Killip en el infarto agudo de miocardio?",
      answer: "Killip I: sin datos de insuficiencia cardíaca (mortalidad ~5 %). Killip II: estertores basales (< 50 % de campos pulmonares) o 3.er tono. Killip III: edema pulmonar franco (> 50 % de campos). Killip IV: shock cardiogénico (mortalidad > 50 %).",
      highYield: "Killip I (sin congestión), II (crepitantes basales), III (edema pulmonar), IV (shock)."
    },
    {
      id: "fc-70",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Por qué están contraindicados los nitratos en el infarto de ventrículo derecho?",
      answer: "El ventrículo derecho precisa una precarga elevada para mantener el llenado. La venodilatación por nitratos reduce bruscamente el retorno venoso, desplomando el gasto cardíaco y causando hipotensión arterial profunda.",
      highYield: "Infarto de VD: ¡Prohibidos nitratos y diuréticos! El tratamiento es volumen."
    },
    {
      id: "fc-71",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cuáles son los 4 betabloqueantes con beneficio demostrado en reducción de mortalidad en la IC-FEr?",
      answer: "1. Bisoprolol, 2. Succinato de Metoprolol (de liberación prolongada), 3. Carvedilol, 4. Nebivolol.",
      highYield: "Betabloqueantes en IC: Bisoprolol, Succinato de Metoprolol, Carvedilol, Nebivolol."
    },
    {
      id: "fc-72",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cómo actúa el Sacubitrilo en la combinación Sacubitrilo/Valsartán (ARNI)?",
      answer: "Inhibe la enzima neprilisina, encargada de degradar los péptidos natriuréticos (ANP, BNP, CNP) y la bradicinina. Incrementa sus niveles promoviendo vasodilatación, natriuresis y antifibrosis miocárdica.",
      highYield: "Sacubitrilo = inhibidor de neprilisina -> eleva péptidos natriuréticos protectores."
    },
    {
      id: "fc-73",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cómo afecta el tratamiento con ARNI a las determinaciones de BNP y NT-proBNP?",
      answer: "El sacubitrilo impide la degradación del BNP, por lo que su concentración plasmática se eleva paradójicamente y no sirve para monitorizar. El NT-proBNP no es sustrato de neprilisina, desciende tras el tratamiento y es el biomarcador fiable.",
      highYield: "Bajo tratamiento con ARNI se monitoriza el NT-proBNP, ¡nunca el BNP aislado!"
    },
    {
      id: "fc-74",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Cuál es el mecanismo de acción cardioprotector de los inhibidores de SGLT2 (gliflozinas)?",
      answer: "Aumentan la glucosuria y la natriuresis osmótica sin estimular el sistema simpático, optimizan el metabolismo energético del miocardio (uso de cuerpos cetónicos), reducen el edema intersticial y la presión intraglomerular renal.",
      highYield: "iSGLT2: Natriuresis osmótica, energía miocárdica cetónica y nefroprotección."
    },
    {
      id: "fc-75",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Qué es el Vericiguat y cuándo se considera en la insuficiencia cardíaca?",
      answer: "Es un estimulador directo de la guanilato ciclasa soluble (GCs). Incrementa la síntesis de GMPc restaurando la vía del óxido nítrico. Se considera como fármaco adicional (AMT) en IC-FEr tras un ingreso reciente por descompensación pese a FMT.",
      highYield: "Vericiguat = estimulador de GCs en IC-FEr con descompensaciones recientes."
    },
    {
      id: "fc-76",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Cuáles son los umbrales diagnósticos de hipertensión según MAPA de 24h (ABPM) y automedida domiciliaria (AMPA/HBPM)?",
      answer: "En consulta: ≥ 140/90 mmHg. Domicilio (AMPA media): ≥ 135/85 mmHg. MAPA de 24h: media de 24 horas ≥ 130/80 mmHg (media diurna ≥ 135/85, media nocturna ≥ 120/70 mmHg).",
      highYield: "Umbrales HTA: Consulta 140/90; Domicilio 135/85; MAPA 24h 130/80."
    },
    {
      id: "fc-77",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Qué es la hipertensión de bata blanca y qué es la hipertensión enmascarada?",
      answer: "Bata blanca: PA elevada en consulta médica pero normal en domicilio y en MAPA. Enmascarada: PA normal en la consulta médica pero elevada en domicilio o en MAPA (¡asociada a elevado riesgo cardiovascular!).",
      highYield: "HTA enmascarada = normal en consulta, alta en domicilio -> alto riesgo CV."
    },
    {
      id: "fc-78",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Cuál es el objetivo de PA y FC en la disección aórtica aguda?",
      answer: "Descenso inmediato e intensivo de la PAS por debajo de 120 mmHg (rango 100-120 mmHg) y de la frecuencia cardíaca por debajo de 60 lpm en los primeros 20 minutos. Fármaco de elección: betabloqueante i.v. (Labetalol / Esmolol) + vasodilatador i.v.",
      highYield: "Disección aórtica: PAS < 120 mmHg y FC < 60 lpm en < 20 min (Labetalol i.v.)."
    },
    {
      id: "fc-79",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿Cuáles son las 4 formas de fibrilación auricular según su patrón temporal?",
      answer: "1. Paroxística (autolimitada en < 7 días, habitualmente en 48h), 2. Persistente (dura > 7 días o precisa cardioversión), 3. Persistente de larga evolución (> 1 año adoptando estrategia de control del ritmo), 4. Permanente (asumida por paciente y médico sin intención de cardiovertir).",
      highYield: "FA: Paroxística (<7d), Persistente (>7d), Persistente larga evolución (>1a), Permanente."
    },
    {
      id: "fc-80",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿Qué es la escala HAS-BLED y cuál es su finalidad?",
      answer: "Evalúa el riesgo de hemorragia en pacientes anticoagulados (HTA, fallo renal/hepático, ictus, sangrado previo, INR lábil, edad > 65, fármacos/alcohol). Una puntuación ≥ 3 indica alto riesgo. ¡No se usa para suspender la anticoagulación, sino para corregir factores de riesgo modificables!",
      highYield: "HAS-BLED ≥ 3 = alto riesgo hemorrágico -> corregir causas modificables."
    },
    {
      id: "fc-81",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿En qué consiste la estrategia 'Pill-in-the-pocket' en la fibrilación auricular?",
      answer: "Autoadministración oral de una dosis única de antiarrítmico (Propafenona 450–600 mg o Flecainida 200–300 mg) por el propio paciente al inicio de un episodio de FA paroxística. Requisito: ausencia de cardiopatía estructural y seguridad testada previamente en medio hospitalario.",
      highYield: "Pill-in-the-pocket = dosis única de Propafenona/Flecainida sin cardiopatía estructural."
    },
    {
      id: "fc-82",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿Cuándo está indicado el cierre percutáneo de orejuela izquierda (LAA)?",
      answer: "En pacientes con fibrilación auricular con alto riesgo tromboembólico de ictus que presentan una contraindicación absoluta, definitiva y permanente para la anticoagulación oral a largo plazo (ej. hemorragia intracraneal mayor espontánea previa).",
      highYield: "Cierre de orejuela = alto riesgo de ictus + contraindicación absoluta de anticoagulación."
    },
    {
      id: "fc-83",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Qué caracteriza al flutter auricular en el EKG y cuál es su tratamiento curativo?",
      answer: "Actividad auricular regular en 'dientes de sierra' (ondas F) a 250–350 lpm, con conducción AV habitualmente 2:1 (FC ventricular ~150 lpm). El tratamiento curativo de elección es la ablación por catéter por radiofrecuencia del istmo cavotricuspídeo (ablación del ICT con éxito > 95 %).",
      highYield: "Flutter auricular: Dientes de sierra, conducción 2:1 -> ablación del istmo (ICT)."
    },
    {
      id: "fc-84",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Cuáles son los criterios de Brugada para diferenciar Taquicardia Ventricular (TV) de TSV con aberrancia?",
      answer: "1. Ausencia de complejo RS en todas las derivaciones precordiales (concordancia), 2. Intervalo RS > 100 ms en alguna derivación precordial, 3. Presencia de disociación auriculoventricular, 4. Criterios morfológicos clásicos de TV en V1-V2 y V6.",
      highYield: "Criterios de Brugada: Disociación AV, concordancia precordial y RS > 100 ms indican TV."
    },
    {
      id: "fc-85",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Qué es el síndrome de Brugada y cuál es su patrón EKG característico?",
      answer: "Canalopatía genética hereditaria (mutación en canal de sodio SCN5A) asociada a muerte súbita arritmogénica. Patrón Tipo 1: elevación del punto J ≥ 2 mm con segmento ST abovedado (coved-type) y onda T negativa en V1–V2 (desencadenado por fiebre o test de ajmalina/flecainida).",
      highYield: "Brugada: Elevación abovedada del ST en V1-V2 + mutación SCN5A -> riesgo de FV."
    },
    {
      id: "fc-86",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Cuál es la diferencia entre un choque monofásico y uno bifásico en desfibrilación?",
      answer: "El choque monofásico emite corriente en un solo sentido (precisa energía de 360 J). El choque bifásico alterna la polaridad de la corriente, es más eficaz a menor energía (150–200 J) y genera menor daño miocárdico.",
      highYield: "Desfibrilador bifásico: energía estándar 150–200 J."
    },
    {
      id: "fc-87",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Qué es el síndrome de Heyde?",
      answer: "La asociación de estenosis aórtica grave calcificada y hemorragia digestiva por angiodisplasias intestinales, debida a un déficit adquirido de factor von Willebrand (el estrés de cizallamiento a través de la válvula estenótica fragmenta los multímeros de vWF). ¡Tras el recambio valvular el sangrado cesa!",
      highYield: "Síndrome de Heyde = Estenosis aórtica + Hemorragia digestiva por angiodisplasias."
    },
    {
      id: "fc-88",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Qué es el prolapso de la válvula mitral (enfermedad de Barlow)?",
      answer: "El desplazamiento sistólico de uno o ambos velos mitrales > 2 mm hacia la aurícula izquierda por encima del plano del anillo mitral debido a degeneración mixomatosa. Auscultación: clic mesosistólico seguido de soplo telesistólico.",
      highYield: "Prolapso mitral: Clic mesosistólico + soplo telesistólico."
    },
    {
      id: "fc-89",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Cuáles son los signos clínicos y auscultatorios de la insuficiencia tricuspídea grave?",
      answer: "Ingurgitación yugular con onda V prominente y pulso sistólico venoso, hepatomegalia pulsátil, edemas periféricos y ascitis. Auscultación: soplo holosistólico en foco tricuspídeo que aumenta durante la inspiración profunda (signo de Rivero-Carvallo).",
      highYield: "Insuficiencia tricuspídea: Soplo que aumenta en inspiración (Rivero-Carvallo)."
    },
    {
      id: "fc-90",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Qué es el MitraClip (TEER - Transcatheter Edge-to-Edge Repair)?",
      answer: "Técnica percutánea transcatéter de reparación borde a borde mediante un clip que une los velos anterior y posterior de la válvula mitral a través de acceso venoso femoral y punción transeptal. Indicado en insuficiencia mitral grave con alto riesgo quirúrgico.",
      highYield: "MitraClip = reparación mitral percutánea borde a borde en alto riesgo quirúrgico."
    },
    {
      id: "fc-91",
      moduleId: "kmp",
      category: "Miocardiopatías",
      question: "¿Cuáles son las causas principales de miocardiopatía dilatada (MCD)?",
      answer: "Genéticas (hasta 40 %, especialmente mutación en titina - TTN y lámina A/C - LMNA), post-miocarditis autoinmune, tóxicos (alcohol, quimioterapia con antraciclinas, cocaína) y miocardiopatía periparto.",
      highYield: "MCD: Mutaciones en titina (TTN), post-miocarditis, alcohol y antraciclinas."
    },
    {
      id: "fc-92",
      moduleId: "kmp",
      category: "Miocardiopatías",
      question: "¿Por qué es tan temida la mutación en lámina A/C (LMNA) en la miocardiopatía dilatada?",
      answer: "Porque confiere un riesgo muy elevado de muerte súbita por arritmias ventriculares malignas y bloqueos de conducción AV avanzados, incluso con fracciones de eyección solo ligeramente deprimidas. ¡Es indicación precoz de DAI!",
      highYield: "Mutación LMNA = altísimo riesgo arritmogénico -> indicación precoz de DAI."
    },
    {
      id: "fc-93",
      moduleId: "kmp",
      category: "Miocardiopatías",
      question: "¿Cuáles son los 2 tipos principales de amiloidosis cardíaca y su tratamiento?",
      answer: "1. Amiloidosis AL (por cadenas ligeras en discrasias de células plasmáticas / mieloma -> quimioterapia / daratumumab). 2. Amiloidosis ATTR (por transtiretina senil wild-type o hereditaria -> estabilizador del tetrámero Tafamidis).",
      highYield: "Amiloidosis: AL (cadenas ligeras -> hematología) vs. ATTR (Tafamidis)."
    },
    {
      id: "fc-94",
      moduleId: "zanety",
      category: "Pericarditis y Endocarditis",
      question: "¿Qué son los nódulos de Osler, las lesiones de Janeway y las manchas de Roth?",
      answer: "Estigmas periféricos de endocarditis infecciosa: Nódulos de Osler = nódulos eritematosos dolorosos en pulpejos de dedos (inmunocomplejos). Lesiones de Janeway = máculas hemorrágicas indoloras en palmas y plantas (émbolos sépticos). Manchas de Roth = hemorragias retinianas con centro pálido.",
      highYield: "Nódulos de Osler (dolorosos), Lesiones de Janeway (indoloras), Manchas de Roth (retina)."
    },
    {
      id: "fc-95",
      moduleId: "zanety",
      category: "Pericarditis y Endocarditis",
      question: "¿Qué microorganismos componen el grupo HACEK?",
      answer: "Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella y Kingella. Bacilos gramnegativos que causan endocarditis subaguda con hemocultivos de crecimiento lento que precisan incubación prolongada.",
      highYield: "HACEK = Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella, Kingella."
    },
    {
      id: "fc-96",
      moduleId: "zanety",
      category: "Pericarditis y Endocarditis",
      question: "¿Qué es la pericarditis constrictiva y cuáles son sus signos hemodinámicos?",
      answer: "Engrosamiento fibrótico y calcificación crónica del pericardio que impide rígidamente el llenado diastólico de las cavidades cardíacas. Signos: Signo de Kussmaul (aumento paradójico de la presión venosa yugular en inspiración), golpe pericárdico (pericardial knock) en protodiástole y calcificación en radiografía/TC.",
      highYield: "Pericarditis constrictiva: Signo de Kussmaul + calcificación pericárdica en imagen."
    },
    {
      id: "fc-97",
      moduleId: "pe",
      category: "Embolia Pulmonar",
      question: "¿Cómo se define la escala PESI simplificada (sPESI) en la embolia pulmonar?",
      answer: "Consta de 6 variables (1 punto cada una): Edad > 80 años, Cáncer activo, Enfermedad cardiopulmonar crónica, FC ≥ 110 lpm, PAS < 100 mmHg, SpO2 < 90 %. Puntuación 0 = bajo riesgo (mortalidad a 30 días del 1 %); Puntuación ≥ 1 = riesgo aumentado.",
      highYield: "sPESI = 0 puntos define un TEP de bajo riesgo candidato a manejo ambulatorio."
    },
    {
      id: "fc-98",
      moduleId: "pe",
      category: "Embolia Pulmonar",
      question: "¿Qué es el signo de McConnell en ecocardiografía?",
      answer: "Acinesia de la pared libre del ventrículo derecho con contractilidad apical preservada y normocinética o hipercinética. Es un hallazgo muy específico de tromboembolismo pulmonar agudo.",
      highYield: "Signo de McConnell = acinesia de pared libre de VD con ápex preservado en TEP."
    },
    {
      id: "fc-99",
      moduleId: "pe",
      category: "Embolia Pulmonar",
      question: "¿Qué es la HPTEC (CTEPH) y cuál es su tratamiento curativo de elección?",
      answer: "Hipertensión Pulmonar Tromboembólica Crónica (Grupo 4). Obstrucción y remodelado fibrótico de arterias pulmonares tras episodios embólicos previos. El tratamiento curativo de elección es la endarterectomía pulmonar quirúrgica (PEA) con parada circulatoria e hipotermia profunda.",
      highYield: "HPTEC: Secuela de TEP -> curable mediante endarterectomía pulmonar (PEA)."
    },
    {
      id: "fc-100",
      moduleId: "ccs",
      category: "Síndromes Coronarios Crónicos",
      question: "¿Qué es la reserva fraccional de flujo (FFR / iFR) en coronariografía?",
      answer: "Medición fisiológica invasiva del gradiente de presión a través de una estenosis coronaria en hiperemia farmacológica máxima con adenosina. Un valor de FFR ≤ 0.80 (o iFR ≤ 0.89) demuestra significación hemodinámica e isquemia, indicando revascularización con stent.",
      highYield: "FFR ≤ 0.80 demuestra isquemia funcional e indica implante de stent."
    },
    {
      id: "fc-101",
      moduleId: "ccs",
      category: "Síndromes Coronarios Crónicos",
      question: "¿Qué es la angina vasoespástica (de Prinzmetal)?",
      answer: "Espasmo transmural agudo de una arteria coronaria epicárdica que causa isquemia en reposo (típicamente nocturna y matutina) con elevación transitoria del ST en el EKG. Fármacos de elección: antagonistas del calcio y nitratos. ¡Los betabloqueantes están CONTRAINDICADOS por empeorar el vasoespasmo alfa-adrenérgico!",
      highYield: "Angina de Prinzmetal: Vasoespasmo, elevación del ST -> Calcioantagonistas, ¡prohibidos betabloqueantes!"
    },
    {
      id: "fc-102",
      moduleId: "ekg",
      category: "Diagnóstico por EKG",
      question: "¿Qué es el síndrome de QT largo (SQTL) y qué valores definen un QTc prolongado?",
      answer: "Trastorno de la repolarización ventricular con riesgo de Torsades de Pointes y muerte súbita. Intervalo QTc corregido (fórmula de Bazett): QTc > 450 ms en varones y > 460 ms en mujeres (cifras > 500 ms confieren riesgo extremo de arritmias ventriculares mortales).",
      highYield: "SQTL: QTc > 450/460 ms (riesgo crítico de Torsades de Pointes con QTc > 500 ms)."
    },
    {
      id: "fc-103",
      moduleId: "ekg",
      category: "Diagnóstico por EKG",
      question: "¿Qué criterios electrocardiográficos definen la hipertrofia ventricular izquierda (Índice de Sokolow-Lyon)?",
      answer: "Índice de Sokolow-Lyon: onda S en V1 + onda R en V5 o V6 > 35 mm (3.5 mV). Índice de Cornell: onda R en aVL + onda S en V3 > 28 mm en varones o > 20 mm en mujeres.",
      highYield: "Sokolow-Lyon para HVI: S en V1 + R en V5/V6 > 35 mm."
    },
    {
      id: "fc-104",
      moduleId: "ekg",
      category: "Diagnóstico por EKG",
      question: "¿Qué alteraciones electrocardiográficas caracterizan la intoxicación por Digoxina?",
      answer: "1. Descenso del ST en cubeta cóncava (patrón en 'bigote de Salvador Dalí'), 2. Acortamiento del QT, 3. Aplanamiento/inversión de la onda T, 4. Arritmias: extrasistolia ventricular bigeminada, taquicardia de la unión, taquicardia auricular con bloqueo AV.",
      highYield: "Digoxina: Descenso de ST en cubeta + QT corto + bigeminismo ventricular."
    },
    {
      id: "fc-105",
      moduleId: "ekg",
      category: "Diagnóstico por EKG",
      question: "¿Qué diferencia el patrón de repolarización precoz de la onda de Osborn?",
      answer: "La repolarización precoz es una elevación benigna del punto J con muesca (notch) y ST cóncavo frecuente en deportistas jóvenes. La onda de Osborn (onda J) es una deflexión positiva prominente en la unión QRS-ST patognomónica de la hipotermia grave (temperatura corporal < 32 °C).",
      highYield: "Onda de Osborn (onda J) = signo patognomónico de hipotermia grave."
    },
    {
      id: "fc-106",
      moduleId: "aks",
      category: "Síndromes Coronarios Agudos",
      question: "¿Cuáles son las contraindicaciones absolutas de la fibrinólisis en el SCACEST?",
      answer: "Hemorragia intracraneal previa en cualquier momento, ictus isquémico en los últimos 6 meses, malformación arteriovenosa o neoplasia del SNC, traumatismo craneal o cirugía mayor en las últimas 3 semanas, sangrado gastrointestinal activo en el último mes, sospecha de disección aórtica.",
      highYield: "Contraindicaciones de fibrinólisis: Ictus hemorrágico previo, tumor SNC, sangrado digestivo activo, disección."
    },
    {
      id: "fc-107",
      moduleId: "hf",
      category: "Insuficiencia Cardíaca",
      question: "¿Qué es la Finerenona y cuál es su papel en nefrología y cardiología?",
      answer: "Un antagonista no esteroideo selectivo del receptor mineralocorticoide (nsMRA). En los ensayos FIDELIO y FIGARO demostró reducir significativamente la progresión renal y los eventos cardiovasculares en pacientes con enfermedad renal crónica y diabetes mellitus tipo 2.",
      highYield: "Finerenona = ARM no esteroideo con potente nefro- y cardioprotección."
    },
    {
      id: "fc-108",
      moduleId: "htn",
      category: "Hipertensión Arterial",
      question: "¿Qué antihipertensivos son seguros en el embarazo y cuáles están terminantemente contraindicados por teratogenia?",
      answer: "Seguros: Metildopa, Labetalol, Nifedipino (de liberación prolongada). Teratogénicos y prohibidos (Clase III): IECAs, ARA-II e inhibidores directos de la renina (causan agenesia tubular renal, oligohidramnios y muerte fetal).",
      highYield: "Embarazo: Metildopa / Labetalol. ¡IECAs y ARA-II formalmente contraindicados!"
    },
    {
      id: "fc-109",
      moduleId: "afib",
      category: "Fibrilación Auricular",
      question: "¿Qué antídotos específicos revierten el efecto del dabigatrán y de los inhibidores del factor Xa (apixabán/rivaroxabán)?",
      answer: "Dabigatrán -> Idarucizumab (Praxbind, fragmento de anticuerpo monoclonal). Anti-Xa (Apixabán, Rivaroxabán) -> Andexanet alfa (factor Xa recombinante inactivado como señuelo) o concentrado de complejo protrombínico (CCP/PCC).",
      highYield: "Antídotos: Dabigatrán -> Idarucizumab; Anti-Xa -> Andexanet alfa / CCP."
    },
    {
      id: "fc-110",
      moduleId: "arytmie",
      category: "Otras Arritmias",
      question: "¿Cuáles son las 4H y las 4T de las causas reversibles de parada cardiorrespiratoria?",
      answer: "4H: Hipoxia, Hipovolemia, Hiper/hipopotasemia y alteraciones metabólicas, Hipotermia. 4T: Neumotórax a Tensión, Taponamiento cardíaco, Tóxicos (intoxicaciones), Trombosis (coronaria o tromboembolismo pulmonar).",
      highYield: "Causas reversibles de PCR: 4H (Hipoxia, Hipovolemia, Hipo/hiperpotasemia, Hipotermia) + 4T (Tensión neumotórax, Taponamiento, Tóxicos, Trombosis)."
    },
    {
      id: "fc-111",
      moduleId: "chlopne",
      category: "Valvulopatías",
      question: "¿Qué es el soplo de Austin Flint?",
      answer: "Un soplo mesodiastólico o presistólico suave en el ápex en pacientes con insuficiencia aórtica grave. Se origina cuando el chorro de reflujo regurgitante aórtico choca contra el velo anterior mitral, provocando un cierre funcional parcial y estenosis mitral relativa.",
      highYield: "Soplo de Austin Flint = soplo diastólico apical en insuficiencia aórtica grave."
    },
    {
      id: "fc-112",
      moduleId: "kmp",
      category: "Miocardiopatías",
      question: "¿Qué es la enfermedad de Fabry que causa hipertrofia miocárdica?",
      answer: "Enfermedad de depósito lisosomal ligada al cromosoma X debida al déficit de alfa-galactosidasa A (acumulación de globotriaosilceramida Gb3). Causa hipertrofia concéntrica severa del VI que simula MCH, acompañada de acroparestesias, angioqueratomas e insuficiencia renal.",
      highYield: "Enfermedad de Fabry = déficit de alfa-galactosidasa A -> hipertrofia VI + afección renal."
    },
    {
      id: "fc-113",
      moduleId: "zanety",
      category: "Pericarditis y Endocarditis",
      question: "¿Cuáles son los criterios de Lake Louise en RMC para el diagnóstico de miocarditis?",
      answer: "Evidencia de al menos 1 criterio de edema miocárdico (hiperintensidad en T2 o mapeo T2) Y ADEMÁS al menos 1 criterio de daño celular/necrosis no isquémica (realce tardío de gadolinio - LGE subepicárdico/mesocárdico o mapeo T1).",
      highYield: "Criterios de Lake Louise: Edema en T2 + Realce tardío (LGE) subepicárdico en T1."
    },
    {
      id: "fc-114",
      moduleId: "pe",
      category: "Embolia Pulmonar",
      question: "¿Cuál es la ventana terapéutica para la fibrinólisis en el TEP masivo inestable?",
      answer: "El máximo beneficio se obtiene cuando la fibrinólisis se infunde en las primeras 48 horas desde el debut de los síntomas, pero puede ser eficaz hasta los 14 días en pacientes con trombos persistentes e inestabilidad.",
      highYield: "Fibrinólisis en TEP: Óptima en < 48 horas, valorable hasta 14 días."
    },
    {
      id: "fc-115",
      moduleId: "ccs",
      category: "Síndromes Coronarios Crónicos",
      question: "¿Cuándo está claramente indicada la revascularización coronaria (CABG / ICP) para mejorar el pronóstico y la supervivencia en angina estable?",
      answer: "1. Estenosis del tronco coronario izquierdo (TCI) > 50 %, 2. Estenosis de la descendente anterior (DA) proximal > 50 %, 3. Enfermedad multivaso con fracción de eyección deprimida (FEVI < 35 %), 4. Área extensa de isquemia miocárdica inducible (> 10 % del miocardio ventricular izquierdo).",
      highYield: "Revascularización pronóstica: Tronco común, DA proximal, 3 vasos con baja FEVI o isquemia > 10 %."
    }
  ]
};

// Exportación global y modular
if (typeof window !== "undefined") {
  window.CARDIOLOGY_DATA_ES = CARDIOLOGY_DATA_ES;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CARDIOLOGY_DATA_ES };
}
