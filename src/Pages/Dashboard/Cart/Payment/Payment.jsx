import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  return (
    <div className="w-6/12">
      <h2 className="text-5xl text-center my-10 font-description">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
