import { useNavigate } from "react-router-dom";
import errorLogo from "../../assets/error.jpg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="btn btn-neutral"
      >
        Go Back
      </button>
      <img className="w-6/12 mx-auto" src={errorLogo} alt="" />
      <h2 className="text-4xl text-center font-description">
        The page you are looking is not found.
      </h2>
    </div>
  );
};

export default ErrorPage;
