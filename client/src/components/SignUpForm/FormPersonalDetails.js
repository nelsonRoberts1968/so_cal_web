import React, { Component } from 'react'
import TextField from '../TextField';
import { Button } from '@mui/material';
import FormButton from '../FormButton';
import Toolbar from '../Toolbar'
import LayoutHome from '../Hero/LayoutHome'

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
                <React.Fragment>
                <LayoutHome>
                    <Toolbar>
                        <h1>Personal Details</h1>
                    </Toolbar>
                    <form
                        style={{ width: '70%' }}
                    >
                    <TextField
                            style={{ width: "95%", margin: "5px" }}
                            type="text"
                            size='md'
                            isRequired='true'
                            form label='First Name'
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                    />
                    <br />
                    <TextField
                            style={{ width: "95%", margin: "5px" }}
                            type="text"
                            size='md'
                            isRequired='true'
                            form label='Last Name'
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                    />
                    <br />
                    <TextField
                            style={{ width: "95%", margin: "5px" }}
                            type="text"
                            size='md'
                            isRequired='true'
                            form label='Phone'
                        onChange={handleChange('phone')}
                        defaultValue={values.phone}
                    />
                    <br />
                    <TextField
                            style={{ width: "95%", margin: "5px" }}
                            type="text"
                            size='medium'
                            isRequired='true'
                            form label='Email'
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                    />
                    <br />
                
                    <FormButton
                        label='Continue'
                        primary={true}
                        onClick={this.continue}
                    >Continue</FormButton>
                    <FormButton
                        label='Back'
                        primary={false}
                        onClick={this.back}
                    >Back</FormButton>
                    </form>
                    </LayoutHome>
                </React.Fragment>

        )

    }
}


export default FormPersonalDetails