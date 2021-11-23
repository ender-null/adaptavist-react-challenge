import React from "react";

export type SortingTypes = "alphabetical" | "numerical";

interface SortingProps {
  currentSorting: string;
  changeSorting: (sort: SortingTypes) => void;
}

interface Sort {
  id: SortingTypes;
  name: string;
}

const Sorting = ({
  currentSorting,
  changeSorting,
}: SortingProps): JSX.Element => {
  const sorting: Sort[] = [
    {
      id: "alphabetical",
      name: "Alphabetical",
    },
    {
      id: "numerical",
      name: "Numerical",
    },
  ];

  return (
    <div className="sorting">
      {sorting.map((sort: Sort) => (
        <button
          key={sort.id}
          className={currentSorting === sort.id ? "selected" : "unselected"}
          onClick={() => changeSorting(sort.id)}
        >
          {sort.name}
        </button>
      ))}
    </div>
  );
};

export default Sorting;
