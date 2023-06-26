import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="loginPage">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col ml-auto mr-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mt-20 font-description">
              Welcome to ModaBella
            </h1>
            <h1 className="text-5xl font-bold font-description">Login Now!</h1>
            <p className="py-6 text-2xl w-9/12 mx-auto font-description">
              Your Style Gateway! Access exclusive features, manage orders, and
              enjoy personalized recommendations. Join our fashion community.
              Login now for a seamless experience!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl ">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input  input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl font-bold">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-xl bg-transparent border-black">
                  Login
                </button>
              </div>
              <SocialLogin />
              <p className="text-center text-xl">
                New To ModaBella?{" "}
                <Link to="/signUp" className="underline font-bold">
                  Register Now
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
