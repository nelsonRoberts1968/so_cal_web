import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Toolbar from '../components/Toolbar'
import LayoutHome from '../components/Hero/LayoutHome'
import Button from '../components/Button';
import TextField from '../components/TextField';
import FormFeedback from '../components/FormFeedback'

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <LayoutHome>
        <Toolbar>
          <h1>Log In</h1>
        </Toolbar>
        <form
          onSubmit={handleFormSubmit}
          style={{ width: '70%' }}
          
        >
          <TextField
            style={{ width: "95%", margin: "5px" }}
            type="input"
            size='xlarge'
            isRequired='true'
            form label='Email'
            color='primary'
            onChange={handleChange}
          />

          <TextField
            style={{ width: "95%", margin: "5px" }}
            type="input"
            size='xlarge'
            isRequired='true'
            form label='Password'
            onChange={handleChange}
          />
          <Button
            size='large'
            type="submit"
            value="Send"
            className="send-button form-control btn btn-primary"
          > Log in </Button>
          
          <FormFeedback>
            {error && <div>Login failed</div>}
          </FormFeedback>
        </form>
      </LayoutHome>
    </>
  );
};

export default Login;
