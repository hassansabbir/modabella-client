import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="mt-20">
      <h2 className="text-5xl text-center font-description">
        Browse Products By Category
      </h2>
      <div className=" md:flex justify-center gap-10 my-20">
        <Link
          to="/mens"
          className="relative"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <img
            className="w-80 my-5 mx-auto rounded-full hover:opacity-30"
            src="https://img.freepik.com/free-photo/style-fashion-clothes-men-s-wear-concept-isolated-view-stylish-young-bearded-male-model-with-wavy-hair-posing-wearing-trendy-plaid-shirt-looking-away-buttoning-up-cuff_343059-1871.jpg?w=740&t=st=1688364696~exp=1688365296~hmac=a9fe0adcfe16a0449985bc5828861f3c82dcebc5b117042ca17897921c3e6274"
            alt=""
          />
          <div>
            <span className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 text-5xl font-description  text-white ">
              Men
            </span>
          </div>
        </Link>
        <Link
          to="/womans"
          className="relative"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          <img
            className="w-80 my-5 mx-auto  rounded-full hover:opacity-30"
            src="https://img.freepik.com/free-photo/young-woman-beautiful-dress-hat_1303-17517.jpg?w=740&t=st=1688364225~exp=1688364825~hmac=a9d19133b005ddf01fe49449d73b131bfb8df38d361f37398a9d11aa6dda9600"
            alt=""
          />
          <div>
            <span className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 text-5xl font-description  text-white ">
              Women
            </span>
          </div>
        </Link>
        <Link
          to="/children"
          className="relative"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <img
            className="w-80 my-5 mx-auto  rounded-full hover:opacity-30"
            src="https://img.freepik.com/free-photo/cute-stylish-children_155003-8330.jpg?w=740&t=st=1688364268~exp=1688364868~hmac=08445dc19d24c66f04b392f273bf38515d8fc235c7ec324408017c4af0e55e95"
            alt=""
          />
          <div>
            <span className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 text-5xl font-description  text-white ">
              Children
            </span>
          </div>
        </Link>
      </div>
      <h2 className="text-4xl mb-10 font-description text-center ">Or</h2>
    </div>
  );
};

export default Category;
