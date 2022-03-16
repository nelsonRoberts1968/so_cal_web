import React, { useState } from "react";
import { Form, Button, Row, Col} from "react-bootstrap";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>

    <Form>
      <Form.Group as={Col} controlId="formGridName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter your full name" />
      </Form.Group>
      <Form.Group as={Col} controlId="formGridContact">
        <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="user@example.com" />
          <Form.Label>Phone number</Form.Label>
          <Form.Control type="phone" placeholder="(555)555-5555" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Message: </Form.Label>
          <Form.Control type="text" placeholder="Enter Message" id="message" required />
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </>
  );
};

export default Contact;
