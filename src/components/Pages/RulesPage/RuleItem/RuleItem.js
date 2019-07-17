import React from 'react';
import classes from './RuleItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Rule = ({style,heading,text,image}) => {
    return (
        <article className={classes.rule} style={style}>
            <h2>{heading}</h2>
            <p>{text}</p>
            <div className={classes['rule__icon']}>
                <FontAwesomeIcon icon={image[Object.keys(image)[0]]} size='7x'/>
            </div>
        </article>
    );
};

export default Rule;
