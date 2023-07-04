import axios from "axios";
import { useContext, useEffect, useState } from "react";
import moment from "moment";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProvider";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/myPayments/${user?.email}`)
      .then((data) => setPayments(data.data));
  }, [user?.email]);
  console.log(payments);

  return (
    <div className="max-w-7xl ">
      <Helmet>
        <title>Payment History - ModaBella</title>
      </Helmet>
      <h2 className="text-5xl text-center font-description">Payment History</h2>
      <div className="overflow-x-auto">
        <table className="table text-2xl">
          {/* head */}
          <thead>
            <tr className="text-2xl">
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
                {payment.status === "purchased" ? (
                  <td>
                    <button className="btn bg-green-400 btn-sm">
                      {payment.status}
                    </button>
                  </td>
                ) : (
                  <td>
                    <button className="btn bg-red-400 btn-sm">
                      {payment.status}
                    </button>
                  </td>
                )}
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
