import { useLocation } from "react-router-dom";
import Payment from "../Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import paymentImage from "../../../../assets/payment.webp"

const CheckOutForm = () => {
const stripePromise = loadStripe(import.meta.env.VITE_stripePK);

return (
  <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-center mt-6 bg-white px-4 md:px-6 lg:px-12 py-6">
      <div>
        <img src={paymentImage} alt="" />
      </div>
    <div>
      <Elements stripe={stripePromise}>
        <Payment></Payment>
      </Elements>
    </div>
  </div>
);
}
export default CheckOutForm;
