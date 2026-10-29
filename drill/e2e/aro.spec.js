const {test,expect}=require('@playwright/test');
test.beforeEach(async({context})=>{
  await context.route('https://fonts.googleapis.com/**',r=>r.abort());
  await context.route('https://fonts.gstatic.com/**',r=>r.abort());
});
for(const width of [1440,390,320])test(`ARO fits ${width}px, including question and exam`,async({page})=>{
  const errors=[];page.on('pageerror',e=>errors.push(e.message));
  await page.setViewportSize({width,height:900});await page.goto('/aro/');
  await expect(page.locator('.question-card')).toHaveCount(55);
  await page.screenshot({path:`/tmp/aro-${width}.png`,fullPage:false});
  for(const hash of ['#A17','#exam','#sources']){
    await page.evaluate(h=>location.hash=h,hash);
    await expect(page.locator(hash==='#A17'?'#topic-view':hash==='#exam'?'#exam-view':'#sources-view')).toBeVisible();
    if(hash==='#exam')await page.locator('#draw').click();
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  }
  expect(errors).toEqual([]);
});
test('Search, note persistence, safe rendering, rating and export',async({page})=>{
  await page.goto('/aro/');await page.locator('#search').fill('PONV');await expect(page.locator('.question-card')).toHaveCount(2);
  await page.locator('.question-card').first().click();
  const note=page.locator('#topic-view textarea');await note.fill('<script>alert(1)</script> Moje osnova');
  await page.locator('#topic-view [data-rate="repeat"]').click();await page.reload();
  await expect(page.locator('#topic-view textarea')).toHaveValue('<script>alert(1)</script> Moje osnova');
  await expect(page.locator('#topic-view [data-rate="repeat"]')).toHaveAttribute('aria-pressed','true');
  await expect(page.locator('#repeat-count')).toHaveText('1');
  await page.locator('.back').click();await page.locator('#filter').selectOption('repeat');await expect(page.locator('.question-card')).toHaveCount(1);
  const download=page.waitForEvent('download');await page.locator('#export').click();expect((await download).suggestedFilename()).toBe('aro-moje-priprava.md');
});
test('Exam draws one from each group, hides help, retains notes and runs a pausable clock',async({page})=>{
  await page.clock.install();await page.goto('/aro/');await page.locator('#hero-draw').click();
  await expect(page.locator('.exam-card')).toHaveCount(2);
  await expect(page.locator('.exam-card .qid').nth(0)).toContainText(/A\d{2}/);
  await expect(page.locator('.exam-card .qid').nth(1)).toContainText(/B\d{2}/);
  await expect(page.locator('.exam-card .outline').first()).toBeHidden();
  await page.locator('.exam-card textarea').first().fill('Zkušební odpověď');
  await page.locator('.exam-card summary').first().click();await expect(page.locator('.exam-card .outline').first()).toBeVisible();
  await page.locator('#timer-toggle').click();await page.clock.fastForward(61000);await expect(page.locator('#clock')).toHaveText('08:59');
  await page.locator('#timer-toggle').click();await page.clock.fastForward(30000);await expect(page.locator('#clock')).toHaveText('08:59');
  await page.locator('#timer-toggle').click();await page.clock.fastForward(539000);await expect(page.locator('#clock')).toHaveText('00:00');await expect(page.locator('#timer-state')).toContainText('uplynul');
  await page.locator('#timer-reset').click();await expect(page.locator('#clock')).toHaveText('10:00');
  await page.locator('.exam-card > a').first().click();await expect(page.locator('#topic-view textarea')).toHaveValue('Zkušební odpověď');
});
test('Storage failure is visible and does not break study or export',async({page})=>{
  await page.addInitScript(()=>{Storage.prototype.setItem=()=>{throw new Error('blocked');};});
  await page.goto('/aro/#A01');await page.locator('#topic-view textarea').fill('Neztratit');
  await expect(page.locator('#storage-warning')).toContainText('neumožnil');
  await page.locator('#topic-view [data-rate="ready"]').click();await expect(page.locator('#ready-count')).toHaveText('1');
});
test('Theme survives reload and direct links preserve source context',async({page})=>{
  await page.goto('/aro/#A17');await page.locator('#theme').click();await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme','dark');await expect(page.locator('#topic-view h2')).toContainText('Rozšířená');
  await expect(page.locator('.lesson .sources a')).toHaveAttribute('href',/gl2025-05-als-e.pdf/);
});
test('Main hub opens ARO from fifth year by keyboard',async({page})=>{
  await page.goto('/');await page.locator('.grade-card[data-grade="5"]').click();
  await page.locator('#subject-aro').focus();await page.keyboard.press('Enter');
  await expect(page).toHaveURL(/\/aro\/index.html/);await expect(page.locator('.question-card')).toHaveCount(55);
});
test('Written answers expose sections, cited sources and hidden examiner answers on mobile',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.goto('/aro/');await expect(page.locator('#answer-count')).toHaveText('23');
  await expect(page.locator('#coverage')).toContainText('27 pracovních osnov');
  await page.locator('#filter').selectOption('answer');await expect(page.locator('.question-card')).toHaveCount(23);
  await page.locator('a.question-card[href="#A18"]').click();
  await expect(page.locator('#topic-view .badge')).toHaveText('Zpracovaná odpověď');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer')).toContainText('10–30 mikrogramů/kg');
  await expect(page.locator('#topic-view .answer-check').first().locator('p')).toBeHidden();
  await page.locator('#topic-view .answer-check').first().locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').first().locator('p')).toContainText('Účinnost ventilace');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:'/tmp/aro-answer-mobile.png',fullPage:false});
  await page.goto('/aro/#B04');await expect(page.locator('#topic-view .answer')).toContainText('0,5 ml roztoku 1 mg/ml');
  await expect(page.locator('#topic-view .answer .sources a').first()).toHaveAttribute('href',/PMC7607509/);
  await page.goto('/aro/#sources');await expect(page.locator('#sources-list a[href="#A18"]')).toBeVisible();
});
test('A drawn written answer stays concealed until reveal, then notes and ratings work',async({page})=>{
  // For each group the same random value selects A18 and B22; make A18 deterministic.
  await page.addInitScript(()=>{Math.random=()=>0.7;});
  await page.goto('/aro/');await page.locator('#hero-draw').click();
  await expect(page.locator('.exam-card').first().locator('.qid')).toContainText('A18');
  await expect(page.locator('.exam-card').first().locator('.answer')).toBeHidden();
  await page.locator('.exam-card').first().locator('summary').first().click();
  await expect(page.locator('.exam-card').first().locator('.answer')).toBeVisible();
  await page.locator('.exam-card').first().locator('[data-rate="ready"]').click();
  await expect(page.locator('#ready-count')).toHaveText('1');
});

 test('Airway answers are published with sections, sources and mobile examiner questions',async({page})=>{
  await page.setViewportSize({width:390,height:900});
  for(const id of ['A20','B30']){
    await page.goto(`/aro/#${id}`);
    await expect(page.locator('#topic-view .badge')).toHaveText('Zpracovaná odpověď');
    await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
    await expect(page.locator('#topic-view .answer-check')).toHaveCount(3);
    const check=page.locator('#topic-view .answer-check').first();
    await expect(check.locator('p')).toBeHidden();await check.locator('summary').click();
    await expect(check.locator('p')).toBeVisible();
    expect(await page.locator('#topic-view .answer-section .sources a').count()).toBeGreaterThanOrEqual(5);
    expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  }
  await page.screenshot({path:'/tmp/aro-B30-mobile.png',fullPage:false});
});

test('Complications answers keep PONV supplement and survive exam reveal with notes',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.goto('/aro/#A04');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(6);
  await expect(page.locator('#topic-view .lesson')).toHaveCount(1);
  await expect(page.locator('#topic-view .lesson')).toContainText('PONV');
  await expect(page.locator('#coverage')).toContainText('23 zpracovaných odpovědí');
  await page.goto('/aro/#A07');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(6);
  await expect(page.locator('#topic-view .lesson')).toHaveCount(0);
  await page.locator('#topic-view textarea').fill('Rozlišit LAST a vysoký blok');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.locator('#topic-view .answer-section').nth(2).scrollIntoViewIfNeeded();
  await page.screenshot({path:'/tmp/aro-LAST-mobile.png',fullPage:false});
  await page.addInitScript(()=>{Math.random=()=>0.25;});
  await page.reload();await page.locator('#hero-draw').click();
  const card=page.locator('.exam-card').first();
  await expect(card.locator('.qid')).toContainText('A07');
  await expect(card.locator('.answer')).toBeHidden();
  await card.locator('summary').first().click();
  await expect(card.locator('.answer-section')).toHaveCount(6);
  await expect(card.locator('textarea')).toHaveValue('Rozlišit LAST a vysoký blok');
});
test('Bleeding and polytrauma answers show scoped treatment and source links',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.goto('/aro/#B05');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer')).toContainText('1 g i.v. během 10 minut');
  await expect(page.locator('#topic-view .answer a[href*="flgastro-2026-103607"]').first()).toBeVisible();
  await page.goto('/aro/#B06');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer')).toContainText('xABCDE');
  await page.locator('#topic-view .answer-check').nth(1).locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').nth(1).locator('p')).toContainText('retroperitoneální');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:'/tmp/aro-trauma-mobile.png',fullPage:false});
});
test('Sepsis answer retains its supplement and antibiotic answer works in the exam',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.addInitScript(()=>{Math.random=()=>0.38;});
  await page.goto('/aro/#B11');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .lesson')).toHaveCount(1);
  await expect(page.locator('#topic-view .answer')).toContainText('laktát > 2 mmol/l');
  await expect(page.locator('#coverage')).toContainText('5 otázek s tematickým dodatkem');
  await page.goto('/aro/#B12');
  await expect(page.locator('#topic-view .answer')).toContainText('400–600 mg·h/l');
  await page.locator('#topic-view textarea').fill('Rozlišit nasycovací a udržovací dávku');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:'/tmp/aro-antibiotics-mobile.png',fullPage:false});
  await page.locator('#hero-draw').click();
  const card=page.locator('.exam-card').nth(1);
  await expect(card.locator('.qid')).toContainText('B12');
  await expect(card.locator('.answer')).toBeHidden();
  await card.locator('summary').first().click();
  await expect(card.locator('.answer-section')).toHaveCount(5);
  await expect(card.locator('textarea')).toHaveValue('Rozlišit nasycovací a udržovací dávku');
});
test('ARDS and ventilation answers show current scope and preserve mobile layout',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.goto('/aro/#B17');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer')).toContainText('HFNO ≥ 30 l/min');
  await expect(page.locator('#topic-view .answer a[href*="neuromuscular-blockade"]').first()).toBeVisible();
  await page.goto('/aro/#B18');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer')).toContainText('420 ml');
  await page.locator('#topic-view .answer-check').nth(2).locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').nth(2).locator('p')).toContainText('ochranu a očistu');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.screenshot({path:'/tmp/aro-ventilation-mobile.png',fullPage:false});
});

test('Acid-base and electrolyte answers expose worked examples and current sources',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.goto('/aro/#B19');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer')).toContainText('26 ± 2 mmHg');
  await page.locator('#topic-view .answer-check').first().locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').first().locator('p')).toContainText('24–28 mmHg');
  await page.goto('/aro/#B20');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(7);
  await expect(page.locator('#topic-view .answer')).toContainText('150 ml 3% NaCl');
  await expect(page.locator('#topic-view .answer a[href*="UPDATED%20JULY%202026"]').first()).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.locator('#topic-view .answer-section').nth(3).scrollIntoViewIfNeeded();
  await page.screenshot({path:'/tmp/aro-electrolytes-mobile.png',fullPage:false});
});

test('Nutrition and sedation answers keep sources, checks and mobile layout',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.goto('/aro/#B21');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer')).toContainText('1,3 g/kg/den');
  await expect(page.locator('#topic-view .answer a[href*="ncp.10474"]').first()).toBeVisible();
  await page.locator('#topic-view .answer-check').nth(2).locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').nth(2).locator('p')).toContainText('refeeding');
  await page.goto('/aro/#B22');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer a[href*="focused-update-padis"]').first()).toBeVisible();
  await page.locator('#topic-view .answer-check').nth(1).locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').nth(1).locator('p')).toContainText('nehodnotitelný');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.locator('#topic-view .answer-section').nth(2).scrollIntoViewIfNeeded();
  await page.screenshot({path:'/tmp/aro-sedation-mobile.png',fullPage:false});
});

test('Heart failure answers distinguish guideline versions and right ventricular volume management',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.goto('/aro/#B23');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer')).toContainText('LVEF < 50 %');
  await expect(page.locator('#topic-view .answer a[href*="ehag100"]').first()).toBeVisible();
  await page.goto('/aro/#B24');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await page.locator('#topic-view .answer-check').first().locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').first().locator('p')).toContainText('snížit výdej LK');
  await expect(page.locator('#topic-view .answer a[href*="PMC10927027"]').first()).toBeVisible();
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.locator('#topic-view .answer-section').nth(3).scrollIntoViewIfNeeded();
  await page.screenshot({path:'/tmp/aro-heart-mobile.png',fullPage:false});
});

test('PE and organ failure answers disclose guideline status and preserve mobile checks',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.goto('/aro/#B25');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer a[href*="jacc.2025.11.005"]').first()).toBeVisible();
  await page.locator('#topic-view .answer-check').first().locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').first().locator('p')).toContainText('zobrazovací diagnostiku');
  await page.goto('/aro/#B26');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(7);
  await expect(page.locator('#topic-view .answer')).toContainText('v přípravě publikace');
  await expect(page.locator('#topic-view .answer')).toContainText('26,5 µmol/l');
  await page.locator('#topic-view .answer-check').nth(2).locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').nth(2).locator('p')).toContainText('transplantologické');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.locator('#topic-view .answer-section').nth(5).scrollIntoViewIfNeeded();
  await page.screenshot({path:'/tmp/aro-organ-failure-mobile.png',fullPage:false});
});

test('Diabetology and toxicology answers expose guidelines, checks and mobile layout',async({page})=>{
  await page.setViewportSize({width:320,height:900});
  await page.goto('/aro/#B27');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer a[href*="dci23-0085"]').first()).toBeVisible();
  await expect(page.locator('#topic-view .answer')).toContainText('3,3 mmol/l');
  await page.locator('#topic-view .answer-check').first().locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').first().locator('p')).toContainText('Inzulin nezahájím');

  await page.goto('/aro/#B28');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer a[href*="tis-cz.cz"]').first()).toBeVisible();
  await page.locator('#topic-view .answer-check').first().locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').first().locator('p')).toContainText('orotracheální intubaci');

  await page.goto('/aro/#B29');
  await expect(page.locator('#topic-view .answer-section')).toHaveCount(5);
  await expect(page.locator('#topic-view .answer')).toContainText('NAPQI');
  await page.locator('#topic-view .answer-check').first().locator('summary').click();
  await expect(page.locator('#topic-view .answer-check').first().locator('p')).toContainText('ko-oxymetrií');
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);
  await page.locator('#topic-view .answer-section').nth(3).scrollIntoViewIfNeeded();
  await page.screenshot({path:'/tmp/aro-tox-mobile.png',fullPage:false});
});
