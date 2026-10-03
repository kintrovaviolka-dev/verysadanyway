# Medvědí minimum

Samostatná Cloudflare Worker + PWA pro průběžné studium. Nezasahuje do původního portálu a neobsahuje žádné klíče.

## První lokální spuštění

```bash
cd study-buddy
npm install
npm run catalog
npx wrangler d1 create study-buddy
# ID z příkazu vlož do wrangler.jsonc místo nulového database_id.
npm run db:local
npm run dev
```

V prohlížeči otevři adresu, kterou vypíše Wrangler, a jednou vyber `.ics` soubor. Import uloží 66 událostí z dodaného rozvrhu, vytvoří bloky Radiologie, Dermatologie a Neurologie a témata rozloží podle kapacity dne.

## Co už první verze umí

- import iCal přímo ve webu;
- přepočet kapacity dle hodin ve výuce;
- první průchod všemi lokálními tématy v aktuálním bloku (jedno mikrotéma je odhadnuto na pět minut: vybavit → ověřit → pokračovat);
- jedno urgentně-anesteziologické téma a pět kartiček ve všední den, pokud se vejdou;
- večerní check-in a laskavý přesun restů do nejbližšího dne s volnou kapacitou;
- Cloudflare Cron každých 15 minut s vyhodnocením časů v `Europe/Prague`.

## Další milníky

1. AI kurátor vybere a nechá ručně potvrdit maximálně devět klíčových témat na blok; pak je přidá do druhého průchodu.
2. Push pro PWA a e-mail s akčními odkazy.
3. Bezpečný přístupový token a nastavení přes UI.
4. Jemná gamifikace, noční připomínka a „bear minimum“ pěti otázek.

`GEMINI_API_KEY` zůstává v `.dev.vars`/Cloudflare Secret. Generování kartiček zatím není připojeno, takže při stavbě základu žádný model ani klíč nepoužíváme.
