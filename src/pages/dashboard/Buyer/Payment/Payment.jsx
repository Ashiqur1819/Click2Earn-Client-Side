import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useUser from "../../../../hooks/useUser";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { user } = useAuth();
  const [currentUser, refetch] = useUser();
  const [clientSecret, setClientSecres] = useState();
  const [transactionId, setTransactionId] = useState();
  const { money, coins } = location.state;
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    if (money > 0) {
      axiosInstance
        .post("/create-payment-intent", { price: money })
        .then((res) => {
          setClientSecres(res.data.clientSecret);
        });
    }
  }, [axiosInstance, money]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      return;
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "Anonymous",
            email: user?.email || "Anonymous",
          },
        },
      });

    if (confirmError) {
      return;
    } else {
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);
        const date = new Date();
        const formattedDate = date.toISOString().split("T")[0];
        // save the payment in database
        const payment = {
          email: user.email,
          price: money,
          transactionId: paymentIntent.id,
          date: formattedDate,
        };

        const res = await axiosInstance.post("/payments", payment);
        if (res.data.insertedId) {
          const remainingCoins = currentUser?.coins + coins;
          const { data } = await axiosInstance.patch(`/users/${user?.email}`, {
            remainingCoins,
          });
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: "Payment Successful!",
              icon: "success",
              draggable: true,
            });
            navigate("/dashboard/paymentHistory");
            refetch();
          }
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="p-2 border"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <div className="w-full flex items-center justify-center mt-3">
        <button className="bg-bg-tertiary w-full px-4 py-2 rounded-sm text-white font-medium transition-all hover:bg-[#e60060]">
          Pay
        </button>
      </div>
    </form>
  );
};

export default Payment;
