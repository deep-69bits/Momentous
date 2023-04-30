// import React from "react";

// export default function SpiralImages() {
//   return (
//     <div
//       className="relative grid grid-rows-3 pt-20 bg-contain bg-center bg-blend-lighten backdrop-opacity-10 backdrop-invert bg-white/80 border border-b-black"
//       style={{
//         backgroundImage:
//           "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh6.googleusercontent.com%2Fproxy%2FMjNpLpC0yaXgqmjGiFvuaj6hSvXe4zR-x5TtZQByZ_Mu6XLAx2ijTMoUZMF4toUSEJs22GsP7zXolEqMBaQIWDbSoyeAuYezFPyi2vW5ND_dLy8DR3kTwb8qjaEZZ0ke%3Dw1200-h630-p-k-no-nu&f=1&nofb=1&ipt=4a30e14aac916d45a57eafe4b348f4d54edcc07ce2482992ae620e365f51be00&ipo=images)"
//       }}
//     >
//       {/* <div className="pt-10 md:text-4xl text-lg text-black md:ml-40 ml-10 font-serif text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolore maiores ea sed. Similique, repudiandae <br/> labore provident illo fugiat quisquam?
//       </div> */}
//       <div className="row-span-2 grid md:grid-cols-5 grid-cols-2 gap-x-8 md:mx-40 mx-4 md:mt-8 md:pb-2">
//         <img
//           src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
//           alt="Image 1"
//           className="w-[80%] transform -rotate-6 mb-10 object-cover"
//         />
        
//         <img
//           src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
//           alt="Image 3"
//           className="w-[80%] transform rotate-6 mb-10 object-cover"
//         />
//         <img
//           src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
//           alt="Image 4"
//           className="w-[80%] transform -rotate-6 mb-10 object-cover"
//         />
//         <img
//           src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
//           alt="Image 5"
//           className="w-[80%] transform rotate-6 mb-10 object-cover"
//         />
//         <img
//           src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
//           alt="Image 2"
//           className="w-[80%] transform -rotate-6 mb-10 object-cover"
//         />
//         </div>
        
//             <p className="text-2xl  text-black text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, doloremque.deserunt.<br/> Sint id necessitatibus, blanditiis repellendus corporis.</p>
        
//       </div>
//   )
// }
        

import React from "react";

export default function SpiralImages() {
  return (
    <div>
    <div className="">
    <h1 className="-z-50 pt-20 opacity-40 fonthead text-7xl lg:text-[200px] text-yellow-600  text-center ">PhotoBooth</h1>
    </div>
    <img src="./Thread.png" className="absolute z-20 top-36" alt="" />
    <div
      className="pt-60 z-20 relative grid grid-rows-2  lg:translate-y-[-240px] translate-y-[-140px] bg-contain bg-center  "
    > 
      <div  >
      <div className="row-span-2 grid md:grid-cols-5 grid-cols-2 gap-x-8 md:mx-10 mx-4 md:mt-8 md:pb-2">

      <div className="translate-y-[-30px]">
      <img src="./clip.png" className="absolute translate-y-[-40px] rotate-[320deg] translate-x-40 z-50 h-24 " alt="" />
      <img
      src="./images/photobooth images/img2.png"
      alt="Image 1"
      className="w-full z-40 md:w-[100%] transform md:-rotate-6 mb-10 object-cover rounded-2xl"
      />
      </div>
        
      <div className="lg:translate-x-8 translate-x-0">
      <img src="./clip.png" className="absolute translate-y-[-40px] rotate-[360deg] sm:translate-x-2 lg:translate-x-16 z-50 h-24 " alt="" />
      <img
      src="./images/photobooth images/img1.png"
      alt="Image 3"
      className="w-full z-40 md:w-[100%] transform md:rotate-6 mb-10 object-cover rounded-2xl"
      />
      </div>

        <div className="translate-y-10">
      <img src="./clip.png" className="absolute translate-y-[-40px] rotate-[360deg] lg:translate-x-52 translate-x-0 z-50 h-24 " alt="" />

        <img
        src="./images/photobooth images/img4.png"
        alt="Image 4"
        className="w-full z-40 md:w-[100%] transform md:-rotate-6 mb-10 object-cover rounded-2xl"
        />
        </div>

        <div>
      <img src="./clip.png" className="absolute translate-y-[-50px] rotate-[320deg] lg:translate-x-28 translate-x-0 z-50 h-24 " alt="" />

        <img
        src="./images/photobooth images/img5.png"
        alt="Image 4"
        className="w-full z-40 md:w-[100%] transform md:rotate-6 mb-10 object-cover rounded-2xl"
        />
        </div>

        <div>
      <img src="./clip.png" className="absolute hidden lg:block translate-y-[-30px] rotate-[360deg] translate-x-0 z-50 h-24 " alt="" />

        <img
        src="./images/photobooth images/img3.png"
        alt="Image 4"
        className="w-0 md:w-[100%] z-40 transform md:-rotate-6 mb-10 object-cover rounded-2xl"
        />
        </div>


        </div>

        </div >
        <p className="paratext  translate-y-20 text-black text-center pb-10">
        Enjoy the most cherishable moments of the events that are <br /> hand-curated and arranged in a picture gallery.
        </p>
        </div>
        </div>
  )
}


