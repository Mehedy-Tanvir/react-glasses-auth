import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { user, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSocialLogin = (media) => {
    media()
      .then(() => {
        toast.success("User logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  console.log(user, "socialLogin");
  return (
    <>
      <div className="divider">continue with</div>
      <div className="flex justify-around">
        <button
          className="btn btn-neutral btn-sm"
          onClick={() => handleSocialLogin(googleLogin)}
        >
          Google
        </button>
        <button
          className="btn btn-neutral btn-sm"
          onClick={() => handleSocialLogin(githubLogin)}
        >
          Github
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
