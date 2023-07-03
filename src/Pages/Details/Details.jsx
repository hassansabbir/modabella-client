import { useContext, useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const { user } = useContext(AuthContext);
  const product = useLoaderData();
  const navigate = useNavigate();
  const location = useLocation();

  const [isAdmin] = useAdmin();
  const [isSeller] = useSeller();

  const {
    name,
    image,
    price,
    description,
    sellerName,
    sellerEmail,
    brand,
    material,
    ratings,
  } = product;

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);

  useEffect(() => {
    const updatedPrice = price * quantity;
    setTotalPrice(updatedPrice.toFixed(2));
  }, [quantity, price]);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (user && user.email) {
      const cartItem = {
        productId: product._id,
        productName: product.name,
        image: product.image,
        sellerName: product.sellerName,
        sellerEmail: product.sellerEmail,
        quantity: parseFloat(quantity),
        price: parseFloat(totalPrice),
        email: user.email,
        brand: product.brand,
      };
      fetch(`${import.meta.env.VITE_SERVER_API}/carts`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Product added to your cart",
              showClass: {
                popup: "animate__animated animate__fadeInDown",
              },
              hideClass: {
                popup: "animate__animated animate__fadeOutUp",
              },
            });
          }
        });
    } else {
      Swal.fire({
        title: "You need to login for purchasing classes.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="max-w-7xl mx-auto py-40 p-20">
      <Helmet>
        <title>Product Details - ModaBella</title>
      </Helmet>
      <div className="flex gap-10">
        <img className="w-5/12" src={image} alt="" />
        <div>
          <h2 className="text-5xl font-description">{name}</h2>
          <p className="mt-5 text-lg">{description}</p>
          <p className="text-2xl my-5">
            <span className=" font-bold font-description">
              Price: ${totalPrice}
            </span>
          </p>
          <div className="flex gap-6">
            <div className="flex items-center">
              <button
                className="bg-gray-700 px-4 py-3"
                onClick={decreaseQuantity}
              >
                <FaMinus className="text-white bg-gray-700" />
              </button>
              <input
                className="border px-4 py-2 w-16"
                type="number"
                min="1"
                value={quantity}
                readOnly
              />
              <button
                className="bg-gray-700 px-4 py-3"
                onClick={increaseQuantity}
              >
                <FaPlus className="text-white bg-gray-700" />
              </button>
            </div>
            <button
              disabled={isAdmin?.admin === true || isSeller?.seller === true}
              onClick={handleAddToCart}
              className="text-xl bg-gray-700 text-white px-14 py-2"
            >
              Add To Cart
            </button>
          </div>
          <div className="divider" />
          <h2 className="text-xl font-description">Product Details</h2>
          <div className="text-xl">
            <h2 className="text-3xl font-extrabold mt-3">{name}</h2>
            <h2>
              <span className="font-extrabold font-description">
                Seller Name:
              </span>{" "}
              {sellerName}
            </h2>
            <h2>
              <span className="font-extrabold font-description">
                Seller Email:
              </span>{" "}
              {sellerEmail}
            </h2>
            <h2>
              <span className="font-extrabold font-description">Brand: </span>{" "}
              {brand}
            </h2>
            <h2>
              <span className="font-extrabold font-description">
                Material:{" "}
              </span>{" "}
              {material}
            </h2>
            <h2>
              <span className="font-extrabold font-description">Ratings: </span>{" "}
              {ratings}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
