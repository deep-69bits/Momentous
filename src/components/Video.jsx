import React from 'react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from 'react-scroll'
import { Autoplay, Pagination, Navigation } from "swiper";
const Video = () => {
  return (
    <div >
      <div className='-z-30 '>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}

          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper  -z-20"
        >
          <SwiperSlide>
            <video className='m-auto w-full lg:h-[700px]   sm:w-full lg:mt-20 mt-0' muted autoPlay loop src="https://static.videezy.com/system/resources/previews/000/004/893/original/Wedding_6_-_Slideshow.mp4"></video>
          </SwiperSlide>
          <SwiperSlide>
            <video className='m-auto w-full lg:h-[700px]   sm:w-full lg:mt-20 mt-0' muted autoPlay loop src="https://static.videezy.com/system/resources/previews/000/004/893/original/Wedding_6_-_Slideshow.mp4"></video>
          </SwiperSlide>
          <SwiperSlide>
            <video className='m-auto w-full lg:h-[700px]   sm:w-full lg:mt-20 mt-0' muted autoPlay loop src="https://static.videezy.com/system/resources/previews/000/004/893/original/Wedding_6_-_Slideshow.mp4"></video>
          </SwiperSlide>

        </Swiper>
      </div>
      <div className='text-center   flex z-40  justify-center items-center'>
        <button className='transition-all animate-bounce z-50 duration-500 hover:scale-125 text-4xl rounded-full m-auto  h-14 w-14 translate-y-[-10px] bg-pink-500 text-white'> <Link to="about" spy={true} smooth={true} offset={50} duration={500}>	&darr; </Link> </button>
      </div>
    </div>
  )
}

export default Video