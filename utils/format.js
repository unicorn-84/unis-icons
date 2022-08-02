import { readdir, rename as rn, readFile, writeFile } from 'node:fs/promises';
import { join, format, basename } from 'node:path';
import { optimize } from 'svgo';
import camelCase from 'camelcase';
import 'dotenv/config';

(async function rename() {
  try {
    const DIR = process.env.ICONS_DIR;

    const files = await readdir(DIR);

    for (const file of files) {
      if (file.startsWith('Icon')) {
        const bn = camelCase(basename(file, '.svg'));

        const newPath = format({ dir: DIR, name: bn.slice(4), ext: '.svg' });

        await rn(join(DIR, file), newPath);

        const svgString = await readFile(newPath, 'utf8');

        const content = svgString.replace(
          '<rect width="31" height="31" x=".5" y=".5" stroke="#3D90E3" stroke-dasharray="10 5" rx="4.5"/>\n',
          ''
        );

        await writeFile(newPath, optimize(content).data);
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
