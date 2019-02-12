import React, { Component } from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { firebaseConnect} from 'react-redux-firebase';

import GameInfo from '../base/GameInfo';
import GameInput from '../base/GameInput';
import LevelSelection from '../base/LevelSelection';
import GivenWord from '../base/GivenWord';
import Overview from '../base/Overview';

class Game extends Component {
    render() {
        return (
            <React.Fragment>
                <Overview auth={this.props.auth}/>
                <GivenWord />
                <GameInput />
                <GameInfo />
                <LevelSelection />
            </React.Fragment>
        );
    }
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    })),
)(Game);
