import React from 'react';
import DashboardNav from '../shared/DashboardNav';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
      <div>
        <header>
          <DashboardNav></DashboardNav>
        </header>
        <main className="grid grid-cols-12">
          <aside className="bg-red-300 col-span-2 min-h-screen">
            <ul className="menu bg-base-200">
              <li>
                <a>Item 1</a>
              </li>

            </ul>
          </aside>
          <div className="bg-green-300 col-span-10 min-h-screen">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    );
};

export default DashboardLayout;