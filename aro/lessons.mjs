// Ověřené tematické dodatky, nikoli úplné odpovědi všech dotčených otázek.
export const checkedAt = '2026-10-28';
export const lessons = {
  preop: {
    title: 'Předoperační testy: cíleně podle pacienta a výkonu',
    edition: 'NICE NG45 · 2016, ověřeno 2026',
    scope: 'Dospělí nad 16 let, elektivní operace. NG45 nezahrnuje těhotné, kardiochirurgii ani neurochirurgii. Dodatek nepokrývá celou předanestetickou přípravu ani ASA klasifikaci.',
    intro: 'Vyšetření objednávám tehdy, když může změnit perioperační postup. Rozhoduje rozsah výkonu, komorbidity a stav pacienta.',
    points: ['RTG hrudníku ani vyšetření moči proužkem se před elektivním výkonem neprovádějí rutinně.', 'Krevní obraz není automaticky potřeba u každé malé operace; u velkých a komplexních výkonů jej NICE doporučuje.', 'EKG a funkce ledvin se indikují podle typu výkonu, ASA a přidružených nemocí; samotná věková hranice ze skript nestačí.', 'Klidové echo není plošný screening. Zvažuje se při šelestu se srdečními příznaky nebo známkách srdečního selhání.'],
    change: 'Ve skriptech jsou plošná vyšetření a věkové hranice pro RTG. Nahraď je zdůvodněním konkrétní indikace; místní předoperační postup ověř zvlášť.',
    recall: 'Zdravý člověk před malým elektivním výkonem: proč neobjednat automaticky celý laboratorní a zobrazovací panel?',
    answer: 'Test má přinést informaci, která ovlivní péči. Zohledním výkon, anamnézu, fyzikální nález a doporučené indikace; „před operací vždy“ není dostatečné zdůvodnění.',
    sources: [{label:'NICE NG45 — doporučení, § 1.7–1.10 a tabulky',url:'https://www.nice.org.uk/guidance/ng45/chapter/recommendations'}]
  },
  bls: {
    title: 'BLS dospělých: poznat, zavolat, začít',
    edition: 'ERC 2025 · Adult Basic Life Support',
    scope: 'Základní algoritmus dospělých. Nejde o pediatrický ani novorozenecký algoritmus; definice smrti jsou samostatná část otázky A15.',
    intro: 'Nereagující člověk s nenormálním dýcháním může mít zástavu oběhu. Lapavé dechy nejsou normální dýchání.',
    points: ['Zajisti bezpečí, ověř reakci. Při nereagování ihned volej záchrannou službu; použij hlasitý odposlech. Současně s navázáním hovoru posuzuj dýchání.', 'Při nereagování a abnormálním dýchání zahaj KPR. Při nejistotě pomůže operátor.', 'Stlačuj dolní polovinu hrudní kosti frekvencí 100–120/min, do hloubky 5–6 cm. Uvolňuj hrudník a minimalizuj přerušení.', 'Pokud umíš ventilovat, použij poměr 30 : 2. Jinak prováděj nepřerušované komprese.', 'Co nejdříve připoj AED, postupuj podle pokynů a bezprostředně obnov komprese po výboji i při nedoporučeném výboji.'],
    change: 'ERC 2025 zdůrazňuje okamžité volání už při zjištění nereagování. Nezdržuj zahájení péče dlouhým diagnostikováním.',
    recall: 'Pacient nereaguje, občas hlasitě zalapá po dechu. Je to důvod KPR odložit?',
    answer: 'Ne. Lapání po dechu je abnormální dýchání a může provázet zástavu. Aktivuj pomoc, zahaj KPR a zajisti AED.',
    sources: [{label:'ERC 2025 — Adult BLS, algoritmus a concise guidelines',url:'https://www.erc.edu/media/wrhj5sye/gl2025-04-bls-e.pdf'}]
  },
  als: {
    title: 'ALS dospělých: defibrilovatelné a nedefibrilovatelné rytmy',
    edition: 'ERC 2025 · Adult Advanced Life Support',
    scope: 'Jádro algoritmu dospělé zástavy oběhu. Speciální situace a poresuscitační péče vyžadují vlastní kapitoly.',
    intro: 'Kvalitní KPR a časný výboj mají prioritu. Léky nenahrazují komprese ani defibrilaci.',
    points: ['VF a bezpulzová komorová tachykardie: defibrilace a okamžitě 2 minuty KPR. PEA a asystolie: KPR bez výboje.', 'Adrenalin 1 mg i.v./i.o.: u nedefibrilovatelného rytmu co nejdříve, u defibrilovatelného po třetím výboji. Dále po 3–5 minutách.', 'Amiodaron i.v./i.o. při VF/pVT: 300 mg po třetím a 150 mg po pátém výboji.', 'Přednostně i.v. vstup; pokud není rychle dosažen dvěma pokusy, zvaž i.o. Polohu tracheální rourky potvrď kontinuální kapnografií.', 'Hledej 4H a 4T: hypoxii, hypovolemii, metabolické/iontové poruchy, hypotermii; trombózu, tamponádu, tenzní pneumotorax a toxiny.'],
    change: 'Atropin nepatří do léčby asystolie/PEA. Endotracheální aplikaci nepřebírej jako cestu podání resuscitačních léků. Kalcium a bikarbonát nejsou rutinní.',
    recall: 'Proč se adrenalin u VF nepodává místo prvního výboje?',
    answer: 'Defibrilace řeší defibrilovatelný rytmus. Adrenalin je doplněk algoritmu, nikoli náhrada výboje.',
    sources: [{label:'ERC 2025 — Adult ALS, tabulka 1 a algoritmus',url:'https://www.erc.edu/media/vedoa2ga/gl2025-05-als-e.pdf'}]
  },
  ponv: {
    title: 'PONV: prevence je součást plánu anestezie',
    edition: '5. konsenzus · online 2025 / časopis 2026',
    scope: 'Základní principy PONV u dospělých z executive summary. Nepokrývá ostatní komplikace anestezie, dávky antiemetik ani propuštění z dospávacího pokoje.',
    intro: 'Odpověď vystav na čtyřech krocích: riziko, snížení základního rizika, multimodální profylaxe a záchranná léčba.',
    points: ['U dospělých s jakýmkoli rizikem PONV konsenzus doporučuje profylaxi dvěma intervencemi.', 'Riziko snižuj vhodnou volbou anestezie a analgezie; nespoléhej jen na přidávání antiemetik.', 'Při třech a více rizikových faktorech nejsou data pro automatické použití tří a více profylaktických intervencí dostatečná. Důraz je na snížení základního rizika.', 'Při PONV navzdory profylaxi vyber záchranné antiemetikum z jiné farmakologické třídy než podaná profylaxe.'],
    change: 'Nový konsenzus není jednoduchá tabulka „čím více rizik, tím více léků“. Rozlišuj prevenci, úpravu rizika a léčbu již vzniklých obtíží.',
    recall: 'Pacient zvrací i přes profylaxi. Jaký princip určuje výběr záchranné léčby?',
    answer: 'Zvolit jinou farmakologickou třídu než použitou profylaxi; konkrétní přípravek volit podle pacienta a kontraindikací.',
    sources: [{label:'Gan et al. — Fifth Consensus Guidelines, executive summary',url:'https://doi.org/10.1213/ANE.0000000000007816'},{label:'PubMed — publikační data a bibliografie',url:'https://pubmed.ncbi.nlm.nih.gov/41237407/'}]
  },
  sepsis: {
    title: 'Sepse: pravděpodobnost infekce a oběhový stav',
    edition: 'Surviving Sepsis Campaign · 2026',
    scope: 'Vybrané principy časného postupu u dospělých. Definice, kompletní orgánová podpora a konkrétní antibiotické režimy zbývají doplnit.',
    intro: 'Sepse je klinická diagnóza. Jeden biomarker ani samotné qSOFA ji spolehlivě nepotvrdí nebo nevyloučí.',
    points: ['Odeber hemokultury co nejdříve, ideálně před antibiotiky, a změř laktát. Odběry nesmějí významně zdržet antibiotickou léčbu. Léčbu a resuscitaci zahaj okamžitě.', 'Při septickém šoku nebo pravděpodobné/jisté sepsi podej antibiotika ihned, ideálně do hodiny. U možné sepse bez šoku proveď rychlé došetření; při trvajícím podezření antibiotika do 3 hodin.', 'Při sepsí navozené hypoperfuzi nebo šoku SSC podmíněně navrhuje alespoň 30 ml/kg krystaloidu během prvních 3 hodin. Zohledni pacienta a opakovaně posuzuj odpověď i přetížení.', 'Při přetrvávající hypotenzi přidej vazopresor; nestabilní šok může vyžadovat souběžné podání s tekutinou. Aktivně hledej zdroj vyžadující intervenci.'],
    change: 'SSC 2026 aktualizuje verzi 2021. „Antibiotika všem do hodiny“ bez rozlišení pravděpodobnosti infekce a šoku ztrácí důležitý kontext.',
    recall: 'Je objemový cíl pokyn k podání tekutin bez další kontroly?',
    answer: 'Ne. Jde o podmíněné doporučení s individualizací a průběžným hodnocením účinku i nežádoucích následků.',
    sources: [{label:'SCCM — SSC 2026, časná léčba a hemodynamika',url:'https://www.sccm.org/survivingsepsiscampaign/guidelines-and-resources/surviving-sepsis-campaign-adult-guidelines'}]
  }
};
