import React, { useEffect, useState } from 'react';
import { BookOpen, RotateCcw } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  ESSENTIALS_LESSONS,
  ESSENTIALS_SOURCES,
  ESSENTIALS_VERSION,
  parseEssentialsProgress,
  type EssentialsAnswers,
} from '../data/essentials';

const STORAGE_KEY = 'anesthesia_essentials_progress';

function lessonFromHash() {
  const id = window.location.hash.split('/')[1];
  return ESSENTIALS_LESSONS.find(lesson => lesson.id === id)?.id ?? ESSENTIALS_LESSONS[0].id;
}

function loadProgress(): { answers: EssentialsAnswers; error: boolean } {
  try {
    return { answers: parseEssentialsProgress(localStorage.getItem(STORAGE_KEY)), error: false };
  } catch (error) {
    console.error('Cannot load anesthesia essentials progress', error);
    return { answers: {}, error: true };
  }
}

export default function EssentialsModule() {
  const { language } = useLanguage();
  const cs = language === 'cs';
  const [lessonId, setLessonId] = useState(lessonFromHash);
  const [progress, setProgress] = useState(loadProgress);
  const lesson = ESSENTIALS_LESSONS.find(item => item.id === lessonId)!;
  const allCases = ESSENTIALS_LESSONS.flatMap(item => item.cases);
  const answered = allCases.filter(item => progress.answers[item.id] !== undefined).length;
  const correct = allCases.filter(item => progress.answers[item.id] === item.correctIndex).length;

  useEffect(() => {
    const update = () => setLessonId(lessonFromHash());
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  const saveAnswers = (answers: EssentialsAnswers) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: ESSENTIALS_VERSION, answers }));
      setProgress({ answers, error: false });
    } catch (error) {
      console.error('Cannot save anesthesia essentials progress', error);
      setProgress({ answers, error: true });
    }
  };

  const resetLesson = () => {
    const answers = { ...progress.answers };
    lesson.cases.forEach(item => delete answers[item.id]);
    saveAnswers(answers);
  };

  return (
    <div className="space-y-6">
      <header className="glass-panel rounded-2xl p-5 sm:p-8 space-y-4">
        <h2 className="text-2xl font-bold flex items-center gap-3">
          <BookOpen aria-hidden="true" className="shrink-0 text-teal-300" />
          {cs ? 'Praktické základy anesteziologie' : 'Practical anesthesia essentials'}
        </h2>
        <p className="text-slate-300">
          {cs
            ? 'Šest lekcí pro medika a začínajícího lékaře: vysvětlení, postup, rizika a kazuistiky se zdůvodněním. Odpovědi se ukládají na tomto zařízení, bez AI.'
            : 'Six lessons for students and new doctors: explanation, workflow, risks and cases with reasoning. Answers are saved on this device, without AI.'}
        </p>
        <p className="border-l-4 border-amber-400 pl-4 text-sm text-amber-100">
          {cs
            ? 'Výukový přehled pro dospělé, nikoli návod pro samostatné výkony nebo kompletní specializační příprava. V klinické praxi rozhoduje stav pacienta, dohled zkušeného lékaře a aktuální pracovištní protokol. Kurz nebyl ověřen podle Propofolks ani externě odborně schválen.'
            : 'An adult educational overview, not instructions for unsupervised procedures or a complete specialist curriculum. Clinical care requires patient-specific judgement, experienced supervision and current local protocols. This course has not been compared with Propofolks or externally clinically approved.'}
        </p>
        <p className="text-sm text-slate-300" role="status">
          {cs ? 'Zodpovězeno' : 'Answered'}: {answered}/{allCases.length}
          {' · '}{cs ? 'Správně na první pokus' : 'Correct on first attempt'}: {correct}/{answered}
          {' · '}{cs ? 'Verze obsahu' : 'Content version'}: {ESSENTIALS_VERSION}
        </p>
        <p className="text-xs text-slate-400">
          {cs ? 'Skóre popisuje jen tyto otázky, ne klinickou způsobilost. Opakování lekce její uložené odpovědi vymaže.'
            : 'The score describes these questions only, not clinical competence. Repeating a lesson clears its saved answers.'}
        </p>
        {progress.error && (
          <p role="alert" className="rounded-lg border border-red-400/40 p-3 text-red-200">
            {cs
              ? 'Pokrok se nepodařilo načíst nebo uložit (neplatná/starší data či nedostupné úložiště). Aktuální odpovědi zůstávají jen v otevřeném modulu. Další odpověď nebo opakování lekce se pokusí uložit nový pokrok.'
              : 'Progress could not be loaded or saved (invalid/older data or unavailable storage). Current answers remain in the open module only. Another answer or lesson reset will attempt to save new progress.'}
          </p>
        )}
      </header>

      <nav aria-label={cs ? 'Lekce praktické anesteziologie' : 'Anesthesia essentials lessons'} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {ESSENTIALS_LESSONS.map(item => {
          const count = item.cases.filter(entry => progress.answers[entry.id] !== undefined).length;
          return (
            <a
              key={item.id}
              href={`#essentials/${item.id}`}
              aria-current={lesson.id === item.id ? 'page' : undefined}
              className={`rounded-xl border p-4 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 ${
                lesson.id === item.id ? 'bg-teal-500/15 border-teal-400 text-teal-100' : 'bg-white/5 border-white/15 hover:bg-white/10'
              }`}
            >
              <span className="font-bold block">{item.title[language]}</span>
              <span className="text-xs">{count}/{item.cases.length} {cs ? 'zodpovězeno' : 'answered'}</span>
            </a>
          );
        })}
      </nav>

      <article className="glass-panel rounded-2xl p-5 sm:p-8 space-y-7" aria-labelledby="essentials-lesson-title">
        <div>
          <h3 id="essentials-lesson-title" className="text-xl font-bold text-teal-200">{lesson.title[language]}</h3>
          <p className="mt-2 text-slate-300">{lesson.goal[language]}</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {lesson.sections.map((section, index) => (
            <section key={`${lesson.id}-${index}`} className="space-y-2">
              <h4 className="font-bold text-white">{section.heading[language]}</h4>
              <p className="text-sm leading-7 text-slate-300 whitespace-pre-line">{section.body[language]}</p>
            </section>
          ))}
        </div>
        <section className="rounded-xl bg-teal-500/5 border border-teal-500/20 p-5">
          <h4 className="font-bold mb-3">{cs ? 'Postup v souvislostech' : 'Putting the workflow together'}</h4>
          <ol className="list-decimal pl-5 space-y-3 text-sm leading-6 text-slate-200">
            {lesson.steps.map((step, index) => <li key={index}>{step[language]}</li>)}
          </ol>
        </section>
        <p className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-4 text-sm leading-6 text-amber-100">
          <strong>{cs ? 'Pozor: ' : 'Caution: '}</strong>{lesson.pitfall[language]}
        </p>
        <aside>
          <h4 className="font-bold mb-2">{cs ? 'Odborné podklady — ověřte aktuální verzi' : 'References — check the current version'}</h4>
          <ul className="space-y-2 text-sm">
            {lesson.sources.map(id => (
              <li key={id}>
                <a className="text-blue-300 underline underline-offset-4 break-words" href={ESSENTIALS_SOURCES[id].url} target="_blank" rel="noopener noreferrer">
                  {ESSENTIALS_SOURCES[id].title}
                </a>
              </li>
            ))}
          </ul>
        </aside>
        <div className="flex flex-wrap gap-4 text-sm">
          <a className="text-teal-200 underline" href="/upv/">{cs ? 'Navázat: ventilátor, křivky a weaning' : 'Continue: ventilator, waveforms and weaning'}</a>
          <a className="text-teal-200 underline" href="#pharmacology">{cs ? 'Lékové profily a farmakologie' : 'Drug profiles and pharmacology'}</a>
          <a className="text-teal-200 underline" href="/urgentni-prijem/">{cs ? 'Kazuistiky urgentního příjmu' : 'Emergency department cases'}</a>
        </div>
      </article>

      <section aria-labelledby="essentials-cases-title" className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h3 id="essentials-cases-title" className="text-xl font-bold">{cs ? 'Kazuistiky: vyber a zdůvodni' : 'Cases: choose and explain'}</h3>
          <button type="button" onClick={resetLesson} className="flex items-center gap-2 border border-white/20 rounded-lg px-4 py-2 text-sm hover:bg-white/10">
            <RotateCcw className="w-4 h-4" aria-hidden="true" />{cs ? 'Opakovat tuto lekci' : 'Repeat this lesson'}
          </button>
        </div>
        {lesson.cases.map(item => {
          const chosen = progress.answers[item.id];
          const submitted = chosen !== undefined;
          return (
            <section key={item.id} data-case-id={item.id} className="glass-card rounded-xl p-5 space-y-4">
              <p className="text-slate-300 leading-7">{item.presentation[language]}</p>
              <fieldset disabled={submitted} className="space-y-3">
                <legend className="font-bold mb-3">{item.question[language]}</legend>
                {item.options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-pressed={chosen === index}
                    onClick={() => {
                      if (!submitted) saveAnswers({ ...progress.answers, [item.id]: index });
                    }}
                    className={`w-full text-left rounded-lg border px-4 py-3 text-sm leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-300 ${
                      submitted && index === item.correctIndex ? 'border-teal-400 bg-teal-500/10 text-teal-100'
                        : submitted && index === chosen ? 'border-red-400 bg-red-500/10 text-red-100'
                          : 'border-white/20 enabled:hover:bg-white/10'
                    }`}
                  >
                    <span className="font-bold mr-2">{String.fromCharCode(65 + index)}.</span>
                    {option[language]}
                    {submitted && index === chosen && <span className="ml-2 font-bold">({cs ? 'tvá odpověď' : 'your answer'})</span>}
                    {submitted && index === item.correctIndex && <span className="ml-2 font-bold">({cs ? 'správně' : 'correct'})</span>}
                  </button>
                ))}
              </fieldset>
              {submitted && (
                <div role="status" className="border-l-4 border-blue-400 pl-4 text-sm leading-7 text-slate-200">
                  <strong>{chosen === item.correctIndex ? (cs ? 'Správně. ' : 'Correct. ') : (cs ? 'K zopakování. ' : 'Review needed. ')}</strong>
                  {item.explanation[language]}
                </div>
              )}
            </section>
          );
        })}
      </section>
    </div>
  );
}
