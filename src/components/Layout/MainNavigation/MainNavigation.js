import React, { Fragment } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Consumer } from '../../Context';
import classes from './MainNavigation.module.scss';

const globalNav = (
        <Fragment>
            <nav className={classes.mainNavigation}>
                <span className={classes.logo}>
                    <NavLink to="/" exact>PixelPerfect</NavLink>
                </span>
                <ul>
                    <li className={classes.mainNavigation__link}>
                        <Link to="/gra">New game</Link>
                    </li>
                    <li className={classes.mainNavigation__link}>
                        <Link to="/zasady">Rules</Link>
                    </li>
                    <li className={classes.mainNavigation__link}>
                        <Link to="/ustawienia">Settings</Link>
                    </li>
                    <li className={classes.mainNavigation__link}>
                        <Link to="/ranking">Scores</Link>
                    </li>
                </ul>
            </nav>
        </Fragment>
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
