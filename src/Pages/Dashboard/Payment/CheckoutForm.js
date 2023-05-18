import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({booking}) => {
    const [cardError,setCardError] = useState('')
    const [success,setSuccess] = useState('');
    const [processing,setProcessing] = useState(false);
    const[transactionId,setTransactionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const stripe = useStripe()
    const elements = useElements()
    const {price,product,email,_id}=booking

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("http://localhost:5000/create-payment-intent", {
        method: "POST",
        headers: {
           "Content-Type": "application/json",
          },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!stripe || !elements || processing){
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
          }
          const {error,paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
          })
          if(error){
            setCardError(error.message)
          }
          else{
            setCardError('')
          }
          setSuccess('')
          setProcessing(true)

  
  const {paymentIntent, error:confirmError}= await stripe.confirmCardPayment(
    clientSecret, 
    {
    payment_method: {
      card: card,
      billing_details: {
        name: product,
        email: email,
      },
    },
  })
  if(confirmError){
    setCardError(confirmError.message)
    return;
  }
  if(paymentIntent.status === "succeeded"){
    
    //store payment info in the database
    const payment ={
      price,
      transactionId: paymentIntent.id,
      email: email,
      bookingId: _id
    }
    fetch('http://localhost:5000/payments',{
      method:'POST',
      headers:{
        'content-type':'application/json',
        //authorizarion: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(payment)
    })
    .then(res=>res.json9)
    .then(data => {
      if(data.insertedId){
        setSuccess('your booking is confirmed');
        setTransactionId(paymentIntent.id)
      }
    })
  }
  setProcessing(false)
  
    }
    return (
        <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-sm mt-4' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button>
        <p>{cardError}</p>
        {
          success && <div>
            <p className='text-green-500'>{success}</p>
            <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
          </div>
        }
      </form>
    );
};

export default CheckoutForm;