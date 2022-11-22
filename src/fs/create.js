import * as fs from 'fs';

const create = async () => {
  fs.writeFile(
    'src/fs/files/fresh.txt',
    'I am fresh and young',
    (err) => err && console.log('FS operation failed')
  );
};

await create();
