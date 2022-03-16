import React, { useState } from "react";
import { Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { render } from "@testing-library/react";

const Contact = () => {
  const [homeSelected, setHomeSelected] = useState(true);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lgdlwvp",
        "template_dt5m3ro",
        e.target,
        "G1xb6293eXOTE8M2W"
      )
      .then((res) => {
        console.log(res);
        //return home component upon succeful send
        // render(){
        //   return(

        //   )
        // }
      })
      .catch((err) =>
       console.log(err));
  }

  return (
    <div className="container-border">
      <form className="contact-form" onSubmit={sendEmail}>
        <h1 className="contact-form-title">Contact Form</h1>
        <label>Full Name:</label>
        <input type="text" name="name" className="form-control" />

        <label>Email:</label>
        <input type="email" name="user_email" className="form-control" />

        <label>Message:</label>
        <textarea name="message" rows="4" className="form-control" />
        <input
          type="submit"
          value="Send"
          className="send-button form-control btn btn-primary"
        />
      </form>
    </div>
  );
};

export default Contact;
