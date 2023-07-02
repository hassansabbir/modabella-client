import AllProducts from "../AllProducts/AllProducts";
import Banner from "../Banner/Banner";
import Countdown from "../Countdown/Countdown";
import Discount from "../Discount/Discount";
import Features from "../Features/Features";
import Review from "../Review/Review";
import Sponsors from "../Sponsors/Sponsors";
import NewCollection from "../newCollection/newCollection";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner />
      <Features />
      <NewCollection />
      <AllProducts />
      <Countdown></Countdown>
      <Review />
      <Discount />
      <Sponsors />
    </div>
  );
};

export default Home;
