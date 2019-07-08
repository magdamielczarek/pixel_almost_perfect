import React from 'react';
import classes from './Communication.module.scss';
import Button from "../../../Layout/Button/Button";
import StandardInput from "../../../Layout/FormComponents/StandardInput/StandardInput";

const Communication = (props) => {
    const messageQuit = (
        <div className={classes.modal}>
            <p>Are you sure you want to end this game?</p>
            <div style={{padding: '1rem'}}>
                <Button text='yes' category='button--accept' click={props.endGame}/>
                <Button text='no' click={props.continueGame}/>
            </div>
        </div>
    );

    const messageEndOftime = (
        <div className={classes.modal}>
            <p>Congratulations, your result:</p>
            <div className={classes.scores}>{props.scores}</div>
            <form className={classes.registerResultForm}>
                <StandardInput placeholder='Type your name or nickname here' />
            </form>
            <div style={{padding: '1rem'}}>
                <Button text='register' category='button--accept' click={props.endGame}/>
                <Button text='exit' click={props.continueGame}/>
            </div>
        </div>
    );

    const messageNoScores = (
        <div className={classes.modal}>
            <p>Unfortunately, our score is:</p>
            <div className={classes.scores}>{props.scores}</div>
            <div style={{padding: '1rem'}}>
                <Button text='try again' category='button--accept' click={props.endGame}/>
                <Button text='exit' click={props.continueGame}/>
            </div>
        </div>
    );

    if(props)
    return (
        <>
            {props.gameIsFinished ? (props.scores > 0 ? messageEndOftime : messageNoScores) : messageQuit}
        </>
    );
};

export default Communication;
