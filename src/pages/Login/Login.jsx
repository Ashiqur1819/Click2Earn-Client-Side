import loginImage from "../../assets/login.jpg";

const Login = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center max-w-6xl mx-auto mt-12 p-12">
        <div className="card w-full bg-white p-12 h-full rounded-none col-span-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Log in to Your Account
          </h2>
          <form className="mt-6">
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
            <div className="form-control mt-2">
              <label className="label px-0">
                <span className="label-text font-medium">Password:</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="grow text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="bg-bg-tertiary px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
                Login
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-2 bg-white h-full flex items-center justify-center">
          <img src={loginImage} alt="Login image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
