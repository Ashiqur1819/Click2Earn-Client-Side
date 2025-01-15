import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import PrimaryButton from "../../../../components/Buttons/PrimaryButton";


const BuyerHome = () => {
const axiosInstance = useAxios()
const {user} = useAuth()
  const {data: submittedTasks = []} = useQuery({
    queryKey: ["submittedTasks"],
    queryFn: async() => {
      const res = await axiosInstance.get(`/buyerSubmittedTasks/${user?.email}`);
      return res.data
    }
  })

    return (
      <div className="p-6 w-11/12 mx-auto bg-white mt-12 rounded-sm">
        <div className="flex items-center gap-6">
          <div className="bg-red-200 p-6 text-center rounded-sm min-w-52">
            <h3 className="text-lg font-semibold">Total Task</h3>
            <h2 className="text-5xl text-pink-500 font-bold">25</h2>
          </div>
          <div className="bg-blue-200 p-6 text-center rounded-sm min-w-52">
            <h3 className="text-lg font-semibold">Pending Task</h3>
            <h2 className="text-5xl text-pink-500 font-bold">35</h2>
          </div>
          <div className="bg-green-200 p-6 text-center rounded-sm min-w-52">
            <h3 className="text-lg font-semibold">Total Payment</h3>
            <h2 className="text-5xl text-pink-500 font-bold">45</h2>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-bold">Task To Review</h2>
          <div className="overflow-x-auto mt-6">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th className="text-base font-medium text-blue-950">Title</th>
                  <th className="text-base font-medium text-blue-950">
                    Worker Name
                  </th>
                  <th className="text-base font-medium text-blue-950">
                    Amount
                  </th>
                  <th className="text-base font-medium text-blue-950">
                    View Submission
                  </th>
                  <th className="text-base font-medium text-blue-950">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {submittedTasks.map((task, index) => (
                  <tr key={task._id}>
                    <th>{index + 1}</th>
                    <td className="font-medium">
                      {task?.title.substring(0, 25)}...
                    </td>
                    <td className="font-medium">{task?.workerName}</td>
                    <td className="font-medium">
                      ${(task?.amount / 100).toFixed(3)}
                    </td>
                    <td>
                      <button
                        onClick={() =>
                          document.getElementById("my_modal_1").showModal()
                        }
                      >
                        <PrimaryButton
                          label={"View Submission"}
                        ></PrimaryButton>
                      </button>
                    </td>
                    {/* Modal */}
                    <dialog id="my_modal_1" className="modal">
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Submission Details
                        </h3>
                        <p className="py-4">{task.subDetails}</p>
                        <div className="modal-action">
                          <form method="dialog">
                            <button className="btn">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                    <td className="flex items-center gap-3">
                      <button className="bg-green-600 text-white px-2 py-1 rounded-sm font-medium">
                        Approve
                      </button>
                      <button className="bg-red-600 text-white px-2 py-1 rounded-sm font-medium">
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Modal */}
        {/* Open the modal using document.getElementById('ID').showModal() method */}
      </div>
    );
};

export default BuyerHome;