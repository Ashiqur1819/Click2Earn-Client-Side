import React from "react";
import DashboardNav from "../shared/DashboardNav";
import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Footer from "../shared/Footer";
import loadingImage from "../assets/loading.gif";

const DashboardLayout = () => {
  const { user} = useAuth();
  const axiosInstance = useAxios();

  const { data: currentUser = {}, isLoading } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const { role } = currentUser;

  
    if (isLoading) {
      return (
        <div className="min-h-screen mx-auto flex items-center justify-center">
          <img src={loadingImage} className="w-96 mx-auto" alt="" />
        </div>
      );
    }

  return (
    <div className="font-roboto">
      <header className="sticky top-0 z-10">
        <DashboardNav></DashboardNav>
      </header>
      <main className="md:grid md:grid-cols-2">
        <aside className="bg-gray-50 md:w-52  md:min-h-screen md:fixed z-10">
          <ul className="flex flex-col gap-3 w-full">
            {user && user.email && (
              <>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/profile"
                  >
                    Profile
                  </NavLink>
                </li>
              </>
            )}
            {/* For Worker */}
            {role === "Worker" && (
              <>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/workerHome"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/taskList"
                  >
                    TaskList{" "}
                  </NavLink>
                </li>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/workerSubmissions"
                  >
                    My Submissions
                  </NavLink>
                </li>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/withDrawals"
                  >
                    Withdrawals{" "}
                  </NavLink>
                </li>
              </>
            )}

            {/* For Buyer */}
            {role === "Buyer" && (
              <>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/buyerHome"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/addNewTasks"
                  >
                    Add New Tasks
                  </NavLink>
                </li>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/myTasks"
                  >
                    My Tasks
                  </NavLink>
                </li>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/purchaseCoin"
                  >
                    Purchase Coin
                  </NavLink>
                </li>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/paymentHistory"
                  >
                    Payment History
                  </NavLink>
                </li>
              </>
            )}

            {/* For Admin */}
            {role === "Admin" && (
              <>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/adminHome"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/manageUsers"
                  >
                    Manage Users
                  </NavLink>
                </li>
                <li className="btn bg-gray-100 border-none rounded-none text-base hover:bg-gray-200 p-0">
                  <NavLink
                    className="w-full h-full flex items-center justify-center"
                    to="/dashboard/manageTasks"
                  >
                    Manage Tasks
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </aside>
        <div className="bg-gray-100 col-span-10 flex flex-col md:ml-60">
          <div className="flex-grow">
            <Outlet></Outlet>
          </div>
          <div className="mt-20">
            <Footer></Footer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
