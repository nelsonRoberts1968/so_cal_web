<<<<<<< HEAD
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
    <>
<LayoutHome>
    <Toolbar>
      <h1>Contact Us</h1>
        </Toolbar>
      
      <form
      onSubmit={handleSubmit}
      style= {{width: '70%'}}
      >
     
        <TextField
        style={{ width: "95%", margin: "5px" }}
        type="text"
        size='xlarge'
        isRequired = 'true'
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
        multiline rows={8}/>

        <FormButton
            style={{ height: '6vh', width: "50px"}}
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
=======
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../Typography';
import { Link } from 'react-router-dom';


function Contact() {
    return (
        <Container
            component="section"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 9 }}
        >
            <Button
                sx={{
                    border: '4px solid currentColor',
                    borderRadius: 0,
                    height: 'auto',
                    py: 2,
                    px: 5,
                }}
            >
                <Typography variant="h4" component="span">
                    Got any questions?
                </Typography>
            </Button>
            <Typography variant="subtitle1" sx={{ my: 3 }}>
                We are here to help. Get in touch!
            </Typography>
            <Box
                component="button"
                href="/contact"
                alt="contact-us-button"
                sx={{ width: 120 }}
            > Contact Us 
            <Link to="/contact"></Link>
            </Box>
        </Container>
    );
}

export default Contact;

// import React, { useState } from "react";


// function Contact() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [alert, setAlert] = useState('');

//   let handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       let res = await fetch('http:localhost:3001/api/contact',
//         {
//           method: 'POST',
//           body: JSON.stringify({
//             fullName: fullName,
//             email: email,
//             message: message
//           })
//         });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         setFullName('');
//         setEmail('');
//         setMessage('');
//         setAlert('Your message has been sent! Someone will be with you shortly.')
//       } else {
//         setAlert('An error occured. Please try again! Make sure that all fields are completed and you are using a valid email address.')
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="container-border">
//       <form className="contact-form" onSubmit={handleSubmit}>
//         <h1 className="contact-form-title">Contact Form</h1>
//         <label>Full Name:</label>
//         <input type="text" name="name" className="form-control" />

//         <label>Email:</label>
//         <input type="email" name="user_email" className="form-control" />
//         <div>
//           <label>Message:</label>
//           <textarea name="message" rows="4" className="form-control" />
//           <input
//             type="submit"
//             value="Send"
//             className="send-button form-control btn btn-primary"
//           />
//           <div className="success-text row"> {setAlert ? setAlert : null}</div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Contact;

>>>>>>> develop
