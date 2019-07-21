import React from 'react';
import classes from './Button.module.scss';
import { withRouter } from 'react-router';

const Button = (props) => {
    let { text, click, type, redirection,accent,disabled } = props;

    if(redirection && !click){
        click = () => {
            props.history.push(redirection);
        };
    }

    const style = accent ? {backgroundColor: '#FF5252'} : {backgroundColor: '#9E9E9E'};

    const button = disabled ? (
        <button onClick={click}
                type={type} style={style}
                className={classes.button}
                disabled={disabled}>
                {text}
        </button>)
        :
        ( <button onClick={click}
                  type={type} style={style}
                  className={classes.button}>
            {text}
        </button>);

    return (
        button
    );
};

export default withRouter(Button);
