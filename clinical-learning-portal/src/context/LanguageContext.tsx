import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'cs';

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

const TRANSLATIONS: Record<Language, Record<string, string>> = {
  en: {
    // Nav & Common
    homePortal: 'Home Portal',
    resuscitationArena: 'Resuscitation Arena',
    pharmacologyHub: 'Pharmacology Hub',
    apiHealthLabel: 'Gemini AI Engine:',
    online: 'ONLINE (Gemini 3.5)',
    localOnly: 'LOCAL ONLY',
    checking: 'Checking...',
    academicFooter: 'LF OU Clinical Study Guide Engine • Compliant with American Heart Association (AHA) ACLS Standards & American Society of Anesthesiologists (ASA) Pharmacological Practice Guidelines.',
    academicOnly: 'Academic Study Only',
    privacyAndTerms: 'Privacy and Terms',

    // Home Landing Page
    heroBadge: 'Clinical Educator Simulation Portal',
    heroTitle: 'High-Fidelity Medical Interactive Decision Engine',
    heroDesc: 'Bridge the gap between physiological theory and high-stress bedside execution. Practice interactive guidelines for emergency medicine and learn crucial anesthesia drug regimes.',
    masteredTracker: 'Pharmacology Tracker',
    masteredOf: 'of',
    masteredTitle: 'Mastered',
    guidelineCoverage: 'Guideline Coverage',
    guidelineList: 'AHA ACLS & Anaphylaxis',
    standardsVersion: 'Standards Version',
    standardsList: 'AHA 2026 / ASA Framework',
    
    // Modules Box
    emergencyTitle: 'Emergency Resuscitation Arena',
    emergencyDesc: 'Practice immediate guidelines-guided action pathways or spawn open-ended clinical crisis cases with real-time feedback.',
    emergencyIncluded: 'Included Simulation Features:',
    emergencyFeat1: 'AHA ACLS Cardiac Arrest Decision Trees',
    emergencyFeat2: 'Severe Systemic Anaphylaxis Branching Outcomes',
    emergencyFeat3: 'Dynamic AI Clinical Generator & Real-Time Evaluator',
    emergencyBtn: 'Enter Emergency Arena',

    pharmacologyTitle: 'Anesthesia Pharmacology Hub',
    pharmacologyDesc: 'Study dosages, onset thresholds, indications, and relative contraindications for anesthesia agents with custom trackers.',
    pharmacologyIncluded: 'Included Pharmacology Features:',
    pharmacologyFeat1: 'Interactive 3D Study Flashcards with Mastery Bookmarking',
    pharmacologyFeat2: 'Patient Profile Weight-Based Dose Calculation Tools',
    pharmacologyFeat3: 'Case-Based MCQ Examinations with Guideline Overviews',
    pharmacologyBtn: 'Enter Pharmacology Hub',

    ventilationHub: 'Ventilation (UPV)',
    ventilationTitle: 'Mechanical Ventilation (UPV)',
    ventilationDesc: 'Master mechanical ventilation physics, equations of motion, compliance, resistance, time constants, and bedside mechanics calculations.',
    ventilationIncluded: 'Included Ventilation Features:',
    ventilationFeat1: 'Equation of Motion & Lung Mechanics (Cstat, Cdyn, R)',
    ventilationFeat2: 'VCV, PCV, PSV Modes & ARDS Protective Protocols',
    ventilationFeat3: 'Bedside Respiratory Mechanics Calculator & Driving Pressure',
    ventilationBtn: 'Enter Ventilation Hub',
  },
  cs: {
    // Nav & Common
    homePortal: 'Domovský portál',
    resuscitationArena: 'Resuscitační aréna',
    pharmacologyHub: 'Farmakologický uzel',
    ventilationHub: 'Mechanická ventilace (UPV)',
    apiHealthLabel: 'Gemini AI Modul:',
    online: 'ONLINE (Gemini 3.5)',
    localOnly: 'LOKÁLNÍ REŽIM',
    checking: 'Ověřování...',
    academicFooter: 'LF OU Výukový portál klinických simulací • V souladu s doporučenými postupy American Heart Association (AHA) ACLS, ČSARIM a ČSIM.',
    academicOnly: 'Pouze pro akademické účely',
    privacyAndTerms: 'Soukromí a podmínky',

    // Home Landing Page
    heroBadge: 'Výukový klinický simulační portál',
    heroTitle: 'Interaktivní simulátor pro klinické rozhodování',
    heroDesc: 'Propojte teoretické znalosti s rychlým rozhodováním u lůžka pacienta v kritických stavech. Procvičujte doporučené postupy urgentní medicíny, anestetické režimy a mechanickou plicní ventilaci.',
    masteredTracker: 'Sledování farmakologie',
    masteredOf: 'z',
    masteredTitle: 'Zvládnuto',
    guidelineCoverage: 'Pokrytí doporučení',
    guidelineList: 'AHA ACLS, ASA & ČSARIM/ČSIM',
    standardsVersion: 'Aktuální standardy',
    standardsList: 'AHA 2026 / ASA / ČSARIM',
    
    // Modules Box
    emergencyTitle: 'Resuscitační aréna',
    emergencyDesc: 'Procvičujte záchranné algoritmy v reálném čase nebo generujte dynamické případy klinických krizí s okamžitým vyhodnocením.',
    emergencyIncluded: 'Simulační scénáře a funkce:',
    emergencyFeat1: 'AHA ACLS algoritmus u dospělých ("Cardiac Arrest")',
    emergencyFeat2: 'Těžká systémová anafylaxe s oběhovým selháním',
    emergencyFeat3: 'Dynamický AI generátor krizových stavů a vyhodnocení',
    emergencyBtn: 'Vstoupit do resuscitace',

    pharmacologyTitle: 'Anesteziologický uzel',
    pharmacologyDesc: 'Studujte doporučené dávkování, nástup účinku, indikace a relativní kontraindikace anesteziologických léčiv s interaktivním testováním.',
    pharmacologyIncluded: 'Farmakologické nástroje a moduly:',
    pharmacologyFeat1: 'Interaktivní studijní kartičky se sledováním úspěšnosti',
    pharmacologyFeat2: 'Hmotnostní kalkulátor "dose" pro konkrétního pacienta',
    pharmacologyFeat3: 'Kazuistické testy s podrobným odůvodněním',
    pharmacologyBtn: 'Vstoupit do farmakologie',

    ventilationTitle: 'Mechanická plicní ventilace (UPV)',
    ventilationDesc: 'Osvojte si fyzikální a patofyziologické principy UPV, ventilační režimy (VCV, PCV, PSV), PEEP a protektivní ventilaci u ARDS.',
    ventilationIncluded: 'Ventilační moduly a nástroje:',
    ventilationFeat1: 'Rovnice pohybu, poddajnost (Cstat) a odpor (R)',
    ventilationFeat2: 'Ventilační režimy, ARDSNet protokol a Driving Pressure',
    ventilationFeat3: 'Interaktivní kalkulátor mechaniky dýchání u lůžka',
    ventilationBtn: 'Vstoupit do modulu UPV',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('med_portal_lang');
    return (saved as Language) || 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('med_portal_lang', lang);
  };

  const t = (key: string): string => {
    return TRANSLATIONS[language][key] || TRANSLATIONS['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
