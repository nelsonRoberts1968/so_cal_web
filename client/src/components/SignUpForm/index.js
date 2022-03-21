import React, { Component } from 'react'
import FormSignUp from './FormSignUp'
import FormPersonalDetails from './FormPersonalDetails';
import FormConfirm from './FormConfirm';
import Success from './Success'
import { List, ListItem, ListItemText } from '@mui/material';
import TextField from '../TextField';
import FormButton from '../FormButton';
import Toolbar from '../Toolbar'
import LayoutHome from '../Hero/LayoutHome'

export class SignUpForm extends Component {
    state = {
        step: 1,
        username: '',
        password: '',
    }

    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
    }
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        const { username, password } = this.state;
        const values = { username, password }

        switch (step) {
            case 1:
                return (
                    <FormSignUp
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <FormPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <FormConfirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 4:
                return <Success />
        }
    }
}

export default SignUpForm