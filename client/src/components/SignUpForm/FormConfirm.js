import React, { Component, useState } from 'react'
import Button from '@mui/material/Button'
import { List, ListItem, ListItemText } from '@mui/material';
import Toolbar from '../Toolbar'
import LayoutHome from '../Hero/LayoutHome'
import FormButton from '../FormButton';
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import Auth from '../../utils/auth';

export class FormConfirm extends Component {

    

    continue = async (e) => {
        const { values: { firstName, lastName, email, phone, username, password } } = this.props;

        const [formState, setFormState] = useState({
            firstName: {firstName}, lastName: {lastName}, email: {email}, username: {username}, password: {password}
        })
        
        e.preventDefault();
        const[addUser, { error }] = useMutation(ADD_USER);
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            Auth.login(data.addUser.token);
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
                                    
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Last Name'
                                    
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Email'
                                    
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Phone'
                                    
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Username'
                                    
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary='Password'
                                    
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