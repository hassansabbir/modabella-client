import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Children = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_API}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const approvedProducts = products.filter(
    (product) => product.status === "approved"
  );
  const childrenProducts = approvedProducts.filter(
    (product) => product.clothingCategory === "Children"
  );

  return (
    <div className="pt-24">
      <Helmet>
        <title>Children - ModaBella</title>
      </Helmet>
      <img
        className="w-full"
        src="https://img.freepik.com/free-vector/flat-social-media-cover-template-children_23-2149576195.jpg?w=1800&t=st=1688281848~exp=1688282448~hmac=19dddee06dd910f96256b8528869edb5f73978693b2bcc4938092c24b91e8c73"
        alt=""
      />
      <div className="max-w-7xl mx-auto">
        <p className="text-2xl lg:text-3xl px-5 text-center font-description my-20">
          Discover Fashion Fun for Kids: Explore our delightful collection of
          children's wear. From cute one sides to stylish outfits, we offer a
          wide range of trendy and comfortable clothing for your little ones.
          Whether it's everyday playtime or special occasions, our collection
          combines quality fabrics and playful designs to keep your kids looking
          their best. Shop now and let their personalities shine with our
          fashionable children's wear!
        </p>
        <div className="grid gap-10 grid-cols-1 my-20 md:grid-cols-5">
          {childrenProducts.map((product) => (
            <div
              key={product._id}
              className="lg:w-60 w-80 mx-auto bg-base-100 rounded-2xl shadow-xl"
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

export default Children;
