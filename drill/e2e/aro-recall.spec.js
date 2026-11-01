const {test,expect}=require('@playwright/test');
test.beforeEach(async({context})=>{await context.route('https://fonts.googleapis.com/**',r=>r.abort());await context.route('https://fonts.gstatic.com/**',r=>r.abort());});
async function start(page,type,topic){await page.goto('/aro/#recall');if(!(await page.locator('#recall-type').isVisible()))await page.locator('#recall-settings > summary').click();await page.locator('#recall-type').selectOption(type);if(topic)await page.locator('#recall-topic').selectOption(topic);await page.locator('#recall-start').click();}
test('Preparation strips are collapsed above the answer; notes still persist',async({page})=>{
 await page.goto('/aro/#A09');await expect(page.locator('.topic-tools .compact-strip')).toHaveCount(2);
 await expect(page.locator('#topic-view .outline')).toBeHidden();await expect(page.locator('#topic-view textarea')).toBeHidden();
 expect(await page.locator('.topic-tools').evaluate(el=>Boolean(el.compareDocumentPosition(document.querySelector('.topic-reading'))&Node.DOCUMENT_POSITION_FOLLOWING))).toBe(true);
 await page.locator('#my-preparation summary').click();await page.locator('#topic-view textarea').fill('Moje poznámka zůstává');await page.reload();
 await expect(page.locator('#topic-view textarea')).toBeHidden();await page.locator('#my-preparation summary').click();await expect(page.locator('#topic-view textarea')).toHaveValue('Moje poznámka zůstává');
 await page.getByRole('link',{name:'Procvičit A09 bez nápovědy →'}).click();await expect(page.locator('#recall-topic')).toHaveValue('A09');
});
test('Single choice requires a response, hides explanation, scores once and persists result',async({page})=>{
 await start(page,'choice','A22');await expect(page.locator('.choice-option')).toHaveCount(4);await expect(page.locator('.recall-feedback')).toHaveCount(0);
 await page.getByRole('button',{name:'Zkontrolovat',exact:true}).click();await expect(page.locator('#recall-validation')).toContainText('Nejdřív');
 await page.getByRole('radio',{name:/13$/}).check();await page.getByRole('button',{name:'Zkontrolovat',exact:true}).click();await expect(page.locator('.recall-feedback')).toContainText('E3 + V4 + M6 = 13');
 await expect(page.locator('.choice-options input').first()).toBeDisabled();await page.locator('[data-recall-action="next"]').click();await expect(page.locator('#recall-play')).toContainText('1 z 1');
 await page.reload();await expect(page.locator('#recall-history')).toContainText('Vyzkoušeno 1 ze 120');
});
test('Short answer accepts synonyms, typos, refuses a different drug and supports explicit manual review',async({page})=>{
 await start(page,'short','B04');await page.locator('#recall-response').fill('epinefrin');await page.getByRole('button',{name:'Zkontrolovat',exact:true}).click();await expect(page.locator('.recall-feedback h4')).toHaveText('Správně');
 await start(page,'short','B04');await page.locator('#recall-response').fill('adrnealin');await page.getByRole('button',{name:'Zkontrolovat',exact:true}).click();await expect(page.locator('.recall-feedback')).toContainText('drobný překlep');
 await start(page,'short','B04');await page.locator('#recall-response').fill('noradrenalin');await page.getByRole('button',{name:'Zkontrolovat',exact:true}).click();await expect(page.locator('.recall-feedback h4')).toHaveText('Porovnej svou odpověď');
 await start(page,'short','B04');await page.locator('#recall-response').fill('adrenalin do svalu');await page.getByRole('button',{name:'Zkontrolovat',exact:true}).click();await page.locator('[data-recall-action="manual"]').click();await expect(page.locator('.recall-feedback h4')).toHaveText('Ručně uznáno');await page.locator('[data-recall-action="next"]').click();await expect(page.locator('#recall-play')).toContainText('1 ručně uznaných');
});
test('Case steps hide later information and require self assessment before continuing',async({page})=>{
 await start(page,'case','B04');await expect(page.locator('#recall-play')).not.toContainText('0,5 mg');await expect(page.locator('#recall-play')).not.toContainText('Náhlé zhoršení po expozici');
 await page.locator('#recall-response').fill('ABCDE a léčba');await page.getByRole('button',{name:'Porovnat s řešením'}).click();await expect(page.locator('[data-recall-action="next"]')).toBeDisabled();
 await page.locator('[data-case-grade="partial"]').click();await page.locator('[data-recall-action="next"]').click();await expect(page.locator('#recall-play')).toContainText('KROK 2 / 3');await expect(page.locator('#recall-play')).not.toContainText('0,5 mg');
 await page.locator('[data-recall-action="skip"]').click();await expect(page.locator('.recall-feedback')).toContainText('0,5 ml');await page.locator('[data-case-grade="repeat"]').click();await page.locator('[data-recall-action="next"]').click();
 await page.locator('[data-recall-action="skip"]').click();await page.locator('[data-case-grade="ready"]').click();await page.locator('[data-recall-action="next"]').click();await expect(page.locator('#recall-play')).toContainText('1 kazuistik');await expect(page.locator('#recall-play')).toContainText('zopakovat');
 await page.locator('[data-recall-action="retry"]').click();await expect(page.locator('#recall-position')).toContainText('1 / 1');await expect(page.locator('#recall-play')).toContainText('KROK 1 / 3');
});
test('Empty topic intersection is explained; skipped single choice can be retried',async({page})=>{
 await start(page,'case','A01');await expect(page.locator('#recall-play')).toContainText('nejsou úlohy');
 await page.locator('#recall-type').selectOption('choice');await page.locator('#recall-start').click();await page.locator('[data-recall-action="skip"]').click();await expect(page.locator('[data-recall-action="manual"]')).toHaveCount(0);await page.locator('[data-recall-action="next"]').click();await page.locator('[data-recall-action="retry"]').click();await expect(page.locator('#recall-position')).toContainText('1 / 1');
});
test('Recall works with blocked storage and escapes answers',async({page})=>{
 await page.addInitScript(()=>{Storage.prototype.setItem=()=>{throw Error('blocked')};});await start(page,'short','A01');await page.locator('#recall-response').fill('<script>bad()</script>');await page.getByRole('button',{name:'Zkontrolovat',exact:true}).click();await expect(page.locator('#recall-storage')).toContainText('nelze uložit');await expect(page.locator('#recall-play script')).toHaveCount(0);await page.locator('[data-recall-action="next"]').click();await expect(page.locator('#recall-finish')).toBeVisible();
});
for(const width of [320,390,1440])test(`Recall fits ${width}px in all modes and feedback`,async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.setViewportSize({width,height:900});
 for(const type of ['choice','short','case']){await start(page,type,'B04');expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);await page.locator('[data-recall-action="skip"]').click();expect(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth)).toBe(true);}
 expect(errors).toEqual([]);
});
