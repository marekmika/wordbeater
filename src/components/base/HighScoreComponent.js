import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingScreen from '../layout/Spinner';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import ScoreTable from './components/ScoreTable';

class HighScoreComponent extends Component {
    render() {
        const { users } = this.props;

        if (users) {
            return (
                <div className="row">
                    <ScoreTable users={users} scoreLevel={'BeginnerScore'} />
                    <ScoreTable users={users} scoreLevel={'AdvancedScore'} />
                    <ScoreTable users={users} scoreLevel={'InsaneScore'} />
                </div>
            );
        } else {
            return <LoadingScreen />;
        }
    }
}

HighScoreComponent.propTypes = {
  users: PropTypes.array
};

export default compose(
    firestoreConnect([{ collection: 'gamers' }]),
    connect(({ firestore: { ordered } }, props) => ({
        users: ordered.gamers
    }))
)(HighScoreComponent);
