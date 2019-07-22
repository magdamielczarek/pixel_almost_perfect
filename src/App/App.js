import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import classes from './App.module.scss';
import GameBoard from '../components/Pages/GameBoard/GameBoard';
import Layout from '../components/Layout/Layout';
import ScoresPage from '../components/Pages/ScoresPage/ScoresPage';
import IntroPage from '../components/Pages/IntroPage/IntroPage';
import RulesPage from '../components/Pages/RulesPage/RulesPage';
import SettingsPage from '../components/Pages/SettingsPage/SettingsPage';
import NotFoundPage from '../components/Pages/NotFoundPage/NotFoundPage';
import { Provider } from '../components/Context/index';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            gameMode: false,
            score: 0,
            gameTime: 3,
            xNumber: 30,
            yNumber: 20,
            contrast: 'low',
            username: '',
            switchGameMode: this.switchGameMode,
            changeScore: this.changeScore,
            openModal: '',
            openModalFunc: this.openModal,
            closeModalFunc: this.closeModal,
            resetGameFunc: this.resetGame,
            checkLocalStorage: this.checkLocalStorage
        };
    }

    componentDidMount() {
        this.checkLocalStorage();
    }

    checkLocalStorage = () => {
        let propsToUpdate = {};
        for (let property in localStorage) {
            if (this.state[property] !== undefined && localStorage.getItem(property)) {
                propsToUpdate[property] = localStorage.getItem(property);
            }
        }
        this.setState(() => {
            return {...propsToUpdate}
        });
    };

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

            case 'subtraction' :
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
                            <Route component={NotFoundPage}/>
                        </Switch>
                    </Layout>
                </div>
            </Provider>
        );
    }
}

export default App;
