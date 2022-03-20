import React, { useState } from "react";


function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState('');

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('http:localhost:3001/api/contact',
        {
          method: 'POST',
          body: JSON.stringify({
            fullName: fullName,
            email: email,
            message: message
          })
        });
      let resJson = await res.json();
      if (res.status === 200) {
        setFullName('');
        setEmail('');
        setMessage('');
        setAlert('Your message has been sent! Someone will be with you shortly.')
      } else {
        setAlert('An error occured. Please try again! Make sure that all fields are completed and you are using a valid email address.')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-border">
      <form className="contact-form" onSubmit={handleSubmit}>
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
          <div className="success-text row"> {setAlert ? setAlert : null}</div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
