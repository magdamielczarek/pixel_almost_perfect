import React from 'react';
import { useState,useEffect } from 'react';
import { Transition } from 'react-transition-group';
import classes from './Settings.module.scss';
import InputNumber from "../../Layout/FormComponents/InputNumber/InputNumber";
import StandardInput from "../../Layout/FormComponents/StandardInput/StandardInput";
import Select from "../../Layout/FormComponents/Select/Select";
import Button from "../../Layout/Button/Button";

const SettingsPage = () => {

    const [userSettings,setUserSettings] = useState({
        username: '',
        gameTime: 180000,
        xNumber: 20,
        yNumber: 20,
        contrast: 'low'
    });

    const [showElements,setShowElements] = useState({
        elementsAreVisible: false
    });

    const pixelsContrast = [
        {'id': 1, 'value': ''},
        {'id': 2, 'value': 'low'},
        {'id': 3, 'value': 'medium'},
        {'id': 4, 'value': 'high'}
    ];

    useEffect(() => {
        setShowElements({elementsAreVisible: true})
    }, []);

    const handleFieldChange = (event) => {
        event.persist();
        setUserSettings(prevState => ({...prevState, [event.target.name]: event.target.value}));
    };

    const handleDecrement = (event,minValue) => {
        const property = event.target.getAttribute('inputname');
        setUserSettings(prevState => ({...prevState, [property]: Number(prevState[property]) - 1}));
    };

    const handleIncrement = (event,maxValue) => {
        const property = event.target.getAttribute('inputname');
        setUserSettings(prevState => ({...prevState, [property]: Number(prevState[property]) + 1}));
    };

    const submitSettings = (event) => {
        event.preventDefault();
        for (let property in userSettings){
            localStorage.setItem(property,userSettings[property]);
        }
    };

    return (
        <div className={classes.settingsContainer}>
            <form className={classes.settingsForm}
                  onSubmit={submitSettings}>
                <Transition in={showElements.elementsAreVisible}
                            timeout={100}>
                    {(state) => (
                        <>
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
                                                 name='gameTime'
                                                 min="1" max="10"
                                                 value={userSettings.gameTime}
                                                 change={handleFieldChange}
                                                 increment={handleIncrement}
                                                 decrement={handleDecrement} />
                                    <InputNumber label="X-axis size:"
                                                 name='xNumber'
                                                 min="10" max="30"
                                                 value={userSettings.xNumber}
                                                 change={handleFieldChange}
                                                 increment={handleIncrement}
                                                 decrement={handleDecrement} />
                                    <InputNumber label="Y-axis size:"
                                                 name='yNumber'
                                                 min="10" max="30"
                                                 value={userSettings.yNumber}
                                                 change={handleFieldChange}
                                                 increment={handleIncrement}
                                                 decrement={handleDecrement} />
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
                                <Button text='save' accent />
                                <Button text='cancel' />
                            </div>
                        </>
                    )}
                </Transition>
            </form>
        </div>
    );
};

export default SettingsPage;
