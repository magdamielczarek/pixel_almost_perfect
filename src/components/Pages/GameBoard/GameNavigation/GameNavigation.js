import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './GameNavigation.module.scss';
import Counter from "./Counter/Counter";

const GameNavigation = (props) => {
    return (
        <nav className={classes.gameNavigation}>
            <ul>
                <li className={classes.gameNavigation__item}>
                    <span>TIME:</span>
                    <Counter time={props.time} gameIsOn={props.gameIsOn}/>
                </li>
                <li className={classes.gameNavigation__item}>
                    SCORES: <span className={classes.scores}>{props.scores}</span>
                </li>
                <li className={classes.gameNavigation__item}>
                    <button className={classes.gameNavigation__button} onClick={props.next}>NEXT IMG</button>
                </li>
                <li className={classes.gameNavigation__item}>
                    <button className={classes.gameNavigation__button} onClick={props.showHint}>HINT</button>
                </li>
                <li className={classes.gameNavigation__item}>
                    <NavLink to='/'>Close</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default GameNavigation;
