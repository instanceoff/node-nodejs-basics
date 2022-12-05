import { stdin, stdout } from 'process';
import { Transform } from 'stream';

const transform = async () => {
  const tr = new Transform({
    transform(chunk, enc, cb) {
      const res = chunk.toString().split('').reverse().join('') + '\n';
      cb(null, res);
    },
  });

  stdin.pipe(tr);
  tr.pipe(stdout);
};

await transform();
