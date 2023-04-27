import React from "react";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header2 from "../components/Header2";
import PhotoGallery from "../components/PhotoGallery";
import Pricing from "../components/Pricing";
import FeedbackSlider from "../components/Slider";
import SpiralImages from "../components/SpiralImages";

function Page2() {
  console.log(11);
    return (
      <>
      <Header2/>
      <SpiralImages/>
      <Pricing/>
      <section id='gallery'>
      <PhotoGallery/>
      </section>
      <section id='about'>
      <FeedbackSlider/> 
      </section>
      <div className="bg-yellow-500">
      <Footer/>
      </div>
      </>
    );
  }
  
  export default Page2;