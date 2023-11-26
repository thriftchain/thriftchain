import React, { useState } from "react";
import { IndividualModuleParent, IndividualModuleWrapper } from "./individualmodule.styles";
import Checkbox from "../../components/checkbox/Checkbox";
import individualmodule from "../../assets/individualmodule.svg";
import { useContractWrite, usePrepareContractWrite } from 'wagmi';
import abi from "../../contract/thrift.json";


const IndividualModule = () => {
    const [checked, setChecked] = useState(false);
    const onChange = () => {
        setChecked(!checked);
    };

    const { config } = usePrepareContractWrite({
        address: '0x9377C1e6747e9b9541d79B5Dd0eC404597802CBa',
        abi: abi,
        functionName: 'createSingleThrift',
    })
    const { data, isLoading, isSuccess, write } = useContractWrite(config)

    return (
        <IndividualModuleParent>
            <IndividualModuleWrapper>
                <main className="bg-[#070624] w-screen">
                    <figure class="relative  transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 w-full">

                        <img src={individualmodule} alt="individualmodule" />

                        <figcaption class="absolute text-lg text-white bottom-20 mx-96 px-16">
                            <h1 class="text-white font-semibold text-4xl"> Create a individual module </h1>
                            <p>Fill out the form below and start your personal savings.</p>
                        </figcaption>
                    </figure>

                    <form class="bg-[#070624] shadow-md rounded pt-6 pb-8 mb-4 w-1/2 mx-96">
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="username">
                            Name of the module
                            </label>
                            <input class="bg-[#B1B7DD] border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Add a name for your individual saving module"></input>
                        </div>
                        
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="goal">
                                Financial goals
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="goal" type="password" placeholder="Define the the financial goal of your module"></input>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="commencementdate">
                                Commencement date
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="commencementdate" type="date" placeholder="Add the date you want the group commence saving"></input>
                        </div>

                        
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="maturitydate">
                                Maturity date
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="maturitydate" type="date" placeholder="Add a maturity date "></input>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="frequency">
                                Saving Frequency
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-[#B1B7DD] border border-[#B1B7DD] text-[#0A134C] rounded leading-tight focus:outline-none focus:bg--[#B1B7DD] focus:border-[#B1B7DD]" id="frequency">
                                    <option>Click on the arrow to select an option</option>
                                    <option>Daily</option>
                                    <option>Weekly</option>
                                    <option>Bi-weekly</option>
                                    <option>Monthly</option>
                                    <option>Quarterly</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>

                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="targetamount">
                                Target amount
                            </label>
                            <input class="bg-[#B1B7DD] border border-[#B1B7DD] rounded w-full py-2 px-3 text-[#0A134C] mb-3 leading-tight focus:outline-none focus:shadow-outline" id="targetamount" type="amount" placeholder="Specify the amount to be contributed "></input>

                        </div>

                        <div class='mb-1'>
                            <label class="text-sm font-medium text-white block mb-2" for="user_avatar">Display Picture </label>
                            <input class="block w-full cursor-pointer bg-[#B1B7DD] border-[#B1B7DD] border-solid border-2  text-[#0A134C] focus:outline-none focus:border-black  text-sm rounded-lg" aria-describedby="file_upload" id="file_upload" type="file" placeholder='Add a picture' />
                        </div>
                        <div class="mb-1">
                            <label class="block text-white text-sm font-bold mb-2" for="coin">
                                Stable coin option
                            </label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-[#B1B7DD] border border-[#B1B7DD] text-[#0A134C] rounded leading-tight focus:outline-none focus:bg--[#B1B7DD] focus:border-[#B1B7DD]" id="coin">
                                    <option>Click on the arrow to select an option</option>
                                    <option>ToroNGN</option>
                                    <option>ToroUSD</option>
                                    <option>ToroEUR</option>
                                    <option>ToroGBP</option>
                                    <option>ToroEGP</option>
                                    <option>ToroKSH</option>
                                    <option>ToroZAR</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                </div>
                            </div>

                        </div>
                        
                        <div class="mb-1">
                            
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
                            <button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline min-w-full" type="button"
                            onClick={() => write?.()}>
                            Create individual Module
                            </button>
                            {isLoading && <div>Check Wallet</div>}
                            {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
                        </div>
                        <div class="flex items-center justify-between mt-6">
                            <button class="bg-[#2C2C2C] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline min-w-full" type="button">
                                Cancel
                            </button>
                        </div>
                    </form>



                </main>
            </IndividualModuleWrapper>
        </IndividualModuleParent>
    );
};

export default IndividualModule;
