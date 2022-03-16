async function createEvent(event) {
    event.preventDefault();

    const title = document.querySelector('#event-title');
    const description = document.querySelector('.description');
    const contact = document.querySelector('.user');
    const location = document.querySelector('.location');
    const date = document.querySelector('.date');
    const link = document.querySelector('#link');

    const response = await fetch('http://localhost:3001/api/event/new', {
        method: 'POST',
        body: JSON.stringify({
            title,
            description,
            contact,
            location,
            date,
            link
        }),
        headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    // check the response status
    if (response.ok) {
        console.log('success');
        return;
    } else {
        alert(response.statusText);
    }
}


