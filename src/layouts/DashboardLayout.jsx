import React from 'react';
import DashboardNav from '../shared/DashboardNav';
import { NavLink, Outlet } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxios from '../hooks/useAxios';

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
        <header>
          <DashboardNav></DashboardNav>
        </header>
        <main className="grid grid-cols-12 ">
          <aside className="bg-gray-50 col-span-2 min-h-screen">
            <ul className="flex flex-col gap-6 p-8">
              {/* For Worker */}
              {role === "Worker" && (
                <>
                  <li>
                    <NavLink to="/dashboard/workerHome">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/taskList">TaskList </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/workerSubmission">
                      My Submissions
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/withDrawals">Withdrawals </NavLink>
                  </li>
                </>
              )}

              {/* For Buyer */}
              {role === "Buyer" && (
                <>
                  <li>
                    <NavLink to="/dashboard/buyerHome">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/addNewTasks">Add New Tasks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myTasks">My Tasks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/purchaseCoin">
                      Purchase Coin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/paymentHistory">
                      Payment History
                    </NavLink>
                  </li>
                </>
              )}

              {/* For Admin */}
              {role === "Admin" && (
                <>
                  <li>
                    <NavLink to="/dashboard/adminHome">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/addNewTasks">Add New Tasks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/myTasks">My Tasks</NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/purchaseCoin">
                      Purchase Coin
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/dashboard/paymentHistory">
                      Payment History
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </aside>
          <div className="bg-gray-100 col-span-10 min-h-screen">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    );
};

export default DashboardLayout;