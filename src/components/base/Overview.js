import React, { Component } from 'react';
import { connect } from 'react-redux';
import { countdown, checkStatus } from '../../actions/gameActions';


class Overview extends Component {
    componentDidMount() {
        setInterval(this.countdown, 1000);
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
        }
    };

    render() {
        const { currentLevelSeconds, message } = this.props.gameData;

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
    }
}


const mapStateToprops = state => ({
    gameData: state.game
});

export default connect(
    mapStateToprops,
    {countdown, checkStatus}
)(Overview);
