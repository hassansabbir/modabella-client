import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Cart = () => {
  const [carts, refetch] = useCart();
  console.log(carts);

  const total = Number(
    carts.reduce((sum, item) => item.price + sum, 0).toFixed(2)
  );
  const tax = Number(((total * 7) / 100).toFixed(2));
  const shipping = Number(((total * 5) / 100).toFixed(2));
  const grandTotal = (total + tax + shipping).toFixed(2);

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_SERVER_API}/carts/${item._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  return (
    <div className="w-full p-10">
      <Helmet>
        <title>My Cart - ModaBella</title>
      </Helmet>
      <h2 className="text-5xl text-center font-description">This is Cart.</h2>
      <h2 className="text-3xl text-center my-5">
        Total Items On Cart: {carts.length}
      </h2>
      <div className="divider" />
      <div className="md:flex gap-10">
        <div className="overflow-x-auto w-9/12">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-xl">
                <th>#</th>
                <th>Photo & Product Name</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Delete</th>
              </tr>
            </thead>
            {carts.map((item, index) => (
              <tbody key={item._id} className="text-xl">
                <tr>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className=" w-20 h-28">
                          <img src={item.image} alt={item.name} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{item.productName}</div>
                      </div>
                    </div>
                  </td>
                  <td>{item.brand}</td>
                  <td>{item.quantity}</td>
                  <td>$ {item.price}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-circle text-white bg-red-400"
                    >
                      <FaTrashAlt className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="border bg-slate-300 w-3/12 p-5">
          <h3 className="text-center text-2xl">Cart Total</h3>
          <div className="divider" />
          <p className="text-xl flex justify-between">
            <span>Subtotal:</span> ${parseFloat(total)}
          </p>
          <div className="divider" />
          <p className="text-xl flex justify-between">
            <span>Tax:</span> ${parseFloat(tax)}
          </p>
          <p className="text-xl flex justify-between">
            <span>Shipping:</span> ${parseFloat(shipping)}
          </p>
          <div className="divider" />
          <p className="text-3xl flex justify-between">
            <span className="text-xl">Total:</span> ${parseFloat(grandTotal)}
          </p>
          <Link to="/dashboard/payment">
            <button className="btn btn-neutral w-full mt-20">Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
