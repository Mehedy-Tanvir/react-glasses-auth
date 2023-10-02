import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Menus = () => {
  const links = ["products", "about", "contact", "blog"];
  return (
    <>
      {links.map((link) => (
        <li key={link}>
          <Link to={`/${link}`} className="btn btn-sm btn-ghost">
            {link}
          </Link>
        </li>
      ))}
    </>
  );
};
const NavBar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Menus />
            </ul>
          </div>
          <Link to="/" className="text-3xl font-bold normal-case btn btn-ghost">
            GLASSES
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
            <Menus />
          </ul>
        </div>

        <div className="navbar-end">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/y0yrnYQ/1681283571946.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <button className="btn btn-sm btn-ghost">Farhan</button>
                </li>
                <li>
                  <button className="btn btn-sm btn-ghost" onClick={logOut}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn btn-sm btn-ghost">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
