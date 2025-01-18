import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { FaCoins } from "react-icons/fa";
import logo from "../assets/logo.png";

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

    const {name, photo, role, coins} = currentUser || {}

    return (
      <div className="navbar bg-white px-3 md:px-4 lg:px-8">
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
            <img src={logo} className="w-60" alt="" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu-horizontal gap-3 items-center px-1">
            <div className="flex flex-col gap-3 bg-gray-100 rounded-sm p-4">
              <li className="flex items-center gap-2 text-2xl text-text-primary font-medium">
                <FaCoins></FaCoins>
                {coins}
              </li>
              <li className="font-medium">{role}</li>
            </div>
            <div className="flex flex-col gap-1 bg-gray-100 rounded-sm p-3">
              <li>
                <img src={photo} referrerPolicy="no-referrer" className="w-12 h-12 object-cover border-2 border-text-primary rounded-full" alt="" />
              </li>
              <li className="font-medium">
                {name}
              </li>
            </div>
            <div className="flex flex-col items-center bg-gray-100 rounded-sm p-4 gap-3">
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