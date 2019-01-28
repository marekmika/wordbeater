import React, { Component } from 'react';

class LevelSelection extends Component {
    constructor() {
        super();
        this.state = {
            selectedValue: 'Beginner'
        };
    }

    /**
     *  Called after onChange event of radio buttons
     * @param  event
     */
    handleChange = event => {
        const { callBackLevel } = this.props;

        this.setState({ selectedValue: event.target.name });
        callBackLevel(event.target.name);
    };

    render() {
        const { selectedValue } = this.state;
        const { editableLevelSelection } = this.props;

        return (
            <div className="mx-auto" style={{ marginTop: '20px' }}>
                <span className="lead">Select level: </span>
                <input
                    type="radio"
                    name="Beginner"
                    value="Beginner"
                    checked={selectedValue === 'Beginner'}
                    onChange={this.handleChange}
                    disabled={editableLevelSelection}
                />
                Beginner
                <input
                    type="radio"
                    name="Advanced"
                    value="Advanced"
                    checked={selectedValue === 'Advanced'}
                    onChange={this.handleChange}
                    disabled={editableLevelSelection}
                />
                Advanced
                <input
                    type="radio"
                    name="Insame"
                    value="Insame"
                    checked={selectedValue === 'Insame'}
                    onChange={this.handleChange}
                    disabled={editableLevelSelection}
                />
                Insame
            </div>
        );
    }
}

export default LevelSelection;
