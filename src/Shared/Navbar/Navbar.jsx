import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useSeller from "../../hooks/useSeller";
import useCustomer from "../../hooks/useCustomer";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isAdmin, isAdminLoading] = useAdmin();
  const [isSeller, isSellerLoading] = useSeller();
  const [isCustomer, isCustomerLoading] = useCustomer();

  if (isAdminLoading || isSellerLoading || isCustomerLoading) {
    return (
      <div className="text-center mt-72">
        <span className="loading  loading-spinner loading-lg"></span>
      </div>
    );
  }

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/mens">Mens</Link>
      </li>
      <li>
        <Link to="/womans">Womans</Link>
      </li>
      <li>
        <Link to="/children">Children</Link>
      </li>
      <li>
        <Link>About Us</Link>
      </li>
      {isAdmin.admin && (
        <>
          <li className="text-xl font-semibold">
            <Link to="/dashboard/manageUsers">Dashboard</Link>
          </li>
        </>
      )}
      {isSeller.seller && (
        <>
          <li className="text-xl font-semibold">
            <Link to="/dashboard/addAProduct">Dashboard</Link>
          </li>
        </>
      )}
      {isCustomer.customer && (
        <>
          <li className="text-xl font-semibold">
            <Link to="/dashboard/cart">Dashboard</Link>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-blur bg-white bg-opacity-90 fixed z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 text-xl rounded-box w-52"
          >
            {navOptions}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-3xl font-theme">
          ModaBella
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-xl px-1">{navOptions}</ul>
      </div>
      <div className="navbar-end space-x-3">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0}>
              {user && (
                <div className="avatar">
                  <div className="w-12 me-5 cursor-pointer rounded-full ">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              )}
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="text-xl">Item 1</a>
              </li>
              <li>
                <a onClick={handleLogOut} className="text-xl">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        ) : (
          <p className="text-xl font-bold">
            <Link to="/login">Login</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
