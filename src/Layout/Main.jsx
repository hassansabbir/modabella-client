import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { ScrollRestoration } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[1000px]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <ScrollRestoration />
    </div>
  );
};

export default Main;
