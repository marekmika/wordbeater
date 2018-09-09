import React from "react";
import PropTypes from "prop-types";

const GameInfo = props => {
  let { seconds, score } = props;

  return (
    <div className="row gameInfo" style={{ marginTop: "20px" }}>
      <div className="col-md-6">
        <h3>Time Left: {seconds}</h3>
      </div>
      <div className="col-md-6">
        <h3>Score: {score === -1 ? 0 : score}</h3>
      </div>
    </div>
  );
};

export default GameInfo;

GameInfo.propTypes = {
  seconds: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired
};
