const parseEnv = () => {
  for (let env in process.env) {
    env.startsWith('RSS_') && console.log(`${env}=${process.env[env]}`);
  }
};

parseEnv();
