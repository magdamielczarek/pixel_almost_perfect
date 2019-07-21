import React, { useState,useContext } from 'react';
import axios from '../../../../axiosPreset';
import classes from './Communication.module.scss';
import Button from "../../../Layout/Button/Button";
import StandardInput from "../../../Layout/FormComponents/StandardInput/StandardInput";
import GameContext, { Consumer } from "../../../Context";
import {withRouter} from "react-router";

const Communication = (props) => {
    const context = useContext(GameContext);

    const [user,setUser] = useState({
        userName: ''
    });

    const submitScore = (event) => {
        event.preventDefault();
        const data = {
            name: user.userName ? user.userName : savedUserName ? savedUserName : 'Incognito',
            score: context.score,
            difficulty: {
                time: context.gameTime,
                xAxis: context.xNumber,
                yAxis: context.yNumber,
                contrast: context.contrast
            }
        };
        axios.get('/scores.json')
            .then(response => data.id = Object.keys(response.data.scores).length+1)
            .then(() => { axios.post('/scores/scores.json', data) })
            .then(() => context.closeModalFunc())
            .then(() => context.resetGameFunc())
            .then(() => props.history.push('/ranking'))
            .catch((err)=>console.log(err));
    };

    const savedUserName = localStorage.getItem('username');

    const handleUserNameChange = (event) => {
        setUser({
            userName: event.target.value
        });
    };

    return (
        <Consumer>
            {
                (context) => {
                    switch (context.openModal) {
                        case 'closeConfirmation' :
                            return (
                                <div className={classes.modal}>
                                    <p className={classes.text}>Are you sure you want to end this game?</p>
                                    <div style={{padding: '1rem'}}>
                                        <Button text='yes' accent redirection='/'/>
                                        <Button text='no' click={context.closeModalFunc} />
                                    </div>
                                </div>
                            );

                        case 'timeEnd' :
                            if(context.score > 0){
                                return (
                                    <div className={classes.modal}>
                                        <p className={classes.text}>Congratulations, your result:</p>
                                        <div className={classes.scores}>{context.score}</div>
                                        <form onSubmit={submitScore} className={classes.registerResultForm}>
                                            <StandardInput change={handleUserNameChange}
                                                           placeholder={savedUserName ? savedUserName : 'Type your name here'} />
                                            <div style={{padding: '1rem'}}>
                                                <Button text='register' accent click={submitScore}/>
                                                <Button text='exit' redirection='/'/>
                                            </div>
                                        </form>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className={classes.modal}>
                                        <p className={classes.text}>Unfortunately, your score is:</p>
                                        <div className={classes.scores}>{context.score}</div>
                                        <div style={{padding: '1rem'}}>
                                            <Button text='try again' accent click={
                                                ()=>{
                                                    context.resetGameFunc();
                                                    props.restartGame();
                                                }
                                            }/>
                                            <Button text='close' redirection='/' />
                                        </div>
                                    </div>
                                );
                            }

                        default :
                            return null;
                }}
            }
        </Consumer>
    );
};

export default withRouter(Communication);
