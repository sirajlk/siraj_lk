import React from "react";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaPinterestP, FaBehance } from "react-icons/fa";

 const  Footer =() => {
  return (
    <div  className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Top Right Circle Pattern */}
      <div className="absolute top-80 right-5 md:top-32 md:right-96 w-24 h-24 md:w-44 md:h-44 rounded-full overflow-hidden">
        <div className="w-full h-full bg-[repeating-linear-gradient(135deg,_#444_0,_#444_2px,_transparent_3px,_transparent_10px)]"></div>
      </div>

      {/* Bottom Left Faded Circle */}
      <div className="absolute -bottom-44 -left-64 w-[600px] h-[600px]  rounded-full border border-primary" />

      {/* Content */}
      <div className="text-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold">Let's work together.</h1>
        <p className="mt-4 text-gray-400 text-sm md:text-base">
          I'm available for freelance work.
        </p>

        <button className="mt-10 px-6 py-3 relative  rounded-full font-medium hover:bg-[#202020] transition flex items-center gap-1 mx-auto">
          <span className="bg-[#202020] inset-x-2 -z-10 absolute w-9 h-9 rounded-full"></span>
          SAY HELLO <span className="text-primary">→</span>
        </button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-6 flex flex-col md:flex-row items-center justify-center w-full px-6 text-gray-500 text-xs md:text-sm">
        <span className="mb-2 md:mb-0">© SIRAJ LK 2025</span> 
        <div className=" flex h-3 border mx-3  border-gray-500" />

        <div className="flex items-center space-x-4 text-white">
          <FaFacebookF className="hover:text-primary cursor-pointer" />
          <FaInstagram className="hover:text-primary cursor-pointer" />
          <FaPinterestP className="hover:text-primary cursor-pointer" />
          <FaLinkedinIn className="hover:text-primary cursor-pointer" />
          <FaBehance className="hover:text-primary cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default Footer