import axios from "axios";
import { useEffect, useState } from "react";

const MyProducts = () => {
  const [myPurchased, setMyPurchased] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/payments`)
      .then((data) => setMyPurchased(data.data));
  }, []);
  console.log(myPurchased);

  return (
    <div className="w-full">
      <h2 className="text-5xl text-center my-10  font-description">
        My Purchased Products {myPurchased.length}
      </h2>
      <div className="grid p-5 gap-10 md:grid-cols-4 grid-cols-1">
        {myPurchased.map((item) => (
          <div key={item._id} className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">Items: {item.items}</h2>
              <p>Transaction Id: {item.transactionId}</p>
              <p>
                Status:{" "}
                <span className="bg-green-300 p-1 rounded-lg">
                  {item.status}
                </span>
              </p>
              <div className="card-actions">
                <button className="btn btn-neutral">view Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
