import checkPropTypes from "check-prop-types";

export const findTestByAttribute = (component, attribute) => {
  const res = component.find(`[data-testid='${attribute}']`);
  return res;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );
  return propsErr;
};
