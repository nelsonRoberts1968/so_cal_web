<<<<<<< HEAD
=======
<<<<<<< HEAD
// import React from "react";
// import { useParams } from "react-router-dom";

// import ReactionList from "../components/ReactionList";
// import ReactionForm from "../components/ReactionForm";

// import Auth from "../utils/auth";
// import { useQuery } from "@apollo/client";
// import { QUERY_EVENT } from "../utils/queries";

// const SingleEvent = (props) => {
//   const { id: eventId } = useParams();

//   const { loading, data } = useQuery(QUERY_EVENT, {
//     variables: { id: eventId },
//   });

//   const event = data?.event || {};

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <div className="card mb-3">
//         <p className="card-header">
//           <span style={{ fontWeight: 700 }} className="text-light">
//             {event.username}
//           </span>{" "}
//           event created on {event.createdAt}
//         </p>
//         <div className="card-body">
//           <p>{event.eventText}</p>
//         </div>
//       </div>

//       {event.reactionCount > 0 && <ReactionList reactions={event.reactions} />}

//       {Auth.loggedIn() && <ReactionForm eventId={event._id} />}
//     </div>
//   );
// };

// export default SingleEvent;
=======
>>>>>>> develop
import React from "react";
import { useParams } from "react-router-dom";

import ReactionList from "../components/ReactionList";
import ReactionForm from "../components/ReactionForm";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_EVENT } from "../utils/queries";

const SingleEvent = (props) => {
  const { id: eventId } = useParams();

  const { loading, data } = useQuery(QUERY_EVENT, {
    variables: { id: eventId },
  });

  const event = data?.event || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {event.username}
          </span>{" "}
          event created on {event.createdAt}
        </p>
        <div className="card-body">
          <p>{event.eventText}</p>
        </div>
      </div>

      {event.reactionCount > 0 && <ReactionList reactions={event.reactions} />}

      {Auth.loggedIn() && <ReactionForm eventId={event._id} />}
    </div>
  );
};

export default SingleEvent;
<<<<<<< HEAD
=======
>>>>>>> 85264aa (changed file structure, added login and signup logic, separated client and server files,added dev invironment to root folder)
>>>>>>> develop
