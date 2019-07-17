import React from 'react';
import classes from './HintArea.module.scss';

const HintArea = (props) => {
    return (
        <div className={classes.hintArea} style={props.style}></div>
    );
};

export default HintArea;
