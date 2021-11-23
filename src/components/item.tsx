import React from "react";

interface ItemProps {
  word: string;
  count: number;
  rarity: number;
}

const Item = ({ word, count, rarity }: ItemProps): JSX.Element => {
  const style = {
    background: `hsl(${((rarity - 1) / 5) * 120}, 100%, 80%)`,
  };
  return (
    <li>
      <span className="word">{word}</span>
      <span className="count" style={style}>
        x{count}
      </span>
    </li>
  );
};
export default Item;
