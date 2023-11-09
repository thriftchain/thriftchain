import React from "react";
import {
    UserHomeParent,
    UserHomeWrapper,
    SummaryContainer,
    SummaryContainer2,
    SummaryCard

} from "./userhome.styles";

import dream from "../../assets/dream.svg";
import edu from "../../assets/edu.svg";
import occasion from "../../assets/occasion.svg";
import goal from "../../assets/goal.svg";
import milestone from "../../assets/milestone.svg";
import vacation from "../../assets/vacation.svg";
import school from "../../assets/school.svg";
import purchase from "../../assets/purchase.svg";
import { AiOutlineTeam } from "react-icons/ai";
import {Link} from "react-router-dom";




const UserHome = () => {
    return (
        <UserHomeParent>

            <UserHomeWrapper>
                <h1 className="text-[30px] md:text-[34px] font-bold capitalize  text-white mx-64 mt-4 ">
                    Find a contribution module{" "}
                </h1>
                <h2 className="text-[20px] md:text-[20px] font-bold capitalize text-white  mx-64">
                    Browse and find contribution modules to join</h2>

                <div className='mx-72 mt-4 mb-3'><Link to='/group-module'> <button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-normal py-2 rounded-full border-white border-spacing-1 ">
                    Create a group module    </button></Link>
                   <Link to='/individual-module'> <button class="bg-[#2C2C2C] hover:bg-blue-700 text-white font-normal py-2 rounded-full border-white border-spacing-1 mx-4">
                        Create an individual module    </button></Link>
                </div>


                <SummaryContainer>
                    <SummaryCard>
                        <img src={dream}
                            alt="dream"
                        />
                        <h3>DreamSavers</h3>
                        <p>Save Together for Your Dream
                            <br></br>Event
                           <br></br> <AiOutlineTeam/><span>500k</span>

                        </p>
                    </SummaryCard>
                    <SummaryCard>
                        <img src={edu}
                            alt="edu"
                        />
                        <h3>EduFunders</h3>
                        <p>Group Savings for Education
                            <br></br> related purposes
                            <br></br><AiOutlineTeam/>1.2m

                        </p>
                    </SummaryCard>
                    <SummaryCard>
                        <img src={occasion}
                            alt="occasion"
                        />
                        <h3>OccasionSquad</h3>
                        <p>Group saving for Funding Your
                            <br></br>Special Occasion
                            <br></br><AiOutlineTeam/>201k

                        </p>
                    </SummaryCard>
                    <SummaryCard>
                        <img src={goal}
                            alt="goal"
                        />
                        <h3>GoalAchievers</h3>
                        <p>Let’s Achieve Financial Goals as

                            <br></br>a Team
                            <br></br><AiOutlineTeam/>500k

                        </p>
                    </SummaryCard>
                </SummaryContainer>
                <SummaryContainer2>
                    <SummaryCard>
                        <img src={milestone}
                            alt="milestone"
                        />
                        <h3>MilestoneCollectors</h3>
                        <p>Collective Savings for Your

                            <br></br>Milestone
                            <br></br><AiOutlineTeam/>120k

                        </p>
                    </SummaryCard>
                    <SummaryCard>
                        <img src={vacation}
                            alt="vacation"
                        />
                        <h3>VacationSavers</h3>
                        <p>Collective Savings for Memorable

                            <br></br> Vacations
                            <br></br><AiOutlineTeam/>31m

                        </p>
                    </SummaryCard>
                    <SummaryCard>
                        <img src={school}
                            alt="school"
                        />
                        <h3>SchoolSponsors</h3>
                        <p>Group Contributions for School

                            <br></br>Funds
                            <br></br><AiOutlineTeam/>921k

                        </p>
                    </SummaryCard>
                    <SummaryCard>
                        <img src={purchase}
                            alt="purchase"
                        />
                        <h3>PurchasePartners</h3>
                        <p>Save Together for that Special
                            <br></br>Purchase
                            <br></br><AiOutlineTeam/>30k

                        </p>
                    </SummaryCard>
                </SummaryContainer2>






            </UserHomeWrapper>
        </UserHomeParent >
    );
};

export default UserHome;