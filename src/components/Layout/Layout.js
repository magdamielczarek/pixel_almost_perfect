import React from 'react';
import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer/Footer";
import classes from './Layout.module.scss';

const Layout = (props) => {
    return (
        <div className={classes.pageContainer}>
            {/*{this.state.gameMode ? <MainNavigation gameMode={this.state.gameMode}/> : <GameNavigation gameMode={this.state.gameMode}/>}*/}
            <MainNavigation gameMode={props.gameMode}/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;
