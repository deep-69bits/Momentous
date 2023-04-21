import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ deadline }) => {
  const [remainingTime, setRemainingTime] = useState(getRemainingTime(deadline));

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime(getRemainingTime(deadline));
    }, 1000);
    return () => clearInterval(interval);
  }, [deadline]);

  const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
  const hours = Math.floor((remainingTime / (60 * 60 * 1000)) % 24);
  const minutes = Math.floor((remainingTime / (60 * 1000)) % 60);
  const seconds = Math.floor((remainingTime / 1000) % 60);

  return (
    <div className="bg-[#e76da6] md:px-10 lg:px-20 py-10">
  <div className="flex justify-center md:gap-8 gap-2 text-white md:bg-[#e76da6] md:p-8 md:rounded-xl">
    <div>
    <div className="bg-[#fc749f] md:p-5 p-2 md:rounded-full rounded-xl md:w-56 md:h-56 flex justify-center items-center flex-col mx-3 border-white md:border-8 border-4">
    <div className="md:text-8xl  text-black ">{days}</div>
    </div>
    <div className="md:text-4xl text-blue-900 text-center mt-2 fonthead">Days</div>
    </div>
   
     <div className='text-7xl flex items-center text-blue-900 font-bold '>
     <h1 className='translate-y-[-40px] '>
     :
     </h1>
     </div>

    <div>
    <div className="bg-[#fc749f] md:p-5 p-4 md:rounded-full rounded-xl md:w-56 md:h-56 flex justify-center items-center flex-col mx-3 border-white md:border-8 border-4">
    <div className="md:text-8xl  text-black  ">{hours}</div>
    </div>
    <div  className="md:text-4xl text-blue-900 text-center mt-2 fonthead">Hours</div>
    </div>
  
    <div className='text-7xl flex items-center text-blue-900 font-bold '>
     <h1 className='translate-y-[-40px] '>
     :
     </h1>
     </div>


    <div>
    <div className="bg-[#fc749f] md:p-5 p-4 md:rounded-full rounded-xl md:w-56 md:h-56 flex justify-center items-center flex-col mx-3 border-white md:border-8 border-4">
    <div className="md:text-8xl  text-black  ">{minutes}</div>
    </div>
    <div  className="md:text-4xl text-blue-900 text-center mt-2 fonthead">Minutes</div>
    </div>
    
    <div className='text-7xl flex items-center text-blue-900 font-bold '>
     <h1 className='translate-y-[-40px] '>
     :
     </h1>
     </div>
     
    <div>
    <div className="bg-[#fc749f] md:p-5 p-4 md:rounded-full rounded-xl md:w-56 md:h-56   flex justify-center items-center flex-col mx-3 border-white md:border-8 border-4">
    <div className="md:text-8xl  text-black  ">{seconds}</div>
    </div>
    <div  className="md:text-4xl text-blue-900 text-center mt-2 fonthead">Seconds</div>
    </div>
  </div>
</div>
  );
};

const getRemainingTime = (deadline) => {
  const now = new Date().getTime();
  const remainingTime = deadline - now;
  return remainingTime < 0 ? 0 : remainingTime;
};

export default CountdownTimer;
