import React from 'react';
import { Container, Button, Form } from 'react-bootstrap';

const Login = () => {
    return (
    <Form class="form">
        <h1> Member Login </h1>
        <br />
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <div>
                <span>
                    <Form.Label>Email address: </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </span>
            </div>
        </Form.Group>
        <br />
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password: </Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
    </Form>
    )
};

export default Login;


