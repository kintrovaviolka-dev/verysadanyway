const fs = require('fs');
const path = require('path');
const { performance } = require('perf_hooks');

const dir = path.join(__dirname, 'temp_bench2');
if (!fs.existsSync(dir)) fs.mkdirSync(dir);

const numFiles = 50;
const buffer = Buffer.alloc(5 * 1024 * 1024); // 5MB buffer

function measureLag(durationMs, workFn) {
  return new Promise(async (resolve) => {
    let lag = 0;
    let lastCheck = performance.now();
    let maxLag = 0;
    let iterations = 0;

    const interval = setInterval(() => {
      const now = performance.now();
      const currentLag = now - lastCheck - 10;
      if (currentLag > maxLag) maxLag = currentLag;
      lastCheck = now;
      iterations++;
    }, 10);

    await workFn();

    clearInterval(interval);

    // If interval didn't fire enough times, it means it was completely blocked
    resolve({ maxLag, iterations });
  });
}

async function run() {
  console.log('Running Sync Benchmark...');
  const syncRes = await measureLag(1000, async () => {
    for (let i = 0; i < numFiles; i++) {
      fs.writeFileSync(path.join(dir, `sync_${i}.bin`), buffer);
    }
  });
  console.log(`Sync: max event loop lag = ${syncRes.maxLag.toFixed(2)}ms, interval iterations = ${syncRes.iterations}`);

  console.log('Running Async Benchmark...');
  const asyncRes = await measureLag(1000, async () => {
    for (let i = 0; i < numFiles; i++) {
      await fs.promises.writeFile(path.join(dir, `async_${i}.bin`), buffer);
    }
  });
  console.log(`Async: max event loop lag = ${asyncRes.maxLag.toFixed(2)}ms, interval iterations = ${asyncRes.iterations}`);

  // Cleanup
  fs.readdirSync(dir).forEach(file => fs.unlinkSync(path.join(dir, file)));
  fs.rmdirSync(dir);
}

run();
