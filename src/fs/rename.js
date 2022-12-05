import * as fs from 'fs';

const rename = async () => {
  try {
    if (
      !fs.existsSync('src/fs/files/wrongFilename.txt') ||
      fs.existsSync('src/fs/files/properFilename.md')
    )
      throw 'FS operation failed';

    fs.rename(
      'src/fs/files/wrongFilename.txt',
      'src/fs/files/properFilename.md',
      (err) => {
        if (err) throw 'FS operation failed';
      }
    );
  } catch (error) {
    console.log(error);
  }
};

await rename();
