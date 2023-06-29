import Banner from "../Banner/Banner";
import Discount from "../Discount/Discount";
import Features from "../Features/Features";
import Review from "../Review/Review";
import NewCollection from "../newCollection/newCollection";

const Home = () => {
  return (
    <div className="bg-white">
      <Banner />
      <Features />
      <NewCollection />
      <Review />
      <Discount />
    </div>
  );
};

export default Home;
