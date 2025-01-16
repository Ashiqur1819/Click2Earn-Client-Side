import { FaCoins } from "react-icons/fa";
import winingImage from "../../assets/wining.webp"


const BestWorkersCard = ({bestWorker}) => {

    const {name, email, photo, coins} = bestWorker || {}

    return (
      <div className="shadow-sm bg-white">
        <div className="h-24 bg-blue-100 flex items-center justify-end">
            <img src={winingImage} className="w-24 h-24 object-cover" alt="" />
        </div>
        <div className="p-6 relative">
          <img src={photo} className="absolute -top-12 rounded-full" alt="" />
          <div className="mt-10 flex items-center justify-between ">
            <div>
              <h2 className="text-xl font-semibold">{name}</h2>
              <p className="text-sm text-gray-700">{email}</p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-3xl font-bold text-text-primary">
                <FaCoins className="text-purple-700"></FaCoins>
                {coins}
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BestWorkersCard;