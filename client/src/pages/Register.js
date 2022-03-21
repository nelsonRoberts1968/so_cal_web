import React, { useState } from "react";
// import SignUpForm from '../components/SignUpForm'
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import TextField from '../components/TextField';
import Toolbar from '../components/Toolbar'
import LayoutHome from '../components/Hero/LayoutHome'
import Button from '../components/Button';

import Auth from "../utils/auth";

const SignUp = (props) => {
    const [formState, setFormState] = useState({
        username: "",
        password: "",
        email: "",
    });
    const [addUser, { error }] = useMutation(ADD_USER);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
        } catch (e) {
            console.error(e);
        }

        //clear form values
        setFormState({
            username: '',
            email: '',
            password: ''
        });
    };

    return (
        <>
            <LayoutHome>
                <Toolbar>
                    <h1>Register</h1>
                </Toolbar>
                <form
                    onSubmit={handleFormSubmit}
                    style={{ width: '70% ' }}

                >
                    <TextField
                        style={{ width: '95%', margin: '5px' }}
                        type='input'
                        size='lg'
                        isRequired='true'
                        form label='Username'
                        color='primary'
                        onChange={handleChange}
                    />
                    <TextField
                        style={{ width: '95%', margin: '5px' }}
                        type='input'
                        size='lg'
                        isRequired='true'
                        form label='Password'
                        color='primary'
                        onChange={handleChange}
                    />
                    <TextField
                        style={{ width: '95%', margin: '5px' }}
                        type='input'
                        size='lg'
                        isRequired='true'
                        form label='Email'
                        color='primary'
                        onChange={handleChange}
                    />
                    <Button
                        size='large'
                        type="submit"
                        value="Send"
                        className="send-button form-control btn btn-primary"
                    > Log in </Button>
                </form>
            </LayoutHome>
        </>
    )
};

export default SignUp;