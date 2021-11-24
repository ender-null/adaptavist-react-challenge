import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TextInput, { TextInputProps } from "../../components/text-input";

describe("TextInput", () => {
  const props: TextInputProps = {
    text: "test text",
    placeholder: "Placeholder",
    updateText: (text: string) => {
      return text;
    },
  };
  test("should render the component", () => {
    const { asFragment } = render(<TextInput {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should run call updateText with a delay when changing text", async () => {
    const { getByPlaceholderText } = render(<TextInput {...props} />);
    const input = getByPlaceholderText("Placeholder");
    if (input) {
      fireEvent.change(input, { target: { value: "New text" } });
      await new Promise((r) => setTimeout(r, 500));
      expect(input.textContent).toBe("New text");
    }
  });
});
