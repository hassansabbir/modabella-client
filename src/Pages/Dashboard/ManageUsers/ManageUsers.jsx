import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch(`${import.meta.env.VITE_SERVER_API}/users`);
    return res.json();
  });
  console.log(users);

  const handleMakeAdmin = (user) => {
    fetch(`${import.meta.env.VITE_SERVER_API}/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${user.name} is added as an Admin.`,
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

  const handleMakeInstructor = (user) => {
    fetch(`${import.meta.env.VITE_SERVER_API}/users/seller/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            title: `${user.name} is added as a seller.`,
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
      <h2 className="text-5xl text-center font-description">
        Manage All The Users
      </h2>
      <h3 className="text-2xl text-center my-10">
        Total Users: {users.length}
      </h3>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Photo & Name</th>
              <th>Job</th>
              <th>Admin</th>
              <th>Seller</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user?.image} alt={user?.name} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user?.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "ADMIN"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-neutral btn-sm"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  {user?.role === "seller" ? (
                    "SELLER"
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-neutral btn-sm"
                    >
                      Make Seller
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
