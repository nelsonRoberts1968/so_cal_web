import { React, useState } from 'react';
import axios from 'axios';

const Contact = () => {

  const [inputs, setInputs] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    const { name, value } = e.target
    setInputs(prev => ({ ...prev, [name]: value }))
  };

  const handleSubmit = e => {
    e.preventDefault()
    const { name, email, message } = inputs
    //post request
    axios.post('/contact', {
      name,
      email,
      message
    }).then((response) => {
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })

  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-title">
              <h2 className="title">Contact Us</h2>
              <p>We'd love to hear from you.</p><hr />
              <form id="contact-form" onSubmit={handleSubmit}
                method="POST">
                <div className="form-group">
                  <div className="row">
                    <div className="col-md-6">
                      <input placeholder="Name" id="name" type="text"
                        className="form-control"
                        onChange={handleChange} />
                    </div>
                    <div className="col-md-6">
                      <input placeholder="Email" id="email" type="email"
                        className="form-control" aria-describedby="emailHelp"
                        onChange=
                        {handleChange} />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea placeholder="Message" id="message"
                    className="form-control" rows="1"
                    onChange={handleChange} />
                </div>
                <button type="submit" className="primary-btn submit">Submit</button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Contact;