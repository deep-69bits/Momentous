import React from "react";
export default function Gallery({ Gallery}){
    return(
        <div className=" grid  bg-[#e76da6] pt-20 ">
            <div className="pt-10 lg:text-8xl text-3xl  text-sky-700 md:ml-16  ml-10 fonthead">The Gallery
            <p className="lg:text-2xl text-xl  text-white py-8 paratext">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, doloremque.deserunt.<br/> Sint id necessitatibus, blanditiis repellendus corporis.</p>
            </div>
            <div className="row-span-2 grid md:grid-cols-4 grid-cols-1   gap-x-4 md:mx-10  mx-4 md:mt-8  md:pb-2">

            <img src={Gallery[3]|| "./images/save the date images/Rectangle 66.png" } alt="Image 1" className="w-full mb-10  lg:h-[500px] h-[300px] object-cover rounded-2xl" />
            <img src={Gallery[4] || "./images/save the date images/Rectangle 67.png"} alt="Image 2" className="w-full mb-10 lg:h-[500px] h-[300px] object-cover rounded-2xl" />
            <img src={Gallery[5] || "./images/save the date images/Rectangle 2.png"} alt="Image 3" className="w-full mb-10 lg:h-[500px] h-[300px] object-cover rounded-2xl" />
            <img src={Gallery[6] || "./images/save the date images/Rectangle 6.png"} alt="Image 4" className="w-full mb-10 lg:h-[500px] h-[300px] object-cover rounded-2xl" />
            </div>
        </div>

    )
}