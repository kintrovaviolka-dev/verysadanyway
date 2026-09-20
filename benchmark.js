const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const dir = path.join(__dirname, 'temp_bench');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const numFiles = 100;
const buffer = Buffer.alloc(1024 * 1024); // 1MB buffer

async function benchmarkSync() {
  const start = performance.now();
  let lag = 0;

  const timer = setInterval(() => {
    // This timer shouldn't be delayed much if we are async
  }, 10);

  let maxLag = 0;
  let lastCheck = performance.now();

  const lagInterval = setInterval(() => {
    const current = performance.now();
    const currentLag = current - lastCheck - 10;
    if (currentLag > maxLag) maxLag = currentLag;
    lastCheck = current;
  }, 10);

  for (let i = 0; i < numFiles; i++) {
    fs.writeFileSync(path.join(dir, `sync_${i}.bin`), buffer);
  }

  clearInterval(timer);
  clearInterval(lagInterval);

  return { time: performance.now() - start, maxLag };
}

async function benchmarkAsync() {
  const start = performance.now();
  let lag = 0;

  let maxLag = 0;
  let lastCheck = performance.now();

  const lagInterval = setInterval(() => {
    const current = performance.now();
    const currentLag = current - lastCheck - 10;
    if (currentLag > maxLag) maxLag = currentLag;
    lastCheck = current;
  }, 10);

  for (let i = 0; i < numFiles; i++) {
    await fs.promises.writeFile(path.join(dir, `async_${i}.bin`), buffer);
  }

  clearInterval(lagInterval);

  return { time: performance.now() - start, maxLag };
}

async function run() {
  console.log('Running Sync Benchmark...');
  const syncRes = await benchmarkSync();
  console.log(`Sync: time = ${syncRes.time.toFixed(2)}ms, max event loop lag = ${syncRes.maxLag.toFixed(2)}ms`);

  console.log('Running Async Benchmark...');
  const asyncRes = await benchmarkAsync();
  console.log(`Async: time = ${asyncRes.time.toFixed(2)}ms, max event loop lag = ${asyncRes.maxLag.toFixed(2)}ms`);

  // Cleanup
  fs.readdirSync(dir).forEach(file => fs.unlinkSync(path.join(dir, file)));
  fs.rmdirSync(dir);
}

run();
