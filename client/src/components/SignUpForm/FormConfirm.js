import React, { Component } from 'react'
import Button from '@mui/material/Button'
import { List, ListItem, ListItemText } from '@mui/material';
import Toolbar from '../Toolbar'
import LayoutHome from '../Hero/LayoutHome'
import FormButton from '../FormButton';
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from '../utils/auth';

export class FormConfirm extends Component {
    continue = e => {
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email, phone, username, password } } = this.props;
        return (
            <React.Fragment>
                <LayoutHome>
                    <Toolbar>
                        <h1> Confirm User Data </h1>
                    </Toolbar>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary='First Name'
                                    secondary={firstName}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Last Name'
                                    secondary={lastName}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Email'
                                    secondary={email}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Phone'
                                    secondary={phone}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Username'
                                    secondary={username}
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Password'
                                    secondary={password}
                                />
                            </ListItem>
                        </List>
                        <br />
                        <FormButton
                            label='Confirm and Continue'
                            primary={true}
                            onClick={this.continue}
                        >Confirm</FormButton>
                        <FormButton
                            label='Back'
                            primary={false}
                            onClick={this.back}
                        >Back</FormButton>
                </LayoutHome>
            </React.Fragment>

        )

    }
}

export default FormConfirm;