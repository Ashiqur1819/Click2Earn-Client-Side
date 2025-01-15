import { IoNotificationsSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { FaCoins } from "react-icons/fa";

const DashboardNav = () => {

   const {user} = useAuth()
   const axiosInstance = useAxios()

    const {data: currentUser = {}} = useQuery({
        queryKey: ["user"],
        queryFn: async() => {
            const res = await axiosInstance.get(`/users/${user?.email}`)
            return res.data
        }
    })

    const {name, photo, role, coins} = currentUser

    return (
      <div className="navbar bg-white py-6 px-3 md:px-4 lg:px-8">
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
          <ul className="menu-horizontal gap-6 items-center px-1">
            <div className="flex flex-col gap-3 bg-gray-100 rounded-sm p-3">
              <li>
                <NavLink className="flex items-center gap-2 text-2xl text-text-primary font-medium">
                   <FaCoins></FaCoins>{coins}
                </NavLink>
              </li>
              <li>
                <NavLink className="font-medium">{role}</NavLink>
              </li>
            </div>
            <div className="flex flex-col gap-1 bg-gray-100 rounded-sm p-3">
              <li>
                <img src={photo} className="w-10 rounded-full" alt="" />
              </li>
              <li>
                <NavLink className="font-medium">{name}</NavLink>
              </li>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-sm p-3 gap-3">
              <IoNotificationsSharp className="text-3xl"></IoNotificationsSharp>
              <p className="font-medium">Notifications</p>
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