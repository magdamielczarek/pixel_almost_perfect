import React from 'react';
import { Transition } from 'react-transition-group';
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
            gameTime: 180000,
            xNumber: 20,
            yNumber: 20,
            contrast: 'low',
            showSectionFirst: false
        };
    };

    pixelsContrast = [
        {'id': 1, 'value': ''},
        {'id': 2, 'value': 'low'},
        {'id': 3, 'value': 'medium'},
        {'id': 4, 'value': 'high'}
    ];

    componentDidMount() {
        this.setState({showSectionFirst: true});
    }

    handleFieldChange = (event) => {
        // const settings = {...this.state.userSettings};
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleDecrement = (e) => {
        console.log(e.target, 'decrement');
    };

    handleIncrement = (e) => {
        console.log(e.target, 'increment');
    };

    submitSettings = () => {
        // save to local storage
    };

    render(){
        return (
            <div className={classes.settingsContainer}>
                <form className={classes.settingsForm}
                      onSubmit={this.submitSettings}>
                    <Transition in={this.state.showSectionFirst}
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
                                            value={this.state.username}
                                            change={this.handleFieldChange}/>
                                        <StandardInput
                                            label='User email:'
                                            name='userEmail'
                                            value={this.state.userEmail}
                                            change={this.handleFieldChange}/>
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
                                                     value={this.state.gameTime}
                                                     change={this.handleFieldChange}
                                                     increment={this.handleIncrement}
                                                     decrement={this.handleDecrement} />
                                        <InputNumber label="X-axis size:"
                                                     name='xNumber'
                                                     value={this.state.xNumber}
                                                     change={this.handleFieldChange}
                                                     increment={this.handleIncrement}
                                                     decrement={this.handleDecrement} />
                                        <InputNumber label="Y-axis size:"
                                                     name='yNumber'
                                                     value={this.state.yNumber}
                                                     change={this.handleFieldChange}
                                                     increment={this.handleIncrement}
                                                     decrement={this.handleDecrement} />
                                        <Select label="Pixel contrast:"
                                                name='contrast'
                                                value={this.state.contrast}
                                                change={this.handleFieldChange}
                                                options={this.pixelsContrast}/>
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
}

export default SettingsPage;
