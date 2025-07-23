import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen bg-brown-900 text-white px-6 lg:px-16 pt-24">
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-bold">Food Hub</h1>
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-500 mt-4">Grill & Chill</h2>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
          Welcome to Food Hub — a haven for food lovers! Enjoy a fusion of fresh flavors, crafted with the finest ingredients. From juicy burgers to hearty meals, 
          we've got something for everyone. Your next delicious adventure starts here!
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
        <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[32rem] lg:h-[32rem]">
          <Image 
            src="/images/french-fries.png" 
            alt="Burger" 
            fill 
            className="object-contain"
            priority 
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
