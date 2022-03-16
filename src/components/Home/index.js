import React from "react";
import { Container, Button, Form } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <br />
      <Form className="form">
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

        <Button variant="primary" type="submit">
          Login
        </Button>
        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </Container>
  );
};

export default Home;
