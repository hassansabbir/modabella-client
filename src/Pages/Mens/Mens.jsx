import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaExternalLinkAlt } from "react-icons/fa";
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
      <Helmet>
        <title>Men - ModaBella</title>
      </Helmet>
      <img
        className="w-full"
        src="https://image.etashee.com/images/category/men/men-banner.jpg"
        alt=""
      />
      <div className="max-w-7xl mx-auto">
        <p className="lg:my-20 my-10 px-5 text-2xl lg:text-3xl text-center font-description">
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
        <div className="grid gap-10 grid-cols-1 my-20 md:grid-cols-5">
          {mensProducts.map((product) => (
            <div
              key={product._id}
              className="lg:w-60 w-80 bg-base-100 mx-auto rounded-2xl shadow-xl"
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

export default Mens;
