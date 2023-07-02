import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageProducts = () => {
  const { data: products = [], refetch } = useQuery(["products"], async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_API}/products`);
    return res.json();
  });

  const handleApprove = (product) => {
    fetch(
      `${import.meta.env.VITE_SERVER_API}/products/approve/${product._id}`,
      {
        method: "PATCH",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(product.role);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `${product.name} is Approved.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  const handleDenied = (product) => {
    fetch(`${import.meta.env.VITE_SERVER_API}/products/denied/${product._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: `${product.name} is Denied.`,
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
        }
      });
  };

  return (
    <div className="w-full">
      <h2 className="text-5xl font-display text-center my-20 font-semibold">
        Manage All Added Classes
      </h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Product Photo & Name</th>
            <th>Seller Name & Email</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Set Status</th>
            <th>Status</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product._id}>
              <td>{index + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={product.image} alt={product.name} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{product.name}</div>
                  </div>
                </div>
              </td>
              <td>
                {product.sellerName}
                <br />
                <span className="badge badge-ghost badge-sm">
                  {product.sellerEmail}
                </span>
              </td>
              <td className="text-center">{product.brand}</td>
              <td>$ {product.price}</td>
              <td>
                <button
                  onClick={() => handleApprove(product)}
                  disabled={product.status === "approved" && "denied"}
                  className="btn btn-sm w-20 bg-green-400"
                >
                  Approve
                </button>
                <br />
                <button
                  onClick={() => handleDenied(product)}
                  disabled={product.status === "approved" && "denied"}
                  className="btn btn-sm w-20 bg-red-400"
                >
                  Denied
                </button>
              </td>
              <td>{product.status}</td>
              <td>
                {product.status === "denied" && (
                  <Link to={`/dashboard/classes/${product._id}`}>
                    <button className="btn ">
                      <FaEdit className="w-5 h-5" />
                    </button>{" "}
                  </Link>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
