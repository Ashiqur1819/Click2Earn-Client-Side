import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import { Link } from "react-router-dom";
import { FaCoins, FaEdit, FaTrash } from "react-icons/fa";


const ManageUsers = () => {
const axiosInstance = useAxios()
  const {data: users = []} = useQuery({
    queryKey: ["users"],
    queryFn: async() => {
      const res = await axiosInstance.get("/users")
      return res.data
    }
  })


    return (
      <div className="mt-12 p-6 w-11/12 mx-auto bg-white rounded-sm">
        <h2 className="text-2xl md:text-3xl font-bold">Manage Users</h2>
        <div className="overflow-x-auto mt-6">
          <table className="table">
            {/* head */}
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
                    <select className="select text-gray-700 input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none">
                      <option className="text-gray-700">Admin</option>
                      <option className="text-gray-700">Buyer</option>
                      <option className="text-gray-700">Worker</option>
                    </select>
                  </td>
                  <td>
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

export default ManageUsers;