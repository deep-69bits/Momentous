// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="text-white py-6 bg-[#d07113]">
//       <div className="container mx-auto flex justify-between items-center">
//         <p>© 2023 LA</p>
//         <ul className="flex">
//           <li className="mx-3">About Us</li>
//           <li className="mx-3">Contact Us</li>
//           <li className="mx-3">Privacy Policy</li>
//         </ul>
//       </div>
//       <div className="container mx-auto mt-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           <div>
//             <h3 className="text-lg font-medium mb-2">Contact Us</h3>
//             <p className="text-white mb-2">123 Main St.</p>
//             <p className="text-white mb-2">Anytown, USA 12345</p>
//             <a href="mailto:info@yourcompany.com" className="text-blue-500 hover:underline">info@LA.com</a>
//           </div>
//           <div>
//             <h3 className="text-lg font-medium mb-2">Follow Us</h3>
//             <div className="flex">
//               <a href="#" className="text-white hover:text-gray-200 mr-2">
//                 <i className="fab fa-facebook"></i>
//               </a>
//               <a href="#" className="text-white hover:text-gray-200 mr-2">
//                 <i className="fab fa-twitter"></i>
//               </a>
//               <a href="#" className="text-white hover:text-gray-200">
//                 <i className="fab fa-instagram"></i>
//               </a>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-lg font-medium mb-2">About Us</h3>
//             <p className="text-white mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed dapibus eros. Sed ac est sit amet sapien pulvinar malesuada.</p>
//             <button className="bg-[#ae6205] text-white py-2 px-4 rounded hover:bg-[#ec9326] hover:scale-105" style={{transition:'0.5s'}}>Learn More</button>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (

    <footer className="footer text-white relative pt-1 ">
      <div className="container mx-auto lg:px-56 sm:px-0">

        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-light  text-6xl uppercase mb-2">
              <img className="w-20 h-20 scale-[300%] translate-x-10" src="https://ik.imagekit.io/cmef8hxb6/1_Transparent_Image_VWmbhlojN.png?updatedAt=1681756446542" alt="" />
              </span>
              <span className="my-2"><a href="#" className=" text-md hover:text-blue-500">+1(7635) 547-12-97</a></span>
              <span className="my-2"><a href="#" className="  text-md hover:text-blue-500">support@lift.agency</a></span>
              
            </div>
            <div className="flex flex-col">
            <span className="font-semibold  uppercase mt-4 md:mt-0 mb-2">Quick Links</span>
            <div className="grid grid-flow-row grid-cols-2 gap-y-4 gap-28">
            <span className="my-2"><a href="#" className=" text-md hover:text-blue-500">Home</a></span>
            <span className="my-2"><a href="#" className=" text-md hover:text-blue-500">PhotoBooth</a></span>
            <span className="my-2"><a href="#" className=" text-md hover:text-blue-500"><Link to={'/form'}>Save The Date</Link></a></span>
            <span className="my-2"><a href="#" className=" text-md hover:text-blue-500">Save The Pricing</a></span>  
            </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold uppercase mt-4 md:mt-0 mb-2">Contact Us</span>
              <span className="my-2"><input type="text" placeholder="enter you email" className="text-gray-400 translate-x-1 focus:border-none text-sm py-2 px-3  rounded-l-lg" /> <span className="bg-blue-800 py-2  px-3 rounded-r-lg">&rarr;</span> </span>
              <span></span>
             
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center flex justify-between py-6">
          <p></p>
          <p className="text-sm text-white font-bold mb-2">A product of Company </p>
            <p className="text-sm text-white font-bold mb-2">
              © 2020 by Pavlove BIOKOU
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
