import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../../hooks/useAxios";
import FeaturedJobCard from "../../../../components/FeaturedJobCard/FeaturedJobCard";
import { useState } from "react";

const TaskList = () => {
  const axiosInstance = useAxios();
  const [searchTerm, setSearchTerm] = useState("");
  const { data: tasks = [] } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const res = await axiosInstance.get("/tasks");
      return res.data;
    },
  });

  const filteredTasks = tasks.filter((task) => task.workers > 0);
  const filteredTasks2 = filteredTasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
      <div className="flex gap-6 mt-12">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="grow text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
        />
        <select className="select grow text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none">
          <option>Sort by Ascending Price</option>
          <option>Sort by Descending Price</option>
        </select>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {filteredTasks2.map((task) => (
          <FeaturedJobCard task={task} key={task._id}></FeaturedJobCard>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
