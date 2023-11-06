import React from "react";
import reduced from "../../assets/reduced.svg";
import decentralized from "../../assets/decentralized.svg";
import crypto from "../../assets/crypto.svg";
import { KeyParent, KeyWrapper, SummaryCard,SummaryContainer2 } from "./key.styles";

const KeyF = () => {




    return (
        <KeyParent>
            <KeyWrapper>

               
                <SummaryContainer2>




                    <SummaryCard>
                        <h3>
                            Reduced Intermediaries
                        </h3>
                        <p>
                            By using blockchain technology, ThriftChain
                            <br></br>reduces the need for traditional intermediaries in
                            <br></br>financial transactions. This not only streamlines
                            <br></br>the process but also minimizes associated fees,
                            <br></br>making savings and contributions more cost-
                            <br></br>effective for users.
                        </p>



                        <img src={reduced}
                            alt="reduced"
                            style={{marginTop:'2rem'}}
                           />

                    </SummaryCard>



                    <SummaryCard>
                        <h3>
                            Decentralized Verification
                        </h3>
                        <p>
                            Blockchain technology operates on a decentralized
                            <br></br>network of nodes, which means that financial
                            <br></br>activities on ThriftChain are verified and recorded
                            <br></br>across a distributed network. This decentralized
                            <br></br>nature enhances security, as it reduces the risk of a
                            <br></br>single point of failure and minimizes the potential
                            <br></br>for fraud or tampering with financial data.
                        </p>



                        <img src={decentralized}
                            alt="decentralized"
                             />


                    </SummaryCard>



                    <SummaryCard>
                        <h3>
                            Cryptocurrency Compatibility
                        </h3>
                        <p>
                            ThriftChain's blockchain integration allows users
                            <br></br>to contribute in cryptocurrencies, including stable
                            <br></br>coins like USDT or USDC. This compatibility with a
                            <br></br>variety of cryptocurrencies ensures flexibility and
                            <br></br>accessibility for users who prefer different digital
                            <br></br>assets for their savings and contributions.
                        </p>



                        <img src={crypto}
                            alt="crypto"
                            style={{marginTop:'2rem'}}
                           />

                    </SummaryCard>






                </SummaryContainer2>
            </KeyWrapper>
        </KeyParent>








    )



}


export default KeyF;