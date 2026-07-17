import React from "react";
import { Activity, ShieldAlert, Heart, Clock, Award } from "lucide-react";

interface WelcomeScreenProps {
  onStartGame: (difficulty: string) => void;
  loading: boolean;
  onLaunchEkgQuiz: () => void;
}

export default function WelcomeScreen({ onStartGame, loading, onLaunchEkgQuiz }: WelcomeScreenProps) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-[#1d2027] rounded-2xl border border-[#424754] shadow-2xl space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center justify-center p-4 bg-[#4d8eff]/10 rounded-full border border-[#4d8eff]/20">
          <Activity className="w-12 h-12 text-[#adc6ff] animate-pulse" />
        </div>
        <h1 className="text-4xl font-extrabold text-[#adc6ff] tracking-tight">
          Urgentní příjem
        </h1>
        <p className="text-lg text-[#c2c6d6] max-w-2xl mx-auto">
          Pokročilý klinický trenažér a simulátor rozhodování v reálném čase. Otestujte své diagnostické schopnosti, rychlost a dodržování standardů **ČLS JEP**.
        </p>
        <div className="pt-3 flex justify-center">
          <button
            onClick={onLaunchEkgQuiz}
            className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-500 hover:brightness-110 text-white font-extrabold rounded-xl shadow-lg hover:shadow-teal-500/20 active:scale-95 transition-all text-xs flex items-center gap-2 cursor-pointer uppercase tracking-wider font-mono border border-emerald-400/20"
          >
            <Activity className="w-4 h-4 animate-pulse" />
            Spustit EKG Kvíz & Trenažér rytmů
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-5 bg-[#191b23] rounded-xl border border-[#424754]/40 space-y-3">
          <h2 className="text-lg font-bold text-[#e1e2ec] flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-red-400" />
            Pravidla klinické přesnosti
          </h2>
          <ul className="space-y-2.5 text-sm text-[#c2c6d6] list-disc list-inside">
            <li>
              <span className="font-semibold text-white">Buďte konkrétní:</span> Obecné příkazy jako <span className="italic text-[#adc6ff]">"odběry"</span> nebo <span className="italic text-[#adc6ff]">"dám léky"</span> nebudou uznány. Musíte přesně specifikovat lék, dávku a způsob podání (např. <span className="font-mono text-xs text-[#adc6ff] bg-[#0b0e15] px-1 py-0.5 rounded">Anopyrin 400mg p.o.</span>).
            </li>
            <li>
              <span className="font-semibold text-white">Řiďte se standardy:</span> Každé opomenutí klíčového léku či zbytečné zdržení (např. posílání nestabilního pacienta na CT) se negativně odrazí ve vitálních funkcích a závěrečném hodnocení.
            </li>
            <li>
              <span className="font-semibold text-white">Konziliární vyšetření:</span> Specialisté (Kardiolog, ARO, Chirurg) s vámi komunikují na základě reálného klinického stavu. Pokud jim zavoláte bez EKG či laboratorních výsledků, odmítnou s vámi spolupracovat.
            </li>
          </ul>
        </div>

        <div className="p-5 bg-[#191b23] rounded-xl border border-[#424754]/40 space-y-3">
          <h2 className="text-lg font-bold text-[#e1e2ec] flex items-center gap-2">
            <Award className="w-5 h-5 text-[#adc6ff]" />
            Vyhodnocovací modul
          </h2>
          <p className="text-sm text-[#c2c6d6] leading-relaxed">
            Na konci případu po stanovení definitivní dispozice a sepsání **epikrízy** provede atestační komise složená z primářů urgentních příjmů přísný debriefing pokrývající:
          </p>
          <div className="grid grid-cols-2 gap-3 text-xs text-[#c2c6d6]">
            <div className="flex items-center gap-2 bg-[#1d2027] p-2 rounded border border-[#424754]/30">
              <Heart className="w-4 h-4 text-green-400 shrink-0" />
              <span>Správnost diagnózy</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1d2027] p-2 rounded border border-[#424754]/30">
              <ShieldAlert className="w-4 h-4 text-orange-400 shrink-0" />
              <span>Terapeutický postup</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1d2027] p-2 rounded border border-[#424754]/30">
              <Clock className="w-4 h-4 text-[#adc6ff] shrink-0" />
              <span>Efektivita a čas</span>
            </div>
            <div className="flex items-center gap-2 bg-[#1d2027] p-2 rounded border border-[#424754]/30">
              <Activity className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Konzultace & Komunikace</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-center font-bold text-sm text-[#c2c6d6] uppercase tracking-wider">
          Zvolte klinický scénář pro spuštění trenažéru
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Úroveň 1 */}
          <div className="space-y-4 bg-[#191b23]/50 p-4 rounded-xl border border-[#424754]/30">
            <div className="pb-2 border-b border-[#424754]/40">
              <span className="text-xs font-bold uppercase tracking-wider text-green-400">Úroveň 1 • Snadná</span>
              <h4 className="text-sm font-bold text-[#e1e2ec]">Jasné klinické vzorce</h4>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => onStartGame("1")}
                disabled={loading}
                className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-green-500/20 hover:border-green-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#adc6ff]">František Novák (45 let)</span>
                  <span className="text-[10px] bg-green-500/10 text-green-400 px-1.5 py-0.5 rounded border border-green-500/20">Kardiologie</span>
                </div>
                <p className="text-xs text-[#e1e2ec] font-medium">Akutní infarkt myokardu spodní stěny</p>
                <p className="text-[11px] text-[#c2c6d6] leading-relaxed">Typické STEMI s bolestí na hrudi a dušností. Rychlý EKG průkaz.</p>
              </button>

              <button
                onClick={() => onStartGame("4")}
                disabled={loading}
                className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-green-500/20 hover:border-green-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#adc6ff]">Tobiášek Veselý (3 roky) 👶</span>
                  <span className="text-[10px] bg-sky-500/10 text-sky-400 px-1.5 py-0.5 rounded border border-sky-500/20">Pediatrie</span>
                </div>
                <p className="text-xs text-[#e1e2ec] font-medium">Akutní subglotická laryngitida (Croup)</p>
                <p className="text-[11px] text-[#c2c6d6] leading-relaxed">Noční štěkavý kašel, stridor a zatahování jugula. Klíčový je klid a kortikoidy.</p>
              </button>
            </div>
          </div>

          {/* Úroveň 2 */}
          <div className="space-y-4 bg-[#191b23]/50 p-4 rounded-xl border border-[#424754]/30">
            <div className="pb-2 border-b border-[#424754]/40">
              <span className="text-xs font-bold uppercase tracking-wider text-orange-400">Úroveň 2 • Střední</span>
              <h4 className="text-sm font-bold text-[#e1e2ec]">Netypické či komplikované stavy</h4>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => onStartGame("2")}
                disabled={loading}
                className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-orange-500/20 hover:border-orange-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#adc6ff]">Alena Dvořáková (62 let)</span>
                  <span className="text-[10px] bg-orange-500/10 text-orange-400 px-1.5 py-0.5 rounded border border-orange-500/20">Pneumologie</span>
                </div>
                <p className="text-xs text-[#e1e2ec] font-medium">Atypická plicní embolie</p>
                <p className="text-[11px] text-[#c2c6d6] leading-relaxed">Kolaps po delším letu, těžká synkopa. Pozor na alergii na jódovou kontrastní látku!</p>
              </button>

              <button
                onClick={() => onStartGame("6")}
                disabled={loading}
                className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-orange-500/20 hover:border-orange-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#adc6ff]">Jakub Král (28 let)</span>
                  <span className="text-[10px] bg-red-500/10 text-red-400 px-1.5 py-0.5 rounded border border-red-500/20">Alergologie</span>
                </div>
                <p className="text-xs text-[#e1e2ec] font-medium">Anafylaktický šok</p>
                <p className="text-[11px] text-[#c2c6d6] leading-relaxed">Rychlá hypotenze, otok dýchacích cest a stridor po bodnutí vosou. Adrenalin STATIM.</p>
              </button>

              <button
                onClick={() => onStartGame("7")}
                disabled={loading}
                className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-yellow-500/20 hover:border-yellow-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#adc6ff]">Hana Součková (39 let)</span>
                  <span className="text-[10px] bg-yellow-500/10 text-yellow-400 px-1.5 py-0.5 rounded border border-yellow-500/20">Chirurgie</span>
                </div>
                <p className="text-xs text-[#e1e2ec] font-medium">Akutní biliární pankreatitida</p>
                <p className="text-[11px] text-[#c2c6d6] leading-relaxed">Krutá pásovitá bolest břicha po oslavě. Pozor na alergii na jód při CT!</p>
              </button>
            </div>
          </div>

          {/* Úroveň 3 */}
          <div className="space-y-4 bg-[#191b23]/50 p-4 rounded-xl border border-[#424754]/30">
            <div className="pb-2 border-b border-[#424754]/40">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400">Úroveň 3 • Kritická</span>
              <h4 className="text-sm font-bold text-[#e1e2ec]">Multidisciplinární šokové stavy</h4>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={() => onStartGame("3")}
                disabled={loading}
                className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-red-500/20 hover:border-red-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#adc6ff]">Jan Pavelka (25 let)</span>
                  <span className="text-[10px] bg-red-600/10 text-red-500 px-1.5 py-0.5 rounded border border-red-500/20">Traumatologie</span>
                </div>
                <p className="text-xs text-[#e1e2ec] font-medium">Masivní polytrauma, hemoragický šok</p>
                <p className="text-[11px] text-[#c2c6d6] leading-relaxed">Zlomenina pánve, hemotorax, GCS 9. Vyžaduje bezprostřední zajištění dýchacích cest a krevní převody.</p>
              </button>

              <button
                onClick={() => onStartGame("5")}
                disabled={loading}
                className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-red-500/20 hover:border-red-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#adc6ff]">Eliška Novotná (8 let) 👶</span>
                  <span className="text-[10px] bg-purple-500/10 text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/20">Infektologie</span>
                </div>
                <p className="text-xs text-[#e1e2ec] font-medium">Meningokoková sepse a meningitida</p>
                <p className="text-[11px] text-[#c2c6d6] leading-relaxed">Fulminantní stav s horečkou, zvracením a petechiemi. Okamžité podání antibiotik STATIM zachrání život.</p>
              </button>

              <button
                onClick={() => onStartGame("8")}
                disabled={loading}
                className="w-full text-left p-4 bg-[#272a31]/40 hover:bg-[#272a31]/90 border border-red-500/20 hover:border-red-500 rounded-lg transition-all cursor-pointer space-y-2 disabled:opacity-50"
              >
                <div className="flex justify-between items-center">
                  <span className="font-bold text-sm text-[#adc6ff]">Martin Dvořák (21 let)</span>
                  <span className="text-[10px] bg-stone-500/10 text-stone-400 px-1.5 py-0.5 rounded border border-stone-500/20">Toxikologie</span>
                </div>
                <p className="text-xs text-[#e1e2ec] font-medium">Úmyslná intoxikace TCA (Amitriptylin)</p>
                <p className="text-[11px] text-[#c2c6d6] leading-relaxed">Hluboké bezvědomí, křeče a hrozivé EKG se širokým QRS komplexem. Antidotum NaHCO3.</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
