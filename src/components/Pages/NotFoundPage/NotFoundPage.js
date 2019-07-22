import React from 'react';
import classes from '../NotFoundPage/NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <div className={classes.notFoundPage}>
            <div className={classes.notFoundPage__background}></div>
            <h1>404</h1>
            <h2>page doesn't exist</h2>
        </div>
    );
};

export default NotFoundPage;
