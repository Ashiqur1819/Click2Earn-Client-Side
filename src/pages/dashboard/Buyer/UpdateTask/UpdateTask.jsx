import { useParams } from "react-router-dom";
import useAxios from "../../../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const UpdateTask = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();

  const { data: task = {} } = useQuery({
    queryKey: ["task"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/tasks/${id}`);
      return res.data;
    },
  });

  const {
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
  } = task;

  const handleUpdateTask = async(e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const subInfo = form.subInfo.value;
    const description = form.description.value;


    const updatedTask = {title, photo, workers, amount, date, subInfo, description, totalAmount, buyerName, buyerEmail }

    const res = await axiosInstance.put(`/tasks/${id}`, updatedTask)
    if(res.data.modifiedCount > 0){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Task has been updated!",
          showConfirmButton: false,
          timer: 1500,
        });
    }

  };

  return (
    <div className="bg-gray-100 mt-12 rounded-sm">
      <div className="card w-5/6 mx-auto bg-white p-12 rounded-sm col-span-3">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
          Update A Task
        </h2>
        <form
          onSubmit={handleUpdateTask}
          className="mt-6 grid grid-cols-2 gap-3"
        >
          <div className="form-control">
            <label className="label px-0">
              <span className="label-text font-medium">Title:</span>
            </label>
            <input
              type="text"
              name="title"
              defaultValue={title}
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
              defaultValue={photo}
              readOnly
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
              value={workers}
              readOnly
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
              value={amount}
              readOnly
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
              value={date}
              readOnly
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
              defaultValue={subInfo}
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
              defaultValue={description}
              className="textarea h-24 text-gray-700 text-sm input border border-gray-200 rounded-sm focus:border-pink-300 focus:outline-none"
              placeholder="Submission Details"
            ></textarea>
          </div>
          <div className="form-control mt-3 col-span-2">
            <button className="bg-yellow-400 px-4 py-2 rounded-sm text-black font-medium transition-all hover:bg-yellow-500">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTask;
