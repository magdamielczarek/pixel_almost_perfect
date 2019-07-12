import React from 'react';
import classes from './Counter.module.scss';
import { useState } from 'react';

const Counter = (props) => {
    let time = props.time;

    const [timer, setTime] = useState({
        minutes: Math.floor(time / 60000),
        seconds: ((time % 60000) / 1000).toFixed(0)
    });

    if(!props.gameIsOn){
        let interval = setInterval(()=>{
            time -= 1000;
            setTime({
                minutes: Math.floor(time / 60000),
                seconds: ((time % 60000) / 1000).toFixed(0)
            });
            if(time === 0){
                clearInterval(interval);
                props.endGame();
            }
        },1000);
    }

    return (
        <span className={classes.counter}>
                            <span><span>{timer.minutes < 10 ? 0 : null}</span>{timer.minutes}</span>
                        :
                            <span>{timer.seconds < 10 ? 0 : null}</span><span>{timer.seconds}</span>
                        </span>
    )
};

export default Counter;
