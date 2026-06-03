import './fileLog';
import { setIsBin } from './config';

setIsBin(true);

try {
  await import('./index.ts');
} catch {
  process.exit(1);
}
