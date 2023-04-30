import React from "react";
export default function PhotoGallery(){
    return(
      <div>
      <img className=" hidden lg:block absolute z-10 h-[1200px] translate-y-[-150px] right-10" src="./images/photobooth images/photobooth.png" alt="" />
      <div className=" lg:bg-yellow-100 bg-white  clip pt-20 -z-20">

       <div className="lg:flex block justify-between">

        <div>

         <div className="grid grid-flow-row grid-cols-2">

         <div>
         <img src="./images/photobooth images/Rectangle 11.png" alt="" /> 
         </div>


          <div></div>

          <div className="grid grid-flow-col grid-rows-2">
           <img className="translate-y-4" src="./images/photobooth images/Rectangle 4.png" alt="" />
           <img src="./images/photobooth images/Rectangle 8.png" alt="" />
          </div>


          <div className="translate-y-4">
          <img src="./images/photobooth images/Rectangle 3.png" alt="" />
          </div>


         </div>


         <img src="./images/photobooth images/Rectangle 10.png" alt="" />

        </div>



        <div className="grid grid-flow-col grid-rows-2 z-50" >

       
        <div className="lg:translate-y-[609px] translate-y-1">
         <img src="./images/photobooth images/Rectangle 6.png" alt="" />
        </div>
        <div className="lg:translate-y-[309px] translate-y-1"><img src="./images/photobooth images/Rectangle 9.png" alt="" /></div>
        <div></div>
        <div className=" lg:translate-y-[309px] translate-y-1">
         <img src="./images/photobooth images/Rectangle 11.png" alt="" />
        </div>

        </div>

       </div>
      
      </div>
      </div>
    )
}
