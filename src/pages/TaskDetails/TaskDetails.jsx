import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const TaskDetails = () => {
  const { user } = useAuth();
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
    _id,
    title,
    photo,
    workers,
    amount,
    date,
    subInfo,
    description,
    buyerName,
    buyerEmail,
  } = task;

  const handleAddSubmission = async (e) => {
    e.preventDefault();
    const form = e.target;
    const subDetails = form.subDetails.value;
    const taskId = _id;
    const workerName = user?.displayName;
    const workerEmail = user?.email;
    const status = "Pending";
    const date = new Date();
    const currentDate = date.toISOString().split("T")[0];

    const submission = {
      taskId,
      title,
      amount,
      currentDate,
      workerName,
      workerEmail,
      buyerName,
      buyerEmail,
      subDetails,
      status,
    };

    // Save submission data to db
    const res = await axiosInstance.post("/submittedTasks", submission);
    if (res.data.insertedId) {
      // send notification
      const taskTitle = title;
      const notification = { taskTitle, buyerEmail };
      const result = await axiosInstance.post(
        "/submitTaskNotification",
        notification
      );
      console.log(result.data);

      Swal.fire({
        title: "Submission Successful!",
        icon: "success",
        draggable: true,
      });
      form.reset();
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-6 w-11/12 mx-auto bg-white mt-12 p-4 md:p-6 rounded-sm shadow-sm">
      <div>
        <img src={photo} className="rounded-sm" alt={title} />
        <form onSubmit={handleAddSubmission}>
          <label className="form-control mt-3">
            <textarea
              name="subDetails"
              className="textarea h-24 text-gray-700 text-base input border border-gray-200 rounded-sm focus:border-pink-300 focus:outline-none"
              placeholder="Submission Details"
            ></textarea>
          </label>
          <button className="bg-bg-tertiary w-full mt-2 px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
            Submit
          </button>
        </form>
      </div>
      <div className="space-y-1">
        <h2 className="text-2xl text-left font-bold mb-3 text-sky-900">
          {title}
        </h2>
        <p>
          <span className="font-semibold">Required Workers:</span>{" "}
          <span className=" text-gray-600">{workers}</span>
        </p>
        <p>
          <span className="font-semibold">Payable Amount:</span>{" "}
          <span className=" text-gray-600">{amount}</span>
        </p>
        <p className="text-justify ">
          <span className="font-semibold">Submission Info:</span>{" "}
          <span className=" text-gray-600 ">{subInfo}</span>
        </p>
        <p>
          <span className="font-semibold">Buyer Name:</span>{" "}
          <span className=" text-gray-600">{buyerName}</span>
        </p>
        <p>
          <span className="font-semibold">Buyer Email:</span>{" "}
          <span className=" text-gray-600">{buyerEmail}</span>
        </p>
        <p>
          <span className="font-semibold">Completion Date:</span>{" "}
          <span className=" text-gray-600">{date}</span>
        </p>
        <p className="text-justify ">
          <span className="font-semibold">Description:</span>{" "}
          <span className=" text-gray-600">{description}</span>
        </p>
      </div>
    </div>
  );
};

export default TaskDetails;
