import React from 'react';
import classes from './Communication.module.scss';
import Button from "../../../Layout/Button/Button";
import StandardInput from "../../../Layout/FormComponents/StandardInput/StandardInput";

const Communication = (props) => {
    const messageQuit = (
        <div className={classes.modal}>
            <p>Are you sure you want to end this game?</p>
            <div style={{padding: '1rem'}}>
                <Button text='yes' accent click={props.endGame}/>
                <Button text='no' click={props.continueGame}/>
            </div>
        </div>
    );

    const messageEndOfTime = (
        <div className={classes.modal}>
            <p>Congratulations, your result:</p>
            <div className={classes.scores}>{props.scores}</div>
            <form className={classes.registerResultForm}>
                <StandardInput placeholder='Type your name or nickname here' />
            </form>
            <div style={{padding: '1rem'}}>
                <Button text='register' accent click={props.endGame}/>
                <Button text='exit' redirection='/'/>
            </div>
        </div>
    );

    const messageNoScores = (
        <div className={classes.modal}>
            <p>Unfortunately, our score is:</p>
            <div className={classes.scores}>{props.scores}</div>
            <div style={{padding: '1rem'}}>
                <Button text='try again' accent click={props.restartGame}/>
                <Button text='close' redirection='/' />
            </div>
        </div>
    );

    return (
        <>
            {props.gameIsFinished ? (props.scores > 0 ? messageEndOfTime : messageNoScores) : messageQuit}
        </>
    );
};

export default Communication;
