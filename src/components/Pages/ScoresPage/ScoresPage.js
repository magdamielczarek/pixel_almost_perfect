import React from 'react';
import SummaryInfo from "./SummaryInfo/SummaryInfo";
import classes from './ScoresPage.module.scss';

const ScoresPage = () => {
    return (
        <div className={classes.pageContainer}>
            <SummaryInfo/>
        </div>
    );
};

export default ScoresPage;
