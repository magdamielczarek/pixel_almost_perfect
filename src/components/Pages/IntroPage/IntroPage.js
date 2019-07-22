import React, { useContext, useState, useEffect } from 'react';
import classes from './IntroPage.module.scss';
import GameContext from '../../Context/index';
import bgimage from '../../../assets/bg_image.jpg';
import bgplaceholder from '../../../assets/bgCompressed.jpg';

const IntroPage = () => {

    const context = useContext(GameContext);

    const [loaded,setLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image();
        imageLoader.src = bgimage;
        imageLoader.onload = () => {
            setLoaded(true);
        };
    },[]);

    useEffect(() => {
        context.switchGameMode(false);
        context.resetGameFunc();
    });

    const bgStyle = {
        backgroundImage: loaded ? `url(${bgimage})` : `url(${bgplaceholder})`
    };

    return (
        <header className={classes.introWrapper} style={bgStyle}>
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
