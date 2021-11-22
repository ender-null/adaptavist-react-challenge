import React, { ChangeEvent } from "react";

interface TextInputProps {
  text: string;
  updateText: (text: string) => void;
}

const TextInput = ({ text, updateText }: TextInputProps): JSX.Element => {
  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateText(event.target.value);
  };
  return (
    <textarea
      className="textarea"
      value={text}
      onChange={handleInput}
      placeholder="Write words"
      autoFocus
    />
  );
};

export default TextInput;
