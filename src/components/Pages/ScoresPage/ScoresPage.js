import React from 'react';
import SummaryInfo from './SummaryInfo/SummaryInfo';
import classes from './ScoresPage.module.scss';

const ScoresPage = () => {
    return (
        <div className={classes.scoresContainer}>
            <SummaryInfo/>
        </div>
    );
};

export default ScoresPage;
