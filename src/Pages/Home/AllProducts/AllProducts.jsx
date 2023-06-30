import { useEffect, useState } from "react";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_API}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  console.log(products);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-5xl font-description text-center mb-20">
        Browse All Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {products.map((product) => (
          <div key={product._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={product?.image} alt={product?.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-3xl">{product?.name}</h2>
              <p className="text-2xl">
                <span className="font-extrabold">Price:</span> ${product?.price}
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-neutral">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;