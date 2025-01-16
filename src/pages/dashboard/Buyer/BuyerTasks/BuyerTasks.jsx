import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import { FaCoins, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useUser from "../../../../hooks/useUser";

const BuyerTasks = () => {
  const { user } = useAuth();
  const [currentUser, refetchUser] = useUser();
  const axiosInstance = useAxios();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", currentUser],
    queryFn: async () => {
      const res = await axiosInstance.get(`/buyerTasks/${user?.email}`);
      return res.data;
    },
  });

  const sortedTasks = tasks.sort((a, b) => new Date(b.date) - new Date(a.date));

  const handleDeleteTask = (task) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosInstance.delete(`/tasks/${task?._id}`);
        if (res.data.deletedCount > 0) {
          refetch()
          const remainingCoins = task?.totalAmount + currentUser?.coins;
          const res = await axiosInstance.patch(`/users/${user?.email}`, {
            remainingCoins,
          });
          if (res.data.modifiedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted successfully.",
              icon: "success",
            });
            refetchUser()
          }
        }
      }
    });
  };

  return (
    <div className="mt-12 p-6 w-11/12 mx-auto bg-white rounded-sm">
      <h2 className="text-2xl md:text-3xl font-bold">My Tasks</h2>
      <div className="overflow-x-auto mt-6">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-base font-medium text-blue-950">Title</th>
              <th className="text-base font-medium text-blue-950">
                 Amount
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
                <td className="font-medium text-lg text-text-primary flex items-center gap-2">
                  <FaCoins></FaCoins>{task?.totalAmount}
                </td>
                <td className="font-medium">{task?.date}</td>
                <td className="flex items-center gap-3">
                  <Link to={`/dashboard/updateTask/${task._id}`}>
                    <button className="text-lg bg-yellow-600 text-white p-2 rounded-sm">
                      <FaEdit></FaEdit>
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteTask(task)}
                    className="text-lg bg-red-600 text-white p-2 rounded-sm"
                  >
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
