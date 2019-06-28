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
                        <li className="mainNavigation__link"><NavLink to="/gra">Nowa gra</NavLink></li>
                        <li className="mainNavigation__link"><NavLink to="/zasady">Zasady</NavLink></li>
                        <li className="mainNavigation__link"><NavLink to="/ustawienia">Ustawienia</NavLink></li>
                        <li className="mainNavigation__link"><NavLink to="/ranking">Ranking</NavLink></li>
                    </ul>
                </nav>
            </header>
        </Switch>
    );
};

export default MainNavigation;
