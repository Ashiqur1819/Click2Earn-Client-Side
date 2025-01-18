import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { FaCoins } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import useUser from "../hooks/useUser";
import logo from "../assets/logo.png"


const Navbar = () => {

  const { user, logOut } = useAuth();
  const [currentUser] = useUser()

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
                  <NavLink
                    to={`${
                      currentUser?.role == "Worker" && "/dashboard/workerHome"
                    } ${
                      currentUser?.role == "Buyer" && "/dashboard/buyerHome"
                    } ${
                      currentUser?.role == "Admin" && "/dashboard/adminHome"
                    }`}
                  >
                    Dashboard
                  </NavLink>
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
            <img src={logo} className="w-60 object-cover" alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu-horizontal gap-3 px-1 items-center">
            {user?.email && (
              <li>
                <button className="flex items-center gap-2 py-2 px-4 bg-gray-100 border-none rounded-none text-base font-medium hover:bg-gray-200">
                  <FaCoins className="text-text-primary"></FaCoins>{" "}
                  {currentUser.coins}
                </button>
              </li>
            )}
            {/* className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0" */}
            {user?.email && (
              <li className=" bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 font-medium py-2 px-4 ">
                <NavLink
                  to={
                    currentUser?.role === "Worker"
                      ? "/dashboard/workerHome"
                      : currentUser?.role === "Buyer"
                      ? "/dashboard/buyerHome"
                      : currentUser?.role === "Admin"
                      ? "/dashboard/adminHome"
                      : "/dashboard"
                  }
                >
                  Dashboard
                </NavLink>
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
                  <button className="bg-green-600 px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-green-700">
                    Login
                  </button>
                </Link>
              )}
            </li>
            <li>
              {user?.email ? (
                <Link to="register">
                  <img
                    src={user?.photoURL}
                    className="w-12 h-12 object-cover rounded-full border-2 border-text-primary"
                    referrerPolicy="no-referrer"
                    alt=""
                  />
                </Link>
              ) : (
                <Link to="register">
                  <button className="bg-blue-500 px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-blue-600">
                    Register
                  </button>
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