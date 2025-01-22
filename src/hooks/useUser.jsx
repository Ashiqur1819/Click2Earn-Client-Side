import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUser = () => {
  const { user } = useAuth();
  const axiosInstance = useAxios();

  const { data: currentUser = {}, refetch } = useQuery({
    queryKey: ["user", user?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/users/${user?.email}`);
      return res.data;
    },
  });

  return [currentUser, refetch];
};

export default useUser;
