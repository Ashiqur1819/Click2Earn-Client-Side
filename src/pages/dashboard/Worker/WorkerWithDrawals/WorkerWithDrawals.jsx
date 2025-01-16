import { useState } from "react";
import moneyImage from "../../../../assets/money.webp"
import useUser from "../../../../hooks/useUser";
import { toast } from "react-toastify";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";

const WorkerWithDrawals = () => {

    const {user} = useAuth()
    const [coin, setCoin] = useState()
    const axiosInstance = useAxios()
    
  const handleCoinChange = e => {
    setCoin(e);
  }

  const validAmount = parseFloat(coin) / 20;
  
  const handleWithDraws = async(e) => {
    e.preventDefault()
    const form = e.target;
    const coins = coin;
    const amount = form.amount.value
    const paymentSystem = form.payment.value
    const status = "Pending"
    const workerName = user?.displayName
    const workerEmail = user?.email
    const date = new Date()
    const withdrawDate = date.toISOString().split("T")[0];
    const withdrawlCoins = parseInt(coins)
    const withdrawlAmount = parseFloat(amount)

    const withDrawInfo = {
      withdrawlCoins,
      withdrawlAmount,
      paymentSystem,
      workerName,
      workerEmail,
      withdrawDate,
      status,
    };
    
    // Send data to database
    const res = await axiosInstance.post("withdraws", withDrawInfo);
    if(res.data.insertedId){
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Withdraw request sent Successful!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }
  

    return (
      <div className="bg-gray-100 mt-12 rounded-sm">
        <div className="card w-11/12 mx-auto grid grid-cols-2 gap-6 items-center bg-white p-12 rounded-sm col-span-3">
          <div>
            <img src={moneyImage} className="h-96 object-cover" alt="" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-violet-600 ">
              Total Earning : ${user?.coins / 20}
            </h2>
            <div className="divider"></div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
              Withdraw Money
            </h2>
            <form onSubmit={handleWithDraws} className="mt-6">
              <div className="form-control">
                <label className="label px-0">
                  <span className="label-text font-medium">Coins:</span>
                </label>
                <input
                  onChange={(e) => handleCoinChange(e.target.value)}
                  type="number"
                  name="coins"
                  placeholder="Coins"
                  className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label px-0">
                  <span className="label-text font-medium mt-1">Amount:</span>
                </label>
                <input
                  value={validAmount}
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                  readOnly
                  required
                />
              </div>
              <div className="form-control mt-1">
                <label className="label px-0">
                  <span className="label-text font-medium">
                    Payment System:
                  </span>
                </label>
                <select
                  name="payment"
                  className="select text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                >
                  <option className="text-gray-700">Bkash</option>
                  <option className="text-gray-700">Nagad</option>
                  <option className="text-gray-700">Rocket</option>
                </select>
              </div>
              <div className="form-control relative mt-1">
                <label className="label px-0">
                  <span className="label-text font-medium">
                    Account Number:
                  </span>
                </label>
                <input
                  type="number"
                  name="accountNo"
                  placeholder="Account Number"
                  className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                  required
                />
              </div>
              <div className="form-control mt-6 col-span-2">
                {coin >= 200 ? (
                  <button
                    className="btn text-base bg-bg-tertiary px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]"
                  >
                    Withdraw
                  </button>
                ) : (
                  <p className="text-red-600 text-base font-medium">
                    Insufficient Coin
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default WorkerWithDrawals;