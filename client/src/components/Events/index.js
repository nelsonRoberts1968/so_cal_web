import * as React from "react";
import Calendar from "./Calendar";
import EventsForm from "./EventForm";
import EventList from "./EventsList";

function Events() {
  return (
    <React.Fragment>
      <Calendar></Calendar>
      <EventList></EventList>
      <EventsForm></EventsForm>
    </React.Fragment>
  );
}

export default Events;
