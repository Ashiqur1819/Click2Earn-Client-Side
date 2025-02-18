import { FaCoins } from "react-icons/fa";
import winingImage from "../../assets/wining.webp";


const BestWorkersCard = ({ bestWorker }) => {
  const { name, email, photo, coins } = bestWorker || {};

  return (
    <div
      className="shadow-sm bg-white max-w-full"
    >
      <div className=" bg-black flex items-center justify-end">
        <img src={winingImage} className="w-20 h-20 object-cover" alt="" />
      </div>
      <div className="p-6 relative">
        <img
          src={photo}
          referrerPolicy="no-referrer"
          className="w-20 h-20 object-cover absolute -top-10 rounded-full"
          alt=""
        />
        <div className="mt-10 md:flex md:items-center md:justify-between space-y-3">
          <div>
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-700">{email}</p> 
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-3xl font-bold text-text-primary">
              <FaCoins></FaCoins>
              {coins}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestWorkersCard;
