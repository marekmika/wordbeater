import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { string, func } from "prop-types";

import { setCurrentWord } from "../../redux/actions/gameActions";
import pickWord from "../../utils/WordGenerator";
import { useGameSelector } from "../../redux/reducers/game";

const GameInput = (props) => {
  const { wordInput, handleChange } = props;

  const dispatch = useDispatch();
  const { currentWord } = useGameSelector();

  useEffect(() => {
    const currentWord = pickWord();

    dispatch(setCurrentWord(currentWord));
  }, []);

  return (
    <>
      {currentWord}
      <input
        type="text"
        placeholder="Start typing..."
        name="wordInput"
        autoFocus
        onChange={handleChange}
        value={wordInput}
      />
    </>
  );
};

GameInput.propTypes = {
  wordInput: string.isRequired,
  handleChange: func.isRequired,
};

export default GameInput;
