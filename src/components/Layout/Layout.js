import React, { Fragment } from 'react';
import MainNavigation from "../MainNavigation/MainNavigation";
import Footer from "../Footer/Footer";
import {Route} from "react-router";
import IntroPage from "../IntroPage/IntroPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import RulesPage from "../RulesPage/RulesPage";
import GameBoard from "../GameBoard/GameBoard";
import ScoresPage from "../ScoresPage/ScoresPage";

const Layout = (props) => {
    return (
        <Fragment>
            <MainNavigation/>
            <main>
                <Route path="/" exact component={IntroPage}/>
                <Route path="/ustawienia" component={SettingsPage}/>
                <Route path="/zasady" component={RulesPage}/>
                <Route path="/gra" component={GameBoard}/>
                <Route path="/rangking" component={ScoresPage}/>
            </main>
            <Footer/>
        </Fragment>
    );
};

export default Layout;
