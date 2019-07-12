import React from 'react';
import classes from "../FormComponents.module.scss";

const StandardInput = (props) => {
    const { label, name, value, change, placeholder } = props;
    return (
        <div className={classes.fieldContainer}>
            {label ? <label>{label}</label> : null}
            <input type='text'
                   name={name}
                   value={value}
                   onChange={change}
                   placeholder={placeholder} className={label ? classes['input'] : classes['input--fullWidth']}/>
        </div>
    );
};

export default StandardInput;
