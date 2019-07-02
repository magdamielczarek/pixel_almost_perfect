import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import classes from './App.module.scss';
import GameBoard from "../components/Pages/GameBoard/GameBoard";
import Layout from "../components/Layout/Layout";
import ScoresPage from "../components/Pages/ScoresPage/ScoresPage";
import IntroPage from '../components/Pages/IntroPage/IntroPage';
import RulesPage from "../components/Pages/RulesPage/RulesPage";
import SettingsPage from "../components/Pages/SettingsPage/SettingsPage";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className={classes.app}>
                <Layout>
                    <Switch>
                        <Route path="/ustawienia" component={SettingsPage}/>
                        <Route path="/zasady" component={RulesPage}/>
                        <Route path="/gra" component={GameBoard}/>
                        <Route path="/rangking" component={ScoresPage}/>
                        <Route path="/" exact component={IntroPage}/>
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;
