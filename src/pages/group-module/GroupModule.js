import React, { useState } from "react";
import { GroupModuleParent, GroupModuleWrapper } from "./groupmodule.styles";
import Checkbox from "../../components/checkbox/Checkbox";
import groupmodule from "../../assets/groupmodule.svg";


const GroupModule = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    return (
        <GroupModuleParent>
            <GroupModuleWrapper>
                <main className="bg-[#070624] w-screen">
                    <figure class="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full">

                        <img src={groupmodule} alt="groupmodule" />

                        <figcaption class="absolute px-4 text-lg text-white bottom-20 mx-96">
                            <h1 class="text-white font-semibold text-4xl"> Create a group module </h1>
                            <p>Fill out the form below to start a group module saving.</p>
                        </figcaption>
                    </figure>

                    <form class="bg-[#070624] shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 mx-80">
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                                Name of the group
                            </label>
                            <input class="bg-[#B1B7DD] border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add a name for the group"></input>
                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Description  of the group
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="Add a description of the group"></input>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Financial goals
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="Define the objectives of the group"></input>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Commencement date
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="Add the date you want the group commence saving"></input>
                        </div>

                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Deadline for saving
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="Add the date you want the saving to stop"></input>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Maturity date
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="Add the maturity date for funds withdrawal"></input>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Saving Frequency
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="Click on the arrow to select an option"></input>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Target amount based on the saving frequency you have picked
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="Target amount should be the total amount the group aim to reach or contribute"></input>

                        </div>

                        <div class='mb-1'>
                            <label class="text-sm font-medium text-white block mb-2" for="user_avatar">Display Picture </label>
                            <input class="block w-full cursor-pointer bg-[#B1B7DD] border-[#B1B7DD] border-solid border-2  text-[#0A134C] focus:outline-none focus:border-black  text-sm rounded-lg" aria-describedby="file_upload" id="file_upload" type="file" placeholder='Add a picture' />
                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Stable coin option
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="Click on the arrow to select an option"></input>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Number of people required for the group savings
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="How many people are required for this saving"></input>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="country">
                                Visibility option
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="country" type="password" placeholder="Click on the arrow to select an option"></input>
                            <p class="text-[#BD5FB8] text-normal">Please note  that based on the target amount, saving duration and
                                <br></br>frequency, the required amount is deducted from the connected wallet
                                <br></br>the target amount will be deducted automatically from
                                <br></br>the connected wallet based  and upon maturity, the system releases
                                <br></br>the saved amount plus any accrued interest to the selected user’s address </p>

                        </div>
                        <div class='text-white'>
                            <Checkbox
                                id="checkbox"
                                label="I agree to the above term"
                                value={checked}
                                onChange={onChange}
                                fontSize='0.5rem'
                            />
                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline min-w-full" type="button">
                                Create group Module
                            </button>

                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <button class="bg-[#2C2C2C] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline min-w-full" type="button">
                                Cancel
                            </button>
                        </div>
                    </form>



                </main>
            </GroupModuleWrapper>
        </GroupModuleParent>
    );
};

export default GroupModule;
