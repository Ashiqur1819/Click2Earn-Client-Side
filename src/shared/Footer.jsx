import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-white items-center justify-between p-4 md:p-6 lg:p-8">
      <aside className="grid-flow-col items-center">
        <img src={logo} className="w-40" alt="" />
      </aside>
      <p className="text-center text-gray-600">
        Copyright © {new Date().getFullYear()} - All Right Reserved By
        Click2Earn
      </p>
      <nav className="grid-flow-col gap-6 md:place-self-center md:justify-self-end">
        <Link
          className="text-2xl"
          to="https://www.facebook.com/Aashiq1819"
          target="_blank"
        >
          <FaFacebook></FaFacebook>
        </Link>
        <Link
          className="text-2xl"
          to="https://www.linkedin.com/in/ashiqur1819"
          target="_blank"
        >
          <FaLinkedin></FaLinkedin>
        </Link>
        <Link
          className="text-2xl"
          to="https://github.com/Ashiqur1819"
          target="_blank"
        >
          <FaGithub></FaGithub>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
