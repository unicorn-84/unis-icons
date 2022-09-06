module.exports = {
  multipass: true,
  plugins: [
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
