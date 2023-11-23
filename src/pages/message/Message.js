import React from "react";
import { Link } from "react-router-dom";
import general from "../../assets/general.svg";
import { AiOutlineTeam } from "react-icons/ai";




const Message = () => {
    return (
        <div className='bg-[#070624] '>
            <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                <div class="grid grid-cols-2 divide-x h-full">
                    <div class='bg-[#060E37]'>
                        <h2 className="text-[30px] md:text-[32px] font-bold capitalize text-[#BD5FB8]  mx-4">
                            DreamSavers
                        </h2>
                        <div className='mx-4'><Link to='/group-overview'> <button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-normal py-2 rounded-full border-white border-spacing-1 ">
                            Group overview    </button></Link>
                            <Link to='/'> <button class="bg-[#2C2C2C] hover:bg-blue-700 text-white font-normal py-2 rounded-full border-white border-spacing-1 mx-4">
                                Exit group    </button></Link>
                        </div>
                        <h2 className="text-[20px] md:text-[20px] font-bold capitalize text-[#BD5FB8]  mx-4 mt-6">
                            Rooms
                        </h2>
                        <div
                            class="mx-3 mt-6 flex flex-col rounded-lg bg-white sm:shrink-0 sm:grow sm:basis-0 border-white border-2 w-1/2 h-1/2">
                            <img
                                src={general}
                                alt="general"
                                class='object-center w-1/4 rounded-t-lg justify-center mx-24'
                            />

                            <div className="w-full h-1/2 mx-16">
                                <h3 className="font-bold text-black text-base">
                                    General channel
                                </h3>
                                <div class='mx-4 grid-flow-row'> <p className="font-normal  text-black text-xs ">
                                    <AiOutlineTeam />500k

                                </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class='bg-[#070624]'>
                        <div class='bg-[#060E37]'>
                            <h2 className="text-[30px] md:text-[32px] font-bold capitalize text-[#BD5FB8]  mx-4">
                                Overview <span className="text-white mx-10">Assets.</span>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default Message;
