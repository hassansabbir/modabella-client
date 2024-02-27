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
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import ManageProducts from "../Pages/Dashboard/ManageProducts/ManageProducts";
import Mens from "../Pages/Mens/Mens";
import Womans from "../Pages/Womans/Womans";
import Children from "../Pages/Children/Children";
import MyAddedProducts from "../Pages/Dashboard/MyAddedProducts/MyAddedProducts";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/About/About";
import ManageSellerReq from "../Pages/Dashboard/ManageSellerReq/ManageSellerReq";

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
        path: "/mens",
        element: <Mens></Mens>,
      },
      {
        path: "/womans",
        element: <Womans></Womans>,
      },
      {
        path: "/children",
        element: <Children></Children>,
      },
      {
        path: "/about",
        element: <About></About>,
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
    path: "*",
    element: <ErrorPage></ErrorPage>,
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
        path: "myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "addAProduct",
        element: <AddAProduct></AddAProduct>,
      },
      {
        path: "myAddedProducts",
        element: <MyAddedProducts></MyAddedProducts>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "manageProducts",
        element: <ManageProducts></ManageProducts>,
      },
      {
        path: "manageSellerReq",
        element: <ManageSellerReq />,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
    ],
  },
]);
