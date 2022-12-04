module.exports = {
  multipass: true,
  plugins: [
    'preset-default',
    'removeDimensions',
    'sortAttrs',
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            'aria-hidden': true,
          },
        ],
      },
    },
  ],
};
