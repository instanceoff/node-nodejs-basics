import * as fs from 'fs';

const read = async () => {
  try {
    fs.readFile('src/fs/files/fileToRead.txt', 'utf8', (err, data) => {
      console.log(data);
    });
  } catch (error) {
    console.error('FS operation failed');
  }
};

await read();
