import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination,Navigation } from "swiper";

const FeedbackSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const feedbacks = [
     {
      title:'"Really liked the service of the photobooth!"',
      Desc:"The service is the best. We've movedall of our meetings to this new platform nad it's made them all better and effcient",
      name:"Adam Smith",
      image:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      work:"Web Designer at Spotify"
     },
     {
      title:'"Really liked the service of the photobooth!"',
      Desc:"The service is the best. We've movedall of our meetings to this new platform nad it's made them all better and effcient",
      name:"Adam Smith",
      image:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      work:"Web Designer at Spotify"
     }, {
      title:'"Really liked the service of the photobooth!"',
      Desc:"The service is the best. We've movedall of our meetings to this new platform nad it's made them all better and effcient",
      name:"Adam Smith",
      image:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      work:"Web Designer at Spotify"
     }, {
      title:'"Really liked the service of the photobooth!"',
      Desc:"The service is the best. We've movedall of our meetings to this new platform nad it's made them all better and effcient",
      name:"Adam Smith",
      image:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      work:"Web Designer at Spotify"
     }, {
      title:'"Really liked the service of the photobooth!"',
      Desc:"The service is the best. We've movedall of our meetings to this new platform nad it's made them all better and effcient",
      name:"Adam Smith",
      image:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      work:"Web Designer at Spotify"
     }, {
      title:'"Really liked the service of the photobooth!"',
      Desc:"The service is the best. We've movedall of our meetings to this new platform nad it's made them all better and effcient",
      name:"Adam Smith",
      image:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      work:"Web Designer at Spotify"
     }, {
      title:'"Really liked the service of the photobooth!"',
      Desc:"The service is the best. We've movedall of our meetings to this new platform nad it's made them all better and effcient",
      name:"Adam Smith",
      image:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      work:"Web Designer at Spotify"
     }, {
      title:'"Really liked the service of the photobooth!"',
      Desc:"The service is the best. We've movedall of our meetings to this new platform nad it's made them all better and effcient",
      name:"Adam Smith",
      image:"https://www.rd.com/wp-content/uploads/2017/09/01-shutterstock_476340928-Irina-Bg.jpg?fit=640,427",
      work:"Web Designer at Spotify"
     },
  ];

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + feedbacks.length) % feedbacks.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % feedbacks.length);
  };

  return (
    <div className="py-32 px-10 ">
    <h1 className='px-10 font-light  text-sky-800  fonthead text-6xl ' >About Us</h1>
    <h3 className='px-10 paratext' >Checkout the valuable feedbacks and reviwes by our customer</h3>
     <div className="my-16 hidden lg:block">
     <img src="./images/photobooth images/photobooth2.png"
      className="absolute h-[713px] w-[500px] translate-y-[-244px] -z-30 right-0"   alt="" />
     <Swiper
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
    freeMode={true}
    navigation={true}
   
    modules={[FreeMode, Pagination, Navigation]}
    className="mySwiper"
  >
    {
      feedbacks.map((item,index)=>{
        return(
          <SwiperSlide>
             <div className="py-7 px-10 rounded-lg border-[3px] bg-gray-100 ">
              <h1 className="text-yellow-700 py-2 text-xl  ">{item.title}</h1>
              <h2 className="py-2 text-[15px] ">{item.Desc}</h2>

               <div className="flex my-10 mx-3">
                <div> 
                <img src={item.image} className="rounded-full w-14 h-14" alt="" />
                </div>
                <div>
                 <h2 className=" px-4 text-md">{item.name}</h2>
                 <h2 className="px-4 text-sm">{item.work}</h2>
                </div>
               </div>
             </div>
          </SwiperSlide>
        )
      })
    }
   
  </Swiper>
  </div>
  <div className="my-16 block lg:hidden ">
     <Swiper
    slidesPerView={1}
    spaceBetween={30}
    loop={true}
    freeMode={true}
    navigation={true}
   
    modules={[FreeMode, Pagination, Navigation]}
    className="mySwiper"
  >
    {
      feedbacks.map((item,index)=>{
        return(
          <SwiperSlide>
             <div className="py-7 px-10 rounded-lg border-[3px] bg-gray-100 ">
              <h1 className="text-yellow-700 py-2 text-xl  ">{item.title}</h1>
              <h2 className="py-2 text-[15px] ">{item.Desc}</h2>

               <div className="flex my-10 mx-3">
                <div> 
                <img src={item.image} className="rounded-full w-14 h-14" alt="" />
                </div>
                <div>
                 <h2 className=" px-4 text-md">{item.name}</h2>
                 <h2 className="px-4 text-sm">{item.work}</h2>
                </div>
               </div>
             </div>
          </SwiperSlide>
        )
      })
    }
   
  </Swiper>
  </div>
    </div>
  );
};

export default FeedbackSlider;
