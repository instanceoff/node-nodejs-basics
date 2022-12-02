import * as fs from 'fs';

const list = async () => {
  try {
    const dir = fs.opendir('src/fs/files');
    for await (const dirent of dir) console.log(dirent.name);
  } catch (err) {
    console.error('FS operation failed');
  }
};

await list();
