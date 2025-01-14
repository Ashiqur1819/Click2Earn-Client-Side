import { IoNotificationsSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const DashboardNav = () => {

   

    return (
      <div className="navbar bg-base-100 px-3 md:px-4 lg:px-8">
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <span className="text-3xl font-bold">Click2Earn</span>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu-horizontal gap-12 items-center px-1">
            <div className="flex flex-col gap-3">
              <li>
                <NavLink>Coin</NavLink>
              </li>
              <li>
                <NavLink>Role</NavLink>
              </li>
            </div>
            <div className="flex flex-col gap-3">
              <li>
                <NavLink>Coin</NavLink>
              </li>
              <li>
                <NavLink>Role</NavLink>
              </li>
            </div>
            <div className="flex flex-col items-center gap-3">
              <IoNotificationsSharp></IoNotificationsSharp>
              <p>Notifications</p>
            </div>
          </ul>
        </div>
        {/* <div className="navbar-end">
          <a className="btn">Button</a>
        </div> */}
      </div>
    );
};

export default DashboardNav;