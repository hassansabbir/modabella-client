import { Helmet } from "react-helmet-async";
import AllProducts from "../AllProducts/AllProducts";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Countdown from "../Countdown/Countdown";
import Discount from "../Discount/Discount";
import Features from "../Features/Features";
import Review from "../Review/Review";
import Sponsors from "../Sponsors/Sponsors";
import NewCollection from "../newCollection/newCollection";
import Blogs from "../Blogs/Blogs";

const Home = () => {
  return (
    <div className="bg-white">
      <Helmet>
        <title>Home - ModaBella</title>
      </Helmet>
      <Banner />
      <Features />
      <NewCollection />
      <Countdown></Countdown>
      <Discount />
      <Category></Category>
      <AllProducts />
      <Review />
      <Blogs></Blogs>
      <Sponsors />
    </div>
  );
};

export default Home;
