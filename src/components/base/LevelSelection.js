import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeLevel } from '../../actions/gameActions';

function LevelSelection(data) {
    const [selectedValue, setLevel] = useState('Beginner');

    const handleChange = event => {
        setLevel(event.target.name);
        data.changeLevel(event.target.name);
    };

    const { editableLevelSelection } = data.gameData;

    return (
        <div className="mx-auto" style={{ marginTop: '20px' }}>
            <span className="lead">Select level: </span>
            <input
                type="radio"
                name="Beginner"
                value="Beginner"
                checked={selectedValue === 'Beginner'}
                onChange={handleChange}
                disabled={editableLevelSelection}
            />
            Beginner
            <input
                type="radio"
                name="Advanced"
                value="Advanced"
                checked={selectedValue === 'Advanced'}
                onChange={handleChange}
                disabled={editableLevelSelection}
            />
            Advanced
            <input
                type="radio"
                name="Insane"
                value="Insane"
                checked={selectedValue === 'Insane'}
                onChange={handleChange}
                disabled={editableLevelSelection}
            />
            Insane
        </div>
    );
}

const mapStateToprops = state => ({
    gameData: state.game
});

export default connect(
    mapStateToprops,
    { changeLevel }
)(LevelSelection);
