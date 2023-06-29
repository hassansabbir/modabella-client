import { Link, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
          <ul className="menu p-4 w-80 h-full bg-base-200 text-2xl font-bold text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/">Back to Home</Link>
            </li>
            <div className="divider" />
            <li>
              <Link>My Cart</Link>
            </li>
            <li>
              <Link>My Products</Link>
            </li>
            <li>
              <Link>Payment History</Link>
            </li>
            <li>
              <Link to="addAProduct">Add Product</Link>
            </li>
            <li>
              <Link>My Added Products</Link>
            </li>
            <li>
              <Link>Manage Users</Link>
            </li>
            <li>
              <Link>Manage Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
