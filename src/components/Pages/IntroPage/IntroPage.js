import React, { useContext, useEffect } from 'react';
import classes from './IntroPage.module.scss';
import GameContext from '../../Context/index';

const IntroPage = () => {

    const context = useContext(GameContext);

    useEffect(() => {
        context.switchGameMode(false);
        context.resetGameFunc();
    });

    return (
        <header className={classes.introWrapper}>
            <div className={[classes.batPixel,classes.batPixel__1].join(' ')}> </div>
            <div className={[classes.batPixel,classes.batPixel__2].join(' ')}> </div>
            <div className={[classes.batPixel,classes.batPixel__3].join(' ')}> </div>
            <div className={[classes.batPixel,classes.batPixel__4].join(' ')}> </div>
            <div className={[classes.batPixel,classes.batPixel__5].join(' ')}> </div>
            <h1 className={classes.header}>
                <span className={classes.comment}>find </span>
                Pixel
                <span className={classes.comment}> almost </span>
                Perfect
            </h1>
        </header>
    );
};

export default IntroPage;
