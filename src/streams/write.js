import * as fs from 'fs';
import { stdin } from 'process';

const write = async () => {
  const ws = fs.createWriteStream('src/streams/files/fileToWrite.txt');
  stdin.pipe(ws);
};

await write();
