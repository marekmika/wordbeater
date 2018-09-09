import React from "react";

const HighScore = props => {
  const { highestScores } = props;

  let createTable = () => {
    let table = [];
    let children = [];

    // Outer loop to create parent
    for (let index = 0; index < highestScores.length; index++) {
      children.push(
        <tr key={index}>
          <th scope="row">{index}</th>
          <td>{highestScores[index]}</td>
          <td>5</td>
        </tr>
      );
    }

    table.push(<tbody>{children}</tbody>);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">High score</th>
          <th scope="col">Score</th>
          <th scope="col">Level</th>
        </tr>
      </thead>
      {createTable()}
    </table>
  );
};

export default HighScore;
