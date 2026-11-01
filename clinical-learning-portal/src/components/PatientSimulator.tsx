import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, ChevronRight, LoaderCircle, MessageCircle, RotateCcw, Send, Shuffle } from 'lucide-react';
import type { Criterion, PatientCatalog, PatientEvaluation, PatientSession } from '../types/patient';
import { evaluatePatient, getPatientCatalog, readPatientProgress, savePatientProgress, sendPatientMessage, startPatient } from '../services/patient';

const difficultyNames: Record<string, string> = { '1': 'Základní', '2': 'Střední', '3': 'Pokročilá' };
const button = 'rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed';
const inputStyle = 'w-full rounded-xl border border-white/15 bg-slate-950/60 px-3 py-3 text-sm text-white outline-none focus:border-violet-400';

function Criteria({ items }: { items: Criterion[] }) {
  return <ul className="space-y-3">{items.map(item => <li key={item.id} className="rounded-xl border border-white/10 bg-white/[0.025] p-3">
    <div className="flex gap-2 text-sm"><span className={item.met ? 'text-emerald-300' : 'text-amber-200'}>{item.met ? '✓' : '○'}</span><span>{item.label}</span></div>
    {item.evidence && <p className="mt-2 text-xs leading-relaxed text-slate-400">{item.evidence.kind === 'question' ? `Otázka ${item.evidence.turn}` : item.evidence.kind === 'diagnosis' ? 'Vaše diagnóza' : `Vaše alternativa ${item.evidence.entry}`}: „{item.evidence.quote}“</p>}
    {!item.met && <p className="mt-1 text-xs text-amber-200/80">{item.evidence ? 'Formulace není mezi uznanými názvy.' : 'V rozhovoru nebo odevzdané rozvaze nezaznamenáno.'}</p>}
  </li>)}</ul>;
}

export default function PatientSimulator() {
  const [catalog, setCatalog] = useState<PatientCatalog | null>(null);
  const [specialty, setSpecialty] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [session, setSession] = useState<PatientSession | null>(null);
  const [turns, setTurns] = useState<{ question: string; answer: string }[]>([]);
  const [input, setInput] = useState('');
  const [stream, setStream] = useState('');
  const [busy, setBusy] = useState<'catalog' | 'start' | 'message' | 'evaluate' | null>('catalog');
  const [error, setError] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [diagnosis, setDiagnosis] = useState('');
  const [differentials, setDifferentials] = useState(['', '', '']);
  const [result, setResult] = useState<PatientEvaluation | null>(null);
  const [progress, setProgress] = useState(readPatientProgress);
  const [storageWarning, setStorageWarning] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const alive = useRef(true);

  const loadCatalog = async () => {
    setBusy('catalog'); setError(null);
    try { const data = await getPatientCatalog(); if (alive.current) setCatalog(data); }
    catch (cause) { if (alive.current) setError(cause instanceof Error ? cause.message : 'Seznam nelze načíst.'); }
    finally { if (alive.current) setBusy(null); }
  };
  useEffect(() => { alive.current = true; void loadCatalog(); return () => { alive.current = false; }; }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }, [turns.length, stream]);

  const start = async (random = false) => {
    setBusy('start'); setError(null);
    try {
      const next = await startPatient(random ? '' : specialty, random ? '' : difficulty, session?.case.id);
      if (!alive.current) return;
      setSession(next); setTurns([]); setInput(''); setStream(''); setResult(null);
      setDiagnosis(''); setDifferentials(['', '', '']); setFormOpen(false); setStorageWarning(false);
    } catch (cause) { if (alive.current) setError(cause instanceof Error ? cause.message : 'Případ se nepodařilo zahájit.'); }
    finally { if (alive.current) setBusy(null); }
  };
  const send = async (event: FormEvent) => {
    event.preventDefault();
    if (!session || busy || !input.trim() || result) return;
    const question = input.trim();
    setBusy('message'); setError(null); setStream('');
    try {
      const reply = await sendPatientMessage(session.token, question, text => { if (alive.current) setStream(text); });
      if (!alive.current) return;
      setTurns(old => [...old, { question, answer: reply.text }]);
      setSession(old => old && ({ ...old, token: reply.token, turnsRemaining: reply.turnsRemaining }));
      setInput('');
    } catch (cause) { if (alive.current) setError(cause instanceof Error ? cause.message : 'Otázku se nepodařilo odeslat.'); }
    finally { if (alive.current) { setBusy(null); setStream(''); } }
  };
  const evaluate = async (event: FormEvent) => {
    event.preventDefault();
    if (!session || busy || !diagnosis.trim()) return;
    setBusy('evaluate'); setError(null);
    try {
      const evaluation = await evaluatePatient(session.token, diagnosis.trim(), differentials.map(s => s.trim()).filter(Boolean));
      if (!alive.current) return;
      setResult(evaluation); setFormOpen(false);
      try { savePatientProgress(evaluation); setProgress(readPatientProgress()); } catch { setStorageWarning(true); }
    } catch (cause) { if (alive.current) setError(cause instanceof Error ? cause.message : 'Hodnocení není dostupné.'); }
    finally { if (alive.current) setBusy(null); }
  };

  return <section className="mx-auto flex max-w-5xl flex-col gap-5" lang="cs">
    <div className="glass-panel rounded-3xl p-5 sm:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div><p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-violet-300"><MessageCircle size={16} /> Český AI pacient</p><h2 className="mt-2 text-2xl font-bold text-white">Od první otázky ke klinické rozvaze</h2><p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">Odeberte anamnézu, formulujte pracovní diagnózu a porovnejte postup s připraveným rozborem. Pacient může citlivý údaj nejprve zlehčit nebo vynechat; pomůže konkrétní a neodsuzující doptání. Jeden rozhovor má nejvýše 24 otázek.</p></div>
        <span className="rounded-full bg-violet-400/10 px-3 py-1 text-xs text-violet-200">{catalog ? `${catalog.total} případů` : 'Načítám případy…'}</span>
      </div>
      {catalog?.preview && <p className="mt-4 rounded-xl border border-amber-400/20 bg-amber-400/5 p-3 text-xs leading-relaxed text-amber-100">Výukový náhled: české adaptace syntetických případů zatím čekají na odbornou revizi. Hodnocení slouží k procvičování.</p>}
      <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="text-xs text-slate-400">Obor<select aria-label="Obor" className={`${inputStyle} mt-1`} value={specialty} onChange={e => setSpecialty(e.target.value)} disabled={!!busy}><option value="">Všechny obory</option>{catalog?.specialties.map(s => <option key={s.id} value={s.id}>{s.label} ({s.count})</option>)}</select></label>
        <label className="text-xs text-slate-400">Obtížnost<select aria-label="Obtížnost" className={`${inputStyle} mt-1`} value={difficulty} onChange={e => setDifficulty(e.target.value)} disabled={!!busy}><option value="">Všechny obtížnosti</option>{['1', '2', '3'].map(id => <option key={id} value={id}>{difficultyNames[id]}</option>)}</select></label>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <button className={`${button} bg-violet-600 text-white hover:bg-violet-500`} disabled={!!busy || !catalog?.total} onClick={() => start()}>{busy === 'start' ? <LoaderCircle size={16} className="mr-2 inline animate-spin" /> : <RotateCcw size={16} className="mr-2 inline" />}{session ? 'Nový případ podle filtrů' : 'Zahájit rozhovor'}</button>
        <button className={`${button} border border-white/15 text-slate-200 hover:bg-white/5`} disabled={!!busy || !catalog?.total} onClick={() => start(true)}><Shuffle size={16} className="mr-2 inline" />Náhodný pacient</button>
        {!catalog && !busy && <button className={`${button} text-violet-200`} onClick={loadCatalog}>Znovu načíst seznam</button>}
      </div>
      {session && !result && <p className="mt-3 text-xs text-slate-500">Nový případ ukončí právě rozehraný rozhovor. Při odchodu z tohoto modulu se neodeslaný rozhovor neukládá.</p>}
      {catalog?.total === 0 && <p className="mt-4 text-sm text-slate-300">Připravované případy čekají na odborné schválení. Jakmile budou dostupné, objeví se zde.</p>}
    </div>
    {error && <div role="alert" className="flex gap-3 rounded-xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-100"><AlertCircle size={18} className="shrink-0" /><span>{error}</span></div>}
    {session && <div className="glass-panel overflow-hidden rounded-3xl">
      <div className="border-b border-white/10 p-5"><p className="text-xs text-violet-200">{catalog?.specialties.find(s => s.id === session.case.specialty)?.label} · {difficultyNames[session.case.difficulty]} · {session.case.age} let</p><h3 className="mt-1 text-lg font-bold text-white">{session.case.title}</h3><p className="mt-2 text-xs text-slate-400">Trénink anamnézy. Naměřené hodnoty a nové výsledky vyšetření nejsou v tomto režimu k dispozici.</p></div>
      <div className="max-h-[540px] space-y-4 overflow-y-auto p-4 sm:p-5" role="log" aria-label="Rozhovor s pacientem" aria-live="polite">
        <div className="max-w-[92%] rounded-2xl border border-violet-400/20 bg-violet-400/5 p-4 text-sm leading-relaxed"><p className="mb-1 text-xs font-semibold text-violet-300">Pacient</p>{session.case.opening}</div>
        {turns.map((turn, i) => <React.Fragment key={i}><div className="ml-auto max-w-[92%] whitespace-pre-wrap break-words rounded-2xl bg-blue-500/15 p-4 text-sm"><p className="mb-1 text-xs font-semibold text-blue-300">Vy · otázka {i + 1}</p>{turn.question}</div><div className="max-w-[92%] whitespace-pre-wrap rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm leading-relaxed"><p className="mb-1 text-xs font-semibold text-violet-300">Pacient</p>{turn.answer}</div></React.Fragment>)}
        {busy === 'message' && <div className="rounded-xl bg-white/5 p-4 text-sm whitespace-pre-wrap"><p className="mb-2 text-xs text-slate-400">Odesílám: {input}</p>{stream || <span className="inline-flex items-center gap-2"><LoaderCircle size={16} className="animate-spin" />Pacient odpovídá…</span>}</div>}
        <div ref={endRef} />
      </div>
      {!result && <div className="border-t border-white/10 p-4 sm:p-5">
        <form onSubmit={send} className="flex items-end gap-2"><label className="min-w-0 flex-1 text-xs text-slate-400">Vaše otázka<textarea aria-label="Vaše otázka" className={`${inputStyle} mt-1 resize-y`} rows={2} value={input} onChange={e => setInput(e.target.value)} maxLength={800} disabled={!!busy || session.turnsRemaining === 0} placeholder="Například: Kdy vaše obtíže začaly?" /></label><button className={`${button} bg-blue-600 py-3 text-white hover:bg-blue-500`} disabled={!!busy || !input.trim() || session.turnsRemaining === 0} type="submit" aria-label="Odeslat otázku"><Send size={18} /></button></form>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3"><p className="text-xs text-slate-500">Zbývá {session.turnsRemaining} otázek · relace platí 2 hodiny</p><button className={`${button} border border-violet-400/30 text-violet-200 hover:bg-violet-400/10`} disabled={!!busy || !turns.length} onClick={() => setFormOpen(v => !v)}>Ukončit rozhovor a vyhodnotit <ChevronRight size={16} className="inline" /></button></div>
      </div>}
    </div>}
    {formOpen && !result && <form onSubmit={evaluate} className="glass-panel rounded-3xl p-5 sm:p-7">
      <h3 className="text-lg font-bold text-white">Vaše klinická rozvaha</h3><p className="mt-2 text-sm text-slate-400">Uveďte stručný název pracovní diagnózy. Každou alternativu napište zvlášť. Po odevzdání se odhalí řešení.</p>
      <label className="mt-5 block text-sm text-slate-300">Hlavní diagnóza<input required aria-label="Hlavní diagnóza" className={`${inputStyle} mt-2`} maxLength={200} value={diagnosis} onChange={e => setDiagnosis(e.target.value)} disabled={!!busy} /></label>
      <fieldset className="mt-4 space-y-2"><legend className="mb-2 text-sm text-slate-300">Diferenciální diagnózy (až 3)</legend>{differentials.map((value, i) => <input key={i} className={inputStyle} aria-label={`Alternativa ${i + 1}`} placeholder={`Alternativa ${i + 1}`} value={value} maxLength={200} disabled={!!busy} onChange={e => setDifferentials(old => old.map((v, j) => i === j ? e.target.value : v))} />)}</fieldset>
      <button type="submit" className={`${button} mt-5 bg-violet-600 text-white hover:bg-violet-500`} disabled={!!busy || !diagnosis.trim()}>{busy === 'evaluate' && <LoaderCircle size={16} className="mr-2 inline animate-spin" />}Odevzdat a zobrazit rozbor</button>
    </form>}
    {result && <div className="glass-panel rounded-3xl p-5 sm:p-7" aria-label="Rozbor případu">
      <div className="flex flex-wrap items-center justify-between gap-3"><h3 className="flex items-center gap-2 text-xl font-bold text-white"><CheckCircle2 className="text-emerald-300" />Rozbor případu</h3><strong className="text-2xl text-violet-200">{result.score} / 100</strong></div>
      <div className="my-5 grid grid-cols-3 gap-2 text-center">{[['Anamnéza', result.breakdown.history, 50], ['Diagnóza', result.breakdown.diagnosis, 30], ['Alternativy', result.breakdown.differential, 20]].map(([label, value, max]) => <div key={label} className="rounded-xl bg-white/5 px-2 py-3"><p className="text-xs text-slate-400">{label}</p><p className="mt-1 font-semibold">{value} / {max}</p></div>)}</div>
      <p className="text-lg font-semibold text-white">{result.diagnosisCriterion.label}</p><p className="mt-2 text-sm leading-relaxed text-slate-300">{result.explanation}</p>
      <p className="mt-4 text-xs leading-relaxed text-slate-400">{result.scoringNote}</p>
      {(result.unmatched.diagnosis || result.unmatched.differentials.length > 0) && <p className="mt-3 rounded-xl bg-amber-400/5 p-3 text-sm text-amber-100">K porovnání s rubrikou: {[result.unmatched.diagnosis, ...result.unmatched.differentials].filter(Boolean).join('; ')}.</p>}
      {result.concealment && <div className={`mt-5 rounded-xl border p-4 ${result.concealment.uncovered ? 'border-emerald-400/25 bg-emerald-400/5' : 'border-amber-400/25 bg-amber-400/5'}`}>
        <h4 className="font-semibold text-white">Postupné odhalení citlivého údaje · {result.concealment.uncovered ? 'odkryto' : 'neodkryto'}</h4>
        <p className="mt-2 text-sm text-slate-300"><span className="text-slate-400">Okruh:</span> {result.concealment.label}</p>
        <p className="mt-1 text-sm text-slate-300"><span className="text-slate-400">Skutečný údaj:</span> {result.concealment.hiddenDetail}</p>
        <p className="mt-1 text-xs text-slate-400">Proč ho pacient chránil: {result.concealment.reason}</p>
        {result.concealment.guardedEvidence && <p className="mt-3 text-xs text-slate-400">První odpověď po otázce {result.concealment.guardedEvidence.turn}: „{result.concealment.guardedEvidence.answer}“</p>}
        {result.concealment.revealEvidence
          ? <p className="mt-1 text-xs text-emerald-200">Odhaleno po otázce {result.concealment.revealEvidence.turn}: „{result.concealment.revealEvidence.question}“</p>
          : <p className="mt-2 text-xs text-amber-100">V rozhovoru chybělo navazující konkrétní, bezpečné doptání. Citlivý okruh se započítá do anamnézy až po skutečném odhalení.</p>}
      </div>}
      <div className="mt-6 grid gap-6 md:grid-cols-2"><div><h4 className="mb-3 font-semibold text-white">Anamnéza a důkazy z rozhovoru</h4><Criteria items={result.historyCriteria} /></div><div><h4 className="mb-3 font-semibold text-white">Diagnostická rozvaha</h4><Criteria items={[result.diagnosisCriterion, ...result.differentialCriteria]} /></div></div>
      <h4 className="mb-2 mt-6 font-semibold text-white">Na co si dát pozor</h4><ul className="list-disc space-y-2 pl-5 text-sm text-slate-300">{result.mistakes.map(m => <li key={m}>{m}</li>)}</ul>
      <details className="mt-6 border-t border-white/10 pt-4 text-xs leading-relaxed text-slate-400"><summary className="cursor-pointer text-sm text-violet-200">Původ případu a zdroje</summary><p className="mt-3">{result.adaptation}</p><p className="mt-2"><a className="text-violet-300 underline" href={result.source.url} target="_blank" rel="noreferrer">Původní dataset</a> · {result.source.license} · revize {result.source.revision.slice(0, 7)} · verze případu {result.caseVersion}</p><p className="mt-2">Literatura převzatá z původního záznamu; metadata nebyla nezávisle odborně ověřena:</p><ul className="mt-2 space-y-2">{result.references.map(r => <li key={r.pmid}><a className="text-violet-300 underline" href={`https://pubmed.ncbi.nlm.nih.gov/${encodeURIComponent(r.pmid)}/`} target="_blank" rel="noreferrer">{r.title} ({r.year})</a></li>)}</ul></details>
      {storageWarning && <p role="status" className="mt-4 text-sm text-amber-200">Výsledek je zobrazený, ale prohlížeč nepovolil jeho uložení do pokroku.</p>}
    </div>}
    {progress.length > 0 && <details className="glass-panel rounded-2xl p-5"><summary className="cursor-pointer text-sm font-semibold text-slate-200">Můj pokrok · {progress.length} dokončených rozhovorů</summary><ul className="mt-4 space-y-3">{progress.slice(-5).reverse().map(item => <li key={item.sessionId} className="flex justify-between gap-4 text-sm"><span className="text-slate-300">{item.title}{item.preview && <span className="ml-2 text-xs text-amber-200">náhled</span>}</span><strong className="shrink-0 text-violet-200">{item.score} / 100</strong></li>)}</ul><p className="mt-3 text-xs text-slate-500">Uloženo pouze v tomto prohlížeči.</p></details>}
  </section>;
}
