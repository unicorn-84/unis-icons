import { readdir, rename as rn, readFile, writeFile } from 'node:fs/promises';
import { join, format, basename } from 'node:path';
import { optimize } from 'svgo';
import { paramCase } from 'change-case';
import latinize from 'latinize';
import 'dotenv/config';

(async function editIcons() {
  try {
    const DIR = process.env.ICONS_DIR;

    const files = await readdir(DIR);

    for (const file of files) {
      if (file.startsWith('Country=')) {
        let icon = paramCase(latinize(basename(file, '.svg')));
        // let icon = basename(file, '.svg');

        const newPath = format({
          dir: DIR,
          name: icon.slice(11, -14),
          ext: '.svg',
        });

        await rn(join(DIR, file), newPath);

        const svgString = await readFile(newPath, 'utf8');

        // const content = svgString.replace(
        //   '<rect width="31" height="31" x=".5" y=".5" stroke="#3D90E3" stroke-dasharray="10 5" rx="4.5"/>\n',
        //   ''
        // );

        await writeFile(newPath, optimize(svgString).data);
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
