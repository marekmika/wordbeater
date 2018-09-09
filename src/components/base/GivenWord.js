import React, { Component } from "react";

class GivenWord extends Component {
  render() {
    const { currentWord } = this.props;

    // To unselect the games word
    const style = {
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      userSelect: "none"
    };
    return (
      <h2
        className="text-center display-2 mb-5"
        style={style}
        id="current-word"
      >
        {currentWord}
      </h2>
    );
  }
}

export default GivenWord;
