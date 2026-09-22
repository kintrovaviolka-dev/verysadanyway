// data_es.js - Base de datos completa de Cardiología para 4.º curso de Medicina General (Versión en Español)
// 12 módulos (Desglose en 3 fases: Teoría/Aprender -> Active Recall/Casos -> Resumen Final/Tahák) + 115 tarjetas de Repetición Espaciada
// Actualizado según las últimas Guías ESC (2023–2026)

const CARDIOLOGY_DATA_ES = {
  modules: [
  {
    "id": "aks",
    "number": 1,
    "title": "Síndromes Coronarios Agudos (SCA)",
    "shortDesc": "SCACEST, SCASEST y angina inestable. Guías ESC 2023, algoritmo hs-cTn 0h/1h, tiempos de coronariografía, estrategia DAPT, pre-tratamiento y prevención secundaria.",
    "icon": "🫀",
    "badge": "Guías ESC 2023",
    "badgeColor": "rose",
    "theory": {
      "banner": {
        "tag": "Cambio de paradigma (Guías ESC 2023)",
        "title": "El SCA como un espectro integrado de enfermedad",
        "text": "Por primera vez, la ESC unifica las recomendaciones de SCACEST y SCASEST en un solo documento común (Guías ESC 2023 de SCA). El síndrome coronario agudo representa un continuum desde la angina inestable y el SCASEST hasta el SCACEST transmural, compartiendo una fisiopatología común (rotura o erosión de placa aterosclerótica con trombosis intraluminal sobreañadida)."
      },
      "sections": [
        {
          "title": "1. Fisiopatología y Triaje: SCACEST vs. SCASEST",
          "color": "rose",
          "content": "\n                            <p class=\"mb-3 text-slate-300 leading-relaxed\">\n                                Fisiopatológicamente distinguimos la <strong>rotura de placa</strong> (más frecuente en varones con capa fibrosa fina y gran núcleo lipídico), la <strong>erosión de placa</strong> (más frecuente en mujeres y fumadores jóvenes con capa fibrosa intacta) y el <strong>nódulo calcificado</strong>.\n                            </p>\n                            <div class=\"grid md:grid-cols-2 gap-3 my-3 text-xs\">\n                                <div class=\"p-3.5 bg-rose-950/40 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400 text-sm\">🚨 SCACEST (Con elevación del ST)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Oclusión transmural completa de una arteria epicárdica por un trombo rojo rico en fibrina. Indicación inmediata de reperfusión (ICP primaria en &lt; 90 min desde el diagnóstico, o &lt; 60 min en centro con hemodinámica).</p>\n                                </div>\n                                <div class=\"p-3.5 bg-amber-950/40 border border-amber-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400 text-sm\">⚠️ SCASEST (Sin elevación del ST)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Oclusión subtotal por un trombo blanco plaquetario o microembolización distal. La distinción entre SCASEST y angina inestable se basa en la positividad de la troponina de alta sensibilidad (hs-cTn).</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Diagnóstico rápido: Algoritmo hs-cTn 0 h / 1 h y 0 h / 2 h",
          "color": "emerald",
          "content": "\n                            <p class=\"mb-3 text-slate-300 text-xs leading-relaxed\">\n                                La base diagnóstica en el SCASEST es la determinación de <strong>troponina cardíaca de alta sensibilidad (hs-cTnI / hs-cTnT)</strong>. La ESC recomienda de forma prioritaria el <strong>algoritmo 0h / 1h</strong> (o 0h / 2h):\n                            </p>\n                            <div class=\"grid md:grid-cols-3 gap-3 my-3\">\n                                <div class=\"bg-emerald-950/40 border border-emerald-500/30 p-3.5 rounded-xl\">\n                                    <div class=\"text-emerald-400 font-bold mb-1 text-xs\">📉 RULE-OUT (Descarte)</div>\n                                    <p class=\"text-[11px] text-slate-300 leading-relaxed\">Valor inicial de hs-cTn <strong>muy bajo</strong> (ej. hs-cTnT &lt; 5 ng/l) <strong>O</strong> valor inicial bajo sin aumento tras 1h (Δ1h bajo el umbral). Tras descartar otras patologías, alta segura y manejo ambulatorio.</p>\n                                </div>\n                                <div class=\"bg-amber-950/40 border border-amber-500/30 p-3.5 rounded-xl\">\n                                    <div class=\"text-amber-400 font-bold mb-1 text-xs\">👀 OBSERVE (Observación)</div>\n                                    <p class=\"text-[11px] text-slate-300 leading-relaxed\">Pacientes que no cumplen criterios ni de descarte ni de confirmación. Requieren <strong>tercera determinación de hs-cTn a las 3 horas</strong> y ecocardiograma transtorácico urgente.</p>\n                                </div>\n                                <div class=\"bg-rose-950/40 border border-rose-500/30 p-3.5 rounded-xl\">\n                                    <div class=\"text-rose-400 font-bold mb-1 text-xs\">📈 RULE-IN (Confirmación)</div>\n                                    <p class=\"text-[11px] text-slate-300 leading-relaxed\">Valor inicial de hs-cTn <strong>marcadamente elevado</strong> (ej. hs-cTnT &ge; 52 ng/l) <strong>O</strong> incremento significativo a la 1h (Δ1h &ge; 5 ng/l). Indicación de ingreso en Unidad Coronaria y coronariografía invasiva.</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Tiempos de la estrategia invasiva y Reperfusión",
          "color": "amber",
          "content": "\n                            <div class=\"space-y-3 text-xs\">\n                                <div class=\"p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40\">\n                                    <div class=\"font-bold text-rose-400 mb-1\">🚨 Estrategia invasiva inmediata (&lt; 2 horas - Emergencia)</div>\n                                    <p class=\"text-slate-300 mb-2\"><strong>Todos los SCACEST</strong> y <strong>SCASEST de muy alto riesgo</strong>:</p>\n                                    <ul class=\"list-disc ml-5 text-slate-300 space-y-1\">\n                                        <li>Shock cardiogénico o inestabilidad hemodinámica.</li>\n                                        <li>Dolor torácico refractario o recurrente en reposo pese a tratamiento.</li>\n                                        <li>Arritmias ventriculares malignas (FV o TV sostenida) o parada cardíaca.</li>\n                                        <li>Complicaciones mecánicas del infarto (rotura papilar, CIV).</li>\n                                        <li>Insuficiencia cardíaca aguda secundaria a isquemia miocárdica.</li>\n                                        <li>Cambios dinámicos del ST-T (especialmente elevación intermitente del ST).</li>\n                                    </ul>\n                                </div>\n                                <div class=\"p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/40\">\n                                    <div class=\"font-bold text-amber-400 mb-1\">⏱️ Estrategia invasiva precoz (&lt; 24 horas)</div>\n                                    <p class=\"text-slate-300 mb-2\"><strong>SCASEST de alto riesgo (Clase IIa):</strong></p>\n                                    <ul class=\"list-disc ml-5 text-slate-300 space-y-1\">\n                                        <li>Diagnóstico confirmado de NSTEMI según algoritmo hs-cTn.</li>\n                                        <li>Puntuación de riesgo GRACE &gt; 140 puntos.</li>\n                                        <li>Cambios isquémicos dinámicos del segmento ST o de las ondas T.</li>\n                                    </ul>\n                                </div>\n                                <div class=\"p-3.5 rounded-xl bg-slate-900 border border-slate-700\">\n                                    <div class=\"font-bold text-cyan-400 mb-1\">💉 Fibrinólisis en SCACEST: ¿Cuándo y cómo?</div>\n                                    <p class=\"text-slate-300\">\n                                        Si el tiempo estimado desde el diagnóstico de SCACEST hasta la apertura de la arteria (FMC-to-wire) <strong>supera los 120 minutos</strong>, está indicada la <strong>fibrinólisis sistémica inmediata</strong> (Tenecteplasa i.v. en bolo según peso) en los primeros <strong>10 minutos</strong>, seguida de traslado urgente a centro con ICP en 2–24 horas (estrategia farmacoinvasiva).\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "4. Antiagregación, Anticoagulación y Prohibición del Pre-tratamiento",
          "color": "cyan",
          "content": "\n                            <div class=\"space-y-3 text-xs\">\n                                <div class=\"p-3.5 bg-slate-900 border border-rose-500/40 rounded-xl\">\n                                    <h5 class=\"font-bold text-rose-400 mb-1.5 text-xs\">❌ Prohibición del pre-tratamiento en SCASEST (Clase III)</h5>\n                                    <p class=\"text-slate-300 leading-relaxed\">\n                                        La administración rutinaria de un inhibidor P2Y12 (prasugrel, ticagrelor, clopidogrel) <em>antes de conocer la anatomía coronaria</em> en SCASEST programados para coronariografía precoz <strong>no se recomienda (Clase III)</strong>. Incrementa hemorragias graves, no reduce eventos isquémicos y retrasa la opción de cirugía de bypass urgente (CABG). ¡El fármaco se administra en la mesa de hemodinámica tras confirmar la ICP!\n                                    </p>\n                                </div>\n                                <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <h5 class=\"font-bold text-cyan-400 mb-1.5 text-xs\">💊 Estrategia DAPT (Prasugrel vs. Ticagrelor)</h5>\n                                    <p class=\"text-slate-300 leading-relaxed\">\n                                        En la ICP por SCA, se prefiere <strong>Prasugrel</strong> (dosis de carga 60 mg, mantenimiento 10 mg/d; 5 mg en &ge; 75 años o &lt; 60 kg) frente a <strong>Ticagrelor</strong> (180 mg carga, 90 mg/12h) según el ensayo ISAR-REACT 5. <em>¡Prasugrel está contraindicado en antecedentes de ICTUS/AIT!</em>\n                                    </p>\n                                </div>\n                                <div class=\"p-3.5 bg-slate-900 border border-cyan-500/30 rounded-xl\">\n                                    <h5 class=\"font-bold text-cyan-400 mb-1.5 text-xs\">🩸 Fibrilación auricular + SCA sometido a ICP</h5>\n                                    <p class=\"text-slate-300 leading-relaxed\">\n                                        Terapia triple (<strong>TAT: ACOD a dosis completa + Aspirina + Clopidogrel 75 mg</strong>) limitada únicamente a la <strong>estancia hospitalaria (&le; 1 semana)</strong>. Después, terapia dual (<strong>DAT: ACOD + Clopidogrel</strong>) hasta los 12 meses. Desde el mes 12, monoterapia exclusiva con ACOD. ¡Nunca usar Prasugrel o Ticagrelor en la terapia triple (Clase III)!\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "5. Prevención secundaria y 'The Big 5' post-SCA",
          "color": "purple",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-purple-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Tratamiento hipolipemiante intensivo:</strong> Objetivo de c-LDL post-SCA: <strong>&lt; 1,4 mmol/l (55 mg/dl) Y reducción de al menos el 50 %</strong> respecto al valor basal. Paso 1: Estatina de alta potencia (Atorvastatina 40–80 mg / Rosuvastatina 20–40 mg). Paso 2: Añadir Ezetimiba 10 mg. Paso 3: Inhibidor PCSK9 (Evolocumab/Alirocumab) o Ácido bempedoico / Inclisirán.</p>\n                                <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                    <span class=\"font-bold text-purple-400\">Pilares de prevención secundaria ('The Big 5'):</span>\n                                    <ol class=\"list-decimal ml-5 mt-1 space-y-0.5 text-[11px]\">\n                                        <li><strong>DAPT:</strong> Aspirina + Prasugrel/Ticagrelor durante 12 meses.</li>\n                                        <li><strong>Estatina de alta intensidad + Ezetimiba:</strong> c-LDL &lt; 1,4 mmol/l.</li>\n                                        <li><strong>Betabloqueante:</strong> Especialmente si FEVI &le; 40 % o infarto transmural.</li>\n                                        <li><strong>IECA / ARA-II:</strong> Si FEVI &le; 40 %, insuficiencia cardíaca, DM o HTA.</li>\n                                        <li><strong>ARM (Espironolactona/Eplerenona):</strong> Si FEVI &le; 40 % y síntomas de IC.</li>\n                                    </ol>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "aks-r1",
          "title": "Caso Clínico 1: Pre-tratamiento en SCASEST",
          "question": "Varón de 68 años ingresa por dolor retroesternal opresivo de 2 horas. ECG: descenso del ST de 1,5 mm en V4-V6 sin elevación del ST. La hs-cTnI inicial es positiva (95 ng/l). La coronariografía se programa para mañana por la mañana (en 14 horas). ¿Debe administrarse en planta una dosis de carga de Prasugrel 60 mg?",
          "answer": "NO DEBE ADMINISTRARSE. El pre-tratamiento rutinario con inhibidores P2Y12 en SCASEST antes de conocer la anatomía coronaria no se recomienda (Guías ESC 2023, Clase III) si la estrategia invasiva se realiza en &lt; 24 horas. La dosis de carga se administra directamente en la sala de hemodinámica tras visualizar las arterias y confirmar la indicación de ICP.",
          "pearl": "El pre-tratamiento incrementa el riesgo de sangrado grave sin reducir eventos isquémicos y compromete la realización de cirugía de bypass urgente (CABG)."
        },
        {
          "id": "aks-r2",
          "title": "Caso Clínico 2: Fibrilación auricular + SCA tras ICP (Terapia triple)",
          "question": "Paciente de 72 años tras ICP con stent farmacoactivo por NSTEMI presenta fibrilación auricular crónica anticoagulada con Apixabán 5 mg/12h (CHA2DS2-VASc = 4). ¿Cuál es la pauta antitrombótica recomendada al alta hospitalaria?",
          "answer": "Terapia triple (TAT: Apixabán a dosis plena + Aspirina 100 mg + Clopidogrel 75 mg) únicamente durante el ingreso (&le; 1 semana tras la ICP). Al alta continúa con Terapia Dual (DAT: Apixabán 5 mg/12h + Clopidogrel 75 mg) hasta los 12 meses. A partir del mes 12 se mantiene exclusivamente Apixabán en monoterapia.",
          "pearl": "¡Nunca combinar ACOD con Prasugrel o Ticagrelor en terapia triple (Clase III) por riesgo extremo de hemorragia mortal!"
        },
        {
          "id": "aks-r3",
          "title": "Caso Clínico 3: Desescalada del tratamiento antiplaquetario",
          "question": "Paciente a los 14 días de un SCACEST tratado con DAPT (Aspirina + Prasugrel) presenta pequeñas equimosis en antebrazos. ¿Está indicada la desescalada inmediata de Prasugrel a Clopidogrel?",
          "answer": "NO ESTÁ INDICADA. La desescalada del tratamiento antiplaquetario (cambio de Prasugrel/Ticagrelor a Clopidogrel) durante los primeros 30 días post-SCA no se recomienda (Clase III). El riesgo de trombosis aguda del stent y reinfarto es máximo en el primer mes. Pequeñas equimosis cutáneas no justifican el cambio.",
          "pearl": "La actividad trombogénica de la placa y del stent es máxima en los primeros 30 días; la desescalada guiada solo se considera a partir del mes 1 o entre los 3–6 meses en pacientes estables."
        }
      ],
      "quiz": {
        "title": "Miniquiz de decisión: Shock cardiogénico y complicaciones mecánicas",
        "prompt": "Varón de 62 años al 4.º día de un SCACEST inferior desarrolla bruscamente shock cardiogénico (PA 75/40 mmHg, taquipnea, crepitantes pulmonares). A la auscultación se detecta un nuevo soplo holosistólico rudo en ápex con irradiación a la axila. ¿Cuál es el diagnóstico más probable y la conducta inmediata?",
        "options": [
          {
            "text": "A) Rotura del músculo papilar posteromedial con insuficiencia mitral masiva aguda -> ETT emergente y cirugía cardíaca urgente",
            "isCorrect": true
          },
          {
            "text": "B) Rotura de pared libre del ventrículo izquierdo -> pericardiocentesis inmediata en cama",
            "isCorrect": false
          },
          {
            "text": "C) Infarto de ventrículo derecho -> infusión agresiva de cristaloides",
            "isCorrect": false
          },
          {
            "text": "D) Hipotensión por fármacos antihipertensivos -> retirada de medicación y observación",
            "isCorrect": false
          }
        ],
        "explanation": "La aparición de un nuevo soplo holosistólico apical con edema agudo de pulmón y shock en un infarto inferior (territorio de la arteria coronaria derecha) indica la rotura del músculo papilar posteromedial (que posee vascularización unívoca) y una insuficiencia mitral aguda masiva. Requiere ecocardiograma urgente e intervención quirúrgica inmediata."
      }
    },
    "breakdown": {
      "classThree": [
        "Administración rutinaria de oxígeno en SCA si la saturación SpO2 es &ge; 90 % (la hiperoxia induce vasoconstricción coronaria y estrés oxidativo).",
        "Pre-tratamiento rutinario con inhibidor P2Y12 en SCASEST antes de la coronariografía si se planea estrategia invasiva &lt; 24h.",
        "Desescalada del tratamiento antiplaquetario de Prasugrel/Ticagrelor a Clopidogrel en los primeros 30 días post-SCA.",
        "Uso de Prasugrel o Ticagrelor en combinación triple (TAT) con anticoagulantes orales (ACOD/AVK).",
        "Tromboaspiración manual rutinaria durante la ICP primaria en SCACEST.",
        "Uso de AINEs (excepto aspirina) en pacientes con SCA (aumentan reinfarto y mortalidad)."
      ],
      "mustKnow": [
        "Criterios ECG de SCACEST: Elevación del ST en punto J en 2 derivaciones contiguas (&ge; 2,5 mm en V2–V3 en varones &lt; 40a; &ge; 2,0 mm en varones &ge; 40a; &ge; 1,5 mm en mujeres; &ge; 1,0 mm en resto).",
        "Tiempos de reperfusión: FMC-to-wire &lt; 90 min (en centro con hemodinámica &lt; 60 min). Si el traslado supera 120 min -> fibrinólisis en &lt; 10 min.",
        "Potencia P2Y12: Prasugrel &gt; Ticagrelor &gt; Clopidogrel. Prasugrel está contraindicado en antecedentes de ICTUS/AIT.",
        "Objetivo lipídico ESC 2023: c-LDL &lt; 1,4 mmol/l (55 mg/dl) y reducción &ge; 50 % respecto al basal.",
        "The Big 5 post-SCA: DAPT (12 meses) + Estatina de alta potencia + Betabloqueante + IECA/ARA-II + ARM."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2023 ESC Guidelines for the management of acute coronary syndromes",
        "year": 2023,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehad191",
        "url": "https://academic.oup.com/eurheartj/article/44/38/3720/7243210"
      }
    ]
  },
    {
    "id": "midef",
    "number": 2,
    "title": "5.ª Definición universal de infarto de miocardio (2026)",
    "shortDesc": "La 5.ª definición sustituye la clasificación numérica por 3 tipos clínicos de IM (Primario, Secundario, Relacionado con procedimientos). Daño miocárdico vs. infarto y MINOCA.",
    "icon": "🔬",
    "badge": "Nueva definición 2026",
    "badgeColor": "emerald",
    "theory": {
      "banner": {
        "tag": "Cambio paradigmático en la 5.ª Definición (Consenso 2026)",
        "title": "3 Tipos clínicos de infarto de miocardio y Daño miocárdico (Injury) vs. Infarto (Infarction)",
        "text": "La 5.ª Definición Universal de Infarto de Miocardio (UDMI 2026) sustituye la antigua clasificación de 5 tipos numéricos por **3 tipos clínicos de IM**: **1. Infarto de miocardio primario**, **2. Infarto de miocardio secundario** e **3. Infarto de miocardio relacionado con procedimientos**. La elevación de troponina (cTn) por encima del percentil 99 sexo-específico define **daño miocárdico (Myocardial Injury)**. Para diagnosticar **infarto de miocardio**, es imprescindible constatar una dinámica aguda (aumento y/o caída) JUNTO A al menos una evidencia clínica de isquemia aguda."
      },
      "sections": [
        {
          "title": "1. Criterios diagnósticos y umbrales sexo-específicos de troponina",
          "color": "emerald",
          "content": "
                            <div class="p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 leading-relaxed">
                                <p class="mb-2 font-bold text-emerald-400">La definición de infarto de miocardio requiere:</p>
                                <p class="mb-2">Detección de elevación y/o caída de troponina cardíaca (hs-cTnI / hs-cTnT) con al menos un valor por encima del <strong>percentil 99 sexo-específico</strong> del límite superior de referencia (URL) y <strong>al menos uno de los siguientes criterios de isquemia aguda:</strong></p>
                                <ul class="list-disc ml-5 space-y-1 text-slate-300">
                                    <li>Síntomas de isquemia miocárdica aguda (angina típica o equivalentes disneicos).</li>
                                    <li>Nuevos cambios isquémicos en el ECG (nuevas elevaciones/depresiones del ST, inversión de ondas T, nuevo BRI).</li>
                                    <li>Aparición de nuevas ondas Q patológicas.</li>
                                    <li>Evidencia por imagen (ETT/RMC) de nueva pérdida de miocardio viable o nueva anomalía regional de la contractilidad (RWMA) en patrón isquémico.</li>
                                    <li>Identificación de trombo intracoronario por angiografía o autopsia.</li>
                                </ul>
                            </div>
                        "
        },
        {
          "title": "2. 5.ª Definición Universal (2026): 3 Tipos clínicos de IM",
          "color": "amber",
          "content": "
                            <div class="space-y-2.5 text-xs">
                                <div class="p-3 bg-slate-900 border-l-4 border-rose-500 rounded-r-xl">
                                    <span class="font-bold text-rose-400 text-sm">1. Infarto de miocardio primario (Primary MI)</span>
                                    <p class="text-slate-300 mt-1 leading-relaxed">Ocurre espontáneamente debido a una <strong>patología coronaria aguda primaria</strong>: aterotrombosis con rotura o erosión de placa, disección coronaria espontánea (SCAD), embolia coronaria o vasoespasmo grave. Tratamiento: DAPT + revascularización emergente (ICP primaria / fibrinolisis).</p>
                                </div>
                                <div class="p-3 bg-slate-900 border-l-4 border-amber-500 rounded-r-xl">
                                    <span class="font-bold text-amber-400 text-sm">2. Infarto de miocardio secundario (Secondary MI)</span>
                                    <p class="text-slate-300 mt-1 leading-relaxed">Se produce por un <strong>desajuste entre aporte y demanda de oxígeno miocárdico (supply-demand mismatch)</strong> causado por otra condición médica aguda (sepsis, taquiarritmia, anemia grave, hipotensión/shock, crisis hipertensiva) sin lesión aguda primaria de placa.<br><strong>3 fases diagnósticas:</strong><br>• <em>Sospecha (Considered):</em> Daño troponínico agudo + factor desencadenante + dato isquémico.<br>• <em>Probable (Likely):</em> Cumple sospecha + cardiopatía isquémica previa conocida.<br>• <em>Confirmado (Confirmed):</em> Estenosis coronaria &ge; 70 % en angiografía o nueva RWMA en ETT/RMC.<br><em>Tratamiento: Corrección etiológica del cuadro causante, ¡no ICP ni DAPT de rutina!</em></p>
                                </div>
                                <div class="p-3 bg-slate-900 border-l-4 border-cyan-500 rounded-r-xl">
                                    <span class="font-bold text-cyan-400 text-sm">3. Infarto de miocardio relacionado con procedimientos (Procedure-related MI)</span>
                                    <p class="text-slate-300 mt-1 leading-relaxed">Complicación de cualquier procedimiento cardíaco percutáneo (ICP) o quirúrgico (CABG/cirugía valvular) en los primeros 30 días. Requiere daño troponínico agudo + datos de isquemia + <strong>evidencia de complicación coronaria del procedimiento</strong> (disección, perforación, trombosis de stent, flujo lento) y/o <strong>nueva pérdida de contractilidad regional (RWMA) o de miocardio viable</strong>.</p>
                                </div>
                            </div>
                        "
        },
        {
          "title": "3. Daño miocárdico agudo/crónico y MINOCA",
          "color": "cyan",
          "content": "
                            <div class="p-3.5 bg-cyan-950/30 border border-cyan-500/30 rounded-xl text-xs text-slate-300 leading-relaxed space-y-2">
                                <p><strong>Daño miocárdico agudo (Acute Myocardial Injury):</strong> Aumento y/o caída de troponina por encima del percentil 99 sin datos de isquemia clínica (p. ej. miocarditis, TEP, sepsis sin isquemia).</p>
                                <p><strong>Daño miocárdico crónico (Chronic Myocardial Injury):</b> Elevación estable y constante de troponina sin dinámica aguda (insuficiencia renal crónica avanzada, amiloidosis, IC crónica).</p>
                                <p><strong>MINOCA (Infarto sin enfermedad coronaria obstructiva):</strong> Diagnóstico de trabajo en pacientes con criterios de infarto y <strong>arterias coronarias normales o con estenosis &lt; 50 %</strong>. Requiere ecocardiograma urgente y <strong>Resonancia Magnética Cardíaca (RMC)</strong> con realce tardío de gadolinio (LGE) para diferenciar infarto verdadero (LGE subendocárdico), miocarditis aguda (hasta 40 % de casos) y miocardiopatía de Takotsubo.</p>
                            </div>
                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "midef-r1",
          "title": "Caso Clínico 1: Sepsis vs. Infarto Secundario",
          "question": "Mujer de 80 años ingresa por sepsis urinaria grave con fiebre, hipotensión (PA 80/50 mmHg) y taquicardia sinusal a 145 lpm. El ECG muestra descenso del ST de 1,5 mm en V4-V6. La hs-cTnI sube de 60 a 220 ng/l. La coronariografía muestra estenosis fija del 75 % en DA sin trombo agudo. ¿De qué tipo de infarto se trata según la 5.ª definición (2026) y cuál es el tratamiento?",
          "answer": "Se trata de un Infarto de Miocardio Secundario (Secondary MI de la 5.ª definición 2026) por desajuste aporte/demanda en el contexto de sepsis, taquicardia e hipotensión. El tratamiento NO es la angioplastia coronaria aguda, sino la corrección agresiva de la causa subyacente: antibioterapia, sueroterapia para restaurar la presión de perfusión y control de la frecuencia cardíaca.",
          "pearl": "En el infarto secundario no se prescribe DAPT ni anticoagulación de forma rutinaria si no hay indicación aterotrombótica aguda."
        },
        {
          "id": "midef-r2",
          "title": "Caso Clínico 2: Estrés emocional y MINOCA",
          "question": "Mujer de 52 años tras un estrés emocional severo ingresa por dolor torácico, elevación del ST de 2 mm en V2-V5 y troponina de 1200 ng/l. La coronariografía muestra arterias coronarias completamente lisas sin lesiones (< 50 %). El ecocardiograma muestra acinesia apical con hipercontractilidad basal. ¿Qué prueba de imagen confirma definitivamente el diagnóstico?",
          "answer": "La Resonancia Magnética Cardíaca (RMC). Permite demostrar la presencia de edema transmural miocárdico apical en secuencias T2 con ausencia característica de realce tardío de gadolinio (LGE), confirmando el síndrome de Takotsubo y descartando miocarditis o infarto embólico.",
          "pearl": "El síndrome de Takotsubo se trata como una insuficiencia cardíaca transitoria y la función ventricular suele recuperarse por completo en 4–8 semanas."
        }
      ],
      "quiz": {
        "title": "Miniquiz: Daño miocárdico vs. Infarto de miocardio",
        "prompt": "¿Cuál de los siguientes pacientes presenta ÚNICAMENTE daño miocárdico crónico (Chronic Myocardial Injury) y NO un infarto de miocardio?",
        "options": [
          {
            "text": "A) Paciente con enfermedad renal crónica (eGFR 25 ml/min) con valores estables de hs-cTnT de 48 ng/l en determinaciones repetidas durante meses, sin angina y sin cambios electrocardiográficos",
            "isCorrect": true
          },
          {
            "text": "B) Paciente con dolor precordial opresivo, inversión de ondas T en V4-V6 y elevación de hs-cTnI de 12 a 180 ng/l",
            "isCorrect": false
          },
          {
            "text": "C) Paciente tras parada cardíaca recuperada con nueva onda Q patológica en derivaciones II, III, aVF",
            "isCorrect": false
          },
          {
            "text": "D) Paciente con sepsis, disnea súbita, nueva acinesia inferior en el ecocardiograma y curva de troponinas",
            "isCorrect": false
          }
        ],
        "explanation": "La elevación crónica y estable de troponina sin ascenso/descenso dinámico agudo y sin ningún dato clínico o de imagen que sugiera isquemia miocárdica define el daño miocárdico crónico (Chronic Myocardial Injury), muy habitual en la insuficiencia renal avanzada, amiloidosis cardíaca o insuficiencia cardíaca crónica."
      }
    },
    "breakdown": {
      "classThree": [
        "Considerar toda elevación de troponina como un infarto primario e indicar sistemáticamente coronariografías emergentes innecesarias con DAPT.",
        "Administrar doble antiagregación y anticoagulación plena a pacientes con daño miocárdico aislado sin sustrato isquémico.",
        "Omitir la resonancia magnética cardíaca (RMC) en pacientes con diagnóstico de trabajo de MINOCA."
      ],
      "mustKnow": [
        "La 5.ª definición 2026 clasifica el IM en 3 tipos clínicos: 1. Primario (aterotrombosis/SCAD/espasmo), 2. Secundario (desbalance oferta/demanda), 3. Relacionado con procedimientos (ICP/CABG).",
        "Daño miocárdico = cTn > percentil 99 URL sexo-específico sin datos de isquemia.",
        "Infarto de miocardio = cTn > percentil 99 con dinámica (subida/bajada) + evidencia clínica de isquemia.",
        "El IM secundario requiere tratamiento causal de la patología desencadenante, no ICP urgente de rutina.",
        "MINOCA: Infarto con arterias normales (< 50 % estenosis) -> requiere ETT + RMC."
      ]
    },
    "guidelineLinks": [
      {
        "title": "Fifth Universal Definition of Myocardial Infarction (2026)",
        "year": 2026,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehag200",
        "url": "https://academic.oup.com/eurheartj/article/47/3/237/8766400"
      }
    ]
  },
    {
    "id": "hf",
    "number": 3,
    "title": "Insuficiencia Cardíaca (Guías ESC 2026)",
    "shortDesc": "Nueva clasificación de 2 fenotipos (IC-FEr <50% vs. IC-FEc ≥50%), eliminación de IC-FElm, los 4 pilares FMT para IC-FEr, iSGLT2 y ARM en todo el espectro, hierro i.v. y TRC/DAI.",
    "icon": "🫁",
    "badge": "Guías ESC 2026",
    "badgeColor": "cyan",
    "theory": {
      "banner": {
        "tag": "Cambio fundamental en las Guías ESC 2026",
        "title": "Eliminación del fenotipo IC-FElm y Nueva Clasificación Binaria (IC-FEr < 50 % vs. IC-FEc ≥ 50 %)",
        "text": "El Task Force de las Guías ESC 2026 para el manejo de la insuficiencia cardíaca **ha eliminado el fenotipo de IC con FEVI levemente reducida (IC-FElm)** y ha redefinido la clasificación en **2 fenotipos fisiopatológicos**: **1. IC-FEr (FEVI < 50 %)** – caracterizada por disfunción sistólica y contractilidad disminuida, tratada con los 4 pilares fundamentales (ARNI/IECA, BB, ARM e iSGLT2); **2. IC-FEc (FEVI ≥ 50 %)** – caracterizada por rigidez ventricular y disfunción diastólica, donde la base del tratamiento son los inhibidores de SGLT2, ARM, ARNI y diuréticos descongestivos."
      },
      "sections": [
        {
          "title": "1. Nueva clasificación de 2 fenotipos (ESC 2026) y Estadios A–D",
          "color": "cyan",
          "content": "
                            <div class="grid md:grid-cols-2 gap-3 my-3 text-xs">
                                <div class="p-3.5 bg-slate-900 border border-rose-500/40 rounded-xl">
                                    <span class="font-bold text-rose-400 text-sm">🔴 IC-FEr (Fracción de Eyección Reducida)</span>
                                    <p class="text-slate-300 mt-1 leading-relaxed">FEVI <strong>&lt; 50 %</strong> (unifica las antiguas categorías &le; 40 % y 41–49 %) con síntomas y/o signos de IC. Presenta disfunción sistólica y pérdida de contractilidad. Máxima evidencia de supervivencia demostrada para los <strong>4 pilares del FMT</strong>, DAI y TRC.</p>
                                </div>
                                <div class="p-3.5 bg-slate-900 border border-emerald-500/40 rounded-xl">
                                    <span class="font-bold text-emerald-400 text-sm">🟢 IC-FEc (Fracción de Eyección Conservada)</span>
                                    <p class="text-slate-300 mt-1 leading-relaxed">FEVI <strong>&ge; 50 %</strong> con síntomas/signos de IC y evidencia objetiva de alteraciones estructurales/funcionales (disfunción diastólica, presiones de llenado elevadas E/e' &ge; 13, hipertrofia VI, dilatación AI, péptidos natriuréticos elevados). Tratamiento fundamental con iSGLT2 y ARM.</p>
                                </div>
                            </div>
                            <div class="p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300">
                                <span class="font-bold text-cyan-400">Estadios de Insuficiencia Cardíaca (A -> D):</span>
                                <ul class="list-disc ml-5 mt-1.5 space-y-1">
                                    <li><strong>Estadio A (En riesgo):</strong> Factores de riesgo presentes (HTA, DM, obesidad), sin síntomas ni cardiopatía estructural.</li>
                                    <li><strong>Estadio B (Pre-insuficiencia cardíaca):</strong> Asintomático pero CON cardiopatía estructural o péptidos natriuréticos elevados.</li>
                                    <li><strong>Estadio C (IC sintomática):</strong> Síntomas actuales o previos de IC con alteración estructural o funcional.</li>
                                    <li><strong>Estadio D (IC avanzada):</strong> Síntomas refractarios en reposo (NYHA IV) pese a tratamiento óptimo -> indicación de asistencia mecánica (LVAD) o trasplante cardíaco.</li>
                                </ul>
                            </div>
                        "
        },
        {
          "title": "2. Los 4 Pilares del Tratamiento Médico Fundacional (FMT) en IC-FEr (FEVI < 50 %)",
          "color": "emerald",
          "content": "
                            <p class="mb-3 text-xs text-slate-300 leading-relaxed">En todo paciente con IC-FEr (FEVI &lt; 50 %) debe iniciarse cuanto antes la combinación de <strong>4 fármacos de primera línea (Clase I, Nivel A)</strong>, reduciendo la mortalidad en más de un 60 %:</p>
                            <div class="grid sm:grid-cols-2 gap-3 text-xs">
                                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                                    <div class="font-bold text-emerald-400">1. ARNI (Sacubitrilo/Valsartán) / IECA</div>
                                    <p class="text-slate-300 mt-1">Sacubitrilo/valsartán de elección (ensayo PARADIGM-HF). Si se cambia desde IECA, <strong>¡periodo de lavado obligatorio de 36 horas!</strong></p>
                                </div>
                                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                                    <div class="font-bold text-emerald-400">2. Betabloqueantes basados en la evidencia</div>
                                    <p class="text-slate-300 mt-1">Exclusivamente 4 moléculas con evidencia de supervivencia: <strong>Bisoprolol, Metoprolol succinato, Carvedilol, Nebivolol</strong>.</p>
                                </div>
                                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                                    <div class="font-bold text-emerald-400">3. ARM (Antagonistas del receptor mineralocorticoide)</div>
                                    <p class="text-slate-300 mt-1"><strong>Espironolactona</strong> (25–50 mg) o <strong>Eplerenona</strong>. Reducen la fibrosis miocárdica. Control de potasio y creatinina.</p>
                                </div>
                                <div class="p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl">
                                    <div class="font-bold text-emerald-400">4. Inhibidores de SGLT2 (Gliflozinas)</div>
                                    <p class="text-slate-300 mt-1"><strong>Dapagliflozina</strong> 10 mg/d o <strong>Empagliflozina</strong> 10 mg/d. Sin titulación, eficaces con o sin diabetes en IC-FEr e IC-FEc.</p>
                                </div>
                            </div>
                        "
        },
        {
          "title": "3. Tratamiento de IC-FEc (FEVI ≥ 50 %) y Fármacos complementarios",
          "color": "amber",
          "content": "
                            <div class="space-y-2.5 text-xs">
                                <div class="p-3 bg-slate-900 border border-emerald-500/30 rounded-xl">
                                    <span class="font-bold text-emerald-400">✨ Terapia en IC-FEc (FEVI &ge; 50 %)</span>
                                    <p class="text-slate-300 mt-1"><strong>Inhibidores de SGLT2 (Dapagliflozina/Empagliflozina):</strong> Clase I para todos los pacientes con IC-FEc.<br><strong>ARM (Espironolactona/Eplerenona/Finerenona):</strong> Clase I/IIa para reducir hospitalizaciones.<br><strong>ARNI (Sacubitrilo/Valsartán):</strong> Clase IIa/IIb en pacientes con FEVI en rango bajo y mujeres.<br><strong>Diuréticos de asa (Furosemida/Torasemida):</strong> Para descongestión y euvolemia.</p>
                                </div>
                                <div class="p-3 bg-slate-900 border border-amber-500/30 rounded-xl">
                                    <span class="font-bold text-amber-400">💉 Suplementación con Hierro Intravenoso (Clase I/IIa)</span>
                                    <p class="text-slate-300 mt-1">El déficit marcial (ferritina &lt; 100 &mu;g/l O ferritina 100–299 &mu;g/l con TSAT &lt; 20 %) afecta a &gt; 50 % de los pacientes con IC. La administración de <strong>carboximaltosa férrica (FCM)</strong> o <strong>derisomaltosa férrica i.v.</strong> reduce rehospitalizaciones y mejora capacidad funcional. <em>¡El hierro oral es ineficaz!</em></p>
                                </div>
                                <div class="p-3 bg-slate-900 border border-slate-700 rounded-xl">
                                    <span class="font-bold text-cyan-400">💊 Vericiguat y Quelantes de Potasio</span>
                                    <p class="text-slate-300 mt-1"><strong>Vericiguat:</strong> Estimulador de sGC tras descompensación de IC-FEr pese a FMT.<br><strong>Patiromer / Ciclosilicato de zirconio sódico (ZS-9):</strong> Quelantes de potasio que permiten mantener dosis plenas de IECA/ARNI y ARM ante hiperpotasemia.</p>
                                </div>
                            </div>
                        "
        },
        {
          "title": "4. Terapia con dispositivos: DAI y Terapia de Resincronización (TRC)",
          "color": "purple",
          "content": "
                            <div class="grid md:grid-cols-2 gap-3 text-xs">
                                <div class="p-3 bg-slate-900 border border-purple-500/30 rounded-xl">
                                    <span class="font-bold text-purple-400">⚡ DAI (Desfibrilador Automático Implantable)</span>
                                    <p class="text-slate-300 mt-1"><strong>Prevención primaria:</strong> Pacientes sintomáticos (NYHA II–III) con <strong>FEVI &le; 35 %</strong> pese a &ge; 3 meses de FMT, con expectativa de vida &gt; 1 año (etiología isquémica Clase I, no isquémica Clase IIa).</p>
                                </div>
                                <div class="p-3 bg-slate-900 border border-purple-500/30 rounded-xl">
                                    <span class="font-bold text-purple-400">🔋 TRC (Terapia de Resincronización Cardíaca)</span>
                                    <p class="text-slate-300 mt-1">Indicada en pacientes en ritmo sinusal con FEVI &le; 35 %, síntomas NYHA II–IV y <strong>bloqueo de rama izquierda (BRI)</strong> con <strong>QRS &ge; 130–150 ms</strong> (Clase I). Resincroniza la contracción biventricular.</p>
                                </div>
                            </div>
                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "hf-r1",
          "title": "Caso Clínico 1: Cambio seguro de IECA a ARNI",
          "question": "Varón de 64 años con miocardiopatía isquémica y FEVI del 32 % (IC-FEr) toma Ramipril 10 mg al día. Por disnea persistente en clase funcional NYHA II decide iniciar Sacubitrilo/Valsartán (ARNI). ¿Qué precaución temporal es obligatoria antes de administrar la primera dosis?",
          "answer": "Se debe suspender el Ramipril y esperar un periodo de lavado estricto de al menos 36 horas antes de iniciar la primera dosis de Sacubitrilo/Valsartán. La inhibición simultánea de la neprilisina y de la ECA produce una acumulación masiva de bradicinina y un riesgo extremo de angioedema potencialmente mortal.",
          "pearl": "Al cambiar de un ARA-II a ARNI no se requiere periodo de lavado y se puede administrar directamente al día siguiente."
        },
        {
          "id": "hf-r2",
          "title": "Caso Clínico 2: Tratamiento de la IC con FEVI conservada (FEVI ≥ 50 %)",
          "question": "Mujer de 72 años, hipertensa, diabética y obesa presenta disnea de esfuerzo NYHA III y edemas en tobillos. El ecocardiograma revela FEVI del 56 %, hipertrofia ventricular izquierda con E/e' de 14 y NT-proBNP de 1650 pg/ml. ¿Qué grupo farmacológico cuenta con indicación Clase I para reducir eventos en IC-FEc según ESC 2026?",
          "answer": "Los inhibidores de SGLT2 (Dapagliflozina 10 mg o Empagliflozina 10 mg diarios). Con base en los ensayos DELIVER y EMPEROR-Preserved, los iSGLT2 son el tratamiento de primera línea con recomendación Clase I en IC-FEc. Se añaden ARM y diuréticos de asa según congestión.",
          "pearl": "Los diuréticos de asa (furosemida) se añaden de forma sintomática para descongestionar y alcanzar la euvolemia."
        }
      ],
      "quiz": {
        "title": "Miniquiz de decisión: Insuficiencia cardíaca aguda",
        "prompt": "Paciente ingresa por edema agudo de pulmón con perfil 'caliente y húmedo' (PA 185/105 mmHg, FC 115 lpm, taquipnea, crepitantes pulmonares bilaterales, SpO2 86 % aire ambiente). ¿Cuál es la intervención farmacológica prioritaria?",
        "options": [
          {
            "text": "A) Oxigenoterapia / VMNI, bolo i.v. de diurético de asa (Furosemida) y vasodilatador i.v. (Nitratos) para reducir la poscarga y las presiones de llenado",
            "isCorrect": true
          },
          {
            "text": "B) Infusión inmediata de inotrópico (Dobutamina) y vasopresor (Noradrenalina)",
            "isCorrect": false
          },
          {
            "text": "C) Sobrecarga rápida de 1000 ml de suero fisiológico",
            "isCorrect": false
          },
          {
            "text": "D) Bolo intravenoso de betabloqueante a dosis alta",
            "isCorrect": false
          }
        ],
        "explanation": "En el edema agudo de pulmón hipertensivo caliente y húmedo, la causa principal es la redistribución de líquidos por poscarga excesiva. El tratamiento prioritario consiste en oxigenoterapia/VMNI, vasodilatadores intravenosos (nitroglicerina/dinitrato de isosorbida) y diuréticos de asa intravenosos en bolo."
      }
    },
    "breakdown": {
      "classThree": [
        "Administrar Sacubitrilo/Valsartán (ARNI) antes de transcurridas 36 horas desde la última toma de IECA (riesgo de angioedema potencialmente letal).",
        "Iniciar o aumentar la dosis de betabloqueantes en fase de descompensación aguda grave de la insuficiencia cardíaca.",
        "Prescribir AINEs o glitazonas en pacientes con IC (favorecen retención hidrosalina y descompensación).",
        "Utilizar calcioantagonistas no dihidropiridínicos (Verapamilo, Diltiazem) en IC-FEr.",
        "Prescribir hierro oral de forma rutinaria para el déficit marcial en IC (ineficaz por bloqueo de hepcidina)."
      ],
      "mustKnow": [
        "Las Guías ESC 2026 clasifican la IC en 2 fenotipos: IC-FEr (FEVI < 50 %) e IC-FEc (FEVI ≥ 50 %). ¡Se elimina la categoría IC-FElm!",
        "4 pilares FMT en IC-FEr (FEVI < 50 %): ARNI/IECA + Betabloqueante + ARM + iSGLT2 (Dapa/Empa).",
        "Los inhibidores de SGLT2 y los ARM son el tratamiento de elección para ambos fenotipos (IC-FEr e IC-FEc).",
        "Hierro intravenoso (carboximaltosa/derisomaltosa) indicado con ferritina < 100 μg/l o 100–299 con TSAT < 20 %.",
        "DAI: Prevención primaria si FEVI ≤ 35 % tras ≥ 3 meses de FMT. TRC: BRI + QRS ≥ 130–150 ms + FEVI ≤ 35 %."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2026 ESC Guidelines for the management of heart failure",
        "year": 2026,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehag100",
        "url": "https://academic.oup.com/eurheartj/advance-article/doi/10.1093/eurheartj/ehag100/8766302"
      }
    ]
  },
  {
    "id": "htn",
    "number": 4,
    "title": "Hipertensión arterial (Guías ESC 2024)",
    "shortDesc": "Nueva categoría de presión arterial elevada (Elevated BP), objetivos estrictos de 120–129 mmHg, combinaciones fijas en 1 comprimido (SPC), denervación renal e hipertensión secundaria.",
    "icon": "🩺",
    "badge": "Guías ESC 2024",
    "badgeColor": "amber",
    "theory": {
      "banner": {
        "tag": "Novedades clave en Guías ESC 2024",
        "title": "Categoría 'PA Elevada' y objetivo unificado de PAS 120–129 mmHg",
        "text": "Las Guías ESC 2024 definen 3 categorías de presión arterial: 1. **PA no elevada (< 120/70 mmHg)**, 2. **PA elevada (Elevated BP: 120–139 / 70–89 mmHg)** y 3. **Hipertensión (&ge; 140/90 mmHg)**. El objetivo terapéutico para la gran mayoría de adultos tratados se sitúa de forma unificada en **120–129 mmHg** de presión sistólica."
      },
      "sections": [
        {
          "title": "1. Nueva clasificación de la PA según ESC 2024",
          "color": "amber",
          "content": "\n                            <div class=\"grid md:grid-cols-3 gap-3 my-3 text-xs\">\n                                <div class=\"p-3 bg-emerald-950/30 border border-emerald-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-emerald-400\">1. PA no elevada (Non-elevated)</span>\n                                    <p class=\"text-slate-300 mt-1\">PA <strong>&lt; 120/70 mmHg</strong>. Valor óptimo con menor riesgo cardiovascular.</p>\n                                </div>\n                                <div class=\"p-3 bg-amber-950/30 border border-amber-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">2. PA elevada (Elevated BP)</span>\n                                    <p class=\"text-slate-300 mt-1\">PAS <strong>120–139 mmHg</strong> y/o PAD <strong>70–89 mmHg</strong>. Modificación del estilo de vida; fármacos si alto riesgo CV.</p>\n                                </div>\n                                <div class=\"p-3 bg-rose-950/30 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">3. Hipertensión (Hypertension)</span>\n                                    <p class=\"text-slate-300 mt-1\">PAS <strong>&ge; 140 mmHg</strong> y/o PAD <strong>&ge; 90 mmHg</strong> en consulta (o en MAPA diurno &ge; 135/85 mmHg).</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Algoritmo terapéutico: Combinaciones en 1 solo comprimido (SPC)",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 leading-relaxed space-y-2.5\">\n                                <p><strong>Regla fundamental ESC 2024:</strong> Iniciar tratamiento con <strong>combinación doble a dosis fija en un solo comprimido (SPC)</strong> como primera opción (Clase I).</p>\n                                <div class=\"grid sm:grid-cols-3 gap-3\">\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-600\">\n                                        <span class=\"font-bold text-amber-400\">Paso 1: Doble combinación</span>\n                                        <p class=\"text-[11px] mt-1 text-slate-300\"><strong>IECA o ARA-II + Antagonista del calcio</strong> (DHP) O <strong>Diurético tiazídico/tiazida-like</strong> (Indapamida/Clortalidona).</p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-600\">\n                                        <span class=\"font-bold text-amber-400\">Paso 2: Triple combinación</span>\n                                        <p class=\"text-[11px] mt-1 text-slate-300\"><strong>IECA/ARA-II + Calcioantagonista + Diurético</strong> en 1 solo comprimido (A + C + D).</p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-600\">\n                                        <span class=\"font-bold text-amber-400\">Paso 3: HTA resistente</span>\n                                        <p class=\"text-[11px] mt-1 text-slate-300\">Triple terapia + <strong>Espironolactona</strong> (25–50 mg) o Eplerenona / Amilorida / Betabloqueante.</p>\n                                    </div>\n                                </div>\n                                <p class=\"text-slate-400 text-[11px]\"><em>Denervación renal (RDN):</em> Recomendación Clase IIa/IIb como terapia coadyuvante en hipertensión resistente confirmada.</p>\n                            </div>\n                        "
        },
        {
          "title": "3. Hipertensión secundaria: Cribado y Diagnóstico",
          "color": "rose",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-rose-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p class=\"font-bold text-rose-400\">¿Cuándo sospechar y buscar causas secundarias?</p>\n                                <ul class=\"list-disc ml-5 space-y-1\">\n                                    <li><strong>Edad joven (&lt; 35 años)</strong> o aparición brusca de hipertensión grave.</li>\n                                    <li><strong>Hipertensión resistente:</strong> PA no controlada con 3 fármacos a dosis plenas incluyendo un diurético.</li>\n                                    <li><strong>Hiperaldosteronismo primario (Síndrome de Conn):</strong> Hipopotasemia (espontánea o con diuréticos). Cribado: <strong>cociente aldosterona/renina (ARR)</strong> tras suspender ARM 4–6 semanas.</li>\n                                    <li><strong>Hipertensión renovascular:</strong> Aterosclerosis de arteria renal en fumadores añosos o <em>displasia fibromuscular (DFM)</em> en mujeres jóvenes. Diagnóstico: Eco-Doppler o Angio-TC renal.</li>\n                                    <li><strong>Feocromocitoma:</strong> Triada paroxística (cefalea, sudoración profusa, palpitaciones). Cribado: <em>metanefrinas libres fraccionadas en plasma o en orina</em>.</li>\n                                    <li><strong>Apnea obstructiva del sueño (SAOS):</strong> Ronquidos, somnolencia, patrón non-dipper en MAPA. ¡Causa secundaria más frecuente!</li>\n                                </ul>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "htn-r1",
          "title": "Caso Clínico 1: Cribado de hiperaldosteronismo primario",
          "question": "Varón de 44 años con HTA resistente (PA 168/104 mmHg con Perindopril + Amlodipino + Indapamida) presenta en analítica potasio de 3,0 mmol/l. ¿Cuál es el test inicial de elección para descartar hiperaldosteronismo primario y qué fármacos deben suspenderse antes?",
          "answer": "La prueba de cribado de elección es el cociente aldosterona/actividad de renina plasmática (ARR). Al menos 4 semanas antes de la extracción deben suspenderse los antagonistas del receptor mineralocorticoide (Espironolactona, Eplerenona) y los diuréticos ahorradores de potasio para evitar interferencias farmacológicas en el eje RAA.",
          "pearl": "La normopotasemia no excluye el hiperaldosteronismo primario; hasta el 50 % de los pacientes con síndrome de Conn tienen cifras normales de potasio."
        },
        {
          "id": "htn-r2",
          "title": "Caso Clínico 2: Emergencia vs. Urgencia hipertensiva",
          "question": "Varón de 58 años acude con PA de 210/125 mmHg, cefalea intensa y visión borrosa. En el fondo de ojo se observan hemorragias en llama y edema de papila. ¿Cuál es la diferencia entre emergencia y urgencia hipertensiva y cuál es el objetivo de descenso tensional?",
          "answer": "Se trata de una emergencia hipertensiva (elevación tensional grave con daño orgánico agudo progresivo: retinopatía y encefalopatía hipertensiva). Requiere ingreso en UCI y tratamiento intravenoso titulado (ej. Urapidilo, Labetalol). El objetivo es reducir la presión arterial media (PAM) en no más de un 20–25 % en la primera hora para evitar hipoperfusión cerebral, coronaria o renal.",
          "pearl": "La única excepción con necesidad de reducción radical inmediata a PAS &lt; 120 mmHg en &lt; 20 minutos es la disección aórtica aguda."
        }
      ],
      "quiz": {
        "title": "Miniquiz: Combinaciones prohibidas en hipertensión",
        "prompt": "¿Cuál de las siguientes combinaciones de antihipertensivos está CONTRAINDICADA (Clase III) por las guías ESC?",
        "options": [
          {
            "text": "A) Tratamiento simultáneo con un IECA (ej. Enalapril) y un ARA-II (ej. Losartán) o un inhibidor directo de la renina",
            "isCorrect": true
          },
          {
            "text": "B) IECA + Antagonista del calcio dihidropiridínico",
            "isCorrect": false
          },
          {
            "text": "C) ARA-II + Diurético tiazida-like (Indapamida)",
            "isCorrect": false
          },
          {
            "text": "D) Triple combinación IECA + Calcioantagonista + Espironolactona",
            "isCorrect": false
          }
        ],
        "explanation": "El doble bloqueo del sistema renina-angiotensina-aldosterona (combinación de IECA + ARA-II o aliskireno) está formalmente contraindicado (Clase III) según los grandes ensayos (ONTARGET, ALTITUDE), ya que no aporta beneficio cardiovascular y multiplica el riesgo de insuficiencia renal aguda, hipotensión y episodios de hiperpotasemia grave."
      }
    },
    "breakdown": {
      "classThree": [
        "Combinación simultánea de dos bloqueadores del SRAA (IECA + ARA-II o inhibidor directo de renina).",
        "Uso rutinario de betabloqueantes como fármaco de primera línea en hipertensión esencial no complicada (salvo en cardiopatía isquémica, insuficiencia cardíaca, arritmias o embarazo).",
        "Descensos bruscos y excesivos de la PA en la fase aguda del ictus isquémico no candidato a trombólisis.",
        "Uso de cápsulas sublinguales de nifedipino de acción corta en crisis hipertensivas."
      ],
      "mustKnow": [
        "Categorías ESC 2024: PA No elevada (&lt; 120/70), PA Elevada (120–139 / 70–89), Hipertensión (&ge; 140/90 mmHg).",
        "Objetivo en tratamiento: PAS 120–129 mmHg y PAD 70–79 mmHg para la mayoría de pacientes.",
        "Pilar de inicio: Doble combinación a dosis fija en 1 solo comprimido (SPC: IECA/ARA-II + Calcioantagonista o Diurético).",
        "Hipertensión resistente: Triple combinación a dosis plena + Espironolactona 25–50 mg.",
        "Emergencia hipertensiva: Fármacos i.v. con descenso de PAM de max. 20–25 % en la 1.ª hora."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2024 ESC Guidelines for the management of elevated blood pressure and hypertension",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae178",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3912/7741010"
      }
    ]
  },
  {
    "id": "afib",
    "number": 5,
    "title": "Fibrilación auricular (Guías ESC 2024)",
    "shortDesc": "Nuevo enfoque AF-CARE, puntuación CHA2DS2-VA, indicación de ACOD, control precoz del ritmo vs. frecuencia y ablación por catéter de venas pulmonares (PVI).",
    "icon": "⚡",
    "badge": "Guías ESC 2024",
    "badgeColor": "purple",
    "theory": {
      "banner": {
        "tag": "Nuevo esquema integral (Guías ESC 2024)",
        "title": "AF-CARE: Manejo integral centrado en el paciente",
        "text": "Las Guías ESC 2024 introducen el marco **AF-CARE**: **C** (Comorbidity management - tratamiento de comorbilidades y estilo de vida), **A** (Avoid stroke - prevención del ictus con escala CHA2DS2-VA y ACOD), **R** (Rate & Rhythm control - control de frecuencia y ritmo precoz) y **E** (Evaluation - reevaluación dinámica). ¡La ablación por catéter se sitúa como terapia de primera línea!"
      },
      "sections": [
        {
          "title": "1. El Marco AF-CARE paso a paso",
          "color": "purple",
          "content": "\n                            <div class=\"grid sm:grid-cols-2 gap-3 my-3 text-xs\">\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">C: Comorbidities & Risk factors</span>\n                                    <p class=\"text-slate-300 mt-1\">Control de la HTA, reducción ponderal en obesidad (&ge; 10 % del peso), tratamiento de la apnea del sueño (CPAP) y abandono del alcohol.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">A: Avoid stroke / Anticoagulation</span>\n                                    <p class=\"text-slate-300 mt-1\">Prevención tromboembólica mediante escala <strong>CHA2DS2-VA</strong>. Preferencia de anticoagulantes directos (ACOD: Apixabán, Rivaroxabán, Dabigatrán, Edoxabán) frente a sintrom/warfarina.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">R: Rate and Rhythm control</span>\n                                    <p class=\"text-slate-300 mt-1\">Control de frecuencia (betabloqueantes, verapamilo/diltiazem, digoxina) y <strong>control precoz del ritmo</strong> (ablación PVI, cardioversión, antiarrítmicos) para preservar ritmo sinusal.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">E: Evaluation & Re-assessment</span>\n                                    <p class=\"text-slate-300 mt-1\">Reevaluación periódica de síntomas, progresión de la arritmia y función renal/hepática para ajustar dosis de ACOD.</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Estratificación del riesgo embólico: Escala CHA2DS2-VA y ACOD",
          "color": "cyan",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Escala CHA2DS2-VA:</strong> C (Insuficiencia cardíaca = 1), H (Hipertensión = 1), A2 (Edad &ge; 75 años = <strong>2 puntos</strong>), D (Diabetes = 1), S2 (ICTUS/AIT previo = <strong>2 puntos</strong>), V (Enfermedad vascular = 1), A (Edad 65–74 años = 1).</p>\n                                <div class=\"p-2.5 bg-cyan-950/40 border border-cyan-500/30 rounded-lg\">\n                                    <span class=\"font-bold text-cyan-400\">Reglas de anticoagulación (ACOD):</span>\n                                    <ul class=\"list-disc ml-5 mt-1 space-y-0.5 text-[11px]\">\n                                        <li><strong>Puntuación &ge; 2 puntos:</strong> Anticoagulación <strong>RECOMENDADA (Clase I, Nivel A)</strong>.</li>\n                                        <li><strong>Puntuación = 1 punto:</strong> Anticoagulación <strong>A CONSIDERAR (Clase IIa, Nivel B)</strong>.</li>\n                                        <li><strong>Puntuación = 0 puntos:</strong> Anticoagulación o antiagregación <strong>NO RECOMENDADA (Clase III)</strong>.</li>\n                                    </ul>\n                                </div>\n                                <p class=\"text-[11px] text-slate-400\"><em>Escala HAS-BLED:</em> Sirve para identificar y corregir factores modificables de sangrado, <strong>nunca para denegar la anticoagulación indicada</strong>.</p>\n                            </div>\n                        "
        },
        {
          "title": "3. Control del ritmo: Cardioversión y Ablación de venas pulmonares (PVI)",
          "color": "rose",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">⚡ Cardioversión eléctrica o farmacológica</span>\n                                    <p class=\"mt-1\">\n                                        Si la FA dura &gt; 48 horas (o tiempo indeterminado), la cardioversión solo es segura tras <strong>&ge; 3 semanas de anticoagulación efectiva (ACOD)</strong> O tras descartar trombo en orejuela izquierda mediante <strong>ecocardiograma transesofágico (ETE)</strong>. Posteriormente se mantiene anticoagulación al menos 4 semanas.\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-emerald-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-emerald-400\">🔥 Ablación por catéter de venas pulmonares (PVI)</span>\n                                    <p class=\"mt-1\">\n                                        La ablación PVI es <strong>tratamiento de primera línea (Clase I)</strong> en FA paroxística o persistente sintomática para prevenir recurrencias, y en pacientes con FA e insuficiencia cardíaca con FE reducida (ensayo CASTLE-AF).\n                                    </p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "af-r1",
          "title": "Caso Clínico 1: Anticoagulación tras ablación exitosa",
          "question": "Varón de 66 años hipertenso y diabético se sometió a ablación de venas pulmonares (PVI) por FA paroxística. En el Holter de control a los 6 meses permanece en ritmo sinusal perfecto sin episodios de FA. Solicita retirar el Apixabán. ¿Cuál es la decisión correcta?",
          "answer": "NO SE DEBE SUSPENDER EL APIXABÁN. La indicación de anticoagulación a largo plazo depende exclusivamente del perfil de riesgo embólico del paciente (CHA2DS2-VA = 3 puntos: edad 66 = 1, HTA = 1, DM = 1), y no del éxito aparente de la ablación. Hasta un 30 % de los pacientes presentan recurrencias asintomáticas de FA con idéntico riesgo de ictus cardioembólico.",
          "pearl": "La ablación o cardioversión exitosa no exime de anticoagulación continua si el riesgo tromboembólico es moderado o alto."
        },
        {
          "id": "af-r2",
          "title": "Caso Clínico 2: Fibrilación auricular en Síndrome de WPW (FBI)",
          "question": "Joven de 26 años acude por palpitaciones intensas y síncope. El ECG muestra taquicardia irregular de complejos anchos y abigarrados a 240 lpm (patrón FBI: Fast, Broad, Irregular). ¿Qué fármacos están formalmente contraindicados?",
          "answer": "Están formalmente contraindicados todos los bloqueadores del nodo AV (Adenosina, Verapamilo, Diltiazem, Betabloqueantes, Digoxina). Bloquear el nodo AV desvía todos los impulsos auriculares (a &gt; 300 lpm) por la vía accesoria de Kent directamente a los ventrículos, provocando fibrilación ventricular y parada cardíaca. El tratamiento de elección es la cardioversión eléctrica inmediata o Ibutilida i.v.",
          "pearl": "Patrón FBI (Fast, Broad, Irregular) = FA + WPW -> ¡prohibido frenar el nodo AV, aplicar choque eléctrico inmediato!"
        }
      ],
      "quiz": {
        "title": "Miniquiz: Elección de antiarrítmicos para cardioversión",
        "prompt": "Paciente de 60 años con FA paroxística de 6 horas de evolución y antecedente de infarto de miocardio previo con FEVI del 35 % precisa cardioversión farmacológica. ¿Qué fármaco es el adecuado?",
        "options": [
          {
            "text": "A) Amiodarona i.v.",
            "isCorrect": true
          },
          {
            "text": "B) Flecainida i.v.",
            "isCorrect": false
          },
          {
            "text": "C) Propafenona oral",
            "isCorrect": false
          },
          {
            "text": "D) Verapamilo i.v.",
            "isCorrect": false
          }
        ],
        "explanation": "En pacientes con cardiopatía estructural (antecedente de infarto de miocardio, hipertrofia ventricular o insuficiencia cardíaca con FE reducida), los antiarrítmicos de clase Ic (Flecainida, Propafenona) están contraindicados por alto riesgo de arritmias ventriculares letales (estudio CAST). El antiarrítmico de elección para la cardioversión farmacológica en cardiopatía estructural es la Amiodarona."
      }
    },
    "breakdown": {
      "classThree": [
        "Uso de antiarrítmicos de clase Ic (Flecainida, Propafenona) en pacientes con cardiopatía estructural, infarto previo o insuficiencia cardíaca.",
        "Uso de frenadores del nodo AV (Adenosina, Verapamilo, Betabloqueantes, Digoxina) en FA preexcitada con WPW.",
        "Uso de aspirina o antiagregación plaquetaria como sustituto de la anticoagulación para prevenir ictus en FA.",
        "Suspensión de la anticoagulación tras ablación exitosa en pacientes con CHA2DS2-VA elevado.",
        "Cardioversión de FA de &gt; 48 horas de evolución sin anticoagulación previa durante 3 semanas o sin ETE previo."
      ],
      "mustKnow": [
        "Marco AF-CARE: Comorbidities, Avoid stroke, Rate/Rhythm control, Evaluation.",
        "CHA2DS2-VA: &ge; 2 puntos indicación de ACOD (Clase I), 1 punto considerar ACOD (Clase IIa), 0 puntos sin OAC.",
        "Los ACOD (Apixabán, Rivaroxabán, Dabigatrán, Edoxabán) se prefieren a la warfarina/sintrom.",
        "La ablación por catéter PVI es Clase I en FA sintomática y en FA con insuficiencia cardíaca.",
        "Taquicardia FBI (Fast, Broad, Irregular) = FA + WPW -> ¡cardioversión eléctrica urgente!"
      ]
    },
    "guidelineLinks": [
      {
        "title": "2024 ESC Guidelines for the management of atrial fibrillation",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae176",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3314/7740997"
      }
    ]
  },
  {
    "id": "arytmie",
    "number": 6,
    "title": "Arritmias supraventriculares y ventriculares",
    "shortDesc": "Diagnóstico diferencial de taquicardias de QRS estrecho y ancho, TRNAV, TRAV/WPW, tormenta eléctrica, antiarrítmicos y ablación por catéter.",
    "icon": "⚡",
    "badge": "Guías ESC",
    "badgeColor": "amber",
    "theory": {
      "banner": {
        "tag": "Diagnóstico diferencial de taquiarritmias",
        "title": "Taquicardias de QRS estrecho (< 120 ms) vs. QRS ancho (&ge; 120 ms)",
        "text": "La estabilidad hemodinámica marca la urgencia: inestabilidad (shock, síncope, edema pulmonar) requiere cardioversión eléctrica sincronizada inmediata. Toda taquicardia de QRS ancho debe tratarse como **taquicardia ventricular (TV)** hasta que se demuestre lo contrario, ya que frenar el nodo AV en una TV puede causar colapso hemodinámico letal."
      },
      "sections": [
        {
          "title": "1. TSVP: TRNAV vs. TRAV vs. Taquicardia auricular",
          "color": "amber",
          "content": "\n                            <div class=\"grid md:grid-cols-3 gap-3 my-3 text-xs\">\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">1. TRNAV (Reentrada nodal)</span>\n                                    <p class=\"text-slate-300 mt-1\">Más frecuente (60 %). Reentrada en el nodo AV (vía lenta y rápida). Onda P retrógrada oculta en el QRS (pseudo r' en V1, pseudo s en cara inferior). Intervalo RP &lt; 70 ms.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-cyan-400\">2. TRAV (Ortodrómica / WPW)</span>\n                                    <p class=\"text-slate-300 mt-1\">30 % de las TSVP. Reentrada a través del haz accesorio de Kent. QRS estrecho con onda P retrógrada visible en el segmento ST (RP &gt; 70 ms).</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">3. Taquicardia auricular (TA)</span>\n                                    <p class=\"text-slate-300 mt-1\">Foco ectópico auricular. Morfología anómala de onda P con frecuencia 130–240 lpm, RP &gt; PR (taquicardia de RP largo). Adenosina no la suele revertir, solo desenmascara las ondas P.</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Manejo agudo de la TSVP: Valsalva y Adenosina",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-emerald-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Paso 1: Maniobra de Valsalva modificada (Estudio REVERT):</strong> Espiración forzada contra 40 mmHg en posición sentada durante 15 s, seguida de decúbito supino con elevación pasiva de piernas a 45° durante 15 s. ¡La tasa de reversión aumenta del 17 % al <strong>43 %</strong>!</p>\n                                <p><strong>Paso 2: Adenosina i.v. en bolo rápido:</strong> Bolo inicial de <strong>6 mg</strong> en vena antecubital con lavado de 20 ml de suero fisiológico. Si no revierte, escalar a <strong>12 mg</strong> y hasta <strong>18 mg</strong>. <em>¡Contraindicada en asma bronquial grave!</em></p>\n                                <p><strong>Paso 3: Calcioantagonistas no DHP / Betabloqueantes:</strong> Verapamilo 5–10 mg i.v. lento o Metoprolol 5 mg i.v.</p>\n                            </div>\n                        "
        },
        {
          "title": "3. Arritmias ventriculares, Tormenta eléctrica y DAI",
          "color": "rose",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">🚨 Tormenta eléctrica (Electrical Storm)</span>\n                                    <p class=\"mt-1\">\n                                        Definida como <strong>&ge; 3 episodios de TV/FV sostenida en 24 horas</strong> que requieren choque o cardioversión. Manejo: sedación profunda, betabloqueante i.v. no selectivo (Esmolol / Propranolol) + Amiodarona i.v., corrección electrolítica, coronariografía emergente y ablación precoz de TV o bloqueo del ganglio estrellado.\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-cyan-400\">🛡️ Indicación de DAI en prevención secundaria</span>\n                                    <p class=\"mt-1\">\n                                        El implante de DAI está formalmente indicado (Clase I) tras parada cardíaca por FV o tras TV sostenida con compromiso hemodinámico sin causa reversible aguda.\n                                    </p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "ary-r1",
          "title": "Caso Clínico 1: Taquicardia de QRS ancho",
          "question": "Varón de 62 años con infarto previo acude por palpitaciones y PA 105/70 mmHg. El ECG muestra taquicardia regular a 165 lpm con QRS de 150 ms y morfología de BRI. El médico de guardia propone Verapamilo i.v. ¿Es correcto este manejo?",
          "answer": "ES COMPLETAMENTE INCORRECTO Y PELIGROSO. En un paciente con infarto previo, más del 90 % de las taquicardias de QRS ancho son taquicardias ventriculares (TV). Administrar verapamilo en una TV causa vasodilatación y colapso cardiovascular inmediato. El tratamiento de elección es Amiodarona i.v. o cardioversión eléctrica sincronizada.",
          "pearl": "Regla de oro: Toda taquicardia de QRS ancho es una TV hasta que se demuestre lo contrario. Verapamilo y diltiazem están prohibidos."
        },
        {
          "id": "ary-r2",
          "title": "Caso Clínico 2: Torsades de Pointes y QT largo",
          "question": "Mujer de 55 años en tratamiento con sotalol y ciprofloxacino sufre síncopes de repetición. En el monitor se observa TV polimórfica con torsión de las puntas (Torsades de Pointes) y QTc basal de 560 ms. ¿Cuál es el tratamiento farmacológico inmediato?",
          "answer": "Sulfato de magnesio intravenoso (2 g i.v. en bolo lento en 1–2 minutos), suspensión inmediata de fármacos que prolonguen el QT, corrección del potasio (objetivo 4,5–5,0 mmol/l) y aceleración de la frecuencia cardíaca (marcapasos temporal o isoproterenol).",
          "pearl": "El magnesio i.v. es el fármaco de primera elección en Torsades de Pointes incluso con magnesemia normal."
        }
      ],
      "quiz": {
        "title": "Miniquiz: Criterios diagnósticos de TV",
        "prompt": "¿Cuál de los siguientes signos en el ECG confirma con mayor especificidad el diagnóstico de Taquicardia Ventricular?",
        "options": [
          {
            "text": "A) Disociación auriculoventricular (ondas P independientes de los complejos QRS anchos) o latidos de captura/fusión",
            "isCorrect": true
          },
          {
            "text": "B) Frecuencia cardíaca exactamente a 150 lpm",
            "isCorrect": false
          },
          {
            "text": "C) Duración del QRS de 125 ms",
            "isCorrect": false
          },
          {
            "text": "D) Respuesta positiva al masaje del seno carotídeo",
            "isCorrect": false
          }
        ],
        "explanation": "La presencia de disociación AV (aurículas despolarizándose independientemente de los ventrículos con ondas P disociadas, latidos de fusión o capturas sinusales) es patognomónica de taquicardia ventricular con una especificidad cercana al 100 %."
      }
    },
    "breakdown": {
      "classThree": [
        "Uso de Verapamilo o Diltiazem en taquicardias de QRS ancho de origen desconocido (riesgo de colapso en TV).",
        "Uso de bloqueadores del nodo AV en FA preexcitada con WPW.",
        "Masaje del seno carotídeo en pacientes con soplos carotídeos o ictus/AIT en los últimos 6 meses.",
        "Fármacos prolongadores del QT en pacientes con QTc basal &gt; 480 ms."
      ],
      "mustKnow": [
        "Inestabilidad hemodinámica en taquiarritmia = ¡cardioversión eléctrica sincronizada inmediata!",
        "Algoritmo TSVP: Valsalva modificada -> Adenosina 6-12-18 mg i.v. en bolo rápido.",
        "QRS ancho (&ge; 120 ms) = considerar siempre TV; fármaco de elección: Amiodarona i.v.",
        "Tormenta eléctrica: &ge; 3 episodios en 24h -> sedación + betabloqueante i.v. + amiodarona.",
        "Torsades de Pointes: Tratamiento con Sulfato de Magnesio 2 g i.v."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2019 ESC Guidelines for the management of patients with supraventricular tachycardia",
        "year": 2019,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehz467",
        "url": "https://academic.oup.com/eurheartj/article/41/5/655/5556821"
      },
      {
        "title": "2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death",
        "year": 2022,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehac262",
        "url": "https://academic.oup.com/eurheartj/article/43/40/3997/6675633"
      }
    ]
  },
  {
    "id": "chlopne",
    "number": 7,
    "title": "Valvulopatías y cardiología intervencionista",
    "shortDesc": "Estenosis aórtica (criterios de gravedad, bajo flujo y bajo gradiente), algoritmo TAVI vs. SAVR, insuficiencia mitral (primaria vs. secundaria, TEER / MitraClip) y prótesis valvulares.",
    "icon": "🚪",
    "badge": "Guías ESC/EACTS",
    "badgeColor": "rose",
    "theory": {
      "banner": {
        "tag": "Manejo contemporáneo de valvulopatías",
        "title": "Heart Team, estratificación de la EA grave y terapias percutáneas (TAVI y TEER)",
        "text": "Las decisiones en valvulopatías las lidera el **Heart Team**. El implante percutáneo de válvula aórtica (**TAVI**) se consolida en pacientes de &ge; 75 años o alto riesgo, mientras que la reparación borde a borde (**TEER / MitraClip**) transforma el pronóstico en insuficiencia mitral secundaria grave."
      },
      "sections": [
        {
          "title": "1. Estenosis aórtica: Criterios ecocardiográficos de gravedad",
          "color": "rose",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p class=\"font-bold text-rose-400\">Triada ecocardiográfica de Estenosis Aórtica Grave:</p>\n                                <div class=\"grid sm:grid-cols-3 gap-2 text-[11px]\">\n                                    <div class=\"p-2 bg-rose-950/40 border border-rose-500/30 rounded-lg text-center\">\n                                        <div class=\"font-bold text-rose-400\">Área valvular (AVA)</div>\n                                        <div class=\"text-white font-mono mt-0.5\">&lt; 1,0 cm²</div>\n                                        <div class=\"text-slate-400 text-[10px]\">(indexada &lt; 0,6 cm²/m²)</div>\n                                    </div>\n                                    <div class=\"p-2 bg-rose-950/40 border border-rose-500/30 rounded-lg text-center\">\n                                        <div class=\"font-bold text-rose-400\">Gradiente medio</div>\n                                        <div class=\"text-white font-mono mt-0.5\">&ge; 40 mmHg</div>\n                                    </div>\n                                    <div class=\"p-2 bg-rose-950/40 border border-rose-500/30 rounded-lg text-center\">\n                                        <div class=\"font-bold text-rose-400\">Velocidad máxima</div>\n                                        <div class=\"text-white font-mono mt-0.5\">&ge; 4,0 m/s</div>\n                                    </div>\n                                </div>\n                                <p><strong>Estenosis aórtica de bajo flujo y bajo gradiente (LF-LG):</strong></p>\n                                <ul class=\"list-disc ml-5 space-y-1 text-[11px]\">\n                                    <li><em>Clásica (FEVI &lt; 50 %):</em> Requiere <strong>ecocardiograma de estrés con Dobutamina a dosis bajas</strong> para diferenciar estenosis verdadera de pseudoestenosis.</li>\n                                    <li><em>Paradójica (FEVI &ge; 50 %):</em> Confirmada mediante <strong>puntuación de calcio valvular por TC</strong> (Agatston &gt; 3000 en varones, &gt; 1600 en mujeres).</li>\n                                </ul>\n                            </div>\n                        "
        },
        {
          "title": "2. Indicación de intervención en EA: TAVI vs. Cirugía (SAVR)",
          "color": "amber",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-amber-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Indicación:</strong> Pacientes con <strong>EA grave sintomática</strong> (angina, síncope, disnea) o asintomáticos con FEVI &lt; 50 % (Clase I).</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-2\">\n                                    <div class=\"p-2.5 bg-slate-800 border border-slate-600 rounded-lg\">\n                                        <span class=\"font-bold text-cyan-400\">TAVI (Percutáneo)</span>\n                                        <ul class=\"list-disc ml-4 mt-1 text-[11px] space-y-0.5\">\n                                            <li>Edad <strong>&ge; 75 años</strong>.</li>\n                                            <li>Riesgo quirúrgico elevado (STS / EuroSCORE &gt; 8 %).</li>\n                                            <li>Aorta en porcelana o reintervención previa.</li>\n                                            <li>Acceso transfemoral favorable.</li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 border border-slate-600 rounded-lg\">\n                                        <span class=\"font-bold text-amber-400\">SAVR (Cirugía abierta)</span>\n                                        <ul class=\"list-disc ml-4 mt-1 text-[11px] space-y-0.5\">\n                                            <li>Edad <strong>&lt; 75 años</strong> y bajo riesgo (STS &lt; 4 %).</li>\n                                            <li>Necesidad de cirugía cardíaca concomitante (CABG).</li>\n                                            <li>Válvula aórtica bicúspide con dilatación de aorta.</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Insuficiencia mitral y Prótesis valvulares",
          "color": "cyan",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-cyan-400\">Insuficiencia mitral secundaria & TEER (MitraClip)</span>\n                                    <p class=\"mt-1\">\n                                        Tras optimizar tratamiento de IC y TRC, la <strong>reparación transcatéter borde a borde (TEER / MitraClip)</strong> según el ensayo COAPT reduce significativamente mortalidad e ingresos en insuficiencia mitral funcional grave (Clase I/IIa).\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-rose-950/40 border border-rose-500/40 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">Anticoagulación en prótesis mecánicas</span>\n                                    <p class=\"mt-1\">\n                                        Anticoagulación de por vida con <strong>Warfarina / Sintrom (AVK)</strong>. <strong>Los ACOD están CONTRAINDICADOS en prótesis mecánicas (Clase III)</strong> según el estudio RE-ALIGN. INR diana: 2,5–3,0 en aórtica y 3,0–3,5 en mitral.\n                                    </p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "chl-r1",
          "title": "Caso Clínico 1: Elección de anticoagulante en prótesis mecánica",
          "question": "Paciente de 54 años portador de prótesis mecánica mitral solicita cambiar Sintrom por Apixabán para evitar controles periódicos de INR. ¿Cuál es la respuesta correcta?",
          "answer": "El cambio a ACOD (Apixabán, Rivaroxabán, Dabigatrán, Edoxabán) está TOTALMENTE CONTRAINDICADO en prótesis mecánicas (Guías ESC Clase III). El ensayo RE-ALIGN demostró que los ACOD causan trombosis valvulares y embolias masivas en pacientes con prótesis mecánicas. Debe mantenerse con AVK con INR objetivo entre 3,0 y 3,5.",
          "pearl": "La warfarina/acenocumarol es la única opción de anticoagulación válida y segura para prótesis cardíacas mecánicas."
        },
        {
          "id": "chl-r2",
          "title": "Caso Clínico 2: TAVI en paciente de 78 años",
          "question": "Varón de 78 años presenta disnea de esfuerzo y presíncopes con estenosis aórtica grave (AVA 0,7 cm², gradiente medio 48 mmHg). El angio-TC muestra arterias femorales amplias y anatomía favorable. ¿Qué opción recomendará el Heart Team?",
          "answer": "El Heart Team recomendará TAVI por vía transfemoral (Clase I, Nivel A), ya que en pacientes de &ge; 75 años con anatomía favorable para acceso femoral la TAVI ofrece resultados equivalentes o superiores a la cirugía abierta con menor tiempo de recuperación y evitando la esternotomía.",
          "pearl": "La TAVI transfemoral es el procedimiento de elección en mayores de 75 años con EA grave sintomática."
        }
      ],
      "quiz": {
        "title": "Miniquiz: Estenosis aórtica de bajo flujo y bajo gradiente",
        "prompt": "En un paciente con AVA de 0,8 cm², gradiente medio de 28 mmHg y FEVI del 30 %, ¿qué prueba es clave para diferenciar estenosis grave real de pseudoestenosis?",
        "options": [
          {
            "text": "A) Ecocardiograma de estrés con Dobutamina a dosis bajas",
            "isCorrect": true
          },
          {
            "text": "B) Ergometría en tapiz rodante",
            "isCorrect": false
          },
          {
            "text": "C) Resonancia magnética cardíaca",
            "isCorrect": false
          },
          {
            "text": "D) Cateterismo derecho",
            "isCorrect": false
          }
        ],
        "explanation": "La ecocardiografía con dobutamina a dosis bajas evalúa la reserva contráctil: si el gradiente medio sube a &ge; 40 mmHg manteniendo el AVA &lt; 1,0 cm², confirma estenosis aórtica grave verdadera."
      }
    },
    "breakdown": {
      "classThree": [
        "Uso de ACOD en pacientes con prótesis valvulares mecánicas (Clase III).",
        "Prueba de esfuerzo en pacientes con estenosis aórtica grave sintomática.",
        "Retrasar la intervención en pacientes con estenosis aórtica grave sintomática.",
        "DAPT rutinaria prolongada tras TAVI sin otra indicación."
      ],
      "mustKnow": [
        "Criterios de EA grave: AVA &lt; 1,0 cm², Gradiente medio &ge; 40 mmHg, Vmax &ge; 4,0 m/s.",
        "Triada de EA: Angina, síncope, disnea (aumento drástico de mortalidad al aparecer síntomas).",
        "TAVI vs. SAVR: Edad &ge; 75 años -> TAVI; Edad &lt; 75 años y bajo riesgo -> SAVR.",
        "Prótesis mecánicas = exclusivamente AVK (INR 2,5–3,5).",
        "Insuficiencia mitral secundaria: FMT + TRC -> TEER (MitraClip) si persiste grave."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2021 ESC/EACTS Guidelines for the management of valvular heart disease",
        "year": 2021,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehab395",
        "url": "https://academic.oup.com/eurheartj/article/43/7/561/6358479"
      }
    ]
  },
  {
    "id": "kmp",
    "number": 8,
    "title": "Miocardiopatías y miocarditis (Guías ESC 2023)",
    "shortDesc": "Enfoque fenotípico, Miocardiopatía hipertrófica (MCH) y Mavacamten, Dilatada (MCD), Arritmogénica (MCA), Amiloidosis cardíaca (ATTR vs. AL) y RMC en miocarditis.",
    "icon": "🧬",
    "badge": "Guías ESC 2023",
    "badgeColor": "cyan",
    "theory": {
      "banner": {
        "tag": "Genética y tratamiento dirigido (ESC 2023)",
        "title": "Miocardiopatías: Del fenotipo a las terapias diana",
        "text": "Las Guías ESC 2023 establecen la clasificación fenotípica (MCH, MCD, MNDVI, MCA y MCR) y priorizan el **estudio genético familiar**. Se consolidan tratamientos dirigidos de precisión como **Mavacamten** en MCH obstructiva y **Tafamidis** en amiloidosis por transtirretina (ATTR)."
      },
      "sections": [
        {
          "title": "1. Miocardiopatía hipertrófica (MCH) y Tratamiento con Mavacamten",
          "color": "cyan",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Definición de MCH:</strong> Grosor miocárdico <strong>&ge; 15 mm</strong> (o <strong>&ge; 13 mm</strong> con antecedentes familiares) no explicado por condiciones de carga. Mutaciones sarcoméricas frecuentes (MYBPC3, MYH7).</p>\n                                <p><strong>MCH obstructiva:</strong> Gradiente en tracto de salida del VI (TSVI) <strong>&ge; 30 mmHg</strong> (significativo con &ge; 50 mmHg), con movimiento sistólico anterior de la mitral (SAM).</p>\n                                <div class=\"p-2.5 bg-cyan-950/40 border border-cyan-500/30 rounded-lg\">\n                                    <span class=\"font-bold text-cyan-400\">💊 Inhibidor de miosina cardíaca: Mavacamten</span>\n                                    <p class=\"mt-1 text-[11px]\">\n                                        <strong>Mavacamten</strong> reduce la formación excesiva de puentes cruzados de actina-miosina. En los ensayos EXPLORER-HCM y VALOR-HCM demostró una drástica reducción del gradiente de TSVI y de la necesidad de miectomía/ablación septal.\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Amiloidosis cardíaca: ATTR vs. AL y Gammagrafía",
          "color": "amber",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-amber-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Amiloidosis cardíaca:</strong> Infiltración amiloide con hipertrofia concéntrica en el ecocardiograma pero con <strong>bajo voltaje en el ECG</strong>.</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-1 text-[11px]\">\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-amber-400\">Amiloidosis ATTR (Transtirretina)</span>\n                                        <p class=\"mt-1\">Senil (wild-type) o hereditaria. Diagnóstico no bióptico: <strong>gammagrafía ósea con 99mTc-DPD/PYP</strong> (captación grado 2–3) con cadenas ligeras libres negativas. Tratamiento: <strong>Tafamidis</strong>.</p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-rose-400\">Amiloidosis AL (Cadenas ligeras)</span>\n                                        <p class=\"mt-1\">Discrasia de células plasmáticas. Detección de cadenas ligeras libres en suero/orina. Tratamiento hematológico urgente (Daratumumab + CyBorD).</p>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Miocarditis aguda y Resonancia Magnética (Criterios de Lake Louise)",
          "color": "rose",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-rose-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Criterios de Lake Louise actualizados en RMC:</strong></p>\n                                <ul class=\"list-disc ml-5 space-y-1 text-[11px]\">\n                                    <li>Evidencia de <strong>edema miocárdico</strong> (aumento de señal en T2 o mapeo T2 elevado).</li>\n                                    <li>Evidencia de <strong>daño tisular / necrosis</strong> (mapeo T1 elevado o realce tardío de gadolinio <em>LGE subepicárdico o mesocárdico</em>).</li>\n                                </ul>\n                                <p class=\"text-[11px] text-slate-400\"><em>Deporte:</em> Prohibición estricta de ejercicio intenso o competitivo durante <strong>3 a 6 meses</strong> post-miocarditis.</p>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "kmp-r1",
          "title": "Caso Clínico 1: Diagnóstico de amiloidosis ATTR",
          "question": "Varón de 76 años con antecedentes de síndrome del túnel carpiano bilateral presenta insuficiencia cardíaca. El ecocardiograma muestra engrosamiento biventricular concéntrico de 17 mm con patrón de 'apical sparing', mientras que el ECG muestra voltajes llamativamente reducidos. ¿Qué algoritmo diagnóstico no invasivo confirma la amiloidosis ATTR?",
          "answer": "1. Descartar amiloidosis AL mediante cuantificación de cadenas ligeras libres en suero (sFLC) e inmunofijación en suero y orina (deben ser normales). 2. Gammagrafía ósea con 99mTc-DPD (o PYP). La captación cardíaca grado Perugini 2 o 3 con cadenas ligeras normales confirma definitivamente la amiloidosis ATTR sin necesidad de biopsia miocárdica.",
          "pearl": "Disociación entre hipertrofia ecocardiográfica y bajo voltaje electrocardiográfico = sospecha directa de amiloidosis."
        },
        {
          "id": "kmp-r2",
          "title": "Caso Clínico 2: Fármacos prohibidos en MCH obstructiva",
          "question": "Paciente con MCH obstructiva (gradiente en TSVI de 65 mmHg) consulta por empeoramiento de la disnea tras iniciar Amlodipino. ¿Por qué empeoran los vasodilatadores la obstrucción?",
          "answer": "Los vasodilatadores arteriales puros (como Amlodipino o nitratos) reducen la poscarga y el llenado ventricular, lo que disminuye el volumen telediastólico del VI. Esto acerca aún más la valva mitral anterior al septo hipertrófico (empeora el fenómeno SAM) e incrementa masivamente el gradiente de obstrucción del TSVI.",
          "pearl": "En MCH obstructiva se prefieren betabloqueantes, verapamilo o Mavacamten; los vasodilatadores están contraindicados."
        }
      ],
      "quiz": {
        "title": "Miniquiz: Deporte tras miocarditis aguda",
        "prompt": "Futbolista de 22 años tras miocarditis aguda no complicada con elevación transitoria de troponina y FEVI normal en la RMC. ¿Cuándo puede reanudar la competición profesional?",
        "options": [
          {
            "text": "A) Tras 3–6 meses de reposo deportivo, tras comprobar normalidad clínica, de biomarcadores, ECG, Holter y prueba de esfuerzo",
            "isCorrect": true
          },
          {
            "text": "B) En 1 semana al normalizarse la troponina",
            "isCorrect": false
          },
          {
            "text": "C) En 15 días si no tiene fatiga",
            "isCorrect": false
          },
          {
            "text": "D) El deporte profesional queda contraindicado de por vida",
            "isCorrect": false
          }
        ],
        "explanation": "Las guías de cardiología deportiva de la ESC exigen abstención estricta de deporte competitivo durante 3 a 6 meses tras una miocarditis aguda, reevaluando antes del alta deportiva biomarcadores, ECG, Holter y ergometría."
      }
    },
    "breakdown": {
      "classThree": [
        "Vasodilatadores (Nitratos, DHP) y Digoxina en MCH obstructiva (aumentan la obstrucción del TSVI).",
        "Ejercicio físico intenso durante la fase aguda de la miocarditis y en los 3–6 meses posteriores.",
        "Uso de AINEs en la fase aguda de la miocarditis (empeoran la inflamación y aumentan la mortalidad miocárdica).",
        "Omitir el cribado genético y ecocardiográfico a familiares de primer grado en miocardiopatías hereditarias."
      ],
      "mustKnow": [
        "MCH: Grosor &ge; 15 mm. oMCH: Gradiente &ge; 30 mmHg (fármaco innovador: Mavacamten).",
        "Amiloidosis cardíaca: 'Paredes gruesas en eco + bajo voltaje en ECG'. Diagnóstico no invasivo: Gammagrafía 99mTc-DPD (grado 2–3) + cadenas libres negativas.",
        "Tratamiento de ATTR: Tafamidis (estabilizador de transtirretina).",
        "RMC en miocarditis: Criterios de Lake Louise (edema T2 + realce tardío subepicárdico LGE).",
        "Reposo deportivo post-miocarditis: 3 a 6 meses de abstención estricta."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2023 ESC Guidelines for the management of cardiomyopathies",
        "year": 2023,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehad194",
        "url": "https://academic.oup.com/eurheartj/article/44/37/3503/7243212"
      }
    ]
  },
  {
    "id": "zanety",
    "number": 9,
    "title": "Endocarditis infecciosa y pericarditis (Guías ESC 2023)",
    "shortDesc": "Criterios de Duke-ESC modificados 2023, indicaciones de cirugía cardíaca urgente, profilaxis antibiótica, pericarditis aguda (Colquicina), taponamiento y constricción.",
    "icon": "🛡️",
    "badge": "Guías ESC 2023",
    "badgeColor": "emerald",
    "theory": {
      "banner": {
        "tag": "Innovación diagnóstica en infecciones cardíacas",
        "title": "Imagen multimodal (PET/TC, Angio-TC) y profilaxis racional de la EI",
        "text": "Las Guías ESC 2023 para endocarditis infecciosa (EI) incorporan la **18F-FDG PET/TC** y la **Angio-TC cardíaca** como criterios diagnósticos mayores. La profilaxis antibiótica queda restringida exclusivamente a pacientes de muy alto riesgo sometidos a procedimientos dentales de riesgo."
      },
      "sections": [
        {
          "title": "1. Criterios de Duke-ESC modificados (2023)",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Diagnóstico de EI definitiva:</strong> 2 Criterios mayores O 1 Mayor + 3 Menores O 5 Menores.</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-1 text-[11px]\">\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-emerald-400\">⭐ Criterios Mayores (Major)</span>\n                                        <ul class=\"list-disc ml-4 mt-1 space-y-1\">\n                                            <li><strong>Hemocultivos positivos:</strong> Microorganismos típicos (<em>S. aureus, E. faecalis, Streptococci, HACEK</em>).</li>\n                                            <li><strong>Imagen positiva:</strong> Vegetación, absceso, pseudoaneurisma en <strong>ETT/ETE</strong>, O captación patológica en <strong>PET/TC</strong>, O lesiones paravalvulares en <strong>Angio-TC cardíaca</strong>.</li>\n                                        </ul>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-cyan-400\">🔹 Criterios Menores (Minor)</span>\n                                        <ul class=\"list-disc ml-4 mt-1 space-y-0.5\">\n                                            <li>Cardiopatía predisponente o drogas i.v.</li>\n                                            <li>Fiebre &ge; 38,0 °C.</li>\n                                            <li><strong>Fenómenos vasculares:</strong> Embolias arteriales, lesiones de Janeway (máculas indoloras palmoplantares), infartos pulmonares sépticos.</li>\n                                            <li><strong>Fenómenos inmunológicos:</strong> Nódulos de Osler (dolorosos en pulpejos), manchas de Roth en retina, glomerulonefritis.</li>\n                                        </ul>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Indicaciones de cirugía urgente en EI",
          "color": "rose",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-rose-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p class=\"font-bold text-rose-400\">Tres indicaciones principales de cirugía cardíaca urgente:</p>\n                                <ol class=\"list-decimal ml-5 space-y-1\">\n                                    <li><strong>Insuficiencia cardíaca:</strong> Regurgitación aguda aórtica o mitral con edema pulmonar o shock (cirugía emergente &lt; 24h).</li>\n                                    <li><strong>Infección no controlada:</strong> Absceso paravalvular, fístula, o fiebre y bacteriemia persistente &gt; 7–10 días con ATB óptima.</li>\n                                    <li><strong>Prevención de embolias:</strong> Vegetación móvil <strong>&gt; 10 mm tras episodio embólico</strong> o vegetación aislada <strong>&gt; 15 mm</strong>.</li>\n                                </ol>\n                            </div>\n                        "
        },
        {
          "title": "3. Pericarditis aguda y Taponamiento cardíaco",
          "color": "amber",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-slate-700 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">Pericarditis aguda: Diagnóstico y tratamiento</span>\n                                    <p class=\"mt-1\">\n                                        Diagnóstico con &ge; 2 de 4 criterios (dolor pleurítico que alivia al inclinarse hacia delante, roce pericárdico, elevación cóncava del ST con <strong>descenso del PR</strong>, derrame en ecocardiograma).<br>\n                                        <strong>Tratamiento de elección (Clase I):</strong> AINE (Ibuprofeno 600 mg/8h o Aspirina 750–1000 mg/8h) + <strong>Colquicina 0,5 mg/12h durante 3 meses</strong> (reduce recurrencias al 50 %).\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">🚨 Taponamiento cardíaco (Triada de Beck)</span>\n                                    <p class=\"mt-1\">\n                                        <strong>Triada de Beck:</strong> 1. Hipotensión, 2. Ingurgitación yugular, 3. Tonos apagados. Más <strong>pulso paradójico</strong> (caída de PAS &gt; 10 mmHg en inspiración). Tratamiento: <strong>pericardiocentesis urgente</strong>.\n                                    </p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "zan-r1",
          "title": "Caso Clínico 1: Profilaxis antibiótica de endocarditis",
          "question": "Paciente portador de prótesis mecánica aórtica va a someterse a una extracción dental con sangrado gingival. ¿Requiere profilaxis y qué pauta se administra?",
          "answer": "SÍ, tiene indicación formal de profilaxis al ser portador de prótesis valvular (grupo de muy alto riesgo de EI). Se administra Amoxicilina 2 g vía oral dosis única 30–60 minutos antes de la intervención. En alérgicos a penicilina, Clindamicina 600 mg o Azitromicina 500 mg p.o.",
          "pearl": "La profilaxis de EI ya NO se recomienda en procedimientos respiratorios, digestivos (gastroscopias) o genitourinarios no infectados."
        },
        {
          "id": "zan-r2",
          "title": "Caso Clínico 2: Tratamiento de pericarditis aguda",
          "question": "Joven de 28 años con dolor precordial punzante que cede en flexión anterior y elevación cóncava difusa del ST con depresión del PR. Diagnóstico de pericarditis aguda viral. ¿Cuál es el tratamiento?",
          "answer": "AINE a dosis plenas (Ibuprofeno 600 mg cada 8 horas) durante 1–2 semanas hasta resolución clínica y analítica + Colquicina 0,5 mg/12h (o 0,5 mg/d si &lt; 70 kg) durante 3 meses para prevenir recurrencias.",
          "pearl": "Los corticoides aumentan las recidivas y se reservan para casos autoinmunes o intolerancia a AINEs."
        }
      ],
      "quiz": {
        "title": "Miniquiz: ECG en pericarditis aguda vs. SCACEST",
        "prompt": "¿Qué hallazgo electrocardiográfico orienta hacia pericarditis aguda y NO a infarto agudo transmural?",
        "options": [
          {
            "text": "A) Elevación difusa y cóncava del segmento ST en casi todas las derivaciones con descenso del segmento PR",
            "isCorrect": true
          },
          {
            "text": "B) Elevación convexa del ST localizada en un único territorio con imágenes especulares recíprocas",
            "isCorrect": false
          },
          {
            "text": "C) Aparición de nuevas ondas Q de necrosis",
            "isCorrect": false
          },
          {
            "text": "D) Inversión de ondas T durante la elevación máxima del ST",
            "isCorrect": false
          }
        ],
        "explanation": "La pericarditis aguda produce inflamación difusa del pericardio visceral, por lo que la elevación del ST es cóncava ('en barca'), generalizada y se acompaña de descenso del segmento PR por inflamación auricular, sin imágenes especulares recíprocas (salvo en aVR)."
      }
    },
    "breakdown": {
      "classThree": [
        "Profilaxis antibiótica de EI en procedimientos no dentales sin infección activa.",
        "Uso rutinario de corticoides como tratamiento de primera línea en pericarditis aguda vírica.",
        "Anticoagulación en pacientes con pericarditis aguda y derrame pericárdico (riesgo de hemopericardio y taponamiento).",
        "Retrasar la pericardiocentesis en taponamiento cardíaco evidente."
      ],
      "mustKnow": [
        "Criterios de Duke-ESC: 2 mayores (hemocultivos + imagen ecocardiográfica/PET-TC/Angio-TC) o 1 mayor + 3 menores.",
        "Cirugía urgente en EI: Insuficiencia cardíaca aguda, infección no controlada o vegetación &gt; 10 mm tras embolia.",
        "Profilaxis de EI: Solo alto riesgo en procedimientos dentales (Amoxicilina 2 g oral 30–60 min antes).",
        "Pericarditis: Dolor que alivia en flexión + elevación cóncava del ST y descenso del PR. Tratamiento: AINE + Colquicina 3 meses.",
        "Taponamiento: Triada de Beck (hipotensión, ingurgitación yugular, tonos apagados) + pulso paradójico."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2023 ESC Guidelines for the management of endocarditis",
        "year": 2023,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehad193",
        "url": "https://academic.oup.com/eurheartj/article/44/39/3948/7243211"
      }
    ]
  },
  {
    "id": "pe",
    "number": 10,
    "title": "Embolia pulmonar y patología vascular (Guías ESC 2024/2022)",
    "shortDesc": "Estratificación del riesgo en TEP según sPESI y hemodinámica, fibrinólisis vs. embolectomía percutánea, disección aórtica Stanford A/B y arteriopatía periférica (ITB, COMPASS).",
    "icon": "🫁",
    "badge": "Guías ESC 2024/2022",
    "badgeColor": "amber",
    "theory": {
      "banner": {
        "tag": "Manejo vascular y pulmonar",
        "title": "Estratificación pronóstica del TEP y Guías vasculares ESC 2024 (Aorta y EAP)",
        "text": "El tratamiento del tromboembolismo pulmonar (TEP) se rige por el riesgo: el TEP de **alto riesgo (shock / inestabilidad)** requiere **reperfusión inmediata (fibrinólisis o trombectomía percutánea)**. Las Guías ESC 2024 de arteriopatía periférica (EAP) refuerzan la doble vía antitrombótica (Aspirina + Rivaroxabán a dosis vascular)."
      },
      "sections": [
        {
          "title": "1. Estratificación del riesgo en el TEP agudo",
          "color": "rose",
          "content": "\n                            <div class=\"grid md:grid-cols-3 gap-3 my-3 text-xs\">\n                                <div class=\"p-3 bg-rose-950/40 border border-rose-500/40 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">🚨 Alto riesgo (Shock / Inestabilidad)</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Parada cardíaca, shock obstructivo o PAS &lt; 90 mmHg. <strong>Fibrinólisis sistémica inmediata</strong> (rtPA 100 mg / 2h) o trombectomía percutánea/quirúrgica + heparina no fraccionada (HNF).</p>\n                                </div>\n                                <div class=\"p-3 bg-amber-950/40 border border-amber-500/40 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">⚠️ Riesgo intermedio-alto</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">Estable hemodinámicamente, <strong>sPESI &ge; 1</strong> Y <strong>disfunción del VD en imagen (ETT/TC) Y troponina elevada</strong>. Ingreso monitorizado y rescate con reperfusión si empeora.</p>\n                                </div>\n                                <div class=\"p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl\">\n                                    <span class=\"font-bold text-emerald-400\">✅ Bajo riesgo</span>\n                                    <p class=\"text-slate-300 mt-1 leading-relaxed\">sPESI = 0, sin disfunción de VD ni troponina. Inicio de <strong>ACOD (Apixabán / Rivaroxabán)</strong> y alta precoz ambulatoria.</p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Síndromes aórticos agudos: Disección Stanford A vs. Stanford B",
          "color": "amber",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-amber-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Disección aórtica aguda:</strong> Dolor torácico lacerante de inicio súbito e irradiación interescapular.</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-1\">\n                                    <div class=\"p-2.5 bg-rose-950/40 border border-rose-500/30 rounded-lg\">\n                                        <span class=\"font-bold text-rose-400\">Stanford Tipo A (Aorta ascendente)</span>\n                                        <p class=\"mt-1 text-[11px]\">Afecta aorta ascendente. Riesgo de taponamiento, infarto e insuficiencia aórtica masiva. <strong>¡Cirugía cardíaca urgente inmediata!</strong></p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-cyan-400\">Stanford Tipo B (Aorta descendente)</span>\n                                        <p class=\"mt-1 text-[11px]\">Distal a subclavia izquierda. Tratamiento médico intensivo: betabloqueantes i.v. (Labetalol / Esmolol, <strong>objetivo PAS 100–120 mmHg y FC &lt; 60 lpm</strong>). Si hay complicaciones (isquemia, rotura) <strong>TEVAR</strong>.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Enfermedad arterial periférica (EAP / ITB - Guías ESC 2024)",
          "color": "cyan",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-cyan-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Diagnóstico:</strong> Índice tobillo-brazo (<strong>ITB &le; 0,90</strong> confirma EAP). ITB &gt; 1,40 indica calcificación arterial no compresible.</p>\n                                <p><strong>Tratamiento antitrombótico (Ensayo COMPASS):</strong></p>\n                                <div class=\"p-2.5 bg-cyan-950/40 border border-cyan-500/30 rounded-lg text-[11px]\">\n                                    En EAP sintomática se recomienda doble vía de protección vascular: <strong>Aspirina 100 mg/d + Rivaroxabán 2,5 mg/12h</strong> (dosis vascular, reduce amputaciones y eventos cardiovasculares mayores).\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "pe-r1",
          "title": "Caso Clínico 1: TEP masivo con hipotensión grave",
          "question": "Mujer de 56 años al 10.º día postoperatorio sufre síncope brusco con PA 70/45 mmHg, taquicardia a 130 lpm y SpO2 82 %. El ecocardiograma en cama muestra dilatación masiva del ventrículo derecho con hipocinesia de la pared libre y preservación del ápex (signo de McConnell). ¿Cuál es la terapia de reperfusión de elección?",
          "answer": "Fibrinólisis sistémica intravenosa inmediata con rtPA (Alteplasa 100 mg en infusión de 2 horas o régimen acelerado en parada inminente) junto con bolo de heparina no fraccionada y soporte vasopresor con noradrenalina.",
          "pearl": "Si existe contraindicación absoluta para fibrinólisis (ej. hemorragia intracraneal reciente), la alternativa es la trombectomía mecánica percutánea o embolectomía quirúrgica."
        },
        {
          "id": "pe-r2",
          "title": "Caso Clínico 2: Disección aórtica Tipo B",
          "question": "Varón hipertenso de 60 años con dolor interescapular lancinante y PA 195/110 mmHg. El angio-TC confirma disección Stanford Tipo B no complicada. ¿Qué objetivo tensional y qué fármaco debe iniciarse en primer lugar?",
          "answer": "El objetivo es reducir la PAS a 100–120 mmHg y la frecuencia cardíaca a &lt; 60 lpm en los primeros 10–20 minutos. El fármaco de primera línea son los betabloqueantes intravenosos (Labetalol o Esmolol i.v.). Es crítico administrar el betabloqueante ANTES de cualquier vasodilatador puro para reducir el estrés de cizallamiento (dP/dt) y evitar taquicardia refleja que propagaría la disección.",
          "pearl": "¡Nunca administrar nitroprusiato o hidralazina sin betabloqueo previo por riesgo de rotura aórtica fulminante!"
        }
      ],
      "quiz": {
        "title": "Miniquiz: Algoritmo de sospecha de TEP",
        "prompt": "Mujer de 24 años consulta por dolor pleurítico leve en costado. Signos vitales normales, saturación 99 % y baja probabilidad clínica por escala de Wells (< 2 puntos). ¿Cuál es la conducta recomendada?",
        "options": [
          {
            "text": "A) Aplicar la regla PERC o determinar Dímero D; si es negativo, se descarta TEP sin necesidad de Angio-TC",
            "isCorrect": true
          },
          {
            "text": "B) Realizar Angio-TC pulmonar de forma urgente",
            "isCorrect": false
          },
          {
            "text": "C) Iniciar anticoagulación con HBPM",
            "isCorrect": false
          },
          {
            "text": "D) Gammagrafía V/Q inmediata",
            "isCorrect": false
          }
        ],
        "explanation": "En pacientes con baja probabilidad clínica según Wells, el cumplimiento de los criterios PERC o unos Dímeros D negativos descartan la embolia pulmonar con un valor predictivo negativo &gt; 99 %, evitando la radiación y el contraste de una angio-TC innecesaria."
      }
    },
    "breakdown": {
      "classThree": [
        "Realizar Angio-TC pulmonar en un paciente inestable en shock antes de estabilizarlo y realizar ecocardiograma a pie de cama.",
        "Administración de vasodilatadores puros (Nitroprusiato) en disección aórtica sin betabloqueo previo (aumenta dP/dt).",
        "Fibrinólisis sistémica rutinaria en TEP de bajo riesgo.",
        "Filtro de vena cava inferior en pacientes que pueden recibir anticoagulación estándar."
      ],
      "mustKnow": [
        "TEP de alto riesgo = shock/hipotensión -> fibrinólisis sistémica inmediata (rtPA 100 mg) + HNF.",
        "TEP riesgo intermedio = sPESI &ge; 1 -> valorar VD en imagen y troponina.",
        "TEP bajo riesgo = sPESI 0 -> ACOD (Apixabán/Rivaroxabán) y manejo ambulatorio.",
        "Disección Stanford A = cirugía cardíaca urgente; Stanford B = betabloqueantes i.v. (PAS 100–120 mmHg) + TEVAR.",
        "EAP: ITB &le; 0,90. Tratamiento antitrombótico: Aspirina 100 mg + Rivaroxabán 2,5 mg/12h (COMPASS)."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2024 ESC Guidelines for the management of peripheral arterial and aortic diseases",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae179",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3702/7741011"
      },
      {
        "title": "2022 ESC/ERS Guidelines for the diagnosis and treatment of pulmonary hypertension",
        "year": 2022,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehac237",
        "url": "https://academic.oup.com/eurheartj/article/43/38/3618/6673946"
      }
    ]
  },
  {
    "id": "ccs",
    "number": 11,
    "title": "Síndromes coronarios crónicos (Guías ESC 2024)",
    "shortDesc": "Probabilidad pre-test (PTP) y Clinical Likelihood, Angio-TC coronaria (CCTA) como prueba de primera elección, evaluación funcional con FFR/iFR, INOCA y fármacos antianginosos.",
    "icon": "📈",
    "badge": "Guías ESC 2024",
    "badgeColor": "cyan",
    "theory": {
      "banner": {
        "tag": "Guías ESC 2024 de SCC",
        "title": "Consolidación de la Angio-TC coronaria y manejo de INOCA",
        "text": "Las Guías ESC 2024 para Síndromes Coronarios Crónicos (SCC) sitúan la **Angio-TC coronaria (CCTA)** como la prueba diagnóstica no invasiva de primera línea en pacientes sintomáticos con probabilidad intermedia-baja. Se enfatiza la evaluación fisiológica invasiva (FFR/iFR) y el abordaje de la isquemia sin enfermedad obstructiva (**INOCA / ANOCA**)."
      },
      "sections": [
        {
          "title": "1. Diagnóstico: Probabilidad clínica y Angio-TC coronaria (CCTA)",
          "color": "cyan",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-slate-700 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Evaluación diagnóstica:</strong> Caracterización del dolor y cálculo de la <em>Clinical Likelihood</em> con factores de riesgo y puntuación de calcio (CAC).</p>\n                                <div class=\"grid sm:grid-cols-2 gap-3 mt-1 text-[11px]\">\n                                    <div class=\"p-2.5 bg-cyan-950/40 border border-cyan-500/30 rounded-lg\">\n                                        <span class=\"font-bold text-cyan-400\">🔍 Angio-TC coronaria (CCTA) - Clase I</span>\n                                        <p class=\"mt-1\">Prueba inicial de elección con probabilidad clínica baja-intermedia (5–50 %). Excelente valor predictivo negativo; visualiza estenosis y características de placa vulnerable.</p>\n                                    </div>\n                                    <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700\">\n                                        <span class=\"font-bold text-amber-400\">⚡ Imagen funcional de estrés</span>\n                                        <p class=\"mt-1\"><strong>RMC de estrés, Ecocardiografía de estrés o PET/SPECT</strong> de elección si la probabilidad es &gt; 50 % o en enfermedad coronaria conocida para objetivar isquemia inducible.</p>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Evaluación fisiológica intracoronaria: FFR e iFR",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-emerald-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p>Para evaluar la repercusión funcional de estenosis intermedias (40–90 %) en la coronariografía:</p>\n                                <ul class=\"list-disc ml-5 space-y-1 text-[11px]\">\n                                    <li><strong>FFR (Reserva fraccional de flujo):</strong> Cociente de presiones en hiperemia máxima con adenosina. <strong>FFR &le; 0,80</strong> demuestra isquemia significativa e indica revascularización (Clase I).</li>\n                                    <li><strong>iFR (Instantaneous Wave-Free Ratio):</strong> Medición diastólica en reposo sin adenosina. <strong>iFR &le; 0,89</strong> equivale a FFR &le; 0,80.</li>\n                                </ul>\n                            </div>\n                        "
        },
        {
          "title": "3. Farmacoterapia antianginosa e INOCA",
          "color": "purple",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-purple-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p><strong>Escalones terapéuticos:</strong></p>\n                                <ul class=\"list-disc ml-5 space-y-1 text-[11px]\">\n                                    <li><strong>1.ª Línea:</strong> <em>Betabloqueante</em> y/o <em>Calcioantagonista DHP</em> (Amlodipino).</li>\n                                    <li><strong>2.ª Línea:</strong> Añadir Nitratos de acción prolongada, <em>Ranolazina</em>, <em>Trimetazidina</em> o <em>Ivabradina</em>.</li>\n                                </ul>\n                                <div class=\"p-2.5 bg-slate-800 rounded-lg border border-slate-700 text-[11px]\">\n                                    <span class=\"font-bold text-purple-400\">INOCA (Isquemia sin enfermedad coronaria obstructiva):</span>\n                                    Incluye <strong>disfunción microvascular coronaria (DMC)</strong> y <strong>angina vasoespástica (Prinzmetal)</strong> (tratamiento con calcioantagonistas y nitratos; <em>¡betabloqueantes contraindicados en vasoespasmo puro!</em>).\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "ccs-r1",
          "title": "Caso Clínico 1: Prueba de elección en sospecha de SCC",
          "question": "Varón de 52 años, no fumador con hipertensión controlada presenta opresión retroesternal al subir cuestas que cede en reposo. ECG normal. Probabilidad pre-test estimada del 18 % (baja-intermedia). ¿Qué prueba no invasiva recomiendan las Guías ESC 2024?",
          "answer": "Angio-TC coronaria (CCTA - Clase I, Nivel A). En pacientes con probabilidad baja a intermedia, la CCTA posee la máxima precisión para descartar enfermedad coronaria aterosclerótica y evitar coronariografías invasivas innecesarias.",
          "pearl": "La ergometría clásica en cinta o bicicleta ya no se recomienda como prueba inicial de descarte por su baja sensibilidad y especificidad."
        },
        {
          "id": "ccs-r2",
          "title": "Caso Clínico 2: Decisión de revascularización guiada por FFR",
          "question": "En coronariografía diagnóstica por angina estable se visualiza estenosis del 60 % en descendente anterior media. La guía de presión muestra FFR = 0,86. ¿Debe implantarse un stent coronario?",
          "answer": "NO DEBE IMPLANTARSE. Un valor de FFR &gt; 0,80 demuestra que la estenosis no produce isquemia inducible hemodinámicamente significativa. El implante de stent no mejora el pronóstico ni los síntomas y expone al paciente a riesgos innecesarios. El manejo óptimo es tratamiento médico preventivo (estatina, aspirina, cambios de estilo de vida).",
          "pearl": "La revascularización de estenosis coronarias con FFR &gt; 0,80 no aporta beneficio de supervivencia."
        }
      ],
      "quiz": {
        "title": "Miniquiz: Angina vasoespástica (Prinzmetal)",
        "prompt": "¿Qué grupo de fármacos está CONTRAINDICADO en la angina vasoespástica pura por riesgo de empeorar el espasmo coronario?",
        "options": [
          {
            "text": "A) Betabloqueantes no selectivos (bloquean receptores beta-2 dilatadores permitiendo la vasoconstricción alfa-1)",
            "isCorrect": true
          },
          {
            "text": "B) Calcioantagonistas (Amlodipino, Diltiazem)",
            "isCorrect": false
          },
          {
            "text": "C) Nitratos de acción prolongada",
            "isCorrect": false
          },
          {
            "text": "D) Estatinas",
            "isCorrect": false
          }
        ],
        "explanation": "En el espasmo coronario puro, los betabloqueantes no selectivos bloquean los receptores adrenérgicos beta-2 vasodilatadores, favoreciendo el efecto vasoconstrictor alfa-1 no contrarrestado y precipitando crisis de vasoespasmo coronario grave. Los fármacos de elección son los calcioantagonistas y nitratos."
      }
    },
    "breakdown": {
      "classThree": [
        "Revascularización sistemática (ICP) de estenosis intermedias sin prueba de isquemia (FFR &gt; 0,80 o iFR &gt; 0,89).",
        "Uso de betabloqueantes no selectivos en angina vasoespástica pura (Prinzmetal).",
        "Uso de ergometría clásica como prueba diagnóstica primaria para descartar SCC.",
        "Administración simultánea de nitratos e inhibidores de la fosfodiesterasa-5 (Sildenafilo) por riesgo de colapso cardiovascular."
      ],
      "mustKnow": [
        "Diagnóstico SCC: Angio-TC coronaria (CCTA) de 1.ª elección en probabilidad 5–50 %.",
        "Fisiología coronaria: FFR &le; 0,80 o iFR &le; 0,89 indica revascularización (Clase I).",
        "Antianginosos de 1.ª línea: Betabloqueante + Calcioantagonista DHP.",
        "INOCA/ANOCA: Isquemia sin estenosis obstructiva (disfunción microvascular o espasmo coronario).",
        "Estatinas de alta potencia indicadas en todo paciente con aterosclerosis coronaria (c-LDL &lt; 1,4 mmol/l)."
      ]
    },
    "guidelineLinks": [
      {
        "title": "2024 ESC Guidelines for the management of chronic coronary syndromes",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae177",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3415/7741009"
      }
    ]
  },
  {
    "id": "ekg",
    "number": 12,
    "title": "Electrocardiografía diagnóstica en la práctica clínica",
    "shortDesc": "Criterios de Sgarbossa modificados en BRI y marcapasos, ondas T de de Winter, síndrome de Wellens, síndrome de Brugada, QT largo/corto y signos de TEP.",
    "icon": "📈",
    "badge": "Consenso ECG ESC",
    "badgeColor": "emerald",
    "theory": {
      "banner": {
        "tag": "Interpretación avanzada de ECG",
        "title": "Equivalentes de SCACEST y canalopatías congénitas",
        "text": "Oclusiones coronarias proximales agudas pueden manifestarse como **equivalentes de SCACEST** sin la elevación clásica del ST (patrón de de Winter, síndrome de Wellens, criterios de Smith-Sgarbossa en BRI). El reconocimiento precoz de estos patrones salva vidas."
      },
      "sections": [
        {
          "title": "1. Infarto con Bloqueo de Rama Izquierda (BRI): Criterios de Smith-Sgarbossa",
          "color": "emerald",
          "content": "\n                            <div class=\"p-3.5 bg-slate-900 border border-emerald-500/30 rounded-xl text-xs text-slate-300 space-y-2\">\n                                <p>Criterios de Sgarbossa modificados por Smith para diagnosticar infarto en presencia de BRI o ritmo de marcapasos:</p>\n                                <div class=\"grid sm:grid-cols-3 gap-2.5 text-[11px] mt-1\">\n                                    <div class=\"p-2 bg-rose-950/40 border border-rose-500/40 rounded-lg\">\n                                        <div class=\"font-bold text-rose-400\">1. Elevación ST concordante</div>\n                                        <p class=\"mt-0.5\">Elevación del ST <strong>&ge; 1 mm</strong> en derivación con QRS positivo (5 puntos - especificidad 98 %).</p>\n                                    </div>\n                                    <div class=\"p-2 bg-amber-950/40 border border-amber-500/40 rounded-lg\">\n                                        <div class=\"font-bold text-amber-400\">2. Descenso ST concordante</div>\n                                        <p class=\"mt-0.5\">Descenso del ST <strong>&ge; 1 mm en V1, V2 o V3</strong> (3 puntos - infarto posterior/inferior).</p>\n                                    </div>\n                                    <div class=\"p-2 bg-purple-950/40 border border-purple-500/40 rounded-lg\">\n                                        <div class=\"font-bold text-purple-400\">3. Regla de Smith</div>\n                                        <p class=\"mt-0.5\">Elevación discordante del ST con relación <strong>ST / S &le; -0,25</strong> (&gt; 25 % de la profundidad de la onda S).</p>\n                                    </div>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "2. Patrones de alerta isquémica: de Winter y Wellens",
          "color": "rose",
          "content": "\n                            <div class=\"space-y-2.5 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-rose-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-rose-400\">⚡ Patrón de de Winter (Oclusión aguda proximal de ADA)</span>\n                                    <p class=\"mt-1\">\n                                        <strong>Descenso juncional del ST de 1–3 mm en V1–V6</strong> seguido de <strong>ondas T altas, picudas y simétricas</strong> sin elevación del ST clásica. ¡Equivalente de SCACEST anterior -> ICP primaria inmediata!\n                                    </p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-amber-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-amber-400\">⚠️ Síndrome de Wellens (Estenosis crítica proximal de ADA)</span>\n                                    <p class=\"mt-1\">\n                                        Se observa en periodos sin dolor: <strong>Tipo A (25 %):</strong> Ondas T bifásicas en V2–V3. <strong>Tipo B (75 %):</strong> Ondas T profunda y simétricamente invertidas en V2–V4. Alerta de infarto anterior inminente (¡prohibida la prueba de esfuerzo, requiere coronariografía precoz!).\n                                    </p>\n                                </div>\n                            </div>\n                        "
        },
        {
          "title": "3. Síndromes arritmogénicos congénitos: Brugada y QT Largo",
          "color": "cyan",
          "content": "\n                            <div class=\"grid sm:grid-cols-2 gap-3 text-xs text-slate-300\">\n                                <div class=\"p-3 bg-slate-900 border border-cyan-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-cyan-400\">⚡ Síndrome de Brugada (Tipo 1)</span>\n                                    <p class=\"mt-1\">Canalopatía de sodio (SCN5A). ECG Tipo 1: <strong>elevación cóncava del ST &ge; 2 mm seguida de onda T negativa</strong> en V1–V2 ('en lomo de delfín'). Desencadenado por fiebre o fármacos. Riesgo de FV -> DAI.</p>\n                                </div>\n                                <div class=\"p-3 bg-slate-900 border border-purple-500/30 rounded-xl\">\n                                    <span class=\"font-bold text-purple-400\">⏱️ Síndrome de QT Largo (SQTL)</span>\n                                    <p class=\"mt-1\"><strong>QTc &gt; 480 ms</strong>. LQT1 (natación/ejercicio), LQT2 (estímulos auditivos/emociones), LQT3 (reposo/sueño). Riesgo de Torsades de Pointes. Tratamiento: Betabloqueantes (Nadolol), DAI.</p>\n                                </div>\n                            </div>\n                        "
        }
      ]
    },
    "recall": {
      "scenarios": [
        {
          "id": "ekg-r1",
          "title": "Caso Clínico 1: Reconocimiento del patrón de de Winter",
          "question": "Fumador de 46 años ingresa por dolor retroesternal opresivo de 45 minutos y sudoración fría. El ECG no muestra elevación del ST, pero en V2-V5 se aprecia infradesnivel del punto J de 2 mm seguido de ondas T muy altas, positivas y simétricas. ¿Cuál es el diagnóstico y la conducta?",
          "answer": "Se trata del patrón electrocardiográfico de de Winter, un equivalente de SCACEST que indica la oclusión aguda completa de la arteria descendente anterior proximal (LAD). El paciente debe trasladarse de inmediato a la sala de hemodinámica para ICP primaria emergente sin esperar resultados analíticos de troponina.",
          "pearl": "El patrón de de Winter aparece en el 2 % de las oclusiones agudas de la descendente anterior."
        },
        {
          "id": "ekg-r2",
          "title": "Caso Clínico 2: Síndrome de Wellens tras resolución de angina",
          "question": "Mujer de 58 años acude tras ceder un dolor torácico intenso ocurrido hace 3 horas. El ECG en reposo muestra ondas T profundamente invertidas y simétricas de 5 mm en V2, V3 y V4, sin elevación del ST ni ondas Q. ¿Es seguro realizar una ergometría ambulatoria?",
          "answer": "NO ES SEGURO (Está formalmente contraindicada). El ECG corresponde al Síndrome de Wellens tipo B, característico de una estenosis crítica suboclusiva de la descendente anterior proximal. Una prueba de esfuerzo puede desencadenar un infarto anterior transmural masivo o fibrilación ventricular. Requiere ingreso monitorizado y coronariografía preferente.",
          "pearl": "El síndrome de Wellens se manifiesta típicamente en los intervalos libres de dolor tras un episodio isquémico."
        }
      ],
      "quiz": {
        "title": "Miniquiz: Hiperpotasemia y alteraciones urgentes del ECG",
        "prompt": "Paciente anúrico con insuficiencia renal presenta en el ECG ondas T altas, estrechas y picudas 'en tienda de campaña', ondas P aplanadas y complejos QRS ensanchados a 140 ms con potasio sérico de 7,6 mmol/l. ¿Cuál es el primer fármaco que debe administrarse de inmediato?",
        "options": [
          {
            "text": "A) Gluconato cálcico al 10 % (o cloruro cálcico) i.v. para estabilización inmediata de la membrana miocárdica",
            "isCorrect": true
          },
          {
            "text": "B) Resinas de intercambio iónico oral (Resonio)",
            "isCorrect": false
          },
          {
            "text": "C) Salbutamol inhalado",
            "isCorrect": false
          },
          {
            "text": "D) Perfusión de glucosa con insulina",
            "isCorrect": false
          }
        ],
        "explanation": "El calcio intravenoso no reduce la cifra plasmática de potasio, pero antagoniza en 1–3 minutos el efecto tóxico de la hiperpotasemia sobre el potencial de membrana de los cardiomiocitos, protegiendo al miocardio de una fibrilación ventricular o asistolia inminente. Tras el calcio se administran sueros glucosados con insulina y se prepara la hemodiálisis."
      }
    },
    "breakdown": {
      "classThree": [
        "Realizar pruebas de esfuerzo en pacientes con patrón ECG de Síndrome de Wellens (riesgo de infarto masivo).",
        "Administración de calcio i.v. en sospecha de intoxicación digitálica (riesgo de parada cardíaca en sístole).",
        "Retrasar la ICP primaria en pacientes con patrón de de Winter por ausencia de elevación del ST convencional.",
        "Uso de nitratos en infarto inferior con sospecha de extensión a ventrículo derecho (V4R)."
      ],
      "mustKnow": [
        "Criterios de Smith-Sgarbossa en BRI: 1. STE concordante &ge; 1 mm, 2. STD concordante &ge; 1 mm en V1–V3, 3. Relación ST/S &le; -0,25.",
        "de Winter: STD juncional en V1–V6 + ondas T altas picudas = oclusión aguda de ADA proximal.",
        "Wellens: Ondas T invertidas profundas (tipo B) o bifásicas (tipo A) en V2–V4 = estenosis crítica de ADA.",
        "Síndrome de Brugada: STE &ge; 2 mm cóncava en V1–V2.",
        "Hiperpotasemia: T picudas -> ensanchamiento QRS -> ritmo sinusoidal -> parada. Tratamiento: ¡Calcio i.v.!"
      ]
    },
    "guidelineLinks": [
      {
        "title": "Clinical recommendations for the interpretation of the 12-lead electrocardiogram",
        "year": 2024,
        "journal": "European Heart Journal",
        "doi": "10.1093/eurheartj/ehae200",
        "url": "https://academic.oup.com/eurheartj/article/45/38/3314/7740997"
      }
    ]
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

// Exportación para uso global o modular
if (typeof window !== "undefined") {
  window.CARDIOLOGY_DATA_ES = CARDIOLOGY_DATA_ES;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = { CARDIOLOGY_DATA_ES };
}
