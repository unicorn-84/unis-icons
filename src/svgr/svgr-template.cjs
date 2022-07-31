const template = ({ componentName, ...variables }, { tpl }) => {
  const customName = componentName.slice(3);

  return tpl`
${variables.imports};

${variables.interfaces};

const ${customName} = (${variables.props}) => (
  ${variables.jsx}
);
 
export default ${customName};
`;
};

module.exports = template;
