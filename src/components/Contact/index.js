import React, { useState } from "react";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { render } from "@testing-library/react";

const Result = () => {
  return (
    <p>
      Your message has been sucessfully sent,Management will get back to you as
      soon as possible!!
    </p>
  );
};
function Contact(props) {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lgdlwvp",
        "template_dt5m3ro",
        e.target,
        "G1xb6293eXOTE8M2W"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div className="container-border">
      <form className="contact-form" onSubmit={sendEmail}>
        <h1 className="contact-form-title">Contact Form</h1>
        <label>Full Name:</label>
        <input type="text" name="name" className="form-control" />

        <label>Email:</label>
        <input type="email" name="user_email" className="form-control" />
        <div>
        <label>Message:</label>
        <textarea name="message" rows="4" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="send-button form-control btn btn-primary"
        />
         <div className="success-text row"> {result ? <Result /> : null}</div>
         </div>
      </form>
    </div>
  );
}

export default Contact;
