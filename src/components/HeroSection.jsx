import React from "react";
export default function HeroSection({groom,bride}){
    return(
        <div className="h-96 flex flex-col items-center gap-y-4 paratext">
            <div className="h-1/3 pt-10 text-4xl text-sky-800 paratext">Save The Date</div>
            <div className="h-1/3 w-full md:text-8xl text-6xl text-center text-[#83710a] specialtext">{groom} & {bride}</div>
            <div className="h-1/3 text-4xl  text-sky-800 paratext">The Great Wedding</div>
        </div>
    )
}