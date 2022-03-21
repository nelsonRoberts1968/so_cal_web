import React, { useState } from "react";
import { useMutation } from "@apollo/client";
<<<<<<< HEAD
import { LOGIN_USER } from "../utils/mutations";
import Toolbar from '../components/Toolbar'
import LayoutHome from '../components/Hero/LayoutHome'
import Button from '../components/Button';
import TextField from '../components/TextField';
import FormFeedback from '../components/FormFeedback'

=======
import { LOGIN } from "../utils/mutations";
>>>>>>> develop
import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
<<<<<<< HEAD
  const [login, { error }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
=======
  const [login, { error }] = useMutation(LOGIN);


  // update state based on form input changes
  const handleChange = async (event) => {
>>>>>>> develop
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
<<<<<<< HEAD
      email: "",
      password: "",
=======
      email: '',
      password: '',
>>>>>>> develop
    });
  };

  return (
<<<<<<< HEAD
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
=======
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Login</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your email"
                name="email"
                type="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Login failed</div>}
          </div>
        </div>
      </div>
    </main>
>>>>>>> develop
  );
};

export default Login;
