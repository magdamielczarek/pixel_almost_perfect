import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
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
                        <NavLink to="/gra" activeClassName={classes['mainNavigation__link--active']}>New game</NavLink>
                    </li>
                    <li className={classes.mainNavigation__link}>
                        <NavLink to="/zasady" activeClassName={classes['mainNavigation__link--active']}>Rules</NavLink>
                    </li>
                    <li className={classes.mainNavigation__link}>
                        <NavLink to="/ustawienia" activeClassName={classes['mainNavigation__link--active']}>Settings</NavLink>
                    </li>
                    <li className={classes.mainNavigation__link}>
                        <NavLink to="/ranking" activeClassName={classes['mainNavigation__link--active']}>Scores</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
);

const MainNavigation = () => {
    return (
        <Consumer>
            {(context) => {return (context.gameMode ? <div style={{ gridArea: 'header'}}> </div> : globalNav)}}
        </Consumer>
    );
};

export default MainNavigation;
