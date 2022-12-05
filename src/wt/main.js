import { cpus } from 'os';
import { Worker } from 'worker_threads';

const performCalculations = async () => {
  const workers = cpus().map((_, i) => {
    return new Promise((resolve, reject) => {
      const worker = new Worker('./src/wt/worker.js', { workerData: i + 10 });

      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with ${code} exit code`));
        }
      });
    });
  });

  const workersResult = await Promise.allSettled(workers);
  const result = workersResult.map(({ status, value }) => ({
    status: status === 'fulfilled' ? 'resolved' : 'error',
    data: value ? value : null,
  }));

  console.log(result);
};

await performCalculations();
