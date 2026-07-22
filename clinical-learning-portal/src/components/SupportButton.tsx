import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function SupportButton() {
  const { t } = useLanguage();

  return (
    <a
      href="https://revolut.me/v_kintrova"
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-semibold
                 bg-emerald-500/10 hover:bg-emerald-500/20 active:bg-emerald-500/25
                 border border-emerald-500/20 hover:border-emerald-400/50 active:border-emerald-400/70
                 text-emerald-400 hover:text-emerald-200 active:text-white
                 transition-all duration-300 ease-out hover:scale-[1.02]
                 shadow-[0_2px_10px_0_rgba(16,185,129,0.02)]
                 hover:shadow-[0_4px_20px_0_rgba(16,185,129,0.12)]
                 backdrop-blur-md cursor-pointer select-none"
      title="Support the author - Buy me a Monster!"
    >
      {/* Custom stylized Monster Energy-inspired claw SVG */}
      <svg
        className="w-4.5 h-4.5 text-emerald-400 group-hover:text-emerald-300 transition-colors shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M7 5c0.8 3.5 -0.4 10 0.8 14" />
        <path d="M12 2c1 4.5 -0.5 13 1 20" />
        <path d="M17 5c0.5 3 -0.5 9.5 0.8 14" />
      </svg>
      
      <span className="font-sans leading-tight">
        {t('supportText')}
      </span>
    </a>
  );
}
