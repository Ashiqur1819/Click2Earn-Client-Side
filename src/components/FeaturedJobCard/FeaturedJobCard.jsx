import { Link } from "react-router-dom";
import SecondaryButton from "../Buttons/SecondaryButton";

const FeaturedJobCard = ({task}) => {
  const {
    _id,
   title, photo, workers, amount, date, subInfo, description, buyerName, 
  } = task;
    return (
      <div className="card bg-white rounded-sm">
        <figure>
          <img src={photo} className="h-40 w-full object-cover" alt={title} />
        </figure>
        <div className="p-3">
          <p className="w-full flex justify-between font-medium gap-2 text-xs text-pink-500">
            <span className="bg-red-50 px-2 py-1 rounded-md">
              Required Workers: {workers}
            </span>
            <span className="bg-red-50 px-2 py-1 rounded-md">Date: {date}</span>
          </p>
          <h2 className="card-title mt-3">{title.substring(0, 35)}...</h2>
          <p className="text-justify text-sm text-gray-700 mt-2">
            {description.substring(0, 75)}...
          </p>
          <p className="text-justify font-medium mt-2">
            <span className="">Buyer:</span> {buyerName}
          </p>
          <div className="card-actions justify-between items-center mt-3">
            <h3 className="text-2xl md:text-3xl font-medium text-text-primary">
              ${(amount / 100).toFixed(3)}
            </h3>
            <Link to={`/dashboard/taskDetails/${_id}`}>
              <SecondaryButton label="View Details"></SecondaryButton>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default FeaturedJobCard;