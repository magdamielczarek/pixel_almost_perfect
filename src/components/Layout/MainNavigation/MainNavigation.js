import React from 'react';
import { NavLink, Switch } from "react-router-dom";
import classes from './MainNavigation.module.scss';

const MainNavigation = () => {
    return (
        <Switch>
            <header className={classes.mainNavigation}>
                <span className={classes.logo}>PixelPerfect</span>
                <nav>
                    <ul>
                        <li className={classes.mainNavigation__link}><NavLink to="/gra">New game</NavLink></li>
                        <li className={classes.mainNavigation__link}><NavLink to="/zasady">Rules</NavLink></li>
                        <li className={classes.mainNavigation__link}><NavLink to="/ustawienia">Settings</NavLink></li>
                        <li className={classes.mainNavigation__link}><NavLink to="/ranking">Rank</NavLink></li>
                    </ul>
                </nav>
            </header>
        </Switch>
    );
};

export default MainNavigation;
