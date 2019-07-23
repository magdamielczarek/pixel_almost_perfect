import React from 'react';
import SummaryInfo from './SummaryInfo/SummaryInfo';
import classes from './ScoresPage.module.scss';

const ScoresPage = () => {
    return (
        <div className={classes.scoresContainer}>
            <div className={classes.tableWrapper}>
                <SummaryInfo/>
            </div>
        </div>
    );
};

export default ScoresPage;
