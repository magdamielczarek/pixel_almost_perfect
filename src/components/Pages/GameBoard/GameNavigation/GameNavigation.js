import React from 'react';
import classes from './GameNavigation.module.scss';
import Counter from "./Counter/Counter";
import Button from "../../../Layout/Button/Button";
import { Consumer } from '../../../Context/index';

const GameNavigation = (props) => {
    return (
        <Consumer>
            {
                (context) => {
                    return (
                        <nav className={classes.gameNavigation}>
                            <ul>
                                <li className={[classes.gameNavigation__item,classes.timer].join(' ')}>
                                    <span>TIME:</span>
                                    <Counter time={context.gameTime}
                                             gameIsOn={context.gameMode}
                                             switchGameMode={context.switchGameMode}
                                             tryAgain={context.tryAgain}
                                             openModalFunc={()=>context.openModalFunc('timeEnd')}/>
                                </li>
                                <li className={classes.gameNavigation__item}>
                                    SCORE: <span className={classes.score}>{context.score}</span>
                                </li>
                                <li className={classes.gameNavigation__item}>
                                    PAINTINGS: <span className={classes.score}>{props.paintingsLeft}/{props.allPaintings}</span>
                                </li>
                                <li className={classes.gameNavigation__item}>
                                    <Button text='next img' accent click={props.next} />
                                </li>
                                <li className={classes.gameNavigation__item}>
                                    <Button text='hint' accent click={props.showHint} />
                                </li>
                                <li className={classes.gameNavigation__item}>
                                    <Button text='close' accent click={()=>{context.openModalFunc('closeConfirmation')}} />
                                </li>
                            </ul>
                        </nav>
                    )
                }
            }
        </Consumer>
    );
};

export default GameNavigation;
