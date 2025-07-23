import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaWhatsapp,
} from "react-icons/fa";

import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-[rgb(37,7,7)] text-white pt-20 border-t-2 border-gray-300/50" id="Contact">
      <h1 className="text-5xl font-bold text-yellow-500 text-center mb-14">Contact</h1>
      <section className="max-w-[1200px] mx-auto">
        <div className=" grid md:grid-cols-3 py-5">
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <Image src="/images/footer-logo.png" alt="food-logo" className="max-w-[50px]" height={50} width={50} priority />
              Food Hub
            </h1>
            <p>
              At Food Hub, we value your feedback and inquiries. Whether you have a question, suggestion, or want to make a reservation,
              we're here to assist you. Feel free to reach out, and our team will get back to you promptly!
            </p>
            <br />
            <div className="flex items-center gap-2">
              <FaLocationArrow className="w-16 h-16 text-red-500" />
              <p>
                Street No, 01, Shop No, 456, Old Navy Gate Hassan Zaheer Shaheed Road Uppar Gizri Near Zamzama Phase 5, Karachi Pakistan
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <IoMdMail />
              <p>FoodHub@gmail.com</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaWhatsapp />
              <p>+92 3010300313</p>
            </div>
            <div className="flex items-center gap-3 mt-6">
              <Link href="https://www.instagram.com/shahid______baloch/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl" />
              </Link>

              <Link href="https://www.facebook.com/shahid.mazari2/" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-3xl" />
              </Link>

              <Link href="https://www.linkedin.com/in/shahid-ali-64676a2ba/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-3xl" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Gallery</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Gallery</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Gallery</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="text-center py-10 border-t-2 border-gray-300/50">
            @Copyright 2024 All Rights Reserved, By Shahid Ali ❤️
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;