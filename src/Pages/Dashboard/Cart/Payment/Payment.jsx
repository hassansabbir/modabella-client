import { loadStripe } from "@stripe/stripe-js";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import useCart from "../../../../hooks/useCart";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const [carts] = useCart();
  const total = Number(
    carts.reduce((sum, item) => item.price + sum, 0).toFixed(2)
  );
  const tax = Number(((total * 7) / 100).toFixed(2));
  const shipping = Number(((total * 5) / 100).toFixed(2));
  const grandTotal = (total + tax + shipping).toFixed(2);

  return (
    <div className="w-6/12">
      <h2 className="text-5xl text-center my-10 font-description">Payment</h2>
      <Elements stripe={stripePromise}>
        <CheckOutForm
          carts={carts}
          price={parseFloat(grandTotal)}
        ></CheckOutForm>
      </Elements>
    </div>
  );
};

export default Payment;
