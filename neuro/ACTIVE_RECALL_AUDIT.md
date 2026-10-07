# Audit kvízových otázek (Active Recall) – Neurologie

**Datum auditu:** 7. října 2026  
**Cílový soubor:** `neuro/data.js`  
**Rozsah auditu:** 67 modulů (25 Obecná neurologie + 42 Speciální neurologie), celkem **134 otázek** (2 otázky na modul)

---

## 1. Souhrnná statistika

| Metrika | Hodnota | Poznámka |
|---|---|---|
| **Celkem modulů** | 67 | 25 Obecná (O01–O25), 42 Speciální (S01–S42) |
| **Celkem kvízových otázek** | 134 | Přesně 2 otázky na každý modul |
| **Strukturální vady** | **0** | Všechny otázky mají 4 distraktory, platný `correctIndex` i `explanation` |
| **Kritické faktické chyby** | **0** | Žádná otázka neuvádí chybnou odpověď jako správnou |
| **Terminologické překlepy** | **2** | O06-Q2 (`demylinizace`), S18-Q2 (`nekompeticionální`) |
| **Tematická duplicita** | **1** | O11-Q2 a S18-Q1 (téměř identické otázky na MoCA test) |
| **Doporučení ke zpřesnění** | **2** | S03-Q2 (distraktor věku u trombolýzy), O11-Q2 (alternativa zaměřená na agnozii/apraxii) |

---

## 2. Podrobný přehled zjištěných nálezů a návrh oprav

### Nález 1: Typografický překlep v O06 (Q2)
* **Modul:** Obecná neurologie O06 (*Okohybné nervy, zornicové reakce*)
* **Otázka:** `q06-test2` – *„Bilateralní internukleární oftalmoplegie (INO) u mladého dospělého je vysoce suspektní z:“*
* **Aktuální stav (možnost 0):** `Roztroušené sklerózy (demylinizace FLM)`
* **Problém:** Chybějící písmeno „e“ ve slově *demyelinizace* (`demylinizace`). V textu vysvětlení je již správně uvedeno *demyelinizační*.
* **Navržená oprava:** Změnit text možnosti 0 na:  
  `"Roztroušené sklerózy (demyelinizace FLM)"`
* **Priorita:** Vysoká (oprava překlepu)

---

### Nález 2: Farmakologický neologismus v S18 (Q2)
* **Modul:** Speciální neurologie S18 (*Demence a Alzheimerova nemoc*)
* **Otázka:** `pq-S18-2` – *„Který mechanismus účinku má lék Memantin používaný v terapii středně těžké a těžké Alzheimerovy nemoci?“*
* **Aktuální stav (možnost 2):** `Nekompeticionální antagonismus NMDA glutamátových receptorů bránící excitotoxicitě`
* **Problém:** V češtině neexistuje termín *„nekompeticionální“* – správný odborný farmakologický termín je **nekompetitivní**. V textu vysvětlení je již správně: *„Memantin je středně afinitní nekompetitivní antagonista NMDA receptorů...“*.
* **Navržená oprava:** Změnit text možnosti 2 na:  
  `"Nekompetitivní antagonismus NMDA glutamátových receptorů bránící excitotoxicitě"`
* **Priorita:** Vysoká (odborná terminologie)

---

### Nález 3: Tematická duplicita O11 (Q2) ↔ S18 (Q1)
* **Otázka O11-Q2 (`q11-test2`):**  
  *„Který kognitivní test je nejcitlivější pro časný záchyt mírné kognitivní poruchy (MCI) a exekutivní dysfunkce?“*  
  Možnosti: `MoCA (Montreal Cognitive Assessment)`, `Glasgow Coma Scale`, `Barthel index`, `NIHSS`.
* **Otázka S18-Q1 (`pq-S18-1`):**  
  *„Který kognitivní test je výrazně citlivější než MMSE pro včasnou detekci mírné kognitivní poruchy (MCI) a exekutivních dysfunkcí?“*  
  Možnosti: `Glasgow Coma Scale`, `Montreal Cognitive Assessment (MoCA)`, `Barthelův index všedních činností`, `NIHSS skóre`.
* **Problém:** V obou modulech je testována téměř doslovně totožná otázka se shodnými distraktory (GCS, Barthel, NIHSS). V modulu O11 (*Poruchy kognitivních funkcí*) jsou přitom v teorii probírány také **Agnozie** a **Apraxie**, které v kvízu žádnou otázku nemají (obě otázky v O11 jsou na paměť a screening). V modulu S18 (*Alzheimerova nemoc*) zase chybí otázka na specifické likvorové či zobrazovací biomarkery Alzheimerovy nemoci.
* **Návrh řešení (varianta A – doporučeno):**  
  Ponechat otázku na screeningový MoCA test v O11 a v modulu **S18 (Q1)** nahradit otázku specializovanější otázkou na likvorové biomarkery Alzheimerovy nemoci:
  * **Nová otázka S18-Q1:**  
    *„Který typický nález v mozkomíšním moku svědčí pro diagnózu Alzheimerovy nemoci v rámci biomarkerového profilu A/T/N?“*
  * **Možnosti:**
    - `[0] Pokles amyloid-beta 42 (Aβ42) a vzestup fosforylovaného tau proteinu (p-tau)` *(správná)*
    - `[1] Zvýšení amyloid-beta 42 a normální hladina tau proteinu`
    - `[2] Izolovaná pozitivita 14-3-3 proteinu bez změn tau`
    - `[3] Masivní neutrofilní pleocytóza a laktát > 4 mmol/l`
  * **Vysvětlení:**  
    *„Pro Alzheimerovu nemoc je v likvoru typický pokles hladiny Aβ42 (v důsledku jeho ukládání do senilních plak v mozku) a současná elevace celkového tau (t-tau – marker neuronální degenerace) a fosforylovaného tau proteinu (p-tau – marker neurofibrilárních klubek).“*
* **Návrh řešení (varianta B):**  
  Ponechat S18-Q1 beze změny a upravit **O11-Q2** na téma apraxie/agnozie:
  * **Nová otázka O11-Q2:**  
    *„Neschopnost provést na výzvu předvedení účelného pohybu (např. ukázat, jak se čistí zuby nebo češou vlasy), přestože pacient nemá parézu, ataxii ani poruchu porozumění, označujeme jako:“*
  * **Možnosti:**
    - `[0] Ideomotorická apraxie` *(správná)*
    - `[1] Senzorická afázie`
    - `[2] Astereognozie`
    - `[3] Adiadochokineze`
* **Priorita:** Střední (odstranění redundance a rozšíření pokrytí témat)

---

### Nález 4: Distraktor věku u intravenózní trombolýzy v S03 (Q2)
* **Modul:** Speciální neurologie S03 (*Cévní mozkové příhody ischemické*)
* **Otázka:** `s03-test2` – *„Při akutní ischemické CMP je absolutní kontraindikací intravenózní trombolýzy:“*
* **Možnost 1 (distraktor):** `Věk nad 80 let`
* **Poznámka:** Dle aktuálních doporučení ESO/ČNS věk > 80 let **není** kontraindikací IVT (je to bezpečné a indikované). Jako nesprávná odpověď (distraktor) otázky „co je absolutní kontraindikací“ to formálně vyhovuje, ale může u studentů evokovat zastaralé pojetí, kdy se zvažovalo jako relativní limit.
* **Doporučení:** Distraktor je funkční a didakticky prověřuje, zda student ví, že věk > 80 let kontraindikací není. Doporučujeme pouze doplnit do vysvětlení výslovnou poznámku:  
  *„Pozn.: Věk nad 80 let není dle současných guidelines kontraindikací IVT.“*
* **Priorita:** Nízká / didaktické zpřesnění

---

## 3. Hodnocení dle 6 kritérií plánu

1. **Jednoznačné vymezení:**  
   Všech 134 otázek má jasné zadání bez zavádějících dvojznačností.
2. **Právě jedna správná odpověď:**  
   Všech 134 otázek má přesně jednu medicínsky i logicky správnou možnost, indexy `correctIndex` (0–3) 100% odpovídají.
3. **Opora ve studijním obsahu:**  
   Všechny otázky přímo vycházejí z textu a tématického zaměření příslušného modulu v `data.js`.
4. **Kvalita distraktorů:**  
   Distraktory jsou věrohodné, pocházejí z příbuzných neurologických syndromů či diagnóz a nedochází k triviálním absurditám.
5. **Kvalita vysvětlení (`explanation`):**  
   Vysvětlení jsou mimořádně kvalitní, přesně uvádějí patofyziologický a klinický mechanismus správné volby.
6. **Formulace a terminologie:**  
   Až na 2 drobné překlepy (`demylinizace` a `nekompeticionální`) je jazyk na vysoké odborné úrovni odpovídající pregraduální výuce neurologie na LF ČR.

---

## 4. Přehled modulů a otázek (kompletní audit 1–67)

| Modul | Název | Q1 Stav | Q2 Stav | Poznámka |
|---|---|---|---|---|
| **O01** | Centrální řízení motoriky, motorická kůra | OK | OK | |
| **O02** | Periferní nerv, nervosvalový přenos | OK | OK | |
| **O03** | Senzitivní systém, senzitivní kůra | OK | OK | |
| **O04** | Míšní syndromy | OK | OK | |
| **O05** | Mozkový kmen a diencephalon | OK | OK | |
| **O06** | Okohybné nervy, zornicové reakce | OK | **Nález 1** | Překlep: `demylinizace` → `demyelinizace` |
| **O07** | Přehled hlavových nervů, n. V | OK | OK | |
| **O08** | Přehled hlavových nervů, n. VII | OK | OK | |
| **O09** | Syndromy mozkových laloků | OK | OK | |
| **O10** | Poruchy řeči, afázie | OK | OK | |
| **O11** | Poruchy kognitivních funkcí | OK | **Nález 3** | Duplicita MoCA testu vůči S18-Q1 |
| **O12** | Poruchy vědomí | OK | OK | |
| **O13** | Likvor, jeho cirkulace, hydrocephalus | OK | OK | |
| **O14** | Nitrolební hypertenze a hypotenze | OK | OK | |
| **O15** | Meningeální syndrom | OK | OK | |
| **O16** | Vyšetření novorozenců a kojenců | OK | OK | |
| **O17** | Zobrazovací metody v neurologii | OK | OK | |
| **O18** | Základní principy EEG a EMG | OK | OK | |
| **O19** | Vyšetření mozkomíšního moku | OK | OK | |
| **O20** | Vyšetření stoje a chůze | OK | OK | |
| **O21** | Strategie neurologického vyšetření | OK | OK | |
| **O22** | Mozečkové funkce | OK | OK | |
| **O23** | Extrapyramidový systém | OK | OK | |
| **O24** | Pyramidová dráha | OK | OK | |
| **O25** | Šlachově-okosticové reflexy | OK | OK | |
| **S01** | Epilepsie, základní příznaky | OK | OK | |
| **S02** | Epilepsie v dětství a adolescenci | OK | OK | |
| **S03** | CMP ischemické | OK | **Nález 4** | Distraktor věku u trombolýzy |
| **S04** | Subdurální a epidurální krvácení | OK | OK | |
| **S05** | Subarachnoidální krvácení | OK | OK | |
| **S06** | Intraparenchymová krvácení | OK | OK | |
| **S07** | Cévní onemocnění míchy | OK | OK | |
| **S08** | Kraniocerebrální poranění (KCP) | OK | OK | |
| **S09** | Poranění míchy a páteře | OK | OK | |
| **S10** | Hemoragické CMP | OK | OK | |
| **S11** | Bakteriální infekce CNS | OK | OK | |
| **S12** | Virové infekce CNS | OK | OK | |
| **S13** | Nádory CNS – nitrolební | OK | OK | |
| **S14** | Nádory CNS – páteřní a míšní | OK | OK | |
| **S15** | Atypické a sekundární parkinsonismy | OK | OK | |
| **S16** | Parkinsonova nemoc | OK | OK | |
| **S17** | Onemocnění s choreatickým syndromem | OK | OK | |
| **S18** | Demence a Alzheimerova nemoc | **Nález 3** | **Nález 2** | Q1 duplicita s O11; Q2 `nekompeticionální` |
| **S19** | Bolesti hlavy – dif. dg. | OK | OK | |
| **S20** | Migréna | OK | OK | |
| **S21** | Vaskulární demence, DLB, FTD | OK | OK | |
| **S22** | Alkoholismus a nervový systém | OK | OK | |
| **S23** | Diabetes mellitus a nervový systém | OK | OK | |
| **S24** | Roztroušená skleróza (RS) | OK | OK | |
| **S25** | Nutriční a karenční postižení | OK | OK | |
| **S26** | Hydrocephalus a NPH | OK | OK | |
| **S27** | Mozková smrt | OK | OK | |
| **S28** | Syringomyelie a Syringobulbie | OK | OK | |
| **S29** | Hereditární spastická paraparéza | OK | OK | |
| **S30** | Onemocnění motoneuronu (ALS) | OK | OK | |
| **S31** | Vertebrogenní onemocnění C páteře | OK | OK | |
| **S32** | Vertebrogenní onemocnění Th páteře | OK | OK | |
| **S33** | Vertebrogenní onemocnění L páteře | OK | OK | |
| **S34** | Syndrom karpálního tunelu | OK | OK | |
| **S35** | Syndrom brachiálního plexu | OK | OK | |
| **S36** | Autonomní nervový systém | OK | OK | |
| **S37** | Polyneuropatie | OK | OK | |
| **S38** | Nervosvalový přenos (MG, LEMS) | OK | OK | |
| **S39** | Svalové dystrofie a myositidy | OK | OK | |
| **S40** | Dětská mozková obrna (DMO) | OK | OK | |
| **S41** | Polyradikuloneuritidy (GBS, CIDP) | OK | OK | |
| **S42** | Kraniocerebrální traumata (komoce, DAP) | OK | OK | |

---

## 5. Provedené opravy a závěrečná verifikace

Všechny schválené úpravy byly dne **7. října 2026** úspěšně implementovány přímo do `neuro/data.js`:

1. **O06 (Q2):** Opraven překlep `"Roztroušené sklerózy (demylinizace FLM)"` na `"Roztroušené sklerózy (demyelinizace FLM)"`.
2. **S18 (Q1):** Nahrazena duplicitní MoCA otázka novou otázkou zaměřenou na likvorové biomarkery Alzheimerovy nemoci (`Aβ42` a `p-tau`).
3. **S18 (Q2):** Opraven neologismus v možnostech z `"Nekompeticionální..."` na `"Nekompetitivní antagonismus NMDA glutamátových receptorů..."`.
4. **S03 (Q2):** Doplněno didaktické zpřesnění do vysvětlení (`explanation`), že věk > 80 let již dle současných guidelines ESO není kontraindikací IVT.
5. **S24 (Teorie):** Opraven překlep v teoretické části modulu S24 (`demylinizace krční míchy` → `demyelinizace krční míchy`).

### Výsledky finální automatické verifikace (`node neuro/audit_questions.js`):
* **Celkem kvízových otázek:** 134 / 134
* **Nesprávný počet možností (!= 4):** 0
* **Chybějící vysvětlení (`explanation`):** 0
* **Chybějící či neplatný `correctIndex`:** 0
* **Strukturální i obsahové chyby:** **0** (100% průchod)
