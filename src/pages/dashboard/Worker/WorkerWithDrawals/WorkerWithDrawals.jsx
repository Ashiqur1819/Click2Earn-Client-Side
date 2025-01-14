import moneyImage from "../../../../assets/money.webp"

const WorkerWithDrawals = () => {
    return (
      <div className="bg-gray-100 mt-12 rounded-sm">
        <div className="card w-11/12 mx-auto grid grid-cols-2 gap-6 items-center bg-white p-12 rounded-sm col-span-3">
          <div>
            <img src={moneyImage} className="h-96 object-cover" alt="" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold ">
              Withdraw Money
            </h2>
            <form className="mt-6">
              <div className="form-control">
                <label className="label px-0">
                  <span className="label-text font-medium">Coins:</span>
                </label>
                <input
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
                  type="number"
                  name="amount"
                  placeholder="Amount"
                  className="grow text-gray-700 text-sm input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none"
                  required
                />
              </div>
              <div className="form-control mt-1">
                <label className="label px-0">
                  <span className="label-text font-medium">
                    Payment System:
                  </span>
                </label>
                <select className="select text-gray-700 text-base input border border-gray-200 rounded-none focus:border-pink-300 focus:outline-none">
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
                <button className="bg-bg-tertiary px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e6025b]">
                  Withdraw
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default WorkerWithDrawals;