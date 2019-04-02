import React from 'react';

function ScoreTable(props) {
    /**
     * Creation of table
     */
    const createTable = ({ users, scoreLevel }) => {
        let children = [];
        let numberHighestScores = 1;
        let countRecords = 20;

        users.sort((a, b) => {
            return b[scoreLevel] - a[scoreLevel];
        });

        if (users.length < countRecords) {
            countRecords = users.length;
        }

        for (let index = 0; index < countRecords; index++) {
            if (users[index][scoreLevel] !== 0) {
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

    return (
        <table className="table offset-md-1" style={{ marginTop: '20px' }}>
            <thead>
                <tr>
                    <th scope="col">
                        {props.scoreLevel.substr(
                            0,
                            props.scoreLevel.length - 5
                        )}
                    </th>
                    <th scope="col">Score</th>
                </tr>
            </thead>
            {createTable(props)}
        </table>
    );
}

export default ScoreTable;
