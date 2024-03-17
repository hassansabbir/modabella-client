import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../Providers/AuthProvider";
import moment from "moment";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [myPurchased, setMyPurchased] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_SERVER_API}/myPayments/${user?.email}`)
      .then((data) => setMyPurchased(data.data));
  }, [user?.email]);
  // console.log(myPurchased);

  return (
    <div className="w-full">
      <Helmet>
        <title>My Products - ModaBella</title>
      </Helmet>
      <h2 className="text-5xl text-center my-10  font-description">
        My Purchased Products {myPurchased.length}
      </h2>
      <div className="grid p-5 gap-10 md:grid-cols-4 grid-cols-1">
        {myPurchased.map((item) => (
          <div key={item._id} className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center">
              <h2 className="card-title">{moment(item.date).format("LL")}</h2>
              <div className="text-left my-5">
                <p>
                  <span className="font-extrabold text-lg">Total Item:</span>{" "}
                  {item?.items?.length}
                </p>
                <p>
                  <span className="font-extrabold text-lg">Total Price:</span> $
                  {item?.price}
                </p>
                <p>
                  <span className="font-extrabold text-lg">
                    Transaction Id:
                  </span>{" "}
                  {item.transactionId}
                </p>
                <p>
                  <span className="font-extrabold text-lg">Status:</span>
                  <span className="bg-green-300 p-1 rounded-lg">
                    {item.status}
                  </span>
                </p>
              </div>
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
