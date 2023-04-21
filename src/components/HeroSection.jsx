import React from "react";
export default function HeroSection({groom,bride}){
    return(
        <div className="h-96 flex flex-col items-center gap-y-7">
            <div className="h-1/3 pt-10 text-4xl text-sky-800 font-serif">Save The Date</div>
            <div className="h-1/3 w-full md:text-8xl text-6xl text-center font-serif">{groom} & {bride}</div>
            <div className="h-1/3 text-4xl  text-sky-800 font-serif">The Great Wedding</div>
        </div>
    )
}