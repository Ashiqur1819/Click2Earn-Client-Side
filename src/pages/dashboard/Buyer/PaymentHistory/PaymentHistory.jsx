import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../hooks/useAuth";
import useAxios from "../../../../hooks/useAxios";


const PaymentHistory = () => {

  const { user } = useAuth();
  const axiosInstance = useAxios();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosInstance.get(`/payments/${user?.email}`);
      return res.data;
    },
  });

  console.log(payments)

    return (
      <div className="mt-12 p-6 w-11/12 mx-auto bg-white rounded-sm">
        <h2 className="text-2xl md:text-3xl font-bold">Payment History</h2>
        <div className="overflow-x-auto mt-6">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th className="text-base font-medium text-blue-950">Email</th>
                <th className="text-base font-medium text-blue-950">Transaction ID</th>
                <th className="text-base font-medium text-blue-950">Date</th>
                <th className="text-base font-medium text-blue-950">Price</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((payment, index) => (
                <tr key={payment._id}>
                  <th className="font-medium text-gray-600">{index + 1}</th>
                  <td className="font-medium text-gray-600">{payment?.email}</td>
                  <td className="font-medium text-gray-600">{payment?.transactionId}</td>
                  <td className="font-medium text-gray-600">{payment?.date}</td>
                  <td className="font-medium text-gray-600">${payment?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default PaymentHistory;