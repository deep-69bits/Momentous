import React from "react";
export default function Gallery({ Gallery}){
    return(
        <div className="grid grid-rows-3 bg-[#e76da6] pt-20 ">
            <div className="pt-10 md:text-8xl text-6xl text-sky-800 md:ml-40  ml-10 font-serif">The Gallery
            <p className="text-2xl  text-white py-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, doloremque.deserunt.<br/> Sint id necessitatibus, blanditiis repellendus corporis.</p>
            </div>
            <div className="row-span-2 grid md:grid-cols-4 grid-cols-2 gap-x-4 md:mx-10 mx-4 md:mt-8 md:pb-2">

            <img src={Gallery[3]|| "./images/save the date images/Rectangle 66.png" } alt="Image 1" className="w-full mb-10  h-[500px] object-cover rounded-2xl" />
            <img src={Gallery[4] || "./images/save the date images/Rectangle 67.png"} alt="Image 2" className="w-full mb-10 h-[500px] object-cover rounded-2xl" />
            <img src={Gallery[5] || "./images/save the date images/Rectangle 2.png"} alt="Image 3" className="w-full mb-10 h-[500px] object-cover rounded-2xl" />
            <img src={Gallery[6] || "./images/save the date images/Rectangle 6.png"} alt="Image 4" className="w-full mb-10 h-[500px] object-cover rounded-2xl" />
            </div>
        </div>

    )
}