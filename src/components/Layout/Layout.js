import React from 'react';
import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer/Footer";
import Backdrop from './Backdrop/Backdrop';
import classes from './Layout.module.scss';

class Layout extends React.Component {
    state = {
        gameMode: false,
        mobileView: false
    };

    handleGameModeChange = () => {};

    handleViewChange = () => {};

    render(){
        return (
            <div className={classes.pageContainer}>
                {/*<Backdrop />*/}
                {/*{this.state.gameMode ? <MainNavigation gameMode={this.state.gameMode}/> : <GameNavigation gameMode={this.state.gameMode}/>}*/}
                <MainNavigation gameMode={this.state.gameMode}/>
                <main>{this.props.children}</main>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
