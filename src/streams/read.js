import * as fs from 'fs';
import { stdout } from 'process';

const read = async () => {
  const rs = fs.createReadStream('src/streams/files/fileToRead.txt');
  rs.pipe(stdout);
};

await read();
