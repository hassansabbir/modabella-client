import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import { Link } from "react-router-dom";

const Womans = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_API}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const approvedProducts = products.filter(
    (product) => product.status === "approved"
  );
  const mensProducts = approvedProducts.filter(
    (product) => product.clothingCategory === "Womans"
  );

  return (
    <div className="pt-24">
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <p className="my-20 text-3xl text-center font-description">
          Step into Style: Explore our versatile women's wear collection for
          every occasion. From elegant dresses to chic tops and bottoms, find
          the perfect pieces to express your unique personality. Shop now and
          make a lasting impression!
        </p>
        <div className="grid gap-10 grid-cols-1 my-20 md:grid-cols-3">
          {mensProducts.map((product) => (
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
                  <span className="font-extrabold">Price:</span> $
                  {product?.price}
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
    </div>
  );
};

export default Womans;
