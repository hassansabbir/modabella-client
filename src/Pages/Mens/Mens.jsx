import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Mens = () => {
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
    (product) => product.clothingCategory === "Mens"
  );

  return (
    <div className="pt-24">
      <img
        className="w-full"
        src="https://image.etashee.com/images/category/men/men-banner.jpg"
        alt=""
      />
      <div className="max-w-7xl mx-auto">
        <p className="my-20 text-3xl text-center font-description">
          Discover the latest trends and timeless classics in our men's wear
          collection. From stylish shirts and comfortable t-shirts to rugged
          denim jeans and elegant suits, we offer a wide range of high-quality
          clothing for every occasion. Explore our collection of premium cotton
          t-shirts, genuine leather jackets, and versatile accessories to
          elevate your style. Whether you're dressing up for a formal event or
          seeking casual everyday essentials, our carefully curated selection
          ensures you'll find the perfect pieces to express your individuality
          and make a lasting impression. Shop now and elevate your wardrobe with
          our sophisticated men's wear collection.
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

export default Mens;
