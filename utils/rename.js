import { readdir, rename as rn } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { argv } from 'node:process';

(async function rename() {
  try {
    const DIR = argv[2];
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const files = await readdir(join(__dirname, '..', DIR));

    for (const file of files) {
      const newName = file.slice(5);

      rn(join(__dirname, '..', DIR, file), join(__dirname, '..', DIR, newName));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
