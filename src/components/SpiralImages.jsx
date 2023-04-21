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
    <div
      className="relative grid grid-rows-2 pt-20 bg-contain bg-center bg-blend-lighten backdrop-opacity-10 backdrop-invert bg-white/80 border border-b-black"
      style={{
        backgroundImage:
          "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flh6.googleusercontent.com%2Fproxy%2FMjNpLpC0yaXgqmjGiFvuaj6hSvXe4zR-x5TtZQByZ_Mu6XLAx2ijTMoUZMF4toUSEJs22GsP7zXolEqMBaQIWDbSoyeAuYezFPyi2vW5ND_dLy8DR3kTwb8qjaEZZ0ke%3Dw1200-h630-p-k-no-nu&f=1&nofb=1&ipt=4a30e14aac916d45a57eafe4b348f4d54edcc07ce2482992ae620e365f51be00&ipo=images)"
      }}
    >
      <div className="row-span-2 grid md:grid-cols-5 grid-cols-2 gap-x-8 md:mx-40 mx-4 md:mt-8 md:pb-2">
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt="Image 1"
          className="w-full md:w-[80%] transform md:-rotate-6 mb-10 object-cover rounded-2xl"
        />
        
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt="Image 3"
          className="w-full md:w-[80%] transform md:rotate-6 mb-10 object-cover rounded-2xl"
        />
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt="Image 4"
          className="w-full md:w-[80%] transform md:-rotate-6 mb-10 object-cover rounded-2xl"
        />
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt="Image 4"
          className="w-full md:w-[80%] transform md:rotate-6 mb-10 object-cover rounded-2xl"
        />
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt="Image 4"
          className="w-0 md:w-[80%] transform md:-rotate-6 mb-10 object-cover rounded-2xl"
        />
        </div>
        <p className="md:text-2xl  text-black text-center pb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, doloremque.deserunt.<br/> Sint id necessitatibus, blanditiis repellendus corporis.</p>
        </div>
  )
}


