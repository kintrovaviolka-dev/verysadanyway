import { existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import webpush from 'web-push';

const root = resolve(import.meta.dirname, '..');
const secretFile = resolve(root, '.study-buddy-secrets.env');
const codeFile = resolve(root, 'STUDY_BUDDY_ACCESS_CODE.txt');
if (existsSync(secretFile) || existsSync(codeFile)) {
  throw new Error('Tajné údaje už existují. Nevytvářím novou sadu, aby se nerozbily aktivní notifikace.');
}

const keys = webpush.generateVAPIDKeys();
const accessCode = crypto.getRandomValues(new Uint8Array(24));
const encodedAccessCode = Buffer.from(accessCode).toString('base64url');
const subject = 'https://study-buddy.kintrovaviolka.workers.dev';
writeFileSync(secretFile, [
  `VAPID_PUBLIC_KEY=${keys.publicKey}`,
  `VAPID_PRIVATE_KEY=${keys.privateKey}`,
  `VAPID_SUBJECT=${subject}`,
  `APP_SETUP_TOKEN=${encodedAccessCode}`
].join('\n') + '\n', { mode: 0o600 });
writeFileSync(codeFile, `${encodedAccessCode}\n`, { mode: 0o600 });
console.log('Vytvořeny lokální VAPID klíče a přístupový kód. Hodnoty nejsou vypsané do terminálu.');
