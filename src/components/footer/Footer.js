import React from "react";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="px-[30px] md:px-[100px] py-[60px]
    bg-[#060E37] grid grid-cols-1 md:flex md:flex-row gap-4">
      <div className="md:flex flex-wrap md:flex-row justify-between w-full">
      <div className="md:w-[519px] pb-[60px] md:h-[88px] my-[40px]  md:mt-[20px]">
          <div className="flex flex-row items-center gap-4">
            <img src={logo} alt='logo'/>
           
          </div>
          
          <p className="text-opacity-90 py-[15px] text-white text-[10px] md:text-[18px]/[26px] font-normal">
          Unlocking Financial Futures, One Goal at a Time
          </p>
          
        </div>
        <div className="md:flex justify-center items-start md:gap-[100px]">
          <div className="flex flex-row gap-[100px]">
            <div className="pt-[20px] sm:pt-0 flex flex-col gap-12">
              <p className="text-gray-50 text-[15px] md:text-[20px] font-semibold"><Link>About us </Link></p>
              
    
            </div>

            <div className="pt-[20px] sm:pt-0 flex flex-col gap-12">
              <p className="text-gray-50 text-[15px] md:text-[20px] font-semibold">Join our family</p>
              
              
            </div>
          </div>

          <div className="pt-[20px] sm:pt-0 flex flex-col gap-12">
            <p className="text-gray-50 text-[15px] md:text-[20px] font-semibold">FAQs</p>
            
          </div>
          <div className="pt-[20px] sm:pt-0 flex flex-col gap-12">
            <p className="text-gray-50 text-[15px] md:text-[20px] font-semibold">Gallery n contact</p>
            
          </div>

          <div className="pt-[20px] sm:pt-0 flex flex-col gap-12">
            <p className="text-gray-50 text-[15px] md:text-[20px] font-semibold">Reports</p>
            
          </div>
          
        </div>
        <div className="pt-[20px] sm:pt-0 flex flex-col gap-7 mt-2">
            <p className="text-gray-50 text-[15px] md:text-[20px] font-semibold">Copyright 2023 -ThriftChain. All rights reserved.</p>
            
          </div>
      </div>
    </div>
  );
}
export default Footer;