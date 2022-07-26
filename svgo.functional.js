module.exports = {
  multipass: true,
  plugins: [
    'preset-default',
    'removeDimensions',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: 'path:stroke',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            stroke: 'currentColor',
          },
          {
            'aria-hidden': true,
          },
        ],
      },
    },
  ],
};
