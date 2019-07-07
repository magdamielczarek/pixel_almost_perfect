import React from 'react';
import classes from './ImageDescription.module.scss';

const ImageDescription = (props) => {
    const {description} = props;
    return (
        description ? (<div className={classes.imageDescription}>
            <p className={classes.imageDescription__title}>Title: <strong><em>{description.title}</em></strong></p>
            <p className={classes.imageDescription__author}>Author: <strong>{description.author}</strong></p>
        </div>) : null
    );
};

export default ImageDescription;
