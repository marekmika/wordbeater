import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { string, func } from "prop-types";

import { increaseScore } from "../../redux/actions/gameActions";

const GameInput = (props) => {
  const { wordInput, handleChange } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increaseScore());
  }, []);

  return (
    <input
      type="text"
      placeholder="Start typing..."
      name="wordInput"
      autoFocus
      onChange={handleChange}
      value={wordInput}
    />
  );
};

GameInput.propTypes = {
  wordInput: string.isRequired,
  handleChange: func.isRequired,
};

export default GameInput;
