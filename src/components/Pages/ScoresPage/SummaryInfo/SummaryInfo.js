import React from 'react';

const SummaryInfo = () => {
    const data = [
        {
            "name": "Jan",
            "score": 210,
            "difficulty": "dfsdfsd"
        }
    ];
    return (
        <table>
            <thead>
                <tr>
                    <th>Name/nick</th>
                    <th>Score</th>
                    <th>Difficulty</th>
                </tr>
            </thead>
            <tbody>
            {data.map((player) => {
                return (
                    <tr>
                        <td>{player.name}</td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
};

export default SummaryInfo;