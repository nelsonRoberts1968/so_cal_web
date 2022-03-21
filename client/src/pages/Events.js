import React from "react";
import EventList from "../components/Events/EventsList";
import EventForm from "../components/Events/EventForm";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
// Add QUERY_ME_BASIC below if needed
import { QUERY_EVENTS } from "../utils/queries";

const Events = () => {
  //Loading property is going to be used to conditionally render the pages 
  const { loading, data } = useQuery(QUERY_EVENTS);
  //   const { data: userData } = useQuery(QUERY_ME_BASIC);
  const events = data?.events || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="flex-row justify-space-between">
        {loggedIn && (
          <div className="col-12 mb-3">
            <EventForm />
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && "col-lg-8"}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <EventList thoughts={events} title="Some upcoming events..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Events;
<<<<<<< HEAD
=======

>>>>>>> develop
