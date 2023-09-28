import { useEffect, useState } from "react";
import Banner from "./Banner/Banner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { FaExternalLinkAlt } from "react-icons/fa";

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
  const womansProducts = approvedProducts.filter(
    (product) => product.clothingCategory === "Womans"
  );

  return (
    <div className="pt-24">
      <Helmet>
        <title>Womans - ModaBella</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <p className="my-20 text-3xl text-center font-description">
          Step into Style: Explore our versatile women's wear collection for
          every occasion. From elegant dresses to chic tops and bottoms, find
          the perfect pieces to express your unique personality. Shop now and
          make a lasting impression!
        </p>
        <div className="grid gap-10 grid-cols-1 my-20 md:grid-cols-5">
          {womansProducts.map((product) => (
            <div
              key={product._id}
              className="w-60 bg-base-100 rounded-2xl shadow-xl"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <figure>
                <img
                  className="w-full rounded-t-2xl h-[350px]"
                  src={product?.image}
                  alt={product?.name}
                />
              </figure>
              <div className="p-3">
                <h2 className="text-xl font-bold">{product?.name}</h2>
                <p className="text-lg">
                  <span className="font-extrabold">Price:</span> $
                  {product?.price}
                </p>
                <Link to={`/details/${product._id}`}>
                  <p className="text-xl flex justify-end items-center hover:underline my-2 gap-2 font-extrabold">
                    View Details <FaExternalLinkAlt />{" "}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Womans;
