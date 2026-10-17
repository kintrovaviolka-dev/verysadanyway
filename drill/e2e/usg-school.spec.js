const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ context }) => {
  await context.route('https://**/*', (route) => route.abort());
  await context.route('**/api/lan-ip', (route) => route.fulfill({
    json: { ip: '127.0.0.1', port: 4173 }
  }));
});

async function openStation(page) {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/usg-school/');
  await expect(page.locator('#accuracyMeter')).toHaveAttribute('aria-valuenow', '100');
  expect(errors).toEqual([]);
}

async function dragCanvas(page, dx, dy) {
  const box = await page.locator('#usgCanvas').boundingBox();
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  await page.mouse.move(x, y);
  await page.mouse.down();
  await page.mouse.move(x + dx, y + dy);
  await page.mouse.up();
}

for (const viewport of [
  { width: 1440, height: 900 },
  { width: 1024, height: 768 },
  { width: 768, height: 1024 },
  { width: 390, height: 844 },
  { width: 320, height: 568 },
  { width: 844, height: 390 }
]) {
  test(`station fits ${viewport.width}x${viewport.height} and keeps controls reachable`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await openStation(page);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    await page.getByRole('button', { name: /Zmrazit obraz/ }).click();
    await expect(page.locator('#scanState')).toHaveText('Zmrazeno');
    await page.getByRole('button', { name: /Perikardiální výpotek/ }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('Perikardiální výpotek');
    await page.getByRole('button', { name: 'Telefon jako sonda', exact: true }).click();
    await expect(page.locator('#phonePanel')).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    for (const id of ['stationFreezeBtn', 'calibrateBtn', 'phoneModeBtn', 'copyProbeUrlBtn']) {
      const box = await page.locator(`#${id}`).boundingBox();
      expect(box.height).toBeGreaterThanOrEqual(44);
      expect(box.width).toBeGreaterThanOrEqual(44);
    }
  });
}

test('keyboard, sliders and repeated pointer drags retain the chosen angles', async ({ page }) => {
  await openStation(page);
  const canvas = page.locator('#usgCanvas');
  await canvas.focus();
  await canvas.press('ArrowDown');
  await canvas.press('ArrowRight');
  await canvas.press('d');
  await expect(page.locator('#pitchSlider')).toHaveValue('1');
  await expect(page.locator('#rollSlider')).toHaveValue('1');
  await expect(page.locator('#yawSlider')).toHaveValue('1');
  await canvas.press('r');
  await dragCanvas(page, 40, 20);
  await expect(page.locator('#rollSlider')).toHaveValue('6');
  await expect(page.locator('#pitchSlider')).toHaveValue('3');
  await dragCanvas(page, 20, 20);
  await expect(page.locator('#rollSlider')).toHaveValue('9');
  await expect(page.locator('#pitchSlider')).toHaveValue('6');
  await expect(page.locator('#yawSlider')).toHaveValue('0');
  await page.locator('#pitchSlider').focus();
  await page.locator('#pitchSlider').press('End');
  await expect(page.locator('#valPitch')).toHaveText('25.0°');
  await page.locator('#stationGain').focus();
  await page.locator('#stationGain').press('End');
  await expect(page.locator('#stationGainValue')).toHaveText('80 dB');
  await expect(page.locator('#gainDisplay')).toHaveText('Gain 80 dB');
  await canvas.focus();
  await canvas.press('r');
  await expect(page.locator('#pitchSlider')).toHaveValue('0');
  await dragCanvas(page, 20, 0);
  await expect(page.locator('#rollSlider')).toHaveValue('3');
});

test('freeze stops the image and ECG without trapping keyboard navigation', async ({ page, browserName }) => {
  await openStation(page);
  await page.locator('#usgCanvas').focus();
  await page.locator('#usgCanvas').press('f');
  await expect(page.locator('#stationFreezeBtn')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#pitchSlider')).toBeDisabled();
  const snapshot = () => page.evaluate(() => ({
    image: document.getElementById('usgCanvas').toDataURL(),
    ecg: document.getElementById('ecgCanvas').toDataURL()
  }));
  const before = await snapshot();
  await page.waitForTimeout(200);
  expect(await snapshot()).toEqual(before);
  // WebKit on macOS uses Option-Tab to include buttons in keyboard traversal.
  await page.locator('#usgCanvas').press(browserName === 'webkit' ? 'Alt+Tab' : 'Tab');
  await expect(page.locator('#stationFreezeBtn')).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('#scanState')).toHaveText('Živý obraz');
  await expect(page.locator('#pitchSlider')).toBeEnabled();
});

test('canvas follows responsive size and an expanded orientation panel', async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 800 });
  await openStation(page);
  await page.setViewportSize({ width: 390, height: 844 });
  await expect.poll(() => page.evaluate(() => {
    const canvas = document.getElementById('usgCanvas');
    return canvas.width === Math.round(canvas.clientWidth * Math.min(devicePixelRatio, 2));
  })).toBe(true);
  await page.getByText('Prostorová orientace sondy', { exact: true }).click();
  await expect.poll(() => page.locator('#gizmoCanvas').evaluate((canvas) => canvas.width)).toBeGreaterThan(0);
});

test('station can be operated by actual touch gestures', async ({ browser, browserName }) => {
  test.skip(browserName !== 'chromium', 'Native touch dragging uses the Chromium DevTools protocol.');
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  await context.route('https://**/*', (route) => route.abort());
  await context.route('**/api/lan-ip', (route) => route.fulfill({ json: { ip: '127.0.0.1' } }));
  const page = await context.newPage();
  await page.goto('http://127.0.0.1:4173/usg-school/');
  const box = await page.locator('#usgCanvas').boundingBox();
  const client = await context.newCDPSession(page);
  const x = box.x + box.width / 2;
  const y = box.y + box.height / 2;
  await client.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
  await client.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x + 40, y: y + 40 }] });
  await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect(page.locator('#valPitch')).toHaveText('6.0°');
  await expect(page.locator('#valRoll')).toHaveText('6.0°');
  await context.close();
});

for (const viewport of [{ width: 320, height: 568 }, { width: 390, height: 844 }, { width: 844, height: 390 }]) {
  test(`phone supports touch controls and page scrolling at ${viewport.width}x${viewport.height}`, async ({ page }) => {
    await page.setViewportSize(viewport);
    await page.goto('/usg-school/probe.html');
    await expect(page.locator('#probeMessage')).toContainText('Chybí kód místnosti');
    await page.getByRole('button', { name: 'Použít dotyk', exact: true }).click();
    await expect(page.locator('#permissionOverlay')).toBeHidden();
    await expect(page.locator('#visualizerArea')).toBeFocused();
    await page.locator('#visualizerArea').press('ArrowDown');
    await expect(page.locator('#lblPitch')).toHaveText('1.0°');
    await page.locator('#probeYaw').focus();
    await page.locator('#probeYaw').press('End');
    await expect(page.locator('#lblYaw')).toHaveText('25.0°');
    await page.getByRole('button', { name: 'Kalibrovat 0°' }).click();
    await expect(page.locator('#lblPitch')).toHaveText('0.0°');
    await expect(page.locator('#lblYaw')).toHaveText('0.0°');
    await page.getByRole('button', { name: /Zmrazit obraz/ }).click();
    await expect(page.locator('#probeFreezeBtn')).toHaveAttribute('aria-pressed', 'true');
    await page.getByRole('link', { name: 'Zpět k simulátoru', exact: true }).scrollIntoViewIfNeeded();
    expect(await page.evaluate(() => scrollY > 0)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
    expect(await page.evaluate(() => getComputedStyle(document.body).touchAction)).toBe('auto');
    expect(await page.evaluate(() => document.querySelector('meta[name="viewport"]').content)).not.toContain('user-scalable=no');
  });
}

test('phone permission failure selects a usable touch mode', async ({ page }) => {
  await page.addInitScript(() => {
    window.DeviceOrientationEvent = class {
      static requestPermission() { return Promise.reject(new Error('Permission unavailable')); }
    };
  });
  await page.goto('/usg-school/probe.html');
  await page.getByRole('button', { name: 'Povolit gyroskop' }).click();
  await expect(page.locator('#inputModeLabel')).toHaveText('DOTYKOVÉ OVLÁDÁNÍ');
  await expect(page.locator('#probeMessage')).toContainText('Gyroskop se nepodařilo aktivovat');
  await page.locator('#visualizerArea').press('ArrowRight');
  await expect(page.locator('#lblRoll')).toHaveText('1.0°');
});

test('touch mode ignores orientation events and a silent sensor falls back visibly', async ({ page }) => {
  await page.addInitScript(() => {
    window.DeviceOrientationEvent = class {
      static requestPermission() { return Promise.resolve('granted'); }
    };
  });
  await page.goto('/usg-school/probe.html');
  await page.getByRole('button', { name: 'Povolit gyroskop' }).click();
  await expect(page.locator('#inputModeLabel')).toHaveText('GYROSKOP AKTIVNÍ');
  await expect(page.locator('#inputModeLabel')).toHaveText('DOTYKOVÉ OVLÁDÁNÍ', { timeout: 5000 });
  await expect(page.locator('#probeMessage')).toContainText('Senzor neposílá data');
  await page.locator('#visualizerArea').press('ArrowRight');
  await page.evaluate(() => {
    const event = new Event('deviceorientation');
    Object.assign(event, { alpha: 10, beta: 30, gamma: 20 });
    window.dispatchEvent(event);
  });
  await expect(page.locator('#lblRoll')).toHaveText('1.0°');
});

test('absolute orientation can drive the probe without mixing sensor sources', async ({ page }) => {
  await page.addInitScript(() => {
    window.DeviceOrientationEvent = class {
      static requestPermission() { return Promise.resolve('granted'); }
    };
  });
  await page.goto('/usg-school/probe.html');
  await page.getByRole('button', { name: 'Povolit gyroskop' }).click();
  await page.evaluate(() => {
    const dispatch = (type, alpha, beta, gamma) => {
      const event = new Event(type);
      Object.assign(event, { alpha, beta, gamma });
      window.dispatchEvent(event);
    };
    dispatch('deviceorientationabsolute', 359, 10, 10);
    dispatch('deviceorientationabsolute', 1, 12, 13);
    dispatch('deviceorientation', 180, 60, 60);
  });
  await expect(page.locator('#lblPitch')).toHaveText('2.0°');
  await expect(page.locator('#lblRoll')).toHaveText('3.0°');
  await expect(page.locator('#lblYaw')).toHaveText('2.0°');
  await page.getByRole('button', { name: 'Kalibrovat 0°' }).click();
  await expect(page.locator('#lblPitch')).toHaveText('0.0°');
  await page.getByRole('button', { name: 'Změnit režim' }).click();
  await page.getByRole('button', { name: 'Použít dotyk', exact: true }).click();
  await expect(page.locator('#inputModeLabel')).toHaveText('DOTYKOVÉ OVLÁDÁNÍ');
});

test('controls synchronize both ways and rooms remain isolated', async ({ page, context }) => {
  await openStation(page);
  await page.getByRole('button', { name: 'Telefon jako sonda', exact: true }).click();
  const room = await page.locator('#roomIdBadge').textContent();
  const other = await context.newPage();
  await openStation(other);
  await other.getByRole('button', { name: 'Telefon jako sonda', exact: true }).click();
  const probe = await context.newPage();
  await probe.goto(`/usg-school/probe.html?room=${room}`);
  await probe.getByRole('button', { name: 'Použít dotyk', exact: true }).click();
  await probe.locator('#visualizerArea').press('ArrowDown');
  await expect(page.locator('#valPitch')).toHaveText('1.0°');
  await expect(page.locator('#connStatusText')).toHaveText('Sonda dostupná v tomto prohlížeči');
  await expect(probe.locator('#probeConnText')).toHaveText('Monitor v tomto prohlížeči');
  await expect(other.locator('#valPitch')).toHaveText('0.0°');
  await page.getByRole('button', { name: /Zmrazit obraz/ }).click();
  await expect(probe.locator('#probeFreezeBtn')).toHaveAttribute('aria-pressed', 'true');
  await probe.getByRole('button', { name: /Obnovit obraz/ }).click();
  await expect(page.locator('#scanState')).toHaveText('Živý obraz');
  await probe.getByRole('button', { name: '02 · Výpotek' }).click();
  await expect(page.locator('#caseEffusion')).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('#activeCaseTitle')).toHaveText('Perikardiální výpotek');
  await expect(other.locator('#casePhys')).toHaveAttribute('aria-pressed', 'true');
  await page.locator('#stationGain').focus();
  await page.locator('#stationGain').press('End');
  await expect(probe.locator('#gainValText')).toHaveText('80 dB');
  await page.getByRole('button', { name: 'Kalibrovat 0°' }).click();
  await expect(probe.locator('#lblPitch')).toHaveText('0.0°');
  await page.getByRole('button', { name: 'Na tomto zařízení' }).click();
  await page.locator('#usgCanvas').focus();
  await page.locator('#usgCanvas').press('ArrowDown');
  await probe.locator('#visualizerArea').focus();
  await probe.locator('#visualizerArea').press('ArrowDown');
  await probe.locator('#visualizerArea').press('ArrowDown');
  await expect(page.locator('#valPitch')).toHaveText('1.0°');
  await other.close();
  await probe.close();
});

test('unavailable clipboard and QR library expose a usable direct link', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: () => Promise.reject(new Error('Clipboard denied')) }
    });
  });
  await openStation(page);
  await page.getByRole('button', { name: 'Telefon jako sonda', exact: true }).click();
  await expect(page.locator('#qrcode')).toContainText('Použijte odkaz níže');
  await page.getByRole('button', { name: 'Kopírovat odkaz na sondu' }).click();
  await expect(page.locator('#copyStatus')).toContainText('Kopírování není dostupné');
  await expect(page.locator('#probeDirectUrlText')).toHaveAttribute('href', /probe\.html\?room=usg-/);
});
