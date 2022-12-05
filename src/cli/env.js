const parseEnv = () => {
  const res = [];
  for (let env in process.env) {
    env.startsWith('RSS_') && res.push(`${env}=${process.env[env]}`);
  }
  console.log(res.join('; '));
};

parseEnv();
