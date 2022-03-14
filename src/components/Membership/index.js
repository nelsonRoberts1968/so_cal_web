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

// const PUBLIC_KEY = "pk_test_51KchncD2W3drDzB51DLkywbTAbU9tDG9hkxnIv62thqCX4epuerVl8aHS6uCu0u0u7PIxqZe1ROPC7PFJuKtQAMl00G47zGkQs";

// const stripeTestPromise = loadStripe(PUBLIC_KEY);

// export default function StripeContainer() {
//   return (
//     <Elements stripe={stripeTestPromise}>
//         <PaymentForm />
//     </Elements>
//   )
// }
