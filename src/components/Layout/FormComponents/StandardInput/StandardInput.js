import React from 'react';
import classes from "../FormComponents.module.scss";

const StandardInput = (props) => {
    const { label, name, value, change } = props;
    return (
        <div className={classes.fieldContainer}>
            <label>{label}</label>
            <input type='text'
                   name={name}
                   value={value}
                   onChange={change}/>
        </div>
    );
};

export default StandardInput;
