import React, { Component } from 'react'
import { List, ListItem, ListItemText } from '@mui/material';
import Toolbar from '../Toolbar'
import LayoutHome from '../Hero/LayoutHome'
import FormButton from '../FormButton';
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

const [addUser, { error }] = useMutation(ADD_USER);

export class FormConfirm extends Component {

    continue = e => {
        e.preventDefault();
        try {
            const { data } = addUser({
                variables: { ...this.props.formState, [this.props.name]: this.props.value }
            });
        } catch (e) {
            console.error(e);
        }
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
                                secondary={this.props.firstName}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='Last Name'
                                secondary={this.props.lastName}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='Email'
                                secondary={this.props.email}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='Phone'
                                secondary={this.props.phone}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='Username'
                                secondary={this.props.username}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemText
                                primary='Password'
                                secondary={this.props.password}
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