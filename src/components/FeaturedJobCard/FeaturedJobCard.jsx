import SecondaryButton from "../Buttons/SecondaryButton";

const FeaturedJobCard = ({task}) => {
  const {
    task_image_url,
    task_title,
    required_workers,
    payable_amount,
    task_detail,
  } = task;
    return (
      <div className="card bg-white rounded-sm">
        <figure>
          <img
            src={task_image_url} className="h-52 object-cover"
            alt={task_title}
          />
        </figure>
        <div className="p-3">
          <p className="w-full flex justify-between gap-2 font-medium text-pink-500">
            <span className="bg-red-50  w-full px-3 py-1 rounded-md">
              Required Workers
            </span>
            <span className="bg-red-50 px-3 py-1 rounded-md">{required_workers}</span>
          </p>
          <h2 className="card-title mt-3">
            {task_title}
          </h2>
          <p className="text-justify text-gray-700 mt-2">
            {task_detail.substring(0,75)}...
          </p>
          <div className="card-actions justify-between items-center mt-3">
            <h3 className="text-2xl md:text-3xl font-medium text-text-primary">
              ${payable_amount}
            </h3>
            <SecondaryButton label="View Details"></SecondaryButton>
          </div>
        </div>
      </div>
    );
};

export default FeaturedJobCard;