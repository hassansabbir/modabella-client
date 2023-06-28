import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link>Mens</Link>
      </li>
      <li>
        <Link>Womans</Link>
      </li>
      <li>
        <Link>Children</Link>
      </li>
      <li>
        <Link>About Us</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 fixed z-10 opacity-70">
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
      <div className="navbar-end">
        <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
          {user && (
            <div className="avatar">
              <div className="w-10 rounded-full ">
                <img src={user?.photoURL} />
              </div>
            </div>
          )}
        </div>
        {user?.email ? (
          <>
            <button onClick={handleLogOut} className="btn btn-active btn-ghost">
              Logout
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
