import React, { useState } from "react";
import { Form } from "react-bootstrap";

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
      <Form class="form" onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <div>
          <Form.Label>Full Name: </Form.Label>
          <Form.Control type="name" placeholder="Enter name" />
        </div>
        <br />
        <div>
          <Form.Label>Email address: </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </div>
        <br />
        <div>
          <Form.Label>Message: </Form.Label>
          <textarea placeholder="Enter Message" id="message" required />
        </div>
        <button type="submit">{status}</button>
      </Form>
    </>
  );
};

export default Contact;
