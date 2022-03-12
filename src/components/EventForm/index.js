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
            <h3>Add New Event:</h3>
            <form className="event-form" onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={title}
                    placeholder="Event title"
                    onChange={(e) => setTitle(e.target.value)} />

                <input
                    type='text'
                    value={description}
                    placeholder="Event description"
                    onChange={(e) => setDescription(e.target.value)} />

                <input
                    type='text'
                    value={contact}
                    placeholder="Your name"
                    onChange={(e) => setContact(e.target.value)} />

                <input
                    type='text'
                    value={contactInfo}
                    placeholder="Your phone number and/or email"
                    onChange={(e) => setContactInfo(e.target.value)} />

                <input
                    type='text'
                    value={location}
                    placeholder="Event location"
                    onChange={(e) => setLocation(e.target.value)} />

                <input
                    type='text'
                    value={date}
                    placeholder="Event date and time"
                    onChange={(e) => setDate(e.target.value)} />

                <input
                    type='text'
                    value={link}
                    placeholder="Link to event url if available"
                    onChange={(e) => setLink(e.target.value)} />

                <button type="submit" className='submit-btn'>Create</button>

                <div className='message'>{message ? <p>{message}</p> : null}</div>
            </form>
        </Container>
    );
}

export default EventsForm;