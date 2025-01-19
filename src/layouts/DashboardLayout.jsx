import React from 'react';
import DashboardNav from '../shared/DashboardNav';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';
import Footer from '../shared/Footer';

const DashboardLayout = () => {

  const { user } = useAuth();
  const axiosInstance = useAxios();

  const { data: currentUser = {} } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  const {role} = currentUser
  

    return (
      <div className="font-roboto">
        <header className='sticky top-0 z-10'>
          <DashboardNav></DashboardNav>
        </header>
        <main className="md:grid grid-cols-12 ">
          <aside className="bg-gray-50 col-span-2  lg:min-h-screen">
            <ul className="flex flex-col gap-3 w-full">
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
          <div className="bg-gray-100 col-span-10 flex flex-col">
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