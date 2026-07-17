import { EmergencyAlgorithm } from '../types';

export const EMERGENCY_ALGORITHMS_CS: EmergencyAlgorithm[] = [
  {
    id: 'acls_cardiac_arrest',
    title: 'ACLS KPR dospělých (Kardiopulmonální resuscitace)',
    shortDescription: 'Krok za krokem vedení resuscitace u bezpulsní srdeční zástavy (VF, bezpulsní VT, PEA a asystolie).',
    detailedDescription: 'Tato interaktivní simulace otestuje vaši schopnost vést resuscitaci podle ACLS standardů, rozpoznávat rytmy, časovat cykly resuscitace a podávat léky či výboje.',
    category: 'cardiac_arrest',
    startStepId: 'check_responsiveness',
    steps: {
      check_responsiveness: {
        id: 'check_responsiveness',
        title: 'Úvodní zhodnocení',
        description: 'Jste přivoláni k pacientovi na lůžkové oddělení. Pacient leží na posteli a nereaguje na verbální ani hmatové podněty.',
        vitals: { rhythm: 'Neznámý', hr: 0, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Zkontrolovat karotický puls a současně sledovat dýchání (< 10 sekund)',
            nextStepId: 'assess_rhythm_vfpvt',
            rationale: 'Správně! Prvním krokem u pacienta v bezvědomí je současně zkontrolovat dýchání a puls na karotidě po dobu maximálně 10 sekund.',
            isCorrect: true
          },
          {
            text: 'Okamžitě natočit 12svodové EKG',
            nextStepId: 'delay_pulse_check',
            rationale: 'Nesprávně. Pokud pacient nereaguje, odkládání základní kontroly pulsu a dýchání kvůli složitějšímu úkolu jako 12svodové EKG je nebezpečné a prodlužuje zástavu oběhu bez perfuze.'
          },
          {
            text: 'Připravit 1 mg Epinefrinu (Adrenalinu) IV a okamžitě aplikovat',
            nextStepId: 'delay_pulse_check',
            rationale: 'Nesprávně. Před zahájením chemické resuscitace musíte potvrdit srdeční zástavu a ověřit puls/dýchání.'
          }
        ]
      },
      delay_pulse_check: {
        id: 'delay_pulse_check',
        title: 'Kritické zdržení',
        description: 'Zatímco se připravujete, pacient zůstává zcela apnoický a cyanotický. Komprese hrudníku nejsou prováděny. Uvědomujete si, že musíte nejprve zkontrolovat puls.',
        type: 'decision',
        choices: [
          {
            text: 'Zkontrolovat karotický puls a okamžitě zahájit srdeční masáž',
            nextStepId: 'assess_rhythm_vfpvt',
            rationale: 'Dobrá korekce. Ověřujete, že pacient nemá puls ani nedýchá. Srdeční masáž je zahájena.',
            isCorrect: true
          }
        ]
      },
      assess_rhythm_vfpvt: {
        id: 'assess_rhythm_vfpvt',
        title: 'Analýza rytmu',
        description: 'Voláte resuscitátor ("crash cart"), připojujete elektrody a zahajujete kvalitní KPR (100-120/min, hloubka 5 cm, úplné uvolnění hrudníku). EKG monitor ukazuje rychlou, dezorganizovanou, bizarní křivku bez identifikovatelných vln P, komplexů QRS nebo vln T.',
        vitals: { rhythm: 'Komorová fibrilace (VF)', hr: 230, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Podat okamžitý nesynchronizovaný výboj (200J bifázicky)',
            nextStepId: 'shock_1_delivered',
            rationale: 'Správně! Komorová fibrilace (VF) je šokovatelný rytmus. Včasná defibrilace je nejvýznamnějším zásahem u VF/pVT.',
            isCorrect: true
          },
          {
            text: 'Podat 1 mg Epinefrinu IV a pokračovat v KPR',
            nextStepId: 'med_before_shock_failure',
            rationale: 'Chybná priorita. Neodkládejte defibrilaci šokovatelného rytmu kvůli podávání léků. Včasný výboj zachraňuje život!'
          },
          {
            text: 'Provést synchronizovanou kardioverzi (100J)',
            nextStepId: 'synchronized_shock_failure',
            rationale: 'Nesprávně. Při komorové fibrilaci nejsou na monitoru žádné komplexy QRS, se kterými by se mohl defibrilátor synchronizovat. Synchronizovaný výboj u VF buď vůbec neproběhne, nebo selže.'
          }
        ]
      },
      med_before_shock_failure: {
        id: 'med_before_shock_failure',
        title: 'Nevhodný příkaz k podání medikace',
        description: 'Ztratili jste 45 sekund snahou o zajištění IV přístupu a podáním epinefrinu. Pacient zůstává ve VF. Monitor stále varovně pípá.',
        type: 'decision',
        choices: [
          {
            text: 'Podat vysokoenergetický nesynchronizovaný výboj (200J)',
            nextStepId: 'shock_1_delivered',
            rationale: 'Správně. Nakonec výboj podáváte, i když se zpožděním.',
            isCorrect: true
          }
        ]
      },
      synchronized_shock_failure: {
        id: 'synchronized_shock_failure',
        title: 'Aktivní SYNC režim defibrilátoru',
        description: 'Stisknete tlačítka výboje, ale protože je defibrilátor v režimu SYNC, čeká na vrchol QRS. Ve VF žádný není, takže přístroj odmítá vyslat výboj. Čas běží!',
        type: 'decision',
        choices: [
          {
            text: 'Vypnout režim SYNC a okamžitě podat nesynchronizovaný výboj (200J)',
            nextStepId: 'shock_1_delivered',
            rationale: 'Správně! U VF nebo bezpulsní VT musí být režim SYNC vypnutý. Je vyžadována okamžitá nesynchronizovaná defibrilace.',
            isCorrect: true
          }
        ]
      },
      shock_1_delivered: {
        id: 'shock_1_delivered',
        title: 'Cyklus 1 po výboji',
        description: 'Výboj byl podán. Hrudník pacienta se záškubem zareaguje. Jaký je váš bezprostřední další krok?',
        vitals: { rhythm: 'VF (Post-Shock)', hr: 0, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Okamžitě pokračovat v masáži hrudníku po dobu 2 minut (bez kontroly rytmu/pulsu)',
            nextStepId: 'cycle_2_assess',
            rationale: 'Vynikající! Okamžitě po výboji obnovte KPR. Nezastavujte se pro kontrolu rytmu nebo pulsu; "ohnutý" myokard potřebuje čas na obnovení perfuzního rytmu a potřebuje kontinuální KPR.',
            isCorrect: true
          },
          {
            text: 'Zkontrolovat monitor, zda se změnil rytmus',
            nextStepId: 'stop_for_rhythm_check_error',
            rationale: 'Nesprávně. Kontrola monitoru bezprostředně po výboji zdržuje komprese a snižuje koronární perfuzní tlak. Nezkracujte cyklus KPR po defibrilaci dříve než po 2 plných minutách.'
          },
          {
            text: 'Zkontrolovat karotický puls',
            nextStepId: 'stop_for_rhythm_check_error',
            rationale: 'Nesprávně. Kontrola pulsu bezprostředně po defibrilaci zbytečně plýtvá časem. Okamžitě pokračujte v KPR.'
          }
        ]
      },
      stop_for_rhythm_check_error: {
        id: 'stop_for_rhythm_check_error',
        title: 'Varování před přerušením KPR',
        description: 'Tým váhá. Přerušujete komprese kvůli kontrole pulsu. Žádný puls není hmatný. Koronární perfuzní tlak klesá na nulu. Vedoucí lékař vám připomíná doporučení KPR.',
        type: 'decision',
        choices: [
          {
            text: 'Okamžitě obnovit KPR a provádět 2 minuty kvalitní nepřímé srdeční masáže',
            nextStepId: 'cycle_2_assess',
            rationale: 'Správně. Vraťme se okamžitě na hrudník pacienta.',
            isCorrect: true
          }
        ]
      },
      cycle_2_assess: {
        id: 'cycle_2_assess',
        title: 'Zhodnocení rytmu po 2 minutách',
        description: 'Po 2 minutách kvalitní KPR (během které byl úspěšně zajištěn intraoseální přístup IO do proximální tibie) přerušujete komprese na < 10 sekund. Monitor stále ukazuje komorovou fibrilaci.',
        vitals: { rhythm: 'Persistentní VF', hr: 220, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Podat 2. výboj (200J) a okamžitě pokračovat v KPR. Během tohoto cyklu podat 1 mg Epinefrinu IV/IO.',
            nextStepId: 'cycle_3_assess',
            rationale: 'Skvěle! Jedná se o druhou kontrolu rytmu ukazující šokovatelnou VF. Podáváte 2. výboj a pokračujete v KPR. Epinefrin 1 mg je nyní vhodný (podává se každé 3-5 minut, po 2. výboji).',
            isCorrect: true
          },
          {
            text: 'Podat 2. výboj (200J) a okamžitě pokračovat v KPR. Podat Amiodaron 300 mg IV/IO.',
            nextStepId: 'early_amiodarone_error',
            rationale: 'Chybné časování. Amiodaron (nebo Lidokain) je indikován u refrakterní VF až po 3. výboji, nikoli po 2. výboji. Nejprve by měl být podán Epinefrin.'
          },
          {
            text: 'Pokračovat v KPR bez výboje, abychom "nespálili" srdce',
            nextStepId: 'delay_second_shock_error',
            rationale: 'Nesprávně. Pokud rytmus zůstává šokovatelný, podejte výboj. Odkládání defibrilace snižuje šanci na úspěch.'
          }
        ]
      },
      early_amiodarone_error: {
        id: 'early_amiodarone_error',
        title: 'Úprava protokolu pro refrakterní VF',
        description: 'Podali jste Amiodaron. I když to neuškodí, standardem bylo nejprve podat Epinefrin k optimalizaci koronárního perfuzního tlaku během druhého cyklu. Pokračujme ke 3. kontrole rytmu.',
        type: 'decision',
        choices: [
          {
            text: 'Dokončit cyklus KPR a znovu vyhodnotit rytmus',
            nextStepId: 'cycle_3_assess',
            rationale: 'Pokračujeme k další analýze rytmu.',
            isCorrect: true
          }
        ]
      },
      delay_second_shock_error: {
        id: 'delay_second_shock_error',
        title: 'Zmeškaná příležitost k výboji',
        description: 'Nepodáním výboje srdce pacienta nadále fibriluje a spotřebovává své poslední zásoby ATP.',
        type: 'decision',
        choices: [
          {
            text: 'Podat 2. výboj (200J) a pokračovat v KPR',
            nextStepId: 'cycle_3_assess',
            rationale: 'Rozumím. Výboj podán.',
            isCorrect: true
          }
        ]
      },
      cycle_3_assess: {
        id: 'cycle_3_assess',
        title: '3. kontrola rytmu (refrakterní VF)',
        description: 'Dvě celé minuty KPR jsou dokončeny. Epinefrin 1 mg byl aplikován. Přerušujete komprese. Pacient zůstává v komorové fibrilaci. Toto je refrakterní VF.',
        vitals: { rhythm: 'Refrakterní VF', hr: 215, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Podat 3. výboj (200J), okamžitě pokračovat v KPR a podat Amiodaron 300 mg IV bolus.',
            nextStepId: 'cycle_4_assess',
            rationale: 'Absolutně správně! Refrakterní VF po 3 výbojích vyžaduje antiarytmika. Podává se první dávka Amiodaronu 300 mg IV/IO (alternativou je Lidokain 1 - 1,5 mg/kg).',
            isCorrect: true
          },
          {
            text: 'Podat 3. výboj (200J), pokračovat v KPR a podat další 1 mg Epinefrinu.',
            nextStepId: 'epinephrine_stacking_error',
            rationale: 'Nesprávně. Epinefrin se podává každé 3 až 5 minut. Podání další dávky právě teď (jen 2 minuty po předchozí) riskuje hromadění dávky ("stacking") a závažnou toxicitu.'
          },
          {
            text: 'Zastavit KPR a provést okamžitou jehlovou dekompresi hrudníku',
            nextStepId: 'needle_decompression_unjustified',
            rationale: 'Nesprávně. Pro tenzní pneumothorax není žádná klinická indikace (jednostranně chybějící dýchání, tracheální deviace). Zastavení KPR je škodlivé.'
          }
        ]
      },
      epinephrine_stacking_error: {
        id: 'epinephrine_stacking_error',
        title: 'Riziko toxicity Epinefrinu',
        description: 'Nařídili jste další dávku epinefrinu příliš brzy. Pamatujte, že nadbytečný epinefrin zhoršuje ischemii myokardu a může způsobit závažnou po-ROSC tachykardii a arytmie. Opravme to a podejme raději Amiodaron 300 mg.',
        type: 'decision',
        choices: [
          {
            text: 'Podat Amiodaron 300 mg IV/IO a pokračovat v masáži',
            nextStepId: 'cycle_4_assess',
            rationale: 'Návrat ke správnému protokolu pro refrakterní VF.',
            isCorrect: true
          }
        ]
      },
      needle_decompression_unjustified: {
        id: 'needle_decompression_unjustified',
        title: 'Zbytečný zákrok',
        description: 'Provedli jste jehlovou dekompresi, ale nedošlo k žádnému úniku vzduchu. Ztratili jste drahocenný čas a přerušili masáž. Vraťme se rychle ke kvalitní KPR.',
        type: 'decision',
        choices: [
          {
            text: 'Pokračovat v masáži a podat Amiodaron 300 mg',
            nextStepId: 'cycle_4_assess',
            rationale: 'Návrat k masáži a protokolu defibrilace.',
            isCorrect: true
          }
        ]
      },
      cycle_4_assess: {
        id: 'cycle_4_assess',
        title: 'Zhodnocení ROSC',
        description: 'Dokončili jste 4. cyklus KPR. Amiodaron byl distribuován. Přerušujete komprese. Monitor ukazuje pravidelný, organizovaný, štíhlokomplexový rytmus (Sinusová tachykardie) o frekvenci 95 bpm.',
        vitals: { rhythm: 'Sinusová tachykardie', hr: 95, bp: '0/0', spo2: 0 },
        type: 'decision',
        choices: [
          {
            text: 'Zkontrolovat karotický puls',
            nextStepId: 'rosc_confirmed',
            rationale: 'Vynikající volba! Když se při kontrole rytmu objeví organizovaný rytmus, musíte zkontrolovat puls k odlišení PEA (bezpulsní elektrické aktivity) od ROSC (obnovení spontánního oběhu).',
            isCorrect: true
          },
          {
            text: 'Podat 4. výboj ke stabilizaci rytmu',
            nextStepId: 'shock_organized_rhythm_disaster',
            rationale: 'Extrémně nebezpečné! Podání výboje do organizovaného sinusového rytmu je kritická chyba (mohli byste zasáhnout zranitelnou vlnu T a znovu vyvolat VF).'
          },
          {
            text: 'Předpokládat, že pacient žije, a zastavit všechny resuscitační zásahy',
            nextStepId: 'assume_alive_without_pulse_error',
            rationale: 'Nesprávně. Organizovaný rytmus na monitoru nezaručuje hmatný puls (může jít o PEA). Musíte zkontrolovat puls.'
          }
        ]
      },
      shock_organized_rhythm_disaster: {
        id: 'shock_organized_rhythm_disaster',
        title: 'Iatrogenní zástava oběhu',
        description: 'Podali jste výboj do pravidelného rytmu. Pacient okamžitě upadá zpět do asystolie nebo refrakterní komorové fibrilace. Vedoucí lékař vypadá zděšeně.',
        type: 'decision',
        choices: [
          {
            text: 'Okamžitě pokračovat v masáži hrudníku a provést analýzu rytmu',
            nextStepId: 'cycle_2_assess',
            rationale: 'Znovu zahajujeme resuscitaci ze zhoršeného stavu.',
            isCorrect: true
          }
        ]
      },
      assume_alive_without_pulse_error: {
        id: 'assume_alive_without_pulse_error',
        title: 'Opomenutá bezpulsní elektrická aktivita (PEA)',
        description: 'Přerušili jste péči. Po 30 sekundách se u pacienta rozvíjí hluboká hypoxie mozku. Musíte ověřit, zda skutečně dochází k oběhu krve.',
        type: 'decision',
        choices: [
          {
            text: 'Zkontrolovat karotický puls',
            nextStepId: 'rosc_confirmed',
            rationale: 'Správně.',
            isCorrect: true
          }
        ]
      },
      rosc_confirmed: {
        id: 'rosc_confirmed',
        title: 'Puls nalezen! Dosaženo ROSC',
        description: 'Hmatáte silný, dobře plněný oboustranný puls na karotidě. Pacient dosáhl obnovení spontánního oběhu (ROSC). Vypisují se nové vitální funkce.',
        vitals: { rhythm: 'Sinusová tachykardie', hr: 105, bp: '88/50', spo2: 89, rr: 8, etco2: 24 },
        type: 'decision',
        choices: [
          {
            text: 'Zahájit poresuscitační péči: zajistit dýchací cesty (intubace), podporovat ventilaci, cílit ETCO2 35-45 mmHg, udržovat SpO2 92-98%, optimalizovat krevní tlak (IV tekutiny/vazopresory) a natočit 12svodové EKG.',
            nextStepId: 'acls_success',
            rationale: 'Skvělé! Toto je přesný poresuscitační balíček. Zajistěte ventilaci, vyvarujte se hyperoxygenace, natočte EKG k vyloučení STEMI a léčte hypotenzi (protože TK je 88/50) infuzemi a vazopresory.',
            isCorrect: true
          },
          {
            text: 'Nechat pacienta spát a znovu zhodnotit za 30 minut',
            nextStepId: 'neglected_post_care_failure',
            rationale: 'Nesprávně. Pacienti po ROSC jsou vysoce nestabilní. Zanedbání péče rychle povede k opětovné zástavě oběhu!'
          }
        ]
      },
      neglected_post_care_failure: {
        id: 'neglected_post_care_failure',
        title: 'Poresuscitační zhoršení',
        description: 'Protože jste nepodpořili ventilaci ani neléčili hraniční krevní tlak, u pacienta se rozvíjí hypoventilace, hyperkapnická acidóza a TK klesá na 60/30. Rychle upadá zpět do zástavy oběhu!',
        type: 'decision',
        choices: [
          {
            text: 'Zahájit nepřímou masáž hrudníku a spustit resuscitaci podle ACLS',
            nextStepId: 'check_responsiveness',
            rationale: 'Restartujeme scénář.'
          }
        ]
      },
      acls_success: {
        id: 'acls_success',
        title: 'Scénář úspěšně dokončen!',
        description: 'Gratulujeme! Úspěšně jste resuscitovali a stabilizovali pacienta podle nejnovějších ACLS doporučení. Poresuscitační péče byla správně zahájena, což prokazuje vysokou klinickou zdatnost. Skvělá práce!',
        type: 'outcome_success'
      }
    }
  },
  {
    id: 'anaphylaxis_ed',
    title: 'Těžká anafylaxe na urgentním příjmu',
    shortDescription: 'Urgentní management těžké systémové alergické reakce (Anafylaxe) se zapojením dýchacích cest.',
    detailedDescription: 'Tato klinická simulace vás provede rychlým zhodnocením, agresivním podáním epinefrinu, zajištěním dýchacích cest a podpůrnou terapií při život ohrožujícím anafylaktickém šoku.',
    category: 'shock',
    startStepId: 'initial_allergist',
    steps: {
      initial_allergist: {
        id: 'initial_allergist',
        title: 'Prezentace pacienta',
        description: '24letá žena je přivezena přáteli na urgentní příjem. 15 minut po požití sušenky v místní kavárně se u ní rozvinul těžký otok obličeje, kopřivka na hrudníku a extrémní dušnost. Lapá po dechu.',
        vitals: { hr: 125, bp: '92/58', spo2: 88, rr: 28 },
        type: 'decision',
        choices: [
          {
            text: 'Okamžitě podat Epinefrin 0,3 mg IM do anterolaterální části stehna',
            nextStepId: 'epinephrine_administered',
            rationale: 'Vynikající! Intramuskulární (IM) Epinefrin (1:1000) do anterolaterální části stehna je lékem první volby a nejdůležitějším krokem. Opožděné podání epinefrinu zvyšuje mortalitu.',
            isCorrect: true
          },
          {
            text: 'Podat IV Diphenhydramin (Benadryl) 50 mg a Methylprednisolon 125 mg',
            nextStepId: 'delayed_epi_antihistamine',
            rationale: 'Nesprávně. Antihistaminika a kortikosteroidy jsou pouze sekundární terapií. Neodstraňují obstrukci dýchacích cest ani šok a účinkují až za několik hodin. Odkládat Epinefrin je kritická chyba!'
          },
          {
            text: 'Objednat inhalační léčbu Albuterolem a RTG hrudníku',
            nextStepId: 'delayed_epi_asthma_mimic',
            rationale: 'Nesprávně. Bronchospasmus je sice přítomen, ale anafylaxe je celková nouzová situace. Ohrožení dýchacích cest a šok musí být okamžitě řešeny intramuskulárním epinefrinem.'
          }
        ]
      },
      delayed_epi_antihistamine: {
        id: 'delayed_epi_antihistamine',
        title: 'Progrese alergické reakce',
        description: 'Zatímco připravujete IV antihistaminika, rty pacientky dále otékají, začíná vydávat vysoký pískavý zvuk při nádechu (inspiratorní stridor) a saturace kyslíku klesá na 82 %. Ztrácí dýchací cesty.',
        vitals: { hr: 135, bp: '82/44', spo2: 82, rr: 32 },
        type: 'decision',
        choices: [
          {
            text: 'Okamžitě podat Epinefrin 0,3 mg IM do stehna',
            nextStepId: 'epinephrine_administered',
            rationale: 'Správně! Uvědomujete si, že Epinefrin je skutečně život zachraňujícím lékem. Podáváte ho bez dalšího prodlení.',
            isCorrect: true
          }
        ]
      },
      delayed_epi_asthma_mimic: {
        id: 'delayed_epi_asthma_mimic',
        title: 'Těžký bronchospasmus a stridor',
        description: 'Inhalátor je připraven, ale pacientka nedokáže vdechnout dostatečný objem, aby albuterol vdechla. Stridor je jasně slyšitelný. Krevní tlak nadále klesá.',
        vitals: { hr: 138, bp: '80/40', spo2: 80, rr: 34 },
        type: 'decision',
        choices: [
          {
            text: 'Podat Epinefrin 0,3 mg IM do stehna právě teď',
            nextStepId: 'epinephrine_administered',
            rationale: 'Správně! Epinefrin je okamžitě aplikován.',
            isCorrect: true
          }
        ]
      },
      epinephrine_administered: {
        id: 'epinephrine_administered',
        title: 'Stav po podání Epinefrinu',
        description: 'Pět minut po podání IM Epinefrinu je dýchání pacientky o něco méně namáhavé a stridor ustoupil, ale zůstává extrémně hypotenzní (TK 84/48). Kopřivka je stále závažná. Jaké jsou vaše další priority?',
        vitals: { hr: 118, bp: '84/48', spo2: 91, rr: 22 },
        type: 'decision',
        choices: [
          {
            text: 'Zajistit široké IV přístupy, zahájit agresivní bolus 1-2L teplého fyziologického roztoku a podat vysokoprůtokový kyslík.',
            nextStepId: 'fluid_and_oxygen_success',
            rationale: 'Perfektni! Anafylaxe způsobuje těžkou vazodilataci a únik tekutin z cévního řečiště, což vede k masivní relativní hypovolemii. Agresivní doplnění objemu je klíčem k podpoře TK.',
            isCorrect: true
          },
          {
            text: 'Okamžitě podat druhou dávku Epinefrinu 0,3 mg IM',
            nextStepId: 'unnecessary_rapid_epi',
            rationale: 'Nesprávná priorita. Druhá dávka Epinefrinu je sice indikována při přetrvávání příznaků, ale obvykle se podává s odstupem 5-15 minut. Nyní je prioritou řešení těžkého distributivního šoku doplněním objemu infuzemi.'
          }
        ]
      },
      unnecessary_rapid_epi: {
        id: 'unnecessary_rapid_epi',
        title: 'Nežádoucí účinky Epinefrinu',
        description: 'Aplikovali jste druhou dávku epinefrinu během 3 minut od první. Pacientka se stává extrémně tachykardickou (SF 155/min) a úzkostnou, ale krevní tlak zůstává nízký (82/46), protože její cévní řečiště je prázdné. Musíte doplnit objem.',
        type: 'decision',
        choices: [
          {
            text: 'Zajistit širokou IV linku a podat bolus 1-2 L izotonických krystaloidů',
            nextStepId: 'fluid_and_oxygen_success',
            rationale: 'Správně. Expanze distributivního objemu je naprosto zásadní.',
            isCorrect: true
          }
        ]
      },
      fluid_and_oxygen_success: {
        id: 'fluid_and_oxygen_success',
        title: 'Zhodnocení dýchacích cest a šoku',
        description: 'Podali jste 1 litr fyziologického roztoku. Saturace kyslíku je 94 % na polomasce s rezervoárem. Jaké sekundární léky by měly být podány k potlačení uvolňování histaminu a prevenci pozdní bifázické reakce?',
        vitals: { hr: 110, bp: '108/65', spo2: 95, rr: 18 },
        type: 'decision',
        choices: [
          {
            text: 'Podat IV Diphenhydramin (H1 blokátor) 50 mg, IV Famotidin (H2 blokátor) 20 mg a IV Methylprednisolon 125 mg.',
            nextStepId: 'secondary_meds_given',
            rationale: 'Vynikající! Tato kombinace anafylaktického "koktejlu" blokuje H1 i H2 histaminové receptory pro maximální potlačení příznaků. Kortikosteroidy jsou zásadní pro zmírnění pozdní (bifázické) reakce, která může nastat s odstupem 1-72 hodin.',
            isCorrect: true
          },
          {
            text: 'Zahájit okamžitou infuzi IV Noradrenalinu',
            nextStepId: 'premature_vasopressor',
            rationale: 'Nesprávně. Krevní tlak se po IM Epinefrinu a infuzích pěkně stabilizoval (TK 108/65). Zahájení agresivního vazopresoru jako Noradrenalin je předčasné a zbytečné.'
          }
        ]
      },
      premature_vasopressor: {
        id: 'premature_vasopressor',
        title: 'Hypertenzní špička',
        description: 'Zahájili jste infuzi noradrenalinu. Krevní tlak pacientky prudce stoupá na 180/110. Uvědomujete si, že je pacientka předávkovaná vazopresorem, a infuzi vypínáte. Pokračujme v podávání sekundárních protialergických léků.',
        type: 'decision',
        choices: [
          {
            text: 'Podat IV H1/H2 blokátory a kortikosteroidy',
            nextStepId: 'secondary_meds_given',
            rationale: 'Správná volba.',
            isCorrect: true
          }
        ]
      },
      secondary_meds_given: {
        id: 'secondary_meds_given',
        title: 'Dispozice a sledování',
        description: 'Sekundární medikace kape. Otok obličeje pacientky ustupuje, kopřivka bledne a cítí se výrazně lépe. Vitální funkce jsou zcela stabilní.',
        vitals: { hr: 88, bp: '118/72', spo2: 98, rr: 14 },
        type: 'decision',
        choices: [
          {
            text: 'Sledovat pacientku na urgentním příjmu po dobu minimálně 4 až 6 hodin kvůli riziku bifázické reakce, poté propustit s receptem na EpiPen a doporučením ke sledování u praktického lékaře.',
            nextStepId: 'anaphylaxis_success',
            rationale: 'Perfektní rozhodnutí! Až 20 % pacientů zažije "bifázickou reakci" — návrat anafylaxe několik hodin po počátečním vyřešení, bez další expozice alergenu. Sledování po dobu 4-6 hodin je standardem. Předepsání EpiPenu před propuštěním je naprosto zásadní.',
            isCorrect: true
          },
          {
            text: 'Okamžitě pacientku propustit k uvolnění lůžka',
            nextStepId: 'early_discharge_disaster',
            rationale: 'Nesprávně. Okamžité propuštění pacienta po anafylaxi je vysoce rizikové kvůli dobře zdokumentovanému riziku život ohrožujících bifázických reakcí.'
          }
        ]
      },
      early_discharge_disaster: {
        id: 'early_discharge_disaster',
        title: 'Bifázický šok',
        description: 'Dvě hodiny po předčasném propuštění je přivezena RZP v těžkém respiračním selhání a šoku. K bifázické reakci došlo u ní doma a neměla u sebe EpiPen.',
        type: 'decision',
        choices: [
          {
            text: 'Znovu zahájit resuscitaci anafylaxe od Kroku 1',
            nextStepId: 'initial_allergist',
            rationale: 'Pokračujeme na začátek simulace s ponaučením.'
          }
        ]
      },
      anaphylaxis_success: {
        id: 'anaphylaxis_success',
        title: 'Scénář úspěšně dokončen!',
        description: 'Skvělá práce! Zvládli jste tuto anafylaktickou pohotovost s dokonalým řazením kroků: včasný IM Epinefrin, agresivní objemová resuscitace, sekundární H1/H2 blokátory + kortikosteroidy a bezpečné 6hodinové sledování zakončené předepsáním EpiPenu. To je výjimečná urgentní péče!',
        type: 'outcome_success'
      }
    }
  }
];
