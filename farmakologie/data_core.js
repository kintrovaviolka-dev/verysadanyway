// data_core.js - Základní databáze a mapování témat pro Farmakologii (46 otázek)
const RAW_QUESTIONS_PHARM = [
  "Lékové formy pro enterální podání",
  "Lékové formy pro parenterální podání",
  "Elektrolytové infúzní roztoky",
  "Přípravky ke korekci poruch iontové a acidobazické rovnováhy",
  "Infúzní roztoky cukrů, volumexpandéry",
  "Topické lékové formy pro užití v dermatologii a jejich terapeutické použití",
  "Lékové formy pro transdermální a slizniční aplikaci systémově působících látek a jejich terapeutické použití",
  "Lékové formy pro inhalační aplikaci a jejich terapeutické použití",
  "Oční, nosní a ušní topické lékové formy a jejich terapeutické použití",
  "Lékové formy k topické rektální a vaginální aplikaci a jejich terapeutické použití",
  "Absorpce léčiv, biologická dostupnost, faktory ovlivňující absorpci",
  "Distribuce léčiv, kompartmenty, vazba na plazmatické proteiny, faktory ovlivňující distribuci",
  "Metabolismus léčiv, metabolity, cytochrom P450, faktory ovlivňující metabolismus",
  "Eliminace léčiv, biologický poločas, faktory ovlivňující eliminaci",
  "Nespecifické a specifické účinky léčiv, základy receptové teorie",
  "Vztah léčiva a receptoru (atomismus atd.; selektivita a stereospecifita a jejich praktický význam)",
  "Typy receptorů, přenos signálu receptory",
  "Dávkování léčiv, typy dávek, terapeutická šíře a terapeutický index",
  "Terapeutické monitorování léčiv (TDM)",
  "Volba léků, změny farmakokinetiky a terapeutické riziko u starých lidí",
  "Volba léků, dávkování, zvláštnosti farmakokinetiky a terapeutické riziko u dětí",
  "Volba léků, změny farmakokinetiky a terapeutické riziko v graviditě a laktaci",
  "Názvy léčiv, hromadně vyráběné a individuálně připravované léčivé přípravky, označování léčiv",
  "Omamné a psychotropní látky, zásady předepisování a nakládání s OL a PL",
  "Základní právní předpisy o léčivech, lékopis, zdroje informací o lécích",
  "Závislost na tabáku",
  "Léková závislost, hlavní typy lékových závislostí a skupiny léků rizikové pro rozvoj závislosti",
  "Interakce léčiv ve fázi absorpce a distribuce",
  "Interakce léčiv ve fázi biotransformace a eliminace",
  "Lékové alergie, rizikové skupiny léků",
  "Typy nežádoucích účinků léčiv",
  "Vývoj a registrace nových léčiv, jednotlivé fáze hodnocení nových léčiv, hodnocení bioekvivalence",
  "CYP 3A4 a jeho význam pro farmakologii",
  "CYP 2D6 a jeho význam pro farmakologii",
  "CYP 1A2 a jeho význam pro farmakologii",
  "CYP 2C9, 2C19 a jejich význam pro farmakologii",
  "Význam TDM pro klinickou praxi",
  "Základní předpoklady pro TDM léčiv",
  "TDM digoxinu",
  "TDM vankomycinu",
  "TDM aminoglykosidů",
  "TDM teofylinu",
  "TDM antiepileptik",
  "TDM antidepresiv",
  "TDM antipsychotik",
  "Personalizovaná farmakoterapie"
];

function getPharmCategory(index) {
  // 1-indexed index (1 až 46)
  const idx = index + 1;
  if (idx <= 10 || idx === 23) {
    return "Lékové formy";
  } else if ((idx >= 11 && idx <= 14) || idx === 28 || idx === 29) {
    return "Farmakokinetika";
  } else if ((idx >= 15 && idx <= 18) || idx === 30 || idx === 31) {
    return "Farmakodynamika";
  } else if (idx === 19 || (idx >= 20 && idx <= 22) || (idx >= 37 && idx <= 45)) {
    return "TDM & Klinická";
  } else if (idx === 24 || idx === 25 || idx === 26 || idx === 27 || idx === 32) {
    return "Legislativa & Toxikologie";
  } else if ((idx >= 33 && idx <= 36) || idx === 46) {
    return "Farmakogenomika";
  }
  return "Obecná farmakologie";
}

function getPharmSystem(title) {
  const lower = title.toLowerCase();
  
  if (lower.includes("enteráln") || lower.includes("rektáln") || lower.includes("vagináln") || lower.includes("absorpce")) {
    return "Vstřebávání & GIT";
  }
  if (lower.includes("parenteráln") || lower.includes("infúz") || lower.includes("cukrů") || lower.includes("volumexpand")) {
    return "Injekce & Vnitřní prostředí";
  }
  if (lower.includes("dermatol") || lower.includes("topické") || lower.includes("transderm") || lower.includes("slizničn")) {
    return "Topická aplikace";
  }
  if (lower.includes("inhalač") || lower.includes("teofylin") || lower.includes("nosní") || lower.includes("nos, ucho")) {
    return "Respirační & Smysly";
  }
  if (lower.includes("cyp") || lower.includes("metabolismus") || lower.includes("biotransfor")) {
    return "Metabolismus léčiv";
  }
  if (lower.includes("eliminace") || lower.includes("poločas") || lower.includes("ledvin") || lower.includes("vankomycin") || lower.includes("aminoglyk")) {
    return "Vylučování & Ledviny";
  }
  if (lower.includes("receptor") || lower.includes("účinky") || lower.includes("stereospeci")) {
    return "Receptorová teorie";
  }
  if (lower.includes("dávkování") || lower.includes("dávek") || lower.includes("index") || lower.includes("tdm") || lower.includes("monitor")) {
    return "TDM & Dávkování";
  }
  if (lower.includes("starých") || lower.includes("dětí") || lower.includes("gravid") || lower.includes("laktac") || lower.includes("personaliz")) {
    return "Klinická farmakoterapie";
  }
  if (lower.includes("závislost") || lower.includes("tabák") || lower.includes("omamné") || lower.includes("psychotrop")) {
    return "Závislosti & Toxikologie";
  }
  if (lower.includes("právní") || lower.includes("lékopis") || lower.includes("vývoj") || lower.includes("registrace") || lower.includes("názvy")) {
    return "Legislativa & Výzkum";
  }
  if (lower.includes("interakce") || lower.includes("alergie") || lower.includes("nežádoucí")) {
    return "Interakce & Bezpečnost";
  }
  return "Obecné PK/PD";
}

function estimatePharmKeywords(title) {
  const system = getPharmSystem(title);
  const keywords = [system];
  const parts = title.split(/[-.,;:]/);
  if (parts[0] && parts[0].length < 35) keywords.push(parts[0].trim());
  if (parts[1] && parts[1].length < 35) keywords.push(parts[1].trim());
  keywords.push("Mechanismus", "Farmakoterapie");
  return [...new Set(keywords)].slice(0, 5);
}

function buildPharmDatabase() {
  const list = [];
  RAW_QUESTIONS_PHARM.forEach((q, idx) => {
    list.push({
      id: `pharm-${idx + 1}`,
      category: getPharmCategory(idx),
      title: q.trim(),
      organSystem: getPharmSystem(q),
      keyTerms: estimatePharmKeywords(q),
      chapter: "obecna",
      notOnExam: ![11, 12, 13, 14, 17, 18, 20, 21, 28, 32, 33, 34, 35, 36, 41, 43].includes(idx + 1)
    });
  });
  return list;
}

function parseMedicalMarkdown(text) {
  if (!text) return "";
  
  // 1. Fix the alert/bell character anomaly \u0007lpha -> α and other Unicode controls
  let res = text.replace(/\u0007lpha/g, "α")
                .replace(/\u0007/g, "");
                
  // 2. Map LaTeX/Greek/Math backslash escape sequences
  const symbolMap = {
    '\\\\alpha': 'α',
    '\\\\beta': 'β',
    '\\\\gamma': 'γ',
    '\\\\delta': 'δ',
    '\\\\epsilon': 'ε',
    '\\\\zeta': 'ζ',
    '\\\\eta': 'η',
    '\\\\theta': 'θ',
    '\\\\iota': 'ι',
    '\\\\kappa': 'κ',
    '\\\\lambda': 'λ',
    '\\\\mu': 'μ',
    '\\\\nu': 'ν',
    '\\\\xi': 'ξ',
    '\\\\omicron': 'ο',
    '\\\\pi': 'π',
    '\\\\rho': 'ρ',
    '\\\\sigma': 'σ',
    '\\\\tau': 'τ',
    '\\\\upsilon': 'υ',
    '\\\\phi': 'φ',
    '\\\\chi': 'χ',
    '\\\\psi': 'ψ',
    '\\\\omega': 'ω',
    '\\\\Delta': 'Δ',
    '\\\\Sigma': 'Σ',
    '\\\\Omega': 'Ω',
    '\\\\cdot': '·',
    '\\\\approx': '≈',
    '\\\\le': '≤',
    '\\\\ge': '≥',
    '\\\\pm': '±',
    '\\\\neq': '≠',
    '\\\\infty': '∞',
    '\\\\rightarrow': '→',
    '\\\\leftarrow': '←',
    '\\\\%': '%'
  };
  
  for (const [key, value] of Object.entries(symbolMap)) {
    const regex = new RegExp(key, 'g');
    res = res.replace(regex, value);
  }
  
  // Handlers for single backslash occurrences (just in case)
  res = res.replace(/\\alpha/g, 'α')
           .replace(/\\beta/g, 'β')
           .replace(/\\gamma/g, 'γ')
           .replace(/\\delta/g, 'δ')
           .replace(/\\mu/g, 'μ')
           .replace(/\\kappa/g, 'κ')
           .replace(/\\tau/g, 'τ')
           .replace(/\\Delta/g, 'Δ')
           .replace(/\\cdot/g, '·')
           .replace(/\\approx/g, '≈')
           .replace(/\\le/g, '≤')
           .replace(/\\ge/g, '≥');

  // 3. Bold (**text**)
  res = res.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // 4. Italic (*text*)
  res = res.replace(/\*(.*?)\*/g, '<em>$1</em>');
  
  // 5. Simple math expression parser for $...$
  res = res.replace(/\$(.*?)\$/g, (match, formula) => {
    let f = formula;
    f = f.replace(/_\{?([a-zA-Z0-9,+-]+)\}?/g, '<sub>$1</sub>');
    f = f.replace(/\^\{?([a-zA-Z0-9,+-]+)\}?/g, '<sup>$1</sup>');
    return `<span class="math-style">${f}</span>`;
  });
  
  return res;
}

window.parseMedicalMarkdown = parseMedicalMarkdown;
window.COMPLETE_QUESTIONS = buildPharmDatabase();
