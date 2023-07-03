import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const MyAddedProducts = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);

  const { data: products = [] } = useQuery(["products"], async () => {
    const res = await fetch(
      `${import.meta.env.VITE_SERVER_API}/allProducts/${user?.email}`
    );
    return res.json();
  });
  console.log(products);

  return (
    <div className="max-w-7xl">
      <Helmet>
        <title>My Added Products - ModaBella</title>
      </Helmet>
      <h2 className="text-5xl text-center font-description">
        My Added Products {products.length}
      </h2>
      <div className="grid my-20 grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((product) => (
          <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                className="w-full h-[550px]"
                src={product?.image}
                alt={product?.name}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{product?.name}</h2>
              <p className="text-2xl">
                <span className="font-extrabold">Price:</span> ${product?.price}
              </p>
              <div className="card-actions justify-end">
                <Link to={`/details/${product._id}`}>
                  <button className="btn btn-neutral">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAddedProducts;
