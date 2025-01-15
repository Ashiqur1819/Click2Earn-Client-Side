import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";


const WorkerSubmission = () => {

  const axiosInstance = useAxios()
  const {user} = useAuth()
  const { data: submissions = [] } = useQuery({
    queryKey: ["submissions"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/submittedTasks/${user?.email}`);
      return res.data;
    },
  });


    return (
      <div className="mt-12 p-6 w-11/12 mx-auto bg-white">
        <h2 className="text-2xl md:text-3xl font-bold">My Submission</h2>
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
                <th className="text-base font-medium text-blue-950">Amount</th>
                <th className="text-base font-medium text-blue-950">Status</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={submission._id}>
                  <th>{index + 1}</th>
                  <td className="font-medium">
                    {submission?.title.substring(0, 25)}...
                  </td>
                  <td className="font-medium">{submission?.buyerEmail}</td>
                  <td className="font-medium text-lg text-text-primary">
                    ${(submission?.amount / 100).toFixed(3)}
                  </td>
                  <td className={`font-medium`}>
                    <p
                      className={`p-2 text-center rounded-sm ${
                        submission?.status === "Pending" &&
                        "bg-orange-100 text-orange-600"
                      } ${
                        submission?.status === "Approved" &&
                        "bg-green-100 text-green-600"
                      } ${
                        submission?.status === "Rejected" &&
                        "bg-red-100 text-red-600"
                      }`}
                    >
                      {submission?.status}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default WorkerSubmission;