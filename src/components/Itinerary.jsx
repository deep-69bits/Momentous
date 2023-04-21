import React from "react";
export default function Itinerary({date,itinerary}){

    let D=new Date(date)
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const Month=[
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ]
    return(
        <div class="grid grid-cols-3">
            <div class="col-span-2 px-20 py-10">

            <h1 className=" text-7xl fonthead ">Itinerary</h1>

            <h2 className="my-10 text-2xl border-b-[2px] inline-block py-2 border-pink-500" >{weekday[D.getDay()]},{Month[D.getMonth()]}{D.getDate()}</h2>
             
             {
                itinerary.map((item,index)=>{
                    return(
                        <div className="flex mb-10">
                         <div className="w-1/3 "> 
                         <h2 className="text-xl text-pink-500">
                         {item.time}
                         </h2>
                         </div>
                         <div>
                         <h2 className="mb-5 text-3xl" >{item.title}</h2>
                         <h2 className="text-md text-neutral-600">{item.description}</h2>
                         </div>
                        </div>
                    )
                })

             }

            </div>
            <img src="./images/save the date images/iternary img.png" class="w-full object-cover mr-0"/>

        </div>

    )
}