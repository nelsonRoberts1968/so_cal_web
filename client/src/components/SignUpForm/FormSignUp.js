import React, { Component } from 'react'
import FormButton from '../FormButton';
import TextField from '../TextField';
import Toolbar from '../Toolbar'
import LayoutHome from '../Hero/LayoutHome'

export class FormSignUp extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
                <React.Fragment>
                <LayoutHome>
                    <Toolbar>
                        <h1>Create User Account</h1>
                    </Toolbar>

                    <form
                        style={{ width: '70%' }}
                    >
  
                    <TextField
                            style={{ width: "95%", margin: "5px" }}
                            type="text"
                            size='md'
                            isRequired='true'
                        form label='Username'
                        onChange={handleChange('username')}
                        defaultValue={values.username}
                    />
                    <br />
                    <TextField
                            style={{ width: "95%", margin: "5px" }}
                            type="text"
                            size='md'
                            isRequired='true'
                            form label='Password'
                        onChange={handleChange('password')}
                        defaultValue={values.password}
                    />
                    <br />
                    <FormButton
                    label='Continue'
                    primary={true}
                    onClick={this.continue}
                    >Continue</FormButton>
                    </form>
                </LayoutHome>
                </React.Fragment>

        )

    }
}

export default FormSignUp