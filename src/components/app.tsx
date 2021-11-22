import React, { useState } from "react";
import TextInput from "./input";

interface Words {
  [word: string]: number;
}

const App = (): JSX.Element => {
  const [text, setText] = useState("");
  const [words, setWords] = useState<Words>({});

  const countWords = (text: string) => {
    const wordList = text.split(/\s+/);
    const wordCount: Words = {};
    wordList.forEach((word: string) => {
      if (word.length > 0) {
        wordCount[word] = wordCount[word] ? wordCount[word] + 1 : 1;
      }
    });
    setWords(wordCount);
    setText(text);
  };

  const renderList = () => {
    if (words) {
      const list: string[] = Object.keys(words).sort((a, b) =>
        a > b ? 1 : -1
      );
      return list.map((word: string) => {
        return (
          <li key={word}>
            {word}: {words[word]}
          </li>
        );
      });
    }
  };

  return (
    <div className="app">
      <TextInput text={text} updateText={countWords} />
      <ul className="list">{renderList()}</ul>
    </div>
  );
};
export default App;
