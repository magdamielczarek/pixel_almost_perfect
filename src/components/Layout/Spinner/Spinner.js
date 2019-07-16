import React from 'react';
import classes from './Spinner.module.scss';

const Spinner = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.ldsFacebook}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Spinner;
