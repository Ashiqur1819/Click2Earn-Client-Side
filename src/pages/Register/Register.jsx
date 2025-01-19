import { useState } from "react";
import registerImage from "../../assets/register.jpg";
import useAuth from "../../hooks/useAuth";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import googleImage from "../../assets/google.png";
import useAxios from "../../hooks/useAxios";

const Register = () => {
  const {
    setUser,
    createNewUser,
    updateUserProfile,
    setLoading,
    loginWithGoogle,
  } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [selected, setSelected] = useState("Worker");
  const navigate = useNavigate();
  const axiosInstance = useAxios();

  const handleRegister = async (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const role = selected;
    let coins = null;

    if (role === "Worker") {
      coins = 10;
    } else {
      coins = 50;
    }

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

    const newUser = { name, email, photo, role, coins };

    createNewUser(email, password)
      .then(async (result) => {
        setUser(result.user);
        const res = await axiosInstance.get(`/users/${result?.user?.email}`);
        if (res.data?.role == "Worker") {
          navigate("/dashboard/workerHome");
        } else {
          navigate("/dashboard/buyerHome");
        }
        form.reset();
        updateUserProfile({ displayName: name, photoURL: photo }).then(() => {
          setUser((prev) => ({
            ...prev,
            displayName: name,
            photoURL: photo,
          }));
          setLoading(false);
        });
      })
      .catch((err) => {
        toast.error(err.message);
      });
    // Save user information in the database

    try {
      const res = await axiosInstance.post("/users", newUser);
      if (res.data.insertedId) {
        toast.success(`Registration successful!`);
      }
    } catch (err) {
      toast.error(err?.response?.data);
    }
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle().then(async (result) => {
      toast.success("Google login successful!");
      const res = await axiosInstance.get(`/users/${result?.user?.email}`);
      if (res.data?.role == "Worker") {
        navigate("/dashboard/workerHome");
      } else {
        navigate("/dashboard/buyerHome");
      }
      setUser(result?.user);
      const name = result?.user?.displayName;
      const email = result?.user?.email;
      const photo = result?.user?.photoURL;
      const role = "Worker";
      const coins = 10;

      const newUser = { name, email, photo, role, coins };

      // Save user information in the database
      axiosInstance.post("/users", newUser);
      setLoading(false);
    });
  };

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center max-w-6xl mx-auto mt-12 p-12">
        <div className="col-span-2 bg-white h-full flex items-center justify-center">
          <img src={registerImage} alt="Login image" />
        </div>
        <div className="card w-full bg-white p-12 h-full rounded-none col-span-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Create Your Account
          </h2>
          <form onSubmit={handleRegister} className="mt-6">
            <div className="form-control mt-1">
              <label className="label px-0">
                <span className="label-text font-medium">Name:</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="grow text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                required
              />
            </div>
            <div className="form-control mt-1">
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
            <div className="form-control mt-1">
              <label className="label px-0">
                <span className="label-text font-medium">Photo URL:</span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter Your Photo URL"
                className="grow text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                required
              />
            </div>
            <div className="form-control relative mt-1">
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
            </div>
            <div className="form-control mt-1">
              <label className="label px-0">
                <span className="label-text font-medium">Role:</span>
              </label>
              <select
                onChange={(e) => setSelected(e.target.value)}
                className="select text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
              >
                <option className="text-gray-700">Worker</option>
                <option className="text-gray-700">Buyer</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="bg-bg-tertiary px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
                Register
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
      </div>
    </div>
  );
};

export default Register;
