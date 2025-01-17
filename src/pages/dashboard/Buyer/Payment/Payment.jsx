import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import SecondaryButton from "../../../../components/Buttons/SecondaryButton";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxios from "../../../../hooks/useAxios";
import useAuth from "../../../../hooks/useAuth";
import Swal from "sweetalert2";
import useUser from "../../../../hooks/useUser";

const Payment = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation()
  const {user} = useAuth()
  const [currentUser, refetch] = useUser()
      const [clientSecret, setClientSecres] = useState();
          const [transactionId, setTransactionId] = useState();
  const {money, coins} = location.state
  const axiosInstance = useAxios()


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

    const { error} = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
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
        console.log("Confirm error");
      } else {
        if (paymentIntent.status === "succeeded") {
          setTransactionId(paymentIntent.id);
          const date = new Date()
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

            const remainingCoins = currentUser?.coins + coins
            const {data} = await axiosInstance.patch(`/users/${user?.email}`, {remainingCoins})
            if (data.modifiedCount > 0){
              Swal.fire({
                title: "Payment Successful!",
                icon: "success",
                draggable: true,
              });
              refetch()
            }
            // navigate("/dashboard/paymentHistory");
          }
        }
      }
  }

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
      <div className="w-full bg-bg-tertiary flex items-center justify-center mt-3">
        <SecondaryButton
        className="hover:bg-bg-tertiary"
          type="submit"
          disabled={!stripe}
          label="Pay"
        ></SecondaryButton>
      </div>
    </form>
  );
};

export default Payment;
