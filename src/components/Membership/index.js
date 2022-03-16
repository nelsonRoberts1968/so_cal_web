import React from "react";
import { useState } from "react";
import StripeContainer from "./StripeContainer";

const Membership = () => {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="PaymentContainer form">
      <h1 className="PaymentFormHeader">SoCal Tanzania Community Membership</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$50.00</h3>
          <button onClick={() => setShowItem(true)}>Purchase Membership</button>
        </>
      )}
    </div>
  );
};

export default Membership;
