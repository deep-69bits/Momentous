import React from "react";
export default function Carousel({Gallery}){
    return(
        <div className="grid md:grid-cols-3 md:gap-x-8 mx-10">
        <img src={ Gallery[0] || "./images/save the date images/Rectangle 65.png"  }alt="Image 1" className="w-full mb-40  lg:h-[500px] h-[200px] object-cover rounded-2xl" />
        <img src={ Gallery[1] || "./images/save the date images/Rectangle 66.png" }alt="Image 1" className="w-full lg:h-[500px] h-[200px] mb-40 object-cover rounded-2xl" />
        <img src={ Gallery[2] || "./images/save the date images/Rectangle 67.png" }alt="Image 1" className="w-full lg:h-[500px] h-[200px] mb-40 object-cover rounded-2xl" />
        </div>
    )
}