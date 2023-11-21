import React from 'react';
import blockchain from "../../assets/blockchain.svg";
import immutable from "../../assets/immutable.svg";
import smart from "../../assets/smart.svg";
import reduced from "../../assets/reduced.svg";
import decentralized from "../../assets/decentralized.svg";
import crypto from "../../assets/crypto.svg";





const Key = () => {


    return (
        <div className='bg-[#070624] '>

            <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                <h2 className="text-white text-3xl pb-[48px] font-bold leading-10">
                    Key Features

                </h2>
                <div className='bg-[#070624] grid-cols-4 gap-4 md:flex md:flex-row'>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                        <div className="w-full h-1/2 shadow-md mx-2">
                            <h3 className="font-bold text-white text-lg">
                                Blockchain Integration
                            </h3>
                            <p className="font-normal text-justify text-white text-sm">
                                ThriftChain leverages blockchain technology for
                                <br></br>enhanced security and transparency. Smart
                                <br></br>contracts are used for automated savings and
                                <br></br>contribution management, creating an immutable
                                <br></br>ledger for transaction history and saving activities.
                                <br></br> The use of blockchain ensures that users can trust
                                <br></br>the platform with their financial transactions and
                                <br></br>contributes to the overall reliability and security of
                                <br></br>the service.


                            </p>

                        </div>
                        <img
                            src={blockchain}
                            alt="blockchain"
                            className="object-fit-object w-full rounded mt-3"
                        />
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                        <div className="w-full h-1/2  shadow-md mx-2">
                            <h3 className="font-bold text-white text-lg">
                                Immutable Ledger
                            </h3>
                            <p className="font-normal text-justify text-white text-sm">
                                ThriftChain's integration of blockchain technology
                                <br></br>ensures that all transactions, savings activities, and
                                <br></br>contributions are recorded on an immutable
                                <br></br>ledger. This ledger is transparent and can be
                                <br></br>audited by users, providing a high level of trust and
                                <br></br>accountability. Users can verify their financial
                                <br></br>activities, contributing to a secure and transparent
                                <br></br>financial ecosystem.


                            </p>


                        </div>
                        <img
                            src={immutable}
                            alt="immutable"
                            className="object-fit-object w-full object-center rounded mt-12"
                        />

                    </div>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
                        <div className="w-full h-1/2 shadow-md mx-2">
                            <h3 className="font-bold text-white text-lg">
                                Smart Contract Automation
                            </h3>
                            <p className="font-normal text-justify text-white text-sm ">
                                The use of smart contracts in ThriftChain
                                <br></br>automates various aspects of the platform. Smart
                                <br></br>contracts manage individual and group-based
                                <br></br>savings, including the deduction of funds from
                                <br></br>users' wallets, tracking progress, and releasing
                                <br></br>savings upon maturity. This automation reduces
                                <br></br>the need for manual intervention, increasing
                                <br></br>efficiency and reliability in the savings process.
                            </p>

                        </div>
                        <img
                            src={smart}
                            alt="smart"
                            className="object-fit-object h-2/3 w-full object-center rounded mt-12"
                        />
                    </div>



                </div>
                <div className='bg-[#070624] grid-cols-4 gap-4 md:flex md:flex-row'>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                        <div className="w-full h-1/2 shadow-md mx-2">
                            <h3 className="font-bold text-white text-lg">
                                Reduced Intermediaries
                            </h3>
                            <p className="font-normal text-justify text-white text-sm">
                                By using blockchain technology, ThriftChain
                                <br></br>reduces the need for traditional intermediaries in
                                <br></br>financial transactions. This not only streamlines
                                <br></br>the process but also minimizes associated fees,
                                <br></br>making savings and contributions more cost-
                                <br></br>effective for users.


                            </p>

                        </div>
                        <img
                            src={reduced}
                            alt="reduced"
                            className="object-fit-object h-2/3 w-full object-center rounded mt-12"
                        />
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                        <div className="w-full h-1/2 shadow-md mx-2">
                            <h3 className="font-bold text-white text-lg">
                                Decentralized Verification
                            </h3>
                            <p className="font-normal text-justify text-white text-sm">
                                Blockchain technology operates on a decentralized
                                <br></br>network of nodes, which means that financial
                                <br></br>activities on ThriftChain are verified and recorded
                                <br></br>across a distributed network. This decentralized
                                <br></br>nature enhances security, as it reduces the risk of a
                                <br></br>single point of failure and minimizes the potential
                                <br></br>for fraud or tampering with financial data.


                            </p>



                        </div>
                        <img
                            src={decentralized}
                            alt="decentralized"
                            className="object-fit-object h-2/3 w-full object-center rounded mt-4"
                        />
                    </div>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-[#070624] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                        <div className="w-full h-1/2 shadow-md mx-2">
                            <h3 className="font-bold text-white text-lg">
                                Cryptocurrency Compatibility
                            </h3>
                            <p className="font-normal text-justify text-white text-sm">
                                ThriftChain's blockchain integration allows users
                                <br></br>to contribute in cryptocurrencies, including stable
                                <br></br>coins like USDT or USDC. This compatibility with a
                                <br></br>variety of cryptocurrencies ensures flexibility and
                                <br></br>accessibility for users who prefer different digital
                                <br></br>assets for their savings and contributions.
                            </p>

                        </div>
                        <img
                            src={crypto}
                            alt="crypto"
                            className="object-fit-object h-2/3 w-full object-center rounded mt-12"
                        />
                    </div>

                </div>

            </div>
        </div>


    )


}


export default Key;




