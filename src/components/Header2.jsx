import React, { useState } from 'react';

function Header2() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-[#cd7e0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="hidden md:block">
            <div className="absolute left-8 font text-white font-semibold text-lg">LA</div>
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="/" className=" hover:bg-[#eda412] hover:text-white px-3 py-2 rounded-md  text-white font-semibold text-lg">Home</a>
                <a href="#" className=" hover:bg-[#eda412] hover:text-white px-3 py-2 rounded-md  text-white font-semibold text-lg">Gallery</a>
                <a href="#" className=" hover:bg-[#eda412] hover:text-white px-3 py-2 rounded-md  text-white font-semibold text-lg">About</a>
                <a href="#" className=" hover:bg-[#eda412] hover:text-white px-3 py-2 rounded-md  text-white font-semibold text-lg">Contact</a>
                <button className="hover:bg-[#eda412] border border-white rounded py-1 px-6 absolute right-8  text-white font-semibold text-lg">Check Now</button>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-white font-semibold text-lg hover:text-white hover:bg-[#eda412] " aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className={`${menuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${menuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
    
      <div className={`${menuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/" className="text-white hover:bg-[#eda412] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/gallery" className="text-white hover:bg-[#eda412] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Gallery</a>
          <a href="/about" className="text-white hover:bg-[#eda412] hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
          <a href="/contactUs" className="text-white hover:bg-[#eda412] hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
          <button className="hover:bg-[#eda412] border border-white rounded py-1 px-6  text-white font-semibold text-lg">Check Now</button>
        </div>
    </div>
</nav>
);
}

export default Header2;