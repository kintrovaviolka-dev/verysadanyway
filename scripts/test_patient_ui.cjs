// Browser integration with the real router and a deterministic test interpreter.
// No Gemini credentials or external model calls. Never mount this server in production.
const { chromium } = require('../drill/node_modules/@playwright/test');
const assert = require('node:assert/strict');
const express = require('express');
const path = require('node:path');
const { createPatientRouter, createPatientService, privateGuard } = require('../private-patient/runtime.cjs');

async function main() {
  let failNext = false;
  const service = createPatientService({
    secret: 'browser-test-only-secret-never-use-in-production', preview: true, pilotOnly: true,
    interpret: async () => {
      if (failNext) { failNext = false; throw new Error('upstream-private-details'); }
      return { kind: 'history', factIds: ['f1'] };
    },
  });
  const app = express(); app.use(express.json({ limit: '64kb' })); app.use(privateGuard);
  app.use('/api/patient', createPatientRouter({ service }));
  app.get('/api/health', (_req, res) => res.json({ geminiConfigured: true }));
  app.use(express.static(path.resolve(__dirname, '../clinical-learning-portal/dist')));
  const server = app.listen(0, '127.0.0.1');
  await new Promise((resolve, reject) => { server.once('listening', resolve); server.once('error', reject); });
  let browser;
  try {
    browser = await chromium.launch({ headless: true });
    for (const viewport of [{ width: 1440, height: 1050 }, { width: 390, height: 844 }]) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      const errors = []; page.on('pageerror', error => errors.push(error.message));
      // Avoid unrelated analytics network errors in this local harness.
      await page.route('**/_vercel/**', route => route.fulfill({ status: 204, body: '' }));
      await page.goto(`http://127.0.0.1:${server.address().port}`);
      await page.getByRole('button', { name: /Otevřít simulátor|Open simulator/ }).click();
      await page.getByText('3 případů', { exact: true }).waitFor();
      await page.getByLabel('Obor', { exact: true }).selectOption('kardio');
      await page.getByRole('button', { name: 'Zahájit rozhovor' }).click();
      await page.getByRole('heading', { name: 'Bušení srdce a zadýchávání' }).waitFor();
      assert.ok(!(await page.locator('body').innerText()).includes('Fibrilace síní'));
      const question = page.getByLabel('Vaše otázka', { exact: true });
      await question.fill('Kdy začalo bušení srdce?');
      failNext = true;
      await page.getByRole('button', { name: 'Odeslat otázku' }).click();
      await page.getByRole('alert').filter({ hasText: 'AI je momentálně nedostupná' }).waitFor();
      assert.equal(await question.inputValue(), 'Kdy začalo bušení srdce?');
      assert.ok(!(await page.locator('body').innerText()).includes('upstream-private-details'));
      // Broken stream must not commit a clinician turn or lose the pending input.
      await page.route('**/api/patient/message', async route => {
        await route.fulfill({ status: 200, contentType: 'text/event-stream', body: 'data: {"text":"Nedokončená odpověď"}\n\n' });
        await page.unroute('**/api/patient/message');
      });
      await page.getByRole('button', { name: 'Odeslat otázku' }).click();
      await page.getByRole('alert').filter({ hasText: 'přerušil' }).waitFor();
      assert.equal(await question.inputValue(), 'Kdy začalo bušení srdce?');
      assert.equal(await page.getByText('Vy · otázka 1', { exact: true }).count(), 0);
      await page.getByRole('button', { name: 'Odeslat otázku' }).click();
      await page.getByText('Vy · otázka 1', { exact: true }).waitFor();
      assert.equal(await question.inputValue(), '');
      assert.ok((await page.locator('body').innerText()).includes('Zbývá 23 otázek'));
      await page.getByRole('button', { name: 'Ukončit rozhovor a vyhodnotit' }).click();
      await page.getByLabel('Hlavní diagnóza', { exact: true }).fill('fibrilace sini');
      await page.getByLabel('Alternativa 1', { exact: true }).fill('flutter síní');
      await page.getByRole('button', { name: 'Odevzdat a zobrazit rozbor' }).click();
      await page.getByRole('heading', { name: 'Rozbor případu' }).waitFor();
      assert.ok((await page.locator('body').innerText()).includes('50 / 100'));
      const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('ai_patient_progress_v1')));
      assert.equal(saved.length, 1); assert.equal(saved[0].score, 50); assert.ok(saved[0].caseVersion);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
      assert.equal(overflow, false, `Horizontal overflow at ${viewport.width}px`);
      await page.screenshot({ path: `/private/tmp/ai-patient-${viewport.width === 390 ? 'mobile' : 'desktop'}.png`, fullPage: true });
      await page.getByRole('button', { name: 'Nový případ podle filtrů' }).click();
      await page.getByLabel('Vaše otázka', { exact: true }).waitFor();
      assert.equal(await page.getByRole('heading', { name: 'Rozbor případu' }).count(), 0);
      assert.equal(await page.getByText('Vy · otázka 1', { exact: true }).count(), 0);
      assert.equal(errors.length, 0, errors.join('\n'));
      await context.close();
      console.log(`PASS ${viewport.width}px: full flow, failure/retry, truncated SSE, aliases, progress, reset, no horizontal overflow`);
    }
  } finally {
    if (browser) await browser.close();
    server.closeAllConnections(); await new Promise(resolve => server.close(resolve));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
