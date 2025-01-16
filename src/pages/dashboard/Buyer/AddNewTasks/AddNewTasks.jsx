import { toast } from "react-toastify";
import useUser from "../../../../hooks/useUser";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";
import Swal from "sweetalert2";

const AddNewTasks = () => {
  const [currentUser, refetch] = useUser();
  const navigate = useNavigate();
  const { user } = useAuth();
  const axiosInstance = useAxios();

  const handleAddTask = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const photo = form.photo.value;
    const workers = parseFloat(form.workers.value);
    const amount = parseFloat(form.amount.value);
    const date = form.date.value;
    const subInfo = form.subInfo.value;
    const description = form.description.value;
    const totalAmount = workers * amount
    const buyerName = user?.displayName;
    const buyerEmail = user?.email;

    if (totalAmount > currentUser?.coins) {
      toast.error("Not available Coin. Purchase Coin");
      navigate("/dashboard/purchaseCoin");
    }

    const task = {
      title,
      photo,
      workers,
      amount,
      date,
      subInfo,
      description,
      totalAmount,
      buyerName,
      buyerEmail,
    };

    const remainingCoins = currentUser?.coins - (workers * amount);

    // Save task in the database

    const res = await axiosInstance.post("/tasks", task);
    if (res.data.insertedId) {
      const res = await axiosInstance.patch(`/users/${user?.email}`, {remainingCoins})
      if(res.data.modifiedCount > 0){
        Swal.fire({
          title: "Task Added Successfully!",
          icon: "success",
          draggable: true,
        });
        // form.reset()
        refetch()
      }
    }
  };

  return (
    <div className="bg-gray-100 mt-12 rounded-sm">
      <div className="card w-5/6 mx-auto bg-white p-12 rounded-sm col-span-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
          Added A New Task
        </h2>
        <form onSubmit={handleAddTask} className="mt-6 grid grid-cols-2 gap-3">
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
              type="text"
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
              name="description"
              className="textarea h-24 text-gray-700 text-sm input border border-gray-200 rounded-sm focus:border-pink-300 focus:outline-none"
              placeholder="Submission Details"
            ></textarea>
          </div>
          <div className="form-control mt-3 col-span-2">
            <button className="bg-bg-tertiary px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewTasks;
