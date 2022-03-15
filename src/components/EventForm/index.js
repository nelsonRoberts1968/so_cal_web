import { React, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';


function EventsForm() {
    // const { register, handleSubmit, formState: { errors } } = useForm();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');
    const [contactInfo, setContactInfo] = useState('');
    const [location, setLocation] = useState('');
    const [date, setDate] = useState('');
    const [link, setLink] = useState('');
    const [message, setMessage] = useState('');

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch('http:localhost:3001/api/event', {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                    contact: contact,
                    contactInfo: contactInfo,
                    location: location,
                    date: date,
                    link: link
                })
            });
            let resJson = await res.json();
            if (res.status === 200) {
                setTitle('');
                setDescription('');
                setContact('');
                setContactInfo('');
                setLocation('');
                setDate('');
                setLink('');
                setMessage('event created!')
            } else {
                setMessage('some error occured')
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <Container className='form-container'>
            <form className="event-form" onSubmit={handleSubmit}>
                <label className='event-form-title'>Add an upcoming event!</label>
                <label>Title</label>
                <input
                    type='text'
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)} />
                <label>Description</label>
                <input
                    type='text'
                    value={description}
                    placeholder="Enter a short description"
                    className='event-description'
                    onChange={(e) => setDescription(e.target.value)} />
                <label>Contact</label>
                <input
                    type='text'
                    value={contact}
                    placeholder="Your name"
                    onChange={(e) => setContact(e.target.value)} />
                <label>Contact Info</label>
                <input
                    type='text'
                    value={contactInfo}
                    placeholder="Your phone number and/or email"
                    className='event-contact-info'
                    onChange={(e) => setContactInfo(e.target.value)} />
                <label>Location</label>
                <input
                    type='text'
                    value={location}
                    placeholder="Event location"
                    className='event-location'
                    onChange={(e) => setLocation(e.target.value)} />
                <label>Date/Time</label>
                <input
                    type='text'
                    value={date}
                    placeholder="01/01/2022 5:00-7:00 PM"
                    className='event-date-time'
                    onChange={(e) => setDate(e.target.value)} />
                <label>Link</label>
                <input
                    type='text'
                    value={link}
                    placeholder="https://"
                    className='event-link'
                    onChange={(e) => setLink(e.target.value)} />

                <button type="submit" className='event-submit-btn'>Submit</button>

                <div className='message'>{message ? <p>{message}</p> : null}</div>
            </form>
        </Container>
    );
}

export default EventsForm;