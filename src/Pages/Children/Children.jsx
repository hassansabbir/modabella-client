import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
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
        <p className="text-3xl text-center font-description my-20">
          Discover Fashion Fun for Kids: Explore our delightful collection of
          children's wear. From cute one sides to stylish outfits, we offer a
          wide range of trendy and comfortable clothing for your little ones.
          Whether it's everyday playtime or special occasions, our collection
          combines quality fabrics and playful designs to keep your kids looking
          their best. Shop now and let their personalities shine with our
          fashionable children's wear!
        </p>
        <div className="grid gap-10 grid-cols-1 my-20 md:grid-cols-3">
          {childrenProducts.map((product) => (
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

export default Children;
