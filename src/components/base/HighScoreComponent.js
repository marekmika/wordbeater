import React, { Component } from 'react';
import { Consumer } from '../../context';

class HighScoreComponent extends Component {
    /**
     * Creation table of score´s
     */
    createTable = (highestScores) => {
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
            <Consumer>
                {value => {
                    return (
                        <table
                            className="table col-lg"
                            style={{ marginTop: '20px' }}
                        >
                            <thead>
                                <tr>
                                    <th scope="col">High score</th>
                                    <th scope="col">Score</th>
                                    <th scope="col">Level</th>
                                </tr>
                            </thead>
                            {this.createTable(value.highestScores)}
                        </table>
                    );
                }}
            </Consumer>
        );
    }
}

export default HighScoreComponent;
