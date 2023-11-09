import styled from "styled-components";


export const UserParent = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background:#070624;
`;

export const UserWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background:#070624;
`;



export const UpperContainer = styled.section`
  width: 97%;
  height: 40vh;
  
  border-radius: 12px;
  margin-top: 1rem;
  margin-left:1rem;


  & h1{
    font-weight:700;
    line-height:1.5rem;
    font-size:1.2rem;
    font-family: Sans-Serif;
    color:  #fff;
    
    }
    
    & h2{
        font-weight:200;
        line-height:1.5rem;
        font-size:1rem;
        font-family: Sans-Serif;
        color:  #fff;
        
        
        }
 
  
`;


       
       
      



export const LowerContainer = styled.section`
       width: 90%;
       height: 40vh;
       display: flex;
       border-radius: 12px;
       margin-left:1rem;
     
      
       
     `;   

export const SummaryContainer = styled.section`
    align-items: center;
     height: 45%;
     display: flex;
     gap: 0.5rem;
     margin-left:2rem;
     width: 250%;
     
     
       
     `;
export const SummaryContainer2 = styled.section`
     width: 100%;
     height: 45%;
     display: flex;
     gap: 0.5rem;
     margin-left:2rem;
     align-items: center;
     `;
     
     
export const SummaryCard = styled.div`
     width:70%;
     display: flex;
     flex-direction: column;
     background: #060E37;
     border-radius:10px;
     border: 1px solid white;
   
     & h3{
       color: #fff;
       font-size: 1rem;
       font-weight:500;
       margin-left:1rem;
     }
   
     & p{
       font-size:0.9rem;
       color: #fff;
       margin-left:1rem;
     }
   
     & img{
       border-radius:10px;
     }
   `;
   
        
     