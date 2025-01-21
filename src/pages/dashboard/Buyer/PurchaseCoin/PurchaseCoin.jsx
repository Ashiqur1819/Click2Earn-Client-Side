import React from "react";
import priceImage1 from "../../../../assets/price1.webp";
import priceImage2 from "../../../../assets/price2.webp";
import priceImage3 from "../../../../assets/price3.webp";
import priceImage4 from "../../../../assets/price4.webp";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";

const PurchaseCoin = () => {
  return (
    <div className="mt-12">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
        Choose Your Perfect Plan
      </h2>
      <p className="max-w-2xl mx-auto text-center mt-3 text-gray-800">
        Our competitive pricing is designed to meet your unique needs. Discover
        the right package for you and get started effortlessly.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-6 mt-6">
        <Link to="/dashboard/checkOut" state={{ money: 1, coins: 10 }}>
          <div className="flex flex-col items-center justify-center bg-white shadow-md">
            <img
              src={priceImage1}
              className="h-40 w-full object-cover"
              alt=""
            />
            <div className="py-6 text-center">
              <h2 className="flex items-center text-center gap-2 text-3xl font-bold text-text-primary">
                <FaCoins></FaCoins>10
              </h2>
              <p className="text-3xl">=</p>
              <h3 className="text-3xl font-bold text-blue-950">$1</h3>
            </div>
          </div>
        </Link>
        <Link to="/dashboard/checkOut" state={{ money: 10, coins: 150 }}>
          <div className="flex flex-col items-center justify-center bg-white shadow-md">
            <img
              src={priceImage2}
              className="h-40 w-full object-cover"
              alt=""
            />
            <div className="py-6 text-center">
              <h2 className="flex items-center text-center gap-2 text-3xl font-bold text-text-primary">
                <FaCoins></FaCoins>150
              </h2>
              <p className="text-3xl">=</p>
              <h3 className="text-3xl font-bold text-blue-950">$10</h3>
            </div>
          </div>
        </Link>
        <Link to="/dashboard/checkOut" state={{ money: 20, coins: 500 }}>
          <div className="flex flex-col items-center justify-center bg-white shadow-md">
            <img
              src={priceImage3}
              className="h-40 w-full object-cover"
              alt=""
            />
            <div className="py-6 text-center">
              <h2 className="flex items-center text-center gap-2 text-3xl font-bold text-text-primary">
                <FaCoins></FaCoins>500
              </h2>
              <p className="text-3xl">=</p>
              <h3 className="text-3xl font-bold text-blue-950">$20</h3>
            </div>
          </div>
        </Link>
        <Link to="/dashboard/checkOut" state={{ money: 35, coins: 1000 }}>
          <div className="flex flex-col items-center justify-center bg-white shadow-md">
            <img
              src={priceImage4}
              className="h-40 w-full object-cover"
              alt=""
            />
            <div className="py-6 text-center">
              <h2 className="flex items-center text-center gap-2 text-3xl font-bold text-text-primary">
                <FaCoins></FaCoins>1000
              </h2>
              <p className="text-3xl">=</p>
              <h3 className="text-3xl font-bold text-blue-950">$35</h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default PurchaseCoin;
