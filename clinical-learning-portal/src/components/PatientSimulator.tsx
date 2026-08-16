import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Activity, AlertCircle, HeartPulse, LoaderCircle, MessageCircle, RotateCcw, Send, Thermometer, Wind } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface VitalSigns {
  hr: string;
  bp: string;
  spo2: string;
  rr: string;
  temp: string;
  rhythm?: string;
}

interface ChatMessage {
  id: string;
  role: 'clinician' | 'patient';
  text: string;
}

interface ApiChatMessage {
  role: 'user' | 'model';
  text: string;
}

interface ScenarioResponse {
  title: string;
  presentation: string;
  background: string;
  vitals: VitalSigns;
}

const starterVitals: VitalSigns = {
  hr: '118', bp: '96/62', spo2: '91%', rr: '26', temp: '38.4', rhythm: 'Sinus tachycardia'
};

function parseSseChunk(chunk: string): string[] {
  return chunk.split('\n').flatMap(line => {
    if (!line.startsWith('data: ')) return [];
    try {
      const payload = JSON.parse(line.slice(6)) as { text?: string };
      return payload.text ? [payload.text] : [];
    } catch {
      return [];
    }
  });
}

export default function PatientSimulator() {
  const { language } = useLanguage();
  const [vitals, setVitals] = useState<VitalSigns>(starterVitals);
  const [caseTitle, setCaseTitle] = useState(language === 'cs' ? 'Akutní dušnost na urgentním příjmu' : 'Acute dyspnea in the emergency department');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const resetScenario = () => {
    setVitals(starterVitals);
    setCaseTitle(language === 'cs' ? 'Akutní dušnost na urgentním příjmu' : 'Acute dyspnea in the emergency department');
    setMessages([]);
    setInput('');
    setError(null);
  };

  const generateScenario = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      const response = await fetch('/api/gemini/generate-scenario', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          topic: language === 'cs' ? 'Akutní dušnost a podezření na sepsi' : 'Acute dyspnea with suspected sepsis',
          patientType: 'Adult', difficulty: 'Medium', language
        })
      });
      if (!response.ok) throw new Error((await response.json().catch(() => ({}))).error || 'Scenario generation failed.');
      const scenario = await response.json() as ScenarioResponse;
      setVitals(scenario.vitals);
      setCaseTitle(scenario.title);
      setMessages([{ id: crypto.randomUUID(), role: 'patient', text: `${scenario.presentation}\n\n${scenario.background}` }]);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Unable to generate a new scenario.');
    } finally {
      setIsGenerating(false);
    }
  };

  const submitMessage = async (event: FormEvent) => {
    event.preventDefault();
    const question = input.trim();
    if (!question || isLoading) return;

    const clinicianMessage: ChatMessage = { id: crypto.randomUUID(), role: 'clinician', text: question };
    const conversation: ApiChatMessage[] = [
      {
        role: 'user',
        text: `You are a simulated adult emergency patient in the scenario "${caseTitle}". Current vitals: HR ${vitals.hr}, BP ${vitals.bp}, SpO2 ${vitals.spo2}, RR ${vitals.rr}, temperature ${vitals.temp}, rhythm ${vitals.rhythm || 'not specified'}. Stay in role as the patient and reveal findings only when asked. Be concise, medically plausible, and respond in ${language === 'cs' ? 'Czech' : 'English'}.`
      },
      ...messages.map(message => ({ role: message.role === 'clinician' ? 'user' : 'model', text: message.text } as ApiChatMessage)),
      { role: 'user', text: question }
    ];

    setMessages(previous => [...previous, clinicianMessage]);
    setInput('');
    setError(null);
    setIsLoading(true);
    const assistantId = crypto.randomUUID();
    setMessages(previous => [...previous, { id: assistantId, role: 'patient', text: '' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: conversation, subject: 'general' })
      });
      if (!response.ok || !response.body) throw new Error((await response.json().catch(() => ({}))).error || 'The simulator did not return a response.');

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffered = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffered += decoder.decode(value, { stream: true });
        const lastNewline = buffered.lastIndexOf('\n');
        if (lastNewline === -1) continue;
        const complete = buffered.slice(0, lastNewline);
        buffered = buffered.slice(lastNewline + 1);
        const text = parseSseChunk(complete).join('');
        if (text) setMessages(previous => previous.map(message => message.id === assistantId ? { ...message, text: message.text + text } : message));
      }
      const remainder = parseSseChunk(buffered).join('');
      if (remainder) setMessages(previous => previous.map(message => message.id === assistantId ? { ...message, text: message.text + remainder } : message));
    } catch (cause) {
      setMessages(previous => previous.filter(message => message.id !== assistantId));
      setError(cause instanceof Error ? cause.message : 'Unable to contact the patient simulator.');
    } finally {
      setIsLoading(false);
    }
  };

  const vitalCards = [
    { label: 'HR', value: vitals.hr, icon: HeartPulse, tone: 'text-rose-300' },
    { label: 'BP', value: vitals.bp, icon: Activity, tone: 'text-blue-300' },
    { label: 'SpO₂', value: vitals.spo2, icon: Wind, tone: 'text-teal-300' },
    { label: 'RR', value: vitals.rr, icon: Wind, tone: 'text-amber-300' },
    { label: 'Temp', value: `${vitals.temp} °C`, icon: Thermometer, tone: 'text-orange-300' }
  ];

  return (
    <section className="flex flex-col gap-6">
      <div className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-violet-400/20 via-blue-900/10 to-transparent pointer-events-none" />
        <div className="relative flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-violet-300"><MessageCircle className="w-4 h-4" /> Live AI Patient Simulator</div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white">{caseTitle}</h2>
              <p className="mt-1 text-sm text-slate-400">{language === 'cs' ? 'Ptejte se pacienta, vyšetřujte a navrhujte léčbu v bezpečném tréninkovém scénáři.' : 'Question the patient, examine findings, and propose treatment in a safe training scenario.'}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={resetScenario} disabled={isLoading || isGenerating} className="glass-nav-btn rounded-lg px-3 py-2 text-xs font-bold text-slate-300 hover:text-white disabled:opacity-50"><RotateCcw className="w-4 h-4 inline mr-1.5" />Reset</button>
              <button onClick={generateScenario} disabled={isLoading || isGenerating} className="rounded-lg px-3 py-2 text-xs font-bold text-violet-100 bg-violet-500/20 border border-violet-400/30 hover:bg-violet-500/30 disabled:opacity-50"><LoaderCircle className={`w-4 h-4 inline mr-1.5 ${isGenerating ? 'animate-spin' : ''}`} />{isGenerating ? 'Loading' : 'New case'}</button>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {vitalCards.map(({ label, value, icon: Icon, tone }) => <div key={label} className="glass-card rounded-xl p-3"><div className={`flex items-center gap-1.5 text-[10px] font-bold tracking-widest ${tone}`}><Icon className="w-3.5 h-3.5" />{label}</div><div className="mt-1 text-lg font-mono font-bold text-white">{value}</div></div>)}
          </div>
          <div className="text-[11px] text-slate-400"><span className="font-bold text-slate-300">Rhythm:</span> {vitals.rhythm || 'Not specified'}</div>
        </div>
      </div>

      <div className="glass-panel rounded-3xl overflow-hidden min-h-[460px] flex flex-col">
        <div className="px-5 py-4 border-b border-white/10 flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-wider text-white">Clinical conversation</span><span className="text-[10px] font-bold uppercase tracking-widest text-teal-300">Simulation active</span></div>
        <div className="flex-1 p-5 space-y-4 overflow-y-auto custom-scrollbar max-h-[520px]">
          {messages.length === 0 && <div className="h-full min-h-64 flex items-center justify-center text-center"><div><MessageCircle className="mx-auto w-8 h-8 text-violet-300 mb-3" /><p className="font-semibold text-slate-200">{language === 'cs' ? 'Scénář je připraven.' : 'The scenario is ready.'}</p><p className="mt-1 text-xs text-slate-400">{language === 'cs' ? 'Začněte například: „Co vás přivádí?“ nebo navrhněte první intervenci.' : 'Start with “What brought you in?” or propose your first intervention.'}</p></div></div>}
          {messages.map(message => <div key={message.id} className={`flex ${message.role === 'clinician' ? 'justify-end' : 'justify-start'}`}><div className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${message.role === 'clinician' ? 'bg-blue-600/25 border border-blue-400/30 text-blue-50 rounded-br-sm' : 'glass-card text-slate-200 rounded-bl-sm'}`}><div className={`mb-1 text-[10px] font-bold uppercase tracking-wider ${message.role === 'clinician' ? 'text-blue-300' : 'text-violet-300'}`}>{message.role === 'clinician' ? 'Clinician' : 'Patient simulator'}</div>{message.text || <LoaderCircle className="w-4 h-4 animate-spin text-violet-300" />}</div></div>)}
          <div ref={messagesEndRef} />
        </div>
        {error && <div className="mx-5 mb-3 flex gap-2 rounded-lg border border-red-400/30 bg-red-500/10 px-3 py-2 text-xs text-red-200"><AlertCircle className="w-4 h-4 shrink-0" />{error}</div>}
        <form onSubmit={submitMessage} className="p-4 border-t border-white/10 flex gap-3"><input value={input} onChange={event => setInput(event.target.value)} disabled={isLoading || isGenerating} placeholder={language === 'cs' ? 'Zeptejte se nebo navrhněte léčbu…' : 'Ask a question or propose treatment…'} className="glass-input flex-1 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none disabled:opacity-50" /><button type="submit" disabled={!input.trim() || isLoading || isGenerating} className="rounded-xl bg-blue-600 px-4 text-white hover:bg-blue-500 disabled:opacity-50 transition-colors"><Send className="w-4 h-4" /></button></form>
      </div>
    </section>
  );
}
