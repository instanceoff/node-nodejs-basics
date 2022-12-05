import * as fs from 'fs';

const remove = async () => {
  fs.unlink(
    fileToRemove.txt,
    (err) => err && console.log('FS operation failed')
  );
};

await remove();
