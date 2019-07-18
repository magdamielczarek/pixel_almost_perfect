import React from 'react';
import classes from './Counter.module.scss';
import { useState } from 'react';
import { pure } from 'recompose';

const Counter = ({time,gameIsOn,openModalFunc,switchGameMode}) => {
    time = Number(time) * 60000;
    const [timer, setTime] = useState({
        minutes: Math.floor(time / 60000),
        seconds: ((time % 60000) / 1000).toFixed(0),
        restarted: false
    });

    if(!gameIsOn){
        let interval = setInterval(()=>{
            time -= 1000;
            setTime({
                minutes: Math.floor(time / 60000),
                seconds: ((time % 60000) / 1000).toFixed(0)
            });
            if(time === 0){
                clearInterval(interval);
                openModalFunc();
            }
        },1000);
    }

    return (
        <span className={classes.counter}>
            <span><span>{timer.minutes < 10 ? 0 : null}</span>{timer.minutes}</span>
                        :
            <span>{timer.seconds < 10 ? 0 : null}</span><span>{timer.seconds}</span>
        </span>
    );
};

export default pure(Counter);
