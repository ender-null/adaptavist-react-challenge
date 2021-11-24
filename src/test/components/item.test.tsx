import React from "react";
import { render } from "@testing-library/react";
import Item, { ItemProps } from "../../components/item";

describe("App", () => {
  const props: ItemProps = {
    word: "test",
    count: 3,
    rarity: 5,
  };
  test("should render the component", () => {
    const { asFragment } = render(<Item {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
