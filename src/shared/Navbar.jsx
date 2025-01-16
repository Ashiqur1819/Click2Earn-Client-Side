import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { FaCoins } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import SecondaryButton from "../components/Buttons/SecondaryButton";


const Navbar = () => {

  const { user, logOut } = useAuth();

    return (
      <div className="navbar bg-white px-4 md:px-6 lg:px-8 py-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
            </div>
            <ul
              tabIndex={0}
              className=" menu-sm dropdown-content bg-white rounded-sm z-[1] mt-3 w-52 p-2 shadow"
            >
              {user?.email && (
                <li>
                  <button className="flex items-center gap-2">
                    <FaCoins></FaCoins> Add korte hobe
                  </button>
                </li>
              )}
              {user?.email && (
                <li>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
              )}
              <li>
                <Link
                  to="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Ashiqur1819"
                  target="_blank"
                >
                  <PrimaryButton
                    className="h-full"
                    label="Join as Developer"
                  ></PrimaryButton>
                </Link>
              </li>
              {/* <li>
                {user?.email ? (
                  <Link to="/">
                    <button
                      onClick={logOut}
                      className="bg-red-600 px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-red-700"
                    >
                      Logout
                    </button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <button className="underline">Login</button>
                  </Link>
                )}
              </li>
              <li>
                {user?.email ? (
                  <Link to="register">
                    <img
                      src={user?.photoURL}
                      className="w-10"
                      referrerPolicy="no-referrer"
                      alt=""
                    />
                  </Link>
                ) : (
                  <Link to="register">
                    <button className="underline">Register</button>
                  </Link>
                )}
              </li> */}
            </ul>
          </div>
          <Link to="/">
            <span className="text-3xl font-bold">Click2Earn</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu-horizontal gap-6 px-1 items-center">
            {user?.email && (
              <li>
                <button className="flex items-center gap-2">
                  <FaCoins></FaCoins> Add korte hobe
                </button>
              </li>
            )}
            {user?.email && (
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            )}
            <li>
              <Link
                to="https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Ashiqur1819"
                target="_blank"
              >
                <PrimaryButton label="Join as Developer"></PrimaryButton>
              </Link>
            </li>
            <li>
              {user?.email ? (
                <Link to="/">
                  <button
                    onClick={logOut}
                    className="bg-red-600 px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-red-700"
                  >
                    Logout
                  </button>
                </Link>
              ) : (
                <Link to="/login">
                  <button className="underline">Login</button>
                </Link>
              )}
            </li>
            <li>
              {user?.email ? (
                <Link to="register">
                  <img
                    src={user?.photoURL}
                    className="w-10 rounded-full"
                    referrerPolicy="no-referrer"
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="register">
                  <button className="underline">Register</button>
                </Link>
              )}
            </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-6 lg:hidden">
          <div>
            {user?.email ? (
              <Link to="register">
                <img
                  src={user?.photoURL}
                  className="w-10 rounded-full"
                  referrerPolicy="no-referrer"
                  alt=""
                />
              </Link>
            ) : (
              <Link to="register">
                <button className="underline">Register</button>
              </Link>
            )}
          </div>
          <div>
            {user?.email ? (
              <Link to="/">
                <button
                  onClick={logOut}
                  className="bg-red-600 px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-red-700"
                >
                  Logout
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <SecondaryButton label="Login"></SecondaryButton>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default Navbar;