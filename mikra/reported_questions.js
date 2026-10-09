// Kurátorovaná banka studentsky zaznamenaných zkouškových otázek.
// "reported" znamená, že se téma objevilo ve studentském zápisu, nikoli
// oficiálně zveřejněnou fakultní otázku. Každá položka je před zveřejněním
// převedena na jednu jednoznačně správnou čtyřvolbovou otázku.

const MIKRA_REPORTED_REVIEW_DATE = '2026-10-09';
const MIKRA_REPORTED_SOURCE_LABEL = 'Studentský zápis zkouškových otázek (sešit Test / vzpomínka po testu)';

const MIKRA_REPORTED_MEDIA = {
  aspergilloma: {
    src: '/drill/assets/mikra/ct-aspergilloma-moon-crescent.png',
    alt: 'CT plic s kulovitou lézí oddělenou od stěny dutiny srpkem vzduchu.',
    kind: 'supplied',
    source: 'Vložený obrázek v dodaném sešitu, Test!A74.'
  },
  enterobius: {
    src: '/drill/assets/mikra/enterobius-eggs.png',
    alt: 'Oválná vajíčka Enterobius vermicularis s typickou asymetrií.',
    kind: 'supplied',
    source: 'Vložený obrázek v dodaném sešitu, Test!A99.'
  },
  dilution: {
    src: '/drill/assets/mikra/dilution-mic-tubes.png',
    alt: 'Řada zkumavek s postupně klesající koncentrací antimikrobiální látky pro stanovení MIC.',
    kind: 'supplied',
    source: 'Vložený obrázek v dodaném sešitu, Test!A112.'
  },
  calcofluor: {
    src: '/drill/assets/mikra/calcofluor-fungal-fluorescence.png',
    alt: 'Fluorescenčně svítící buněčné stěny hub po barvení calcofluorem.',
    kind: 'supplied',
    source: 'Vložený obrázek v dodaném sešitu, Test!L112.'
  },
  trichomonas: {
    src: '/drill/assets/mikra/trichomonas-vaginalis.png',
    alt: 'Hruškovitý bičíkovec Trichomonas vaginalis s bičíky.',
    kind: 'supplied',
    source: 'Vložený obrázek v dodaném sešitu, Test!A76.'
  },
  streptococci: {
    src: '/drill/assets/mikra/streptococcus-culture-hemolysis.png',
    alt: 'Krevní agar s kultivací streptokoků a změnou hemolýzy v okolí kolonií.',
    kind: 'supplied',
    source: 'Vložený obrázek v dodaném sešitu, Test!I75.'
  },
  woundSmear: {
    src: '/drill/assets/mikra/wound-smear-gram-stain.png',
    alt: 'Mikroskopický preparát z hnisavé rány s bakteriemi a leukocyty.',
    kind: 'supplied',
    source: 'Vložený obrázek v dodaném sešitu, Test!A112.'
  },
  acidFast: {
    src: '/drill/assets/mikra/acid-fast-stain.png',
    alt: 'Acidorezistentní tyčinky v kontrastně dobarveném preparátu.',
    kind: 'supplied',
    source: 'Vložený obrázek v dodaném sešitu, Test!A99.'
  }
};

function createReportedMikraQuestion({ id, topicId, part, question, options, correct, explanation, evidence, media }) {
  return {
    id: `reported-${id}`,
    topicId,
    part,
    q: question,
    options,
    correct,
    explanation,
    reported: true,
    reportedEvidence: {
      label: 'Vynesená otázka',
      note: 'Téma zaznamenali studenti po zkouškovém testu; nejde o oficiální fakultní banku.',
      references: evidence
    },
    source: MIKRA_REPORTED_SOURCE_LABEL,
    reviewedAt: MIKRA_REPORTED_REVIEW_DATE,
    media: media || null
  };
}

const MIKRA_REPORTED_QUESTIONS = [
  createReportedMikraQuestion({
    id: 'maldi-tof', topicId: 'mikra-14', part: 'B',
    question: 'Jaký princip využívá MALDI-TOF při rutinní identifikaci bakterie z kolonie?',
    options: ['Sekvenaci genu pro 16S rRNA', 'Hmotnostní spektrometrii proteinového profilu', 'Průkaz antigenu latexovou aglutinací', 'Stanovení MIC v mikrodiluční metodě'], correct: 1,
    explanation: 'MALDI-TOF porovnává hmotnostní spektrum hlavně ribozomálních proteinů izolované kolonie s databází.', evidence: ['Test!A6/B6', 'Test!A62/B62', 'Test!A247/B247']
  }),
  createReportedMikraQuestion({
    id: 'calcofluor-binding', topicId: 'mikra-17', part: 'B',
    question: 'Na kterou součást buněčné stěny hub se váže calcofluor white při fluorescenčním průkazu?',
    options: ['Chitin', 'Peptidoglykan', 'Lipopolysacharid', 'Mykolové kyseliny'], correct: 0,
    explanation: 'Calcofluor white se váže na polysacharidy buněčné stěny hub, zejména chitin a celulózu, a zvýrazní je fluorescencí.', evidence: ['Test!A52/B52', 'Test!L112'], media: MIKRA_REPORTED_MEDIA.calcofluor
  }),
  createReportedMikraQuestion({
    id: 'sabouraud', topicId: 'mikra-15', part: 'B',
    question: 'Která půda se standardně používá pro kultivaci kvasinek a vláknitých hub?',
    options: ['Sabouraudův agar', 'MacConkeyho agar', 'Thayerův-Martinův agar', 'Löwensteinův–Jensenův agar'], correct: 0,
    explanation: 'Sabouraudův agar s kyselým pH je klasická kultivační půda pro kvasinky a plísně.', evidence: ['Test!A17/B17', 'Test!A253/B253']
  }),
  createReportedMikraQuestion({
    id: 'aspergillus-galactomannan', topicId: 'mikra-16', part: 'B',
    question: 'Průkaz galaktomananu v séru nebo BAL podporuje diagnózu které invazivní mykózy?',
    options: ['Invazivní aspergilózy', 'Kryptokokózy', 'Kandidémie', 'Pneumocystové pneumonie'], correct: 0,
    explanation: 'Galaktomanan je buněčná složka Aspergillus spp. používaná jako podpůrný marker invazivní aspergilózy.', evidence: ['Test!A131/B131']
  }),
  createReportedMikraQuestion({
    id: 'aspergilloma-ct', topicId: 'mikra-16', part: 'B',
    question: 'Co nejlépe odpovídá nálezu na CT: kulovitý útvar v preexistující plicní dutině, kolem něhož je patrný srpek vzduchu?',
    options: ['Aspergilom s air-crescent sign', 'Pneumotorax', 'Miliární tuberkulóza', 'Pleurální empyém'], correct: 0,
    explanation: 'Aspergilom je kolonie hub v dutině; vzduch mezi mycetomem a stěnou dutiny vytváří typický moon/air-crescent vzhled.', evidence: ['Vzpomínka po testu: CT aspergilomu – moon crescent sign'], media: MIKRA_REPORTED_MEDIA.aspergilloma
  }),
  createReportedMikraQuestion({
    id: 'fluorescent-yeast', topicId: 'mikra-15', part: 'B',
    question: 'Na fluorescenčním preparátu jsou patrné pučící oválné buňky. Který z následujících původců je kvasinka?',
    options: ['Cryptococcus neoformans', 'Nocardia farcinica', 'Actinomyces israelii', 'Gardnerella vaginalis'], correct: 0,
    explanation: 'Cryptococcus neoformans je zapouzdřená kvasinka; ostatní možnosti jsou bakterie.', evidence: ['Vzpomínka po testu: fluorescenční barvení hub – jediná kvasinka']
  }),
  createReportedMikraQuestion({
    id: 'voriconazole', topicId: 'mikra-24', part: 'A',
    question: 'Které antimykotikum patří mezi standardní léky první volby u invazivní aspergilózy?',
    options: ['Vorikonazol', 'Flukonazol', 'Nystatin', 'Terbinafin'], correct: 0,
    explanation: 'Vorikonazol je základní systémové antimykotikum pro léčbu invazivní aspergilózy.', evidence: ['Test!A97/B97']
  }),
  createReportedMikraQuestion({
    id: 'fluconazole-use', topicId: 'mikra-24', part: 'A',
    question: 'Pro kterou skupinu infekcí je flukonazol typicky využíván?',
    options: ['Kvasinkové infekce včetně kandidóz', 'Invazivní aspergilóza jako první volba', 'Dermatofytózy pouze lokálně', 'Infekce způsobené Mucorales'], correct: 0,
    explanation: 'Flukonazol má aktivitu zejména proti mnoha druhům Candida, nikoli spolehlivě proti Aspergillus nebo Mucorales.', evidence: ['Test!A98/B98']
  }),
  createReportedMikraQuestion({
    id: 'zn-acid-fast', topicId: 'mikra-21', part: 'A',
    question: 'K průkazu acidorezistentních tyčinek v preparátu se používá především které barvení?',
    options: ['Ziehlovo–Neelsenovo', 'Gramovo', 'Giemsovo', 'India ink'], correct: 0,
    explanation: 'Ziehlovo–Neelsenovo barvení využívá acidorezistenci mykobakterií danou mykolovými kyselinami.', evidence: ['Test!A215/B215', 'Vzpomínka po testu: mykobakterie nabarvené Ziehl–Neelsen'], media: MIKRA_REPORTED_MEDIA.acidFast
  }),
  createReportedMikraQuestion({
    id: 'mycobacteria-gram', topicId: 'mikra-21', part: 'A',
    question: 'Proč nejsou mykobakterie spolehlivě hodnotitelné běžným Gramovým barvením?',
    options: ['Mají stěnu bohatou na mykolové kyseliny', 'Nemají buněčnou stěnu', 'Tvoří endospory', 'Jsou obligátně intracelulární'], correct: 0,
    explanation: 'Lipidy a mykolové kyseliny v obalu mykobakterií zhoršují průnik běžných barviv; používá se acidorezistentní barvení.', evidence: ['Test!A249/B249']
  }),
  createReportedMikraQuestion({
    id: 'mycobacterium-culture', topicId: 'mikra-21', part: 'A',
    question: 'Jak dlouho může trvat kultivace Mycobacterium tuberculosis na pevných médiích?',
    options: ['3–6 týdnů', '6–12 hodin', '24 hodin', '2–3 dny'], correct: 0,
    explanation: 'M. tuberculosis roste pomalu; kultivace na pevném médiu se hodnotí v řádu týdnů.', evidence: ['Test!A211/B211']
  }),
  createReportedMikraQuestion({
    id: 'ntm-disease', topicId: 'mikra-22', part: 'A',
    question: 'Které tvrzení nejlépe vystihuje netuberkulózní mykobakteria?',
    options: ['Mohou vyvolávat chronická onemocnění, zejména u vnímavých hostitelů', 'Jsou vždy součástí běžné střevní flóry', 'Způsobují pouze akutní virové infekce', 'Nelze je kultivovat'], correct: 0,
    explanation: 'Netuberkulózní mykobakteria jsou environmentální druhy a mohou vyvolávat zejména chronické plicní či diseminované infekce.', evidence: ['Test!A129/B129', 'Test!A130/B130']
  }),
  createReportedMikraQuestion({
    id: 'bovis-nodes', topicId: 'mikra-21', part: 'A',
    question: 'Infekce Mycobacterium bovis se po alimentárním přenosu může projevit zejména postižením kterých uzlin?',
    options: ['Krčních a mezenteriálních', 'Axilárních a inguinálních výhradně', 'Jen mediastinálních', 'Žádných lymfatických uzlin'], correct: 0,
    explanation: 'Alimentární infekce M. bovis může postihovat mezenteriální i krční mízní uzliny.', evidence: ['Test!A88/B88']
  }),
  createReportedMikraQuestion({
    id: 'enterobius-tape', topicId: 'mikra-36', part: 'B',
    question: 'Jaký materiál se odebírá pro průkaz vajíček Enterobius vermicularis?',
    options: ['Ranní otisk perianální oblasti lepící páskou', 'Hemokultura při horečce', 'Sputum do sterilní nádoby', 'Likvor do transportního média'], correct: 0,
    explanation: 'Samice roupu klade vajíčka perianálně, proto se provádí ranní otisk lepící páskou před hygienou a defekací.', evidence: ['Test!A99', 'Test!A219/B219', 'Vzpomínka po testu: Enterobius na lepící pásce'], media: MIKRA_REPORTED_MEDIA.enterobius
  }),
  createReportedMikraQuestion({
    id: 'trichomonas-identification', topicId: 'mikra-28', part: 'B',
    question: 'Který původce odpovídá zobrazenému pohyblivému bičíkovci z urogenitálního materiálu?',
    options: ['Trichomonas vaginalis', 'Giardia intestinalis', 'Entamoeba histolytica', 'Toxoplasma gondii'], correct: 0,
    explanation: 'Trichomonas vaginalis je urogenitální bičíkovec přenášený převážně pohlavním stykem.', evidence: ['Test!A19/B19', 'Test!A76', 'Test!A260/B260', 'Vzpomínka po testu: Trichomonas vaginalis'], media: MIKRA_REPORTED_MEDIA.trichomonas
  }),
  createReportedMikraQuestion({
    id: 'trichomonas-transmission', topicId: 'mikra-28', part: 'B',
    question: 'Jaký je hlavní způsob přenosu Trichomonas vaginalis?',
    options: ['Pohlavní styk', 'Fekálně-orální cesta', 'Klíštětem', 'Inhalací aerosolu'], correct: 0,
    explanation: 'T. vaginalis se přenáší téměř výhradně pohlavním stykem.', evidence: ['Test!A19/B19', 'Test!A260/B260']
  }),
  createReportedMikraQuestion({
    id: 'mic-dilution', topicId: 'mikra-29', part: 'A',
    question: 'Co stanovuje diluční metoda se sérií zkumavek s klesající koncentrací antibiotika?',
    options: ['Minimální inhibiční koncentraci (MIC)', 'Hemolytickou aktivitu bakterie', 'Počet leukocytů ve vzorku', 'Sérologický titr protilátek'], correct: 0,
    explanation: 'MIC je nejnižší koncentrace antimikrobiální látky, která za definovaných podmínek inhibuje viditelný růst bakterie.', evidence: ['Vzpomínka po testu: diluční metoda', 'Test!A79'], media: MIKRA_REPORTED_MEDIA.dilution
  }),
  createReportedMikraQuestion({
    id: 'streptococcus-pyogenes-hemolysis', topicId: 'mikra-14', part: 'A',
    question: 'Jaký typ hemolýzy je typický pro Streptococcus pyogenes na krevním agaru?',
    options: ['Úplná beta-hemolýza', 'Částečná alfa-hemolýza', 'Žádná gama-hemolýza', 'Dvojitá zóna hemolýzy'], correct: 0,
    explanation: 'S. pyogenes je beta-hemolytický streptokok, tedy kolem kolonií působí úplné projasnění agaru.', evidence: ['Test!I75', 'Vzpomínka po testu: S. pyogenes s beta-hemolýzou'], media: MIKRA_REPORTED_MEDIA.streptococci
  }),
  createReportedMikraQuestion({
    id: 'pneumococcus-optochin', topicId: 'mikra-15', part: 'A',
    question: 'Který nález pomáhá odlišit Streptococcus pneumoniae od viridujících streptokoků na krevním agaru?',
    options: ['Citlivost k optochinu se zónou inhibice', 'Růst na Sabouraudově agaru', 'Pozitivní oxidázová reakce', 'Tvorba endospor'], correct: 0,
    explanation: 'Pneumokok je typicky alfa-hemolytický a citlivý k optochinu; viridující streptokoky citlivé nebývají.', evidence: ['Vzpomínka po testu: S. pneumoniae – alfa hemolýza a zóna okolo disku']
  }),
  createReportedMikraQuestion({
    id: 'haemophilus-satellitism', topicId: 'mikra-10', part: 'A',
    question: 'Satelitní růst malých kolonií kolem Staphylococcus aureus na krevním agaru je charakteristický pro který rod?',
    options: ['Haemophilus', 'Salmonella', 'Clostridium', 'Mycobacterium'], correct: 0,
    explanation: 'Haemophilus influenzae může růst satelitně kolem S. aureus, který poskytuje V faktor (NAD).', evidence: ['Test!A83']
  }),
  createReportedMikraQuestion({
    id: 'wound-swab', topicId: 'mikra-37', part: 'A',
    question: 'Který odběr je pro kultivaci z povrchové hnisající rány obvykle nejvhodnější?',
    options: ['Stěr z vyčištěné spodiny rány do vhodného transportního média', 'Suchý tampon ponechaný na vzduchu do druhého dne', 'Nesrážlivá krev do EDTA', 'Moč do sterilní zkumavky'], correct: 0,
    explanation: 'Pro mikrobiologii rány se preferuje kvalitní stěr z vyčištěné spodiny do transportního média; povrchový zaschlý sekret je méně výtěžný.', evidence: ['Vzpomínka po testu: stěr z rány', 'Test!A162/B162'], media: MIKRA_REPORTED_MEDIA.woundSmear
  }),
  createReportedMikraQuestion({
    id: 'respiratory-smear', topicId: 'mikra-36', part: 'A',
    question: 'Materiál s převahou neutrofilů a drobnými koky v párech ve sputu nejlépe odpovídá odběru z kterého systému?',
    options: ['Dolní dýchací cesty', 'Močové cesty', 'Likvorový prostor', 'Krevní řečiště'], correct: 0,
    explanation: 'Sputum je materiál z dolních dýchacích cest; kvalita vzorku se posuzuje i podle buněčného obrazu.', evidence: ['Test!A82', 'Test!A112', 'Vzpomínka po testu: stěr z DC']
  }),
  createReportedMikraQuestion({
    id: 'amies', topicId: 'mikra-36', part: 'A',
    question: 'K čemu slouží odběrová souprava s Amiesovým transportním médiem?',
    options: ['K transportu výtěrů na bakteriologickou kultivaci', 'K odběru hemokultur', 'K dlouhodobému uchování likvoru', 'K měření virové nálože v plazmě'], correct: 0,
    explanation: 'Amiesovo médium chrání mikroorganismy ve výtěru během transportu do laboratoře.', evidence: ['Test!A54/B54', 'Test!A174/B174', 'Test!A221/B221']
  }),
  createReportedMikraQuestion({
    id: 'hemoculture-bottles', topicId: 'mikra-35', part: 'A',
    question: 'Do čeho se standardně odebírá krev pro hemokultivaci?',
    options: ['Do hemokultivačních lahviček', 'Do zkumavky s EDTA', 'Na suchý tampon', 'Do nádoby na sputum'], correct: 0,
    explanation: 'Hemokultura se odebírá asepticky přímo do připravených aerobních a anaerobních hemokultivačních lahviček.', evidence: ['Test!A12/B12', 'Test!A169/B169']
  }),
  createReportedMikraQuestion({
    id: 'endocarditis-sets', topicId: 'mikra-35', part: 'A',
    question: 'Kolik samostatných hemokulturních odběrů se obvykle provádí při podezření na infekční endokarditidu před zahájením antibiotik?',
    options: ['Tři sady', 'Jedna sada', 'Pětnáct kapilárních odběrů', 'Žádný odběr, pouze sérologie'], correct: 0,
    explanation: 'Pro diagnostiku infekční endokarditidy se standardně odebírají tři sady hemokultur z oddělených vpichů.', evidence: ['Test!A59/B59']
  }),
  createReportedMikraQuestion({
    id: 'likvor-container', topicId: 'mikra-39', part: 'A',
    question: 'Do jaké nádoby se odebírá likvor pro urgentní mikrobiologické vyšetření?',
    options: ['Do sterilní zkumavky bez transportního média', 'Do Amiesova výtěrového média', 'Do hemokultivační lahvičky jako jediného vzorku', 'Na sklíčko s lepící páskou'], correct: 0,
    explanation: 'Likvor se odebírá do sterilních zkumavek a rychle se transportuje do laboratoře.', evidence: ['Test!A139/B139']
  }),
  createReportedMikraQuestion({
    id: 'pcr-steps', topicId: 'mikra-13', part: 'B',
    question: 'Která posloupnost nejlépe popisuje polymerázovou řetězovou reakci?',
    options: ['Denaturace – nasednutí primerů – elongace', 'Fixace – Gramovo barvení – odečet', 'Inokulace – inkubace – hemolýza', 'Filtrace – centrifugace – aglutinace'], correct: 0,
    explanation: 'PCR cyklicky střídá denaturaci DNA, nasednutí primerů a syntézu nových vláken polymerázou.', evidence: ['Test!A257/B257']
  }),
  createReportedMikraQuestion({
    id: 'primers', topicId: 'mikra-13', part: 'B',
    question: 'Co jsou primery v PCR?',
    options: ['Krátké oligonukleotidy vymezující amplifikovaný úsek', 'Antibiotika blokující polymerázu', 'Barviva pro Gramovo barvení', 'Proteiny tvořící virový obal'], correct: 0,
    explanation: 'Primery jsou krátké nukleotidové sekvence, na které se váže polymeráza při zahájení syntézy.', evidence: ['Test!A69/B69', 'Test!A125/B125']
  }),
  createReportedMikraQuestion({
    id: 'sixteen-s-rrna', topicId: 'mikra-14', part: 'B',
    question: 'K čemu slouží sekvenace genu pro 16S rRNA?',
    options: ['K identifikaci a taxonomickému zařazení bakterie', 'K průkazu hemolýzy', 'K měření koncentrace antibiotika v séru', 'K průkazu virového antigenu'], correct: 0,
    explanation: 'Částečná sekvence genu pro 16S rRNA se porovnává s referenčními databázemi a pomáhá určit bakteriální druh.', evidence: ['Test!A61/B61', 'Test!A246/B246']
  }),
  createReportedMikraQuestion({
    id: 'influenza-antigens', topicId: 'mikra-3', part: 'B',
    question: 'Které dva povrchové antigeny se používají pro označení subtypů viru chřipky A?',
    options: ['Hemaglutinin a neuraminidáza', 'Kapsida a matrix protein', 'NS1 a NS2', 'DNA polymeráza a integráza'], correct: 0,
    explanation: 'Subtypy chřipky A se označují kombinací H (hemaglutinin) a N (neuraminidáza).', evidence: ['Test!A46/B46', 'Test!A134/B134']
  }),
  createReportedMikraQuestion({
    id: 'latent-virus', topicId: 'mikra-7', part: 'B',
    question: 'Co nejlépe popisuje latentní virovou infekci?',
    options: ['Virus perzistuje bez aktivní produkce nových virionů a může se reaktivovat', 'Virus se vždy rychle množí a je vyloučen do 24 hodin', 'Jde o infekci bez genomu viru v hostiteli', 'Jde výhradně o bakteriální biofilm'], correct: 0,
    explanation: 'V latenci virus v hostiteli přetrvává bez produktivní replikace, ale může se při vhodném podnětu reaktivovat.', evidence: ['Test!A30/B30', 'Test!A180/B180', 'Test!A226/B226']
  }),
  createReportedMikraQuestion({
    id: 'direct-virus-pcr', topicId: 'mikra-1', part: 'B',
    question: 'Která metoda patří mezi přímý průkaz virové infekce?',
    options: ['PCR průkaz virové nukleové kyseliny', 'Průkaz IgG v jednom séru', 'Stanovení ASLO', 'Kožní prick test'], correct: 0,
    explanation: 'PCR přímo prokazuje nukleovou kyselinu viru ve vzorku pacienta.', evidence: ['Test!A227/B227']
  }),
  createReportedMikraQuestion({
    id: 'hepatitis-a-route', topicId: 'mikra-10', part: 'B',
    question: 'Jaká je typická cesta přenosu hepatitidy A?',
    options: ['Fekálně-orální', 'Transplacentární jako hlavní cesta', 'Přes klíště', 'Výhradně parenterální'], correct: 0,
    explanation: 'Virus hepatitidy A se šíří fekálně-orální cestou, zejména kontaminovanou potravou, vodou či kontaktem.', evidence: ['Test!A18/B18', 'Test!A185/B185']
  }),
  createReportedMikraQuestion({
    id: 'hepatitis-b-route', topicId: 'mikra-10', part: 'B',
    question: 'Který způsob přenosu je typický pro hepatitidu B?',
    options: ['Sexuální a parenterální kontakt s krví či tělními tekutinami', 'Fekálně-orální cesta jako jediná', 'Přenos komárem', 'Inhalace aerosolu'], correct: 0,
    explanation: 'HBV se přenáší krví a dalšími tělními tekutinami, mimo jiné sexuálně a vertikálně.', evidence: ['Test!A186/B186']
  }),
  createReportedMikraQuestion({
    id: 'rs-virus-infants', topicId: 'mikra-4', part: 'B',
    question: 'Který respirační virus je významným původcem závažné bronchiolitidy u kojenců?',
    options: ['RSV', 'Norovirus', 'Virus hepatitidy A', 'Papilomavirus'], correct: 0,
    explanation: 'Respirační syncytiální virus je častou příčinou bronchiolitidy a pneumonie u malých dětí.', evidence: ['Test!A182/B182', 'Test!A229/B229']
  }),
  createReportedMikraQuestion({
    id: 'norovirus', topicId: 'mikra-5', part: 'B',
    question: 'Jaký klinický syndrom nejčastěji vyvolávají norovirus a sapovirus?',
    options: ['Akutní gastroenteritidu s průjmem a zvracením', 'Hnisavou meningitidu', 'Kožní mykózu', 'Hemolytickou anémii'], correct: 0,
    explanation: 'Norovirus i sapovirus jsou častými původci akutních virových gastroenteritid.', evidence: ['Test!A22/B22', 'Test!A232/B232']
  }),
  createReportedMikraQuestion({
    id: 'staph-aureus-mrsa', topicId: 'mikra-13', part: 'A',
    question: 'Co vyjadřuje zkratka MRSA?',
    options: ['Meticilin-rezistentní Staphylococcus aureus', 'Makrolid-rezistentní Streptococcus agalactiae', 'Multirezistentní rod Mycobacterium', 'Mikroskopicky rezistentní spirochéta'], correct: 0,
    explanation: 'MRSA je Staphylococcus aureus rezistentní k oxacilinu/metilicilinu a prakticky k většině beta-laktamových antibiotik.', evidence: ['Test!A53/B53']
  }),
  createReportedMikraQuestion({
    id: 'aslo', topicId: 'mikra-14', part: 'A',
    question: 'Co prokazuje vyšetření ASLO?',
    options: ['Protilátky proti streptolyzinu O', 'Antigen viru chřipky', 'Toxin Clostridium difficile', 'Rezistenci k vankomycinu'], correct: 0,
    explanation: 'ASLO je titr protilátek proti streptolyzinu O a pomáhá doložit recentní infekci Streptococcus pyogenes.', evidence: ['Test!A70/B70', 'Test!A126/B126']
  }),
  createReportedMikraQuestion({
    id: 'pvl', topicId: 'mikra-13', part: 'A',
    question: 'Jaký význam má Pantonův–Valentinův leukocidin u Staphylococcus aureus?',
    options: ['Poškozuje leukocyty a souvisí se závažnými infekcemi kůže a plic', 'Je nezbytný pro sporulaci', 'Zajišťuje beta-hemolýzu pneumokoka', 'Inaktivuje karbapenemy'], correct: 0,
    explanation: 'PVL je cytotoxin poškozující leukocyty a přispívá k patogenezi některých závažných stafylokokových infekcí.', evidence: ['Test!A196/B196']
  }),
  createReportedMikraQuestion({
    id: 'tuberculosis-therapy', topicId: 'mikra-21', part: 'A',
    question: 'Proč se v úvodní fázi léčby tuberkulózy kombinuje více antituberkulotik?',
    options: ['Snižuje se riziko vzniku rezistence a pokrývají se různé subpopulace bacilů', 'Aby se zabránilo růstu virů', 'Protože jedno léčivo nikdy nemá účinek', 'Pouze kvůli zbarvení sputa'], correct: 0,
    explanation: 'Kombinace léčiv omezuje selekci rezistentních mutant a zvyšuje účinnost proti různým metabolickým populacím mykobakterií.', evidence: ['Test!A36/B36', 'Test!A72/B72', 'Test!A128/B128']
  }),
  createReportedMikraQuestion({
    id: 'carbapenem-spectrum', topicId: 'mikra-29', part: 'A',
    question: 'Které tvrzení o karbapenemech je nejpřesnější?',
    options: ['Mají široké spektrum včetně mnoha G− bakterií a některé působí na Pseudomonas aeruginosa', 'Působí pouze na viry', 'Jsou určeny výhradně pro mykózy', 'Nemají účinek na bakterie s buněčnou stěnou'], correct: 0,
    explanation: 'Karbapenemy jsou širokospektrá beta-laktamová antibiotika; aktivita se liší mezi jednotlivými zástupci.', evidence: ['Test!A87/B87']
  }),
  createReportedMikraQuestion({
    id: 'penicillin-growth', topicId: 'mikra-27', part: 'A',
    question: 'Kdy je účinek penicilinů na bakterii nejvýraznější?',
    options: ['Během aktivního růstu a syntézy buněčné stěny', 'Pouze v dormantní fázi', 'Pouze po sporulaci', 'Při virové replikaci'], correct: 0,
    explanation: 'Beta-laktamy blokují syntézu peptidoglykanu, a proto nejlépe působí na aktivně rostoucí bakterie.', evidence: ['Test!A31/B31', 'Test!A188/B188']
  }),
  createReportedMikraQuestion({
    id: 'antibiotic-combination', topicId: 'mikra-27', part: 'A',
    question: 'Jaký je rozumný důvod kombinovat antibiotika u vybraných infekcí?',
    options: ['Synergie, rozšíření spektra a omezení vzniku rezistence', 'Zkrácení inkubační doby viru', 'Zvýšení tvorby spor', 'Nahrazení odběru kultivace'], correct: 0,
    explanation: 'Kombinace antibiotik může přinést synergii, širší empirické krytí nebo snížit pravděpodobnost vzniku rezistence.', evidence: ['Test!A187/B187']
  }),
  createReportedMikraQuestion({
    id: 'lipid-a', topicId: 'mikra-6', part: 'A',
    question: 'Která část lipopolysacharidu gramnegativních bakterií nese hlavní endotoxinovou aktivitu?',
    options: ['Lipid A', 'O-specifický polysacharid', 'Kapsula', 'Peptidoglykan'], correct: 0,
    explanation: 'Lipid A je biologicky aktivní endotoxinová složka LPS gramnegativních bakterií.', evidence: ['Test!A41/B41']
  }),
  createReportedMikraQuestion({
    id: 'vre', topicId: 'mikra-16', part: 'A',
    question: 'Co znamená zkratka VRE?',
    options: ['Vankomycin-rezistentní enterokok', 'Virus rezistentní k erythromycinu', 'Viridující respirační enterobakterie', 'Virový reaktivační enzym'], correct: 0,
    explanation: 'VRE označuje enterokoky s rezistencí k vankomycinu, nejčastěji Enterococcus faecium nebo E. faecalis.', evidence: ['Test!A43/B43']
  }),
  createReportedMikraQuestion({
    id: 'gonorrhoea', topicId: 'mikra-11', part: 'A',
    question: 'Který mikroorganismus je původcem kapavky?',
    options: ['Neisseria gonorrhoeae', 'Treponema pallidum', 'Chlamydia psittaci', 'Haemophilus ducreyi'], correct: 0,
    explanation: 'Kapavku vyvolává Neisseria gonorrhoeae, gramnegativní diplokok.', evidence: ['Test!A51/B51', 'Test!A244/B244']
  }),
  createReportedMikraQuestion({
    id: 'filariasis-loa-loa', topicId: 'mikra-38', part: 'B',
    question: 'Který parazit patří mezi filárie a může migrovat pod spojivkou oka?',
    options: ['Loa loa', 'Enterobius vermicularis', 'Taenia saginata', 'Giardia intestinalis'], correct: 0,
    explanation: 'Loa loa je tkáňová filárie přenášená ovády rodu Chrysops; dospělec může migrovat pod spojivkou.', evidence: ['Test!A3/B3', 'Test!A77/C77']
  }),
  createReportedMikraQuestion({
    id: 'naegleria', topicId: 'mikra-29', part: 'B',
    question: 'Který volně žijící prvok může po průniku nosem při koupání vyvolat fulminantní primární amébovou meningoencefalitidu?',
    options: ['Naegleria fowleri', 'Giardia intestinalis', 'Trichomonas vaginalis', 'Cryptosporidium parvum'], correct: 0,
    explanation: 'Naegleria fowleri může přes nosní sliznici proniknout do CNS a vyvolat rychle probíhající meningoencefalitidu.', evidence: ['Test!A28/B28']
  }),
  createReportedMikraQuestion({
    id: 'giardia-infective-stage', topicId: 'mikra-27', part: 'B',
    question: 'Které stadium Giardia intestinalis je infekční pro dalšího hostitele?',
    options: ['Cysta', 'Pouze trofozoit v krvi', 'Oocysta v komářím žaludku', 'Sporozoit v plazmodiu'], correct: 0,
    explanation: 'Cysty giardií jsou odolné ve vnějším prostředí a jsou infekční po vyloučení stolicí.', evidence: ['Test!A258/B258']
  }),
  createReportedMikraQuestion({
    id: 'leishmania-vector', topicId: 'mikra-26', part: 'B',
    question: 'Jaký vektor přenáší leishmanie?',
    options: ['Koutule rodu Phlebotomus', 'Klíště rodu Ixodes', 'Komár rodu Anopheles', 'Veš šatní'], correct: 0,
    explanation: 'Leishmanie přenášejí samičky koutulí rodu Phlebotomus.', evidence: ['Test!A141/B141', 'Test!A262/B262']
  }),
  createReportedMikraQuestion({
    id: 'malaria-smear', topicId: 'mikra-31', part: 'B',
    question: 'Které vyšetření se používá pro přímý mikroskopický průkaz malárie?',
    options: ['Tlustá kapka a krevní nátěr', 'Perianální otisk lepící páskou', 'Kultivace na Sabouraudově agaru', 'Výtěr do Amiesova média'], correct: 0,
    explanation: 'Tlustá kapka zvyšuje citlivost průkazu, krevní nátěr umožňuje druhovou diagnostiku a stanovení parazitémie.', evidence: ['Test!A218/B218']
  }),
  createReportedMikraQuestion({
    id: 'echinococcus-types', topicId: 'mikra-35', part: 'B',
    question: 'Který druh Echinococcus je typický pro alveolární, invazivně rostoucí echinokokózu?',
    options: ['Echinococcus multilocularis', 'Echinococcus granulosus', 'Taenia solium', 'Diphyllobothrium latum'], correct: 0,
    explanation: 'E. multilocularis vyvolává alveolární echinokokózu s infiltrativním růstem; E. granulosus tvoří cystickou formu.', evidence: ['Test!A68/B68']
  }),
  createReportedMikraQuestion({
    id: 'scabies-diagnosis', topicId: 'mikra-40', part: 'B',
    question: 'Jak se laboratorně prokazuje zákožka svrabová?',
    options: ['Mikroskopií seškrabu kůže z chodbičky', 'Hemokulturou', 'PCR z moči', 'Sérologií párových sér'], correct: 0,
    explanation: 'Svrab se prokazuje mikroskopickým průkazem zákožek, vajíček nebo scybaly ve seškrabu z kůže.', evidence: ['Test!A133/B133']
  }),
  createReportedMikraQuestion({
    id: 'dermatophytes', topicId: 'mikra-22', part: 'B',
    question: 'Jakou vlastnost mají dermatofyty?',
    options: ['Jsou keratinofilní a napadají kůži, vlasy či nehty', 'Jsou obligátně intracelulární viry', 'Tvoří endotoxin LPS', 'Rostou jen v hemokultuře'], correct: 0,
    explanation: 'Dermatofyty využívají keratin a vyvolávají povrchové mykózy kůže, vlasů a nehtů.', evidence: ['Test!A50/B50']
  }),
  createReportedMikraQuestion({
    id: 'tinea-sites', topicId: 'mikra-22', part: 'B',
    question: 'Které přiřazení dermatomykózy a lokalizace je správné?',
    options: ['Tinea cruris – třísla', 'Tinea pedis – trup', 'Tinea corporis – nehty', 'Tinea unguium – kštice'], correct: 0,
    explanation: 'Tinea cruris postihuje třísla, tinea pedis nohy, tinea corporis trup a tinea unguium nehty.', evidence: ['Test!A37/B37', 'Test!A142/B142', 'Test!A143/B143', 'Test!A144/B144']
  })
];
