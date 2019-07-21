import React, { Fragment, useEffect,useState } from 'react';
import axios from '../../../../axiosPreset';
import classes from './SummaryInfo.module.scss';
import Spinner from "../../../Layout/Spinner/Spinner";
import {Transition} from "react-transition-group";

const SummaryInfo = () => {

    const [scores,setScores] = useState({
        scores: []
    });

    useEffect(()=> {
        axios.get('/scores.json')
            .then(response => {
                let scores = [];
                for(let el in response.data.scores){
                    scores.push({...response.data.scores[el]});
                }
                scores.sort((a,b) => {
                    return a.score < b.score ? 1 : -1;
                });
                setScores({scores: scores})
            })
            .catch((err)=>console.log(err));
    },[]);

    const table = (
        <Transition in={scores.scores.length > 0}
                    timeout={300}>
            {(state) => (
                <Fragment>
                    <table className={classes.scoresTable} style={{
                        transform: state === 'entered' ? 'translateX(0)' : 'translateX(-100%)',
                        opacity: state === 'entered' ? 1 : 0
                    }}>
                        <thead>
                        <tr>
                            <th rowSpan='2'>Name</th>
                            <th rowSpan='2'>Score</th>
                            <th colSpan='4'>Difficulty</th>
                        </tr>
                        <tr>
                            <th>Time</th>
                            <th>Contrast</th>
                            <th>xAxis size</th>
                            <th>yAxis size</th>
                        </tr>
                        </thead>
                        <tbody>
                        {scores.scores.map((player) => {
                            return (
                                <tr key={player.id}>
                                    <td>{player.name}</td>
                                    <td>{player.score}</td>
                                    <td>{player.difficulty.time}</td>
                                    <td>{player.difficulty.contrast}</td>
                                    <td>{player.difficulty.xAxis}</td>
                                    <td>{player.difficulty.yAxis}</td>
                                </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </Fragment>
                )}
        </Transition>
    );

    return scores.scores.length ? table : <Spinner/>;
};

export default SummaryInfo;
