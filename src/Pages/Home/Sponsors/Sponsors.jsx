import logo1 from "../../../assets/logo1.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";
import logo6 from "../../../assets/logo6.png";

const Sponsors = () => {
  return (
    <div className="my-20">
      <div className="divider w-11/12 mx-auto" />
      <div className="md:flex justify-center gap-20">
        <img
          className="w-28 hover:grayscale-0 grayscale transition duration-300"
          src={logo1}
          alt=""
        />
        <img
          className="w-28 hover:grayscale-0 grayscale transition duration-300"
          src={logo2}
          alt=""
        />
        <img
          className="w-28 hover:grayscale-0 grayscale transition duration-300"
          src={logo3}
          alt=""
        />
        <img
          className="w-28 hover:grayscale-0 grayscale transition duration-300"
          src={logo4}
          alt=""
        />
        <img
          className="w-28 hover:grayscale-0 grayscale transition duration-300"
          src={logo5}
          alt=""
        />
        <img
          className="w-28 hover:grayscale-0 grayscale transition duration-300"
          src={logo6}
          alt=""
        />
      </div>
      <div className="divider w-11/12 mx-auto" />
    </div>
  );
};

export default Sponsors;
