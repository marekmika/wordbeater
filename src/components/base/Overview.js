import React, { Component } from 'react';
import { Consumer } from '../../context';

class Overview extends Component {
    componentDidMount() {
        setInterval(this.countdown, 1000);
    }

    /**
     * Countdown of players time
     */
    countdown = () => {
        const { seconds, dispatch, isPlaying } = this.props.context;

        if (seconds > 0 && isPlaying) {
            dispatch({ type: 'COUNTDOWN' });
        } else if (seconds === 0) {
            dispatch({ type: 'CHECKSTATUS', isPlaying: false });
        }
    };

    render() {
        const { message, currentLevelSeconds } = this.props.context;

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

const MapElement = () => (
    <Consumer>{context => <Overview context={context} />}</Consumer>
);

export default MapElement;
