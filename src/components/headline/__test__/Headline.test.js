import React from "react";
import { shallow } from "enzyme";
import Headline from "../Headline";
import { findTestByAttribute, checkProps } from "../../../../utils";
// import checkPropTypes from "check-prop-types";

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);
  return component;
};

describe("Headline Component", () => {
  describe("Check Prop Types", () => {
    test("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        description: "Test Desc",
        tempArr: [
          {
            firstName: "Test FirstName",
            lastName: "Test Lname",
            email: "test@test.com",
            age: 0,
            onlineStatus: false,
          },
        ],
      };

      const propsErr = checkProps(Headline, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have Props", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        header: "TH",
        description: "TD",
      };
      wrapper = setUp();
    });

    test("Should render without errors", () => {
      const component = findTestByAttribute(wrapper, "headlineComponent");
      expect(component.length).toBe(1);
    });
    test("Should render at H1", () => {
      const h1 = findTestByAttribute(wrapper, "header");
      expect(h1.length).toBe(1);
    });
    test("should render a description", () => {
      const desc = findTestByAttribute(wrapper, "description");
      expect(desc.length).toBe(1);
    });
  });

  describe("Have no Props", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setUp();
    });
    test("Should not render ", () => {
      //   const component = findTestByAttribute(wrapper, "headlineComponent");
      //   expect(component.length).toBe(0);
    });
  });
});
