// czas gry
// ilość pikseli w osiach x i y - t ograniczenie, że nie może być mniej i więcej niż


// formularz z danymi podpiętymi do stanu
// ustawienia powinny zapisywać się w local storage

import React from 'react';
import classes from './Settings.module.scss';
import InputNumber from "../../Layout/FormComponents/InputNumber/InputNumber";
import StandardInput from "../../Layout/FormComponents/StandardInput/StandardInput";
import Select from "../../Layout/FormComponents/Select/Select";
import Button from "../../Layout/Button/Button";

class SettingsPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            userEmail: '',
            gameTime: 0
        };
    };

    pixelsContrast = ['','low','medium','high'];
    imagesDifficulty = ['','easy','moderate','hard'];

    handleFieldChange = (event) => {
        console.log(event.target.value,event.target.name);
        // this.setState((prevState)=>{
        //     {
        //         this.state[event.target.name] = event.target.value
        //     }
        // });
    };

    handleDecrement = (e) => {
        console.log(e.target, 'decrement');
    };

    handleIncrement = (e) => {
        console.log(e.target, 'increment');
    };

    render(){
        return (
            <div className={classes.settingsContainer}>
                <form className={classes.settingsForm}>
                    <div className={classes.sections}>
                        <section className={classes.settingsSection}>
                            <h2 className={classes.settingsSection__heading}>User</h2>
                            <StandardInput label='User name:' name='username' value={this.state.username} change={this.handleFieldChange}/>
                            <StandardInput label='User email:' name='userEmail' value={this.state.userEmail} change={this.handleFieldChange}/>
                        </section>
                        <section className={classes.settingsSection}>
                            <h2 className={classes.settingsSection__heading}>Difficulty</h2>
                            <InputNumber label="Time:" name='gameTime' value={this.state.gameTime} change={this.handleFieldChange} increment={this.handleIncrement} decrement={this.handleDecrement} />
                            <InputNumber label="X-axis size:" name='gameTime' value={this.state.gameTime} change={this.handleFieldChange} increment={this.handleIncrement} decrement={this.handleDecrement} />
                            <InputNumber label="Y-axis size:" name='gameTime' value={this.state.gameTime} change={this.handleFieldChange} increment={this.handleIncrement} decrement={this.handleDecrement} />
                            <Select label="Pixel contrast:" name='gameTime' value={this.state.gameTime} change={this.handleFieldChange} options={this.pixelsContrast}/>
                        </section>
                    </div>
                    <div className={classes.btnsRow}>
                        <Button text='ZAPISZ' />
                    </div>
                </form>
            </div>
        );
    };
}

export default SettingsPage;
