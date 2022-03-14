import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row>
        <Col>
          <img
            className="d-block w-100"
            src="https://github.com/nelsonRoberts1968/so_cal_web/blob/develop/src/assets/images/Event9.jpeg?raw=true"
            alt="Event 2"
          />
        </Col>
        <Col>
          <Form>
            <h1> Member Login </h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
