import registerImage from "../../assets/register.jpg"

const Register = () => {
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
            <form className="mt-6">
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
              <div className="form-control mt-1">
                <label className="label px-0">
                  <span className="label-text font-medium">Password:</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="grow text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                  required
                />
              </div>
              <div className="form-control mt-1">
                <label className="label px-0">
                  <span className="label-text font-medium">Role:</span>
                </label>
                <select className="select text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none">
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
          </div>
        </div>
      </div>
    );
};

export default Register;