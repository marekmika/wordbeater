import React, { Component } from "react";

class Overview extends Component {
  render() {
    const { currentLevelSeconds, message } = this.props;

    return (
      <div>
        <h2>{message}</h2>
        <p className="lead">
          Type The Given Word Within
          <span className="text-success"> {currentLevelSeconds} </span>
          Seconds:
        </p>
      </div>
    );
  }
}

export default Overview;
