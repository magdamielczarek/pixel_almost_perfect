import React from 'react';
import classes from './Communication.module.scss';
import Button from "../../../Layout/Button/Button";
import StandardInput from "../../../Layout/FormComponents/StandardInput/StandardInput";
import {Consumer} from "../../../Context";

const Communication = (props) => {
    return (
        <Consumer>
            {
                (context) => {
                    switch (context.openModal) {
                        case 'closeConfirmation' :
                            return (
                                <div className={classes.modal}>
                                    <p>Are you sure you want to end this game?</p>
                                    <div style={{padding: '1rem'}}>
                                        <Button text='yes' accent redirection='/'/>
                                        <Button text='no' click={context.closeModalFunc} />
                                    </div>
                                </div>
                            );
                            break;
                        case 'timeEnd' :
                            if(context.score > 0){
                                return (
                                    <div className={classes.modal}>
                                        <p>Congratulations, your result:</p>
                                        <div className={classes.scores}>{context.score}</div>
                                        <form className={classes.registerResultForm}>
                                            <StandardInput placeholder='Type your name or nickname here' />
                                        </form>
                                        <div style={{padding: '1rem'}}>
                                            <Button text='register' accent click={props.endGame}/>
                                            <Button text='exit' redirection='/'/>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className={classes.modal}>
                                        <p>Unfortunately, our score is:</p>
                                        <div className={classes.scores}>{context.score}</div>
                                        <div style={{padding: '1rem'}}>
                                            <Button text='try again' accent click={props.restartGame}/>
                                            <Button text='close' redirection='/' />
                                        </div>
                                    </div>
                                );
                            }
                            break;
                }}
            }
        </Consumer>
    );
};

export default Communication;
