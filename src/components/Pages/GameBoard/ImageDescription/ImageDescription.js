import React from 'react';
import classes from './ImageDescription.module.scss';

const ImageDescription = (props) => {
    return (
        <div className={classes.imageDescription}>
            <p className={classes.imageDescription__title}>Title: <strong><em>Il Cenacolo lub L'Ultima Cena</em></strong></p>
            <p className={classes.imageDescription__author}>Author: <strong>Leonardo da Vinci</strong></p>
        </div>
    );
};

export default ImageDescription;
