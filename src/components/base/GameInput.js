import React, { Component } from 'react';
import { connect } from 'react-redux';
import { wordMatch } from '../../actions/gameActions';

class GameInput extends Component {
    handleChange = e => {
        const { currentWord } = this.props.gameData;

        if (currentWord === e.target.value.toLowerCase()) {
            this.props.wordMatch();
            document.getElementById('wordInput').value = '';
        }
    };

    render() {
        return (
            <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Start typing..."
                name="wordInput"
                autoFocus
                onChange={this.handleChange}
                id="wordInput"
            />
        );
    }
}

const mapStateToprops = state => ({
    gameData: state.game
});

export default connect(
    mapStateToprops,
    { wordMatch }
)(GameInput);
