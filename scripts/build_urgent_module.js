// scripts/build_urgent_module.js - Generátor kurátorovaného modulu Urgentní příjem pro MedDrill PWA (5. ročník)
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const BASE_DIR = path.resolve(__dirname, '..');
const OUT_DIR = path.join(BASE_DIR, 'drill', 'data', 'modules');
const MANIFEST_PATH = path.join(BASE_DIR, 'drill', 'data', 'manifest.json');

function cleanHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .trim();
}

console.log('Building curated Urgentní příjem module for Grade 5...');

// -------------------------------------------------------------
// 1. KAZUISTIKY Z cases.js (18 kazuistik)
// -------------------------------------------------------------
const casesModule = require(path.join(BASE_DIR, 'cases.js'));
const urgentQuestions = [];

const CASE_ENHANCEMENTS = {
  "1": {
    actionPlan: `• Okamžitý postup (ABCDE & MONA/FONA):
  1. Zajištění 2x i.v. vstupu velkého kalibru (zelená/růžová kanyla).
  2. Kyslík POUZE pokud je SpO2 < 90 % (zde 92 % -> kyslík rutinně NEPODÁVAT).
  3. Dvojitá protidestičková léčba (DAPT): Kyselina acetylsalicylová (ASA) 300 mg p.o. rozkousat + Tikagrelor 180 mg p.o. (nebo Prasugrel 60 mg p.o.).
  4. Antikoagulace: Neextrakovaný heparin (UFH) 70–100 IU/kg i.v. bolus.
  5. Analgézie: Fentanyl 1–2 ug/kg i.v. nebo Morfin 2–4 mg i.v. titračně.
  6. EKG kontrola: U spodního STEMI vždy dotočit pravokomorové svody (V3R–V4R).
• Směřování pacienta: Okamžitá aktivace katetrizačního sálu (katlabu) – transport k primární PCI (pPCI) bez prodlení, čas "door-to-balloon" < 60 minut.`,
    pearl: "U STEMI spodní stěny (II, III, aVF) vždy dotočte pravokomorové svody V3R–V4R! Při infarktu pravé komory jsou nitráty i diuretika přísně kontraindikovány pro riziko fatálního poklesu preloadu a obstrukčního kolapsu."
  },
  "2": {
    actionPlan: `• Okamžitý postup:
  1. Oxygenoterapie k udržení SpO2 ≥ 92 %.
  2. Zajištění žilního vstupu, odběry: STATIM troponin, D-dimery, ABR, krevní obraz, ionty, koagulace.
  3. Stratifikace rizika (sPESI skóre): Tachykardie 124/min, SpO2 88 %, známky přetížení PK na ECHO -> středně vysoké riziko (intermediate-high risk).
  4. Okamžitá antikoagulace: Nízkomolekulární heparin (LMWH, např. Enoxaparin 1 mg/kg s.c. po 12h) nebo nefrakcionovaný heparin (UFH).
  5. Upozornění na alergii na jód: Při indikaci CT pulmonální angiografie (CTPA) podat premedikaci (Methylprednisolon 40–120 mg i.v. + Dithiaden 1 amp. i.v.) nebo provést scintigrafii plic (V/Q scan).
• Směřování pacienta: Přijetí na JIP/koronární jednotku s kontinuální monitorací vitálních funkcí a připraveností k záchranné trombolýze při hemodynamickém kolapsu.`,
    pearl: "U plicní embolie se středním rizikem je systémová trombolýza kontraindikována (převyšuje riziko fatálního intrakraniálního krvácení); indikována je plná dávka LMWH/UFH a pečlivá observace na JIP."
  },
  "3": {
    actionPlan: `• Okamžitý postup (ATLS & cABCDE):
  1. <C> Masivní krvácení: Okamžitá aplikace škrtidla (turniketu) na krvácející ránu stehna, pánevní pás (pelvic binder) na nestabilní pánev.
  2. <A> Dýchací cesty s imobilizací krční páteře: Šetrná manuální stabilizace, příprava na rychlou sekvenční intubaci (RSI) pro GCS 9.
  3. <B> Dýchání: Odhalena asymetrie a oslabené dýchání vpravo -> urgentní punkční/hrudní drenáž (4.–5. mezižebří ve střední axilární čáře).
  4. <C> Oběh: Aktivace masivního transfuzního protokolu (MTP 1:1:1 = erymasy : mražená plazma : trombocyty).
  5. Kyselina tranexamová (TXA): 1 g i.v. v infuzi během 10 minut co nejdříve (do 3 hodin od úrazu), následovaná infuzí 1 g na 8 hodin.
• Směřování pacienta: Okamžitý transport na emergency trauma sál / operační sál k damage control surgery a angioembolizaci pánevních tepen.`,
    pearl: "Při hemoragickém šoku u polytraumatu podejte kyselinu tranexamovou (TXA 1 g i.v.) ihned; podání po 3 hodinách od úrazu naopak mortalitu zvyšuje!"
  },
  "4": {
    actionPlan: `• Okamžitý postup:
  1. Zklidnění dítěte v náručí matky – vyvarovat se invazivních stresujících vyšetření (zákaz vyšetření hrdla lžičkou pro riziko reflexní laryngeální zástavy!).
  2. Inhalační adrenalin: 1:1000 (1 mg/ml) v dávce 0,5 ml/kg (max. 5 ml) nebulizací s kyslíkem. Rychlý nástup vazokonstrikce zmenší edém sliznice do 10–20 minut.
  3. Systémový kortikosteroid: Dexamethason 0,15–0,6 mg/kg p.o./i.m./i.v. jednorázově (nebo Prednison / rektální čípek).
  4. Chladný vlhký vzduch.
• Směřování pacienta: Observace na dětské JIP/urgentním příjmu minimálně 2–4 hodiny po inhalaci adrenalinu kvůli riziku rebound fenoménu (návrat otoku).`,
    pearl: "U subglotické laryngitidy se štěkavým kašlem nikdy násilně nevyšetřujte dutinu ústní lžičkou; lékem volby je inhalace adrenalinu (1 mg/ml) s kyslíkem a jednorázový dexamethason."
  },
  "5": {
    actionPlan: `• Okamžitý postup:
  1. Neurologické zhodnocení (FAST, NIHSS skóre) a ověření času vzniku příznaků ("last known well").
  2. Vyloučení hypoglykémie: Okamžitá glykémie z prstu (STATIM).
  3. Urgentní nativní CT mozku k vyloučení intracerebrálního krvácení + CT angiografie (CTA) k průkazu okluze velké mozkové tepny (LVO - a. cerebri media / a. carotis interna).
  4. Intravenózní trombolýza (IVT): Rekombinantní tkáňový aktivátor plazminogenu (Altepláza 0,9 mg/kg, max. 90 mg; 10 % bolus, zbytek na 60 min) v terapeutickém okně do 4,5 hodiny.
  5. Mechanická trombektomie (MT): V okně do 6 (až 24 hodin dle CT perfuze) při okluzi velké cévy.
• Směřování pacienta: Okamžitý převoz na iktovou jednotku / intervenční angiografický sál komplexního cerebrovaskulárního centra (KCC).`,
    pearl: "U každého pacienta s náhlým neurologickým defitem (podezření na CMP) nejprve změřte glykémii u lůžka; těžká hypoglykémie je nejčastější 'stroke mimic'."
  },
  "6": {
    actionPlan: `• Okamžitý postup:
  1. OKAMŽITÁ jehlová dekomprese hrudníku – tenzní PNO je absolutně klinická diagnóza, čekání na RTG snímek je závažná chyba lege artis!
  2. Místo dekomprese: 2. mezižebří v medioklavikulární čáře (Monaldi) nebo 4.–5. mezižebří v přední/střední axilární čáře (Bülau) silnou kanylou s ventilem (14G–16G).
  3. Následná definitivní hrudní drenáž (hrudní drén 28–32F) napojený na podtlakovou vodní sání.
  4. 100% kyslík maskou s rezervoárem.
• Směřování pacienta: Urgentní stabilizace vitálních funkcí, následné kontrolní RTG hrudníku a přijetí na chirurgickou JIP.`,
    pearl: "Tenzní pneumotorax je přísně klinická diagnóza (asymetrie, hypoxie, hypotenze, deviace trachey). Provedení RTG před dekompresí je fatální prodlení – dekomprimujte okamžitě!"
  },
  "7": {
    actionPlan: `• Okamžitý postup:
  1. Masivní infuzní volumoterapie: Fyziologický roztok (0,9% NaCl) nebo balancovaný krystaloid (Plasmalyte) rychlostí 1000 ml/h v 1. hodině.
  2. Vyšetření kalémie: PŘED zahájením podávání inzulínu zkontrolujte sérový draslík!
     - Je-li K+ < 3,3 mmol/l: INZULÍN NEPODÁVEJTE, nejprve doplňte kalium!
     - Je-li K+ 3,3–5,3 mmol/l: Přidejte KCl do infuze a začněte inzulín.
  3. Inzulínoterapie: Nízce dávkovaný rychlý inzulín (Actrapid / Humulin R) kontinuálně 0,1 IU/kg/h i.v. Cílem je pokles glykémie o 3–4 mmol/l za hodinu.
  4. Jakmile glykémie klesne pod 14–15 mmol/l: Přidat 5% glukózu k prevenci mozkového edému a pokračovat v inzulínu k vyhojení ketoacidózy (uzavření anion gapu).
• Směřování pacienta: Přijetí na metabolickou JIP, hodinové kontroly glykémie a ABR.`,
    pearl: "Při léčbě diabetické ketoacidózy (DKA) nikdy nezahajujte infuzi inzulínu při kalémii pod 3,3 mmol/l – inzulín způsobí intracelulární přesun draslíku s rizikem fatální asystolie."
  },
  "8": {
    actionPlan: `• Okamžitý postup:
  1. Zastavit expozici alergenu (léku/infuzi).
  2. Okamžité i.m. podání adrenalinu: 0,5 mg (1:1000 = 0,5 ml) hluboko do anterolaterální strany stehna (m. vastus lateralis). Zopakovat po 5–10 minutách při nelepšení!
  3. Kyslík vysokoprůtokovou maskou s rezervoárem (10–15 l/min).
  4. Polohování: Pacient leží na zádech se zvednutými dolními končetinami (autotransfuzní poloha). Náhlé posazení může způsobit syndrom prázdného srdce a zástavu!
  5. Masivní krystaloidy i.v.: 1000–2000 ml rychlým přetlakem u hypotenze.
  6. Léky 2. linie (až po adrenalinu!): Dithiaden 1 amp. i.v. + Hydrocortison 200–500 mg i.v.
• Směřování pacienta: Observace na JIP minimálně 12–24 hodin kvůli riziku bifázické anafylaktické reakce.`,
    pearl: "Adrenalin u anafylaxe podávejte VŽDY intramuskulárně do anterolaterálního stehna (vastus lateralis) v dávce 0,5 mg; i.v. bolus adrenalinu je vyhrazen pouze pro oběhovou zástavu nebo zkušené anesteziology."
  },
  "9": {
    actionPlan: `• Okamžitý postup:
  1. Klidový režim na lůžku, zákaz příjmu tekutin a stravy per os (nil per os).
  2. Zajištění žilního vstupu, zahájení infuzní krystaloidní terapie.
  3. Analgézie: Spasmolytikum + analgetikum (Metamizol 1–2,5 g i.v., případně Piritramid i.v.).
  4. Širokospektrá antibiotika: Cefotaxim/Ceftriaxon + Metronidazol i.v.
  5. Chirurgické konzilium STATIM a ultrasonografie břicha / nativní RTG břicha ve stoje (k vyloučení pneumoperitonea při perforaci).
• Směřování pacienta: Urgentní transport na operační sál k laparoskopické nebo otevřené appendektomii a laváži dutiny břišní.`,
    pearl: "U náhlých příhod břišních (NPB) neodkládejte podání systémové analgézie ze strachu ze 'zastření nálezu' – adekvátní analgezie uvolní svalovou defenzu a usnadní palpaci i vyšetření."
  },
  "10": {
    actionPlan: `• Okamžitý postup:
  1. <A+B> Zajištění dýchacích cest a ventilace: Odsátí, záklon hlavy, prodýchávání samorozpínacím vakem (Ambuvak) se 100% O2 přes masku.
  2. Specifické antidotum: Naloxon (Intrenon) v iniciální dávce 0,4 mg (u apnoe až 0,8–2 mg) i.v./i.m./i.n.
  3. Titrace dávky: Cílem není plné probuzení pacienta do abstinenčního syndromu, ale obnova adekvátní spontánní ventilace (DF > 10–12/min).
  4. Varování: Poločas účinku Naloxonu je 30–90 minut, zatímco většina opioidů působí 4–6 hodin i déle – hrozí návrat respirační deprese!
• Směřování pacienta: Nemocniční observace minimálně 4–6 hodin (u retardovaných forem opioidů 24 hodin).`,
    pearl: "Poločas účinku Naloxonu (30–60 min) je podstatně kratší než poločas většiny opioidů; po úspěšné resuscitaci hrozí pacientovi po odeznění antidota návrat těžké apnoe a udušení."
  },
  "11": {
    actionPlan: `• Okamžitý postup:
  1. Agresivní časná infuzní resuscitace: Ringer-laktát nebo Plasmalyte rychlostí 200–300 ml/h (cílem je diuréza > 0,5 ml/kg/h a pokles hematokritu).
  2. Účinná multimodální analgézie: Opioidní analgetika (Piritramid / Sufentanil) kontinuálně či v PCA pumpě.
  3. Žlučové cesty: Odběry jaterních testů a sonografie břicha. Při přetrvávající biliární obstrukci a cholangitidě indikovat urgentní ERCP se sfinkterotomií do 24 hodin.
  4. Rutinní profylaktické podávání antibiotik se u mírné a střední pankreatitidy nedoporučuje.
• Směřování pacienta: Přijetí na JIP/ARO, přísná monitorace orgánových funkcí (krevní plyny, laktát, kalcium, renální parametry).`,
    pearl: "U akutní pankreatitidy je klíčová agresivní volumoterapie v prvních 24 hodinách; profylaktické podávání antibiotik je u neinfikované nekrózy překonané a nedoporučené."
  },
  "12": {
    actionPlan: `• Okamžitý postup (Sepsis-3 bundle do 1 hodiny):
  1. Odběr laktátu z krve STATIM + vyšetření ABR.
  2. Odběr minimálně 2 sad hemokultur (z periferní žíly a z centrálního katétru) PŘED zahájením ATB + kultivace moči.
  3. Širokospektrá antibiotika i.v. do 60 minut od stanovení diagnózy (např. Meropenem nebo Piperacilin/Tazobactam).
  4. Rychlá krystaloidní resuscitace: Balancovaný krystaloid v dávce 30 ml/kg do 3 hodin.
  5. Vazopresor: Pokud přetrvává hypotenze (MAP < 65 mmHg) navzdory tekutinám -> včasné zahájení infuze Noradrenalinu k udržení MAP ≥ 65 mmHg.
• Směřování pacienta: Urgentní příjem na resuscitační lůžko ARO/JIP, zavedení invazivního arteriálního krevního tlaku a permanentního močového katétru.`,
    pearl: "Vazopresorem 1. volby u septického šoku je Noradrenalin s cílovým MAP ≥ 65 mmHg; podání hemokultur a širokospektrých ATB musí proběhnout do 1 hodiny ('Golden Hour')."
  },
  "13": {
    actionPlan: `• Okamžitý postup:
  1. Poloha v polosedě se svěšenými dolními končetinami (snížení žilního návratu a preloadu).
  2. Neinvazivní plicní ventilace (NIV / CPAP): Okamžité nasazení obličejové masky s PEEP 5–10 cmH2O (zlepšuje oxygenaci a snižuje práci dýchání).
  3. Vazodilatancia (u hypertenzního plicního edému): Nitroglycerin i.v. v infuzi nebo perlingvální sprej (snižuje preload i afterload levé komory).
  4. Kličková diuretika: Furosemid 40–80 mg i.v. bolus.
  5. EKG a troponin: Vyloučení akutního infarktu myokardu jako spouštěče selhání.
• Směřování pacienta: Koronární jednotka / kardiologická JIP.`,
    pearl: "U kardiálního plicního edému s hypertenzí je lékem číslo 1 intravenózní Nitroglycerin a časný CPAP/NIV; samotný Furosemid bez vazodilatace nástup záchrany neurychlí."
  },
  "14": {
    actionPlan: `• Okamžitý postup:
  1. Okamžité nativní CT mozku STATIM (záchyt krve v subarachnoidálním prostoru, bazálních cisternách).
  2. Při negativním CT a silném klinickém podezření: Lumbální punkce s odstupem 12 hodin (průkaz xantochromie likvoru spektrofotometrií).
  3. Striktní kontrola krevního tlaku: Cílový systolický TK < 140–160 mmHg k prevenci re-bleeding (Urapidil nebo Labetalol i.v.).
  4. Prevence vazospasmů a sekundární ischémie: Nimodipin 60 mg po 4 hodinách p.o./sondou.
  5. CTA mozkových cév nebo digitální subtrakční angiografie (DSA) k lokalizaci aneuryzmatu.
• Směřování pacienta: Okamžitý transport na neurochirurgii / neurointervenční sál (endovaskulární coiling nebo chirurgický clipping aneuryzmatu do 24–48 hodin).`,
    pearl: "Každá náhlá, vteřinu vzniklá bolest hlavy ('hromobití', thunderclap headache) je subarachnoidální krvácení, dokud se neprokáže opak; lékem prevence vazospasmů je perorální Nimodipin."
  },
  "15": {
    actionPlan: `• Okamžitý postup:
  1. Zjištění přesného času požití a odhadu dávky (toxická dávka > 150 mg/kg nebo > 7,5–10 g u dospělého).
  2. Odběr paracetamolu v séru: Má smysl za 4 hodiny po požití a hodnotí se podle Rumackova-Matthewova nomogramu.
  3. Specifické antidotum: N-acetylcystein (NAC):
     - Pokud je čas požití nejasný, dávka byla masivní nebo uplynulo > 8 hodin, podat NAC IHNED bez čekání na výsledky laboratoře!
     - Dávkovací schéma: 150 mg/kg v infuzi během 60 min, dále 50 mg/kg na 4 hodiny, dále 100 mg/kg na 16 hodin (nebo moderní 2-infuzní zjednodušený protokol).
  4. Výplach žaludku / aktivní uhlí (50 g p.o.) má smysl pouze do 1–2 hodin od požití.
• Směřování pacienta: Přijetí na JIP, monitorace jaterních enzymů (ALT, AST), bilirubinu a koagulace (INR/Quick).`,
    pearl: "Při podezření na toxickou dávku paracetamolu (> 150 mg/kg) aplikujte N-acetylcystein (NAC) co nejdříve; nejvyšší hepatoprotektivní účinnost má do 8 hodin od požití."
  },
  "16": {
    actionPlan: `• Okamžitý postup:
  1. Oxygenoterapie k udržení saturace 92–96 % (u CHOPN 88–92 %).
  2. Odběr hemokultur a sputa před zahájením ATB.
  3. Stratifikace závažnosti (CURB-65 skóre): Zmatenost, Urea > 7, DF ≥ 30, TK < 90/60, Věk ≥ 65 let.
  4. Empirická antibiotická terapie pro těžkou CAP: Kombinace beta-laktamu (Co-amoxicilin i.v. nebo Cefotaxim i.v.) s makrolidem (Klarithromycin i.v.) k pokrytí atypických patogenů (Legionella).
  5. Močový antigen na Legionella pneumophila a Streptococcus pneumoniae.
• Směřování pacienta: Přijetí na pneumologickou / interní JIP.`,
    pearl: "U těžké komunitní pneumonie (CAP) vyžadující hospitalizaci na JIP musí úvodní empirická antibiotická léčba vždy obsahovat makrolid ke spolehlivému pokrytí Legionella pneumophila."
  },
  "17": {
    actionPlan: `• Okamžitý postup (krokový algoritmus):
  1. Fáze 1 (0–5 min): Zajištění průchodnosti dýchacích cest, kyslík, polohování, glykémie z prstu.
  2. Fáze 2 (5–10 min, léky 1. volby - benzodiazepiny):
     - Diazepam 10 mg i.v. pomalu nebo Midazolam 10 mg i.m. / bukálně (či Clonazepam 1 mg i.v.).
     - Lze zopakovat 1x po 5 minutách při přetrvávání křečí.
  3. Fáze 3 (10–30 min, léky 2. volby):
     - Levetiracetam (Keppra) 60 mg/kg i.v. (max. 4500 mg) nebo Valproát sodný 40 mg/kg i.v. (případně Fenytoin).
  4. Fáze 4 (> 30–60 min, refrakterní status):
     - Celková anestezie s endotracheální intubací a UPV (Propofol / Thiopental / Midazolam v kontinuální infuzi za EEG monitorace).
• Směřování pacienta: Okamžité přijetí na neurologickou JIP / ARO.`,
    pearl: "Status epilepticus trvající déle než 5 minut sám neodezní a vyžaduje okamžité i.v. či i.m. podání benzodiazepinů; po 30 minutách dochází k ireverzibilnímu poškození neuronů excitotoxicitou."
  },
  "18": {
    actionPlan: `• Okamžitý postup:
  1. Zavedení permanentního močového katétru k přísné hodinové bilanci diurézy.
  2. Okamžité přerušení všech nefrotoxických látek (NSAID, ACE inhibitory, sartany, aminoglykosidy).
  3. Krystaloidní infuzní terapie (balancované roztoky, např. Plasmalyte 1000–2000 ml) k obnově efektivního cirkulujícího objemu a renální perfuze.
  4. Biochemické vyšetření moči: Odlišení prerenálního AKI od akutní tubulární nekrózy (ATN):
     - U prerenálního AKI: Frakční exkrece sodíku (FENa) < 1 %, osmolarita moči > 500 mOsm/kg, poměr Urea/Kreatinin v plazmě vysoký (> 20:1).
  5. Ultrasonografie ledvin: Vyloučení postrenální obstrukce (hydronefrózy).
• Směřování pacienta: Přijetí na nefrologické / interní oddělení nebo JIP, monitorace kalémie.`,
    pearl: "Prerenální selhání ledvin je plně reverzibilní včasnou hydratací krystaloidy; frakční exkrece sodíku (FENa) pod 1 % svědčí pro zachovanou schopnost ledvin šetřit sodík."
  }
};

if (casesModule && casesModule.CASES) {
  Object.keys(casesModule.CASES).forEach(caseId => {
    const c = casesModule.CASES[caseId];
    const enh = CASE_ENHANCEMENTS[caseId] || {};
    
    const scenario = `${c.name} (${c.age} let, ${c.sex}).
Anamnéza: ${c.history ? c.history.join(', ') : 'Bez závažné anamnézy'}. Alergie: ${c.allergies ? c.allergies.join(', ') : 'Žádné'}.

Hlavní potíž: ${c.mainComplaint}.
Klinický popis: ${c.complaintDetail}

Iniciální vitální funkce:
• Srdeční frekvence (TF): ${c.vitals.tf}/min
• Krevní tlak (TK): ${c.vitals.tk_sys}/${c.vitals.tk_dia} mmHg
• Saturace SpO2: ${c.vitals.spo2} %
• Glasgow Coma Scale (GCS): ${c.vitals.gcs}
• Dechová frekvence: ${c.vitals.rr}/min
• Tělesná teplota: ${c.vitals.temp} °C

Paraklinické nálezy:
• EKG: ${c.imagingResult ? c.imagingResult.ekg : 'Bez akutních změn'}
• Laboratoř: ${c.labsResult ? (c.labsResult.biochem || c.labsResult.ko) : 'Výsledky v normě'}
${c.imagingResult && c.imagingResult.rtg ? '• RTG: ' + c.imagingResult.rtg : ''}
${c.imagingResult && c.imagingResult.ct ? '• CT: ' + c.imagingResult.ct : ''}`;

    const solution = `• Diagnóza: ${c.secretDiagnosis} (MKN kód: ${c.secretDiagnosisCode || '-'}, Triage třída: ${c.triageClass || 2})

${enh.actionPlan || '• Okamžitý postup: Stabilizace vitálních funkcí, kauzální léčba a včasné směřování na specializované lůžko.'}`;

    const pearl = enh.pearl || `Klíčový klinický přístup pro ${c.title}: Rychlé rozpoznání a včasná cílená terapie zachraňují život.`;

    urgentQuestions.push({
      id: `urgent-case-${c.id}`,
      subjectId: 'urgent',
      subjectTitle: 'Urgentní příjem',
      grade: 5,
      topicId: `urgent-level-${c.level}`,
      topicTitle: `Kazuistika: ${c.title}`,
      type: 'case_study',
      title: c.title,
      vignette: {
        patientAge: c.age,
        patientSex: c.sex,
        chiefComplaint: c.mainComplaint,
        scenario: scenario + '\n\nKlinický úkol: Stanovte pracovní diagnózu a popište bezodkladný terapeutický postup v prvních 10 minutách.',
        solution: solution,
        keyTakeaway: pearl
      },
      explanation: solution,
      pearl: pearl,
      tags: ['Kazuistika', 'Simulátor', 'Urgentní medicína', '5. ročník']
    });
  });
}

// -------------------------------------------------------------
// 2. OTÁZKY Z UPV (20 otázek z upv/data.js) S UNIKÁTNÍMI PERLAMI
// -------------------------------------------------------------
const upvData = require(path.join(BASE_DIR, 'upv', 'data.js'));

const UPV_PEARLS = [
  "Zvýšení špičkového inspiračního tlaku (PIP) při stabilním Plateau tlaku značí nárůst odporu dýchacích cest (rezistence – např. sekret, kousnutí do kanyly), nikoli zhoršení compliance plic.",
  "Dechový objem u ARDS se počítá striktně podle ideální predikované hmotnosti (PBW = výška pacienta), nikoli podle aktuální váhy obézního pacienta, aby se předešlo smrtícímu volutraumatu.",
  "Driving pressure (Pplat - PEEP) udržujte striktně pod 15 cmH2O; hodnoty nad 15 cmH2O jsou přímo asociovány s vyšší mortalitou na ARDS.",
  "Pokud křivka výdechového průtoku nedosáhne nuly před dalším vdechem, v plicích vzniká Auto-PEEP; řešením je prodloužit expirační čas snížením dechové frekvence.",
  "Při volumově řízené ventilaci (VCV) se Plateau tlak měří pomocí inspirační pauzy (nulový průtok); odráží statickou compliance alveolů a hrudní stěny a nesmí překročit 30 cmH2O.",
  "Při tlakově řízené ventilaci (PCV) je dechový objem proměnlivý a závisí na compliance plic – při zhoršení plicního edému nebo bronchospasmu objem dramaticky klesne!",
  "Pronační poloha u těžkého ARDS (PaO2/FiO2 < 150) musí trvat minimálně 16 po sobě jdoucích hodin denně, aby se prokazatelně snížila mortalita pacienta.",
  "Při ventilaci pacienta s těžkou obstrukcí (astma/CHOPN) je klíčový poměr I:E 1:3 až 1:4 a nízká frekvence (10–12/min) k prevenci dynamické hyperinflace a barotraumatu.",
  "Náhlý pokles EtCO2 na nulu u ventilovaného pacienta znamená buď extubaci/odpojení okruhu, nebo okamžitou srdeční zástavu (ztrátu plicní cirkulace).",
  "Při spontánním dýchání v režimu tlakové podpory (PSV) nastavte trigger co nejcitlivěji, aby pacient nevyvíjel zbytečnou doplňkovou dechovou práci.",
  "Iniciální hodnota PEEP u středně těžkého až těžkého ARDS se nastavuje podle tabulky PEEP/FiO2 obvykle na 10–15 cmH2O k prevenci atelektotraumatu.",
  "Permisivní hyperkapnie u ARDS je tolerována až do pH 7,20, pokud tím zabráníme překročení bezpečných inspiračních tlaků v dýchacích cestách.",
  "Při náhlém vzestupu tlaku v dýchacích cestách u intubovaného pacienta pamatujte na mnemotechniku DOPE: Dislodgement (dislokace), Obstruction (obstrukce), Pneumothorax, Equipment failure.",
  "Test spontánního dýchání (SBT) na T-tubusu nebo s minimální podporou po dobu 30 minut je zlatým standardem před extubací pacienta z ventilátoru.",
  "Při akutním ARDS v poloze na břiše dochází k redistribuci perfuze a provzdušnění dorzálních atelektatických zón plic bez zvýšení nitrohrudního tlaku.",
  "Při asynchronii pacienta s ventilátorem vždy nejprve vylučte tenzní pneumotorax a obstrukci kanyly před podáním sedativ či svalových relaxancií.",
  "Mechanický mrtvý prostor ventilačního okruhu (od Y-spojky) nesmí být prodlužován zbytečnými spojkami, zejména u hyperkapnických pacientů.",
  "Tracheostomie je indikována při předpokládané ventilaci delší než 10–14 dní; zkracuje mrtvý prostor, usnadňuje toaletu DC a urychluje weaning.",
  "Statická compliance plic pod 30 ml/cmH2O svědčí pro těžkou restrikci typickou pro pokročilý syndrom ARDS ('baby lung').",
  "Při transportu intubovaného pacienta používejte transportní ventilátor s PEEP ventilem; odpojení a ruční prodýchávání bez PEEP vede k okamžitému kolapsu alveolů."
];

if (upvData && Array.isArray(upvData.quiz)) {
  upvData.quiz.forEach((q, idx) => {
    const pearl = UPV_PEARLS[idx] || 'Zásady protektivní plicní ventilace dle ČSARIM: VT 4–6 ml/kg PBW, Driving pressure < 15 cmH2O.';
    urgentQuestions.push({
      id: `urgent-upv-${q.id}`,
      subjectId: 'urgent',
      subjectTitle: 'Urgentní příjem',
      grade: 5,
      topicId: 'urgent-upv-ventilace',
      topicTitle: 'Umělá plicní ventilace & ARDS',
      type: 'single_choice',
      question: cleanHtml(q.question),
      options: (q.options || []).map(opt => cleanHtml(opt)),
      correctIndex: typeof q.correct === 'number' ? q.correct : 0,
      explanation: cleanHtml(q.explanation || 'Správný postup dle principů intenzivní medicíny.'),
      pearl: pearl,
      tags: ['Single Choice', 'UPV', 'Ventilace', 'Intenzivní péče', '5. ročník']
    });
  });
}

// -------------------------------------------------------------
// 3. ANESZTÉZIE A KRIZOVÉ STAVY (15 otázek z quizzes_cs.ts)
// -------------------------------------------------------------
const anestPath = path.join(BASE_DIR, 'clinical-learning-portal', 'src', 'data', 'quizzes_cs.ts');
if (fs.existsSync(anestPath)) {
  const anestContent = fs.readFileSync(anestPath, 'utf8');
  // Vyhodnotit exportovaný kvíz
  const match = anestContent.match(/export\s+const\s+ANESTHESIA_QUIZ_CS\s*:\s*QuizQuestion\[\]\s*=\s*(\[[\s\S]*?\]);/);
  if (match) {
    try {
      const parsedQuizzes = eval(match[1]);
      const ANEST_PEARLS = [
        "Etomidát (0,2–0,3 mg/kg) je nejstabilnější indukční anestetikum u šoku a aortální stenózy; má minimální vliv na kontraktilitu myokardu a systémový cévní odpor.",
        "Sukcinylcholin je přísně kontraindikován u chronických míšních lézí a popálenin od 24 hodin po úrazu pro riziko masivní fatální hyperkalémie z extrajunkčních receptorů.",
        "Při nezajištěných dýchacích cestách (CICO) po podání rokuronia podejte Sugammadex v záchranné megadávce 16 mg/kg; obnoví spontánní ventilaci do 3 minut.",
        "Ketamin je anestetikum volby u těžkého bronchospasmu a astmatického statusu díky přímé bronchodilataci a stimulaci endogenních katecholaminů.",
        "Při toxicitě lokálními anestetiky (LAST) je lékem volby 20% Intralipid (1,5 ml/kg bolus); vyvarujte se vazopresinu a vysokých dávek adrenalinu.",
        "Maligní hypertermie vyžaduje okamžité podání Dantrolenu v dávce 2,5 mg/kg i.v. a okamžité ukončení přívodu inhalačních anestetik a sukcinylcholinu.",
        "Při masivním krvácení aplikujte kyselinu tranexamovou (TXA 1 g i.v.) co nejdříve, nejpozději do 3 hodin od úrazu; pozdější podání zvyšuje mortalitu.",
        "Masivní transfuzní protokol s poměrem 1:1:1 (erymasy : plazma : trombocyty) brání rozvoji diluční koagulopatie u těžkého polytraumatu.",
        "FAST ultrazvuk detekuje volnou tekutinu v břiše od objemu cca 150–200 ml; nejcitlivějším prostorem je Morisonův prostor (recessus hepatorenalis).",
        "U septického šoku zahajte infuzi Noradrenalinu k dosažení MAP ≥ 65 mmHg a aplikujte širokospektrá antibiotika do 1 hodiny od diagnózy.",
        "Naloxon u předávkování opioidy titrujte po malých dávkách k obnově dechu; náhlé probuzení vyvolá masivní sympatickou bouři a plicní edém.",
        "Při nemožnosti intubace ani ventilace maskou (CICO) okamžitě proveďte koniotomii skalpelem a bužií (BACT – bougie-assisted cricothyroidotomy).",
        "Tenzní pneumotorax okamžitě dekomprimujte punkční jehlou; čekání na RTG snímek u nestabilního pacienta je non lege artis chyba.",
        "Lékem první volby anafylaktického šoku je intramuskulární adrenalin (0,5 mg u dospělého); antihistaminika a kortikoidy mají pouze podpůrný význam.",
        "Terapeutické okno pro i.v. trombolýzu u ischemické CMP je 4,5 hodiny od vzniku příznaků; mechanická trombektomie je možná do 6–24 hodin."
      ];

      parsedQuizzes.forEach((q, idx) => {
        urgentQuestions.push({
          id: `urgent-anest-${q.id || (idx + 1)}`,
          subjectId: 'urgent',
          subjectTitle: 'Urgentní příjem',
          grade: 5,
          topicId: 'urgent-anestezie-krizove-stavy',
          topicTitle: 'Klinická anestezie & Krizové stavy',
          type: 'single_choice',
          question: cleanHtml((q.caseContext ? q.caseContext + '\n\n' : '') + q.question),
          options: (q.options || []).map(opt => cleanHtml(opt)),
          correctIndex: typeof q.correctAnswerIndex === 'number' ? q.correctAnswerIndex : 0,
          explanation: cleanHtml(q.explanation || 'Odborný postup dle standardů ČSARIM a ESAIC.'),
          pearl: ANEST_PEARLS[idx] || 'Bezpečnost pacienta a včasný krizový algoritmus jsou na operačním sále prioritou.',
          tags: ['Single Choice', 'Anestezie', 'Krizové stavy', '5. ročník']
        });
      });
      console.log(`Loaded ${parsedQuizzes.length} anesthesia questions from quizzes_cs.ts`);
    } catch (e) {
      console.warn('Could not parse quizzes_cs.ts:', e);
    }
  }
}

// -------------------------------------------------------------
// 4. EXPERT OTÁZKY Z otazky_ze_hry.ts (50 otázek)
// -------------------------------------------------------------
const gamePath = path.join(BASE_DIR, 'urgentni-prijem', 'otazky_ze_hry.ts');
if (fs.existsSync(gamePath)) {
  const content = fs.readFileSync(gamePath, 'utf8');
  const startIdx = content.indexOf('MEDICAL_QUESTIONS');
  const endIdx = content.indexOf('export function shuffleQuestionOptions');
  const questionsOnly = (startIdx !== -1 && endIdx !== -1)
    ? content.slice(startIdx, endIdx)
    : content;

  // Nahradit problémové vnitřní uvozovky v Harlekýnském syndromu
  const sanitized = 'const ' + questionsOnly
    .replace(/Co označuje pojem "Harlekýnský syndrom" \(North-South syndrom\) u pacienta na femoro-femorálním veno-arteriálním \(VA\) ECMO\?/g,
      'Co označuje pojem Harlekýnský syndrom (North-South syndrom) u pacienta na femoro-femorálním veno-arteriálním VA-ECMO?')
    .replace(/MEDICAL_QUESTIONS\s*:\s*MedicalQuestion\[\]\s*=/g, 'MEDICAL_QUESTIONS =');

  try {
    const fn = new Function(sanitized + '; return MEDICAL_QUESTIONS;');
    const gameQuestions = fn();

    const AIM_EXPERT_PEARLS = {
      aim_q01: "Při resuscitaci toxicity lokálními anestetiky (LAST) podejte 20% Intralipid 1,5 ml/kg bolus a vyhněte se vazopresinu, který zhoršuje acidózu a plicní edém.",
      aim_q02: "Dantrolen u maligní hypertermie blokuje ryanodinový receptor RyR1; iniciální dávku 2,5 mg/kg i.v. opakujte do odeznění rigidity a hypermetabolismu.",
      aim_q03: "Záchranná dávka Sugammadexu 16 mg/kg okamžitě reverzuje hlubokou blokádu rokuroniem (1,2 mg/kg) při nemožnosti intubace ani ventilace (CICO).",
      aim_q04: "Driving pressure (Pplat - PEEP) pod 14–15 cmH2O je nejsilnějším nezávislým prediktorem přežití u syndromu ARDS.",
      aim_q05: "Při kardiopulmonální resuscitaci (KPR) je zlatým standardem monitorace kvality kompresí kapnografie; pokles EtCO2 pod 10 mmHg svědčí o neúčinné masáži.",
      aim_q06: "U anafylaxe při celkové anestezii okamžitě ukončete podávání spouštěče (často myorelaxans nebo antibiotikum) a aplikujte adrenalin i.v. v titrovaných dávkách.",
      aim_q07: "Při intoxikaci kyanidy (např. při požáru v uzavřeném prostoru) je lékem volby Hydroxokobalamin (Cyanokit), který vyváže kyanid na netoxický kyanokobalamin.",
      aim_q08: "Harlekýnský syndrom na periferním VA-ECMO vzniká, když zotavená levá komora pumpuje neokysličenou krev z poškozených plic do mozku a věnčitých tepen.",
      aim_q09: "Při masivní transfuzi nezapomínejte na včasné podání kalcia (CaCl2); citrát v krevních konzervách váže vápník a způsobuje těžkou kardiální depresi.",
      aim_q10: "Při kanylaci arteria radialis je nutné ověřit kolaterální oběh z a. ulnaris (Allenův test nebo duplexní ultrazvuk) k prevenci ischemie ruky.",
      aim_q11: "Propofolový infuzní syndrom (PRIS) hrozí při dávkách nad 4–5 mg/kg/h trvajících déle než 48 hodin; projevuje se těžkou metabolickou acidózou a rabdomyolýzou.",
      aim_q12: "Lékem volby při těžké hyperkalémii s EKG změnami je intravenózní kalcium (10% Calcium gluconicum / chloratum) k okamžité stabilizaci membrány myokardu.",
      aim_q13: "U pacientů s kraniotraumatem udržujte mozkový perfuzní tlak (CPP = MAP - ICP) minimálně 60–70 mmHg k prevenci sekundární ischemie mozku.",
      aim_q14: "Při monitoraci hloubky nervosvalové blokády (TOF) značí 4 záškuby se stejnou amplitudou (TOF ratio > 0,9) bezpečné zotavení z relaxace.",
      aim_q15: "Při punkci tenzního pneumotoraxu unikne vzduch pod tlakem; ihned po dekompresi musí následovat zavedení plnohodnotného hrudního drénu.",
      aim_q16: "Hypotermie pod 35 °C zhoršuje enzymatickou aktivitu koagulačních faktorů a funkci trombocytů – udržení normotermie je základem hemostázy u traumatu.",
      aim_q17: "U status epilepticus podejte jako první linii benzodiazepin (Midazolam i.m. / Diazepam i.v.), druhou linií je Levetiracetam v dávce 60 mg/kg i.v.",
      aim_q18: "Kyselina tranexamová (TXA) blokuje vazbu plazminogenu na fibrin a brání tak předčasné lýze krevní sraženiny v prvních hodinách po úrazu.",
      aim_q19: "Centrální žilní katétr (CŽK) zavedený do vena jugularis interna pod ultrazvukovou kontrolou výrazně snižuje riziko nechtěné punkce arteria carotis.",
      aim_q20: "Cílová tělesná teplota po úspěšné KPR pro komorovou fibrilaci je striktní prevence horečky (teplota 32–36 °C nebo striktně < 37,5 °C po dobu 72 hodin).",
      aim_q21: "Při anesteziologické indukci u nalačněného pacienta s rizikem aspirace (RSI) aplikujte krikoidní tlak (Sellickův hmat) pouze tehdy, pokud nezhoršuje výhled na hlasivky.",
      aim_q22: "Inhalační anestetikum sevofluran má nízký krevní rozdělovací koeficient, což umožňuje velmi rychlý úvod i probuzení z celkové anestezie.",
      aim_q23: "Při předávkování paracetamolem podávejte N-acetylcystein (NAC) co nejdříve k obnově hepatálních zásob glutathionu.",
      aim_q24: "Při monitoraci EEG bispektrálním indexem (BIS) odpovídá hodnota 40–60 optimální hloubce celkové anestezie s minimálním rizikem intraoperačního bdění.",
      aim_q25: "Při podezření na poranění krční páteře provádějte intubaci se zachováním manuální stabilizace v neutrální poloze (MILS – Manual In-Line Stabilization).",
      aim_q26: "Při intoxikaci oxidem uhelnatým (CO) je pulzní oxymetr falešně normální; diagnostiku potvrdí pouze hladina karboxyhemoglobinu (COHb) z krevních plynů.",
      aim_q27: "Vysokofrekvenční oscilační ventilace (HFOV) se u dospělého ARDS nedoporučuje; standardem zůstává protektivní konvenční ventilace s nízkými objemy.",
      aim_q28: "Při náhlém vzniku komorové tachykardie bez hmatného pulzu je okamžitým krokem defibrilace jedním výbojem a následná 2minutová KPR bez přerušení.",
      aim_q29: "U obézních pacientů s BMI > 40 intubujte v poloze 'ramped position' (zarovnání zevního zvukovodu s incisura jugularis sterni).",
      aim_q30: "Při těžkém kardiogenním šoku je lékem volby Noradrenalin k udržení perfuzního tlaku v kombinaci s Dobutaminem k podpoře srdeční kontraktility.",
      aim_q31: "Dexmedetomidin jako selektivní centrální alfa-2 agonista poskytuje kooperativní sedaci s analgezií bez útlumu dechového pohonu, což usnadňuje weaning.",
      aim_q32: "Berlínská kritéria definují těžký ARDS poměrem PaO2/FiO2 ≤ 100 mmHg při PEEP ≥ 5 cmH2O; indikuje včasné zahájení pronační polohy.",
      aim_q33: "Při KPR refrakterní fibrilace komor se Amiodaron podává po 3. výboji (300 mg i.v.) a po 5. výboji (150 mg i.v.); alternativou je Lidokain (100 mg a 50 mg).",
      aim_q34: "Mannitol způsobuje osmotickou diurézu s rizikem hypovolemie a poklesu CPP; hypertonický solný roztok (3% NaCl) expanduje objem a stabilizuje tlak.",
      aim_q35: "Apfelovo skóre hodnotí 4 nezávislé rizikové faktory pooperační nevolnosti: ženské pohlaví, nekuřák, anamnéza PONV/kinetózy a pooperační opioidy.",
      aim_q36: "Při masivní vzduchové embolii otočte pacienta okamžitě do Durantovy polohy (levý bok + Trendelenburg), aby bublina nezablokovala výtokový trakt pravé komory.",
      aim_q37: "Septický šok je definován přetrvávající hypotenzí vyžadující vazopresory k udržení MAP ≥ 65 mmHg a laktátem > 2,0 mmol/l navzdory adekvátní volumoterapii.",
      aim_q38: "Při nálezu Cormack-Lehane 3b je epiglottis přitištěná k zadní stěně faryngu; intubace vyžaduje videolaryngoskop nebo flexibilní intubační bronchoskop.",
      aim_q39: "Cisatrakurium se v organismu odbourává spontánní Hofmannovou eliminací; jeho účinek a doba zotavení jsou nezávislé na renálních i jaterních funkcích.",
      aim_q40: "IABP nafouknutím v časné diastole zvyšuje koronární perfuzi a vyfouknutím těsně před ejekcí významně snižuje afterload levé komory.",
      aim_q41: "Po ROSC po mimonemocniční zástavě je klíčový TTM: striktní prevence teploty > 37,5 °C po dobu minimálně 72 hodin brání sekundárnímu poškození mozku.",
      aim_q42: "Při toxické methemoglobinémii pulzní oxymetr ukazuje falešně fixní hodnotu SpO2 kolem 85 %; antidotem volby je 1% methylenová modř 1–2 mg/kg i.v.",
      aim_q43: "Fenylefrin jako čistý alfa-1 agonista zvyšuje cévní odpor (SVR) a tlak, ale spouští vagový reflex vedoucí k bradykardii a možnému poklesu srdečního výdeje.",
      aim_q44: "Pronační poloha u těžkého ARDS (PaO2/FiO2 < 150) homogenizuje transpulmonální tlak a rekrutuje dorzální laloky plic; musí trvat alespoň 16 hodin denně.",
      aim_q45: "Při refrakterním septickém šoku nereagujícím na noradrenalin přidejte Vazopresin v dávce 0,03 IU/min (působí přes V1 receptory a šetří katecholaminy).",
      aim_q46: "1 MAC inhalačního anestetika zabrání reakci na incizi u 50 % pacientů; pro Sevofluran je to cca 2,0 %, Isofluran 1,15 % a Desfluran 6,0 %.",
      aim_q47: "Při vysoké spinální blokádě s výpadkem sympatiku T1–T4 vzniká těžká hypotenze s paradoxní bradykardií; okamžitě aplikujte Efedrin/Adrenalin a elevujte nohy.",
      aim_q48: "Kryoprecipitát obsahuje 10× vyšší koncentraci fibrinogenu než čerstvá plazma; je indikován při hypofibrinogenémii pod 1,5–2,0 g/l při nedostupnosti koncentrátu.",
      aim_q49: "Sellickův hmat stlačuje prstencovou chrupavku proti C6 k uzávěru jícnu; při zhoršení vizualizace hlasivek během intubace jej okamžitě uvolněte.",
      aim_q50: "Vysoká aniontová mezera (HAGMA, norma 8–12 mmol/l) spolehlivě odhalí laktátovou acidózu, ketoacidózu, urémii a intoxikace metanolem či etylenglykolem."
    };

    gameQuestions.forEach((q, idx) => {
      const cleanQ = cleanHtml(q.question);
      const pearl = AIM_EXPERT_PEARLS[q.id] || "Včasná aplikace specifického resuscitačního algoritmu zásadně ovlivňuje přežití pacienta.";

      urgentQuestions.push({
        id: `urgent-game-${q.id || (idx + 1)}`,
        subjectId: 'urgent',
        subjectTitle: 'Urgentní příjem',
        grade: 5,
        topicId: `urgent-${(q.category || 'aim').toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
        topicTitle: cleanHtml(q.category || 'Urgentní medicína'),
        type: 'single_choice',
        question: cleanQ,
        options: (q.options || []).map(opt => cleanHtml(opt)),
        correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
        explanation: cleanHtml(q.rationale || 'Správný postup dle mezinárodních doporučení intenzivní péče.'),
        pearl: pearl,
        tags: ['Single Choice', cleanHtml(q.category || 'Urgentní medicína'), q.difficulty || 'Expert', '5. ročník']
      });
    });
    console.log(`Loaded ${gameQuestions.length} questions from otazky_ze_hry.ts`);
  } catch (e) {
    console.warn('Could not parse otazky_ze_hry.ts:', e);
  }
}

// -------------------------------------------------------------
// 5. DOPISOVACÍ OTÁZKY (30 vysoce výtěžných dopisovaček, 1-2 slova)
// -------------------------------------------------------------
const URGENT_FILL_INS = [
  {
    id: "urgent-fill-01",
    topicId: "urgent-kpr-als",
    topicTitle: "Kardiopulmonální resuscitace dle ERC",
    question: "Jaká je standardní intravenózní dávka adrenalinu podávaná při KPR dospělého každých 3–5 minut?",
    acceptedAnswers: ["1 mg", "1mg", "jeden miligram"],
    hint: "1 mg (v jedné ampuli).",
    explanation: "Dle ERC Guidelines je standardní dávka adrenalinu při KPR dospělého 1 mg i.v./i.o. každých 3–5 minut (u defibrilovatelných rytmů po 3. výboji, u nedefibrilovatelných ihned).",
    pearl: "Při resuscitaci podávejte adrenalin 1 mg i.v. u asystolie/PEA ihned po zajištění vstupu; u fibrilace komor až po 3. neúspěšném defibrilačním výboji."
  },
  {
    id: "urgent-fill-02",
    topicId: "urgent-kpr-als",
    topicTitle: "Kardiopulmonální resuscitace dle ERC",
    question: "Jaká je úvodní intravenózní bolusová dávka amiodaronu podávaná při refrakterní fibrilaci komor po 3. výboji?",
    acceptedAnswers: ["300 mg", "300mg", "300"],
    hint: "300 mg (2 ampule po 150 mg).",
    explanation: "Při defibrilovatelných rytmech (FiK / pulseless KT) se po 3. výboji podává Amiodaron 300 mg i.v. bolus (ředěný v 5% glukóze); po 5. výboji se podává druhá dávka 150 mg i.v.",
    pearl: "Amiodaron se při KPR aplikuje po 3. výboji v dávce 300 mg i.v.; druhá dávka 150 mg i.v. následuje po 5. výboji."
  },
  {
    id: "urgent-fill-03",
    topicId: "urgent-kpr-als",
    topicTitle: "Kardiopulmonální resuscitace dle ERC",
    question: "Jaký je správný poměr kompresí hrudníku a umělých vdechů u dospělého pacienta při základní neodkladné resuscitaci (BLS)?",
    acceptedAnswers: ["30:2", "30/2"],
    hint: "30 ku 2.",
    explanation: "Standardní poměr zevní srdeční masáže a umělých vdechů u dospělého je 30 kompresí ku 2 vdechům, a to až do zajištění dýchacích cest endotracheální kanylou.",
    pearl: "Poměr 30:2 platí pro všechny dospělé resuscitace; po zajištění DC endotracheální kanylou se komprese provádějí kontinuálně bez přerušování na vdechy."
  },
  {
    id: "urgent-fill-04",
    topicId: "urgent-kpr-als",
    topicTitle: "Kardiopulmonální resuscitace dle ERC",
    question: "V jakém rozmezí centimetrů má být hloubka kompresí hrudníku při kvalitní zevní masáži dospělého?",
    acceptedAnswers: ["5-6 cm", "5–6 cm", "5-6", "5 cm", "6 cm"],
    hint: "5 až 6 cm (ne více než 6 cm).",
    explanation: "Hloubka kompresí má být minimálně 5 cm a maximálně 6 cm s úplným uvolněním hrudníku mezi stlačeními k zajištění plnění srdce.",
    pearl: "Hloubka stlačení 5–6 cm a úplné uvolnění hrudníku umožňují optimální koronární perfuzní tlak; nedostatečná relaxace snižuje žilní návrat."
  },
  {
    id: "urgent-fill-05",
    topicId: "urgent-krizove-stavy-toxikologie",
    topicTitle: "Toxikologie & Antidota",
    question: "Jaký lék je specifickým antidotem při těžké respirační depresi vyvolané předávkováním opioidy (heroin, morfin, fentanyl)?",
    acceptedAnswers: ["naloxon", "naloxone", "intrenon"],
    hint: "Naloxon.",
    explanation: "Naloxon je čistý kompetitivní antagonista opioidních receptorů (mí, kappa, delta). Podává se i.v./i.m./i.n. v dávce 0,4–2 mg k obnovení spontánní ventilace.",
    pearl: "Při podávání Naloxonu titrujte dávku k obnově dechové frekvence nad 10/min; náhlé předávkování vyvolá prudký abstinenční syndrom s rizikem plicního edému."
  },
  {
    id: "urgent-fill-06",
    topicId: "urgent-krizove-stavy-toxikologie",
    topicTitle: "Toxikologie & Antidota",
    question: "Který lék je specifickým kompetitivním antagonistou benzodiazepinů na GABA-A receptorech?",
    acceptedAnswers: ["flumazenil", "anexate"],
    hint: "Flumazenil (Anexate).",
    explanation: "Flumazenil je kompetitivní antagonista benzodiazepinů. Používá se k probuzení po sedaci či intoxikaci BZD; pozor na riziko křečí u chronických uživatelů BZD či intoxikace tricyklickými antidepresivy.",
    pearl: "Flumazenil nepodávejte naslepo při smíšených intoxikacích s tricyklickými antidepresivy – hrozí vyvolání refrakterního epileptického záchvatu."
  },
  {
    id: "urgent-fill-07",
    topicId: "urgent-krizove-stavy-toxikologie",
    topicTitle: "Toxikologie & Antidota",
    question: "Jaký roztok je lékem první volby při systémové toxicitě lokálními anestetiky (LAST) k navození 'lipidového dřezu'?",
    acceptedAnswers: ["intralipid", "20% intralipid", "lipidová emulze", "lipidova emulze"],
    hint: "Intralipid (20% tuková emulze).",
    explanation: "Při LAST (toxicita bupivakainu, lidokainu) je lékem volby 20% tuková emulze (Intralipid). Funguje jako lipidový dřez (lipid sink), který vychytá lipofilní anestetikum z myokardu a mozku.",
    pearl: "Intralipid 20% (1,5 ml/kg bolus) mějte vždy na sále při provádění svodné anestezie; dokáže zvrátit zdánlivě fatální srdeční zástavu vyvolanou bupivakainem."
  },
  {
    id: "urgent-fill-08",
    topicId: "urgent-krizove-stavy-toxikologie",
    topicTitle: "Toxikologie & Antidota",
    question: "Který lék (specifický inhibitor ryanodinového receptoru RyR1) je život zachraňujícím antidotem při maligní hypertermii?",
    acceptedAnswers: ["dantrolen", "dantrolene", "dantrium"],
    hint: "Dantrolen.",
    explanation: "Dantrolen blokuje uvolňování vápníku ze sarkoplazmatického retikula přes RyR1 receptor, čímž okamžitě zastavuje nekontrolovaný hypermetabolismus svalových buněk u maligní hypertermie.",
    pearl: "Při maligní hypertermii okamžitě ukončete přívod těkavých anestetik a aplikujte Dantrolen 2,5 mg/kg i.v.; každá minuta prodlení dramaticky zvyšuje mortalitu."
  },
  {
    id: "urgent-fill-09",
    topicId: "urgent-anestezie-farmakologie",
    topicTitle: "Anesteziologie & Svalová relaxancia",
    question: "Jaký lék (modifikovaný cyklodextrin) představuje specifické reverzní antidotum pro steroidní myorelaxancium rokuronium?",
    acceptedAnswers: ["sugammadex", "bridion"],
    hint: "Sugammadex (Bridion).",
    explanation: "Sugammadex enkapsuluje volné molekuly rokuronia (a vekuronia) v plazmě v poměru 1:1, čímž okamžitě ukončí nervosvalovou blokádu i po megadávkách podaných při RSI.",
    pearl: "Sugammadex reverzuje rokuronium i po úvodní vysoké dávce (1,2 mg/kg) během 2–3 minut; v záchranném režimu CICO se podává dávka 16 mg/kg i.v."
  },
  {
    id: "urgent-fill-10",
    topicId: "urgent-trauma-krvaceni",
    topicTitle: "Traumatologie & Masivní krvácení",
    question: "Jaké antifibrinolytikum podané do 3 hodin od úrazu prokazatelně snižuje mortalitu na vykrvácení u těžkého traumatu?",
    acceptedAnswers: ["kyselina tranexamová", "tranexamová", "txa", "exacyl"],
    hint: "Kyselina tranexamová (TXA).",
    explanation: "Kyselina tranexamová (TXA) je kompetitivní inhibitor plazminogenu. Studie CRASH-2 prokázala signifikantní snížení mortality, pokud je 1 g podán i.v. do 3 hodin od úrazu.",
    pearl: "Kyselina tranexamová (TXA 1 g i.v.) se musí aplikovat do 3 hodin od úrazu; podání po 3. hodině naopak zvyšuje mortalitu v důsledku tromboembolismu."
  },
  {
    id: "urgent-fill-11",
    topicId: "urgent-trauma-krvaceni",
    topicTitle: "Traumatologie & Masivní krvácení",
    question: "Kolik hodin od úrazu představuje maximální časový limit, po jehož překročení již nesmí být TXA podána pro riziko zvýšení úmrtnosti?",
    acceptedAnswers: ["3 hodiny", "3 h", "3", "tři hodiny"],
    hint: "3 hodiny.",
    explanation: "Při aplikaci TXA po více než 3 hodinách od úrazu dochází k paradoxnímu zvýšení úmrtnosti a riziku tromboembolických komplikací.",
    pearl: "Limit pro podání TXA u polytraumatu jsou striktně 3 hodiny od momentu poranění."
  },
  {
    id: "urgent-fill-12",
    topicId: "urgent-sokove-stavy",
    topicTitle: "Šok & Hemodynamika",
    question: "Jaká je cílová hodnota středního arteriálního tlaku (MAP) v milimetrech rtuti při tekutinové a vazopresorické resuscitaci septického šoku?",
    acceptedAnswers: ["65 mmHg", "65", "šedesát pět"],
    hint: "65 mmHg.",
    explanation: "Dle Surviving Sepsis Campaign je cílem iniciální resuscitace septického šoku udržet střední arteriální tlak (MAP) ≥ 65 mmHg, což zajišťuje adekvátní perfuzi životně důležitých orgánů.",
    pearl: "Cílový MAP ≥ 65 mmHg u septického šoku udržujte včasnou kombinací krystaloidů (30 ml/kg) a Noradrenalinu."
  },
  {
    id: "urgent-fill-13",
    topicId: "urgent-sokove-stavy",
    topicTitle: "Šok & Hemodynamika",
    question: "Který katecholamin je vazopresorem první volby pro obnovu cévního tonu u distributivního a septického šoku?",
    acceptedAnswers: ["noradrenalin", "norepinefrin", "noradrenaline"],
    hint: "Noradrenalin.",
    explanation: "Noradrenalin je silný alfa-1 mimetikum s mírným beta-1 účinkem. Zvyšuje systémový cévní odpor (SVR) a krevní tlak bez vyvolání extrémní tachykardie typické pro dopamin.",
    pearl: "Noradrenalin je suverénním vazopresorem 1. volby u septického i anafylaktického šoku; dopamin je pro vysokou arytmogenitu opuštěn."
  },
  {
    id: "urgent-fill-14",
    topicId: "urgent-sokove-stavy",
    topicTitle: "Šok & Hemodynamika",
    question: "Který metabolit v séru (produkt anaerobní glykolýzy) je hlavním laboratorním ukazatelem tkáňové hypoperfuze a buněčného šoku?",
    acceptedAnswers: ["laktát", "laktat", "kyselina mléčná"],
    hint: "Laktát.",
    explanation: "Hladina laktátu v séru nad 2 mmol/l svědčí pro tkáňovou hypoperfuzi a anaerobní metabolismus. Pokles laktátu (clearance) o > 10–20 % za 2 hodiny je klíčovým cílem úspěšné resuscitace.",
    pearl: "Sérový laktát nad 2 mmol/l je citlivým biomarkerem tkáňové hypoxie; jeho clearance během prvních hodin přímo koreluje s přežitím šoku."
  },
  {
    id: "urgent-fill-15",
    topicId: "urgent-dychaci-cesty",
    topicTitle: "Dýchací cesty & Krizové stavy",
    question: "Jak se nazývá život ohrožující stav v anesteziologii označený zkratkou CICO, kdy nelze pacienta intubovat ani ventilovat obličejovou maskou?",
    acceptedAnswers: ["cico", "krize cico", "stav cico"],
    hint: "CICO (Can't Intubate, Can't Oxygenate).",
    explanation: "CICO je finální krize zajištění dýchacích cest, kdy po selhání intubace i supraglotických pomůcek klesá saturace a jediným řešením je urgentní chirurgický vstup do trachey (eFONA / koniotomie).",
    pearl: "Při situaci CICO neztrácejte čas opakovanými pokusy o laryngoskopii – okamžitě proveďte záchrannou chirurgickou koniotomii (skalpel-bužie-kanyla)."
  },
  {
    id: "urgent-fill-16",
    topicId: "urgent-dychaci-cesty",
    topicTitle: "Dýchací cesty & Krizové stavy",
    question: "Která anatomická membrána mezi štítnou a prstencovou chrupavkou se protíná při urgentní záchranné koniotomii?",
    acceptedAnswers: ["ligamentum cricothyroideum", "membrana cricothyroidea", "krikothyroidní membrána", "krikotyroidni membrana"],
    hint: "Krikothyroidní membrána (ligamentum cricothyroideum).",
    explanation: "Ligamentum cricothyroideum (koniotická membrána) leží povrchově mezi cartilago thyroidea a cricoidea. Je ideálním místem pro rychlý chirurgický vstup do dýchacích cest.",
    pearl: "Koniotomie se provádí protětím ligamentum cricothyroideum těsně pod prominentia laryngea (ohryzkem); jde o nejrychlejší záchranný vstup do subglotických DC."
  },
  {
    id: "urgent-fill-17",
    topicId: "urgent-upv-ventilace",
    topicTitle: "Umělá plicní ventilace & ARDS",
    question: "Jaký cílový dechový objem (v ml/kg predikované hmotnosti PBW) je základem protektivní plicní ventilace u syndromu ARDS?",
    acceptedAnswers: ["6 ml/kg", "4-6 ml/kg", "6", "4–6 ml/kg", "4-6"],
    hint: "4 až 6 ml/kg PBW (obvykle 6 ml/kg).",
    explanation: "Základním pilířem protektivní ventilace dle ARDSNet je nastavení dechového objemu (VT) na 4–6 ml/kg ideální tělesné hmotnosti (PBW) k prevenci volutraumatu a barotraumatu.",
    pearl: "Dechový objem u ARDS nastavujte striktně na 6 ml/kg ideální (predikované) hmotnosti, nikoli podle obézní váhy pacienta."
  },
  {
    id: "urgent-fill-18",
    topicId: "urgent-upv-ventilace",
    topicTitle: "Umělá plicní ventilace & ARDS",
    question: "Jaký je maximální doporučený horní limit Plateau tlaku (Pplat) v cmH2O při protektivní ventilaci plic?",
    acceptedAnswers: ["30 cmH2O", "30", "třicet"],
    hint: "30 cmH2O.",
    explanation: "Plateau tlak (Pplat) odráží tlak v alveolech na konci vdechu při nulovém průtoku. Udržování Pplat < 30 cmH2O chrání plíce před alveolární overdistenzí a barotraumatem.",
    pearl: "Udržujte Plateau tlak na ventilátoru trvale pod 30 cmH2O; hodnoty nad 30 cmH2O vedou k mechanickému roztržení alveolů a pneumotoraxu."
  },
  {
    id: "urgent-fill-19",
    topicId: "urgent-upv-ventilace",
    topicTitle: "Umělá plicní ventilace & ARDS",
    question: "Který parametr na ventilátoru vyjadřující rozdíl Pplat minus PEEP (driving pressure) má být u ARDS udržován pod 14–15 cmH2O?",
    acceptedAnswers: ["driving pressure", "drivující tlak", "tlakový drift"],
    hint: "Driving pressure (drivující tlak).",
    explanation: "Driving pressure (ΔP = Pplat - PEEP) vyjadřuje poměr dechového objemu k poddajnosti plic (VT / Cstat). Je nejsilnějším ventilačním prediktorem mortality u ARDS.",
    pearl: "Driving pressure (Pplat - PEEP) udržujte striktně pod 15 cmH2O; snížení driving pressure má zásadní vliv na přežití ARDS."
  },
  {
    id: "urgent-fill-20",
    topicId: "urgent-sokove-stavy",
    topicTitle: "Anafylaxe & Krizové stavy",
    question: "Jaká je doporučená intramuskulární dávka adrenalinu pro dospělého pacienta při anafylaktickém šoku s hypotenzí či stridorem?",
    acceptedAnswers: ["0,5 mg", "0.5 mg", "0,5mg", "půl miligramu"],
    hint: "0,5 mg i.m. (neředěný 1:1000).",
    explanation: "Dle ERC a EAACI guidelines je úvodní dávka adrenalinu u dospělé anafylaxe 0,5 mg (1:1000 = 0,5 ml) intramuskulárně do anterolaterální strany stehna (m. vastus lateralis).",
    pearl: "Adrenalin u anafylaxe aplikujte ihned i.m. do stehna v dávce 0,5 mg; nečekejte na rozvoj těžké asfyxie nebo oběhového kolapsu."
  },
  {
    id: "urgent-fill-21",
    topicId: "urgent-arytmie-urgent",
    topicTitle: "Urgentní kardiologie & Arytmie",
    question: "Který lék podávaný rychlým nitrožilním bolusem s proplachem fyziologickým roztokem je lékem 1. volby pro terminaci AV nodální reentry tachykardie (AVNRT)?",
    acceptedAnswers: ["adenosin", "adenosine", "adenocor"],
    hint: "Adenosin.",
    explanation: "Adenosin navodí krátkodobou blokádu AV uzlu (poločas < 10 sekund), což okamžitě přeruší reentry okruh u AVNRT. Podává se v rychlém bolusu 6 mg i.v., při neúspěchu 12 mg i.v.",
    pearl: "Adenosin aplikujte vždy co nejblíže k srdci (ideálně do kubitální žíly) v bleskovém bolusu následovaném 20ml proplachem fyziologického roztoku se zvednutím končetiny."
  },
  {
    id: "urgent-fill-22",
    topicId: "urgent-arytmie-urgent",
    topicTitle: "Urgentní kardiologie & Arytmie",
    question: "Který parasympatolytický lék v úvodní dávce 0,5–1 mg i.v. je lékem první volby u symptomatické sinusové bradykardie?",
    acceptedAnswers: ["atropin", "atropine"],
    hint: "Atropin.",
    explanation: "Atropin kompetitivně blokuje muskarinové receptory M2 v srdci, čímž eliminuje vagový vliv a zrychluje frekvenci SA a AV uzlu. Podává se v dávce 0,5–1 mg i.v. (až do maxima 3 mg).",
    pearl: "Při symptomatické bradykardii podejte Atropin 0,5–1 mg i.v.; pokud nezabere, okamžitě přejděte k transkutánní kardiostimulaci nebo infuzi isoprenalinu/adrenalinu."
  },
  {
    id: "urgent-fill-23",
    topicId: "urgent-trauma-fast",
    topicTitle: "Traumatologie & POCUS",
    question: "Jak se nazývá prostor mezi játry a pravou ledvinou (recessus hepatorenalis), který je nejcitlivějším místem pro záchyt volné tekutiny při FAST vyšetření?",
    acceptedAnswers: ["morisonův prostor", "morisonuv prostor", "morison", "recessus hepatorenalis"],
    hint: "Morisonův prostor.",
    explanation: "Morisonův prostor (recessus hepatorenalis) je nejhlubším místem peritoneální dutiny u ležícího pacienta, kde se gravitací nejdříve hromadí krev při hemoperitoneu.",
    pearl: "Morisonův prostor v pravém horním kvadrantu je nejcitlivějším ultrasonografickým oknem FAST vyšetření – volná krev se v něm zobrazuje jako anechogenní černý pruh."
  },
  {
    id: "urgent-fill-24",
    topicId: "urgent-trauma-fast",
    topicTitle: "Traumatologie & POCUS",
    question: "Jak se nazývá ultrasonografický protokol v urgentní medicíně zaměřený na detekci volné tekutiny a pneumotoraxu u traumat (akronym FAST)?",
    acceptedAnswers: ["fast", "efast", "fast protokol", "efast protokol"],
    hint: "FAST (nebo eFAST).",
    explanation: "FAST (Focused Assessment with Sonography for Trauma) a eFAST (extended FAST zahrnující plíce) je standardizovaný protokol k rychlé detekci hemoperitonea, hemoperikardu a pneumotoraxu u lůžka.",
    pearl: "eFAST protokol u polytraumatu během 2 minut vyloučí srdeční tamponádu, hemotorax, pneumotorax a masivní krvácení do dutiny břišní."
  },
  {
    id: "urgent-fill-25",
    topicId: "urgent-upv-ventilace",
    topicTitle: "Umělá plicní ventilace & ARDS",
    question: "Kolik po sobě jdoucích hodin denně minimálně musí trvat pronační poloha (prone position) u těžkého ARDS k dosažení snížení mortality?",
    acceptedAnswers: ["16 hodin", "16", "16 h", "šestnáct hodin"],
    hint: "16 hodin denně.",
    explanation: "Studie PROSEVA prokázala, že pronační poloha u pacientů s PaO2/FiO2 < 150 mmHg signifikantně snižuje mortalitu pouze tehdy, pokud je prováděna minimálně 16 hodin v kuse každý den.",
    pearl: "Pronaci u těžkého ARDS provádějte v dlouhých blocích minimálně 16 hodin denně; krátká pronace mortalitní benefit nepřináší."
  },
  {
    id: "urgent-fill-26",
    topicId: "urgent-krizove-stavy-toxikologie",
    topicTitle: "Toxikologie & Antidota",
    question: "Který lék (forma vitamínu B12) je specifickým antidotem kyanidů při inhalaci kouře a těžké laktátové acidóze?",
    acceptedAnswers: ["hydroxokobalamin", "hydroxocobalamin", "cyanokit"],
    hint: "Hydroxokobalamin (Cyanokit).",
    explanation: "Hydroxokobalamin obsahuje kobalt, který má extrémní afinitu ke kyanidovým iontům. Vazbou vytvoří netoxický kyanokobalamin (vitamín B12), který se bezpečně vyloučí močí.",
    pearl: "U intoxikace kyanidy z kouře při požáru aplikujte Hydroxokobalamin (Cyanokit 5 g i.v.); nezpůsobuje methemoglobinémii a je bezpečný i při současné intoxikaci CO."
  },
  {
    id: "urgent-fill-27",
    topicId: "urgent-krizove-stavy-toxikologie",
    topicTitle: "Toxikologie & Antidota",
    question: "Jaký lék je antidotem volby při těžké intoxikaci paracetamolem podávaný k obnově jaterního glutathionu?",
    acceptedAnswers: ["n-acetylcystein", "acetylcystein", "nac", "parvolex"],
    hint: "N-acetylcystein (NAC).",
    explanation: "N-acetylcystein je prekurzor glutathionu. Konjuguje toxický metabolit paracetamolu NAPQI na netoxické merkapturáty a brání nekróze hepatocytů.",
    pearl: "N-acetylcystein (NAC) aplikujte okamžitě při podezření na požití toxické dávky paracetamolu; nejúčinnější je v okně do 8 hodin od intoxikace."
  },
  {
    id: "urgent-fill-28",
    topicId: "urgent-krizove-stavy-toxikologie",
    topicTitle: "Toxikologie & Antidota",
    question: "Které antidotum (cholinergikum) se používá při těžkém centrálním anticholinergním syndromu vyvolaném předávkováním atropinem nebo rulíkem zlomocným?",
    acceptedAnswers: ["fysostigmin", "physostigmine", "anticholium"],
    hint: "Fysostigmin.",
    explanation: "Fysostigmin je terciární amin (inhibitor acetylcholinesterázy), který na rozdíl od neostigminu prostupuje hematoencefalickou bariérou a zvrátí centrální anticholinergní delirium.",
    pearl: "Fysostigmin prostupuje hematoencefalickou bariérou a je jediným specifickým antidotem centrálního anticholinergního syndromu (delirium, mydriáza, sucho v ústech, hypertermie)."
  },
  {
    id: "urgent-fill-29",
    topicId: "urgent-dychaci-cesty",
    topicTitle: "Dýchací cesty & Krizové stavy",
    question: "Který parametr kontinuální křivky oxidu uhličitého ve vydechovaném plynu (kapnografie) je nejlepším potvrzením správné endotracheální intubace?",
    acceptedAnswers: ["etco2", "kapnografie", "kapnometrie", "end-tidal co2"],
    hint: "EtCO2 (kapnografie).",
    explanation: "Průkaz stabilní krivky EtCO2 po minimálně 5–6 dechových cyklech je absolutním zlatým standardem ověření polohy kanyly v trachee a vyloučení intubace do jícnu.",
    pearl: "Kontinuální kapnografie (křivka EtCO2) je jediný stoprocentní důkaz polohy kanyly v průdušnici; pouhý poslech plic může být u obézních či emfyzematiků zavádějící."
  },
  {
    id: "urgent-fill-30",
    topicId: "urgent-kpr-als",
    topicTitle: "Kardiopulmonální resuscitace dle ERC",
    question: "Které dvě hlavní skupiny srdečních rytmů dělí algoritmus ALS dle možnosti léčby elektrickým výbojem na defibrilovatelné a ______?",
    acceptedAnswers: ["nedefibrilovatelné", "nedefibrilovatelne", "non-shockable"],
    hint: "Nedefibrilovatelné (non-shockable).",
    explanation: "Zástavové rytmy se dělí na defibrilovatelné (FiK a bezpulzová KT) a nedefibrilovatelné (asystolie a PEA – bezpulzová elektrická aktivita).",
    pearl: "U nedefibrilovatelných rytmů (asystolie, PEA) je základem okamžitý adrenalin 1 mg i.v. a agresivní pátrání po reverzibilních příčinách (4H a 4T)."
  }
];

URGENT_FILL_INS.forEach(f => {
  urgentQuestions.push({
    id: f.id,
    subjectId: 'urgent',
    subjectTitle: 'Urgentní příjem',
    grade: 5,
    topicId: f.topicId,
    topicTitle: f.topicTitle,
    type: 'fill_in',
    question: f.question,
    sentence: `Klíčové doplnění: ${f.acceptedAnswers[0]}. ${f.explanation}`,
    acceptedAnswers: f.acceptedAnswers,
    hint: f.hint,
    explanation: f.explanation,
    pearl: f.pearl,
    tags: ['Dopisovací', f.topicTitle, '5. ročník', 'Urgentní medicína']
  });
});

console.log(`Total questions assembled for Urgentní příjem: ${urgentQuestions.length}`);

// Validace typů
const scCount = urgentQuestions.filter(q => q.type === 'single_choice').length;
const csCount = urgentQuestions.filter(q => q.type === 'case_study').length;
const fiCount = urgentQuestions.filter(q => q.type === 'fill_in').length;
console.log(`Counts: Single Choice = ${scCount}, Case Studies = ${csCount}, Fill-in = ${fiCount}`);

// Uložení souboru urgent.json
const urgentModuleData = {
  id: 'urgent',
  title: 'Urgentní příjem',
  grade: 5,
  icon: '🚨',
  color: '#ef4444',
  description: 'Krizové stavy, resuscitační postupy dle ERC, anesteziologie, UPV, trauma a akutní kazuistiky pro 5. ročník LF OU.',
  questions: urgentQuestions
};

const jsonStr = JSON.stringify(urgentModuleData, null, 2);
const urgentFile = path.join(OUT_DIR, 'urgent.json');
fs.writeFileSync(urgentFile, jsonStr, 'utf8');
const sizeBytes = Buffer.byteLength(jsonStr, 'utf8');
const sizeFormatted = `${Math.round(sizeBytes / 1024)} kB`;
const revision = `2026.5.0-${crypto.createHash('sha256').update(jsonStr).digest('hex').slice(0, 12)}`;

console.log(`Wrote ${urgentFile} (${sizeFormatted}, rev ${revision})`);

// Aktualizace manifest.json
const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
manifest.version = '2026.5.0';
manifest.lastUpdated = new Date().toISOString();

const urgentSubIdx = manifest.subjects.findIndex(s => s.id === 'urgent');
const urgentMeta = {
  id: 'urgent',
  revision: revision,
  title: 'Urgentní příjem',
  grade: 5,
  icon: '🚨',
  color: '#ef4444',
  totalQuestions: urgentQuestions.length,
  counts: {
    single_choice: scCount,
    case_study: csCount,
    fill_in: fiCount
  },
  sizeBytes: sizeBytes,
  sizeFormatted: sizeFormatted,
  file: '/drill/data/modules/urgent.json'
};

if (urgentSubIdx !== -1) {
  manifest.subjects[urgentSubIdx] = urgentMeta;
} else {
  manifest.subjects.push(urgentMeta);
}

fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`Manifest updated with new urgent module (${urgentQuestions.length} questions).`);
