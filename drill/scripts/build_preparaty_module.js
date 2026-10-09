const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PATOLKA_DIR = path.resolve(ROOT, '..', 'patolka-main');
const PREPARATY_DATA_FILE = path.join(PATOLKA_DIR, 'preparaty_data.js');

if (!fs.existsSync(PREPARATY_DATA_FILE)) {
  console.error('Cannot find preparaty_data.js at:', PREPARATY_DATA_FILE);
  process.exit(1);
}

const rawCode = fs.readFileSync(PREPARATY_DATA_FILE, 'utf8');
const fn = new Function(rawCode + '; return PREPARATY_DATA;');
const sourceSlides = fn().filter(s => s.is_zkouskove);

console.log(`Loaded ${sourceSlides.length} zkouskove slides from patolka-main.`);

// Create destination asset directory
const ASSETS_DIR = path.join(ROOT, 'assets', 'preparaty');
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

// Medical knowledge database keyed by slide title with strictly balanced distractors
const DEFINITIONS_BY_TITLE = {
  'Amyloidóza srdce': {
    title: 'Amyloidóza srdce',
    topicId: 'kardio',
    topicTitle: 'Kardiovaskulární systém',
    distractors: ['Infarkt myokardu', 'Akutní myokarditida', 'Hypertrofie myokardu'],
    acceptedAnswers: ['amyloidóza srdce', 'amyloidoza srdce', 'amyloidóza myokardu', 'amyloidoza myokardu', 'amyloidóza', 'amyloidoza', 'amyloidosis cordis'],
    hint: 'Amorfní eozinofilní hmota v intersticiu mezi kardiomyocyty, barvení Kongo červení.',
    explanation: 'V intersticiu myokardu a ve stěnách cév jsou patrná depozita acelulárního, homogenního, eozinofilního materiálu (amyloidu). V polarizovaném světle po barvení Kongo červení vykazuje typický jablkově zelený dichroismus.',
    pearl: 'Srdeční amyloidóza vede k restriktivní kardiomyopatii a závažným převodním poruchám.'
  },
  'Ateroskleróza': {
    title: 'Ateroskleróza tepny',
    topicId: 'kardio',
    topicTitle: 'Kardiovaskulární systém',
    distractors: ['Mönckebergova mediokalcinóza', 'Hyalinní arterioloskleróza', 'Obstrukční vaskulitida'],
    acceptedAnswers: ['ateroskleróza', 'ateroskleroza', 'ateromový plát', 'atherosclerosis', 'aterosklerotický plát', 'ateroskleróza tepny'],
    hint: 'Intimální plát s lipidovým jádrem, cholesterolovými krystaly a fibrózní čepičkou.',
    explanation: 'Ve stěně tepny je patrný ateromový plát v intimě. Obsahuje centrální nekrotické lipidové jádro s prázdnými vřetenitými štěrbinami po vyplavených krystalech cholesterolu, pěnitými buňkami (lipofágy) a krycí fibrózní čepičku.',
    pearl: 'Komplikovaný ateromový plát s ulcerací či krvácením je nejčastější příčinou akutního koronárního syndromu.'
  },
  'Infarkt myokardu': {
    title: 'Infarkt myokardu',
    topicId: 'kardio',
    topicTitle: 'Kardiovaskulární systém',
    distractors: ['Amyloidóza srdce', 'Akutní myokarditida', 'Hypertrofie myokardu'],
    acceptedAnswers: ['infarkt myokardu', 'akutní infarkt myokardu', 'koagulační nekróza myokardu', 'infarctus myocardii', 'infarkt'],
    hint: 'Koagulační nekróza s hypereozinofilií kardiomyocytů, ztrátou jader a neutrofilním lemem.',
    explanation: 'Okrsek koagulační nekrózy srdeční svaloviny. Kardiomyocyty jsou hypereozinofilní se ztrátou příčného pruhování a vymizením jader (karyolýza). Na periferii je patrný zánětlivý lem tvořený neutrofilními granulocyty a později granulační tkáň.',
    pearl: 'Neutrofilní infiltrace vrcholí kolem 2. až 3. dne od začátku ischemie.'
  },
  'Trombóza + disekce': {
    title: 'Trombóza a disekce aorty',
    topicId: 'kardio',
    topicTitle: 'Kardiovaskulární systém',
    distractors: ['Výduť hrudní aorty (aneurysma)', 'Tromboangiitis obliterans', 'Luetická mezoaortitida'],
    acceptedAnswers: ['trombóza a disekce', 'tromboza a disekce', 'disekce aorty', 'disekce', 'trombóza', 'tromboza', 'trombóza + disekce', 'tromboza + disekce', 'trombóza a disekce aorty'],
    hint: 'Rozštěpení medie aorty s falešným lumen vyplněným vrstevnatým krevním trombem.',
    explanation: 'Trhlina v intimě a vnitřní medii cévní stěny vedoucí k disekci stěny a vytvoření falešného lumen. Ve falešném lumen je přítomen trombus s patrnými Zahnsovými proužky (střídání vrstev trombocytů/fibrinu a erytrocytů).',
    pearl: 'Disekce aorty typu A dle Stanforda vyžaduje okamžitou kardiochirurgickou revizi.'
  },
  'Kapilární hemangiom': {
    title: 'Kapilární hemangiom',
    topicId: 'kardio',
    topicTitle: 'Kardiovaskulární systém',
    distractors: ['Kavernózní hemangiom', 'Juvenilní angiofibrom', 'Cévní lymfangiom'],
    acceptedAnswers: ['kapilární hemangiom', 'kapilarni hemangiom', 'hemangiom', 'haemangioma capillare'],
    hint: 'Mnohočetná drobná těsně nahloučená kapilární lumina vystlaná jednou vrstvou endotelu.',
    explanation: 'Benigní cévní nádor tvořený klubky tenkostěnných krevních kapilár s úzkým lumen, vystlaných normální endotelovou výstelkou bez atypií. V lumen jsou přítomny erytrocyty.',
    pearl: 'Kapilární hemangiomy (např. jahodový névus) u dětí často v prvních letech života spontánně regredují.'
  },
  'Kavernózní hemangiom': {
    title: 'Kavernózní hemangiom',
    topicId: 'kardio',
    topicTitle: 'Kardiovaskulární systém',
    distractors: ['Kapilární hemangiom', 'Kavernózní lymfangiom', 'Angiosarkom měkkých tkání'],
    acceptedAnswers: ['kavernózní hemangiom', 'kavernozni hemangiom', 'hemangiom', 'haemangioma cavernosum'],
    hint: 'Široká ektatická cévní lumina oddělená vazivovými septy, vyplněná krví.',
    explanation: 'Vaskulární léze tvořená velkými, nepravidelnými, široce dilatovanými cévními prostorami (kavernami) vystlanými oploštělým endotelem a vyplněnými krví. Intersticium tvoří vazivová septa.',
    pearl: 'Kavernózní hemangiom je nejčastějším benigním mezenchymovým nádorem jater.'
  },
  'Srdeční myxom': {
    title: 'Srdeční myxom',
    topicId: 'kardio',
    topicTitle: 'Kardiovaskulární systém',
    distractors: ['Papilární fibroelastom', 'Srdeční rabdomyom', 'Myxoidní liposarkom'],
    acceptedAnswers: ['srdeční myxom', 'srdecni myxom', 'myxom srdce', 'myxom', 'myxoma cordis'],
    hint: 'Hlenovité myxoidní stroma bohaté na kyselé mukopolysacharidy s hvězdicovitými buňkami.',
    explanation: 'Nejčastější primární nádor srdce. Histologicky charakterizován hojnou amorfní basofilní myxoidní matrix s vřetenitými až hvězdicovitými mezenchymálními buňkami (myxomové buňky), které tvoří prstence kolem drobných kapilár.',
    pearl: 'Přibližně 75–80 % srdečních myxomů vyrůstá ze stěny levé síně v oblasti fossa ovalis.'
  },
  'Uzlinová tuberkulóza': {
    title: 'Uzlinová tuberkulóza',
    topicId: 'lymfatika',
    topicTitle: 'Lymfatický systém & krev',
    distractors: ['Sarkoidóza v uzlině', 'Kočičí škrábnutí (nemoc)', 'Folikulární lymfom'],
    acceptedAnswers: ['uzlinová tuberkulóza', 'uzlinova tuberkuloza', 'tuberkulóza uzliny', 'tbc uzliny', 'tuberkuloza', 'tuberkulóza'],
    hint: 'Kaseifikační (poprašková) nekróza s epiteloidními buňkami a Langhansovými obrovskými buňkami.',
    explanation: 'Lymfatická uzlina se specifickým granulomatózním zánětem. V centru granulomů je amorfní poprašková kaseózní (sýrovitá) nekróza, obklopená valem epiteloidních histiocytů, mnohojaderných obrovských buněk Langhansova typu a lemem lymfocytů.',
    pearl: 'Kaseifikační nekróza s acidorezistentními tyčinkami (barvení Ziehl-Neelsen) je klíčový znak TBC odlišující ji od sarkoidózy.'
  },
  'Sarkoidóza v uzlině': {
    title: 'Sarkoidóza v uzlině',
    topicId: 'lymfatika',
    topicTitle: 'Lymfatický systém & krev',
    distractors: ['Uzlinová tuberkulóza', 'Silikóza lymfatické uzliny', 'B-buněčný lymfom uzliny'],
    acceptedAnswers: ['sarkoidóza v uzlině', 'sarkoidoza v uzline', 'sarkoidóza uzliny', 'sarkoidoza', 'sarkoidóza', 'morbus boeck'],
    hint: 'Nekaseifikující ostře ohraničené epiteloidní granulomy bez centrální kaseózní nekrózy.',
    explanation: 'V parenchymu uzliny jsou mnohočetné diskrétní, ostře ohraničené granulomy složené z epiteloidních buněk a Langhansových obrovských buněk. Zásadním znakem je absence centrální kaseifikace (nekaseifikující granulomy). V buňkách lze někdy nalézt Schaumannova tělíska či asteroidní inkluze.',
    pearl: 'Sarkoidóza je diagnózou per exclusionem – vždy je nutné vyloučit mykobakteriální a mykotickou infekci.'
  },
  'Low grade NHL lymfom': {
    title: 'Low grade NHL lymfom',
    topicId: 'lymfatika',
    topicTitle: 'Lymfatický systém & krev',
    distractors: ['High grade B-lymfom', 'Reaktivní lymfadenitida', 'Klasický Hodgkinův lymfom'],
    acceptedAnswers: ['low grade nhl lymfom', 'low grade lymfom', 'folikulární lymfom', 'nhl lymfom', 'folikularni lymfom'],
    hint: 'Monotonní proliferace malých centrocytů a centroblastů bez zřetelných zárodečných center a tělísek.',
    explanation: 'Architektura uzliny je setřena nodulárním nebo difuzním růstem uniformních malých lymfocytů/centrocytů s vroubkovanými jádry. Chybí polarizace folikulů a makrofágy s apoptotickými tělísky (tingible body macrophages), typické pro reaktivní folikuly.',
    pearl: 'Folikulární lymfom nese charakteristickou translokaci t(14;18) vedoucí k nadměrné expresi proteinu BCL-2.'
  },
  'High grade lymfom': {
    title: 'High grade B-lymfom (DLBCL)',
    topicId: 'lymfatika',
    topicTitle: 'Lymfatický systém & krev',
    distractors: ['Low grade folikulární lymfom', 'Klasický Hodgkinův lymfom', 'Reaktivní folikulární hyperplazie'],
    acceptedAnswers: ['high grade lymfom', 'dlbcl', 'difuzní velkobuněčný b lymfom', 'difuzni velkobunecny b lymfom', 'burkittův lymfom', 'high grade b-lymfom (dlbcl)'],
    hint: 'Difuzní setření struktury uzliny velkými atypickými lymfoidními blasty s vysokou mitotickou aktivitou.',
    explanation: 'Kompletní difuzní setření uzlinové architektury velkými transformovanými buňkami (velikost jádra větší než jádro histiocytu). Jádra mají hrubý chromatin, prominentní jadérka, četné mitózy a apoptózy.',
    pearl: 'DLBCL (difuzní velkobuněčný B-lymfom) je nejčastějším agresivním lymfomem dospělých.'
  },
  'Hodgkinův lymfom': {
    title: 'Klasický Hodgkinův lymfom',
    topicId: 'lymfatika',
    topicTitle: 'Lymfatický systém & krev',
    distractors: ['Difuzní velkobuněčný B-lymfom', 'Reaktivní folikulární hyperplazie', 'Histiocytární nekrotizující lymfadenitida'],
    acceptedAnswers: ['hodgkinův lymfom', 'hodgkinuv lymfom', 'hodgkinova choroba', 'reed sternberg buňky', 'morbus hodgkin', 'klasický hodgkinův lymfom'],
    hint: 'Reedové-Sternbergovy dvoujaderné buňky s "sovíma očima" a Hodgkinovy buňky ve smíšeném pozadí.',
    explanation: 'Nádorovou populaci tvoří obrovské vícejaderné Reedové-Sternbergovy buňky (typická zrcadlová jádra s prominentními eozinofilními jadérky) a mononukleární Hodgkinovy buňky. Nádorové elementy jsou rozptýleny v bohatém reaktivním zánětlivém pozadí (lymfocyty, eozinofily, plazmocyty, histiocyty).',
    pearl: 'Typický imunofenotyp klasického Hodgkinova lymfomu je CD30+ a CD15+ při negativitě CD45.'
  },
  'Metastáza do lymfatické uzliny': {
    title: 'Metastáza karcinomu do uzliny',
    topicId: 'lymfatika',
    topicTitle: 'Lymfatický systém & krev',
    distractors: ['Klasický Hodgkinův lymfom', 'Difuzní velkobuněčný B-lymfom', 'Sarkoidóza lymfatické uzliny'],
    acceptedAnswers: ['metastáza do lymfatické uzliny', 'metastoza do uzliny', 'metastáza v uzlině', 'metastaza karcinomu', 'karcinomová metastáza', 'metastáza karcinomu do uzliny'],
    hint: 'Pruhy a hnízda cizorodých atypických epitelových buněk v subkapsulárních sinusech uzliny.',
    explanation: 'V lymfatické uzlině, iniciálně v marginálním (subkapsulárním) sinu, jsou přítomna hnízda a tubuly atypického epitelu s jadernými polymorfiemi, hyperchromázií a četnými mitózami, utlačující vlastní lymfoidní tkáň.',
    pearl: 'Sentinelová (strážní) uzlina je první spádová uzlina drénující oblast primárního karcinomu.'
  },
  'Sideroza - hnědá indukace plic': {
    title: 'Sideróza plic (hnědá indurace)',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Antrakosilikóza plicní tkáně', 'Akutní katarální bronchopneumonie', 'Intersticiální plicní emfyzém'],
    acceptedAnswers: ['sideroza - hnědá indukace plic', 'sideróza plic (hnědá indurace)', 'sideróza - hnědá indurace plic', 'sideróza plic', 'hnědá indurace plic', 'siderofágy', 'hemosideróza plic', 'sideroza'],
    hint: 'Alveoly vyplněné siderofágy s hrubým hnědým hemosiderinovým pigmentem (buňky srdečních vad).',
    explanation: 'V plicních alveolech se nacházejí četné alveolární makrofágy (siderofágy) obsahující hrubý zlatohnědý intracelulární pigment (hemosiderin) z fagocytovaných erytrocytů. Interalveolární septa jsou ztluštělá a fibrotizovaná.',
    pearl: 'Hemosiderofágy ("buňky srdečních vad") jsou typickým nálezem při chronické venostáze u levostranného srdečního selhání.'
  },
  'Edém plic': {
    title: 'Akutní edém plic',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Sideróza plic', 'Krupózní pneumonie', 'Emfyzém plic'],
    acceptedAnswers: ['edém plic', 'edem plic', 'plicní edém', 'plicni edem', 'oedema pulmonum', 'akutní edém plic'],
    hint: 'Alveolární prostory rovnoměrně vyplněné homogenní bledě eozinofilní tekutinou.',
    explanation: 'Lumina plicních alveolů jsou vyplněna jemně zrnitou, homogenní, světle růžovou (eozinofilní) edémovou tekutinou s občasnými bublinami vzduchu. Kapiláry v interalveolárních septech jsou výrazně překrvené (hyperémie).',
    pearl: 'Plicní edém vzniká zvýšením hydrostatického tlaku v plicních kapilárách nebo poruchou alveolokapilární membrány.'
  },
  'Antrakosilikóza': {
    title: 'Antrakosilikóza plic',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Kaseifikující TBC plic', 'Sarkoidóza plicní tkáně', 'Sideróza plicních sklípků'],
    acceptedAnswers: ['antrakosilikóza', 'antrakosilikoza', 'silikóza', 'silikoza', 'antrakóza', 'anthracosilicosis', 'antrakosilikóza plic'],
    hint: 'Koncentricky hyalinizované vazivové silikotické uzlíky s černým antrakotickým pigmentem.',
    explanation: 'V plicní tkáni jsou patrné fibrózní silikotické uzlíky tvořené koncentricky uspořádaným hyalinizovaným kolagenním vazivem. V intersticiu i uvnitř makrofágů jsou uložena zrna černého antrakotického uhelného pigmentu. V polarizačním mikroskopu lze v uzlících prokázat dvojlomné krystalky oxidu křemičitého.',
    pearl: 'Silikóza zvyšuje riziko rozvoje plicní tuberkulózy (silikotuberkulóza) i bronchogenního karcinomu.'
  },
  'Bronchopneumonie': {
    title: 'Ložisková bronchopneumonie',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Krupózní lobární pneumonie', 'Intersticiální pneumonitida', 'Katarální plicní atelektáza'],
    acceptedAnswers: ['bronchopneumonie', 'hnisavá bronchopneumonie', 'bronchopneumonia', 'aspirace', 'ložisková bronchopneumonie'],
    hint: 'Ložiskovitý hnisavý exsudát z polymorfonukleárních leukocytů v bronchiolech a přilehlých alveolech.',
    explanation: 'Luminální prostory bronchiolů a okolních alveolů jsou ložiskovitě vyplněny hustým hnisavým zánětlivým exsudátem složeným z neutrofilních granulocytů, fibrinu a buněčného detritu. Mezi postiženými ložisky se nachází intaktní plicní parenchym.',
    pearl: 'Na rozdíl od krupózní (lobární) pneumonie má bronchopneumonie typicky ložiskovitý (multifokální) charakter.'
  },
  'TBC granulom': {
    title: 'Kaseifikující TBC granulom',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Sarkoidotický plicní granulom', 'Granulomatóza s polyangiitidou', 'Cizorodý silikotický uzlík'],
    acceptedAnswers: ['tbc granulom', 'tuberkulózní granulom', 'tuberkulom', 'kaseifikační granulom', 'tbc', 'kaseifikující tbc granulom'],
    hint: 'Centrální kaseifikační nekróza lemovaná epiteloidními histiocyty a Langhansovými buňkami.',
    explanation: 'Plně vyvinutý tuberkulózní granulom s centrální strukturou kaseifikační nekrózy (eozinofilní amorfní hmota s pyknotickým jaderným prachem), obklopené palisádou epiteloidních buněk, obrovských mnohojaderných buněk Langhansova typu a zevním lemem z lymfocytů a fibroblastů.',
    pearl: 'Ghonův komplex sestává z primárního plicního TBC infektu a kaseifikující lymfadenitidy regionální uzliny.'
  },
  'Dlaždicobuněčný karcinom hrtanu': {
    title: 'Dlaždicobuněčný karcinom hrtanu',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Spinocelulární karcinom hltanu', 'Adenoidně cystický karcinom laryngu', 'Nediferencovaný velkobuněčný karcinom'],
    acceptedAnswers: ['dlaždicobuněčný karcinom hrtanu', 'dlazdicobunecny karcinom hrtanu', 'spinocelulární karcinom hrtanu', 'karcinom hrtanu', 'spinaliom'],
    hint: 'Hnízda atypického dlaždicového epitelu invadujícího do stromatu s rohovějícími perlami.',
    explanation: 'Invazivní maligní epitelový nádor rostoucí v pruzích a hnízdech pronikajících přes bazální membránu. Buňky vykazují jaderný polymorfismus, hyperchromázii a intercelulární můstky. V centru hnízd se diferencují koncentrické keratinové hmoty (tzv. rohové perly).',
    pearl: 'Nejčastější lokalizací karcinomu hrtanu je glotická oblast (pravá hlasivka), projevující se časným chrapotem.'
  },
  'Adenokarcinom plic': {
    title: 'Infiltrativní adenokarcinom plic',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Dlaždicobuněčný karcinom plic', 'Malobuněčný neuroendokrinní karcinom', 'Velkobuněčný neuroendokrinní tumor'],
    acceptedAnswers: ['adenokarcinom plic', 'adenokarcinom', 'adenocarcinoma pulmonis', 'plicní adenokarcinom', 'infiltrativní adenokarcinom plic'],
    hint: 'Atypické žlázové formace s mucinózní sekrecí invadující plicní parenchym.',
    explanation: 'Maligní epitelový nádor s glandulární diferenciací. Tvoří nepravidelné tubulární, acinární či papilární struktury vystlané polymorfními buňkami s velkými jádry a prominentními jadérky. V buňkách nebo luminu bývá přítomen hlen.',
    pearl: 'Adenokarcinom je v současnosti nejčastějším typem karcinomu plic, typicky lokalizovaný periferně a častější u nekuřáků.'
  },
  'Chondrohamartom': {
    title: 'Chondrohamartom plic',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Chondrosarkom plic', 'Bronchogenní karcinoid', 'Adenomatoidní malformace'],
    acceptedAnswers: ['chondrohamartom', 'chondrohamartom plic', 'hamartom plic', 'plicní hamartom', 'chondroidní hamartom'],
    hint: 'Ostrůvky zralé hyalinní chrupavky kombinované s tukovou tkání, vazivem a epitelovými štěrbinami.',
    explanation: 'Benigní hamartomová léze plic složená z nepravidelně promíchaných zralých mezenchymálních tkání: dominují lalůčky hyalinní chrupavky, doprovázené tukovou tkání, hladkou svalovinou, vazivem a štěrbinami vystlanými respiračním epitelem.',
    pearl: 'Na RTG/CT plic vytváří ostře ohraničený uzel s charakteristickými kalcifikacemi typu "popcorn".'
  },
  'Metastáza v plicích': {
    title: 'Metastáza adenokarcinomu v plicích',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Primární adenokarcinom plicní tkáně', 'Plicní kaseifikující tuberkulom', 'Organizovaný hemoragický infarkt plic'],
    acceptedAnswers: ['metastáza v plicích', 'metastoza v plicich', 'plicní metastáza', 'metastáza do plic', 'metastaza', 'metastáza adenokarcinomu v plicích'],
    hint: 'Ostře ohraničené ložisko karcinomových tubulů v kontrastu s okolním plicním parenchymem.',
    explanation: 'Nádorové ložisko v plicní tkáni ostře oddělené od okolního alveolárního parenchymu. Morfologie (např. hlenotvorné žlázky kolorektálního typu) neodpovídá primární plicní tkáni a demonstruje metastatický rozsev krevní či lymfatickou cestou.',
    pearl: 'Plíce jsou díky bohatému kapilárnímu řečišti jedním z nejčastějších orgánů pro hematogenní metastazování.'
  },
  'Obrovskobuněčná epulis': {
    title: 'Obrovskobuněčná epulis gingivy',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Ameloblastom dolní čelisti', 'Pyogenní vaskulární granulom', 'Periferní osifikující fibrom'],
    acceptedAnswers: ['obrovskobuněčná epulis', 'obrovskobunecna epulis', 'epulis gigantocellularis', 'periferní obrovskobuněčný granulom', 'epulis', 'obrovskobuněčná epulis gingivy'],
    hint: 'Mnohočetné mnohojaderné osteoklastům podobné obrovské buňky v bohatě vaskularizovaném stromatu.',
    explanation: 'Reaktivní neoplazii podobná léze gingivy. Obsahuje vysoký počet mnohojaderných obrovských buněk (typu osteoklastů) rozptýlených v buněčném stromatu z vřetenitých fibroblastů/histiocytů, s četnými kapilárami a hemosiderinovým pigmentem.',
    pearl: 'Vyrůstá z periodontální membrány nebo periostu alveolárního výběžku čelisti.'
  },
  'Pleomorfní adenom': {
    title: 'Pleomorfní adenom příušní žlázy',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Warthinův tumor příušní žlázy', 'Adenoidně cystický karcinom žlázy', 'Mukoepidermoidní karcinom slinné žlázy'],
    acceptedAnswers: ['pleomorfní adenom', 'pleomorfni adenom', 'adenoma pleomorphicum', 'smíšený tumor slinné žlázy', 'adenom glandulae parotis', 'pleomorfní adenom příušní žlázy'],
    hint: 'Dvouřadé epitelové/myoepitelové tubuly v chondromyxoidním a hyalinním stromatu.',
    explanation: 'Nejčastější benigní nádor slinných žláz. Vyznačuje se architektonickou pestrostí: obsahuje duktální a myoepitelové buňky formující tubuly, trámce i solidní hnízda, uložené v charakteristickém myxoidním, chondroidním až hyalinizovaném stromatu.',
    pearl: 'Kvůli častým výběžkům přes vazivové pouzdro (pseudopodie) je při prosté enukleaci vysoké riziko recidivy.'
  },
  'Adenoidně cystický karcinom': {
    title: 'Adenoidně cystický karcinom slinné žlázy',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Pleomorfní adenom příušní slinné žlázy', 'Mukoepidermoidní karcinom slinné žlázy', 'Onkocytární adenom příušní slinné žlázy'],
    acceptedAnswers: ['adenoidně cystický karcinom', 'adenoidne cysticky karcinom', 'cylindrom', 'adcc', 'karcinom slinné žlázy', 'adenoidně cystický karcinom slinné žlázy'],
    hint: 'Kribriformní ("švýcarský sýr") uspořádání bazaloidních buněk s perineurální invazí.',
    explanation: 'Maligní nádor slinných žláz tvořený malými uniformními bazaloidními buňkami uspořádanými do typického kribriformního vzorce (perforované prostory připomínající švýcarský sýr) s bazofilním materiálem. Typická je výrazná perineurální propagace.',
    pearl: 'Vyznačuje se pomalým, avšak neúprosným růstem a sklonem k pozdním metastázám do plic a kostí i po 10–15 letech.'
  },
  'Warthinův tumor': {
    title: 'Warthinův adenolymfom parotis',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Pleomorfní adenom příušní žlázy', 'Onkocytom příušní slinné žlázy', 'Mukoepidermoidní karcinom parotis'],
    acceptedAnswers: ['warthinův tumor', 'warthinuv tumor', 'adenolymfom', 'cystadenolymphoma', 'tumor warthini', 'warthinův adenolymfom parotis'],
    hint: 'Papilární cystické prostory s dvouvrstvým onkocytárním epitelem a bohatým lymfoidním stromatem.',
    explanation: 'Benigní tumor glandula parotis složený z cystických prostor s papilárními projekcemi. Výstelku tvoří dvouřadý onkocytární epitel (intenzivně eozinofilní cytoplazma bohatá na mitochondrie). Podslizniční stroma obsahuje bohatou lymfoidní tkáň se zárodečnými centry.',
    pearl: 'Výskyt Warthinova tumoru má velmi silnou asociaci s kouřením tabáku a je často bilaterální.'
  },
  'Skvamocelulární karcinom tonzily': {
    title: 'Skvamocelulární karcinom tonzily',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Lymfoepiteliální karcinom tonzily', 'Difuzní velkobuněčný B-lymfom', 'Spinocelulární karcinom patra'],
    acceptedAnswers: ['skvamocelulární karcinom tonzily', 'skvamocelularni karcinom tonzily', 'spinocelulární karcinom tonzily', 'karcinom tonzily', 'spinaliom tonzily'],
    hint: 'Infiltrativní pruhy atypického skvamózního epitelu v lymfatické tkáni patrové mandle.',
    explanation: 'Invazivní karcinom z dlaždicových buněk vyrůstající v kryptách tonzily. Často jde o nerohovějící typ tvořený pláty bazaloidních buněk s vysokým nukleocytoplazmatickým poměrem, častými mitózami a centrálními komedonovými nekrózami v lymfoidním stromatu.',
    pearl: 'Významná část orofaryngeálních karcinomů je asociována s perzistující infekcí vysoce rizikovými typy HPV (zejména HPV 16).'
  },
  'Spinocelulární karcinom jícnu': {
    title: 'Spinocelulární karcinom jícnu',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Infiltrativní adenokarcinom jícnu', 'Leiomyosarkom jícnové stěny', 'Neuroendokrinní tumor jícnu'],
    acceptedAnswers: ['spinocelulární karcinom jícnu', 'spinocelularni karcinom jicnu', 'dlaždicobuněčný karcinom jícnu', 'karcinom jícnu'],
    hint: 'Trámce dysplastického rohovějícího dlaždicového epitelu invadujícího do tunica muscularis.',
    explanation: 'Maligní epitelový nádor z dlaždicového epitelu jícnu invadující do submukózy a svalové vrstvy. Přítomny jsou polygonální atypické buňky, intercelulární můstky a rohovění (rohové perly).',
    pearl: 'Hlavními rizikovými faktory spinocelulárního karcinomu jícnu jsou kouření a konzumace koncentrovaného alkoholu.'
  },
  'Helicobacter pylori': {
    title: 'Helicobacter pylori gastritida',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Autoimunitní atrofická gastritida', 'Reaktivní chemická gastropatie', 'Granulomatózní zánět žaludku'],
    acceptedAnswers: ['helicobacter pylori', 'helicobacter pylori gastritida', 'chronická gastritida', 'h. pylori', 'gastritis chronica', 'helicobacter'],
    hint: 'Drobné zakřivené spirálovité bakterie na povrchu žaludečního hlenu a v kryptách (barvení Giemsa / Warthin-Starry).',
    explanation: 'Sliznice žaludečního antra s chronickým aktivním zánětem (lymfoplazmocelulární infiltrát v lamina propria a neutrofily infiltrující foveolární epitel). Na povrchu hlenové vrstvy jsou patrné drobné spirálovité bakterie Helicobacter pylori.',
    pearl: 'Chronická infekce H. pylori je hlavním kauzálním faktorem peptického vředu, adenokarcinomu žaludku a MALT lymfomu.'
  },
  'Karcinom žaludku (intestinální typ)': {
    title: 'Karcinom žaludku (intestinální typ)',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Karcinom žaludku (difuzní typ)', 'Neuroendokrinní karcinom žaludku', 'Gastrointestinální stromální tumor'],
    acceptedAnswers: ['karcinom žaludku (intestinální typ)', 'karcinom žaludku', 'adenokarcinom žaludku', 'intestinální karcinom žaludku', 'adenocarcinoma ventriculi'],
    hint: 'Atypické žlázky napodobující střevní tubuly s infiltrací do žaludeční stěny (dle Laurénovy klasifikace).',
    explanation: 'Adenokarcinom žaludku Laurénova intestinálního typu. Skládá se z kohezivních nádorových buněk formujících tubulární a glandulární struktury s luminální nekrózou, vyrůstající v terénu chronické atrofické gastritidy s intestinální metaplazií.',
    pearl: 'Laurénova klasifikace dělí karcinomy žaludku na intestinální (lepší prognóza, exofytický) a difuzní (diskohezivní prstenčité buňky, linitis plastica).'
  },
  'Colitis ulcerosa': {
    title: 'Colitis ulcerosa (tlusté střevo)',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Crohnova choroba (ileokolitida)', 'Pseudomembranózní kolitida střeva', 'Ischemická gangrenózní kolitida'],
    acceptedAnswers: ['colitis ulcerosa', 'colitis ulcerosa (tlusté střevo)', 'ulcerózní kolitida', 'ulcerozni kolitida', 'idiopatická kolitida'],
    hint: 'Kryptové abscesy, deformace architektury krypt a zánět přísně omezený na sliznici tlustého střeva.',
    explanation: 'Chronické zánětlivé střevní onemocnění postihující sliznici a submukózu. V histologii dominuje architektonická distorze krypt (větvení, zkrácení), úbytek pohárkových buněk, kryptitida a kryptové abscesy (akumulace neutrofilů v kryptách) a plošné eroze sliznice.',
    pearl: 'Zánět u colitis ulcerosa probíhá kontinuálně od rekta proximálně a je striktně slizniční (na rozdíl od transmurální Crohnovy nemoci).'
  },
  'Oxyuriaza appendix': {
    title: 'Oxyuriáza červovitého přívěsku',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Akutní flegmonózní apendicitida', 'Karcinoid červovitého přívěsku', 'Střevní schistosomiáza appendixu'],
    acceptedAnswers: ['oxyuriaza appendix', 'oxyuriáza červovitého přívěsku', 'oxyuriáza appendixu', 'oxyuriáza', 'enterobius vermicularis', 'roup dětský', 'oxyuriasis'],
    hint: 'Příčné a podélné řezy parazitem Enterobius vermicularis s typickými alae laterales v lumen appendixu.',
    explanation: 'V lumen červovitého přívěsku jsou přítomny příčné řezy parazitického červa Enterobius vermicularis (roup dětský). Charakteristickým morfologickým znakem jsou trojúhelníkovité laterální kutikulární lišty (alae laterales) a vajíčka v děloze samiček.',
    pearl: 'Přítomnost roupů v appendixu může způsobit obstrukci lumina a klinický obraz apendicitidy (appendicopathia oxyurica).'
  },
  'Neuroendokrinní tumor appendixu': {
    title: 'Neuroendokrinní tumor appendixu',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Infiltrativní adenokarcinom střeva', 'Mukokéla červovitého přívěsku', 'Gastrointestinální stromální tumor'],
    acceptedAnswers: ['neuroendokrinní tumor appendixu', 'neuroendokrinni tumor appendixu', 'karcinoid appendixu', 'karcinoid', 'net appendixu'],
    hint: 'Monotonní hnízda a trámce buněk se "salt and pepper" chromatinem lokalizovaná ve stěně hrotu appendixu.',
    explanation: 'Nádorová tkáň je tvořena uniformními kulatými až oválnými buňkami s eozinofilní cytoplazmou a charakteristickým jádrem s jemně tečkovaným chromatinem ("pepř a sůl"). Buňky tvoří ostrůvky, trámce a tubuly infiltrující submukózu a muscularis propria.',
    pearl: 'NET je nejčastějším nádorem appendixu, typicky lokalizovaný v jeho hrotu a zachycený jako náhodný nález po apendektomii.'
  },
  'Tubulární adenom střeva': {
    title: 'Tubulární adenom tlustého střeva',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Adenokarcinom tlustého střeva', 'Hyperplastický polyp sliznice', 'Vilózní adenom tlustého střeva'],
    acceptedAnswers: ['tubulární adenom střeva', 'tubulární adenom tlustého střeva', 'tubularni adenom streva', 'tubulární adenom', 'adenom tlustého střeva', 'adenoma tubulare'],
    hint: 'Větvené žlázky s epitelem vykazujícím low-grade dysplazii (elongovaná stratifikovaná hyperchromní jádra).',
    explanation: 'Polypoidní léze tlustého střeva složená z proliferujících tubulárních žlázek. Žlázový epitel vykazuje dysplastické změny: vymizení hlenu, hyperchromní doutníkovitá jádra uspořádaná v pseudostratifikaci v bazální části buněk, při zachovalé bazální membráně.',
    pearl: 'Tubulární adenom je prekancerózou kolorektálního karcinomu v rámci sekvence adenom-karcinom (iniciované mutací APC).'
  },
  'Adenokarcinom tlustého střeva': {
    title: 'Adenokarcinom tlustého střeva',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Tubulární adenom tlustého střeva', 'Neuroendokrinní karcinom střeva', 'Gastrointestinální B-lymfom střeva'],
    acceptedAnswers: ['adenokarcinom tlustého střeva', 'adenokarcinom tlusteho streva', 'kolorektální karcinom', 'karcinom tlustého střeva', 'adenocarcinoma coli'],
    hint: 'Nepravidelné kribriformní a infiltrující žlázky pronikající přes muscularis mucosae do stěny střeva.',
    explanation: 'Maligní epitelový nádor vyrůstající ze sliznice tlustého střeva a destruktivně infiltrující hlubší vrstvy stěny (submukózu, muscularis propria). Žlázky jsou nepravidelné, s nekrózami v luminu (špinavá nekróza - dirty necrosis) a výraznou buněčnou atypií.',
    pearl: 'Hloubka invaze stěnou střeva a stav regionálních lymfatických uzlin jsou klíčovými prognostickými faktory (TNM / Dukes klasifikace).'
  },
  'Cholestáza': {
    title: 'Intrahepatální cholestáza jater',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Velkokapénková steatóza jater', 'Hemosideróza jaterního parenchymu', 'Akutní virová hepatitida typu B'],
    acceptedAnswers: ['cholestáza', 'intrahepatální cholestáza jater', 'cholestaza', 'cholestáza jater', 'cholestasis', 'městnání žluči'],
    hint: 'Zelenohnědé žlučové zátky v dilatovaných žlučových kapilárách a pigment v hepatocytech.',
    explanation: 'V jaterním parenchymu jsou patrné nahromaděné zelenohnědé až žlutozelené pigmentové zátky (tromby žluči) v rozšířených žlučových kapilárách mezi hepatocyty a jemné kapénky žluči v cytoplazmě hepatocytů a Kupfferových buněk.',
    pearl: 'Dlouhotrvající extrahepatální cholestáza vede k sekundární biliární cirhóze jater.'
  },
  'Steatóza jater': {
    title: 'Velkokapénková steatóza jater',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Mikronodulární cirhóza jater', 'Intrahepatální cholestáza jater', 'Hepatocelulární karcinom jater'],
    acceptedAnswers: ['steatóza jater', 'velkokapénková steatóza jater', 'steatoza jater', 'steatóza', 'ztučnění jater', 'steatosis hepatis'],
    hint: 'Opticky prázdné lipidové vakuoly v cytoplazmě hepatocytů odtlačující jádro k periferii.',
    explanation: 'V cytoplazmě hepatocytů jsou přítomny ostře ohraničené, opticky prázdné vakuoly (po vyplavení tuku během zpracování preparátu). U velkokapénkové steatózy jedna velká vakuola stlačuje a odtlačuje jádro hepatocytu k buněčné membráně.',
    pearl: 'Steatóza jater je reverzibilní reakcí na toxické vlivy (alkohol) nebo metabolický syndrom (MASLD).'
  },
  'Cirhóza jater': {
    title: 'Mikronodulární cirhóza jater',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Velkokapénková steatóza jater', 'Hepatocelulární karcinom jater', 'Chronická aktivní hepatitida'],
    acceptedAnswers: ['cirhóza jater', 'mikronodulární cirhóza jater', 'cirhoza jater', 'jaterní cirhóza', 'cirhóza', 'cirrhosis hepatis'],
    hint: 'Pseudolobuly (regeneratorní uzly) hepatocytů obklopené širokými vazivovými septy bez centrální žíly.',
    explanation: 'Kompletní přestavba architektoniky jater. Jaterní parenchym je rozdělen vazivovými septy na regeneratorní uzly (pseudolobuly). V uzlech chybí normální uspořádání trámců a centrální žíla. Ve vazivových septech je patrná duktulární proliferace a zánětlivý infiltrát.',
    pearl: 'Hlavními důsledky cirhózy jsou portální hypertenze, jaterní selhání a vysoké riziko vzniku hepatocelulárního karcinomu.'
  },
  'Hepatocelulární karcinom': {
    title: 'Hepatocelulární karcinom',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Metastáza adenokarcinomu do jater', 'Intrahepatální cholangiokarcinom', 'Fokální nodulární hyperplazie jater'],
    acceptedAnswers: ['hepatocelulární karcinom', 'hepatocelularni karcinom', 'hcc', 'karcinom jater', 'carcinoma hepatocellulare'],
    hint: 'Široké nepravidelné trámce atypických hepatocytů (>3 řady buněk) bez portobiliárních prostorů.',
    explanation: 'Maligní epitelový nádor z hepatocytů. Nádorové buňky rostou v širokých trámcích (tloušťka více než 3 vrstvy buněk), pseudoglandulárně či solidně. Chybí portobiliární prostory a normální retikulinová síť. Buňky mohou tvořit intracelulární žluč.',
    pearl: 'Většina HCC (cca 80–90 %) vzniká v terénu preexistující jaterní cirhózy.'
  },
  'Metastáza adenokarcinomu do jater': {
    title: 'Metastáza adenokarcinomu do jater',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Primární hepatocelulární karcinom', 'Intrahepatální cholangiokarcinom', 'Fokální nodulární hyperplazie jater'],
    acceptedAnswers: ['metastáza adenokarcinomu do jater', 'metastaza do jater', 'jaterní metastáza', 'metastáza v játrech', 'metastaza adenokarcinomu'],
    hint: 'Ostrůvky maligních hlenotvorných žlázek ostře ohraničené vůči okolnímu jaternímu parenchymu.',
    explanation: 'V jaterní tkáni je přítomno ostře ohraničené ložisko metastatického adenokarcinomu (nejčastěji kolorektálního původu) s nepravidelnými žlázkami, centrální nekrózou a hlenem, které stlačuje okolní jaterní trámce.',
    pearl: 'Játra jsou po regionálních lymfatických uzlinách nejčastějším místem metastatického rozsevu tumorů GIT.'
  },
  'karcinom žlučníku': {
    title: 'Infiltrativní karcinom žlučníku',
    topicId: 'git',
    topicTitle: 'Trávicí trakt & slinné žlázy',
    distractors: ['Chronická kalkulózní cholecystitida', 'Extrahepatální cholangiokarcinom', 'Cholesterolový polyp žlučníku'],
    acceptedAnswers: ['karcinom žlučníku', 'infiltrativní karcinom žlučníku', 'karcinom zlucniku', 'adenokarcinom žlučníku', 'adenocarcinoma vesicae felleae'],
    hint: 'Atypické žlázky pronikající přes svalovou vrstvu stěny žlučníku do subserózy.',
    explanation: 'Adenokarcinom stěny žlučníku složený z nepravidelných tubulárních žlázek s těžkou buněčnou a jadernou atypií, které destruují hladkou svalovinu a pronikají do subserózní tukové tkáně a sousedních jater.',
    pearl: 'Karcinom žlučníku je v 70–90 % případů asociován s cholecystolitiázou ("porcelánový žlučník").'
  },
  'Anemický infarkt ledviny': {
    title: 'Anemický infarkt ledviny',
    topicId: 'uro',
    topicTitle: 'Urogenitální systém & ledviny',
    distractors: ['Hemoragický infarkt ledviny', 'Akutní hnisavá pyelonefritida', 'Světlobuněčný karcinom ledviny'],
    acceptedAnswers: ['anemický infarkt ledviny', 'anemicky infarkt ledviny', 'infarkt ledviny', 'koagulační nekróza ledviny', 'infarctus renis'],
    hint: 'Tzv. "stínovitá nekróza" glomerulů a tubulů se zachovanými obrysy, ale bez jader.',
    explanation: 'Ložisko ischemické koagulační nekrózy ledvinného parenchymu. Glomeruly a tubuly jsou viditelné jako bezjaderné "stíny" s hypereozinofilní cytoplazmou. Na rozhraní nekrózy a vitální tkáně je hyperémie a lem z neutrofilních granulocytů.',
    pearl: 'Anemický infarkt vzniká uzávěrem terminální větve renální arterie (např. embolizací při fibrilaci síní).'
  },
  'Pyelonefritis': {
    title: 'Akutní hnisavá pyelonefritida',
    topicId: 'uro',
    topicTitle: 'Urogenitální systém & ledviny',
    distractors: ['Chronická intersticiální nefritida', 'Postinfekční glomerulonefritida', 'Ischemická nekróza parenchymu'],
    acceptedAnswers: ['pyelonefritis', 'akutní hnisavá pyelonefritida', 'pyelonefritida', 'akutní pyelonefritida', 'pyelonephritis', 'hnisavá pyelonefritida'],
    hint: 'Hustý neutrofilní infiltrát v intersticiu ledviny s leukocytárními válci uvnitř tubulů.',
    explanation: 'Hnisavý zánět postihující intersticium a tubulární aparát ledviny. Intersticium je masivně infiltrováno polymorfonukleárními neutrofily, dochází k nekróze tubulárního epitelu a v luminech tubulů se formují leukocytární válce.',
    pearl: 'Ascendentní infekce (nejčastěji E. coli) je nejčastější cestou vzniku akutní pyelonefritidy.'
  },
  'Malobuněčný karcinom plic': {
    title: 'Malobuněčný karcinom plic (SCLC)',
    topicId: 'respirace',
    topicTitle: 'Respirační systém & plíce',
    distractors: ['Dlaždicobuněčný karcinom plicní', 'Infiltrativní adenokarcinom plic', 'Typický bronchogenní karcinoid'],
    acceptedAnswers: ['malobuněčný karcinom plic', 'malobuněčný karcinom plic (sclc)', 'malobunecny karcinom plic', 'sclc', 'malobuněčný karcinom', 'oat cell karcinom'],
    hint: 'Drobné buňky s minimem cytoplazmy, "salt and pepper" chromatinem, četnými mitózami a crush fenoménem.',
    explanation: 'Vysoce maligní neuroendokrinní nádor plic. Tvořen malými buňkami s chudou cytoplazmou (velikost cca 2–3 lymfocyty), jádry s jemně granulovaným chromatinem bez nápadných jadérek, vysokým mitotickým indexem, rozsáhlými nekrózami a bazofilním zabarvením stěn cév DNA ze zaniklých buněk (Azzopardiho fenomén).',
    pearl: 'SCLC je vysoce chemosenzitivní i radiosenzitivní, avšak v době diagnózy má již naprostá většina pacientů mikrometastázy.'
  },
  'Světlobuňečný karcinom ledviny': {
    title: 'Světlobuněčný karcinom ledviny',
    topicId: 'uro',
    topicTitle: 'Urogenitální systém & ledviny',
    distractors: ['Chromofobní karcinom ledviny', 'Papilární renální karcinom', 'Onkocytom renálního parenchymu'],
    acceptedAnswers: ['světlobuněčný karcinom ledviny', 'svetlobunecny karcinom ledviny', 'grawitzův tumor', 'ccrcc', 'karcinom ledviny'],
    hint: 'Hnízda a alveoly buněk s bohatou opticky prázdnou cytoplazmou (lipid/glykogen) opředená kapilárami.',
    explanation: 'Nejčastější maligní nádor ledviny (cca 70–80 %). Tvořen hnízdy, trámci a tubuly velkých buněk s jasnou, opticky prázdnou cytoplazmou způsobenou vyplavením glykogenu a lipidů. Nádorová hnízda jsou obklopena jemnou sítí tenkostěnných cév.',
    pearl: 'Většina případů je asociována se ztrátou nebo mutací tumorsupresorového genu VHL na 3. chromozomu.'
  },
  'Chromofobní karcinom ledviny': {
    title: 'Chromofobní karcinom ledviny',
    topicId: 'uro',
    topicTitle: 'Urogenitální systém & ledviny',
    distractors: ['Světlobuněčný karcinom ledviny', 'Papilární renální karcinom', 'Onkocytom renálního parenchymu'],
    acceptedAnswers: ['chromofobní karcinom ledviny', 'chromofobni karcinom ledviny', 'chromofobní karcinom', 'chrc'],
    hint: 'Polygonální buňky s výraznými buněčnými membránami ("rostlinný vzhled") a perinukleárním haló.',
    explanation: 'Maligní nádor z buněk sběracích kanálků. Buňky mají polygonální tvar, velmi zřetelné buněčné hranice připomínající rostlinné buňky, zvrásněná nepravidelná jádra ("rozinková jádra") a typické perinukleární projasnění (halo). Koloidní železo dle Halea barví cytoplazmu difuzně modře.',
    pearl: 'Má výrazně lepší prognózu než konvenční světlobuněčný renální karcinom.'
  },
  'Papilární karcinom ledviny': {
    title: 'Papilární karcinom ledviny',
    topicId: 'uro',
    topicTitle: 'Urogenitální systém & ledviny',
    distractors: ['Světlobuněčný karcinom ledviny', 'Chromofobní karcinom ledviny', 'Onkocytom renálního parenchymu'],
    acceptedAnswers: ['papilární karcinom ledviny', 'papilarni karcinom ledviny', 'prcc', 'papilární renální karcinom'],
    hint: 'Papily s fibrovaskulárními stopkami vyplněnými pěnitými makrofágy a psammomatózními tělísky.',
    explanation: 'Renální karcinom s papilární a tubulární architekturou. Fibrovaskulární osy papil obsahují charakteristické agregáty pěnitých histiocytů (lipofágů) a laminovaných kalcifikací (psammomatózní tělíska).',
    pearl: 'Často bývá multifokální a bilaterální.'
  },
  'Uroteliální karcinom moč. měchýře': {
    title: 'Uroteliální karcinom močového měchýře',
    topicId: 'uro',
    topicTitle: 'Urogenitální systém & ledviny',
    distractors: ['Planocelulární karcinom moč. měchýře', 'Infiltrativní adenokarcinom měchýře', 'Sarkomatoidní uroteliální karcinom'],
    acceptedAnswers: ['uroteliální karcinom moč. měchýře', 'uroteliální karcinom močového měchýře', 'urotelialni karcinom', 'uroteliální karcinom', 'karcinom močového měchýře', 'karcinom mocoveho mechyre'],
    hint: 'Papilární nebo solidní formace atypického urotelu s narušenou polaritou a hyperchromními jádry.',
    explanation: 'Maligní nádor přechodného epitelu močového měchýře. U high-grade formy je epitel mnohovrstevnatý, s úplnou ztrátou polarity a deštníkovitých buněk, výraznou jadernou pleomorfismem, četnými mitózami a invazí do lamina propria a lamina muscularis (detrusoru).',
    pearl: 'Prvním a nejčastějším klinickým projevem bývá nebolestivá makroskopická hematurie.'
  },
  'Tubulární gravidita': {
    title: 'Tubulární gravidita vejcovodu',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['Akutní hnisavá salpingitida', 'Hydrosalpinx s chronickým edémem', 'Primární adenokarcinom tuby'],
    acceptedAnswers: ['tubulární gravidita', 'tubulární gravidita vejcovodu', 'tubularni gravidita', 'mimoděložní těhotenství', 'graviditas tubaria', 'ektopická gravidita'],
    hint: 'Choriové klky a trofoblast v krevních koagulech uvnitř rozšířeného lumen vejcovodu.',
    explanation: 'V lumen dilatovaného vejcovodu s hemoragií jsou přítomny choriové klky (vaskularizované mezenchymové jádro kryté syncytiotrofoblastem a cytotrofoblastem), deciduálně změněná sliznice a krevní sraženiny.',
    pearl: 'Ruptura tuby při tubární graviditě je život ohrožující příhodou s rizikem hemoragického šoku.'
  },
  'Adenomyóza dělohy': {
    title: 'Adenomyóza děložní stěny',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['Intramurální leiomyom dělohy', 'Endometroidní karcinom dělohy', 'Extragenitální endometrióza'],
    acceptedAnswers: ['adenomyóza dělohy', 'adenomyóza děložní stěny', 'adenomyoza delohy', 'adenomyóza', 'adenomyosis uteri', 'adenomyosis'],
    hint: 'Endometriální žlázky a endometriální stroma zavzaté hluboko v myometriu dělohy.',
    explanation: 'Přítomnost ostrůvků endometriální tkáně (endometriální žlázky spolu s cytogenním stromatem) uvnitř hladké svaloviny dělohy (myometria) ve vzdálenosti >2,5 mm od bazální vrstvy endometria, doprovázená reaktivní hypertrofií myometria.',
    pearl: 'Klinicky se manifestuje dysmenoreou, menoragií a difuzně zvětšenou dělohou.'
  },
  'Extragenitální endometrióza ve střevě': {
    title: 'Extragenitální endometrióza ve střevě',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['Adenokarcinom tlustého střeva', 'Chronická ulcerózní kolitida', 'Subserózní leiomyom střeva'],
    acceptedAnswers: ['extragenitální endometrióza ve střevě', 'endometrióza střeva', 'endometrioza ve streve', 'endometrióza', 'endometriosis'],
    hint: 'Endometriální žlázky a stroma s hemosiderofágy ve stěně střeva mimo pohlavní orgány.',
    explanation: 'Ektopické uložení endometriálních žlázek a cytogenního stromatu ve střevní stěně (subseróza, muscularis propria). V okolí žlázek jsou přítomny siderofágy jako pozůstatek cyklického krvácení a vazivová fibrotizace.',
    pearl: 'Symptomy (bolesti břicha, rektální krvácení) mívají typickou vazbu na menstruační cyklus.'
  },
  'Leiomyom dělohy': {
    title: 'Benigní leiomyom dělohy',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['Maligní leiomyosarkom dělohy', 'Adenomyóza děložního svalu', 'Stromaendometriální sarkom'],
    acceptedAnswers: ['leiomyom dělohy', 'benigní leiomyom dělohy', 'leiomyom delohy', 'děložní myom', 'leiomyoma uteri', 'myom dělohy'],
    hint: 'Prolínající se svazky uniformních buněk hladkého svalu s doutníkovitými jádry bez atypií a mitóz.',
    explanation: 'Ostře ohraničený benigní mezenchymový nádor z hladké svaloviny. Je tvořen proplétajícími se svazky hladkosvalových buněk s protáhlými eozinofilními cytoplazmami a tupě zakončenými "doutníkovitými" jádry. Mitózy i jaderné atypie chybí.',
    pearl: 'Leiomyom je nejčastějším benigním tumorem ženského genitálního traktu.'
  },
  'Endometroidní adenokarcinom': {
    title: 'Endometroidní adenokarcinom endometria',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['Serózní karcinom děložního těla', 'Atypická hyperplazie endometria', 'Karcinosarkom děložního fundu'],
    acceptedAnswers: ['endometroidní adenokarcinom', 'endometroidní adenokarcinom endometria', 'endometroidni adenokarcinom', 'karcinom endometria', 'adenokarcinom těla děložního'],
    hint: 'Zády k sobě naléhající nepravidelné endometriální žlázky (back-to-back) bez vmezeřeného stromatu.',
    explanation: 'Maligní epitelový nádor endometria. Tvořen proliferujícími atypickými žlázkami, které naléhají těsně k sobě se ztrátou vmezeřeného stromatu (uspořádání back-to-back), s buněčnou stratifikací, hyperchromázií a mitózami.',
    pearl: 'Je estrogen-dependentním nádorem (typ I karcinom endometria) vznikajícím typicky v terénu atypické hyperplazie u obézních postmenopauzálních žen.'
  },
  'Karcinom in situ děl. čípku': {
    title: 'Karcinom in situ děložního čípku (CIN 3)',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['Invazivní dlaždicobuněčný karcinom čípku', 'Lehká cervikální dysplazie (CIN 1)', 'Papilomatózní kondylom děložního čípku'],
    acceptedAnswers: ['karcinom in situ děl. čípku', 'karcinom in situ děložního čípku (cin 3)', 'karcinom in situ děložního čípku', 'cis čípku', 'cin 3', 'hsil', 'karcinom in situ čípku', 'carcinoma in situ'],
    hint: 'Ztráta diferenciace a polarity dlaždicového epitelu v celé tloušťce bez průniku bazální membránou.',
    explanation: 'High-grade skvamózní intraepiteliální léze (HSIL / CIN 3). Atypické dysplastické buňky s hyperchromními jádry, mitózami a vysokým N/C poměrem zaujímají celou tloušťku epitelu čípku, bazální membrána je však zcela intaktní bez stromální invaze.',
    pearl: 'Pravidelný onkologický cytologický screening (Pap stěr) umožňuje detekci a kurativní konizaci v tomto premaligním stádiu.'
  },
  'Invazivní dlaždicobuněčný karcinom čípku': {
    title: 'Invazivní karcinom děložního čípku',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['In situ karcinom děložního čípku', 'Infiltrativní adenokarcinom hrdla', 'Neuroendokrinní karcinom čípku'],
    acceptedAnswers: ['invazivní dlaždicobuněčný karcinom čípku', 'invazivní karcinom děložního čípku', 'karcinom děložního čípku', 'invazivní karcinom čípku', 'karcinom cervixu'],
    hint: 'Hnízda a pruhy atypického skvamózního epitelu invadujícího do cervikálního stromatu.',
    explanation: 'Karcinom překonávající bazální membránu a invadující do vazivového stromatu cervixu v podobě nepravidelných hnízd a čepů. Buňky vykazují výraznou pleomorfii, atypické mitózy a rohovění (keratinové perly) u rohovějící varianty.',
    pearl: 'Etiologicky je v >95 % případů vyvolán perzistující infekcí onkogenními kmeny HPV (zejména typy 16 a 18).'
  },
  'Low grade serózní karcinom ovaria': {
    title: 'Low grade serózní karcinom ovaria',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['High grade serózní karcinom ovaria', 'Mucinózní adenokarcinom ovaria', 'Endometroidní karcinom vaječníku'],
    acceptedAnswers: ['low grade serózní karcinom ovaria', 'low grade serozni karcinom', 'lgsoc', 'serózní karcinom ovaria'],
    hint: 'Jemné papily vystlané uniformním epitelem s mírnými atypiemi a četnými psammomatózními tělísky.',
    explanation: 'Maligní epiteliální nádor ovaria s papilární a mikropapilární architekturou. Nádorové buňky vykazují pouze mírné až střední jaderné atypie, nízkou mitotickou aktivitu a hojná psammomatózní tělíska. Vzniká typicky ze serózního borderline tumoru přes mutace KRAS/BRAF.',
    pearl: 'Na rozdíl od HGSC nemá mutaci TP53 a vykazuje nízkou citlivost k platinové chemoterapii.'
  },
  'High grade serózní karcinom ovaria': {
    title: 'High grade serózní karcinom ovaria',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['Low grade serózní karcinom ovaria', 'Mucinózní adenokarcinom ovaria', 'Endometroidní karcinom vaječníku'],
    acceptedAnswers: ['high grade serózní karcinom ovaria', 'high grade serozni karcinom', 'hgsoc', 'serózní adenokarcinom ovaria'],
    hint: 'Masivní solidní a papilární formace s extrémní jadernou pleomorfií, atypickými mitózami a mutací p53.',
    explanation: 'Vysoce agresivní karcinom ovaria tvořený pláty, papilami a kribriformními strukturami s výraznou jadernou atypií, bizardními vícejadernými buňkami, vysokým mitotickým indexem a nekrózami. Typická je difuzní pozitivita (nebo úplný výpadek) proteinu p53.',
    pearl: 'Často vzniká z prekancerózy ve vejcovodu (STIC - serous tubal intraepithelial carcinoma) a je asociován s mutacemi BRCA1/2.'
  },
  'Mucinózní cystadenom ovaria': {
    title: 'Mucinózní cystadenom ovaria',
    topicId: 'gyn',
    topicTitle: 'Gynekologická patologie',
    distractors: ['Serózní cystadenom ovaria', 'Mucinózní karcinom ovaria', 'Brennerův tumor vaječníku'],
    acceptedAnswers: ['mucinózní cystadenom ovaria', 'mucinózní cystadenom', 'cystadenoma mucinosum', 'mucinózní nádor ovaria'],
    hint: 'Cystické prostory vystlané jednou vrstvou cylindrického epitelu s apikálním hlenem a bazálními jádry.',
    explanation: 'Benigní cystický ovariální nádor. Multilokulární cysty jsou vystlány jednou vrstvou uniformního vysokého cylindrického epitelu s intracelulárním hlenem na apikálním pólu a malými jádry lokalizovanými přísně u báze bez atypií a mitóz.',
    pearl: 'Může dosahovat obrovských rozměrů (až desítky kilogramů) vyplňujících celou dutinu břišní.'
  },
  'Nodulární hyperplazie prostaty': {
    title: 'Nodulární hyperplazie prostaty',
    topicId: 'muz',
    topicTitle: 'Mužský pohlavní systém',
    distractors: ['Acinární karcinom prostaty', 'Akutní bakteriální prostatitida', 'Prostatická intraepiteliální neoplazie'],
    acceptedAnswers: ['nodulární hyperplazie prostaty', 'bph', 'benigní hyperplazie prostaty', 'hyperplasia prostatae', 'hyperplazie prostaty'],
    hint: 'Hyperplastické žlázky s dvouvrstvou výstelkou (luminální + bazální buňky) a korpora amylacea.',
    explanation: 'Nodulární proliferace glandulární i stromální komponenty v tranziční zóně prostaty. Žlázky mají zachovalou dvouvrstevnou výstelku (sekreční cylindrické buňky + bazální buňky) s papilárním řasením do lumina. V luminech se nacházejí koncentrická tělíska (corpora amylacea).',
    pearl: 'Vyrůstá v periuretrální (tranziční) zóně prostaty, proto způsobuje časné obstrukční mikční potíže.'
  },
  'Karcinom prostaty': {
    title: 'Acinární adenokarcinom prostaty',
    topicId: 'muz',
    topicTitle: 'Mužský pohlavní systém',
    distractors: ['Nodulární hyperplazie prostaty', 'Akutní bakteriální prostatitida', 'Prostatická intraepiteliální neoplazie'],
    acceptedAnswers: ['karcinom prostaty', 'acinární adenokarcinom prostaty', 'adenokarcinom prostaty', 'adenocarcinoma prostatae', 'rakovina prostaty'],
    hint: 'Malé nahloučené žlázky s chybějící bazální vrstvou buněk a prominentními jadérky (Gleason skóre).',
    explanation: 'Maligní acinární adenokarcinom prostaty. Tvořen malými těsně uspořádanými žlázkami infiltrujícími stroma. Zásadním diagnostickým znakem je úplná absence zevní vrstvy bazálních buněk (negativita p63/HMW-CK) a přítomnost nápadných zvětšených nukleolů v jádrech.',
    pearl: 'Typicky vzniká v periferní zóně prostaty (dorsálně), kde je hmatný při per rectum vyšetření.'
  },
  'Seminom': {
    title: 'Klasický seminom varlete',
    topicId: 'muz',
    topicTitle: 'Mužský pohlavní systém',
    distractors: ['Embryonální karcinom varlete', 'Yolk sac germinální tumor', 'Sertoliho stromální tumor'],
    acceptedAnswers: ['seminom', 'klasický seminom varlete', 'seminom varlete', 'seminoma testis', 'klasický seminom', 'testikulární seminom', 'germinální nádor'],
    hint: 'Pláty velkých polygonálních buněk s vodojasnou cytoplazmou a vazivová septa s lymfocyty.',
    explanation: 'Nejčastější germinální nádor varlete. Tvořen uniformními velkými buňkami s ostře ohraničenou světlou cytoplazmou (obsahuje glykogen) a kulatými jádry s výraznými jadérky. Nádorové lalůčky jsou odděleny tenkými vazivovými septy s bohatou lymfocytární infiltrací.',
    pearl: 'Seminom je vysoce radiosenzitivní a chemosenzitivní s vynikající kurabilitou i v pokročilém stádiu.'
  },
  'Embryonální karcinom varlete': {
    title: 'Embryonální karcinom varlete',
    topicId: 'muz',
    topicTitle: 'Mužský pohlavní systém',
    distractors: ['Klasický seminom varlete', 'Yolk sac germinální tumor', 'Choriokarcinom varlete'],
    acceptedAnswers: ['embryonální karcinom varlete', 'embryonální karcinom', 'carcinoma embryonale', 'non-seminom'],
    hint: 'Pleomorfní buňky rostoucí v pruzích a listech s rozsáhlými nekrózami a vysokou mitotickou aktivitou.',
    explanation: 'Agresivní non-seminomový germinální nádor. Skládá se z vysoce primitivních, polymorfních buněk epitelového vzhledu s velkými vezikulárními jádry, četnými atypickými mitózami a rozsáhlými hemoragickými nekrózami. Buňky tvoří solidní, tubulární i papilární formace.',
    pearl: 'Je často součástí smíšených germinálních nádorů varlete a je agresivnější než čistý seminom.'
  },
  'Fibroadenom mammy': {
    title: 'Fibroadenom prsní žlázy',
    topicId: 'mamma',
    topicTitle: 'Patologie prsu',
    distractors: ['Phyllodes tumor prsu', 'Duktální karcinom prsu', 'Fibrocystická mastopatie'],
    acceptedAnswers: ['fibroadenom mammy', 'fibroadenom prsní žlázy', 'fibroadenom prsu', 'fibroadenom', 'fibroadenoma mammae'],
    hint: 'Intrakanalikulární a perikanalikulární proliferace stromatu komprimujícího duktální štěrbiny.',
    explanation: 'Bifázický benigní nádor prsu tvořený proliferací duktálního epitelu a intralobulárního stromatu. Roste v perikanalikulárním (stroma obkružuje kulatá lumina duktů) nebo intrakanalikulárním vzorci (stroma stlačuje dukty do štěrbinovitých rozvětvených útvarů).',
    pearl: 'Je nejčastějším benigním tumorem prsu u mladých žen (20–35 let), klinicky jako volně pohyblivá elastická "myška".'
  },
  'Lobulární karcinom mammy': {
    title: 'Lobulární karcinom prsu',
    topicId: 'mamma',
    topicTitle: 'Patologie prsu',
    distractors: ['Duktální karcinom prsu', 'Medulární karcinom prsu', 'Tubulární karcinom prsu'],
    acceptedAnswers: ['lobulární karcinom mammy', 'lobulární karcinom prsu', 'invazivní lobulární karcinom', 'ilc', 'karcinom prsu', 'lobulární karcinom prsu'],
    hint: 'Diskohezivní malé buňky infiltrující stroma v jednoradých řadách ("husí pochod" / indian file).',
    explanation: 'Invazivní karcinom prsu charakterizovaný ztrátou buněčné koheze způsobenou dysfunkcí E-kadherinu. Nádorové buňky jsou malé, uniformní a infiltrují stroma jednotlivě nebo v jednoradých pruzích ("husí pochod" / indian files), často koncentricky obkružují normální dukty (terčovité uspořádání).',
    pearl: 'Ztráta exprese E-kadherinu (imunohistochemicky negativní) je klíčovým diagnostickým znakem ILC.'
  },
  'Pagetova choroba': {
    title: 'Pagetova choroba prsní bradavky',
    topicId: 'mamma',
    topicTitle: 'Patologie prsu',
    distractors: ['Ekzém dvorce prsní bradavky', 'Maligní melanom dvorce prsu', 'Morbus Bowen prsního dvorce'],
    acceptedAnswers: ['pagetova choroba', 'pagetova choroba prsní bradavky', 'pagetova choroba prsu', 'morbus paget', 'pagetův karcinom prsu', 'paget disease'],
    hint: 'Velké intraepidermální nádorové buňky s bledou cytoplazmou a velkými jádry v epidermis prsního dvorce.',
    explanation: 'Intraepiteliální šíření adenokarcinomových buněk v epidermis prsní bradavky a dvorce. Pagetovy buňky jsou velké, mají světlou cytoplazmu obsahující mucin a leží jednotlivě nebo v hnízdech mezi normálními keratinocyty.',
    pearl: 'Téměř vždy (v >95 %) je v hloubce prsu přítomen podkladový duktální karcinom in situ (DCIS) nebo invazivní karcinom.'
  },
  'Nodulární hyperplazie štítné žlázy': {
    title: 'Nodulární hyperplazie štítné žlázy',
    topicId: 'endokrin',
    topicTitle: 'Endokrinní systém',
    distractors: ['Folikulární adenom štítné žlázy', 'Hashimotova chronická tyreoiditida', 'Papilární karcinom štítné žlázy'],
    acceptedAnswers: ['nodulární hyperplazie štítné žlázy', 'nodulární struma', 'koloidní struma', 'struma nodosa', 'hyperplazie štítné žlázy'],
    hint: 'Různě velké folikuly naplněné hojným koloidem, lemované plochým inaktivním epitelem.',
    explanation: 'Parenchym štítné žlázy je uzlovitě přestavěn. Obsahuje směs různě velkých folikulů: velké dilatované folikuly naplněné denzním koloidem a vystlané oploštělým epitelem střídají drobné hyperplastické folikuly. Přítomny jsou regrese, krvácení a fibrózní septa.',
    pearl: 'Jde o nejčastější příčinu zvětšení štítné žlázy (endemická i sporadická struma).'
  },
  'Hashimoto thyreoiditis': {
    title: 'Hashimotova chronická tyreoiditida',
    topicId: 'endokrin',
    topicTitle: 'Endokrinní systém',
    distractors: ['Morbus Basedow (difuzní struma)', 'Subakutní de Quervainova tyreoiditida', 'Nodulární hyperplazie štítné žlázy'],
    acceptedAnswers: ['hashimoto thyreoiditis', 'hashimotova chronická tyreoiditida', 'hashimotova tyreoiditida', 'chronická lymfocytární tyreoiditida', 'hashimoto', 'struma lymphomatosa'],
    hint: 'Masivní lymfoplazmocelulární infiltrát s germinálními centry a oxyfilní (Hürthleho) metaplazie tyreocytů.',
    explanation: 'Autoimunitní zánět štítné žlázy. Folikuly štítné žlázy jsou atrofické a destruované masivním zánětlivým infiltrátem tvořeným lymfocyty a plazmocyty s tvorbou lymfatických folikulů se zárodečnými centry. Reziduální tyreocyty podléhají oxyfilní (onkotické / Hürthleho) transformaci s bohatou eozinofilní cytoplazmou.',
    pearl: 'Je nejčastější příčinou primární hypotyreózy v oblastech s dostatkem jódu.'
  },
  'Morbus Basedow': {
    title: 'Morbus Basedow (difuzní struma)',
    topicId: 'endokrin',
    topicTitle: 'Endokrinní systém',
    distractors: ['Hashimotova chronická tyreoiditida', 'Subakutní de Quervainova tyreoiditida', 'Nodulární hyperplazie štítné žlázy'],
    acceptedAnswers: ['morbus basedow', 'morbus basedow (difuzní struma)', 'graves-basedowova choroba', 'graves basedow', 'difuzní toxická struma', 'basedow'],
    hint: 'Vysoký cylindrický epitel s papilárními záhyby do lumina a vroubkovaným ("vyjedeným") koloidem.',
    explanation: 'Difuzní hyperplazie štítné žlázy způsobená autoprotilátkami stimulujícími TSH receptor (TRAK). Folikuly jsou lemovány vysokým cylindrickým epitelem tvořícím papilární výběžky do lumina. Koloid je bledý, zkapalněný a na styku s epitelem vykazuje resorpční vakuoly ("vyjedený koloid").',
    pearl: 'Typická klinická triáda: struma, tyreotoxikóza a endokrinní orbitopatie (exoftalmus).'
  },
  'Papilární karcinom štítné žlázy': {
    title: 'Papilární karcinom štítné žlázy',
    topicId: 'endokrin',
    topicTitle: 'Endokrinní systém',
    distractors: ['Folikulární karcinom štítné žlázy', 'Medulární karcinom štítné žlázy', 'Anaplastický karcinom tyreoidy'],
    acceptedAnswers: ['papilární karcinom štítné žlázy', 'papilarni karcinom', 'ptc', 'papilární karcinom', 'carcinoma papillare thyreoideae'],
    hint: 'Opticky prázdná jádra ("Orphan Annie eyes"), jaderné rýhy ("kávová zrna") a psammomatózní tělíska.',
    explanation: 'Nejčastější maligní nádor štítné žlázy. Diagnóza je založena na charakteristických jaderných znacích: opticky prázdná, matná jádra (Orphan Annie eyes), intranukleární cytoplazmatické inkluze, podélné jaderné rýhy (coffee bean nuclei) a přítomnost laminovaných kalcifikací (psammomatózní tělíska).',
    pearl: 'Metastazuje primárně lymfogenní cestou do krčních uzlin, i přes to má při adekvátní léčbě vynikající prognózu (>95 % 10leté přežití).'
  },
  'Folikulární karcinom štítné žlázy': {
    title: 'Folikulární karcinom štítné žlázy',
    topicId: 'endokrin',
    topicTitle: 'Endokrinní systém',
    distractors: ['Papilární karcinom štítné žlázy', 'Medulární karcinom štítné žlázy', 'Benigní folikulární adenom žlázy'],
    acceptedAnswers: ['folikulární karcinom štítné žlázy', 'folikularni karcinom', 'ftc', 'folikulární karcinom', 'carcinoma folliculare'],
    hint: 'Folikulární nádor s invazí přes celou tloušťku vazivového pouzdra nebo angioinvazí.',
    explanation: 'Maligní epitelový nádor z folikulárních buněk tvořící mikrofolikuly. Cytologicky je k nerozeznání od folikulárního adenomu – jediným kritériem malignity je průkaz kapsulární invaze (kompletní prorůstání přes vazivové pouzdro) a/nebo vaskulární invaze (prorůstání do cév v pouzdře či mimo něj).',
    pearl: 'Metastazuje převážně hematogenní cestou (kosti, plíce), nikoli lymfogenně jako papilární karcinom.'
  },
  'Lichen sclerosus et atrophicus': {
    title: 'Lichen sclerosus et atrophicus',
    topicId: 'kuze',
    topicTitle: 'Dermatopatologie & kůže',
    distractors: ['Lichen ruber planus dermis', 'Sklerodermie (morfea kůže)', 'Diskoidní lupus kůže (DLE)'],
    acceptedAnswers: ['lichen sclerosus et atrophicus', 'lichen sclerosus', 'lichen sclerosus et atrophicus kůže', 'lichen'],
    hint: 'Hyperkeratóza s folikulárním ucpáváním, atrofie epidermis a široký subepidermální pruh edému a sklerózy.',
    explanation: 'Chronická zánětlivá dermatóza. Vyznačuje se hyperkeratózou s rohovými zátkami v ústí folikulů, výraznou atrofií stratum spinosum s oploštěním epidermálních čepů, homogenní bezbuněčnou sklerotickou zónou v horním koriu a pásovitým lymfocytárním infiltrátem v hlubším koriu.',
    pearl: 'V anogenitální oblasti u žen (kraurosis vulvae) představuje terén se zvýšeným rizikem vzniku skvamocelulárního karcinomu.'
  },
  'Molluscum contagiosum': {
    title: 'Molluscum contagiosum kůže',
    topicId: 'kuze',
    topicTitle: 'Dermatopatologie & kůže',
    distractors: ['Verruca vulgaris epidermis', 'Keratoakantom kožního krytu', 'Seboroická keratóza kůže'],
    acceptedAnswers: ['molluscum contagiosum', 'molluscum contagiosum kůže', 'moluska', 'molluscum', 'infekční moluska'],
    hint: 'Pohárkovitá epidermální léze s velkými intracytoplazmatickými eozinofilními Hendersonovými-Patersonovými tělísky.',
    explanation: 'Virová infekce kůže způsobená poxvirem. Vytváří kráterovitě prohloubenou hyperplastickou epidermální lézi. V keratinocytech stratum spinosum a granulosum vznikají obrovské homogenní intracytoplazmatické inkluze (mollusková / Henderson-Patersonova tělíska), které vytlačují jádro k periferii.',
    pearl: 'Přenáší se přímým kontaktem (v dětských bazénech) nebo pohlavním stykem u dospělých.'
  },
  'Verruca vulgaris': {
    title: 'Verruca vulgaris (bradavice)',
    topicId: 'kuze',
    topicTitle: 'Dermatopatologie & kůže',
    distractors: ['Seboroická veruka epidermis', 'Molluscum contagiosum kůže', 'Epidermální papilomatózní névus'],
    acceptedAnswers: ['verruca vulgaris', 'verruca vulgaris (bradavice)', 'bradavice obecná', 'bradavice', 'veruka', 'papilom kůže'],
    hint: 'Papilomatóza, akantóza, hyperkeratóza a koilocyty s keratohyalinovými granuly v horních vrstvách.',
    explanation: 'Bradavice způsobená infekcí nízkorizikovými kmeny HPV (HPV 1, 2, 4, 7). V histologii je vyjádřena papilomatóza (prstovité výběžky epidermis), akantóza, výrazná hyperkeratóza s okrsky parakeratózy nad papilami a koilocyty (vakuolizované buňky s pyknotickými jádry) ve stratum granulosum.',
    pearl: 'Koilocytóza je patognomickým morfologickým znakem cytopatického efektu lidského papilomaviru (HPV).'
  },
  'Melanoakontotická seboroická veruka': {
    title: 'Melanoakantotická seboroická veruka',
    topicId: 'kuze',
    topicTitle: 'Dermatopatologie & kůže',
    distractors: ['Pigmentovaný basocelulární karcinom', 'Dysplastický pigmentový névus kůže', 'Maligní nodulární melanom epidermis'],
    acceptedAnswers: ['melanoakontotická seboroická veruka', 'melanoakantotická seboroická veruka', 'seboroická veruka', 'seborrhoická keratóza', 'melanoacanthoma'],
    hint: 'Exofytická léze z bazaloidních buněk s rohovými pseudocystami a bohatými dendritickými melanocyty.',
    explanation: 'Varianta seboroické keratózy. Léze ostře nasedá na epidermis a je tvořena proliferací uniformních bazaloidních keratinocytů s četnými rohovými cystami a pseudocystami. V celé tloušťce léze je rozptýleno velké množství pigmentovaných dendritických melanocytů.',
    pearl: 'Náhlý výsev mnohočetných seboroických veruk (Leser-Trélatův příznak) může být paraneoplastickým projevem adenokarcinomu GIT.'
  },
  'Intradermální névus': {
    title: 'Intradermální pigmentový névus',
    topicId: 'kuze',
    topicTitle: 'Dermatopatologie & kůže',
    distractors: ['Junkční melanocytární névus', 'Složený (smíšený) névus', 'Povrchově se šířící melanom'],
    acceptedAnswers: ['intradermální névus', 'intradermální pigmentový névus', 'intradermalni nevus', 'pigmentový névus', 'naevus intradermalis'],
    hint: 'Hnízda uniformních névomelanocytů uložená výhradně v dermis s fenoménem maturace do hloubky.',
    explanation: 'Benigní melanocytární léze. Hnízda a pruhy névomelanocytů jsou lokalizovány výhradně v dermis (v junkční zóně epidermis žádná hnízda nejsou). Buňky vykazují zřetelnou maturaci do hloubky – povrchové buňky jsou epiteloidní a tvoří pigment, v hloubce se zmenšují a nabývají neuroidního/vřetenitého vzhledu.',
    pearl: 'Maturace névomelanocytů směrem do hloubky a absence atypických mitóz jsou stěžejními znaky odlišujícími névus od maligního melanomu.'
  },
  'Morbus Bowen': {
    title: 'Morbus Bowen (spinaliom in situ)',
    topicId: 'kuze',
    topicTitle: 'Dermatopatologie & kůže',
    distractors: ['Infiltrativní spinocelulární karcinom', 'Superficiální bazocelulární karcinom', 'Hyperkeratotická aktinická keratóza'],
    acceptedAnswers: ['morbus bowen', 'morbus bowen (spinaliom in situ)', 'bowenova choroba', 'carcinoma in situ kůže', 'spinaliom in situ', 'bowen'],
    hint: 'Dlaždicobuněčný karcinom in situ s atypiemi keratinocytů v celé tloušťce epidermis bez invaze přes bazální membránu.',
    explanation: 'Intraepidermální spinocelulární karcinom (carcinoma in situ) kůže. V celé tloušťce epidermis je přítomna úplná ztráta architektoniky, těžká jaderná pleomorfie, atypické mitózy, vícejaderné buňky a dyskeratotické buňky. Bazální membrána zůstává neporušená.',
    pearl: 'Při lokalizaci na glans penis se označuje jako Erythroplasia Queyrat.'
  },
  'Bazaliom': {
    title: 'Bazocelulární karcinom kůže',
    topicId: 'kuze',
    topicTitle: 'Dermatopatologie & kůže',
    distractors: ['Spinocelulární karcinom kůže', 'Maligní nodulární melanom kůže', 'Benigní trichoepiteliom kůže'],
    acceptedAnswers: ['bazaliom', 'bazocelulární karcinom kůže', 'bazocelulární karcinom', 'bazocelularni karcinom', 'bcc', 'carcinoma basocellulare'],
    hint: 'Nádorová hnízda bazaloidních buněk s palisádovitým uspořádáním na periferii a retrakčními artefakty.',
    explanation: 'Nejčastější maligní kožní nádor. Tvořen hnízdy bazaloidních buněk s hyperchromními jádry a chudou cytoplazmou. Na periferii hnízd tvoří buňky charakteristické palisádovité uspořádání. Mezi nádorovými hnízdy a okolním vazivovým stromatem vznikají typické retrakční štěrbiny.',
    pearl: 'Má lokálně invazivní a destruktivní růst (ulcus rodens), avšak metastazuje naprosto raritně (<0,1 %).'
  },
  'Maligní melanom amelanotický': {
    title: 'Maligní amelanotický melanom kůže',
    topicId: 'kuze',
    topicTitle: 'Dermatopatologie & kůže',
    distractors: ['Intradermální pigmentový névus', 'Bazocelulární karcinom kůže', 'Spinocelulární karcinom kůže'],
    acceptedAnswers: ['maligní melanom amelanotický', 'maligní amelanotický melanom kůže', 'maligní amelanotický melanom', 'maligní melanom', 'amelanotický melanom', 'melanom', 'melanoma malignum'],
    hint: 'Pleomorfní atypické nádorové buňky bez tvorby hnědého pigmentu (pozitivní HMB45, Melan-A, S100).',
    explanation: 'Vysoce maligní nádor z melanocytů, který netvoří melaninový pigment. Skládá se z atypických epiteloidních a vřetenitých buněk s velkými pleomorfními jádry, prominentními eozinofilními jadérky a častými patologickými mitózami. Diagnóza vyžaduje imunohistochemické potvrzení (S100, SOX10, Melan-A, HMB-45).',
    pearl: 'Breslowova tloušťka nádoru (hloubka invaze v milimetrech od stratum granulosum) je nejdůležitějším prognostickým faktorem.'
  },
  'Skvamocelulární karcinom kůže': {
    title: 'Spinocelulární karcinom kůže',
    topicId: 'kuze',
    topicTitle: 'Dermatopatologie & kůže',
    distractors: ['Bazocelulární karcinom kůže', 'Maligní nodulární melanom kůže', 'Infiltrativní keratoakantom kůže'],
    acceptedAnswers: ['skvamocelulární karcinom kůže', 'spinocelulární karcinom kůže', 'spinaliom', 'karcinom kůže', 'carcinoma squamocellulare'],
    hint: 'Invazivní hnízda atypických keratinocytů v dermis s rohovějícími perlami a intercelulárními můstky.',
    explanation: 'Invazivní maligní nádor z keratinocytů epidermis. Tvořen pruhy a hnízdy atypického dlaždicového epitelu pronikajícího hluboko do dermis. V buňkách jsou zřetelné intercelulární můstky (dezmozomy) a v centru hnízd se tvoří koncentrické rohové perly z laminovaného keratinu.',
    pearl: 'Často vzniká na slunci vystavené kůži z prekancerózy zvané aktinická keratóza.'
  },
  'Malácie mozku': {
    title: 'Kolikvační malácie mozku',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Multiformní glioblastom mozku', 'Hnisavý absces mozkové tkáně', 'Difuzní fibrilární astrocytom'],
    acceptedAnswers: ['malácie mozku', 'kolikvační malácie mozku', 'malacie mozku', 'encefalomalacie', 'kolikvační nekróza mozku', 'mozkový infarkt'],
    hint: 'Kolikvační nekróza mozkové tkáně se zrnéčkovými buňkami (pěnitými makrofágy plnými lipidů).',
    explanation: 'Ischemický infarkt mozkové tkáně vedoucí ke kolikvační (zkapalňující) nekróze. Zanikající neurony a myelin jsou fagocytovány aktivovanými mikrogliemi a makrofágy, které se mění v tzv. zrnéčkové buňky (pěnité lipofágy). Na periferii ložiska reagují astrocyty reaktivní fibrilární gliózou.',
    pearl: 'Na rozdíl od jiných orgánů probíhá ischemická nekróza v CNS v důsledku vysokého obsahu lipidů a lytických enzymů jako kolikvace s tvorbou pseudocysty.'
  },
  'Meningeom': {
    title: 'Meningoteliální meningeom',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Vestibulární schwannom', 'Multiformní glioblastom', 'Ependymom komorového systému'],
    acceptedAnswers: ['meningeom', 'meningoteliální meningeom', 'meningiom', 'meningeoma'],
    hint: 'Koncentrická vírovitá (cibulovitá) hnízda meningoteliálních buněk a psammomatózní tělíska.',
    explanation: 'Benigní nádor z arachnoidálních buněk mozkových plen. Buňky mají oválná jádra s jemným chromatinem a nezřetelnými hranicemi (syncytiální vzhled) a formují charakteristická vírovitá (cibulovitá) uspořádání. Častá jsou koncentricky kalcifikovaná psammomatózní tělíska.',
    pearl: 'Je nejčastějším primárním intrakraniálním extraaxiálním nádorem, častější u žen (exprese progesteronových receptorů).'
  },
  'Neurinom - Schwanom': {
    title: 'Schwannom (neurinom) periferního nervu',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Meningoteliální meningeom mozku', 'Pleexiformní neurofibrom nervu', 'Leiomyom hlubokých měkkých tkání'],
    acceptedAnswers: ['neurinom - schwanom', 'schwannom (neurinom) periferního nervu', 'neurinom', 'schwannom', 'schwanom', 'neurilemmom', 'schwannoma'],
    hint: 'Hypocelulární zóny Antoni B a hypercelulární zóny Antoni A s Verocayovými tělísky.',
    explanation: 'Benigní nádor z Schwannových buněk periferních nervů. Skládá se ze dvou střídajících se oblastí: buněčně bohaté Antoni A zóny s palisádováním jader kolem acelulárních eozinofilních proužků (Verocayova tělíska) a řídké myxoidní Antoni B zóny.',
    pearl: 'Nejčastější intrakraniální lokalizací je vestibulární schwannom (neurinom akustiku) v mostomozečkovém koutu.'
  },
  'Glioblastom': {
    title: 'Glioblastoma multiforme (WHO grade 4)',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Anaplastický astrocytom (grade 3)', 'Oligodendrogliom mozkové kůry', 'Meningoteliální meningeom plen'],
    acceptedAnswers: ['glioblastom', 'glioblastoma multiforme (who grade 4)', 'glioblastoma multiforme', 'gbm', 'glioblastom mozku', 'high grade astrocytom'],
    hint: 'Pseudopalisádovité nekrózy a glomeruloidní vaskulární mikrovaskulární proliferace v mozku.',
    explanation: 'Vysoce maligní difuzní astrocytární gliom (WHO grade 4). Vyznačuje se extrémní buněčnou a jadernou polymorfií, četnými mitózami a dvěma kardinálními diagnostickými znaky: geografickými nekrózami lemovanými pseudopalisádami nádorových buněk a glomeruloidní mikrovaskulární endoteliální proliferací.',
    pearl: 'Je nejčastějším a nejagresivnějším primárním maligním tumorem mozku u dospělých s mediánem přežití 12–15 měsíců.'
  },
  'Ependymom': {
    title: 'Ependymom mozkových komor',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Multiformní glioblastom', 'Meduloblastom mozečku', 'Papilom chorioideálního plexu'],
    acceptedAnswers: ['ependymom', 'ependymom mozkových komor', 'ependymoma', 'ependymom mozku', 'perivaskulární pseudorozety'],
    hint: 'Perivaskulární pseudorozety (bezjaderné zóny výběžků kolem cév) a ependymální rozety.',
    explanation: 'Gliální nádor vycházející z ependymální výstelky mozkových komor a centrálního kanálu míchy. Diagnostickým znakem jsou perivaskulární pseudorozety (nádorové buňky vysílají své tenké cytoplazmatické výběžky k adventicii centrálně probíhající cévy a vytvářejí kolem ní bezjadernou zónu) a pravé tubulární ependymální rozety.',
    pearl: 'U dětí se nejčastěji vyskytuje v oblasti IV. mozkové komory, u dospělých v míše.'
  },
  'Leiomyosarkom': {
    title: 'Maligní leiomyosarkom',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Benigní leiomyom tkání', 'Pleomorfní rhabdomyosarkom', 'Fibrosarkom měkkých tkání'],
    acceptedAnswers: ['leiomyosarkom', 'maligní leiomyosarkom', 'leiomyosarcoma', 'leiomyosarkom dělohy', 'maligní leiomyom'],
    hint: 'Svazky hladkosvalových buněk s výraznými jadernými atypiemi, četnými mitózami a nádorovými nekrózami.',
    explanation: 'Maligní nádor z hladké svaloviny. Od benigního leiomyomu se liší triádou znaků: difuzní těžká jaderná atypie a pleomorfie, vysoký počet mitóz (včetně patologických forem) a přítomnost koagulační nekrózy nádorových buněk.',
    pearl: 'V naprosté většině případů vzniká leiomyosarkom dělohy de novo, nikoli malignizací preexistujícího leiomyomu.'
  },
  'Lipom': {
    title: 'Benigní lipom podkoží',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Dediferencovaný liposarkom', 'Vaskularizovaný hibernom', 'Benigní angiolipom kůže'],
    acceptedAnswers: ['lipom', 'benigní lipom podkoží', 'lipoma', 'tukový nádor', 'benigní lipom'],
    hint: 'Lalůčky zralých adipocytů identických s normální tukovou tkání ohraničené tenkým vazivovým pouzdrem.',
    explanation: 'Nejčastější benigní mezenchymový nádor měkkých tkání. Skládá se z lalůčků uniformních zralých adipocytů s velkou tukovou kapénkou a jádrem stlačeným k periferii, bez jaderných atypií, lipoblastů či mitóz, obklopených tenkým vazivovým pouzdrem.',
    pearl: 'Je zcela nezhoubný a nikdy nemalignizuje v liposarkom.'
  },
  'Liposarkom': {
    title: 'Dediferencovaný liposarkom',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Benigní lipom podkoží', 'Intramuskulární myxom', 'Pleomorfní fibrosarkom'],
    acceptedAnswers: ['liposarkom', 'dediferencovaný liposarkom', 'liposarcoma', 'lipoblasty'],
    hint: 'Atypické lipoblasty s hyperchromními jádry indented multikapénkovým tukem a myxoidní stroma.',
    explanation: 'Maligní nádor z adipocytární řady. Diagnostickým znakem je přítomnost lipoblastů – atypických buněk obsahujících vícečetné lipidové vakuoly v cytoplazmě, které vroubkují a deformují hyperchromní nepravidelné jádro. Ve stromatu se nachází plexiformní síť kapilár.',
    pearl: 'Velmi často se vyskytuje v hlubokých měkkých tkáních retroperitonea a stehna.'
  },
  'Obrovskobuněčný tumor šlachové pochvy': {
    title: 'Obrovskobuněčný tumor šlachové pochvy',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Synoviální sarkom měkkých tkání', 'Pigmentovaná vilonodulární synovitida', 'Mnohočetný ganglion šlachy prstu'],
    acceptedAnswers: ['obrovskobuněčný tumor šlachové pochvy', 'gctts', 'tenosynoviální obrovskobuněčný tumor', 'tgct', 'tumor šlachové pochvy'],
    hint: 'Mnohojaderné osteoklastům podobné buňky, mononukleární histiocyty, xantomové buňky a hemosiderin.',
    explanation: 'Benigní synoviální léze šlachových pochev (nejčastěji prstů ruky). Skládá se ze směsi mononukleárních synoviálních histiocytů, mnohojaderných obrovských buněk typu osteoklastů, pěnitých buněk (xantomových buněk) a depozit hnědého hemosiderinu v kolagenním stromatu.',
    pearl: 'Je druhým nejčastějším tumorem ruky (po gangliu).'
  },
  'Stehový granulom': {
    title: 'Stehový granulom z cizích těles',
    topicId: 'cns_sarkomy',
    topicTitle: 'CNS & Měkké tkáně',
    distractors: ['Kaseifikující TBC granulom', 'Nekaseifikující sarkoidóza', 'Cizorodý hnisavý absces tkáně'],
    acceptedAnswers: ['stehový granulom', 'stehový granulom z cizích těles', 'stehovy granulom', 'cizorodý granulom', 'granulom z cizích těles', 'granuloma e corpore alieno'],
    hint: 'Mnohojaderné obrovské buňky z cizích těles s chaoticky rozptýlenými jádry obklopující chirurgické stehy.',
    explanation: 'Granulomatózní zánětlivá reakce na cizorodý chirurgický šicí materiál. V centru granulomu jsou patrná cizí tělesa (řezy vlákny stehu, vykazující dvojlom v polarizovaném světle), která jsou obklopena a pohlcována obrovskými mnohojadernými buňkami z cizích těles (s nepravidelně rozesetými jádry), histiocyty a fibroblasty.',
    pearl: 'Obrovské buňky z cizích těles mají jádra rozptýlená náhodně v cytoplazmě, na rozdíl od podkovovitého lemu u Langhansových buněk.'
  }
};

// Copy images and build questions list
const questions = [];
let copiedCount = 0;

for (const slide of sourceSlides) {
  const meta = DEFINITIONS_BY_TITLE[slide.title.trim()];
  if (!meta) {
    console.error(`Missing definition for slide: "${slide.title}" (ID: ${slide.id})`);
    process.exit(1);
  }

  // Pick 3rd image if >= 4 images, otherwise fallback
  const chosenIdx = slide.images.length >= 4 ? 2 : (slide.images.length >= 3 ? 2 : (slide.images.length >= 2 ? 1 : 0));
  const relSrc = slide.images[chosenIdx] || slide.images[0];
  const srcPath = path.join(PATOLKA_DIR, 'preparaty', 'images', relSrc);
  const assetFilename = `prep_${slide.id}.jpg`;
  const destPath = path.join(ASSETS_DIR, assetFilename);

  if (!fs.existsSync(srcPath)) {
    console.error(`Missing source image: ${srcPath}`);
    process.exit(1);
  }

  fs.copyFileSync(srcPath, destPath);
  copiedCount++;

  // Build options array with balanced distractors
  const options = [meta.title, ...meta.distractors];
  // Deterministic shuffle based on slide ID to keep correctIndex evenly spread across 0, 1, 2, 3
  const targetSlot = (slide.id % 4);
  const temp = options[0];
  options[0] = options[targetSlot];
  options[targetSlot] = temp;
  const correctIndex = targetSlot;

  questions.push({
    id: `prep-${slide.id}`,
    subjectId: 'preparaty',
    subjectTitle: 'Zkouškové preparáty',
    topicId: meta.topicId,
    topicTitle: meta.topicTitle,
    type: 'single_choice',
    isSlide: true,
    question: 'Poznejte histologický preparát:',
    options: options,
    correctIndex: correctIndex,
    acceptedAnswers: meta.acceptedAnswers,
    hint: meta.hint,
    explanation: meta.explanation,
    pearl: meta.pearl,
    media: {
      src: `/drill/assets/preparaty/${assetFilename}`,
      alt: `Histologický preparát: ${meta.title}`,
      kind: 'supplied'
    },
    source: 'Ústav patologie LF OU • Zkouškové preparáty',
    reviewedAt: '2026-10-09'
  });
}

console.log(`Copied ${copiedCount} images. Generated ${questions.length} slide questions.`);

// Write module file
const modulePath = path.join(ROOT, 'data', 'modules', 'preparaty.json');
const moduleData = {
  id: 'preparaty',
  title: 'Zkouškové preparáty',
  grade: 3,
  icon: '🔬',
  color: '#00FFC2',
  description: 'Kompletní sada 89 oficiálních zkouškových histologických preparátů z patologie LF OU s mikroskopickými snímky, dopisovacím trenažérem i záchranným 4-možnostním testem.',
  questions: questions
};

fs.writeFileSync(modulePath, JSON.stringify(moduleData, null, 2), 'utf8');
console.log(`Wrote module data to ${modulePath}`);

// Update manifest.json
const manifestPath = path.join(ROOT, 'data', 'manifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Check if preparaty already exists in manifest
const existingIdx = manifest.subjects.findIndex(s => s.id === 'preparaty');
const preparatySubjectManifest = {
  id: 'preparaty',
  revision: '2026.4.0-prep89',
  title: 'Zkouškové preparáty',
  grade: 3,
  icon: '🔬',
  color: '#00FFC2',
  totalQuestions: questions.length,
  counts: {
    single_choice: questions.length,
    case_study: 0,
    fill_in: 0
  },
  sizeBytes: fs.statSync(modulePath).size,
  sizeFormatted: `${Math.round(fs.statSync(modulePath).size / 1024)} kB`,
  file: '/drill/data/modules/preparaty.json'
};

if (existingIdx >= 0) {
  manifest.subjects[existingIdx] = preparatySubjectManifest;
} else {
  // Insert right after 'patola'
  const patolaIdx = manifest.subjects.findIndex(s => s.id === 'patola');
  if (patolaIdx >= 0) {
    manifest.subjects.splice(patolaIdx + 1, 0, preparatySubjectManifest);
  } else {
    manifest.subjects.push(preparatySubjectManifest);
  }
}

manifest.lastUpdated = new Date().toISOString();
fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`Updated manifest at ${manifestPath}`);
