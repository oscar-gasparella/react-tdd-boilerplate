import React from "react";
import { shallow } from "enzyme";
import App from "../App";

it("should render app correctly", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find(".hello").text()).toContain("Hello, world!");
});
