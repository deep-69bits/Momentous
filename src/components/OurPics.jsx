import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import '../gallery.css'

const OurPics = () => {
  return (
    <div>
    <Header/>

    <div class="gallery">
	<div class="column">
        <img  src="../images/homepage1 images/Rectangle 6.png" alt="" />
        <img src="../images/homepage1 images/Rectangle 8.png" alt="" />
        <img  src="../images/homepage1 images/Rectangle 7.png" alt="" />
        <img  src="../images/photobooth images/Rectangle 10.png" alt="" />
        <img src="../images/photobooth images/img2.png" alt="" />
        <img  src="../images/photobooth images/Rectangle 4.png" alt="" />
        <img src="../images/photobooth images/Rectangle 4.png"/> 
        <img  src="../images/homepage1 images/Rectangle 6.png" alt="" />
	</div>
	<div class="column">
		<img src="../images/homepage1 images/Rectangle 3.png"/> 
		<img src="../images/homepage1 images/Rectangle 9.png"/> 
		<img src="../images/save the date images/rsvp.png"/> 
		<img src="../images/photobooth images/Rectangle 8.png"/>  
		<img src="../images/photobooth images/img5.png"/> 
		<img src="../images/homepage1 images/Rectangle 9.png"/> 
		 
	</div>
	<div class="column">
		<img src="../images/photobooth images/Rectangle 8.png"/>  
		<img src="../images/homepage1 images/about us img.png"/> 
		<img src="../images/photobooth images/Rectangle 6.png"/> 
		<img src="../images/save the date images/Rectangle 67.png"/> 
		<img src="../images/save the date images/Rectangle 3.png"/> 
	</div>
	<div class="column">
		<img src="../images/homepage1 images/Rectangle 5.png"/> 
		<img src="../images/photobooth images/Rectangle 9.png"/> 
		<img src="../images/photobooth images/img3.png"/>  
		<img src="../images/save the date images/Rectangle 2.png"/> 
		<img src="../images/save the date images/Rectangle 66.png"/>  
		
	</div>
</div>

   

    
      
    <div className='bg-pink-500'>
    <Footer/>
    </div>
    </div>
  )
}

export default OurPics
