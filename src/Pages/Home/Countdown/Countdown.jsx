import { useEffect, useState } from "react";
import img from "../../../assets/countdownImg.png";
import { FaArrowRight } from "react-icons/fa";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);

  const deadline = "March 30, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMins(Math.floor((time / 1000 / 60) % 60));
    setSecs(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-20 md:flex items-center bg-red-50 gap-5">
      <img className="md:w-6/12 w-10/12" src={img} alt="" />
      <div className="md:w-4/12 text-center">
        <h4 className="text-2xl font-description">Deal Of The Week</h4>
        <h2 className="text-5xl font-description">
          Roland Grand Mens And <br /> Womans Combo
        </h2>
        <p className="text-xl my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nostrum
          fugiat optio obcaecati nesciunt doloremque corporis, fuga culpa non
          quis?
        </p>
        <div className="md:flex p-10 space-y-10 justify-center text-3xl gap-10">
          <div
            className=" flex flex-col mt-10 items-center bg-slate-200 shadow-xl p-5 rounded-3xl"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h2 className="">{days < 0 ? "0" + days : days}</h2>
            <span>Days</span>
          </div>
          <div
            className=" flex flex-col items-center bg-slate-200 shadow-xl p-5 rounded-3xl"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h2>{hours < 0 ? "0" + hours : hours}</h2>
            <span>Hours</span>
          </div>
          <div
            className=" flex flex-col items-center bg-slate-200 shadow-xl p-5 rounded-3xl"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h2>{mins < 0 ? "0" + mins : mins}</h2>
            <span>Minutes</span>
          </div>
          <div
            className=" flex flex-col items-center bg-slate-200 shadow-xl p-5 rounded-3xl"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h2>{secs < 0 ? "0" + secs : secs}</h2>
            <span>Seconds</span>
          </div>
        </div>
        <a
          className="flex items-center mt-10 text-2xl font-extrabold gap-2"
          href=""
        >
          Shop Now <FaArrowRight />
        </a>
      </div>
    </div>
  );
};

export default Countdown;
