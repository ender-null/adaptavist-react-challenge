import React from "react";

interface ItemProps {
  word: string;
  count: number;
}

const Item = ({ word, count }: ItemProps): JSX.Element => {
  return (
    <li>
      <span className="word">{word}</span>
      <span className="count">{count}</span>
    </li>
  );
};
export default Item;
