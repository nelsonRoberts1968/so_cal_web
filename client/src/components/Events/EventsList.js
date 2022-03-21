import React from "react";
import { Link } from "react-router-dom";

const EventList = ({ events, title }) => {
  // if (!events.length) {
  //   return <h3>No Events Yet</h3>;
  // }

  return (
    <div>
      <h1>UPCOMING EVENTS:</h1>
      <h3>No events listed</h3>
    </div>
  );
};

export default EventList;
