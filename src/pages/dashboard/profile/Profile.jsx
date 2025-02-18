import { FaCoins } from "react-icons/fa";
import useUser from "../../../hooks/useUser";


const Profile = () => {

    const [currentUser] = useUser()
    const {name, email, photo, role, coins} = currentUser

    return (
        <div>
            <div className="max-w-md mx-auto mt-12 p-12 bg-white rounded-sm">
                <img src={photo} className="rounded-full mx-auto" alt="" />
                <div className="mt-3">
                    <h2 className="text-4xl font-bold text-center text-text-primary">{name}</h2>
                    <p className="text-center text-gray-500">{email}</p>
                </div>
                <div className="mt-3">
                    <h3 className="text-xl font-bold text-center">Roll: <span className="font-normal  text-yellow-400">{role}</span></h3>
                    <h3 className="text-xl font-bold text-center flex items-center justify-center gap-2">Total Coin: <span className="font-normal text-text-primary flex items-center gap-2"><FaCoins></FaCoins>{coins}</span></h3>
                </div>
            </div>
        </div>
    );
};

export default Profile;