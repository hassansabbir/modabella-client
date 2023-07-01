import { useStripe, CardElement, useElements } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Providers/AuthProvider";
import "./paymentStyles.css";

const CheckOutForm = ({ carts, price }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axios
        .post(`${import.meta.env.VITE_SERVER_API}/create-payment-intent`, {
          price: price,
        })
        .then((res) => setClientSecret(res.data.clientSecret))
        .catch((err) => console.log(err));
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log("payment method", paymentMethod);
    }
    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
    }
    console.log("payment intent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        user: user?.email,
        productName: carts.name,
        transactionId: paymentIntent.id,
        itemsId: carts.map((item) => item._id),
        items: carts.map((itm) => itm.productName),
        quantity: carts.length,
        status: "purchased",
        date: new Date(),
        price,
      };
      axios
        .post(`${import.meta.env.VITE_SERVER_API}/payments`, payment)
        .then((res) => {
          console.log(res.data);
          if (res.data.insertResult.insertedId) {
            Swal.fire({
              title: "Payment Completed",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-neutral btn-sm my-5"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-2xl text-red-600">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction Successful. <br />
          Transaction Id: {transactionId}
        </p>
      )}
    </>
  );
};

export default CheckOutForm;
