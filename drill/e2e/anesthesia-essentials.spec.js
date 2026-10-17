const { test, expect } = require('@playwright/test');
const { questions } = require('../data/modules/urgent.json');
const courseCases = questions.filter(item => item.id.startsWith('urgent-essentials-'));
const course = '/clinical-learning-portal/#essentials';

test.beforeEach(async ({ page }) => {
  await page.route('**/api/health', route => route.fulfill({ json: { geminiConfigured: false } }));
  await page.route('**/api/cases*', route => route.fulfill({ json: [] }));
  await page.route('**/_vercel/insights/script.js', route => route.fulfill({ body: '', contentType: 'application/javascript' }));
  await page.addInitScript(() => {
    if (!localStorage.getItem('med_portal_lang')) localStorage.setItem('med_portal_lang', 'cs');
  });
});

test('deep links, first-attempt feedback, persistence, language and selective reset', async ({ page }) => {
  await page.goto(`${course}/last`);
  await expect(page.getByRole('heading', { name: 'Praktické základy anesteziologie' })).toBeVisible();
  const firstCase = page.locator('[data-case-id="last-recognition"]');
  await firstCase.getByRole('button').first().focus();
  await page.keyboard.press('Enter');
  await expect(firstCase.getByRole('status')).toContainText('K zopakování.');
  await expect(firstCase.getByRole('button').nth(1)).toBeDisabled();
  await expect(page.getByRole('status').first()).toContainText('Zodpovězeno: 1/17');
  await page.reload();
  await expect(firstCase.getByRole('status')).toContainText('K zopakování.');

  await page.getByRole('link', { name: /Krevní plyny a acidobazická rovnováha/ }).click();
  await page.locator('[data-case-id="abg-winter"]').getByRole('button').nth(2).click();
  await expect(page.getByRole('status').first()).toContainText('2/17');
  await page.getByRole('button', { name: 'EN', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Blood gases and acid–base balance', exact: true })).toBeVisible();
  await expect(page.locator('[data-case-id="abg-winter"]').getByRole('status')).toContainText('Correct.');
  await page.getByRole('button', { name: 'Repeat this lesson' }).click();
  await expect(page.getByRole('status').first()).toContainText('Answered: 1/17');
  await page.getByRole('link', { name: /LAST: local anesthetic/ }).click();
  await expect(firstCase.getByRole('status')).toContainText('Review needed.');
  await page.goBack();
  await expect(page.getByRole('heading', { name: 'Blood gases and acid–base balance', exact: true })).toBeVisible();
});

test('all 17 cases are reachable and retain exact answers after reload', async ({ page }) => {
  expect(courseCases).toHaveLength(17);
  for (const item of courseCases) {
    await page.goto(item.studyPath);
    const card = page.locator(`[data-case-id="${item.id.replace('urgent-essentials-', '')}"]`);
    await card.getByRole('button').nth(item.correctIndex).click();
    await expect(card.getByRole('status')).toContainText(item.explanation);
  }
  await page.reload();
  await expect(page.getByRole('status').first()).toContainText('Zodpovězeno: 17/17');
  await expect(page.getByRole('status').first()).toContainText('Správně na první pokus: 17/17');
});

for (const width of [320, 390, 768, 1280]) {
  test(`course remains usable without horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(`${course}/blood-gas`);
    await expect(page.locator('#essentials-lesson-title')).toBeVisible();
    const fits = await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1);
    expect(fits).toBe(true);
    await page.locator('[data-case-id="abg-gap"]').getByRole('button').nth(1).click();
    await expect(page.locator('[data-case-id="abg-gap"]').getByRole('status')).toContainText('17 mmol/l');
  });
}

test('invalid saved progress is explicit and can be replaced by a new answer', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('anesthesia_essentials_progress', '{broken'));
  await page.goto(course);
  await expect(page.getByRole('alert')).toContainText('Pokrok se nepodařilo');
  await page.locator('[data-case-id="last-recognition"]').getByRole('button').nth(1).click();
  await expect(page.getByRole('alert')).toHaveCount(0);
  const saved = await page.evaluate(() => JSON.parse(localStorage.getItem('anesthesia_essentials_progress')));
  expect(saved.answers['last-recognition']).toBe(1);
});

test('unavailable storage warns without discarding the current answer', async ({ page }) => {
  await page.addInitScript(() => {
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = function (key, value) {
      if (key === 'anesthesia_essentials_progress') throw new DOMException('Quota exceeded', 'QuotaExceededError');
      return original.call(this, key, value);
    };
  });
  await page.goto(course);
  await page.locator('[data-case-id="last-recognition"]').getByRole('button').nth(1).click();
  await expect(page.getByRole('alert')).toContainText('Pokrok se nepodařilo');
  await expect(page.locator('[data-case-id="last-recognition"]').getByRole('status')).toContainText('Správně.');
});

test('sugammadex calculator uses separate adult indications, never a 2–16 mg/kg range', async ({ page }) => {
  await page.goto('/clinical-learning-portal/#pharmacology');
  await page.getByRole('button', { name: /Kalkulátor/ }).click();
  await page.getByRole('combobox').first().selectOption('sugammadex');
  const indication = page.locator('#sugammadex-block');
  const result = page.locator('.lg\\:col-span-7');
  await expect(indication).toBeVisible();
  await expect(result.locator('.text-4xl')).toHaveText('140');
  await indication.selectOption('deep');
  await expect(result.locator('.text-4xl')).toHaveText('280');
  await indication.selectOption('immediate');
  await expect(result.locator('.text-4xl')).toHaveText('1120');
  await expect(result).toContainText('neoddalovat eFONA');
});

test('urgent progress gives study feedback without certifying specialist competence', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('clinical_portal_progress', JSON.stringify({
    completedCases: [],
    incorrectDecisions: [],
    quizScores: ['Emergency', 'Anesthesia'].map(specialty => ({
      quizId: specialty, title: specialty, specialty, score: 10, total: 10, timestamp: '2026-10-17T10:00:00Z',
    })),
  })));
  await page.goto('/urgentni-prijem/');
  await page.getByRole('button', { name: 'Můj Pokrok' }).click();
  await expect(page.getByText(/tento index nepotvrzuje atestační úroveň/)).toBeVisible();
  await expect(page.getByText(/držíte na pokročilé atestační úrovni/)).toHaveCount(0);
  await page.getByRole('link', { name: /Doplnit praktické základy/ }).click();
  await expect(page.getByRole('heading', { name: 'Praktické základy anesteziologie' })).toBeVisible();
});

test('UPV links directly to the blood-gas lesson', async ({ page }) => {
  await page.goto('/upv/');
  await page.getByRole('link', { name: /Jak číst krevní plyny/ }).click();
  await expect(page.locator('#essentials-lesson-title')).toHaveText('Krevní plyny a acidobazická rovnováha');
});
