import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Sorting, { SortingProps, SortingTypes } from "../../components/sorting";

describe("Sorting", () => {
  const props: SortingProps = {
    currentSorting: "alphabetical",
    changeSorting: (sort: SortingTypes) => {
      return sort;
    },
  };
  test("should render the component", () => {
    const { asFragment } = render(<Sorting {...props} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("should run change the sorting to 'alphabetical' when clicked", () => {
    const { container } = render(
      <Sorting {...props} currentSorting="alphabetical" />
    );
    const node = container.querySelector('[key="alphabetical"]');
    if (node) {
      fireEvent.click(node);
      expect(props.changeSorting).toBe("alphabetical");
    } else {
      expect(container.firstChild).toBeFalsy;
    }
  });

  test("should run change the sorting to 'numerical' when clicked", () => {
    const { container } = render(
      <Sorting {...props} currentSorting="numerical" />
    );
    const node = container.querySelector('[key="numerical"]');
    if (node) {
      fireEvent.click(node);
      expect(props.changeSorting).toBe("numerical");
    } else {
      expect(container.firstChild).toBeFalsy;
    }
  });
});
