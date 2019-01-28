import React, { Component } from "react";

class LevelSelection extends Component {
  constructor() {
    super();
    this.state = {
      selectedValue: "Beginner",
    };
  }

  /**
   *  Called after onChange event of radio buttons
   * @param  event
   */
  handleChange = event => {
    this.setState({ selectedValue: event.target.name });   
    this.props.callBackLevel(event.target.name);
  };

  render() {
    return (
      <div className="mx-auto" style={{ marginTop: "20px" }}>
        <span className="lead">Select level: </span>
        <input
          type="radio"
          name="Beginner"
          value="Beginner"
          checked={this.state.selectedValue === "Beginner"}
          onChange={this.handleChange}
          disabled={this.props.editableLevelSelection}
        />
        Beginner
        <input
          type="radio"
          name="Advanced"
          value="Advanced"
          checked={this.state.selectedValue === "Advanced"}
          onChange={this.handleChange}
          disabled={this.props.editableLevelSelection}
        />
        Advanced
        <input
          type="radio"
          name="Insame"
          value="Insame"
          checked={this.state.selectedValue === "Insame"}
          onChange={this.handleChange}
          disabled={this.props.editableLevelSelection}
        />
        Insame
      </div>
    );
  }
}

export default LevelSelection;
