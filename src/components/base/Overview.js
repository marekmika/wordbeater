import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countdown, checkStatus } from '../../actions/gameActions';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import PropTypes from 'prop-types';
import LoadingScreen from '../layout/Spinner';

class Overview extends Component {
    /**
     * Start game
     */
    componentDidMount() {
        this.interval = setInterval(this.countdown, 1000);
    }

    /**
     * Reset game
     * TODO: Create better handling of start game
     */
    componentWillUnmount() {
        this.props.checkStatus(false);
        clearInterval(this.interval);
    }

    /**
     * Countdown of players time
     */
    countdown = () => {
        const { seconds, isPlaying } = this.props.gameData;

        if (seconds > 0 && isPlaying) {
            this.props.countdown();
        } else if (seconds === 0) {
            this.props.checkStatus(false);
            this.checkUserHighestScore();
        }
    };

    /**
     * Check the current highest score of current user for selected level
     */
    checkUserHighestScore() {
        const {
            currentSelectedLevel,
            begginer,
            advanced,
            insame
        } = this.props.gameData;

        switch (currentSelectedLevel) {
            case begginer:
                if (
                    this.props.user.BeginnerScore <
                    this.props.gameData.currentScore
                ) {
                    this.updateScoreBegginer();
                }
                break;
            case advanced:
                if (
                    this.props.user.AdvancedScore <
                    this.props.gameData.currentScore
                ) {
                    this.updateScoreAdvanced();
                }
                break;
            case insame:
                if (
                    this.props.user.InsameScore <
                    this.props.gameData.currentScore
                ) {
                    this.updateScoreInsame();
                }
                break;
            default:
                break;
        }
    }

    /**
     * Update of a score at Beginner level
     */
    updateScoreBegginer() {
        const { currentScore } = this.props.gameData;
        const { firestore } = this.props;

        firestore.update(
            { collection: 'gamers', doc: this.props.user.id },
            {
                BeginnerScore: currentScore
            }
        );
    }

    /**
     * Update of a score at Advanced level
     */
    updateScoreAdvanced() {
        const { currentScore } = this.props.gameData;
        const { firestore } = this.props;

        firestore.update(
            { collection: 'gamers', doc: this.props.user.id },
            {
                AdvancedScore: currentScore
            }
        );
    }

    /**
     * Update of a score at Insame level
     */
    updateScoreInsame() {
        const { currentScore } = this.props.gameData;
        const { firestore } = this.props;

        firestore.update(
            { collection: 'gamers', doc: this.props.user.id },
            {
                InsameScore: currentScore
            }
        );
    }

    render() {
        const { currentLevelSeconds, message } = this.props.gameData;
        const { user } = this.props;

        if (user) {
            return (
                <div>
                    <h2>{message}</h2>
                    <p className="lead">
                        Type The Given Word Within
                        <span className="text-success">
                            {' '}
                            {currentLevelSeconds}{' '}
                        </span>
                        Seconds:
                    </p>
                </div>
            );
        } else {
            return <LoadingScreen />;
        }
    }
}

const mapStateToprops = state => ({
    gameData: state.game
});

Overview.propTypes = {
    firestore: PropTypes.object.isRequired
};

export default compose(
    firestoreConnect(props => [
        { collection: 'gamers', storeAs: 'gamer',  where: ['email', '==', props.auth.email] }
    ]),
    connect(({ firestore: { ordered } }, props) => ({
        user: ordered.gamer && ordered.gamer[0]
    })),
    connect(
        mapStateToprops,
        { countdown, checkStatus }
    )
)(Overview);
