import React from 'react';
import classes from './GameNavigation.module.scss';
import Counter from "./Counter/Counter";
import Button from "../../../Layout/Button/Button";

const GameNavigation = (props) => {
    return (
        <nav className={classes.gameNavigation}>
            <ul>
                <li className={[classes.gameNavigation__item,classes.timer].join(' ')}>
                    <span>TIME:</span>
                    <Counter
                        time={props.time}
                        gameIsOn={props.gameIsOn} endGame={props.endGame}/>
                </li>
                <li className={classes.gameNavigation__item}>
                    SCORE: <span className={classes.score}>{props.scores}</span>
                </li>
                <li className={classes.gameNavigation__item}>
                    <button className={classes.gameNavigation__button} onClick={props.next}>NEXT IMG</button>
                </li>
                <li className={classes.gameNavigation__item}>
                    <button className={classes.gameNavigation__button} onClick={props.showHint}>HINT</button>
                </li>
                <li className={classes.gameNavigation__item}>
                    <Button text='close' accent redirection='/' />
                </li>
            </ul>
        </nav>
    );
};

export default GameNavigation;
