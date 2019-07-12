import React from 'react';
import { NavLink, Switch } from "react-router-dom";
import classes from './MainNavigation.module.scss';
import GameNavigation from "../../Pages/GameBoard/GameNavigation/GameNavigation";

const primary = (
    <Switch>
        <nav className={classes.mainNavigation}>
            <span className={classes.logo}><NavLink to="/" exact>PixelPerfect</NavLink></span>
            <ul>
                <li className={classes.mainNavigation__link}><NavLink to="/gra">New game</NavLink></li>
                <li className={classes.mainNavigation__link}><NavLink to="/zasady">Rules</NavLink></li>
                <li className={classes.mainNavigation__link}><NavLink to="/ustawienia">Settings</NavLink></li>
                <li className={classes.mainNavigation__link}><NavLink to="/ranking">Scores</NavLink></li>
            </ul>
        </nav>
    </Switch>
);

const game = <GameNavigation/>;

const MainNavigation = (props) => {
    return (props.gameMode ? game : primary);
};

export default MainNavigation;
