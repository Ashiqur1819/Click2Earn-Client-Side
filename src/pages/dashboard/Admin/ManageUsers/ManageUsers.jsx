import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import { FaCoins, FaTrash } from "react-icons/fa";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const ManageUsers = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/allUsers/${user?.email}`);
      return res.data;
    },
  });

  const handleRoleChange = async (e, id) => {
    const role = e;
    const res = await axiosInstance.patch(`/roleUpdate/${id}`, { role });
    if (res.data.modifiedCount > 0) {
      refetch();
    }
  };

  const handleDeleteUser = (user) => {
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
        const res = await axiosInstance.delete(`/users/${user?._id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "User has been deleted successfully.",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };

  return (
    <div className="mt-12 p-4 md:p-6 w-11/12 mx-auto bg-white rounded-sm">
      <h2 className="text-2xl md:text-3xl font-bold">Manage Users</h2>
      <div className="overflow-x-auto mt-6">
        <table className="table">
          <thead>
            <tr>
              <th className="text-base font-medium text-blue-950">Photo</th>
              <th className="text-base font-medium text-blue-950">Name</th>
              <th className="text-base font-medium text-blue-950">Email</th>
              <th className="text-base font-medium text-blue-950">Coins</th>
              <th className="text-base font-medium text-blue-950">Role</th>
              <th className="text-base font-medium text-blue-950">
                Update Role
              </th>
              <th className="text-base font-medium text-blue-950">Remove</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={user?.photo}
                        referrerPolicy="no-referrer"
                        alt={user?.name}
                      />
                    </div>
                  </div>
                </td>
                <td className="font-medium">{user?.name}</td>
                <td className="font-medium">{user?.email}</td>
                <td className="font-medium flex items-center gap-2 text-base text-text-primary">
                  <FaCoins></FaCoins>
                  {user?.coins}
                </td>
                <td className="font-medium">{user?.role}</td>
                <td className="font-medium">
                  <select
                    onChange={(e) => handleRoleChange(e.target.value, user._id)}
                    defaultValue={user?.role}
                    className="select text-gray-700 input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                  >
                    <option className="text-gray-700">Admin</option>
                    <option className="text-gray-700">Buyer</option>
                    <option className="text-gray-700">Worker</option>
                  </select>
                </td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
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

export default ManageUsers;
