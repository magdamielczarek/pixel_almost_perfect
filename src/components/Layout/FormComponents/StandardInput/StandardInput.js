import React from 'react';
import classes from "../FormComponents.module.scss";

const StandardInput = (props) => {
    const { label, name, value, change, placeholder, maxLength } = props;
    return (
        <div className={classes.fieldContainer}>
            {label ? <label>{label}</label> : null}
            <input type='text'
                   name={name}
                   value={value}
                   onChange={change}
                   style={{ width: label ? '60%' : '100%'}}
                   placeholder={placeholder}
                   className={classes.input}
                   maxLength={maxLength} />
        </div>
    );
};

export default StandardInput;
