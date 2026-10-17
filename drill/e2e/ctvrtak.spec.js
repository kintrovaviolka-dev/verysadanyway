const { test, expect } = require('@playwright/test');

const subjects = ['farmakologie', 'derma', 'kardio', 'radiolka', 'psych', 'neuro'];
test.beforeEach(async ({ context }) => {
  await context.route('https://fonts.googleapis.com/**', route => route.abort());
  await context.route('https://fonts.gstatic.com/**', route => route.abort());
});

async function openCourse(page, subject, hash = '', expand = true) {
  await page.goto(`/${subject}/index.html${hash}`, { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#study-v2')).toHaveAttribute('data-ready', 'true');
  if (expand && !await page.locator('#v2-disclosure').evaluate(element => element.open)) {
    await page.locator('.v2-disclosure-summary').click();
  }
}

async function setRange(page, id, value) {
  await page.locator(id).evaluate((element, next) => {
    element.value = String(next);
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }, value);
}

for (const subject of subjects) {
  test(`${subject}: only explicit content deep links expand the section`, async ({ page }) => {
    await openCourse(page, subject, '#study-v2', false);
    const disclosure = page.locator('#v2-disclosure');
    await expect(disclosure).not.toHaveAttribute('open', '');
    const lesson = await page.locator('[data-lesson]').first().getAttribute('data-lesson');
    const links = [[`#v2-${lesson}`, 'learn'], ['#v2-sources', 'sources']];
    if (subject !== 'psych') links.push(['#v2-lab', 'lab']);
    for (const [hash, panel] of links) {
      await openCourse(page, subject, hash, false);
      await expect(disclosure).toHaveAttribute('open', '');
      await expect(page.locator(`#v2-${panel}-panel`)).toBeVisible();
    }
    await openCourse(page, subject, '', false);
    await expect(disclosure).not.toHaveAttribute('open', '');
    await page.evaluate(hash => { location.hash = hash; }, `#v2-${lesson}`);
    await expect(disclosure).toHaveAttribute('open', '');
    await expect(page.locator('#v2-learn-panel')).toBeVisible();
  });

  for (const width of [1440, 390, 320]) {
    test(`${subject}: lessons, lab and sources fit ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      const errors = [];
      page.on('pageerror', error => errors.push(error.message));
      await openCourse(page, subject, '', false);
      const root = page.locator('#study-v2');
      await expect(root.locator('#v2-disclosure')).not.toHaveAttribute('open', '');
      await expect(root.locator('#v2-lesson-list')).toBeHidden();
      expect((await root.boundingBox()).height).toBeLessThanOrEqual(120);
      expect(await page.title()).not.toMatch(/2\.0|Čtvrťák/);
      await expect(root.locator('#v2-heading')).toHaveText('Klíčové mechanismy k pochopení');
      await root.locator('.v2-disclosure-summary').focus();
      await page.keyboard.press('Enter');
      await expect(root.locator('[data-lesson]')).toHaveCount(6);
      await expect(root.locator('#v2-lesson-list')).toBeVisible();
      await expect(root.locator('#v2-answer')).not.toHaveAttribute('open', '');
      await root.getByText('Porovnat s vysvětlením', { exact: true }).click();
      await expect(root.locator('#v2-answer')).toHaveAttribute('open', '');
      for (const view of subject === 'psych' ? ['learn', 'sources'] : ['learn', 'lab', 'sources']) {
        await root.locator(`[data-view="${view}"]`).click();
        await expect(root.locator(`#v2-${view}-panel`)).toBeVisible();
        expect(await root.evaluate(element => element.scrollWidth <= element.clientWidth + 1)).toBe(true);
        const viewportOverflow = await root.evaluate(element => {
          const box = element.getBoundingClientRect();
          return box.left < -1 || box.right > innerWidth + 1;
        });
        expect(viewportOverflow).toBe(false);
      }
      await root.locator('[data-view="learn"]').click();
      await root.locator('[data-next-lesson]').click();
      await expect(root.locator('[data-lesson]').nth(1)).toHaveAttribute('aria-current', 'step');
      await expect(root.locator('#v2-lesson-title')).toBeFocused();
      await root.locator('.v2-disclosure-summary').click();
      await expect(root.locator('#v2-lesson-list')).toBeHidden();
      expect((await root.boundingBox()).height).toBeLessThanOrEqual(120);
      await root.locator('.v2-disclosure-summary').click();
      await root.locator('[data-legacy]').click();
      const legacy = page.locator(['farmakologie', 'derma', 'radiolka'].includes(subject) ? '#cards-grid' : '#modules-grid');
      await expect(legacy).toBeVisible();
      expect(await legacy.locator(':scope > *').count()).toBeGreaterThan(5);
      expect(errors).toEqual([]);
    });
  }
}

test('self-assessment, last lesson, filters and deep links persist without changing legacy storage', async ({ page }) => {
  await openCourse(page, 'neuro');
  const oldState = () => page.evaluate(() => Object.fromEntries(Object.entries(localStorage).filter(([key]) => !key.startsWith('ctvrtak-v2:'))));
  const before = await oldState();
  await page.locator('[data-rating="review"]').click();
  await page.locator('[data-next-lesson]').click();
  await page.locator('[data-rating="understood"]').click();
  await expect(page.locator('#v2-progress')).toHaveAttribute('value', '1');
  expect(await oldState()).toEqual(before);
  await openCourse(page, 'neuro');
  await expect(page.locator('[data-lesson="zorne-pole"]')).toHaveAttribute('aria-current', 'step');
  await expect(page.locator('[data-rating="understood"]')).toHaveAttribute('aria-pressed', 'true');
  await page.locator('#v2-only-review').check();
  await expect(page.locator('[data-lesson]')).toHaveCount(1);
  await page.locator('#v2-only-review').uncheck();
  await page.locator('#v2-search').fill('chiasmatu');
  await expect(page.locator('[data-lesson="zorne-pole"]')).toBeVisible();
  await page.locator('#v2-search').fill('neexistujicipojem');
  await expect(page.locator('.v2-empty')).toBeVisible();
  await page.locator('#v2-search').fill('');
  await page.locator('[data-lesson="motorika"]').click();
  await page.locator('[data-lesson="akutni-deficit"]').click();
  await page.goBack();
  await expect(page.locator('[data-lesson="motorika"]')).toHaveAttribute('aria-current', 'step');
  await openCourse(page, 'neuro', '#v2-zorne-pole');
  await expect(page.locator('[data-lesson="zorne-pole"]')).toHaveAttribute('aria-current', 'step');
  await openCourse(page, 'psych');
  await expect(page.locator('#v2-progress')).toHaveAttribute('value', '0');
  await expect(page.locator('#v2-lab-panel')).toHaveCount(0);
});

test('corrupt and unavailable v2 storage shows an explicit warning and keeps lessons usable', async ({ page }) => {
  await page.addInitScript(() => {
    localStorage.setItem('ctvrtak-v2:neuro', '{"broken":true}');
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = function (key, value) {
      if (key.startsWith('ctvrtak-v2:')) throw new DOMException('Quota exceeded', 'QuotaExceededError');
      return original.call(this, key, value);
    };
  });
  await openCourse(page, 'neuro');
  await expect(page.locator('.v2-storage-warning')).toContainText('nepodařilo načíst');
  await page.locator('[data-rating="review"]').click();
  await expect(page.locator('.v2-storage-warning')).toContainText('neukládá');
  await expect(page.locator('[data-rating="review"]')).toHaveAttribute('aria-pressed', 'true');
});

test('receptor lab updates curve, parameters, keyboard controls and reset', async ({ page }) => {
  await openCourse(page, 'farmakologie', '#v2-lab');
  await expect(page.locator('#v2-receptor-result')).toContainText('Účinek 50');
  await expect(page.locator('#v2-antagonist')).toBeDisabled();
  const baseline = await page.locator('#v2-active-curve').getAttribute('d');
  await page.locator('#v2-receptor-mode').selectOption('competitive');
  await expect(page.locator('#v2-receptor-result')).toContainText('EC50 20');
  expect(await page.locator('#v2-active-curve').getAttribute('d')).not.toBe(baseline);
  await page.locator('#v2-antagonist').focus();
  await page.keyboard.press('End');
  await expect(page.locator('#v2-antagonist')).toHaveValue('5');
  await expect(page.locator('#v2-receptor-result')).toContainText('EC50 60');
  await page.locator('#v2-receptor-mode').selectOption('noncompetitive');
  await expect(page.locator('#v2-receptor-result')).toContainText('Emax 16,7');
  await page.locator('#v2-receptor-mode').selectOption('partial');
  await expect(page.locator('#v2-receptor-result')).toContainText('Emax 40');
  await page.locator('[data-reset]').click();
  await expect(page.locator('#v2-active-curve')).toHaveAttribute('d', baseline);
  await expect(page.locator('#v2-concentration')).toHaveValue('1');
});

test('cardiac output scenarios calculate values and reject impossible input visibly', async ({ page }) => {
  await openCourse(page, 'kardio', '#v2-lab');
  await expect(page.locator('#v2-heart-result')).toContainText('84 ml · EF 60 % · Výdej 5,88 l/min');
  await page.getByRole('button', { name: 'Malá komora, stejná EF', exact: true }).click();
  await expect(page.locator('#v2-heart-result')).toContainText('42 ml · EF 60 % · Výdej 2,94 l/min');
  await setRange(page, '#v2-esv', 200);
  await expect(page.locator('#v2-heart-result')).toContainText('ESV musí být menší');
  await expect(page.locator('#v2-lab svg')).toBeHidden();
  await page.locator('[data-reset]').click();
  await expect(page.locator('#v2-lab svg')).toBeVisible();
  await expect(page.locator('#v2-heart-result')).toContainText('5,88 l/min');
  await page.locator('#v2-rate').focus();
  await page.keyboard.press('ArrowRight');
  await expect(page.locator('#v2-rate-value')).toHaveText('71 /min');
});

test('CT presets remap identical HU data and sliders support keyboard extrema', async ({ page }) => {
  await openCourse(page, 'radiolka', '#v2-lab');
  const before = await page.locator('svg [data-hu="65"]').getAttribute('fill');
  await page.getByRole('button', { name: 'Mozkové okno', exact: true }).click();
  await expect(page.locator('#v2-window-result')).toContainText('Černá ≤ 0 HU · Bílá ≥ 80 HU');
  expect(await page.locator('svg [data-hu="65"]').getAttribute('fill')).not.toBe(before);
  await expect(page.locator('[data-gray="35"]')).toHaveText('Odstín 112 / 255');
  await expect(page.locator('[data-gray="65"]')).toHaveText('Odstín 207 / 255');
  await page.locator('#v2-window-width').focus();
  await page.keyboard.press('Home');
  await expect(page.locator('#v2-window-width')).toHaveValue('1');
  await page.locator('#v2-window-level').focus();
  await page.keyboard.press('Home');
  await expect(page.locator('[data-gray="35"]')).toHaveText('Odstín 255 / 255');
  await expect(page.locator('[data-gray="65"]')).toHaveText('Odstín 255 / 255');
  await page.locator('[data-reset]').click();
  await expect(page.locator('#v2-window-width')).toHaveValue('400');
});

test('visual pathways shade the correct quadrants for both lesion sides', async ({ page }) => {
  await openCourse(page, 'neuro', '#v2-lab');
  await expect(page.locator('[data-eye="0"][data-lost="true"]')).toHaveCount(4);
  await expect(page.locator('[data-eye="1"][data-lost="true"]')).toHaveCount(0);
  await page.locator('#v2-vision-site').selectOption('temporal');
  await expect(page.locator('#v2-vision-result')).toHaveText('Pravostranná homonymní horní kvadrantanopsie');
  await expect(page.locator('[data-lost="true"][data-quadrant="1"]')).toHaveCount(2);
  await page.getByRole('radio', { name: 'Pravá', exact: true }).check();
  await expect(page.locator('[data-lost="true"][data-quadrant="0"]')).toHaveCount(2);
  await page.locator('#v2-vision-site').selectOption('chiasm');
  await expect(page.getByRole('radio', { name: 'Pravá', exact: true })).toBeDisabled();
  await expect(page.locator('#v2-vision-result')).toHaveText('Bitemporální hemianopsie');
  await page.locator('[data-reset]').click();
  await expect(page.getByRole('radio', { name: 'Levá', exact: true })).toBeEnabled();
  await expect(page.locator('#v2-vision-site')).toHaveValue('nerve');
});

test('all three dermatology cases disclose steps only after a decision and can be replayed', async ({ page }) => {
  await openCourse(page, 'derma', '#v2-lab');
  for (const [caseIndex, correct] of [[0, [0, 1, 2]], [1, [1, 2, 0]], [2, [1, 2, 0]]]) {
    await page.locator('#v2-skin-case').selectOption(String(caseIndex));
    for (const answer of correct) {
      await expect(page.locator('[data-next]')).toBeDisabled();
      await page.locator(`[data-answer="${answer}"]`).click();
      await expect(page.locator('.v2-case-feedback')).toContainText('Správně.');
      await expect(page.locator('[data-answer]').first()).toBeDisabled();
      await page.locator('[data-next]').click();
    }
    await expect(page.locator('.v2-case-summary h4')).toHaveText('3 / 3 rozhodnutí správně');
  }
  await page.locator('[data-restart]').click();
  await page.locator('[data-answer="0"]').click();
  await expect(page.locator('.v2-case-feedback')).toContainText('Vhodnější odpověď:');
  await page.locator('#v2-skin-case').selectOption('0');
  await expect(page.locator('[data-next]')).toBeDisabled();
  await expect(page.locator('.v2-case-feedback')).toBeEmpty();
});

test('theme switches affect the new panel and Spanish original content remains available', async ({ page }) => {
  for (const subject of subjects) {
    await openCourse(page, subject);
    const background = () => page.locator('#study-v2').evaluate(element => getComputedStyle(element).backgroundColor);
    const before = await background();
    await page.locator('#theme-toggle').click();
    expect(await background(), subject).not.toBe(before);
    await page.locator('#theme-toggle').click();
    expect(await background(), subject).toBe(before);
  }
  await openCourse(page, 'kardio');
  await page.locator('#portal-lang-es').click();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
  await expect(page.locator('#study-v2')).toHaveAttribute('lang', 'cs');
  await expect(page.locator('#portal-brand-title')).toHaveText('Cardiología');
});

test('new keyboard controls do not trigger the old cardiac flashcards', async ({ page }) => {
  await openCourse(page, 'kardio');
  await page.locator('#start-all-sr-btn').click();
  const before = await page.evaluate(() => localStorage.getItem('kardio_leitner_v1'));
  await page.locator('[data-view="lab"]').click();
  await page.locator('#v2-rate').focus();
  await page.keyboard.press('2');
  expect(await page.evaluate(() => localStorage.getItem('kardio_leitner_v1'))).toBe(before);
  await page.locator('[data-legacy]').click();
  await expect(page.locator('#modules-view')).toBeVisible();
});

test('the hub advertises exactly the six fourth-year updates and still navigates', async ({ page }) => {
  await page.goto('/index.html');
  await page.locator('.grade-card[data-grade="4"]').click();
  await expect(page.locator('.year-v2-badge:visible')).toHaveCount(6);
  for (const badge of await page.locator('.year-v2-badge').all()) await expect(badge).toHaveText('4. ročník');
  await page.locator('#subject-neurologie').click();
  await expect(page.locator('#study-v2')).toHaveAttribute('data-ready', 'true');
  await expect(page.locator('#study-v2')).toHaveAttribute('data-subject', 'neuro');
});

test('all 36 lessons can be read, self-assessed and restored at the last lesson', async ({ page }) => {
  test.setTimeout(60000);
  for (const subject of subjects) {
    await openCourse(page, subject);
    for (let index = 0; index < 6; index++) {
      await expect(page.locator('#v2-lesson h3')).not.toBeEmpty();
      await page.locator('#v2-answer summary').click();
      await expect(page.locator('#v2-answer p')).toBeVisible();
      await page.locator('[data-rating="understood"]').click();
      await expect(page.locator('#v2-progress')).toHaveAttribute('value', String(index + 1));
      if (index < 5) await page.locator('[data-next-lesson]').click();
    }
    await expect(page.locator('[data-next-lesson]')).toBeDisabled();
    const title = await page.locator('#v2-lesson-title').textContent();
    await openCourse(page, subject);
    await expect(page.locator('#v2-progress')).toHaveAttribute('value', '6');
    await expect(page.locator('#v2-lesson-title')).toHaveText(title);
  }
});

test('new content and lab do not depend on third-party scripts or fonts', async ({ context, page }) => {
  await context.route('https://**/*', route => route.abort());
  await openCourse(page, 'farmakologie', '#v2-lab');
  await page.locator('#v2-receptor-mode').selectOption('partial');
  await expect(page.locator('#v2-receptor-result')).toContainText('Emax 40');
  await page.locator('[data-view="learn"]').click();
  await page.locator('[data-next-lesson]').click();
  await expect(page.locator('#v2-lesson-title')).toHaveText('Dávka → expozice → odpověď');
});
