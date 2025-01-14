const AddNewTasks = () => {
  return (
    <div className="bg-gray-100 mt-12 rounded-sm">
      <div className="card w-5/6 mx-auto bg-white p-12 rounded-sm col-span-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
          Added A New Task
        </h2>
        <form className="mt-6 grid grid-cols-2 gap-3">
          <div className="form-control">
            <label className="label px-0">
              <span className="label-text font-medium">Title:</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label px-0">
              <span className="label-text font-medium">Photo URL:</span>
            </label>
            <input
              type="url"
              name="photo"
              placeholder="Photo URL"
              className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
              required
            />
          </div>
          <div className="form-control">
            <label className="label px-0">
              <span className="label-text font-medium">Required Workers:</span>
            </label>
            <input
              type="number"
              name="workers"
              placeholder="Required Workers"
              className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label px-0">
              <span className="label-text font-medium">Amount:</span>
            </label>
            <input
              type="number"
              name="amount"
              placeholder="Payable Amount"
              className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label px-0">
              <span className="label-text font-medium">Date:</span>
            </label>
            <input
              type="date"
              name="date"
              placeholder="Date"
              className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
              required
            />
          </div>
          <div className="form-control relative">
            <label className="label px-0">
              <span className="label-text font-medium">Submission Info:</span>
            </label>
            <input
              type="url"
              name="subInfo"
              placeholder="Submission Info"
              className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
              required
            />
          </div>
          <div className="form-control col-span-2">
            <label className="label px-0">
              <span className="label-text font-medium">Description:</span>
            </label>
            <textarea
              className="textarea h-24 text-gray-700 text-sm input border border-gray-200 rounded-sm focus:border-pink-300 focus:outline-none"
              placeholder="Submission Details"
            ></textarea>
          </div>
          <div className="form-control mt-3 col-span-2">
            <button className="bg-bg-tertiary px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTasks;
