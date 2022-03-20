import * as React from 'react';
import Calendar from './Calendar';
import EventsForm from './EventForm';

function Events() {
    return (
        <React.Fragment>
            <Calendar></Calendar>
            <EventsForm></EventsForm>
        </React.Fragment>
    );
}

export default (Events);