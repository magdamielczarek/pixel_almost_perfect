import React, {Component} from 'react';
import { Route, Switch } from "react-router-dom";
import classes from './App.module.scss';
import GameBoard from "../components/Pages/GameBoard/GameBoard";
import Layout from "../components/Layout/Layout";
import ScoresPage from "../components/Pages/ScoresPage/ScoresPage";
import IntroPage from '../components/Pages/IntroPage/IntroPage';
import RulesPage from "../components/Pages/RulesPage/RulesPage";
import SettingsPage from "../components/Pages/SettingsPage/SettingsPage";
import { Provider } from '../components/Context/index';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            gameMode: false,
            score: 0,
            time: 180000,
            switchGameMode: this.switchGameMode,
            changeScore: this.changeScore,
            openModal: '',
            openModalFunc: this.openModal,
            closeModalFunc: this.closeModal,
            resetGameFunc: this.resetGame,
            tryAgain: false,
            switchTryAgain: this.switchTryAgain
        };
    }

    switchGameMode = (state) => {
        this.setState(()=> {
            return {
                gameMode: state
            }
        });
    };

    changeScore = (operation,number) => {
        switch (operation) {
            case 'addition' :
                this.setState((prevState)=>{
                    return {score: prevState.score + number}
                });
                break;

            case 'deletion' :
                this.setState((prevState)=>{
                    if(prevState.score > number){
                        return {score: prevState.score - number}
                    } else {
                        return {score: 0}
                    }
                });
                break;

            case 'multiplication' :
                this.setState((prevState)=>{
                    return {score: prevState.score * number}
                });
                break;

            default:
                break;
        }
    };

    closeModal = () => {
        this.setState({
            openModal: ''
        });
    };

    openModal = (type) => {
        this.setState({
            openModal: type
        });
    };

    resetGame = () => {
        this.setState(()=>{
            return {
                score: 0,
                openModal: '',
                gameMode: false
            }
        });
    };

    render(){
        return (
            <Provider value={this.state}>
                <div className={classes.app}>
                    <Layout gameMode={this.state.gameMode}>
                        <Switch>
                            <Route path="/ustawienia" component={SettingsPage}/>
                            <Route path="/zasady" component={RulesPage}/>
                            <Route path="/gra" component={GameBoard} />
                            <Route path="/ranking" component={ScoresPage}/>
                            <Route path="/" exact component={IntroPage}/>
                        </Switch>
                    </Layout>
                </div>
            </Provider>
        );
    }
}

export default App;
