import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import FeaturedJobCard from "../../../../components/FeaturedJobCard/FeaturedJobCard";

const TaskList = () => {
  const axiosInstance = useAxios();
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosInstance.get("/tasks");
      return res.data;
    },
  });

  const filteredTasks = tasks.filter((task) => task.workers > 0);

  return (
    <div className="p-4 md:p-6 mt-6">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
        Featured Opportunities
      </h2>
      <p className="max-w-3xl mx-auto text-center mt-3 text-gray-800">
        Explore the best job opportunities handpicked just for you. These tasks
        offer high pay, quick completion times, and a variety of options to
        choose from. Find the perfect gig and start earning immediately!
      </p>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredTasks.map((task) => (
          <FeaturedJobCard task={task} key={task._id}></FeaturedJobCard>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
