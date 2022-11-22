import * as fs from 'fs';

const copy = async () => {
  try {
    if (fs.existsSync('src/fs/files_copy')) throw 'FS operation failed';

    fs.mkdir('src/fs/files_copy', (err) => {
      if (err) throw 'FS operation failed';
    });

    fs.cp('src/fs/files', 'src/fs/files_copy', { recursive: true }, (err) => {
      if (err) throw 'FS operation failed';
    });
  } catch (error) {
    console.log(error);
  }
};

copy();
