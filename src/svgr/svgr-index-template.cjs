/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const fs = require('fs');
require('dotenv/config');

const defaultIndexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const name = path.basename(filePath, path.extname(filePath));

    return `export { default as ${name} } from './${name}.js'`;
  });

  try {
    const pathArr = process.env.COMPONENTS_DIR.split('/');
    const PATH = pathArr.slice(0, -1).join('/');
    const DIR = pathArr.at(-1);

    const data = `export * from './${DIR}/index.js';\n`;

    fs.appendFileSync(path.join(PATH, 'index.ts'), data);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.log(err);
  }

  return exportEntries.join('\n');
};

module.exports = defaultIndexTemplate;
