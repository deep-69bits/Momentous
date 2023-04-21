import React from "react";

const PricingCard = ({ plan, price, features, buttonText }) => {
  return (
    <div className="max-w-xs mx-auto mb-4 rounded-lg shadow-xl overflow-hidden sm:h-96 sm:w-full gap-4 hover:scale-110 hover:text-white hover:bg-[#ec9326]" style={{transition:'0.5s'}}>
      <div className="px-6 py-8 hover:bg-[#ec9326]">
        <div className=" hover:text-white font-bold text-xl mb-2">{plan}</div>
        <div className=" hover:text-white text-base">${price}/month</div>
        <ul className="text-sm mt-4">
          {features.map((feature) => (
            <li key={feature} className="mb-2">
              <i className="fas fa-check text-green-500 mr-2"></i>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-gray-100 px-6 py-4">
        <button className="text-white font-bold py-2 px-4 rounded-full bg-[#ae6205] hover:bg-[#ec9326] focus:outline-none focus:shadow-outline">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      id: 1,
      plan: "Basic",
      price: "9.99",
      features: ["1 User", "10 Projects", "10 GB Storage"],
      buttonText: "Choose Plan",
    },
    {
      id: 2,
      plan: "Premium",
      price: "19.99",
      features: ["5 Users", "50 Projects", "50 GB Storage"],
      buttonText: "Choose Plan",
    },
    {
      id: 3,
      plan: "Enterprise",
      price: "49.99",
      features: ["Unlimited Users", "Unlimited Projects", "100 GB Storage"],
      buttonText: "Choose Plan",
    },
  ];

  return (
    <>
    <div className="h-1/3 pt-10 md:text-6xl text-4xl text-sky-800 font-serif text-center">Our Pricing
    <p className="text-xl text-black pt-4">Choose a service suitable for your event</p></div>
    <div className="flex flex-col justify-center sm:flex-row sm:justify-center sm:items-center h-auto sm:h-96 md:mt-20 mt-10 mb-20 ">
      {plans.map((plan) => (
        <PricingCard key={plan.id} {...plan} />
      ))}
    </div>
    </>
  );
};

export default Pricing;
