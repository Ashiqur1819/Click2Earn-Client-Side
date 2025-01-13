import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

const BasicLayout = () => {
  return (
    <div className="font-roboto">
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
