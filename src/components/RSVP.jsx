import React from "react";
export default function RSVP(){
    return(
        <div class="grid md:grid-cols-2 font-serif">
            <img src="./images/save the date images/rsvp.png" className="md:w-full md:h-screen w-0 h-0 object-cover mr-0"/>
            <div className=" mx-20 flex my-40 ">
             <div>
             <h1 className="fonthead text-7xl font-semibold my-10 text-blue-800">
             RSVP
             </h1>
             <p className="text-xl">
             I, <input type="text" className="border-[1px] text-gray-500 border-gray-400 focus:outline-none w-[200px] py-1 px-2 mx-3"   /> am 
             <select name="" className="bg-white border-[1px] text-gray-500 border-gray-400 h-10 focus:outline-none w-[200px] py-1 px-2 mx-3" id="">
             <option  className="border-[1px]" value="">Attending</option>
             
             </select>
             <br />
             <br />
             and i am bringing
             <select name="" className="bg-white border-[1px] text-gray-500 border-gray-400 h-10 focus:outline-none w-[200px] py-1 px-2 mx-3" id="">
             <option  className="border-[1px] text-gray-500" value="">One Person</option>
             <option  className="border-[1px] text-gray-500" value="">Two Persons</option>
             <option  className="border-[1px] text-gray-500" value="">Three  Persons</option>
             <option  className="border-[1px] text-gray-500" value="">Four Persons</option>
             </select>
             with me.
             </p>
               
             <button className='w-1/2 mx-auto border-[1px] my-10 border-pink-500 bg-pink-500 text-white font-semibold text-xl text-center py-2'>Submit</button>
             </div>
              
            </div>
        </div>    
    )
}