const parseArgs = () => {
  const res = [];
  process.argv.forEach((val, index) => {
    if (!val.startsWith('--')) return;

    const value = val.slice(2);
    const next = process.argv[index + 1];

    if (next.startsWith('--' || '-')) {
      console.log(`${value} is NULL`);
      return;
    }
    res.push(`${value} is ${next}`);
  });
  console.log(res.join(', '));
};

parseArgs();
