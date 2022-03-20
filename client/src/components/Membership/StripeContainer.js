import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import React from 'react'
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51KchncD2W3drDzB51DLkywbTAbU9tDG9hkxnIv62thqCX4epuerVl8aHS6uCu0u0u7PIxqZe1ROPC7PFJuKtQAMl00G47zGkQs";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}
