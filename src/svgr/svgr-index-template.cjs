// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

const defaultIndexTemplate = (filePaths) => {
  const exportEntries = filePaths.map((filePath) => {
    const basename = path.basename(filePath, path.extname(filePath));

    return `export { default as ${basename} } from './${basename}.js'`;
  });
  return exportEntries.join('\n');
};

module.exports = defaultIndexTemplate;
