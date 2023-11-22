import React from "react";

import edu from "../../assets/edu.svg";
import occasion from "../../assets/occasion.svg";
import { AiOutlineTeam } from "react-icons/ai";

const Message = () => {
    return (
        <div className='bg-[#070624] '>
               <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                    
               
                 
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
    );
};

export default Message;
