import { IoNotificationsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import { FaCoins } from "react-icons/fa";
import logo from "../assets/logo.png";

const DashboardNav = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();

  const { data: currentUser = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const { name, photo, role, coins } = currentUser || {};

  const { data: notifications = [] } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/notifications/${user?.email}`);
      return res.data;
    },
  });
  console.log(notifications);

  return (
    <div className="navbar bg-white px-3 md:px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-9 md:h-10 w-9 md:w-10"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-sm z-[1] mt-3 w-52 p-2 shadow"
          >
            <li className=" bg-gray-100 border-none rounded-none">
              <img
                src={photo}
                referrerPolicy="no-referrer"
                className="w-16"
                alt=""
              />
            </li>
            <li>
              <p className="flex items-center w-full gap-2 py-2 px-4 bg-gray-100 border-none rounded-none text-base font-medium mt-2">
                <FaCoins className="text-text-primary"></FaCoins> {coins}
              </p>
            </li>
            <li className=" bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 font-medium py-2 px-4 mt-2">
              {name}
            </li>
            <li className=" bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 font-medium py-2 px-4 mt-2">
              {role}
            </li>
          </ul>
        </div>
        <Link to="/">
          <img
            src={logo}
            className="w-36 md:w-44 lg:w-52 object-cover ml-2"
            alt=""
          />
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu-horizontal gap-3 px-1">
          <div className="flex flex-col gap-3 rounded-sm p-4 bg-gray-100">
            <li className="flex items-center gap-2 text-lg md:text-2xl text-text-primary font-medium">
              <FaCoins></FaCoins>
              {coins}
            </li>
            <li className="font-medium hidden md:block">{role}</li>
          </div>
          <div className="hidden md:flex flex-col gap-1 rounded-sm p-3 bg-gray-100 ">
            <li>
              <img
                src={photo}
                referrerPolicy="no-referrer"
                className="w-8 h-8 md:h-11 md:w-11 object-cover border-2 border-text-primary rounded-full"
                alt=""
              />
            </li>
            <li className="font-medium hidden md:block">{name}</li>
          </div>
          <div className="md:flex md:flex-col md:items-center rounded-sm md:p-4 md:gap-3 bg-gray-100">
            <div className="navbar">
              <div className="flex-none">
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost btn-circle"
                  >
                    <div className="indicator">
                      <IoNotificationsSharp className="text-lg md:text-3xl"></IoNotificationsSharp>
                      <span className="badge badge-sm rounded-full bg-bg-tertiary text-white indicator-item">
                        {notifications.length}
                      </span>
                    </div>
                  </div>
                  <ul
                    tabIndex={0}
                    className="menu menu-lg dropdown-content bg-base-100 rounded-lg z-[1] mt-6 w-96 p-2 shadow"
                  >
                    {notifications?.map((notification) => (
                      <div className="mb-1 border-b p-2" key={notification._id}>
                        <h3 className="text-base font-bold text-justify">
                          {notification.message}
                        </h3>
                        <Link to={notification.actionRoute}>
                          <button className="text-text-primary underline">
                            View Details
                          </button>
                        </Link>
                      </div>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNav;
