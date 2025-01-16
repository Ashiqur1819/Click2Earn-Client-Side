import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import { FaCoins, FaTrash } from "react-icons/fa";

const AdminHome = () => {
  const axiosInstance = useAxios();
  const { data: withdraws = [], refetch } = useQuery({
    queryKey: ["withdraws"],
    queryFn: async () => {
      const res = await axiosInstance.get("/withdraws");
      return res.data;
    },
  });

  return (
    <div className="p-6 w-11/12 mx-auto bg-white mt-12 rounded-sm">
      <div className="flex items-center gap-6">
        <div className="bg-green-200 p-6 text-center rounded-sm min-w-52">
          <h3 className="text-lg font-semibold">Total Worker</h3>
          <h2 className="text-5xl text-pink-500 font-bold">25</h2>
        </div>
        <div className="bg-blue-200 p-6 text-center rounded-sm min-w-52">
          <h3 className="text-lg font-semibold">Total Buyer</h3>
          <h2 className="text-5xl text-pink-500 font-bold">35</h2>
        </div>
        <div className="bg-red-200 p-6 text-center rounded-sm min-w-52">
          <h3 className="text-lg font-semibold">Total Coins</h3>
          <h2 className="text-5xl text-pink-500 font-bold">45</h2>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">
           Withdrawal Requests
        </h2>
        <div className="overflow-x-auto mt-6">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-base font-medium text-blue-950">
                  Worker Name
                </th>
                <th className="text-base font-medium text-blue-950">Amount</th>
                <th className="text-base font-medium text-blue-950">Date</th>
                <th className="text-base font-medium text-blue-950">
                  Payment System
                </th>
                <th className="text-base font-medium text-blue-950">Status</th>
                <th className="text-base font-medium text-blue-950">Action</th>
              </tr>
            </thead>
            <tbody>
              {withdraws.map((withdraw, index) => (
                <tr key={withdraw._id}>
                  <th>{index + 1}</th>
                  <td className="font-medium">{withdraw?.workerName}</td>
                  <td className="font-medium text-lg text-text-primary flex items-center gap-2">
                    <FaCoins></FaCoins>
                    {withdraw?.withdrawlAmount}
                  </td>
                  <td className="font-medium">{withdraw?.withdrawDate}</td>
                  <td className="font-medium">{withdraw?.paymentSystem}</td>
                  <td className="font-medium">
                    <p
                      className={`p-2 text-center rounded-sm ${
                        withdraw?.status === "Pending" &&
                        "bg-orange-100 text-orange-600"
                      } ${
                        withdraw?.status === "Approved" &&
                        "bg-green-100 text-green-600"
                      } ${
                        withdraw?.status === "Rejected" &&
                        "bg-red-100 text-red-600"
                      }`}
                    >
                      {withdraw?.status}
                    </p>
                  </td>
                  <td className="font-medium">
                    <button className="text-base bg-green-600 text-white px-4 py-2 rounded-sm hover:bg-green-700">
                      Approve
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
