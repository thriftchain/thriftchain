import React from "react";

import edu from "../../assets/edu.svg";
import occasion from "../../assets/occasion.svg";
import { AiOutlineTeam } from "react-icons/ai";

const UserOverview = () => {
    return (
        <div className='bg-[#070624] '>
            <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                <h1 className="text-[30px] md:text-[34px] font-bold capitalize  text-white mx-24 mt-10">
                    Transforming Finance with ThriftChain:{" "}
                </h1>
                <h2 className="text-[30px] md:text-[32px] font-bold capitalize text-white  mx-28 px-8">
                    Your Path to <span className="text-[#BD5FB8]">Financial Freedom.</span>
                </h2>
                <div className='mx-48 mt-4 mb-3'> <button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-normal py-2 rounded-full border-white border-spacing-1 ">
                    View your group module   </button>
                    <button class="bg-[#2C2C2C] hover:bg-blue-700 text-white font-normal py-2 rounded-full border-white border-spacing-1 mx-4">
                        View your individual module   </button>


                    <div className='bg-[#070624] grid-cols-4 gap-4 md:flex md:flex-row'>


                        <div
                            class="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
                            <img
                                src={edu}
                                alt="edu"
                                className="object-fit-object w-full object-center rounded"
                            />
                            <div className="w-full h-1/2  shadow-md mx-2">
                                <h3 className="font-bold text-white text-base">
                                    EduFunders
                                </h3>
                                <p className="font-normal text-justify text-white text-xs">
                                    Group Savings for Education
                                    <br></br> related purposes
                                    <br></br><AiOutlineTeam />1.2m
                                </p>


                            </div>


                        </div>
                        <div
                            class="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
                            <img
                                src={occasion}
                                alt="occasion"
                                className="object-fit-object h-2/3 w-full object-center rounded"
                            />
                            <div className="w-full h-1/2 shadow-md mx-2 object-contain">
                                <h3 className="font-bold text-white text-base">
                                    OccasionSquad
                                </h3>
                                <p className="font-normal text-justify text-white text-xs">
                                    Group saving for Funding Your
                                    <br></br>Special Occasion
                                    <br></br><AiOutlineTeam />201k
                                </p>

                            </div>

                        </div>




                    </div>
                </div>

            </div>

        </div>
    );
};

export default UserOverview;
