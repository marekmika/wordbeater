import React, { Component } from 'react';

class ScoreTable extends Component {
    /**
     * Creation of table
     */
    createTable = () => {
        const { users, scoreLevel } = this.props;
        let children = [];
        let numberHighestScores = 1;
        let countRecords = 20;

        users.sort((a, b) => {
            if (a > b) return -1;
            if (a < b) return 1;
            return 0;
        });

        if (users.length < countRecords) {
            this.countRecords = users.length;
        }

        for (let index = 0; index < this.countRecords; index++) {
            if (users[index][scoreLevel] !== 0 && users[index].nick ) {
                children.push(
                    <tr key={index}>
                        <th scope="row">
                            {numberHighestScores}. {users[index].nick}
                        </th>
                        <td>{users[index][scoreLevel]}</td>
                    </tr>
                );
                numberHighestScores++;
            }
        }

        return <tbody>{children}</tbody>;
    };

    render() {
        const { scoreLevel } = this.props;
        return (
            <table className="table offset-md-1" style={{ marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th scope="col">
                            {scoreLevel.substr(0, scoreLevel.length - 5)}
                        </th>
                        <th scope="col">Score</th>
                    </tr>
                </thead>
                {this.createTable()}
            </table>
        );
    }
}

export default ScoreTable;
