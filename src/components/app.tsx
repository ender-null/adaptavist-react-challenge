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
    setTotalWords(list.length);
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
    if (words) {
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
      return list.map((word: string) => {
        return <Item key={word} word={word} count={words[word]} />;
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
      <h2>{`${Object.keys(words).length} of ${totalWords} unique words`}</h2>
      <Sorting currentSorting={sorting} changeSorting={setSorting} />
      <ul className="list">{renderList()}</ul>
    </div>
  );
};

export default App;
