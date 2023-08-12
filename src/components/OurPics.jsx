import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import '../gallery.css'

const OurPics = () => {
    return (
        <div>
            <Header />

            <div class="gallery">
                <div class="column">
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 6.png'}
                    />

                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 8.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 7.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/photobooth images/Rectangle 10.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/photobooth images/img2.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 8.png'}
                    />

                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 7.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 6.png'}
                    />

                </div>
                <div class="column">
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 3.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 9.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/save the date images/rsvp.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/photobooth images/Rectangle 8.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/photobooth images/img5.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 9.png'}
                    />
                </div>
                <div class="column">
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/photobooth images/Rectangle 8.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/about us img.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/photobooth images/Rectangle 6.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/save the date images/Rectangle 67.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/save the date images/Rectangle 3.png'}
                    />
                </div>
                <div class="column">
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/homepage1 images/Rectangle 5.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'./images/photobooth images/Rectangle 9.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/photobooth images/img3.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/save the date images/Rectangle 2.png'}
                    />
                    <LazyLoadImage
                        alt={"Image"}
                        src={'../images/save the date images/Rectangle 66.png'}
                    />


                </div>
            </div>





            <div className='bg-pink-500'>
                <Footer />
            </div>
        </div>
    )
}

export default OurPics
