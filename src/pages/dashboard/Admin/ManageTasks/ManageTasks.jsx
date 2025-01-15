import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";


const ManageTasks = () => {

  const axiosInstance = useAxios();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosInstance.get("/tasks");
      return res.data;
    },
  });

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
              Swal.fire({
                  title: "Deleted!",
                  text: "Task has been deleted successfully.",
                  icon: "success",
                });
                refetch()
              }
          }
        });
      };

  

    return (
      <div className="mt-12 p-6 w-11/12 mx-auto bg-white rounded-sm">
        <h2 className="text-2xl md:text-3xl font-bold">Manage Tasks</h2>
        <div className="overflow-x-auto mt-6">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-base font-medium text-blue-950">Title</th>
                <th className="text-base font-medium text-blue-950">
                  Buyer Email
                </th>
                <th className="text-base font-medium text-blue-950">
                  Completion Date
                </th>
                <th className="text-base font-medium text-blue-950">Action</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={task._id}>
                  <th>{index + 1}</th>
                  <td className="font-medium">
                    {task?.title.substring(0, 35)}...
                  </td>
                  <td className="font-medium">{task?.buyerEmail}</td>
                  <td className="font-medium">{task?.date}</td>
                  <td>
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

export default ManageTasks;