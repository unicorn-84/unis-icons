const { readdir, rename } = require('node:fs/promises');
const { join } = require('node:path');

(async function editIcons() {
  try {
    const DIR = join(process.cwd(), 'assets', 'icons', 'brands', 'logos');

    const files = await readdir(DIR);

    for (const file of files) {
      await rename(join(DIR, file), join(DIR, file.replace('-logo', '')));
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
})();
