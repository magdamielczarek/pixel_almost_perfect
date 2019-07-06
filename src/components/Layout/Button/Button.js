import React from 'react';
import classes from './Button.module.scss';

const Button = (props) => {
    const { text, click, type, category } = props;
    return (
        <button onClick={click}
                type={type}
                className={category ? [classes.button,classes[category]].join(' ') : classes.button}>
            {text}
        </button>
    );
};

export default Button;
