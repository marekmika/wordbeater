import React from "react";
import { string, func } from "prop-types";

const GameInput = (props) => {
  const { wordInput, handleChange } = props;

  return (
    <input
      type="text"
      className="form-control form-control-lg"
      placeholder="Start typing..."
      name="wordInput"
      autoFocus
      onChange={handleChange}
      value={wordInput}
    />
  );
};

export default GameInput;

GameInput.propTypes = {
  wordInput: string.isRequired,
  handleChange: func.isRequired,
};
