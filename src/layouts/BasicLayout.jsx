import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const BasicLayout = () => {
  return (
    <div className="font-roboto bg-gray-100">
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer className="mt-20">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default BasicLayout;
