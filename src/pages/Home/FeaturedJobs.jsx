import { useQuery } from "@tanstack/react-query";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import FeaturedJobCard from "../../components/FeaturedJobCard/FeaturedJobCard";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";

const FeaturedJobs = () => {
  const axiosInstance = useAxios()
  const {data: tasks = []} = useQuery({
    queryKey: ["tasks"],
    queryFn: async() => {
    const res = await axiosInstance.get("/tasks")
      return res.data
    }
  })

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
          {tasks.slice(0, 8).map((task) => (
            <FeaturedJobCard task={task} key={task._id}></FeaturedJobCard>
          ))}
        </div>
        <div className="flex items-center justify-center mt-12">
          <Link to="/dashboard/taskList">
            <PrimaryButton label="View All Opportunities"></PrimaryButton>
          </Link>
        </div>
      </div>
    );
};

export default FeaturedJobs;