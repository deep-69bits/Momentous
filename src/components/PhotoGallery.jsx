import React from "react";
export default function PhotoGallery(){
    return(
        <div className="  pt-20 bg-contain bg-no-repeat bg-cover" 
        style={{
            backgroundImage:
              "url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2Fae%2Fbe%2F72%2Faebe72464627ed97abb511494a5edd88.jpg&f=1&nofb=1&ipt=668ba5f40c7c683d1cb3a0b8cc90cbbfe73c9194c716ba03f4138f1a92a213b3&ipo=images)"
          }}>
            <div className="pt-10 md:text-8xl text-6xl text-sky-800 md:ml-40 ml-10 font-serif mb-20">The Gallery
            <p className="text-xl  text-white pt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, doloremque.deserunt.<br/> Sint id necessitatibus, blanditiis repellendus corporis.</p>
            </div>
            <div class=" grid md:grid-cols-4  md:grid-rows-3 gap-4 pb-20 pl-20 ">
              <div className="hidden md:block"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FHD-images-of-nature-download.jpg&f=1&nofb=1&ipt=136c26d5fbedb4f027af83e5c9b22ec9a7dd22c6cebe682afe2cc3729753ad31&ipo=images" alt="" className="h-40 md:w-full p-2 rounded-2xl  border-white border-4"/></div>
              <div class="col-span-3 hidden md:block"></div>
              <div  className="hidden md:block"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FHD-images-of-nature-download.jpg&f=1&nofb=1&ipt=136c26d5fbedb4f027af83e5c9b22ec9a7dd22c6cebe682afe2cc3729753ad31&ipo=images" alt="" className="h-40  w-full p-2 rounded-2xl  border-white border-4"/></div>
              <div className="hidden md:block"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FHD-images-of-nature-download.jpg&f=1&nofb=1&ipt=136c26d5fbedb4f027af83e5c9b22ec9a7dd22c6cebe682afe2cc3729753ad31&ipo=images" alt="" className="h-40 w-full p-2 rounded-2xl  border-white border-4"/></div>
              <div className="col-span-2 hidden md:block"></div>
              <div className="hidden md:block"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FHD-images-of-nature-download.jpg&f=1&nofb=1&ipt=136c26d5fbedb4f027af83e5c9b22ec9a7dd22c6cebe682afe2cc3729753ad31&ipo=images" alt="" className="h-40  w-full p-2 rounded-2xl  border-white border-4"/></div>
              <div className="hidden md:block"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FHD-images-of-nature-download.jpg&f=1&nofb=1&ipt=136c26d5fbedb4f027af83e5c9b22ec9a7dd22c6cebe682afe2cc3729753ad31&ipo=images" alt="" className="h-40  w-full p-2 rounded-2xl  border-white border-4"/></div>
              <div className="hidden md:block"><img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pixelstalk.net%2Fwp-content%2Fuploads%2F2016%2F06%2FHD-images-of-nature-download.jpg&f=1&nofb=1&ipt=136c26d5fbedb4f027af83e5c9b22ec9a7dd22c6cebe682afe2cc3729753ad31&ipo=images" alt="" className="h-40  w-full p-2 rounded-2xl  border-white border-4"/></div>
            </div>

        </div>
    )
}
