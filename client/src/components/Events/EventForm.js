import { React, useState } from 'react';
import Container from 'react-bootstrap/Container';

import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "../../utils/mutations";



const EventsForm = (props) => {

    const [formState, setFormState] = useState({
        title: '',
        description: '',
        contact: '',
        contactInfo: '',
        location: '',
        date: '',
        link: '',
        message: ''
    });

    const [addEvent, { error }] = useMutation(ADD_EVENT);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            let res = await fetch('http:localhost:3001/api/event', {
                method: "POST",
                body: JSON.stringify({
                    title: this.value,
                    description: this.value,
                    contact: this.value,
                    contactInfo: this.value,
                    location: this.value,
                    date: this.value,
                    link: this.value,
                })
            })
            if (res.status === 200) {
                setFormState({
                    title: '',
                    description: '',
                    contact: '',
                    contactInfo: '',
                    location: '',
                    date: '',
                    link: '',
                    message: 'event created!',
                })
            } else {
                setFormState({
                    title: '',
                    description: '',
                    contact: '',
                    contactInfo: '',
                    location: '',
                    date: '',
                    link: '',
                    message: 'An error occured!',
                })
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container className='form-container'>
            <form className="event-form" onSubmit={handleFormSubmit}>
                <label className='event-form-title'>Add an upcoming event!</label>
                <label>Title</label>
                <input
                    type='text'
                    value={this.state.title}
                    placeholder="Title"
                    onChange={handleChange} />
                <label>Description</label>
                <input
                    type='text'
                    value={this.state.description}
                    placeholder="Enter a short description"
                    className='event-description'
                    onChange={handleChange} />
                <label>Contact</label>
                <input
                    type='text'
                    value={this.state.contact}
                    placeholder="Your name"
                    onChange={handleChange} />
                <label>Contact Info</label>
                <input
                    type='text'
                    value={this.state.contactInfo}
                    placeholder="Your phone number and/or email"
                    className='event-contact-info'
                    onChange={handleChange} />
                <label>Location</label>
                <input
                    type='text'
                    value={this.state.location}
                    placeholder="Event location"
                    className='event-location'
                    onChange={handleChange} />
                <label>Date/Time</label>
                <input
                    type='text'
                    value={this.state.date}
                    placeholder="Event Date"
                    className='event-date'
                    onChange={handleChange} />
                <label>Link</label>
                <input
                    type='text'
                    value={this.state.link}
                    placeholder="https://"
                    className='event-link'
                    onChange={handleChange} />

                <button type="submit" className='event-submit-btn'>Submit</button>
            </form>
        </Container>
    );
}

export default EventsForm;