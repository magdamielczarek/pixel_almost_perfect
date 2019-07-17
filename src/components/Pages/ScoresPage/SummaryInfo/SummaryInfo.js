import React, { useEffect,useState } from 'react';
import axios from '../../../../axiosPreset';
import classes from './SummaryInfo.module.scss';
import Spinner from "../../../Layout/Spinner/Spinner";

const SummaryInfo = () => {

    const [scores,setScores] = useState({
        scores: []
    });

    useEffect(()=> {
        axios.get('/scores.json')
            .then(data => setScores({
                scores: data.data.scores.sort((a,b) => {
                    return a.score < b.score ? 1 : -1;
                })
            }))
            .catch((err)=>console.log(err));
    },[]);

    const table = (
        <table className={classes.scoresTable}>
            <thead>
            <tr>
                <th>Name</th>
                <th>Score</th>
                <th>Difficulty</th>
            </tr>
            </thead>
            <tbody>
            {scores.scores.map((player) => {
                return (
                    <tr key={player.name}>
                        <td>{player.name}</td>
                        <td>{player.score}</td>
                        <td>
                            <ul>{Object.keys(player.difficulty)
                                .map((property) => {
                                    return <li key={property}>{property}: {player.difficulty[property]}</li>
                                })}
                            </ul>
                        </td>
                    </tr>
                )
            })}
            </tbody>
        </table>
    );

    return scores.scores.length ? table : <Spinner/>;
};

export default SummaryInfo;
