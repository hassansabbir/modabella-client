import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/payments`)
      .then((data) => setPayments(data.data));
  }, []);
  console.log(payments);

  return (
    <div className="w-full">
      <Helmet>
        <title>Payment History - ModaBella</title>
      </Helmet>
      <h2 className="text-5xl text-center font-description">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Id</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Product Status</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td>{payment.transactionId}</td>
                <td>{payment.quantity}</td>
                <td>{payment.price}</td>
                <td>{payment.status}</td>
                <td>{moment(payment.date).format("LLL")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
