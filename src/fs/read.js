import * as fs from 'fs';

const read = async () => {
  try {
    const filesContent = fs.readFile('src/fs/files/fileToRead.txt');
    console.log(filesContent);
  } catch (error) {
    console.error('FS operation failed');
  }
};

await read();
