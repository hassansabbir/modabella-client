import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [seeAll, setSeeAll] = useState(true);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_API}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const approvedProducts = products.filter(
    (product) => product.status === "approved"
  );

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-description text-center mb-20">
        Browse All Products
      </h2>
      {seeAll ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {approvedProducts.slice(0, 10).map((product) => (
              <div
                key={product._id}
                className="lg:w-60 w-80 bg-base-100 rounded-2xl mx-auto shadow-xl"
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
          <div className="text-center my-10">
            <button
              onClick={() => setSeeAll(!seeAll)}
              className="btn btn-neutral"
            >
              See All
            </button>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {approvedProducts.map((product) => (
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
      )}
    </div>
  );
};

export default AllProducts;
