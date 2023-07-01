import { FaStar } from "react-icons/fa";

const Review = () => {
  return (
    <div>
      <h2 className="text-5xl font-description text-center my-10">
        Latest Buyers Reviews
      </h2>
      <p className="text-2xl w-10/12 text-center mx-auto mb-20">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione non
        numquam at? Impedit, saepe. Vitae nesciunt quidem nisi, ea cupiditate
        laboriosam quisquam quo nulla quaerat, molestiae est, magnam
        consequuntur esse! Repellendus quia atque voluptatum cupiditate
        molestiae quo ducimus, nemo debitis.
      </p>
      <div className="md:flex my-10">
        <div className="text-center">
          <div className="flex justify-center">
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
          </div>
          <p className="text-2xl w-9/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            similique neque laudantium iste.
          </p>
          <h2 className="text-3xl my-5 font-bold">Teresa Holland</h2>
        </div>
        <div className="divider md:divider-horizontal" />
        <div className="text-center">
          <div className="flex justify-center">
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
          </div>
          <p className="text-2xl w-9/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            similique laudantium iste.
          </p>
          <h2 className="text-3xl my-5 font-bold">Mahmud Hasan Sabbir</h2>
        </div>
        <div className="divider md:divider-horizontal" />
        <div className="text-center">
          <div className="flex justify-center">
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
            <FaStar className="w-7 h-7 text-orange-500" />
          </div>
          <p className="text-2xl w-9/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            similique laudantium iste.
          </p>
          <h2 className="text-3xl my-5 font-bold">Johnny Depp</h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
