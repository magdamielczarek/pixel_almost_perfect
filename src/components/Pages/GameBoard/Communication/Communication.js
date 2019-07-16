import React, { useState,useContext } from 'react';
import axios from '../../../../axiosPreset';
import classes from './Communication.module.scss';
import Button from "../../../Layout/Button/Button";
import StandardInput from "../../../Layout/FormComponents/StandardInput/StandardInput";
import GameContext, { Consumer } from "../../../Context";

const Communication = (props) => {
    const context = useContext(GameContext);

    const [user,setUser] = useState({
        userName: '',score: context.score
    });

    const submitScore = () => {
        axios.post();
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
                                            <StandardInput placeholder='Type your name or nickname here' />
                                            <div style={{padding: '1rem'}}>
                                                <Button text='register' accent />
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

export default Communication;
