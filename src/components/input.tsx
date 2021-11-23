import React, { ChangeEvent, useEffect, useState } from "react";

interface TextInputProps {
  text: string;
  placeholder?: string;
  updateText: (text: string) => void;
}

const TextInput = ({
  text,
  placeholder,
  updateText,
}: TextInputProps): JSX.Element => {
  const [input, setInput] = useState<string | undefined>(text);

  const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      updateText(input || "");
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <textarea
      className="textarea"
      value={input}
      onChange={handleInput}
      placeholder={placeholder}
      autoFocus
    />
  );
};

export default TextInput;
