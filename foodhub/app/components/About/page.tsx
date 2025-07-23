import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <div className="min-h-screen bg-brown-900 text-white px-6 lg:px-16 pt-24 mb-20 border-t-2 border-gray-300/50">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-yellow-500">About</h1>
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative w-72 h-60 sm:w-96 sm:h-80 lg:w-[29rem] lg:h-[25rem]">
            <Image 
              src="/images/img.png" 
              alt="Food Hub" 
              fill 
              className="object-cover w-full h-full"
              priority 
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6 text-center lg:text-left">
            Let's Talk About <br /> Food Hub
          </h2>
          <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-justify">
            Welcome to Food Hub, where every meal is a blend of fresh ingredients and exceptional care. 
            We believe great food starts with quality and cleanliness, creating a cozy environment for food lovers. 
            From sizzling grills to decadent desserts, each dish is crafted with passion and precision. 
            Our team ensures that every visit is a delightful experience, where satisfaction and flavor come together seamlessly. 
            Come dine with us, and discover why Food Hub is the perfect place for every food lover!
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
