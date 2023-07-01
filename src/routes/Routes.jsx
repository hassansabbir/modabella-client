import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../Layout/Dashboard";
import AddAProduct from "../Pages/Dashboard/AddAProduct/AddAProduct";
import PrivetRoute from "./PrivetRoute";
import Details from "../Pages/Details/Details";
import ManageUsers from "../Pages/Dashboard/ManageUsers/ManageUsers";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Payment from "../Pages/Dashboard/Cart/Payment/Payment";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_SERVER_API}/products/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivetRoute>
        <Dashboard></Dashboard>
      </PrivetRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
      {
        path: "addAProduct",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
