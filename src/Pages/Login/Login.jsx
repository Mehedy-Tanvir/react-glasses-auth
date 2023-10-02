import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // get field values
    const email = e.target.email.value;
    const password = e.target.email.value;
    console.log(email, password);

    // validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // create user
    loginUser(email, password)
      .then((res) => {
        console.log(res.user);
        e.target.email.value = "";
        e.target.password.value = "";
        toast.success("Logged in successfully");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="p-0 mt-6 form-control">
                <button className="btn btn-neutral" type="submit">
                  Login
                </button>
              </div>
              <label className="label">
                New here?{" "}
                <Link to="/register" className="label-text-alt link link-hover">
                  Create an account
                </Link>
              </label>
              <SocialLogin />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
