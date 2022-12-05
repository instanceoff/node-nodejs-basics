import * as fs from 'fs';
import * as zlib from 'zlib';

const compress = async () => {
  let gzip = zlib.createGzip();
  let rstream = fs.createReadStream('src/zip/files/fileToCompress.txt');
  let wstream = fs.createWriteStream('src/zip/files/archive.gz');

  rstream.pipe(gzip).pipe(wstream);
};

await compress();
