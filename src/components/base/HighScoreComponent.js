import React, { Component } from 'react';
import { connect } from 'react-redux';

class HighScoreComponent extends Component {
    /**
     * Creation of score´s table
     */
    createTable = () => {
        const { highestScores } = this.props.gameData;
        let children = [];
        let numberHighestScores = 1;

        // Outer loop to create parent
        for (let index = 0; index < highestScores.length; index++) {
            children.push(
                <tr key={index}>
                    <th scope="row">{numberHighestScores}</th>
                    <td>{highestScores[index].scoreArray}</td>
                    <td>{highestScores[index].level}</td>
                </tr>
            );

            numberHighestScores++;
        }

        return <tbody>{children}</tbody>;
    };

    render() {
        return (
            <table className="table col-lg" style={{ marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th scope="col">High score</th>
                        <th scope="col">Score</th>
                        <th scope="col">Level</th>
                    </tr>
                </thead>
                {this.createTable()}
            </table>
        );
    }
}

const mapStateToprops = gameData => ({
    gameData: gameData.game
});

export default connect(mapStateToprops)(HighScoreComponent);
