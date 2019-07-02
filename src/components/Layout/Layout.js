import React from 'react';

import MainNavigation from "./MainNavigation/MainNavigation";
import Footer from "./Footer/Footer";
import classes from './Layout.module.scss';

const Layout = (props) => {
    return (
        <div className={classes.pageContainer}>
            {/*<Backdrop />*/}
            <MainNavigation/>
            <main>{props.children}</main>
            <Footer/>
        </div>
    );
};

export default Layout;
