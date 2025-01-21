import { FaCoins } from "react-icons/fa";


const WorkerSubmissionsRow = ({submission, index}) => {
    return (
      <tr>
        <th>{index + 1}</th>
        <td className="font-medium">{submission?.title.substring(0, 25)}...</td>
        <td className="font-medium">{submission?.buyerEmail}</td>
        <td className="font-medium text-lg text-text-primary flex items-center gap-2">
          <FaCoins></FaCoins>
          {submission?.amount} 
        </td>
        <td className={`font-medium`}>
          <p
            className={`p-2 text-center rounded-sm ${
              submission?.status === "Pending" &&
              "bg-orange-100 text-orange-600"
            } ${
              submission?.status === "Approved" && "bg-green-100 text-green-600"
            } ${
              submission?.status === "Rejected" && "bg-red-100 text-red-600"
            }`}
          >
            {submission?.status}
          </p>
        </td>
      </tr>
    );
};

export default WorkerSubmissionsRow;