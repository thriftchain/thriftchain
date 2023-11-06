import React from "react";
import objects from "../../assets/objects.svg";


const Thrift = () => {




    return (
       
            <main className='bg-[#070624]'>
             
                <h1 className='text-[25px] md:text-[30px] font-bold capitalize  text-[#BD5FB8] mx-80 mt-10 px-8' >ThriftChain: Your Key to Financial Freedom </h1>
                <h2 className='text-[25px] md:text-[20px] font-bold capitalize  text-white  mx-96 px-8'>Unlock Savings, Achieve Dreams, Secure Tomorrow</h2>
               <div className='mx-96 px-60 mt-4'> <button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-semibold py-2 rounded border-white border-spacing-1 ">
          Start Saving    </button></div>
         
          <div className="mx-80 px-16 mt-4">
            <img src={objects} alt='objects'/>
            <h1 className='text-[30px] md:text-[30px] font-bold capitalize  text-white mx-32' >About ThriftChain </h1>
            <p className="text-[14px] md:text-[14px] text-white mb-4">ThriftChain is a blockchain-based financial management platform. It enables individual and 
                <br></br>group savings, contributions, and goal achievement. Users can track progress in real-time, 
                <br></br>and blockchain technology ensures security and transparency. ThriftChain encourages 
                <br></br>financial discipline, making it a powerful tool for both individual and group financial 
                <br></br>planning.</p>

          </div>
            </main>


       






    )



}


export default Thrift;