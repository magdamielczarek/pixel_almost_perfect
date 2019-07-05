import React from 'react';
import formClasses from "../FormComponents.module.scss";
import classes from "./InputNumber.module.scss";

const InputNumber = (props) => {
    const { label, name, value, change, increment, decrement } = props;
    return (
        <div className={formClasses.fieldContainer}>
            <label>{label}</label>
            <div className={classes.inputContainer}>
                <input type='number'
                       name={name}
                       value={value}
                       onChange={change}/>
                <div className={classes.btnCounterContainer}>
                    <svg className={[classes.btnCounter,classes.btnCounterDecrement].join(' ')}
                         viewBox="0 0 100 100"
                         onClick={increment}
                         role='button'
                         aria-roledescription='button'>
                        <polygon points="0 0, 100 0, 100 100, 0 0"
                                 style={{fill:'#00FFBB',stroke:'#fff',strokeWidth:1,fillRule:'nonzero'}} />
                        <text x="60" y="45" style={{fill: '#fff',fontSize: '3rem',fontFamily: 'Montserrat'}}>+</text>
                    </svg>
                    <svg className={[classes.btnCounter,classes.btnCounterIncrement].join(' ')}
                         viewBox="0 0 100 100"
                         onClick={decrement}
                         role='button'
                         aria-roledescription='button'>
                        <polygon points="0 0, 0 100, 100 100, 0 0"
                                 style={{fill:'#C44272',stroke:'#fff',strokeWidth:1,fillRule:'nonzero'}} />
                        <text x="20" y="80" style={{fill: '#fff',fontSize: '3rem',fontFamily: 'Montserrat'}}>-</text>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default InputNumber;