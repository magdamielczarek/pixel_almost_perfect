import React from 'react';
import { NavLink, Switch } from "react-router-dom";
import './MainNavigation.scss';

const MainNavigation = () => {
    return (
        <Switch>
            <header>
                <h1>PixelPerfect</h1>
                <nav className="mainNavigation">
                    <ul>
                        <li className="mainNavigation__link"><NavLink to="/gra">New game</NavLink></li>
                        <li className="mainNavigation__link"><NavLink to="/zasady">Rules</NavLink></li>
                        <li className="mainNavigation__link"><NavLink to="/ustawienia">Settings</NavLink></li>
                        <li className="mainNavigation__link"><NavLink to="/ranking">Rank</NavLink></li>
                    </ul>
                </nav>
            </header>
        </Switch>
    );
};

export default MainNavigation;
