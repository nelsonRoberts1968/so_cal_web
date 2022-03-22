import React from "react";
import { useState } from "react";
import StripeContainer from "./StripeContainer";
import Toolbar from '../Toolbar'
import LayoutHome from '../Hero/LayoutHome'

const Membership = () => {
  const [showItem, setShowItem] = useState(false);
  return (

    <LayoutHome>
      <Toolbar>
        <h1 className="PaymentFormHeader">SoCal Tanzania Community Membership</h1>
      </Toolbar>

      <p>
        Memberships require a one-time $50 registration fee. This fee is used to renew non-profit licensing. If you have questions, please get in touch!</p>

      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$50.00</h3>
          <button onClick={() => setShowItem(true)}>Purchase Membership</button>
        </>
      )}
    </LayoutHome>
  );
};

export default Membership;
