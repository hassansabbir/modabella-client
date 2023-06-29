import { FaArrowRight } from "react-icons/fa";
import newShoes from "../../../assets/newCollection.png";

const NewCollection = () => {
  return (
    <div className="md:flex gap-3 pb-10 flex-w justify-center mb-20 max-w-7xl mx-auto">
      <div className="md:flex md:w-6/12 rounded-2xl hover:shadow-lg p-5 justify-end items-center border">
        <img
          className="w-7/12"
          src="https://img.freepik.com/free-photo/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated_158538-8561.jpg?w=2000"
          alt=""
        />
        <div>
          <h2 className="text-lg font-description">New Season</h2>
          <h2 className="text-4xl font-bold">
            Big Patterns <br /> are black in fashion
          </h2>
          <p className="text-xl my-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing <br /> elit. Ab,
            maxime
          </p>
          <a
            className="flex items-center text-2xl font-extrabold gap-2"
            href=""
          >
            Shop Now <FaArrowRight />
          </a>
        </div>
      </div>
      <div className="md:flex md:w-6/12 gap-3 flex-col">
        <div className="md:flex items-center rounded-2xl hover:shadow-lg p-5 justify-center border">
          <div>
            <h2 className="text-lg font-description">New Season</h2>
            <h2 className="text-4xl font-bold">
              The latest men's <br /> trends this season
            </h2>
            <p className="text-xl my-5">Don't miss this opportunity.</p>
            <a
              className="flex items-center text-2xl font-extrabold gap-2"
              href=""
            >
              Shop Now <FaArrowRight />
            </a>
          </div>
          <img
            className="w-6/12 rounded-xl"
            src="https://img.freepik.com/free-photo/retro-man-dressed-shirt-lies-floor-posing_171337-9906.jpg?w=1380&t=st=1688002476~exp=1688003076~hmac=313945953a2c26d4c97f12acf163c49800b15b0c97394ef020af6215558b971b"
            alt=""
          />
        </div>
        <div className="md:flex items-center rounded-2xl hover:shadow-lg border bg-red-100 justify-center p-5">
          <div>
            <h2 className="text-lg font-description">New Season</h2>
            <h2 className="text-4xl font-bold">
              Show your fashion <br /> With christmas shoes.
            </h2>
            <p className="text-xl my-5">Don't miss this opportunity.</p>
            <a
              className="flex items-center text-2xl font-extrabold gap-2"
              href=""
            >
              Shop Now <FaArrowRight />
            </a>
          </div>
          <img className="w-3/12" src={newShoes} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
