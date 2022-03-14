import React from "react";
import { Container, Button, Form } from "react-bootstrap";

const Home = () => {
  return (
    <Container fluid>
      <img
        className="d-block w-100"
        src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/Event9.jpeg?raw=true"
        alt="Event 2"
      />
      <hr />
      <br />
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
