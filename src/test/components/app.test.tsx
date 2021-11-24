import React from "react";
import { render } from "@testing-library/react";
import App from "../../components/app";

describe("Item", () => {
  test("should render the component", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
