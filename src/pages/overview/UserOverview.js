import React from "react";
import { OverviewParent, OverviewWrapper, SummaryContainer, SummaryCard } from "./useroverview.styles";
import edu from "../../assets/edu.svg";
import occasion from "../../assets/occasion.svg";
import { AiOutlineTeam } from "react-icons/ai";

const UserOverview = () => {
    return (
        <OverviewParent>
            <OverviewWrapper>
                <main className="bg-[#070624] w-screen">

                    <h1 className="text-[30px] md:text-[34px] font-bold capitalize  text-white mx-36 mt-10 px-8">
                        Transforming Finance with ThriftChain:{" "}
                    </h1>
                    <h2 className="text-[30px] md:text-[32px] font-bold capitalize text-white  mx-40 px-8">
                        Your Path to <span className="text-[#BD5FB8]">Financial Freedom.</span>
                    </h2>
                    <div className='mx-72 mt-4 mb-3'> <button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-normal py-2 rounded-full border-white border-spacing-1 ">
                    View your group module   </button>
                    <button class="bg-[#2C2C2C] hover:bg-blue-700 text-white font-normal py-2 rounded-full border-white border-spacing-1 mx-4">
                    View your individual module   </button>
                </div>
                    <SummaryContainer>
                        <SummaryCard>
                            <img src={edu}
                                alt="edu"
                            />
                            <h3>EduFunders</h3>
                            <p>Group Savings for Education
                                <br></br> related purposes
                                <br></br><AiOutlineTeam />1.2m

                            </p>
                        </SummaryCard>
                        <SummaryCard>
                            <img src={occasion}
                                alt="occasion"
                            />
                            <h3>OccasionSquad</h3>
                            <p>Group saving for Funding Your
                                <br></br>Special Occasion
                                <br></br><AiOutlineTeam />201k

                            </p>
                        </SummaryCard>
                    </SummaryContainer>

                </main>
            </OverviewWrapper>
        </OverviewParent>
    );
};

export default UserOverview;
