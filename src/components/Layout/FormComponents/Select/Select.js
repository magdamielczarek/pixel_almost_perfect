import React from 'react';
import classes from "../FormComponents.module.scss";

const Select = (props) => {
    const { label, value, name, change, options } = props;
    return (
        <div className={classes.fieldContainer}>
            <label>{label}</label>
            <select name={name}
                    value={value}
                    onChange={change}>
                {options && options.map(
                    (option) => {
                        return <option>{option}</option>
                    })
                }
            </select>
        </div>
    );
};

export default Select;
