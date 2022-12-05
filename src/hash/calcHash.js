import { createHash } from 'node:crypto';
import * as fs from 'fs';

const calculateHash = async () => {
  fs.readFile('src/hash/files/fileToCalculateHashFor.txt', (err, data) => {
    const hash = createHash('sha256').update(data).digest('hex');
    console.log(hash);
  });
};

await calculateHash();
