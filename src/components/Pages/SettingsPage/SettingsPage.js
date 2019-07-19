import React, { Fragment,useState,useEffect,useContext } from 'react';
import { withRouter } from 'react-router';
import { Transition } from 'react-transition-group';
import classes from './Settings.module.scss';
import InputNumber from "../../Layout/FormComponents/InputNumber/InputNumber";
import StandardInput from "../../Layout/FormComponents/StandardInput/StandardInput";
import Select from "../../Layout/FormComponents/Select/Select";
import Button from "../../Layout/Button/Button";
import GameContext from "../../Context";

const SettingsPage = (props) => {

    const context = useContext(GameContext);

    const [userSettings,setUserSettings] = useState({
        username: context.username,
        gameTime: context.gameTime,
        xNumber: context.xNumber,
        yNumber: context.yNumber,
        contrast: context.contrast
    });

    const [showElements,setShowElements] = useState({
        elementsAreVisible: false
    });

    const pixelsContrast = [
        {'id': 1, 'value': 'low'},
        {'id': 2, 'value': 'medium'},
        {'id': 3, 'value': 'high'}
    ];

    useEffect(() => {
        if(localStorage.length){
            let localStorageCopy = {...setUserSettings};
            for(let property in userSettings) {
                if(localStorage.getItem(property) !== ''){
                    localStorageCopy.property = localStorage.getItem(property);
                }
            }
            setUserSettings({...localStorage});
        }
        setShowElements({elementsAreVisible: true});
    }, []);

    const handleFieldChange = (event) => {
        event.persist();
        setUserSettings(prevState => ({...prevState, [event.target.name]: event.target.value}));
    };

    const handleDecrement = (name,min) => {
        if(Number(userSettings[name] <= Number(min))){
            return;
        } else {
            setUserSettings(prevState => ({...prevState, [name]: Number(prevState[name]) - 1}));
        }
    };

    const handleIncrement = (name,max) => {
        if(Number(userSettings[name] >= Number(max))){
            return;
        } else {
            setUserSettings(prevState => ({...prevState, [name]: Number(prevState[name]) + 1}));
        }
    };

    const submitSettings = (event) => {
        event.preventDefault();
        for (let property in userSettings){
            localStorage.setItem(property,userSettings[property]);
        }
        context.checkLocalStorage();
        props.history.push('/');
    };

    return (
        <div className={classes.settingsContainer}>
            <form className={classes.settingsForm}
                  onSubmit={submitSettings}>
                <Transition in={showElements.elementsAreVisible}
                            timeout={100}>
                    {(state) => (
                        <Fragment>
                            <div className={classes.sections}>
                                <section className={classes.settingsSection}
                                         style={{
                                             transition: 'all .5s',
                                             transform: state === 'entered' ? 'translateX(0)' : 'translateX(-100%)',
                                             opacity: state === 'entered' ? 1 : 0
                                         }}>
                                    <h2 className={classes.settingsSection__heading}>User</h2>
                                    <StandardInput
                                        label='User name:'
                                        name='username'
                                        value={userSettings.username}
                                        change={handleFieldChange}/>
                                </section>
                                <section className={classes.settingsSection}
                                         style={{
                                             transition: 'all .5s',
                                             transform: state === 'entered' ? 'translateX(0)' : 'translateX(100%)',
                                             opacity: state === 'entered' ? 1 : 0
                                         }}>
                                    <h2 className={classes.settingsSection__heading}>Difficulty</h2>
                                    <InputNumber label="Time:"
                                                 name="gameTime"
                                                 min="1" max="10"
                                                 value={userSettings.gameTime}
                                                 change={handleFieldChange}
                                                 handleIncrement={handleIncrement}
                                                 handleDecrement={handleDecrement} />
                                    <InputNumber label="X-axis size:"
                                                 name="xNumber"
                                                 min="10" max="30"
                                                 value={userSettings.xNumber}
                                                 change={handleFieldChange}
                                                 handleIncrement={handleIncrement}
                                                 handleDecrement={handleDecrement} />
                                    <InputNumber label="Y-axis size:"
                                                 name='yNumber'
                                                 min="10" max="30"
                                                 value={userSettings.yNumber}
                                                 change={handleFieldChange}
                                                 handleIncrement={handleIncrement}
                                                 handleDecrement={handleDecrement} />
                                    <Select label="Pixel contrast:"
                                            name='contrast'
                                            value={userSettings.contrast}
                                            change={handleFieldChange}
                                            options={pixelsContrast}/>
                                </section>
                            </div>
                            <div className={classes.btnsRow}
                                 style={{
                                     transition: 'opacity 1s',
                                     opacity: state === 'entered' ? 1 : 0
                                 }}>
                                <Button text='save' type='submit' accent />
                                <Button text='cancel' type='reset' click={() => props.history.push('/')}/>
                            </div>
                        </Fragment>
                    )}
                </Transition>
            </form>
        </div>
    );
};

export default withRouter(SettingsPage);
