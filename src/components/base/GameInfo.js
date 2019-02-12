import React, { Component } from 'react';
import { connect } from 'react-redux';


class GameInfo extends Component {
    render() {
        let { seconds, score } = this.props.gameData;
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
    }
}


const mapStateToProps = state => ({
    gameData: state.game
});

export default connect(
    mapStateToProps
)(GameInfo);
