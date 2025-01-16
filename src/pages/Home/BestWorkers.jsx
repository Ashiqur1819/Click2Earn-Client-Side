import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import BestWorkersCard from "../../components/BestWorkersCard/BestWorkersCard";

const BestWorkers = () => {

    const axiosInstance = useAxios()
    const {data:bestWorkers= []} = useQuery({
        queryKey: ["bestWorkers"],
        queryFn: async() => {
            const res = await axiosInstance.get("/allUsers");
            return res.data
        }
    })

    return (
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center">
          Our Best Taskmasters
        </h2>
        <p className="max-w-4xl mx-auto text-center mt-3 text-gray-800">
          Recognizing individuals who consistently deliver exceptional work,
          exceed expectations, and inspire trust through their dedication and
          professionalism. These top performers set the standard for excellence
          on our platform.
        </p>
        <div>
            {
                bestWorkers.map(bestWorker => <BestWorkersCard bestWorker={bestWorker} key={bestWorker._id}></BestWorkersCard>)
            }
        </div>
      </div>
    );
};

export default BestWorkers;