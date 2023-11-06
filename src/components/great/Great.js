import React from "react"
import { Header, GreatParent, GreatWrapper, SummaryCard, SummaryContainer } from "./great.styles";

const Great = () => {




    return (
        <GreatParent>
            <GreatWrapper>

               <Header> <h2>ThriftChain is great for: </h2></Header>
                <SummaryContainer>





                    <SummaryCard>
                        <h3>Individual Savers</h3>
                        <p  style={{marginBottom:'2rem'}}>Individuals looking to save for specific goals and 
                            <br></br>earn interest on their savings.
                        </p>




                    </SummaryCard>


                    <SummaryCard>
                        <h3>Group Savers</h3>
                        <p>Communities, organizations, or friends with 
                            <br></br>shared financial objectives, such as purchasing 
                            <br></br>assets collectively or achieving specific targets
                        </p>
                    </SummaryCard>

                    <SummaryCard>
                        <h3>Asset Managers</h3>
                        <p  style={{marginBottom:'2rem'}}> Professionals responsible for overseeing and 
                            <br></br>managing diverse assets within the platform.
                        </p>
                     </SummaryCard>


                </SummaryContainer>
               
            </GreatWrapper>
        </GreatParent>








    )



}


export default Great;