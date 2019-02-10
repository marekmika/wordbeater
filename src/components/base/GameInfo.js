import React from 'react';
import { Consumer } from '../../context';

const GameInfo = () => {
    return (
        <Consumer>
            {value => {
                const { seconds, score } = value;

                return (
                    <div className="row gameInfo" style={{ marginTop: '20px' }}>
                        <div className="col-md-6">
                            <h3>Time Left: {seconds}</h3>
                        </div>
                        <div className="col-md-6">
                            <h3>Score: {score === -1 ? 0 : score}</h3>
                        </div>
                    </div>
                );
            }}
        </Consumer>
    );
};

export default GameInfo;
