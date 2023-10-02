import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "./SocialLogin";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {
  const { createUser, handleUpdateProfile } = useAuth();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // get field values
    const email = e.target.email.value;
    const password = e.target.email.value;
    const name = e.target.name.value;
    const image = e.target.imageUrl;
    console.log(email, password);

    // validation
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    // create user
    createUser(email, password)
      .then((res) => {
        handleUpdateProfile(name, image)
          .then(() => {
            toast.success("User created successfully");
            navigate("/");
          })
          .catch((error) => {
            toast.error(error.message);
          });

        console.log(res.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Full Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Full name"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Image Url</span>
                  </label>
                  <input
                    type="text"
                    placeholder="image url"
                    name="imageUrl"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                </div>
                <div className="p-0 mt-6 form-control">
                  <input
                    className="btn btn-neutral"
                    type="submit"
                    value="Register"
                  />
                </div>
              </form>
              <label className="label">
                Have an account?{" "}
                <Link to="/login" className="label-text-alt link link-hover">
                  Please Login
                </Link>
              </label>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
