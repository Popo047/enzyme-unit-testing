import Button from "../Button";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { findTestByAttribute } from "../../../../utils";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";

const setUp = () => {
  const component = shallow(<Button />);
  return component;
};
afterEach(cleanup);

describe("Button Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  test("renders without crashing,", () => {
    let wrapper = findTestByAttribute(component, "button");
    expect(wrapper.length).toBe(1);
  });
  test("renders button correctly", () => {
    const { getByTestId } = render(<Button label="peep"></Button>);
    expect(getByTestId("button")).toHaveTextContent("peep");
  });
  test("matches snapshot", () => {
    const tree = renderer.create(<Button label="peep"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
