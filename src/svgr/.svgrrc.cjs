require('dotenv').config();

module.exports = {
  typescript: true,
  outDir: process.env.COMPONENTS_DIR,
  ignoreExisting: true,
  replaceAttrValues: {
    '#101828': 'currentColor',
  },
};
