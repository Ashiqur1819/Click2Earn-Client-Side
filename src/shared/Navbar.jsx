import { Link, NavLink } from "react-router-dom";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import { FaCoins } from "react-icons/fa";


const Navbar = () => {
    return (
      <div className="navbar bg-base-200 px-4 md:px-6 lg:px-8 py-5">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <button className="flex items-center gap-2">
                  <FaCoins></FaCoins> 1000
                </button>
              </li>
              <li>
                <NavLink>Dashboard</NavLink>
              </li>
            </ul>
          </div>
          <a className="text-2xl font-semibold">Click2Earn</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu-horizontal gap-6 px-1">
            <li>
              <button className="flex items-center gap-2">
                <FaCoins></FaCoins> 1000
              </button>
            </li>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-6">
          <Link>
            <PrimaryButton label="Join as Developer"></PrimaryButton>
          </Link>
          <Link>
            <button className="underline">Login</button>
          </Link>
          <Link>
            <button className="underline">Register</button>
          </Link>
        </div>
      </div>
    );
};

export default Navbar;