import { readdir, rename as rn, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { argv } from 'node:process';

(async function rename() {
  try {
    const DIR = argv[2];

    const files = await readdir(DIR);

    for (const file of files) {
      if (file.startsWith('Icon-')) {
        const newName = file.slice(5);

        const newPath = join(DIR, newName);

        await rn(join(DIR, file), newPath);

        const content = await readFile(newPath, 'utf8');

        await writeFile(
          newPath,
          content.replace(
            '<rect width="31" height="31" x=".5" y=".5" stroke="#3D90E3" stroke-dasharray="10 5" rx="4.5"/>\n',
            ''
          )
        );
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
