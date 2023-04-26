import React from "react";
export default function PhotoGallery(){
    return(
      <div>
       <img className="absolute h-[1100px] w-[500px] translate-y-44 right-5 z-40"  src="./images/photobooth images/photobooth.png" alt="" />
      <div className="pt-10 md:text-6xl text-center text-6xl text-sky-800 md:ml-40 ml-10 font-serif mb-20">
      <h1 className="fonthead">The Gallery</h1>
      <p className="text-xl  text-black paratext pt-10">Enjoy the most cherishable moments of the event that are<br/> hand-curated and arranged in a picture gallery. </p>
      </div>

        <div className="-z-20  pt-20 bg-[#fdefd6] clip bg-no-repeat bg-cover" >
           <div className="grid grid-flow-row grid-cols-2 gap-y-2 mt-6 "> 


            <div>
            

            <div>
            <img className="w-1/2 h-60" src="./images/photobooth images/Rectangle 11.png" alt="" />
            </div>

            <div className="w-full">
            <div className="flex ">
            <div>
            <img  className="w-[500px] h-60 my-2" src="./images/photobooth images/Rectangle 4.png" alt="" />
            <img className="w-full  h-60"  src="./images/photobooth images/Rectangle 4.png" alt="" />
            </div>
             <div><img className="w-[500px] h-[426px] mt-2 " src="./images/photobooth images/Rectangle 3.png" alt="" /></div>
           </div>


            <div>
            <img className="w-full " src="./images/photobooth images/Rectangle 10.png" alt="" />
            </div>

            </div>




         
               

             </div>


               <div className="translate-y-[365px] z-50">
                <div className="grid grid-flow-row grid-cols-2">
                
                 <div>
                 <img src="./images/photobooth images/Rectangle 6.png" alt="" />
                 </div>
                 <div></div>
                 <div>
                  <img src="./images/photobooth images/Rectangle 9.png" alt="" />
                 </div>
                 <div>
                 <img className="z-50" src="./images/photobooth images/Rectangle 7.png" alt="" />
                 </div>
                </div>
              </div>

           </div>


        </div>
        </div>
    )
}
