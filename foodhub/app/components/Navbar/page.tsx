'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <div className="w-screen fixed top-0 right-0 z-10">
        <div className="grid grid-cols-2 mx-auto sm:items-center py-4 sm:py-6">
          {/* Left side: Logo and Text */}
          <div className="flex items-center ml-2 sm:ml-10">
            <div className="text-white text-xl sm:text-3xl font-bold font-serif">
              Food Hub
            </div>
            <div className="ml-4">
              <Image className='rounded-full' src="/images/header-logo.png" height={50} width={50} alt="burger" priority />
            </div>
          </div>

          {/* Hamburger Menu for Mobile */}
          <div className="sm:hidden flex items-center mr-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white mb-1"></div>
            <div className="w-6 h-1 bg-white"></div>
          </div>

          {/* Right side: Navbar Links */}
          <div className="hidden sm:flex justify-end gap-2 sm:gap-10 sm:mr-24 font-serif font-bold">
            <Link href="/" className="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">Home</Link>
            <Link href="/#Services" className="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">Services</Link>
            <Link href="/#About" className="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">About</Link>
            <Link href="/#Gallary" className="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">Gallary</Link>
            <Link href="#Contact" className="relative -top-1 -left-1 bg-gray-800 py-2.5 px-5 font-medium uppercase text-white transition-all before:absolute before:top-1 before:left-1 before:-z-[1] before:h-full before:w-full before:border-2 before:border-gray-700 before:transition-all before:content-[''] hover:top-0 hover:left-0 before:hover:top-0 before:hover:left-0">Contact</Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu - When Toggle Button is Clicked */}
      <div className={`sm:hidden ${menuOpen ? 'block' : 'hidden'} bg-gray-800`}>
        <div className="flex flex-col items-center">
          <Link href="/" className="py-2.5 px-5 text-lg font-medium uppercase text-white">
            Home
          </Link>
          <Link href="/#Services" className="py-2.5 px-5 text-lg font-medium uppercase text-white">
            Services
          </Link>
          <Link href="/#About" className="py-2.5 px-5 text-lg font-medium uppercase text-white">
            About
          </Link>
          <Link href="/#Gallary" className="py-2.5 px-5 text-lg font-medium uppercase text-white">
            Gallery
          </Link>
          <Link href="/#Contact" className="py-2.5 px-5 text-lg font-medium uppercase text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
