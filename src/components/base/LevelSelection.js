import React, { Component } from 'react';
import { Consumer } from '../../context';

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
        const { dispatch } = this.props.context;

        this.setState({ selectedValue: event.target.name });
        dispatch({ type: 'CHANGELEVEL', currentLevel: event.target.name });
    };

    render() {
        const { selectedValue } = this.state;
        const { editableLevelSelection } = this.props.context;

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

const MapElement = () => (
    <Consumer>{context => <LevelSelection context={context} />}</Consumer>
);

export default MapElement;
