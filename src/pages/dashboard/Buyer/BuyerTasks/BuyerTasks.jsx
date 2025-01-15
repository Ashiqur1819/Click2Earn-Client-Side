import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import { FaEdit, FaTrash } from "react-icons/fa";

const BuyerTasks = () => {
  const {user} = useAuth()
  const axiosInstance = useAxios()
    const {data: tasks = []} = useQuery({
      queryKey: ["tasks"],
      queryFn: async() => {
        const res = await axiosInstance.get(`/buyerTasks/${user?.email}`);
        return res.data
      }
    })

    const sortedTasks = tasks.sort((a, b) => new Date(b.date) - new Date(a.date))

    return (
      <div className="mt-12 p-6 w-11/12 mx-auto bg-white rounded-sm">
        <h2 className="text-2xl md:text-3xl font-bold">My Tasks</h2>
        <div className="overflow-x-auto mt-6">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-base font-medium text-blue-950">Name</th>
                <th className="text-base font-medium text-blue-950">
                  Total Amount
                </th>
                <th className="text-base font-medium text-blue-950">Date</th>
                <th className="text-base font-medium text-blue-950">Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td className="font-medium">
                    {task?.title.substring(0, 25)}...
                  </td>
                  <td className="font-medium text-lg text-text-primary">
                    ${task?.totalAmount}
                  </td>
                  <td className="font-medium">{task?.date}</td>
                  <td className="flex items-center gap-3">
                    <button className="text-lg bg-yellow-600 text-white p-2 rounded-sm">
                      <FaEdit></FaEdit>
                    </button>
                    <button className="text-lg bg-red-600 text-white p-2 rounded-sm">
                      <FaTrash></FaTrash>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default BuyerTasks;