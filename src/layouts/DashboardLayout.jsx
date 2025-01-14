import React from 'react';
import DashboardNav from '../shared/DashboardNav';
import { NavLink, Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
      <div className='font-roboto'>
        <header>
          <DashboardNav></DashboardNav>
        </header>
        <main className="grid grid-cols-12 ">
          <aside className="bg-gray-50 col-span-2 min-h-screen">
            <ul className="flex flex-col gap-6 p-8">
                {/* For Worker */}
              <li>
                <NavLink to="/dashboard/workerHome">Home</NavLink>
              </li>
              <li>
                <NavLink>TaskList </NavLink>
              </li>
              <li>
                <NavLink>My Submissions</NavLink>
              </li>
              <li>
                <NavLink>Withdrawals </NavLink>
              </li>
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