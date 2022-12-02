const parseArgs = () => {
  //   for (let arg in process.argv) {
  //     console.log(arg, process.argv[arg], process.argv);
  //     arg.startsWith('--') && console.log(`${env}=${process.env[env]}`);
  //   }
  process.argv.forEach((val, index) => {
    if (!val.startsWith('--')) return;

    const value = val.slice(2);
    const next = process.argv[index + 1];

    if (next.startsWith('--' || '-')) {
      console.log(`${value} is NULL`);
      return;
    }
    console.log(`${value} is ${next}`);
  });
};

parseArgs();
