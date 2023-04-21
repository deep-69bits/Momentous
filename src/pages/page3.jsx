import React,{useState} from 'react'
import Header from '../components/Header'
import AboutUs from '../components/AboutUs'
import HomeGallery from '../components/HomeGallery'
import Footer from '../components/Footer'
import Video from '../components/Video'
import Whatsapp from '../components/Whatsapp'
import { Hearts } from 'react-loader-spinner'
import { motion } from "framer-motion";

const page3 = () => {
 
    
  return ( 
    <motion.div
    className=""
    initial={{ opacity: 0, x: "-1000px" }}
    animate={{ opacity: 1, x: "0px" }}
    exit={{ opacity: 1, x: "1000px"}}
    transition={{ duration: 0.5 }}
    >
   
     
    <div className='z-40'>
    <Whatsapp/>
    </div>

      <div className='z-10'>
      <Header/>
      
      <Video/>
      <section id='gallery'>
      <HomeGallery/>
      </section>
      <section id='about'>
      <AboutUs/>
      </section>
      <div className='bg-pink-500'>
      <Footer />
      </div>
      </div>
    </motion.div>
  )
}

export default page3