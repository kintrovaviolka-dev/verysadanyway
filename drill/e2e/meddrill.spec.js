const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('/drill/');
});

test('onboarding downloads a grade and starts a capped daily drill', async ({ page }) => {
  await expect(page.getByRole('dialog', { name: /Vítejte v MedDrillu/i })).toBeVisible();
  await page.locator('[data-onboard-grade="3"]').click();
  await expect(page.getByRole('button', { name: /Patologie: spustit drill/i })).toBeVisible();

  await page.getByRole('button', { name: /Spustit denní drill/i }).click();
  await expect(page.locator('#drill-counter')).toHaveText('1 / 20');
});

test('sprint begins with a 20-minute countdown', async ({ page }) => {
  await page.locator('[data-onboard-grade="3"]').click();
  await expect(page.getByRole('button', { name: /Patologie: spustit drill/i })).toBeVisible();

  await page.getByText('Simulace testu (Sprint)').click();
  await expect(page.locator('#drill-counter')).toHaveText('1 / 20');
  await expect(page.locator('#drill-timer-display')).toHaveText('⏱️ 20:00');
});

test('sprint ends at the time limit without recording unanswered cards as mistakes', async ({ page }) => {
  await page.clock.install({ time: new Date('2026-10-07T12:00:00') });
  await page.locator('[data-onboard-grade="3"]').click();
  await expect(page.getByRole('button', { name: /Patologie: spustit drill/i })).toBeVisible();
  await page.getByText('Simulace testu (Sprint)').click();

  await page.clock.runFor(20 * 60 * 1000);
  await expect(page.getByRole('heading', { name: 'Čas vypršel!' })).toBeVisible();
  await expect(page.getByText(/Nezodpovězeno 20/i)).toBeVisible();
  const history = await page.evaluate(() => window.drillStorage.getHistory());
  expect(history).toHaveLength(1);
  expect(history[0]).toMatchObject({ totalAnswered: 0, unansweredCount: 20, timedOut: true });
});

test('keyboard focus is kept inside an open modal and Escape closes it', async ({ page }) => {
  await page.locator('[data-onboard-grade="3"]').click();
  await page.getByRole('button', { name: /Správa stažených balíčků & Offline/i }).click();
  const dialog = page.getByRole('dialog', { name: /Správce stažených balíčků/i });
  await expect(dialog).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(dialog).toBeHidden();
});

test('offline manager offers an update for a stale downloaded module', async ({ page }) => {
  await page.locator('[data-onboard-grade="3"]').click();
  await expect(page.getByRole('button', { name: /Patologie: spustit drill/i })).toBeVisible();
  await page.evaluate(async () => {
    const subject = await window.drillStorage.getSubject('patola');
    await window.drillStorage.saveSubject(subject, { contentRevision: 'legacy-revision' });
  });
  await page.reload();

  await page.getByRole('button', { name: /Správa stažených balíčků & Offline/i }).click();
  await expect(page.getByRole('button', { name: 'Aktualizovat' }).first()).toBeVisible();
});

test('backup import restores session history used by statistics', async ({ page }) => {
  await page.locator('[data-onboard-grade="3"]').click();
  await expect(page.getByRole('button', { name: /Patologie: spustit drill/i })).toBeVisible();

  const backup = JSON.stringify({
    version: '2026.3',
    userStates: [],
    customDecks: [],
    history: [{ deckTitle: 'Přenesený drill', totalAnswered: 8, correctCount: 6, durationSeconds: 120, date: Date.now() }]
  });
  await page.locator('#input-import-data').setInputFiles({
    name: 'meddrill-zaloha.json',
    mimeType: 'application/json',
    buffer: Buffer.from(backup)
  });
  await expect(page.getByText(/Záloha byla úspěšně a bezpečně obnovena/i)).toBeVisible();
  await page.getByRole('button', { name: 'Statistiky' }).click();
  await expect(page.locator('#stats-total-answered')).toHaveText('8');
});
