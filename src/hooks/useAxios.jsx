import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://click-2-earn-server-side.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
