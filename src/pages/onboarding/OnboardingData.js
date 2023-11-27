import React from "react";
import sideimage from "../../assets/sideimage.svg";
import sideimage2 from "../../assets/sideimage2.svg";
import { OnboardingParent, OnboardingWrapper } from "./onboarding.styles";
import {Link} from "react-router-dom";

const OnboardingData = () => {
  

    return (
        <OnboardingParent>
            <OnboardingWrapper>
        <main className="bg-[#070624] w-screen">
            <h1 className="text-[30px] md:text-[34px] font-bold capitalize  text-white mx-80 mt-20 px-8">
                Transforming Finance with ThriftChain:{" "}
            </h1>
            <h2 className="text-[30px] md:text-[32px] font-bold capitalize text-white  mx-96 px-8">
                Your Path to <span className="text-[#BD5FB8]">Financial Freedom.</span>
            </h2>
            <div class="grid grid-cols-3 gap-4 mx-48 mt-8">
                <img src={sideimage} alt="sideimage" />
                <div className="border-2 border-white bg-[#070624] rounded-lg mb-6 sm:mb-0 w-[340px] h-[450px]">
                    <h2 className="text-white text-xl  text-center font-bold leading-loose">
                        Let's get to know you
                    </h2>
                    <h3 className="text-white text-sm  text-center font-normal">
                        Add a little detail about yourself
                    </h3>
                    <form class="bg-[#070624] shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                                Name
                            </label>
                            <input class="bg-[#B1B7DD] border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="E.g Naomi Roberts"></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Country
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="text" placeholder="Add your country"></input>

                        </div>
                        <div class='mb-1'>
                            <label class="text-sm font-medium text-white block mb-2" for="user_avatar">Picture </label>
                            <input class="block w-full cursor-pointer bg-[#B1B7DD] border-[#B1B7DD] border-solid border-2  text-[#0A134C] focus:outline-none focus:border-black  text-sm rounded-lg" aria-describedby="file_upload" id="file_upload" type="file" placeholder='Add a picture' />
                        </div>
                        <div class="flex items-center justify-between mt-6 mx-24">
                           <Link to='/user'><button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                                Submit
                            </button></Link> 
                        </div>
                    </form>
                    <h3 className="text-white text-sm  text-center font-normal">Don’t have an account yet? <span className="text-[#BD5FB8]">Get started</span></h3>
                </div>
                <img src={sideimage2} alt="sideimage2" style={{ marginLeft: "5rem" }} />
            </div>
            <div className="grid grid-cols-4 gap-4 mx-72 mb-3 mt-2">
                <div className="border-2 bg-[#060E37] rounded-lg mb-6 sm:mb-0 w-[250px] h-[70px] gap-4">
                    <p className=" text-white text-left text-md font-normal leading-relaxed mx-1">
                        ThriftChain is Secure, Transparent,
                        <br></br>and Efficient
                    </p>
                </div>
                <div className="border-2 bg-[#060E37] rounded-lg mb-6 sm:mb-0 w-[250px] h-[70px] gap-4 mx-96 ">
                    <p className=" text-white text-left text-md font-normal leading-relaxed mx-1">
                        ThriftChain is the Future of
                        <br></br>Financial Planning
                    </p>
                </div>
            </div>
            <hr />
        </main>
        </OnboardingWrapper>
        </OnboardingParent>
    );
};

export default OnboardingData;
