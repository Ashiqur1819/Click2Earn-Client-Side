import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import { FaCoins } from "react-icons/fa";

const WorkerHome = () => {
  const axiosInstance = useAxios();
  const { user } = useAuth();

  const { data: approveTasks = [] } = useQuery({
    queryKey: ["approveTasks"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/approveTasks/${user?.email}`);
      return res.data;
    },
  });

  const { data: submissions = [] } = useQuery({
    queryKey: ["submissions"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/submittedTasks/${user?.email}`);
      return res.data;
    },
  });

  const { data: pendingSubmissions = [] } = useQuery({
    queryKey: ["pendingSubmissions"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/pendingSubmissions/${user?.email}`);
      return res.data;
    },
  });

  const { data: approveSubmissions = [] } = useQuery({
    queryKey: ["approveSubmissions"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/approveSubmissions/${user?.email}`);
      return res.data;
    },
  });

  const totalEarning = approveSubmissions.reduce(
    (total, current) => total + current.amount,
    0
  );

  return (
    <div className="p-4 md:p-6 w-11/12 mx-auto mt-12 bg-white">
      <div className="lg:flex items-center gap-6">
        <div className="bg-blue-200 p-6 text-center rounded-sm min-w-52">
          <h3 className="text-lg font-semibold">Total Submission</h3>
          <h2 className="text-5xl text-pink-500 font-bold">
            {submissions.length}
          </h2>
        </div>
        <div className="bg-red-200 p-6 text-center rounded-sm min-w-52">
          <h3 className="text-lg font-semibold">Total Pending Submission</h3>
          <h2 className="text-5xl text-pink-500 font-bold">
            {pendingSubmissions.length}
          </h2>
        </div>
        <div className="bg-green-200 p-6 text-center rounded-sm min-w-52">
          <h3 className="text-lg font-semibold">Total Earning</h3>
          <h2 className="text-5xl text-pink-500 font-bold">{totalEarning}</h2>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl md:text-3xl font-bold">Approved Submission</h2>
        <div className="overflow-x-auto mt-6">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th></th>
                <th className="text-base font-medium text-blue-950">Title</th>
                <th className="text-base font-medium text-blue-950">Amount</th>
                <th className="text-base font-medium text-blue-950">
                  Buyer Name
                </th>
                <th className="text-base font-medium text-blue-950">Status</th>
              </tr>
            </thead>
            <tbody>
              {approveTasks.map((approveTask, index) => (
                <tr key={approveTask._id}>
                  <th>{index + 1}</th>
                  <td className="font-medium">
                    {approveTask?.title.substring(0, 25)}...
                  </td>
                  <td className="font-medium text-lg text-text-primary flex items-center gap-2">
                    <FaCoins></FaCoins>
                    {approveTask?.amount}
                  </td>
                  <td className="font-medium">{approveTask?.buyerEmail}</td>
                  <td className={`font-medium`}>
                    <p
                      className={`p-2 text-center rounded-sm bg-green-100 text-green-600`}
                    >
                      {approveTask?.status}
                    </p>
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

export default WorkerHome;
