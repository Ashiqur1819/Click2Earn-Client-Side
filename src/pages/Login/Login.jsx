import loginImage from "../../assets/login.jpg";
import googleImage from "../../assets/google.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";

const Login = () => {
  const { setUser, userLogin, loginWithGoogle, setLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (password.length < 6) {
      return toast.error("Password must be at least 6 characters long!");
    }
    if (!/[A-Z]/.test(password)) {
      return toast.error(
        "Password must contain at least one uppercase letter!"
      );
    }

    if (!/[a-z]/.test(password)) {
      return toast.error(
        "Password must contain at least one lowercase letter!"
      );
    }

    userLogin(email, password)
      .then(async (result) => {
        setUser(result.user);
        const res = await axiosInstance.get(`/users/${result?.user?.email}`);
        if (res.data?.role == "Worker") {
          navigate("/dashboard/workerHome");
        } else if (res.data?.role == "Buyer") {
          navigate("/dashboard/buyerHome");
        } else if (res.data?.role == "Admin") {
          navigate("/dashboard/adminHome");
        }
        toast.success("Login successful! Welcome back!");
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong! Please try again later.");
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then(async (result) => {
        setUser(result.user);
        const res = await axiosInstance.get(`/users/${result?.user?.email}`);
        if (res.data?.role == "Worker") {
          navigate("/dashboard/workerHome");
        } else {
          navigate("/dashboard/buyerHome");
        }
        toast.success("Google login successful!");
        const name = result.user?.displayName;
        const email = result.user?.email;
        const photo = result.user?.photoURL;
        const role = "Worker";
        const coins = 10;

        const newUser = { name, email, photo, role, coins };
        // Save user information in the database
        axiosInstance.post("/users", newUser);
        setLoading(false);
      })
      .catch((err) => {
        toast.error("Something Went Wrong! Please Try Again Later.");
      });
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center max-w-6xl mx-auto mt-12 p-4 md:p-6 lg:p-12">
        <div className="card w-full bg-white p-4 md:p-6 lg:p-12 h-full rounded-none col-span-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Log in to Your Account
          </h2>
          <form onSubmit={handleLogin} className="mt-6">
            <div className="form-control">
              <label className="label px-0">
                <span className="label-text font-medium">Email:</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="grow text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-2 relative">
              <label className="label px-0">
                <span className="label-text font-medium">Password:</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                className="grow text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-[53px] text-gray-500"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </button>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot Password?
                </a>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="bg-bg-tertiary px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
                Login
              </button>
            </div>
          </form>
          <div className="divider font-medium">OR</div>
          <button
            onClick={handleLoginWithGoogle}
            className="flex items-center gap-3 justify-center px-4 py-2 rounded-sm font-medium border transition-all hover:bg-gray-50"
          >
            <img src={googleImage} className="w-6" alt="" />
            <span>Continue With Google</span>
          </button>
        </div>
        <div className="col-span-3 md:col-span-2 bg-white h-full flex items-center justify-center">
          <img src={loginImage} alt="Login image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
