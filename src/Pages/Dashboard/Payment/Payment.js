import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_pk);

const Payment = () => {
  const booking = useLoaderData();
 
  const { product, price } = booking;

  return (
    <div>
      <h3 className="text-3xl">Payment for {product}</h3>
      <p>
        Please pay <strong>${price}</strong> for confirm your booking
        
      </p>
      <div className="w-96 my-12 shadow-md p-6 rounded-md">
        <Elements stripe={stripePromise}>
          <CheckoutForm 
          booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
