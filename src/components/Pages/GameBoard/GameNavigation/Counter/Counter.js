import React from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
    return (
        <div className={classes.counter}>
            <svg width="100%"
                 height="100%"
                 viewBox="0 0 200 100"
                 preserveAspectRatio="xMinYMin slice">
                <circle cx="50"
                        cy="50"
                        r="47"
                        stroke="#fff"
                        strokeWidth="3"
                        fill="transparent"/>
                {/*<text x="50%"*/}
                {/*      y="50%"*/}
                {/*      textAnchor="middle"*/}
                {/*      stroke="#51c5cf"*/}
                {/*      strokeWidth="1px"*/}
                {/*      alignmentBaseline="middle">5cc</text>*/}
            </svg>
        </div>
    );
};

export default Counter;
