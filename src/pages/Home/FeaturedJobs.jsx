import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";
import FeaturedJobCard from "../../components/FeaturedJobCard/FeaturedJobCard";

const FeaturedJobs = () => {
    return (
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
          Featured Opportunities
        </h2>
        <p className="max-w-3xl mx-auto text-center mt-3 text-gray-800">
          Explore the best job opportunities handpicked just for you. These
          tasks offer high pay, quick completion times, and a variety of options
          to choose from. Find the perfect gig and start earning immediately!
        </p>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          <FeaturedJobCard></FeaturedJobCard>
          <FeaturedJobCard></FeaturedJobCard>
          <FeaturedJobCard></FeaturedJobCard>
          <FeaturedJobCard></FeaturedJobCard>
        </div>
        <div className="flex items-center justify-center mt-12">
          <PrimaryButton label="View All Opportunities"></PrimaryButton>
        </div>
      </div>
    );
};

export default FeaturedJobs;