import React, { Component } from "react";
import { shallow } from "enzyme";
import Header from "../Header";
import { cleanup } from "@testing-library/react";
import { findTestByAttribute } from "../../../../utils";

const setUp = (props = {}) => {
  const component = shallow(<Header {...props} />);
  return component;
};

afterEach(cleanup);
describe("Header Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  test("Renders without crashing", () => {
    const wrapper = findTestByAttribute(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });
  test("Should render a logo", () => {
    const logo = findTestByAttribute(component, "logoimg");
    expect(logo.length).toBe(1);
  });
});
