import fs from 'node:fs';

const LOG_FILE = 'gf2-bbs-sign-in.log';

fs.rmSync(LOG_FILE, { force: true });

const wrapLog = (method: 'log' | 'error') => {
  const raw = console[method];
  console[method] = (...args: any[]) => {
    raw(...args);
    fs.appendFileSync(LOG_FILE, `${new Date().toLocaleString()} [${method}] ${args.join(' ')}\n`);
  };
};

wrapLog('log');
wrapLog('error');
