import {
  FaUserPlus,
  FaTasks,
  FaCheckCircle,
  FaMoneyBillWave,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: <FaUserPlus className="text-blue-500 text-4xl" />,
      title: "Sign Up & Log In",
      description:
        "Create an account and log in to start completing tasks. Get a welcome bonus!",
    },
    {
      id: 2,
      icon: <FaTasks className="text-green-500 text-4xl" />,
      title: "Browse & Choose Tasks",
      description:
        "Explore various tasks, select one that suits you, and follow the instructions carefully.",
    },
    {
      id: 3,
      icon: <FaCheckCircle className="text-purple-500 text-4xl" />,
      title: "Complete & Submit",
      description:
        "Finish the task, submit proof if needed, and wait for approval from the team.",
    },
    {
      id: 4,
      icon: <FaMoneyBillWave className="text-yellow-500 text-4xl" />,
      title: "Earn & Withdraw",
      description:
        "Once approved, your earnings will be credited, and you can withdraw via various methods!",
    },
  ];

  return (
    <section className="bg-gray-100">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black text-center">
          How It Works
        </h2>
        <p className="max-w-3xl mx-auto text-center mt-3 text-gray-800">
          Follow these simple steps to start earning rewards.
        </p>
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 rounded-sm shadow-sm"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
