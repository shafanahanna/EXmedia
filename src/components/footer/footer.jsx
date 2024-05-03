import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BsInstagram, BsTwitter, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaSnapchatSquare } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

function Footer() {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="flex flex-col items-center justify-center bg-gray-200 h-40">
      <div className="flex space-x-2">
        <span className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-2xl" data-aos="fade-right" data-aos-once="true">
          <BsInstagram className="w-8 h-8 hover:text-[#862976]" />
        </span>
        <span className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-2xl" data-aos="fade-up" data-aos-once="true">
          <BsTwitter className="w-8 h-8 hover:text-[#a6c1fb]" />
        </span>
        <span className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-2xl" data-aos="fade-left" data-aos-once="true">
          <BsFacebook className="w-8 h-8 hover:text-[#4c6eb8]" />
        </span>
        <span className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-2xl" data-aos="fade-right" data-aos-once="true">
          <BsYoutube className="w-8 h-8 hover:text-[#c75353]" />
        </span>
        <span className="flex justify-center items-center w-10 h-10 bg-white rounded-full shadow-2xl" data-aos="fade-up" data-aos-once="true">
          <FaSnapchatSquare className="w-8 h-8 hover:text-[#FFFC04]" />
        </span>
      </div>

      <div className="flex items-center p-3" data-aos="fade-up" data-aos-once="true">
        <FaRegCopyright />
        <span className="uppercase font-bold"> Copyright 2023 Exmedia</span>
      </div>
    </div>
  );
}

export default Footer;
