import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider">OR</div>
      <div className="space-y-5">
        <button className="btn btn-outline text-xl text-sky-400 border-sky-400 hover:border-none hover:bg-sky-400 w-full">
          <FcGoogle className="h-7 w-7" /> Login With Google
        </button>
        <button className="btn btn-outline w-full text-xl">
          <FaGithub className="h-7 w-7" /> Login With GitHub
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
