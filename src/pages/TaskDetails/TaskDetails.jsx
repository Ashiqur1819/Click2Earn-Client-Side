import { data, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";


const TaskDetails = () => {

    const {id} = useParams()
    const axiosInstance = useAxios()

    const {data: task = {}} = useQuery({
        queryKey: ["task"],
        queryFn: async() => {
            const res = await axiosInstance.get(`/tasks/${id}`)
            return res.data
        }
    })

     const {
    _id,
    task_image_url,
    task_title,
    required_workers,
    payable_amount,
    task_detail,
  } = task;

    return (
      <div className="flex gap-6 w-11/12 mx-auto bg-white mt-12 p-6 rounded-sm shadow-sm">
        <div>
          <img src={task_image_url} className="rounded-sm" alt={task_title} />
          <label className="form-control mt-3">
            <textarea
              className="textarea h-24 text-gray-700 text-base input border border-gray-200 rounded-sm focus:border-pink-300 focus:outline-none"
              placeholder="Submission Details"
            ></textarea>
          </label>
          <button className="bg-bg-tertiary w-full mt-2 px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
            Submit
          </button>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3">{task_title}</h2>
          <p>
            <span className="font-semibold">Required Workers:</span>{" "}
            <span>{required_workers}</span>
          </p>
          <p>
            <span className="font-semibold">Payable Amount:</span>{" "}
            <span>{payable_amount}</span>
          </p>
          <p>
            <span className="font-semibold">Buyer Name:</span>{" "}
            <span>{"Ashiqur Rahman"}</span>
          </p>
          <p>
            <span className="font-semibold">Buyer Email:</span>{" "}
            <span>{"Ashiqur@Rahman"}</span>
          </p>
          <p>
            <span className="font-semibold">Completion Date:</span>{" "}
            <span>{"10/12/25"}</span>
          </p>
          <p>
            <span className="font-semibold">Description:</span>{" "}
            <span>{task_detail}</span>
          </p>
        </div>
      </div>
    );
};

export default TaskDetails;