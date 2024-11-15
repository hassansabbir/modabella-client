import { NavLink, Outlet } from "react-router-dom";
import useCustomer from "../hooks/useCustomer";
import useSeller from "../hooks/useSeller";
import useAdmin from "../hooks/useAdmin";
// import { Vortex } from "react-loader-spinner";
// import { useContext } from "react";
// import { AuthContext } from "../Providers/AuthProvider";
import {
  FaCalendarAlt,
  FaHome,
  FaListAlt,
  FaMoneyBillAlt,
  FaShoppingBag,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { BsFillBagCheckFill } from "react-icons/bs";

const Dashboard = () => {
  // const { user } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isCustomer, isCustomerLoading] = useCustomer();
  const [isSeller, isSellerLoading] = useSeller();
  // console.log(isAdmin, isCustomer, isSeller);
  if (isAdminLoading || isCustomerLoading || isSellerLoading) {
    return (
      <div className="flex justify-center mt-72">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
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
            <p className="font-theme text-5xl mx-auto mb-10 font-bold">
              ModaBella
            </p>
            <li>
              <NavLink to="/">
                <FaHome /> Back to Home
              </NavLink>
            </li>
            <div className="divider" />
            {isCustomer.customer && (
              <>
                <li>
                  <NavLink to="cart">
                    <FaShoppingCart /> My Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink to="myProducts">
                    <FaShoppingBag /> My Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="paymentHistory">
                    <FaMoneyBillAlt /> Payment History
                  </NavLink>
                </li>
                <li className="mt-10">
                  <NavLink to="beASeller">
                    <FaMoneyBillAlt /> Be A Seller
                  </NavLink>
                </li>
              </>
            )}
            {isSeller.seller && (
              <>
                <li>
                  <NavLink to="addAProduct">
                    <FaCalendarAlt /> Add Product
                  </NavLink>
                </li>
                <li>
                  <NavLink to="myAddedProducts">
                    <BsFillBagCheckFill /> My Added Products
                  </NavLink>
                </li>
              </>
            )}
            {isAdmin.admin && (
              <>
                <li>
                  <NavLink to="manageUsers">
                    <FaUsers /> Manage Users
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manageProducts">
                    <FaListAlt /> Manage Products
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manageSellerReq">
                    <FaListAlt /> Seller Requests
                  </NavLink>
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
