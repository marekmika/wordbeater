import React from "react";
import { useGameSelector } from "../../redux/reducers/game";

const GameInfo = () => {
  const { score, seconds } = useGameSelector();

  return (
    <div>
      <div>
        <h3>Time Left: {seconds}</h3>
      </div>
      <div>
        <h3>Score: {score}</h3>
      </div>
    </div>
  );
};

export default GameInfo;
