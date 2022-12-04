const { join, parse, format } = require('path');
const { cp, readFile, writeFile } = require('fs/promises');
const { paramCase } = require('change-case');
const recursive = require('recursive-readdir');
const latinize = require('latinize');

// brands
(async () => {
  try {
    const SOURCE_DIR = join(process.cwd(), 'source/icons/brands');
    const ASSETS_DIR = join(process.cwd(), 'assets/icons/brands');

    const files = await recursive(SOURCE_DIR);

    for (let file of files) {
      const { root, dir, name, ext } = parse(file);
      await cp(
        file,
        format(
          {
            root,
            dir: join(ASSETS_DIR, dir.replace(SOURCE_DIR, '')),
            name: paramCase(name).replace('-icon', ''),
            ext,
          },
          { recursive: true }
        )
      );
    }
  } catch (error) {}
})();

// flags
(async () => {
  try {
    const SOURCE_DIR = join(process.cwd(), 'source/icons/flags');
    const ASSETS_DIR = join(process.cwd(), 'assets/icons/flags');

    const files = await recursive(SOURCE_DIR);

    for (let file of files) {
      const { root, dir, name, ext } = parse(file);
      await cp(
        file,
        format(
          {
            root,
            dir: join(ASSETS_DIR, dir.replace(SOURCE_DIR, '')),
            name: paramCase(latinize(name.slice(8, -17))),
            ext,
          },
          { recursive: true }
        )
      );
    }
  } catch (error) {}
})();

// functional
(async () => {
  try {
    const SOURCE_DIR = join(process.cwd(), 'source/icons/functional');
    const ASSETS_DIR = join(process.cwd(), 'assets/icons/functional');

    const files = await recursive(SOURCE_DIR);

    for (let file of files) {
      const { root, dir, name, ext } = parse(file);

      const newPath = format({
        root,
        dir: join(ASSETS_DIR, dir.replace(SOURCE_DIR, '')),
        name: paramCase(name.slice(5)),
        ext,
      });

      await cp(file, newPath, { recursive: true });

      const svgString = await readFile(newPath, 'utf8');

      await writeFile(
        newPath,
        svgString.replace(
          '<rect x="0.5" y="0.5" width="31" height="31" rx="4.5" stroke="#3D90E3" stroke-dasharray="10 5"/>',
          ''
        )
      );
    }
  } catch (error) {}
})();
