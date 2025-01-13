import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const BasicLayout = () => {
  return (
    <div className="font-roboto bg-gray-100">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default BasicLayout;
