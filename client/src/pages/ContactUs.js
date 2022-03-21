import React, { useState } from "react";
<<<<<<< HEAD
import Contact from '../components/Contact'

const ContactUs = () => {
  return (
    <Contact></Contact>
  )
}

export default ContactUs;
=======


const ContactUs = () => {
  const [formState, setFormState] = useState(
    {
      fullName: '',
      email: '',
      password: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState ({
      ...formState,
      [name]: value,
    });
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch('http:localhost:3001/api/contact',
        {
          method: 'POST',
          body: JSON.stringify({
          })
        })
    } catch(error) {
      console.log(error);
    }
  };
      

  return (
    <div className="container-border">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="contact-form-title">Contact Form</h1>
        <label>Full Name:</label>
        <input 
        type="fullName" 
        name="fullName" 
        id="fullName"
        value={formState.fullName}
        onChange={handleChange}
        className="form-control" />

        <label>Email:</label>
        <input 
        type="email" 
        name="email" className="form-control" 
        id="email"
        value={formState.email}
        onChange={handleChange}
        />

        <label>Message:</label>
        <textarea name="message" rows="4" className="form-control" />
        <input
          type="message"
          name="message" className="form-control"
          id="message"
          value={formState.message}
          onChange={handleChange}
          />

        <div>
        <button 
        type='submit'
        value='send'
        className='send-button form-control btn btn-primary'
        > Submit
        </button>
        </div>
      </form>
    </div>
  );
}

export default ContactUs;
>>>>>>> develop
