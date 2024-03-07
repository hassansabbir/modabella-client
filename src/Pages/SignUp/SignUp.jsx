import "./SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const { createUser, updateUserProfile, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoUrl)
        .then(() => {
          const savedUserInfo = {
            name: data.name,
            image: data.photoUrl,
            email: data.email,
            role: "customer",
            isSellerRequestOn: false,
          };
          fetch(`${import.meta.env.VITE_SERVER_API}/users`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(savedUserInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                console.log("user profile updated");
                reset();
                Swal.fire({
                  title: "User created successfully. Please login now.",
                  showClass: {
                    popup: "animate__animated animate__fadeInDown",
                  },
                  hideClass: {
                    popup: "animate__animated animate__fadeOutUp",
                  },
                });
                logOut()
                  .then(() => {
                    navigate("/login");
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="signUpPage">
      <Helmet>
        <title>Sign Up - ModaBella</title>
      </Helmet>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col mr-auto">
          <div className="text-center">
            <h1 className="text-5xl font-bold mt-20 font-description">
              Welcome to ModaBella
            </h1>
            <h1 className="text-5xl font-bold font-description">
              Sign up Now!
            </h1>
            <p className="py-6 text-2xl w-9/12 mx-auto font-description">
              Join the Fashion Revolution, Sign up at ModaBella! Unlock a world
              of style, personalized recommendations, and exclusive offers.
              Create your account now for seamless shopping and a
              fashion-forward experience!
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Name</span>
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Photo Url
                  </span>
                </label>
                <input
                  {...register("photoUrl", { required: true })}
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered"
                />
                {errors.photoUrl && (
                  <span className="text-red-600">PhotoUrl is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Password
                  </span>
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">
                    Password must be at least 6 characters
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-600">
                    Password must be under 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one uppercase one lowercase one number
                    and one special character
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-2xl font-bold">
                    Confirm Password
                  </span>
                </label>
                <input
                  {...register("confirmPassword", {
                    required: true,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  type="password"
                  placeholder="confirm password"
                  className="input input-bordered"
                />
                {errors.confirmPassword?.type === "pattern" && (
                  <p className="text-red-600">
                    password must be one of the following
                  </p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-outline text-xl bg-transparent border-black">
                  Sign Up
                </button>
              </div>
              <SocialLogin />
              <p className="text-center text-2xl">
                Already Have An Account?{" "}
                <Link to="/login" className="underline font-bold">
                  Login Now
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
