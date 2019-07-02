import React from 'react';

import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer/Footer";
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
                <MainNavigation gameMode={this.state.gameMode}/>
                <main>{this.props.children}</main>
                <Footer/>
            </div>
        );
    }
}

export default Layout;
