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

    // @TODO: Delete <Consumer> and use props from MapElement
    render() {
        return (
            <Consumer>
                {value => {
                    const { message, currentLevelSeconds } = value;

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
                }}
            </Consumer>
        );
    }
}

const MapElement = () => (
    <Consumer>{context => <Overview context={context} />}</Consumer>
);

export default MapElement;
