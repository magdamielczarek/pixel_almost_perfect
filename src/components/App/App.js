import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import './App.scss';
import GameBoard from "../GameBoard/GameBoard";
import Layout from "../Layout/Layout";
import ScoresPage from "../ScoresPage/ScoresPage";
import IntroPage from '../IntroPage/IntroPage';
import RulesPage from "../RulesPage/RulesPage";
import SettingsPage from "../SettingsPage/SettingsPage";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <div className="app">
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
