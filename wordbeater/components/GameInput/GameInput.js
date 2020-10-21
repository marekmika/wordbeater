import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  useCurrentWordSelector,
  useGameSelector,
} from "../../redux/reducers/game";

const INPUT_VALUE_DEFAULT = "Start typing...";

const GameInput = () => {
  const dispatch = useDispatch();
  const currenWord = useCurrentWordSelector();

  const [inputWord, setInputWord] = useState();

  const handleChange = (value) => {
    setInputWord(value);

    const isValueSameCurrentWord = currenWord === value;

    // TODO: Better naming of functions
    if (!isValueSameCurrentWord) {
      return;
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder={INPUT_VALUE_DEFAULT}
        name="wordInput"
        autoFocus
        onChange={(event) => handleChange(event.target.value)}
        value={inputWord}
      />
    </>
  );
};

export default GameInput;
