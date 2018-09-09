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
      <h2 className="text-center mb-5 font-weight-bold" style={style}>
        {currentWord}
      </h2>
    );
  }
}

export default GivenWord;
