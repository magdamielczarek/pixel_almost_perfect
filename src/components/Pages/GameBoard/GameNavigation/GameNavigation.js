// wyjdz z gry - tu komponent modalu potwierdzajacego
// przejdz do kolejnego obrazu
// pokaż podpowiedź
// liczba punktów - counter
// timer - ile czasu minęło - połączenie odliczania liczbą ze zmieniającym się kołem (z książki css)

import React from 'react';
import { NavLink } from "react-router-dom";
import classes from './GameNavigation.module.scss';
import Counter from "./Counter/Counter";

const GameNavigation = () => {
    return (
        <nav className={classes.gameNavigation}>
            <ul>
                <li className={classes.gameNavigation__item}>TIME: <Counter/></li>
                <li className={classes.gameNavigation__item}>SCORES:
                    <span className={classes.scores}>20</span>
                </li>
                <li className={classes.gameNavigation__item}>
                    <button className={classes.gameNavigation__button}>NEXT IMG</button>
                </li>
                <li className={classes.gameNavigation__item}>
                    <button className={classes.gameNavigation__button}>hint</button>
                </li>
                <li className={classes.gameNavigation__item}>
                    <NavLink to='/'>Close</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default GameNavigation;
