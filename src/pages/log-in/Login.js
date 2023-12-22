import React from "react";
import sideimage from "../../assets/sideimage.svg";
import sideimage2 from "../../assets/sideimage2.svg";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {Link} from "react-router-dom";

const Login = () => {
  

  return (
    
    <main className="bg-[#070624] w-screen">
      <h1 className="text-[30px] md:text-[34px] font-bold capitalize  text-white md:mx-80 md:mt-20 md:px-8 sm:mx-4">
        Transforming Finance with ThriftChain:{" "}
      </h1>
      <h2 className="text-[30px] md:text-[32px] font-bold capitalize text-white md:mx-96 md:px-8 sm:mx-8">
        Your Path to <span className="text-[#BD5FB8]">Financial Freedom.</span>
      </h2>
      <div class="grid grid-cols-3 gap-0 h-max md:mx-4">
      <div className="h-[200px] w-[200px] ">
        <img src={sideimage} alt="sideimage" />
        </div>
        <div className="border-2 border-white bg-[#070624] rounded-lg mb-6 sm:mb-0 w-[340px] h-[300px]">
          <h2 className="text-white text-xl  text-center font-bold leading-loose">
          Log In
          </h2>
          <h3 className="text-white text-sm  text-center font-normal">
          Log in by connecting your wallet
          </h3>
          <div className="mx-24 mb-20 mt-4">
          <ConnectButton />
           <div class='mt-4 mx-6'><Link to='/onboarding-data'><button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-semibold py-2 rounded border-white border-spacing-1" >
            Start Saving    </button></Link>
            </div> 
          </div>
          <h3 className="text-white text-sm  text-center font-normal">Don’t have an account yet? <Link to='/onboarding-data'><span className="text-[#BD5FB8]">Get started</span></Link></h3>
        </div>
        <div className="h-[200px] w-[200px] lg:block hidden">
        <img src={sideimage2} alt="sideimage2"/>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-0 h-max mb-2 md:mx-4">
        <div className="border-2 bg-[#060E37] rounded-lg mb-6 sm:mb-0 w-[250px] h-[70px] gap-4">
          <p className=" text-white text-left text-md font-normal leading-relaxed mx-1">
            ThriftChain is Secure, Transparent,
            <br></br>and Efficient
          </p>
        </div>
        <div class='md:mx-36'>
        <div className="border-2 bg-[#060E37] rounded-lg mb-6 sm:mb-0 w-[250px] h-[70px] gap-4 mx-96 ">
          <p className=" text-white text-left text-md font-normal leading-relaxed mx-1">
            ThriftChain is the Future of
            <br></br>Financial Planning
          </p>
        </div>
        </div>
      </div>
      <hr />
    </main>
   
  );
};

export default Login;
