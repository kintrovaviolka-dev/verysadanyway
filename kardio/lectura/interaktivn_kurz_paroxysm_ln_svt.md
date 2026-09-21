<!DOCTYPE html>
<html lang="cs">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Klinický průvodce: Supraventrikulární tachykardie (pSVT)</title>
  <!-- Tailwind CSS -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            medblue: {
              50: '#f0f7ff',
              100: '#e0effe',
              500: '#0284c7',
              600: '#0369a1',
              700: '#075985',
              900: '#0c4a6e'
            },
            heartred: '#e11d48',
          }
        }
      }
    }
  </script>
  <style>
    .perspective { perspective: 1000px; }
    .transform-style-3d { transform-style: preserve-3d; }
    .backface-hidden { backface-visibility: hidden; }
    .rotate-y-180 { transform: rotateY(180deg); }
    /* Vlastní posuvník */
    ::-webkit-scrollbar { width: 8px; height: 8px; }
    ::-webkit-scrollbar-track { background: #f1f5f9; }
    ::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
  </style>
</head>
<body class="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col font-sans">

  <!-- Hlavní hlavička -->
  <header class="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap justify-between items-center gap-4">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-sky-600 flex items-center justify-center text-white shadow-md">
          <svg class="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </div>
        <div>
          <h1 class="text-lg font-bold text-slate-900 leading-tight">Paroxysmální SVT: Diagnostika a management</h1>
          <p class="text-xs text-slate-500">Podle guidelines Am Fam Physician 2023 (Nasir et al.)</p>
        </div>
      </div>

      <!-- Navigace mezi hlavními kroky -->
      <nav class="flex space-x-1 bg-slate-100 p-1.5 rounded-xl text-xs font-semibold overflow-x-auto max-w-full">
        <button onclick="switchTab('theory')" id="btn-theory" class="tab-btn px-3.5 py-2 rounded-lg transition-all text-slate-600 hover:text-slate-900 flex items-center gap-1.5 whitespace-nowrap bg-white shadow-sm text-sky-700">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          1. Učební text & Vizuály
        </button>
        <button onclick="switchTab('recall')" id="btn-recall" class="tab-btn px-3.5 py-2 rounded-lg transition-all text-slate-600 hover:text-slate-900 flex items-center gap-1.5 whitespace-nowrap">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
          2. Active Recall
        </button>
        <button onclick="switchTab('summary')" id="btn-summary" class="tab-btn px-3.5 py-2 rounded-lg transition-all text-slate-600 hover:text-slate-900 flex items-center gap-1.5 whitespace-nowrap">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
          3. Závěrečné shrnutí
        </button>
        <button onclick="switchTab('quiz')" id="btn-quiz" class="tab-btn px-3.5 py-2 rounded-lg transition-all text-slate-600 hover:text-slate-900 flex items-center gap-1.5 whitespace-nowrap">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          4. Test (Kvíz)
        </button>
        <button onclick="switchTab('flashcards')" id="btn-flashcards" class="tab-btn px-3.5 py-2 rounded-lg transition-all text-slate-600 hover:text-slate-900 flex items-center gap-1.5 whitespace-nowrap">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
          5. Kartičky
        </button>
      </nav>
    </div>
  </header>

  <!-- Hlavní kontejner -->
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">

    <!-- ======================================================== -->
    <!-- KROK 1: UČEBNÍ TEXT & INTERAKTIVNÍ VIZUÁLY -->
    <!-- ======================================================== -->
    <section id="sec-theory" class="space-y-6">
      
      <!-- Sub-navigace pro teorii -->
      <div class="flex border-b border-slate-200 gap-6 text-sm font-medium">
        <button onclick="switchTheorySub('types')" id="sub-types" class="theory-sub-btn pb-3 text-sky-600 border-b-2 border-sky-600 font-semibold">1. Typy a mechanismy pSVT</button>
        <button onclick="switchTheorySub('ecg')" id="sub-ecg" class="theory-sub-btn pb-3 text-slate-500 hover:text-slate-800">2. Interaktivní EKG atlas</button>
        <button onclick="switchTheorySub('management')" id="sub-management" class="theory-sub-btn pb-3 text-slate-500 hover:text-slate-800">3. Akutní a dlouhodobý management</button>
      </div>

      <!-- Podsekce: Typy a mechanismy -->
      <div id="theory-content-types" class="space-y-6">
        <div class="bg-gradient-to-r from-sky-50 to-indigo-50 p-5 rounded-2xl border border-sky-100 flex flex-col md:flex-row gap-5 items-center justify-between">
          <div class="space-y-1">
            <span class="text-xs uppercase font-bold tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded">Základní definice</span>
            <h2 class="text-xl font-bold text-slate-900">Co je to paroxysmální SVT (pSVT)?</h2>
            <p class="text-sm text-slate-600 leading-relaxed max-w-2xl">
              Rychlý srdeční rytmus (srdeční frekvence > 100/min v klidu) vycházející z tkáně Hisova svazku nebo nad ním. 
              Paroxysmální SVT je charakterizována <strong>náhlým začátkem i náhlým ukončením</strong> a pravidelným rytmem. 
              Postihuje častěji ženy (62 % případů), často i mladé pacienty bez strukturálního onemocnění srdce.
            </p>
          </div>
          <div class="grid grid-cols-3 gap-2 text-center w-full md:w-auto shrink-0">
            <div class="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
              <div class="text-2xl font-black text-sky-600">~65%</div>
              <div class="text-[11px] font-semibold text-slate-500 uppercase">AVNRT</div>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
              <div class="text-2xl font-black text-indigo-600">~30%</div>
              <div class="text-[11px] font-semibold text-slate-500 uppercase">AVRT</div>
            </div>
            <div class="bg-white p-3 rounded-xl shadow-sm border border-slate-100">
              <div class="text-2xl font-black text-rose-600">~10%</div>
              <div class="text-[11px] font-semibold text-slate-500 uppercase">AT</div>
            </div>
          </div>
        </div>

        <!-- 3 hlavní typy karet -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <!-- AVNRT -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md">Nejčastější (2/3 případů)</span>
                <span class="text-xs text-slate-400 font-mono">AVNRT</span>
              </div>
              <h3 class="text-lg font-bold text-slate-900">AV nodální reentry tachykardie</h3>
              <p class="text-xs text-slate-600">
                Typická u mladých dospělých a žen. Vzniká v perimodální tkáni AV uzlu přítomností <strong>dvou elektrofyziologických drah:</strong> pomalé (slow) a rychlé (fast).
              </p>
              <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-xs">
                <div class="font-semibold text-slate-700">Elektrofyziologický mechanismus:</div>
                <p class="text-slate-600">Předčasný síňový stah (PAC) zablokuje rychlou dráhu (má delší refrakterní periodu), šíří se pomalou dráhou anterográdně a retrográdně se vrací obnovenou rychlou dráhou.</p>
                <div class="font-semibold text-slate-700 pt-1">EKG korelace:</div>
                <p class="text-slate-600">P vlny jsou <strong>skryté v QRS</strong> (aktivace síní a komor probíhá současně), nebo se zobrazují jako <em>pseudo-r'</em> ve svodu V1 a <em>pseudo-s</em> v dolních svodech (II, III, aVF).</p>
              </div>
            </div>
          </div>

          <!-- AVRT -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="bg-indigo-100 text-indigo-800 text-xs font-bold px-2.5 py-1 rounded-md">Častá u dětí (30 %)</span>
                <span class="text-xs text-slate-400 font-mono">AVRT</span>
              </div>
              <h3 class="text-lg font-bold text-slate-900">AV reentry tachykardie (akcesorní dráha)</h3>
              <p class="text-xs text-slate-600">
                Vyžaduje <strong>akcesorní spojku</strong> mezi síní a komorou mimo AV uzel. Klasickým příkladem je Wolffův-Parkinsonův-Whiteův (WPW) syndrom.
              </p>
              <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-xs">
                <div class="font-semibold text-slate-700">Dvě formy vedení:</div>
                <ul class="list-disc list-inside text-slate-600 space-y-0.5">
                  <li><strong>Ortodromní (90 %):</strong> Dolů přes AV uzel, nahoru přes dráhu. <em>Úzký QRS</em>, retrográdní P vlna až za QRS (RP &lt; 1/2 RR).</li>
                  <li><strong>Antidromní (10 %):</strong> Dolů přes akcesorní dráhu, nahoru přes AV uzel. <em>Široký QRS komplex!</em></li>
                </ul>
                <div class="font-semibold text-rose-600 pt-1">Kritické riziko:</div>
                <p class="text-slate-600">FiS s preexcitací může vést k fibrilaci komor a náhlé srdeční smrti. <strong>Nikdy neblokovat AV uzel (adenosin/verapamil) při preexcitované FiS!</strong></p>
              </div>
            </div>
          </div>

          <!-- AT -->
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 hover:shadow-md transition-shadow flex flex-col justify-between">
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="bg-rose-100 text-rose-800 text-xs font-bold px-2.5 py-1 rounded-md">Nejméně častá (~10 %)</span>
                <span class="text-xs text-slate-400 font-mono">AT</span>
              </div>
              <h3 class="text-lg font-bold text-slate-900">Síňová (atriální) tachykardie</h3>
              <p class="text-xs text-slate-600">
                Vychází z ektopického ložiska v síni mimo SA uzel. Může být způsobena zvýšenou automaticitou nebo mikro-reentry okruhem.
              </p>
              <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1 text-xs">
                <div class="font-semibold text-slate-700">Charakteristické znaky:</div>
                <p class="text-slate-600">Často vykazuje tzv. <strong>„warm-up“ fenomén</strong> (postupné zrychlování v prvních 5–10 sekundách), na rozdíl od náhlého skoku u AVNRT/AVRT.</p>
                <div class="font-semibold text-slate-700 pt-1">EKG korelace:</div>
                <p class="text-slate-600">Abnormální morfologie a osa vlny P (odlišná od sinusové). Vlna P předchází QRS komplex, PR interval je normální, <strong>RP interval je delší než PR interval</strong>.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Triggery a vyšetření box -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2 mb-3">
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Časté spouštěče (Triggers)
            </h4>
            <div class="flex flex-wrap gap-1.5 text-xs text-slate-700">
              <span class="bg-slate-100 px-2.5 py-1 rounded-md">Kofein & alkohol</span>
              <span class="bg-slate-100 px-2.5 py-1 rounded-md">Hypertyreóza</span>
              <span class="bg-slate-100 px-2.5 py-1 rounded-md">Elektrolytové dysbalance (K, Mg)</span>
              <span class="bg-slate-100 px-2.5 py-1 rounded-md">Sympatomimetika / dekongestiva</span>
              <span class="bg-slate-100 px-2.5 py-1 rounded-md">Anémie</span>
              <span class="bg-slate-100 px-2.5 py-1 rounded-md">Fyzická námaha / stres</span>
              <span class="bg-slate-100 px-2.5 py-1 rounded-md">Horečka / infekce</span>
              <span class="bg-slate-100 px-2.5 py-1 rounded-md">Bronchodilatancia</span>
            </div>
            <p class="text-xs text-slate-500 mt-3 italic">Poznámka: U mladých žen bývá pSVT často chybně diagnostikována jako panická ataka nebo úzkostná porucha, což vede k prodlevě v diagnóze.</p>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
            <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2 mb-3">
              <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Laboratorní a doplňková vyšetření
            </h4>
            <ul class="text-xs text-slate-600 space-y-1.5">
              <li><strong>Krevní obraz (KO):</strong> vyloučení anémie a skryté infekce.</li>
              <li><strong>TSH (tyreotropní hormon):</strong> screening hypertyreózy jako reverzibilní příčiny.</li>
              <li><strong>Minerály (BMP - Na, K, Ca, Mg, urea, kreatinin):</strong> iontové poruchy spouštějící arytmie.</li>
              <li><strong>Troponin a BNP:</strong> při podezření na ischemii či srdeční selhání.</li>
              <li><strong>Transtorakální ECHO:</strong> vyloučení strukturálního onemocnění srdce a zhodnocení ejekční frakce.</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Podsekce: Interaktivní EKG Atlas (HTML5 Canvas) -->
      <div id="theory-content-ecg" class="hidden space-y-6">
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-4">
            <div>
              <h3 class="text-lg font-bold text-slate-900">Interaktivní osciloskop EKG křivek</h3>
              <p class="text-xs text-slate-500">Vyberte patologii pro simulaci a analýzu klíčových elektrokardiografických markerů</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <button onclick="setEcgRhythm('sinus')" id="ecg-btn-sinus" class="ecg-selector-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-sky-600 text-white shadow-sm">Normální sinus (75 bpm)</button>
              <button onclick="setEcgRhythm('avnrt')" id="ecg-btn-avnrt" class="ecg-selector-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">Typická AVNRT (180 bpm)</button>
              <button onclick="setEcgRhythm('wpw')" id="ecg-btn-wpw" class="ecg-selector-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">WPW Preexcitace (Delta)</button>
              <button onclick="setEcgRhythm('vt')" id="ecg-btn-vt" class="ecg-selector-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200">Širokokomplexová (VT)</button>
            </div>
          </div>

          <!-- Canvas monitor s mřížkou -->
          <div class="relative w-full bg-slate-950 rounded-xl overflow-hidden shadow-inner border border-slate-800" style="height: 220px;">
            <canvas id="ecgCanvas" class="w-full h-full block"></canvas>
            <div class="absolute top-2.5 left-3 text-[10px] font-mono text-emerald-400 bg-slate-900/80 px-2 py-1 rounded border border-emerald-500/30 flex items-center gap-2">
              <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span id="canvas-label">Normální sinusový rytmus (75 bpm) | Kalibrace: 25 mm/s, 10 mm/mV</span>
            </div>
          </div>

          <!-- Výklad aktuálního EKG -->
          <div id="ecg-explanation-box" class="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <!-- Dynamický obsah přes JS -->
          </div>
        </div>

        <!-- Diferenciální diagnostika v tabulce -->
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
          <div class="px-5 py-4 border-b border-slate-100 bg-slate-50">
            <h4 class="font-bold text-slate-900 text-sm">Diferenciální diagnostika na EKG</h4>
          </div>
          <div class="overflow-x-auto">
            <table class="w-full text-left text-xs border-collapse">
              <thead>
                <tr class="border-b border-slate-200 bg-slate-100/70 text-slate-700 font-bold uppercase text-[10px] tracking-wider">
                  <th class="p-3">Entita</th>
                  <th class="p-3">Šířka QRS</th>
                  <th class="p-3">P vlna</th>
                  <th class="p-3">RP interval</th>
                  <th class="p-3">Charakteristický nález</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 text-slate-600">
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-900">Typická AVNRT</td>
                  <td class="p-3 text-emerald-600 font-semibold">Úzký (&lt; 120 ms)</td>
                  <td class="p-3">Skrytá v QRS nebo retrográdní těsně za ním</td>
                  <td class="p-3 font-mono">Velmi krátký (RP &lt; 70 ms)</td>
                  <td class="p-3">Pseudo-r' ve V1, pseudo-s ve svodech II, III, aVF</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-900">Ortodromní AVRT</td>
                  <td class="p-3 text-emerald-600 font-semibold">Úzký (&lt; 120 ms)</td>
                  <td class="p-3">Invertovaná, následuje za QRS</td>
                  <td class="p-3 font-mono">Krátký (RP &lt; 1/2 RR intervalu)</td>
                  <td class="p-3">V klidu na sinusovém rytmu může být delta vlna (WPW)</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-900">Antidromní AVRT</td>
                  <td class="p-3 text-rose-600 font-semibold">Široký (&ge; 120 ms)</td>
                  <td class="p-3">Často maskovaná nebo retrográdní</td>
                  <td class="p-3 font-mono">Dlouhý (RP &gt; 1/2 RR intervalu)</td>
                  <td class="p-3">Zkrácený PR interval, delta vlna, simuluje komorovou tachykardii</td>
                </tr>
                <tr class="hover:bg-slate-50">
                  <td class="p-3 font-semibold text-slate-900">Síňová tachykardie (AT)</td>
                  <td class="p-3 text-emerald-600 font-semibold">Úzký (&lt; 120 ms)</td>
                  <td class="p-3">Abnormální tvar a osa (předchází QRS)</td>
                  <td class="p-3 font-mono">Dlouhý (RP &gt; PR)</td>
                  <td class="p-3">„Warm-up“ a „cool-down“ fenomén; normální PR interval</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- Podsekce: Management (Akutní i dlouhodobý) -->
      <div id="theory-content-management" class="hidden space-y-6">
        
        <!-- Algoritmus akutního stavu -->
        <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div class="border-b border-slate-100 pb-4">
            <span class="text-xs uppercase font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded">Akutní postup na urgentním příjmu</span>
            <h3 class="text-lg font-bold text-slate-900 mt-1">Rozhodovací algoritmus managementu pSVT</h3>
          </div>

          <!-- Interaktivní větvení algoritmu -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Větev 1: Nestabilní -->
            <div class="border-2 border-rose-200 bg-rose-50/40 rounded-2xl p-5 space-y-3">
              <div class="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Hemodynamicky NESTABILNÍ pacient
              </div>
              <p class="text-xs text-slate-600">Příznaky nestability: alterace vědomí, šok/hypotenze, těžká dušnost (plicní edém), ischemická bolest na hrudi.</p>
              <div class="bg-white p-3.5 rounded-xl border border-rose-200 text-xs space-y-1.5 shadow-sm">
                <div class="font-bold text-rose-700">1. linie: Synchronizovaná kardioverze</div>
                <p class="text-slate-600">Okamžitý výboj (za sedace/analgezie). Pokud selže, přechod na ACLS protokol pro kardiopulmonální resuscitaci.</p>
              </div>
            </div>

            <!-- Větev 2: Stabilní -->
            <div class="border-2 border-emerald-200 bg-emerald-50/40 rounded-2xl p-5 space-y-3">
              <div class="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Hemodynamicky STABILNÍ pacient
              </div>
              <p class="text-xs text-slate-600">Normální krevní tlak, bez známek hypoperfuze a plicního edému.</p>
              
              <!-- Stupňovitý postup -->
              <div class="space-y-2 text-xs">
                <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-sm">
                  <div class="font-bold text-slate-800 flex items-center justify-between">
                    <span>1. Krok: Vagové manévry (Účinnost 19–54 %)</span>
                    <span class="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">1. linie</span>
                  </div>
                  <p class="text-slate-600 mt-1">Modifikovaný Valsalvův manévr (usilovný výdech do 10ml stříkačky 15 s, poté položení a elevace DK o 45° na 15 s), masáž karotického sinu (5–10 s, po vyloučení šelestu), diving reflex.</p>
                </div>

                <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-sm">
                  <div class="font-bold text-slate-800 flex items-center justify-between">
                    <span>2. Krok: Intravenózní Adenosin</span>
                    <span class="text-[10px] bg-sky-100 text-sky-800 px-1.5 py-0.5 rounded">Farmakologie</span>
                  </div>
                  <p class="text-slate-600 mt-1">
                    <strong>Dávkování:</strong> 6 mg IV rychlý bolus (push) s okamžitým proplachem 20 ml FR do velké žíly. Při neúčinnosti do 1–2 min: <strong>12 mg IV</strong>.<br>
                    <span class="text-rose-600 font-semibold">Upozornění:</span> Pacienta varovat před pocitem tísně na hrudi a horka. <em>Přeskočit, pokud je přítomna preexcitace na EKG!</em>
                  </p>
                </div>

                <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-sm">
                  <div class="font-bold text-slate-800">3. Krok: Blokátory vápníkových kanálů nebo Beta-blokátory</div>
                  <p class="text-slate-600 mt-1">
                    Nedihydropyridinové BKK: <strong>Diltiazem</strong> 0,25 mg/kg IV po dobu 2 min nebo <strong>Verapamil</strong> 5–10 mg IV. Alternativně IV Metoprolol či Esmolol. (Pozor na hypotenzi a srdeční selhání).
                  </p>
                </div>

                <div class="bg-white p-3 rounded-xl border border-emerald-200 shadow-sm">
                  <div class="font-bold text-rose-700">4. Krok: Selhání medikace</div>
                  <p class="text-slate-600 mt-1">Synchronizovaná elektrická kardioverze i u stabilního pacienta.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Širokokomplexová tachykardie & Dlouhodobý management -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-purple-600"></span> Širokokomplexová tachykardie (WCT)
            </h4>
            <p class="text-xs text-slate-600 leading-relaxed">
              Zlaté pravidlo urgentní medicíny: <strong>Každou širokokomplexovou tachykardii (QRS &ge; 120 ms) považujeme za komorovou tachykardii (VT), dokud není prokázán opak!</strong>
            </p>
            <div class="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-2">
              <div class="font-semibold text-slate-800">Postup u stabilní WCT:</div>
              <ul class="list-disc list-inside text-slate-600 space-y-1">
                <li><strong>Procainamid IV:</strong> Lék 1. volby pro stabilní WCT (účinnější a bezpečnější než amiodaron).</li>
                <li><strong>Amiodaron IV:</strong> Alternativa (150 mg bolus během 10 min, následně infuze).</li>
                <li>K odlišení VT od SVT s aberancí použít <strong>Brugada kritéria</strong>.</li>
              </ul>
            </div>
          </div>

          <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h4 class="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span> Dlouhodobý management a kurativní léčba
            </h4>
            <div class="space-y-2 text-xs text-slate-600">
              <div class="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100">
                <span class="font-bold text-emerald-900">Katetrizační radiofrekvenční ablace (RFA):</span>
                <p class="mt-0.5">Kurativní metoda 1. volby u recidivující symptomatické pSVT a všech pacientů s WPW. Vysoká úspěšnost (&gt; 95 %) a nízké riziko komplikací.</p>
              </div>
              <div class="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span class="font-bold text-slate-800">Chronická farmakoterapie (pokud ablace není vhodná):</span>
                <p class="mt-0.5">Beta-blokátory nebo non-DHP BKK (diltiazem/verapamil). U strukturálně zdravého srdce antiarytmika třídy Ic (flecainid, propafenon).</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ======================================================== -->
    <!-- KROK 2: ACTIVE RECALL TRENAŽÉR -->
    <!-- ======================================================== -->
    <section id="sec-recall" class="hidden space-y-6">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <div class="max-w-3xl">
          <span class="text-xs uppercase font-bold tracking-wider text-sky-700 bg-sky-100 px-2 py-0.5 rounded">Aktivní vybavování z paměti</span>
          <h2 class="text-xl font-bold text-slate-900 mt-1">Active Recall Trenažér</h2>
          <p class="text-xs text-slate-600 mt-1">
            Zkuste si zformulovat odpověď ve své mysli <strong>předtím</strong>, než kliknete na „Zobrazit odpověď“. Následně si sami ohodnoťte, jak snadné to pro vás bylo.
          </p>
        </div>
      </div>

      <!-- Kontejner pro Active Recall otázky -->
      <div class="space-y-4" id="recall-container">
        <!-- Otázky se dynamicky generují nebo jsou vloženy níže -->
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- KROK 3: ZÁVĚREČNÉ SHRNUTÍ & HIGH-YIELD PEARLS -->
    <!-- ======================================================== -->
    <section id="sec-summary" class="hidden space-y-6">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
        <span class="text-xs uppercase font-bold tracking-wider text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">Rychlé klinické repetitorium</span>
        <h2 class="text-xl font-bold text-slate-900 mt-1">Klinické perly a varovné signály (Red Flags)</h2>
        <p class="text-xs text-slate-600 mt-1">To nejdůležitější z článku do atestační či reálné klinické praxe.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Brugada kritéria -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-purple-500"></span> Brugada kritéria pro široký QRS (&ge; 120 ms)
            </h3>
            <span class="text-[10px] bg-slate-100 px-2 py-0.5 rounded font-mono">VT vs SVT</span>
          </div>
          <p class="text-xs text-slate-500">Postupujte krok za krokem. Odpověď „ANO“ na kterýkoliv bod potvrzuje <strong>komorovou tachykardii (VT)</strong>:</p>
          <ol class="list-decimal list-inside space-y-2 text-xs text-slate-700 font-medium">
            <li class="p-2 bg-slate-50 rounded-lg">Absence RS komplexu ve všech prekordiálních svodech (V1–V6)? <span class="text-purple-700 font-bold">Ano &rarr; VT</span></li>
            <li class="p-2 bg-slate-50 rounded-lg">Je přítomen RS komplex a interval od začátku R do hrotu S je &gt; 100 ms v některém svodu? <span class="text-purple-700 font-bold">Ano &rarr; VT</span></li>
            <li class="p-2 bg-slate-50 rounded-lg">Je přítomna atrioventrikulární (AV) disociace? <span class="text-purple-700 font-bold">Ano &rarr; VT</span></li>
            <li class="p-2 bg-slate-50 rounded-lg">Jsou přítomna morfologická kritéria pro VT ve svodech V1–V2 a V6? <span class="text-purple-700 font-bold">Ano &rarr; VT</span></li>
          </ol>
          <div class="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-800">
            <strong>Všechna 4 kritéria „NE“:</strong> Diagnostikována SVT s aberantním vedením (např. raménkový blok).
          </div>
        </div>

        <!-- Červené vlajky a Indikace k odeslání kardiologovi -->
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-center justify-between border-b border-slate-100 pb-2">
            <h3 class="font-bold text-slate-900 text-sm flex items-center gap-2">
              <span class="w-3 h-3 rounded-full bg-rose-500"></span> Indikace k odeslání kardiologovi (Ablace)
            </h3>
            <span class="text-[10px] bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">Table 8 Guidelines</span>
          </div>
          <ul class="space-y-1.5 text-xs text-slate-700">
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <strong>Preexcitace nebo delta vlna</strong> na klidovém EKG (riziko náhlé smrti).
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <strong>Synkopa nebo presynkopa</strong> během paroxysmu palpitací.
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <strong>Vysoce rizikové povolání:</strong> pilot, řidič kamionu/MHD, jeřábník, potápěč.
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              <strong>Známé strukturální onemocnění srdce</strong> (ICHS, kardiomyopatie, chlopenní vady).
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Symptomy nekontrolované farmakoterapií nebo netolerující medikaci.
            </li>
            <li class="flex items-center gap-2">
              <svg class="w-4 h-4 text-rose-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
              Nejasnost v diagnóze či široký QRS komplex.
            </li>
          </ul>
        </div>
      </div>

      <!-- Souhrnná tabulka léků -->
      <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <div class="p-4 bg-slate-50 border-b border-slate-200">
          <h3 class="font-bold text-slate-900 text-sm">Farmakologický přehled (Nasir 2023 Table 6)</h3>
        </div>
        <div class="overflow-x-auto">
          <table class="w-full text-xs text-left">
            <thead class="bg-slate-100 text-slate-700 uppercase font-semibold text-[10px]">
              <tr>
                <th class="p-3">Léčivo</th>
                <th class="p-3">Třída</th>
                <th class="p-3">Akutní dávkování</th>
                <th class="p-3">Nežádoucí účinky & Kontraindikace</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-slate-600">
              <tr>
                <td class="p-3 font-bold text-slate-900">Adenosin</td>
                <td class="p-3">Agonista A1 purin. receptorů</td>
                <td class="p-3 font-mono">6 mg IV bolus &rarr; 12 mg IV</td>
                <td class="p-3">Flush, dyspnoe, bronchospasmus. <strong>KI:</strong> Preexcitace s FiS, astma.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-slate-900">Diltiazem / Verapamil</td>
                <td class="p-3">BKK (non-dihydropyridiny)</td>
                <td class="p-3 font-mono">0,25 mg/kg IV / 5–10 mg IV</td>
                <td class="p-3">Hypotenze, bradykardie. <strong>KI:</strong> HFrEF (selhání se sníženou EF), široký QRS.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-slate-900">Procainamid</td>
                <td class="p-3">Antiarytmikum Ia</td>
                <td class="p-3 font-mono">10–17 mg/kg IV (20–50 mg/min)</td>
                <td class="p-3">Lék 1. volby pro stabilní široký QRS. <strong>KI:</strong> Prodloužený QT, srdeční selhání.</td>
              </tr>
              <tr>
                <td class="p-3 font-bold text-slate-900">Metoprolol / Esmolol</td>
                <td class="p-3">Beta-blokátory (II)</td>
                <td class="p-3 font-mono">Metoprolol 5 mg IV (max 15 mg)</td>
                <td class="p-3">Bradykardie, AV blokády, bronchospasmus, hypotenze.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- KROK 4: SINGLE CHOICE TEST (KVÍZ) -->
    <!-- ======================================================== -->
    <section id="sec-quiz" class="hidden space-y-6">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span class="text-xs uppercase font-bold tracking-wider text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">Ověření znalostí</span>
          <h2 class="text-xl font-bold text-slate-900 mt-1">Klinický test se single-choice otázkami</h2>
          <p class="text-xs text-slate-600 mt-0.5">Otestujte své rozhodovací schopnosti na reálných kazuistikách.</p>
        </div>
        <div id="quiz-score-badge" class="bg-slate-100 px-4 py-2 rounded-xl text-center border border-slate-200">
          <div class="text-[10px] font-bold text-slate-500 uppercase">Skóre</div>
          <div class="text-lg font-black text-sky-600" id="quiz-score-text">0 / 6</div>
        </div>
      </div>

      <!-- Kontejner kvízových otázek -->
      <div class="space-y-4" id="quiz-questions-container">
        <!-- Otázky se vygenerují přes JS -->
      </div>
    </section>

    <!-- ======================================================== -->
    <!-- KROK 5: OPAKOVACÍ KARTICKY (FLASHCARDS) -->
    <!-- ======================================================== -->
    <section id="sec-flashcards" class="hidden space-y-6">
      <div class="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span class="text-xs uppercase font-bold tracking-wider text-purple-700 bg-purple-100 px-2 py-0.5 rounded">Spaced Repetition</span>
          <h2 class="text-xl font-bold text-slate-900 mt-1">Opakovací kartičky (Flashcards)</h2>
          <p class="text-xs text-slate-600 mt-0.5">Klikněte na kartičku pro její otočení. Procvičujte až do úplného zvládnutí.</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="text-xs text-slate-500" id="card-counter">Kartička 1 z 8</span>
          <button onclick="resetFlashcards()" class="text-xs bg-slate-100 hover:bg-slate-200 text-slate-700 px-3 py-1.5 rounded-lg font-medium transition-colors">Reset</button>
        </div>
      </div>

      <!-- Flashcard Interactive Area -->
      <div class="max-w-xl mx-auto flex flex-col items-center">
        <div class="w-full perspective cursor-pointer" style="height: 300px;" onclick="flipCurrentCard()">
          <div id="flashcard-inner" class="w-full h-full relative transform-style-3d transition-transform duration-500 shadow-lg rounded-2xl border border-slate-200">
            
            <!-- Přední strana -->
            <div class="absolute inset-0 w-full h-full backface-hidden bg-white p-8 rounded-2xl flex flex-col justify-between items-center text-center">
              <span class="text-[11px] font-bold text-sky-600 uppercase tracking-wider bg-sky-50 px-2.5 py-1 rounded-md" id="card-category">Kategorie</span>
              <div class="my-auto">
                <h3 class="text-lg md:text-xl font-bold text-slate-900 leading-snug" id="card-front-text">Přední strana otázky</h3>
              </div>
              <p class="text-xs text-slate-400 flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                Klikněte pro otočení kartičky
              </p>
            </div>

            <!-- Zadní strana -->
            <div class="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-slate-900 to-indigo-950 p-8 rounded-2xl flex flex-col justify-between items-center text-center text-white">
              <span class="text-[11px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-950/60 px-2.5 py-1 rounded-md">Vysvětlení / Odpověď</span>
              <div class="my-auto overflow-y-auto max-h-44 px-2">
                <p class="text-sm md:text-base leading-relaxed text-slate-100" id="card-back-text">Zadní strana odpovědi</p>
              </div>
              <p class="text-xs text-slate-400">Klikněte pro otočení zpět</p>
            </div>

          </div>
        </div>

        <!-- Ovládací tlačítka kartiček -->
        <div class="flex items-center gap-4 mt-6">
          <button onclick="prevCard()" class="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-sm transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          </button>
          <button onclick="markCardMastered(false)" class="px-4 py-2.5 rounded-xl bg-amber-100 text-amber-900 font-semibold text-xs hover:bg-amber-200 transition-colors">Ještě zopakovat</button>
          <button onclick="markCardMastered(true)" class="px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 shadow-sm transition-colors">Umím 👍</button>
          <button onclick="nextCard()" class="p-3 rounded-xl bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 shadow-sm transition-all">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
          </button>
        </div>
      </div>
    </section>

  </main>

  <!-- Globální skripty pro interaktivitu a vizualizace -->
  <script>
    // ==========================================
    // 1. TABS A NAVIGACE
    // ==========================================
    const tabs = ['theory', 'recall', 'summary', 'quiz', 'flashcards'];

    function switchTab(targetTab) {
      tabs.forEach(tab => {
        const sec = document.getElementById(`sec-${tab}`);
        const btn = document.getElementById(`btn-${tab}`);
        if (tab === targetTab) {
          sec.classList.remove('hidden');
          btn.classList.add('bg-white', 'shadow-sm', 'text-sky-700');
          btn.classList.remove('text-slate-600');
        } else {
          sec.classList.add('hidden');
          btn.classList.remove('bg-white', 'shadow-sm', 'text-sky-700');
          btn.classList.add('text-slate-600');
        }
      });
      if (targetTab === 'theory') {
        setTimeout(resizeCanvas, 50);
      }
    }

    function switchTheorySub(sub) {
      const subs = ['types', 'ecg', 'management'];
      subs.forEach(s => {
        const content = document.getElementById(`theory-content-${s}`);
        const btn = document.getElementById(`sub-${s}`);
        if (s === sub) {
          content.classList.remove('hidden');
          btn.classList.add('text-sky-600', 'border-b-2', 'border-sky-600', 'font-semibold');
          btn.classList.remove('text-slate-500');
        } else {
          content.classList.add('hidden');
          btn.classList.remove('text-sky-600', 'border-b-2', 'border-sky-600', 'font-semibold');
          btn.classList.add('text-slate-500');
        }
      });
      if (sub === 'ecg') {
        setTimeout(resizeCanvas, 50);
      }
    }

    // ==========================================
    // 2. OSCILOSKOP EKG (HTML5 CANVAS)
    // ==========================================
    const canvas = document.getElementById('ecgCanvas');
    const ctx = canvas.getContext('2d');
    let currentRhythm = 'sinus';
    let animationId = null;
    let scanX = 0;
    const historyPoints = [];

    const ecgDataPresets = {
      sinus: {
        title: "Normální sinusový rytmus (75 bpm)",
        explanation: `<strong>Normální nález:</strong> Za každou vlnou P následuje úzký QRS komplex. PR interval je standardní (120–200 ms) v důsledku fyziologického zpoždění v AV uzlu. Srdeční frekvence je pravidelná.`
      },
      avnrt: {
        title: "Typická AV nodální reentry tachykardie (AVNRT, 180 bpm)",
        explanation: `<strong>AVNRT nález:</strong> Pravidelná úzkokomplexová tachykardie (180 bpm). Vlny P jsou většinou <strong>skryté uvnitř QRS</strong> v důsledku současné aktivace síní a komor. Může být přítomna drobná retrográdní deformace na konci QRS: <em>pseudo-r'</em> ve V1 nebo <em>pseudo-s</em> ve svodu II.`
      },
      wpw: {
        title: "Wolff-Parkinson-White (WPW) syndrom / Preexcitace",
        explanation: `<strong>WPW triáda:</strong> 1) Zkrácený PR interval (&lt; 120 ms), 2) Pozvolný náběh QRS komplexu (<strong>delta vlna</strong>), 3) Rozšířený QRS komplex (&gt; 120 ms). Vzniká předčasnou aktivací komor přes anomální akcesorní dráhu mimo AV uzel.`
      },
      vt: {
        title: "Širokokomplexová tachykardie (VT / Antidromní AVRT, 170 bpm)",
        explanation: `<strong>Širokokomplexový rytmus:</strong> QRS komplex &ge; 120 ms. V urgentní péči se <em>vždy léčí jako komorová tachykardie (VT)</em>, dokud není vyloučena Brugada kritérii! Podání blokátorů AV uzlu (verapamil, adenosin) u preexcitované arytmie může vyvolat zástavu oběhu.`
      }
    };

    function resizeCanvas() {
      if (!canvas) return;
      canvas.width = canvas.parentElement.clientWidth;
      canvas.height = canvas.parentElement.clientHeight;
    }
    window.addEventListener('resize', resizeCanvas);

    function setEcgRhythm(rhythm) {
      currentRhythm = rhythm;
      document.querySelectorAll('.ecg-selector-btn').forEach(btn => {
        btn.classList.remove('bg-sky-600', 'text-white');
        btn.classList.add('bg-slate-100', 'text-slate-700');
      });
      const activeBtn = document.getElementById(`ecg-btn-${rhythm}`);
      if (activeBtn) {
        activeBtn.classList.add('bg-sky-600', 'text-white');
        activeBtn.classList.remove('bg-slate-100', 'text-slate-700');
      }

      document.getElementById('canvas-label').innerText = `${ecgDataPresets[rhythm].title} | Rychlost posunu: 25 mm/s`;
      document.getElementById('ecg-explanation-box').innerHTML = ecgDataPresets[rhythm].explanation;
    }

    // Generátor tvaru křivky podle typu rytmu
    function getEcgY(t, rhythm) {
      const mid = canvas.height / 2;
      const scale = canvas.height * 0.35;

      if (rhythm === 'sinus') {
        const period = 120; // cca 75 bpm
        const phase = t % period;
        // P vlna (phase 20-35)
        if (phase > 20 && phase < 35) {
          return mid - Math.sin((phase - 20) / 15 * Math.PI) * (scale * 0.2);
        }
        // QRS (phase 50-65)
        if (phase >= 50 && phase < 53) return mid + (scale * 0.15); // Q
        if (phase >= 53 && phase < 58) return mid - (scale * 1.0);  // R
        if (phase >= 58 && phase < 63) return mid + (scale * 0.35); // S
        // T vlna (phase 80-105)
        if (phase > 80 && phase < 105) {
          return mid - Math.sin((phase - 80) / 25 * Math.PI) * (scale * 0.3);
        }
        return mid;
      } 
      else if (rhythm === 'avnrt') {
        const period = 50; // rychlý rytmus (180 bpm)
        const phase = t % period;
        // Chybí normální P vlna (je skrytá v QRS)
        if (phase >= 15 && phase < 17) return mid + (scale * 0.1);
        if (phase >= 17 && phase < 21) return mid - (scale * 1.0); // R
        if (phase >= 21 && phase < 24) return mid + (scale * 0.4); // S
        if (phase >= 24 && phase < 27) return mid - (scale * 0.15); // pseudo-r'
        // T vlna
        if (phase > 30 && phase < 45) {
          return mid - Math.sin((phase - 30) / 15 * Math.PI) * (scale * 0.25);
        }
        return mid;
      }
      else if (rhythm === 'wpw') {
        const period = 110;
        const phase = t % period;
        // P vlna
        if (phase > 15 && phase < 28) {
          return mid - Math.sin((phase - 15) / 13 * Math.PI) * (scale * 0.18);
        }
        // Zkrácený PR, hned delta vlna (phase 30-40)
        if (phase >= 30 && phase < 38) {
          const deltaProgress = (phase - 30) / 8;
          return mid - deltaProgress * (scale * 0.35); // pozvolná delta
        }
        // Hrot R
        if (phase >= 38 && phase < 43) return mid - (scale * 0.95);
        if (phase >= 43 && phase < 48) return mid + (scale * 0.3);
        // T vlna
        if (phase > 65 && phase < 90) {
          return mid - Math.sin((phase - 65) / 25 * Math.PI) * (scale * 0.28);
        }
        return mid;
      }
      else if (rhythm === 'vt') {
        const period = 55;
        const phase = t % period;
        // Široký bizarní komplex
        const sineVal = Math.sin((phase / period) * Math.PI * 2);
        return mid + sineVal * (scale * 0.85);
      }
      return mid;
    }

    let timeStep = 0;
    function drawEcg() {
      if (!canvas || canvas.width === 0) return;

      // Kreslení mřížky
      ctx.fillStyle = '#020617';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
      ctx.lineWidth = 1;
      const gridSize = 16;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, canvas.height); ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(canvas.width, y); ctx.stroke();
      }

      // Aktualizace oscilogramu
      timeStep += 1;
      const yVal = getEcgY(timeStep, currentRhythm);
      scanX = (scanX + 2) % canvas.width;

      historyPoints[scanX] = yVal;
      // Vymažeme pár bodů dopředu pro "radarový" efekt
      for (let i = 1; i <= 15; i++) {
        const clearIdx = (scanX + i) % canvas.width;
        historyPoints[clearIdx] = null;
      }

      // Vykreslení EKG stopy
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 2.2;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#34d399';

      ctx.beginPath();
      let isDrawing = false;
      for (let x = 0; x < canvas.width; x++) {
        const pt = historyPoints[x];
        if (pt !== null && pt !== undefined) {
          if (!isDrawing) {
            ctx.moveTo(x, pt);
            isDrawing = true;
          } else {
            ctx.lineTo(x, pt);
          }
        } else {
          isDrawing = false;
        }
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(drawEcg);
    }

    // ==========================================
    // 3. ACTIVE RECALL DATA & LOGIKA
    // ==========================================
    const recallQuestions = [
      {
        id: 1,
        q: "Jaký je elektrofyziologický rozdíl mezi ortodromní a antidromní AVRT?",
        a: "<strong>Ortodromní AVRT (90 % případů):</strong> Vzruch putuje anterográdně přes normální AV uzel a Hisův svazek (depolarizace komor fyziologickou cestou &rarr; <em>úzký QRS komplex</em>) a retrográdně zpět do síní přes akcesorní dráhu.<br><br><strong>Antidromní AVRT (10 %):</strong> Vzruch putuje anterográdně přes akcesorní dráhu přímo do myokardu komor (&rarr; <em>široký aberantní QRS</em>) a retrográdně se vrací přes AV uzel/Hisův svazek."
      },
      {
        id: 2,
        q: "Jaké EKG nálezy tvoří diagnostickou triádu Wolffova-Parkinsonova-Whiteova (WPW) syndromu na klidovém EKG?",
        a: "1. <strong>Zkrácený PR interval</strong> (&lt; 120 ms) v důsledku obejití fyziologického zdržení v AV uzlu.<br>2. <strong>Delta vlna</strong> (pozvolný náběh počátku QRS komplexu v důsledku preexcitace svaloviny komor).<br>3. <strong>Rozšířený QRS komplex</strong> (&gt; 120 ms) se sekundárními repolarizačními změnami."
      },
      {
        id: 3,
        q: "Proč je podání blokátorů AV uzlu (adenosin, verapamil, beta-blokátory) životu nebezpečné u pacienta s preexcitovanou fibrilací síní?",
        a: "Pokud má pacient akcesorní dráhu (WPW) a dostane fibrilaci síní, blokádou AV uzlu se veškerý elektrický proud ze síní (300–600/min) přesměruje přes akcesorní dráhu, která nemá zdržovací schopnost AV uzlu. To způsobí bleskový převod na komory a přechod do <strong>fibrilace komor a náhlou srdeční smrt</strong>."
      },
      {
        id: 4,
        q: "Jak se správně provádí modifikovaný Valsalvův manévr (REVERT protokol) a jaké dosahuje účinnosti?",
        a: "Pacient v polosedě usilovně fouká do 10ml stříkačky (tlak cca 40 mmHg) po dobu <strong>15 sekund</strong>. Ihned poté je položen na záda a personál mu <strong>zvedne dolní končetiny do úhlu 45° na 15 sekund</strong> (masivní žilní návrat). Účinnost ukončení pSVT je <strong>až 43–54 %</strong>, což je více než dvojnásobek oproti standardnímu manévru."
      },
      {
        id: 5,
        q: "Jaké je správné dávkování a technika podání adenosinu u dospělého se stabilní úzkokomplexovou pSVT?",
        a: "<strong>První dávka:</strong> 6 mg IV rychlým bolusem (rapid push během 1–2 sekund) do periferní žíly co nejblíže srdci (ideálně kubitální žíla), ihned následováno <strong>rychlým proplachem 20 ml fyziologického roztoku</strong>.<br>Pokud nedojde k terminaci arytmie do 1–2 minut, podává se <strong>druhá dávka: 12 mg IV</strong> stejným způsobem."
      },
      {
        id: 6,
        q: "Jaká je metoda volby pro dlouhodobou kurativní léčbu recidivující symptomatické pSVT?",
        a: "<strong>Katetrizační radiofrekvenční ablace (RFA)</strong>. Jde o bezpečnou, kurativní metodu první volby doporučovanou guidelines (ESC/ACC) s úspěšností přesahující 95 % u AVNRT i AVRT/WPW. Po úspěšné ablaci pacient zpravidla nepotřebuje žádnou chronickou antiarytmickou medikaci."
      }
    ];

    function renderRecallQuestions() {
      const container = document.getElementById('recall-container');
      container.innerHTML = recallQuestions.map(item => `
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div class="flex items-start justify-between gap-4">
            <span class="text-xs font-bold text-sky-600 bg-sky-50 px-2.5 py-1 rounded-md">Otázka ${item.id}</span>
            <span class="text-xs text-slate-400">Active Recall</span>
          </div>
          <h3 class="text-sm md:text-base font-bold text-slate-900">${item.q}</h3>
          
          <div id="recall-ans-${item.id}" class="hidden mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed">
            ${item.a}
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button onclick="toggleRecall(${item.id})" id="btn-toggle-recall-${item.id}" class="text-xs font-semibold text-sky-600 hover:text-sky-800 flex items-center gap-1.5 transition-colors">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              <span>Zobrazit odpověď</span>
            </button>
            <div class="flex items-center gap-1 text-[11px]">
              <span class="text-slate-400 mr-1">Moje hodnocení:</span>
              <button onclick="rateRecall(this, 'easy')" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-emerald-100 hover:text-emerald-800 transition-colors">Snadné</button>
              <button onclick="rateRecall(this, 'medium')" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-amber-100 hover:text-amber-800 transition-colors">Těžké</button>
              <button onclick="rateRecall(this, 'hard')" class="px-2.5 py-1 rounded bg-slate-100 hover:bg-rose-100 hover:text-rose-800 transition-colors">Nevěděl(a) jsem</button>
            </div>
          </div>
        </div>
      `).join('');
    }

    function toggleRecall(id) {
      const box = document.getElementById(`recall-ans-${id}`);
      const btn = document.getElementById(`btn-toggle-recall-${id}`);
      if (box.classList.contains('hidden')) {
        box.classList.remove('hidden');
        btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18"></path></svg> Skrýt odpověď`;
      } else {
        box.classList.add('hidden');
        btn.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> Zobrazit odpověď`;
      }
    }

    function rateRecall(btn, level) {
      const parent = btn.parentElement;
      parent.querySelectorAll('button').forEach(b => b.classList.remove('ring-2', 'ring-sky-500', 'font-bold'));
      btn.classList.add('ring-2', 'ring-sky-500', 'font-bold');
    }

    // ==========================================
    // 4. KVÍZOVÉ OTÁZKY (SINGLE CHOICE)
    // ==========================================
    const quizData = [
      {
        id: 1,
        question: "32letá dosud zdravá žena přichází na urgentní příjem s náhle vzniklým bušením srdce. TK je 125/80 mmHg, TF 185/min, saturace 98 %. EKG ukazuje pravidelnou tachykardii s úzkými QRS komplexy bez zřetelných vln P. Jaký je nejvhodnější bezprostřední první krok v managementu?",
        options: [
          "Intravenózní bolus adenosinu 6 mg",
          "Synchronizovaná elektrická kardioverze 100 J",
          "Vagové manévry (např. modifikovaný Valsalvův manévr)",
          "Amiodaron 150 mg IV v infuzi po dobu 10 minut"
        ],
        correct: 2,
        explanation: "U hemodynamicky stabilního pacienta s pravidelnou úzkokomplexovou tachykardií jsou nefarmakologické vagové manévry (1. linie) doporučeny před podáním léků. Mají úspěšnost 19–54 % a nulové riziko lékových nežádoucích účinků."
      },
      {
        id: 2,
        question: "Pokud u výše uvedené pacientky správně provedené vagové manévry nevedou k ukončení tachykardie a pacientka zůstává stabilní, jaký farmakologický krok je doporučen jako lék první volby?",
        options: [
          "Diltiazem 0,25 mg/kg IV po dobu 2 minut",
          "Adenosin 6 mg IV rychlý bolus následovaný proplachem",
          "Metoprolol 5 mg IV opakovaně po 5 minutách",
          "Digoxin 0,5 mg IV pomalu"
        ],
        correct: 1,
        explanation: "Pokud vagové manévry selžou, lékem 1. volby je intravenózní adenosin v počáteční dávce 6 mg IV rapid push. Blokátory kalciových kanálů či beta-blokátory jsou až dalším krokem při selhání adenosinu."
      },
      {
        id: 3,
        question: "Který z následujících EKG nálezů svědčí pro Wolff-Parkinson-Whiteův (WPW) syndrom v klidovém období (mimo paroxysmus tachykardie)?",
        options: [
          "Prodloužený PR interval > 200 ms a blokáda pravého raménka",
          "Zkrácený PR interval < 120 ms, přítomnost delta vlny a rozšířený QRS",
          "Inverze vln T v prekordiálních svodech V1–V3 a elevace ST úseku",
          "Pravidelný flutterový zubovitý vzorec ve svodech II, III, aVF"
        ],
        correct: 1,
        explanation: "Klasickou triádou preexcitace u WPW je zkrácený PR interval (< 120 ms), pomalý vzestup QRS komplexu (tzv. delta vlna) a rozšířený QRS komplex (> 120 ms)."
      },
      {
        id: 4,
        question: "54letý muž s anamnézou infarktu myokardu přichází s pravidelnou tachykardií s širokými QRS komplexy (160 ms), TF 170/min, TK 115/75 mmHg. Který z následujících postupů je správný?",
        options: [
          "Podat verapamil 5 mg IV pro podezření na aberantně vedenou AVNRT",
          "Přistupovat k rytmu jako ke komorové tachykardii (VT) a podat IV Procainamid",
          "Okamžitě aplikovat adenosin 18 mg IV",
          "Propustit pacienta domů s preskripcí perorálního beta-blokátoru"
        ],
        correct: 1,
        explanation: "Zásadní pravidlo: Každá širokokomplexová tachykardie se považuje za komorovou tachykardii (VT), dokud se neprokáže opak. U stabilního pacienta je lékem volby IV procainamid (nebo amiodaron). Verapamil je u VT přísně kontraindikován, hrozí hemodynamický kolaps!"
      },
      {
        id: 5,
        question: "Který typ paroxysmální supraventrikulární tachykardie je celosvětově nejčastější a tvoří přibližně dvě třetiny (cca 65 %) všech případů pSVT?",
        options: [
          "Fokální síňová (atriální) tachykardie (AT)",
          "Atrioventrikulární nodální reentry tachykardie (AVNRT)",
          "Ortodromní atrioventrikulární reentry tachykardie (AVRT)",
          "Multifokální síňová tachykardie (MAT)"
        ],
        correct: 1,
        explanation: "AVNRT je nejčastější formou pSVT (~65 % případů), typicky postihuje mladší dospělé a ženy. Její podstatou je reentry okruh v oblasti AV uzlu tvořený pomalou a rychlou dráhou."
      },
      {
        id: 6,
        question: "Která intervence je doporučována současnými kardiologickými guidelines jako metoda první volby pro definitivní kurativní léčbu symptomatické recidivující AVNRT či AVRT?",
        options: [
          "Doživotní monoterapie verapamilem per os",
          "Implantace kardioverteru-defibrilátoru (ICD)",
          "Katetrizační radiofrekvenční ablace (RFA)",
          "Chirurgický MAZE zákrok"
        ],
        correct: 2,
        explanation: "Katetrizační ablace je metodou 1. volby s kurativním potenciálem (> 95 % úspěšnost, minimální morbidita). Odstraňuje nutnost trvalé farmakoterapie."
      }
    ];

    let userAnswers = {};

    function renderQuiz() {
      const container = document.getElementById('quiz-questions-container');
      container.innerHTML = quizData.map((q, idx) => `
        <div class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4" id="quiz-card-${q.id}">
          <div class="flex items-center justify-between">
            <span class="text-xs font-bold text-slate-500 uppercase tracking-wider">Případ ${idx + 1} z ${quizData.length}</span>
            <span id="quiz-status-${q.id}" class="text-xs font-semibold text-slate-400">Nezodpovězeno</span>
          </div>
          <h3 class="text-sm font-semibold text-slate-900 leading-relaxed">${q.question}</h3>
          
          <div class="space-y-2">
            ${q.options.map((opt, optIdx) => `
              <button onclick="handleAnswer(${q.id}, ${optIdx})" id="opt-btn-${q.id}-${optIdx}" class="quiz-opt-btn w-full text-left p-3 rounded-xl border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:border-slate-300 transition-all flex items-center justify-between">
                <span>${opt}</span>
                <span class="circle-indicator w-4 h-4 rounded-full border border-slate-300 shrink-0 ml-2"></span>
              </button>
            `).join('')}
          </div>

          <div id="quiz-expl-${q.id}" class="hidden p-3.5 rounded-xl text-xs leading-relaxed">
            <!-- Vysvětlení po odpovědi -->
          </div>
        </div>
      `).join('');
    }

    function handleAnswer(questionId, selectedIdx) {
      if (userAnswers[questionId] !== undefined) return; // Již zodpovězeno

      const q = quizData.find(item => item.id === questionId);
      userAnswers[questionId] = selectedIdx;

      const isCorrect = selectedIdx === q.correct;
      const statusBadge = document.getElementById(`quiz-status-${questionId}`);
      const explBox = document.getElementById(`quiz-expl-${questionId}`);

      // Stylování tlačítek
      for (let i = 0; i < q.options.length; i++) {
        const btn = document.getElementById(`opt-btn-${questionId}-${i}`);
        btn.disabled = true;
        btn.classList.remove('hover:bg-slate-50', 'hover:border-slate-300');
        if (i === q.correct) {
          btn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-900', 'font-bold');
        } else if (i === selectedIdx && !isCorrect) {
          btn.classList.add('bg-rose-50', 'border-rose-400', 'text-rose-900');
        } else {
          btn.classList.add('opacity-50');
        }
      }

      if (isCorrect) {
        statusBadge.innerText = "Správně ✓";
        statusBadge.className = "text-xs font-bold text-emerald-600";
        explBox.className = "p-3.5 rounded-xl text-xs leading-relaxed bg-emerald-50 text-emerald-900 border border-emerald-200 block";
        explBox.innerHTML = `<strong>Správně!</strong> ${q.explanation}`;
      } else {
        statusBadge.innerText = "Chybně ✗";
        statusBadge.className = "text-xs font-bold text-rose-600";
        explBox.className = "p-3.5 rounded-xl text-xs leading-relaxed bg-rose-50 text-rose-900 border border-rose-200 block";
        explBox.innerHTML = `<strong>Nesprávná volba.</strong> ${q.explanation}`;
      }

      updateQuizScore();
    }

    function updateQuizScore() {
      let correctCount = 0;
      Object.keys(userAnswers).forEach(qId => {
        const q = quizData.find(item => item.id === parseInt(qId));
        if (userAnswers[qId] === q.correct) correctCount++;
      });
      document.getElementById('quiz-score-text').innerText = `${correctCount} / ${quizData.length}`;
    }

    // ==========================================
    // 5. FLASHCARDS DATA & LOGIKA
    // ==========================================
    const flashcardsData = [
      {
        cat: "Epidemiologie",
        front: "Jaká je prevalence pSVT a která demografická skupina je nejčastěji postižena?",
        back: "Prevalence je cca 2,29 na 1 000 osob. Nejčastěji jsou postiženy ženy středního věku (tvoří odhadem 62 % všech případů)."
      },
      {
        cat: "Elektrofyziologie AVNRT",
        front: "Kde se nachází reentry okruh u AVNRT a jaké dvě dráhy obsahuje?",
        back: "Okruh je v AV uzlu a perinodální síňové tkáni. Obsahuje pomalou dráhu (slow pathway - kratší refrakterní perioda) a rychlou dráhu (fast pathway - delší refrakterní perioda)."
      },
      {
        cat: "EKG Diagnostika",
        front: "Co způsobuje vznik 'pseudo-r' vlny ve svodu V1 a 'pseudo-s' vlny v dolních svodech?",
        back: "Relativně opožděné retrográdní síňové vedení u typické AVNRT. Retrográdní vlna P se zapíše na samém konci QRS komplexu a vytvoří tyto pseudo-výchylky."
      },
      {
        cat: "Syndromologie",
        front: "Jak je definován Wolff-Parkinson-Whiteův (WPW) syndrom?",
        back: "Kombinace preexcitace na EKG (delta vlna, krátký PR, široký QRS) a přítomnosti symptomatických tachyarytmií využívajících akcesorní spojku."
      },
      {
        cat: "Akutní terapie",
        front: "Jaký je postup 1. linie u hemodynamicky NESTABILNÍHO pacienta s pSVT?",
        back: "Okamžitá synchronizovaná elektrická kardioverze (za analgosedace). Při selhání přechod na ACLS postupy."
      },
      {
        cat: "Farmakologie",
        front: "Jaké jsou hlavní nežádoucí účinky a pocity pacienta po nitrožilním podání adenosinu?",
        back: "Výrazný pocit tísně či bolesti na hrudi, nával horka (flushing), dyspnoe, přechodná asystolie/bradykardie. Pacienta je nutné předem uklidnit, že odezní do 10–20 sekund."
      },
      {
        cat: "Diferenciální diagnóza",
        front: "Které farmakum je lékem 1. volby u hemodynamicky STABILNÍ širokokomplexové tachykardie?",
        back: "Intravenózní Procainamid (10–17 mg/kg IV infuzí). V klinických studiích prokázal vyšší účinnost a méně kardiovaskulárních nežádoucích účinků než amiodaron."
      },
      {
        cat: "Kardiologické indikace",
        front: "Kteří pacienti s asymptomatickou preexcitací na EKG vyžadují elektrofyzikální vyšetření a zvážení ablace?",
        back: "Osoby s vysoce rizikovým povoláním (piloti, řidiči MHD/kamionů, jeřábníci, potápěči) a vrcholoví sportovci z důvodu rizika náhlé smrti během zátěže."
      }
    ];

    let currentCardIndex = 0;
    let isFlipped = false;

    function renderCurrentCard() {
      const card = flashcardsData[currentCardIndex];
      document.getElementById('card-category').innerText = card.cat;
      document.getElementById('card-front-text').innerText = card.front;
      document.getElementById('card-back-text').innerHTML = card.back;
      document.getElementById('card-counter').innerText = `Kartička ${currentCardIndex + 1} z ${flashcardsData.length}`;
      
      const inner = document.getElementById('flashcard-inner');
      inner.classList.remove('rotate-y-180');
      isFlipped = false;
    }

    function flipCurrentCard() {
      const inner = document.getElementById('flashcard-inner');
      isFlipped = !isFlipped;
      if (isFlipped) {
        inner.classList.add('rotate-y-180');
      } else {
        inner.classList.remove('rotate-y-180');
      }
    }

    function nextCard() {
      currentCardIndex = (currentCardIndex + 1) % flashcardsData.length;
      renderCurrentCard();
    }

    function prevCard() {
      currentCardIndex = (currentCardIndex - 1 + flashcardsData.length) % flashcardsData.length;
      renderCurrentCard();
    }

    function markCardMastered(mastered) {
      nextCard();
    }

    function resetFlashcards() {
      currentCardIndex = 0;
      renderCurrentCard();
    }

    // ==========================================
    // INICIALIZACE APLIKACE
    // ==========================================
    window.addEventListener('DOMContentLoaded', () => {
      renderRecallQuestions();
      renderQuiz();
      renderCurrentCard();
      setEcgRhythm('sinus');
      resizeCanvas();
      drawEcg();
    });
  </script>
</body>
</html>