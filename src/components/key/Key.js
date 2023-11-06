import React from "react";
import blockchain from "../../assets/blockchain.svg";
import immutable from "../../assets/immutable.svg";
import smart from "../../assets/smart.svg";
import { Header, KeyParent, KeyWrapper, SummaryCard, SummaryContainer } from "./key.styles";

const Key = () => {




    return (
        <KeyParent>
            <KeyWrapper>

               <Header> <h2 >Key Features </h2></Header>
                <SummaryContainer>





                    <SummaryCard>
                        <h3>Blockchain Integration</h3>
                        <p>ThriftChain leverages blockchain technology for
                            <br></br>enhanced security and transparency. Smart
                            <br></br>contracts are used for automated savings and
                            <br></br>contribution management, creating an immutable
                            <br></br>ledger for transaction history and saving activities.
                            <br></br> The use of blockchain ensures that users can trust
                            <br></br>the platform with their financial transactions and
                            <br></br>contributes to the overall reliability and security of
                            <br></br>the service.
                        </p>



                        <img src={blockchain}
                            alt="blockchain"
                             />


                    </SummaryCard>


                    <SummaryCard>
                        <h3>Immutable Ledger</h3>
                        <p>ThriftChain's integration of blockchain technology
                            <br></br>ensures that all transactions, savings activities, and
                            <br></br>contributions are recorded on an immutable
                            <br></br>ledger. This ledger is transparent and can be
                            <br></br>audited by users, providing a high level of trust and
                            <br></br>accountability. Users can verify their financial
                            <br></br>activities, contributing to a secure and transparent
                            <br></br>financial ecosystem.
                        </p>



                        <img src={immutable}
                            alt="immutable"
                            style={{marginTop:'3rem'}}
                             />

                    </SummaryCard>



                    <SummaryCard>
                        <h3>
                            Smart Contract Automation
                        </h3>
                        <p class="mb-3 font-normal text-white dark:text-white">The use of smart contracts in ThriftChain
                            <br></br>automates various aspects of the platform. Smart
                            <br></br>contracts manage individual and group-based
                            <br></br>savings, including the deduction of funds from
                            <br></br>users' wallets, tracking progress, and releasing
                            <br></br>savings upon maturity. This automation reduces
                            <br></br>the need for manual intervention, increasing
                            <br></br>efficiency and reliability in the savings process.
                        </p>



                        <img src={smart}
                            alt="smart"
                            style={{marginTop:'2.5rem'}}
                           />

                    </SummaryCard>


                </SummaryContainer>
               
            </KeyWrapper>
        </KeyParent>








    )



}


export default Key;