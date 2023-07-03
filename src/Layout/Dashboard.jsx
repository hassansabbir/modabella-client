import { NavLink, Outlet } from "react-router-dom";
import useCustomer from "../hooks/useCustomer";
import useSeller from "../hooks/useSeller";
import useAdmin from "../hooks/useAdmin";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isCustomer, isCustomerLoading] = useCustomer();
  const [isSeller, isSellerLoading] = useSeller();
  console.log(isAdmin, isCustomer, isSeller);
  if (isAdminLoading || isCustomerLoading || isSellerLoading) {
    return (
      <div className="text-center mt-72">
        <span className="loading  loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Dashboard - ModaBella</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content bg-gray-100 flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-500 text-2xl font-bold text-base-content">
            {/* Sidebar content here */}
            <div>
              <img className="rounded-full" src={user?.photoURL} alt="" />
              <h2 className="text-3xl text-center mt-5">{user?.displayName}</h2>
              <p className="text-center text-xl underline">{user?.email}</p>
            </div>

            <div className="divider mt-20" />
            <li>
              <NavLink to="/">Back to Home</NavLink>
            </li>
            <div className="divider" />
            {isCustomer.customer && (
              <>
                <li>
                  <NavLink to="cart">My Cart</NavLink>
                </li>
                <li>
                  <NavLink to="myProducts">My Products</NavLink>
                </li>
                <li>
                  <NavLink to="paymentHistory">Payment History</NavLink>
                </li>
              </>
            )}
            {isSeller.seller && (
              <>
                <li>
                  <NavLink to="addAProduct">Add Product</NavLink>
                </li>
                <li>
                  <NavLink to="myAddedProducts">My Added Products</NavLink>
                </li>
              </>
            )}
            {isAdmin.admin && (
              <>
                <li>
                  <NavLink to="manageUsers">Manage Users</NavLink>
                </li>
                <li>
                  <NavLink to="manageProducts">Manage Products</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
