import React from "react";

const PricingCard = ({ title,desc,price,button,feaures }) => {
  return (
    <div className="shadow-lg rounded-lg py-4 px-4 pb-20 duration-500 transition-all group hover:bg-yellow-500 cursor-pointer hover:text-white hover:scale-105">
      <h2 className="text-xl font-medium">{title}</h2>
       <h3 className="text-md py-2 text-yellow-700 group-hover:text-white">{desc}</h3>
       <h2 className="py-4 text-5xl font-medium">
         ${price} <sup className="text-[12px] text-yellow-700 group-hover:text-white ">/Month</sup>
       </h2>

       <button className=" group-hover:border-white w-full text-center group-hover:text-white text-yellow-700 py-2 border-yellow-700 border-[1px] my-5 mx-2">
       {button}
       </button>
      
        {
          feaures.map((it)=>{
             if(it.got){
              return(
                <div className="flex  my-3">
                <span className="mx-4 group-hover:text-white text-yellow-700">
                &#10003;
                </span>
                <h4>
                {it.feature}
                </h4>
                </div>
                )
             }
             return(
              <div className="flex my-3 ">
              <span className="mx-4 group-hover:text-white text-yellow-700">
              &#10005;
              </span>
              <h4>
               {it.feature}
              </h4>
           </div>
             )
          })
        }

    </div>
  );
};

const Pricing = () => {
  const plans = [
    {
      title: "Freebie",
      desc: "ideal for induviduals who need quick access to basic features",
      price: "0",
      button: "Get Started Now",
      feaures: [
        {
          got: true,
          feature: "20,000+ of PNG & SVG graphics",
        },
        {
          got: true,
          feature: "Access to 100 million stock images",
        },
        {
          got: false,
          feature: "upload custom icons and fonts",
        },
      ]
    },
    {
      title: "Freebie",
      desc: "ideal for induviduals who need quick access to basic features",
      price: "0",
      button: "Get Started Now",
      feaures: [
        {
          got: true,
          feature: "20,000+ of PNG & SVG graphics",
        },
        {
          got: true,
          feature: "Access to 100 million stock images",
        },
        {
          got: false,
          feature: "upload custom icons and fonts",
        },
      ]
    },
    {
      title: "Freebie",
      desc: "ideal for induviduals who need quick access to basic features",
      price: "0",
      button: "Get Started Now",
      feaures: [
        {
          got: true,
          feature: "20,000+ of PNG & SVG graphics",
        },
        {
          got: true,
          feature: "Access to 100 million stock images",
        },
        {
          got: false,
          feature: "upload custom icons and fonts",
        },
      ]
    },

  ];

  return (
    <div className="translate-y-[-400px]">
    <hr  className="lg:w-[85%]  w-full m-auto" />
      <div className="h-1/3 py-20   md:text-6xl text-4xl text-sky-800 font-serif text-center">
      <span className="fonthead">
      Our Pricing
      </span>
        <p className=" paratext text-xl text-black pt-4">Choose a service suitable for your event</p></div>
      <div className="grid grid-flow-row grid-cols-1 lg:grid-cols-3 lg:px-40 px-2 gap-y-10 py-10 m-auto gap-x-4">
        {plans.map((plan) => (
          <PricingCard key={plan.id} {...plan} />
        ))}
      </div>
      <hr  className="w-[95%] pt-20 m-auto" />
    </div>
  );
};

export default Pricing;
