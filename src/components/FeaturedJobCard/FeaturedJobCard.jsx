import SecondaryButton from "../Buttons/SecondaryButton";


const FeaturedJobCard = () => {
    return (
      <div className="card bg-white rounded-sm">
        <figure>
          <img
            src="https://i.ibb.co.com/5Rt6wCM/Watch-You-Tube-video.jpg"
            alt=""
          />
        </figure>
        <div className="p-3">
          <p className="w-full flex justify-between gap-2 font-medium text-green-500">
            <span className="bg-green-100 w-full px-3 py-1 rounded-md">
              Required Workers
            </span>
            <span className="bg-green-100 px-3 py-1 rounded-md">10</span>
          </p>
          <h2 className="card-title mt-3">
            Watch my YouTube video and make a comment
          </h2>
          <p className="text-justify text-gray-800 mt-2">
            Watch the video completely and leave a genuine comment related to
            the content. Make sure the comment is meaningful and engaging.
          </p>
          <div className="card-actions justify-between items-center mt-3">
            <h3 className="text-2xl md:text-3xl font-medium text-text-primary">
              $0.100
            </h3>
            <SecondaryButton label="View Details"></SecondaryButton>
          </div>
        </div>
      </div>
    );
};

export default FeaturedJobCard;