import * as fs from 'fs';
import * as zlib from 'zlib';

const decompress = async () => {
  let gunzip = zlib.createGunzip();
  let rstream = fs.createReadStream('src/zip/files/archive.gz');

  rstream.pipe(gunzip).pipe(process.stdout);
};

await decompress();
