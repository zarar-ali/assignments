import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  return (
    <div className="bg-[rgb(37,7,7)] w-full min-h-screen flex flex-col items-center pt-20 mb-20 border-t-2 border-gray-300/50">
      <h1 className="text-5xl font-bold text-yellow-500 mb-14 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {[
          { src: "/images/nachos.jpg", alt: "nachos", title: "Nachos" },
          { src: "/images/chicken-nugts.jpg", alt: "chicken-nugts", title: "Chicken Nuggets" },
          { src: "/images/grilled-cheese.jpg", alt: "grilled-cheese", title: "Grilled Cheese" },
          { src: "/images/shwarma.webp", alt: "shwarma", title: "Shawarma" },
          { src: "/images/popcorn-chicken.avif", alt: "popcorn", title: "Popcorn Chicken" },
          { src: "/images/quesadilla.jpg", alt: "quesdaille", title: "Quesadilla" },
          { src: "/images/falafel.avif", alt: "falafel", title: "Falafel" },
          { src: "/images/garlic-bread.jpg", alt: "garlic-bread", title: "Garlic Bread" },
        ].map((item, index) => (
          <div
            key={index}
            className="p-4 bg-[rgb(37,7,7)] rounded-xl transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            <div className="relative h-64 w-[16rem] lg:h-72 lg:w-[18rem] rounded-xl overflow-hidden">
              <Image
                className="object-cover"
                src={item.src}
                alt={item.alt}
                fill
                priority
              />
            </div>
            <div className="p-2">
              <h2 className="font-bold text-lg mb-2 text-white text-center">{item.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
