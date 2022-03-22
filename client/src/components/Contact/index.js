import React, { useState } from "react";
import FormButton from '../FormButton';
import TextField from '../TextField';
import FormFeedback from '../FormFeedback'
import Toolbar from '../Toolbar'
import LayoutHome from '../Hero/LayoutHome'

function Contact() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

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
      } else {
        window.alert('An error occured. Please try again! Make sure that all fields are completed and you are using a valid email address.')
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <LayoutHome>
        <Toolbar>
          <h1>Contact Us</h1>
        </Toolbar>

        <form
          onSubmit={handleSubmit}
          style={{ width: '70%' }}
        >

          <TextField
            style={{ width: "95%", margin: "5px" }}
            type="text"
            size='xlarge'
            isRequired='true'
            form label='Full Name'
          />

          <TextField
            style={{ width: "95%", margin: "5px" }}
            type="text"
            size='xlarge'
            isRequired='true'
            form label='Email'
            name="user_email"
          />

          <TextField
            style={{ width: "95%", margin: "5px" }}
            type="text"
            size='xlarge'
            isRequired='true'
            textarea name="message"
            form label='Message'
            multiline rows={8} />

          <FormButton
            style={{ height: '6vh', width: "50px" }}
            type="submit"
            value="Send"
            className="send-button form-control btn btn-primary"
          > Submit

          </FormButton>

          <FormFeedback
          />

        </form>
      </LayoutHome>
    </>
  );
}

export default Contact;
