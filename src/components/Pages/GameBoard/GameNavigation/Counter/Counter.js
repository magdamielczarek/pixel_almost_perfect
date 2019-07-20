import React, { useState, useEffect } from 'react';
import classes from './Counter.module.scss';

const Counter = (props) => {
    const {time,openModalFunc,runTimer,changeTimerState} = props;
    let localTime = Number(time) * 60000;

    const [timer, setTime] = useState({
        minutes: Math.floor(time / 60000),
        seconds: ((time % 60000) / 1000).toFixed(0)
    });

    useEffect(
        () => {
            changeTimerState(false);
            let timerInterval = setInterval(() => {
                localTime -= 1000;
                setTime({
                    minutes: Math.floor(localTime / 60000),
                    seconds: ((localTime % 60000) / 1000).toFixed(0)
                });
                if(localTime === 0){
                    clearInterval(timerInterval);
                    openModalFunc();
                }
            }, 1000);
            return () => {
                clearInterval(timerInterval);
            }
        },[runTimer]);

    return (
        <span className={classes.counter}>
            <span><span>{timer.minutes < 10 ? 0 : null}</span>{timer.minutes}</span>
                        :
            <span>{timer.seconds < 10 ? 0 : null}</span><span>{timer.seconds}</span>
        </span>
    );
};

export default Counter;
