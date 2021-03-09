export const findTestByAttribute = (component, attribute) => {
  const res = component.find(`[data-testid='${attribute}']`);
  return res;
};
