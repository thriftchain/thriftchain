import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <main className="bg-[#070624] w-screen">
      <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">
      
        <h1 className="text-[60px] md:text-[40px] font-bold capitalize  text-[#BD5FB8] md:mx-60 md:px-8 md:mt-10 sm:mx-4">
          Your contribution to financial{" "}
        </h1>
        <h2 className="text-[60px] md:text-[40px] font-bold capitalize text-[#BD5FB8]  md:mx-96 md:px-4 sm:mx-8">
          independence
        </h2>
        <h3 className="text-[20px] md:text-[20px] font-light capitalize text-white  md:mx-80 sm:mx-6">
          Unlock Savings, Achieve Dreams, Secure Tomorrow
        </h3>
        <div class="md:mx-96 md:px-8 md:mt-4 sm:mx-12">
          <Link>
            <button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-semibold py-2 rounded-full border-white border-2 w-48 h-20">
              Join the Waitlist{" "}
            </button>{" "}
          </Link>
        </div>
        
      </div>
    </main>
  );
};

export default Hero;
