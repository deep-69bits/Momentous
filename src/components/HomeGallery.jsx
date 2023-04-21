import React from 'react'

const HomeGallery = () => {
  return (
    <div>
      <div className='lg:px-10 px-0 py-20'>
      <h1 className='font-light text-6xl text-[#0404c2] fonthead' >The Gallery</h1>
       <h2 className='mt-5'>Enjoy the most cherishable moments of the event that are  <br /> hand-curated and arranged in a picture gallery. </h2>
       <div className='grid grid-flow-row lg:grid-cols-2 grid-cols-1 my-5 w-full '>
         <div className='lg:mr-5 mr-0'>
           <img  src="./images/homepage1 images/Rectangle 1.png" alt="" className='my-2 ' />
            <div className='grid grid-flow-row grid-cols-2 my-2'>
             <img src="./images/homepage1 images/Rectangle 5.png" className='' alt="" />
             <img src="./images/homepage1 images/Rectangle 6.png" className='' alt="" />
            </div>
            <div className='grid grid-flow-row grid-cols-2 my-3'>
            <img src="./images/homepage1 images/Rectangle 7.png" className='' alt="" />
            <img src="./images/homepage1 images/Rectangle 9.png" className='' alt="" />
           </div>
         </div>

         <div>
         <div className='grid grid-flow-row grid-cols-2 '>
         <img src="./images/homepage1 images/Rectangle 3.png" className='w-full h-[93%] my-2 ' alt="" />
         <div className='w-full h-[93%] my-2 '>
         <img src="./images/homepage1 images/Rectangle 4.png" alt="" className='h-1/2' />
         <img src="./images/homepage1 images/Rectangle 8.png" alt="" className='h-1/2' />
         </div>
         </div>
         <img src="./images/homepage1 images/Rectangle 10.png"  className='mt-[-23px]' alt="" />
         </div>
       </div>
      </div>
    </div>
  )
}

export default HomeGallery