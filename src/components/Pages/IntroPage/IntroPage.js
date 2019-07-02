import React from 'react';
import classes from './IntroPage.module.scss';

const IntroPage = () => {
    return (
        <div className={classes.introWrapper}>
            <div className={[classes.batPixel,classes.batPixel__1].join(' ')}> </div>
            <div className={[classes.batPixel,classes.batPixel__2].join(' ')}> </div>
            <div className={[classes.batPixel,classes.batPixel__3].join(' ')}> </div>
            <div className={[classes.batPixel,classes.batPixel__4].join(' ')}> </div>
            <div className={[classes.batPixel,classes.batPixel__5].join(' ')}> </div>
            <div className={classes.header}>
                <span className={classes.comment}>find </span>
                Pixels
                <span className={classes.comment}> almost </span>
                Perfect
            </div>
            <button className={classes.ctaButton}>START</button>
        </div>
    );
};

export default IntroPage;
