import React from 'react';
import { NavLink, Switch } from "react-router-dom";
import { Consumer } from '../../Context';
import classes from './MainNavigation.module.scss';
import GameNavigation from "../../Pages/GameBoard/GameNavigation/GameNavigation";

const globalNav = (
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

const MainNavigation = () => {
    return (
        <Consumer>
            {
                (context) => {
                    return (context.gameMode ? <div style={{ gridArea: 'header'}}> </div> : globalNav);
                }
            }
        </Consumer>
    );
};

export default MainNavigation;
