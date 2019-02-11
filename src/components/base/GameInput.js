import React, { Component } from 'react';
import { Consumer } from '../../context';

class GameInput extends Component {
    /**
     * Method for handle change in input and matching words
     * 
     * @param e
     */
    handleChange = e => {
        const { dispatch, currentWord } = this.props.context;
        this.setState({ [e.target.name]: e.target.value });

        if (currentWord === e.target.value.toLowerCase()) {
            dispatch({ type: 'WORDMATCH' });
            document.getElementById('wordInput').value = '';
        }
    };

    render() {
        return (
            <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Start typing..."
                id="wordInput"
                name="wordInput"
                autoFocus
                onChange={this.handleChange}
            />
        );
    }
}

const MapElement = () => (
    <Consumer>{context => <GameInput context={context} />}</Consumer>
);

export default MapElement;
