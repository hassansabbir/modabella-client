import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {approvedProducts.slice(0, 6).map((product) => (
              <div
                key={product._id}
                className="card w-96 bg-base-100 shadow-xl"
              >
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {approvedProducts.map((product) => (
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
      )}
    </div>
  );
};

export default AllProducts;
