import React, { useState } from "react";
import TextInput from "./text-input";
import Item from "./item";
import Sorting, { SortingTypes } from "./sorting";

interface Words {
  [word: string]: number;
}

const App = (): JSX.Element => {
  const [text, setText] = useState("");
  const [sorting, setSorting] = useState<SortingTypes>("alphabetical");
  const [totalWords, setTotalWords] = useState(0);
  const [words, setWords] = useState<Words>({});

  const countWords = (text: string) => {
    const wordsSeparatedBySpaces = text.replace(/[\s,.!?()]+/g, " ").trim();
    const list = wordsSeparatedBySpaces.split(" ");
    wordsSeparatedBySpaces.length > 0
      ? setTotalWords(list.length)
      : setTotalWords(0);
    const wordWithCount: Words = {};
    list.forEach((word: string) => {
      if (word.length > 0) {
        const lowercaseWord = word.toLowerCase();
        wordWithCount[lowercaseWord] = wordWithCount[lowercaseWord]
          ? wordWithCount[lowercaseWord] + 1
          : 1;
      }
    });
    setWords(wordWithCount);
    setText(text);
  };

  const renderList = () => {
    if (words && Object.keys(words).length > 0) {
      const list: string[] = Object.keys(words).sort((a, b) => {
        if (sorting === "numerical") {
          if (words[a] === words[b]) {
            return a > b ? 1 : -1;
          }
          return words[a] < words[b] ? 1 : -1;
        } else {
          return a > b ? 1 : -1;
        }
      });
      const mostCommonWord = Object.keys(words).reduce((prev, current) => {
        return words[prev] > words[current] ? prev : current;
      });
      return list.map((word: string) => {
        return (
          <Item
            key={word}
            word={word}
            count={words[word]}
            rarity={(words[word] / words[mostCommonWord]) * 5}
          />
        );
      });
    }
  };

  return (
    <div className="app">
      <h1>Adaptavist React Challenge</h1>
      <TextInput
        text={text}
        placeholder={"Write here"}
        updateText={countWords}
      />
      <Sorting currentSorting={sorting} changeSorting={setSorting} />
      {totalWords > 0 && (
        <h2>{`${Object.keys(words).length} of ${totalWords} unique words`}</h2>
      )}
      <ul className="list">{renderList()}</ul>
    </div>
  );
};

export default App;
