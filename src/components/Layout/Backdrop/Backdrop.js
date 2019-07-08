import React from 'react';
import classes from './Backdrop.module.scss';

const Backdrop = (props) => {
    let backdropClasses = [classes.backdrop];
    props.visible ? backdropClasses.push(classes['backdrop--visible']) : backdropClasses.push(classes['backdrop--invisible']);

    return (
        <div className={backdropClasses.join(' ')}>
            {props.children}
        </div>
    );
};

export default Backdrop;