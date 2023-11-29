import React from "react";
import objects from "../../assets/objects.svg";
import { Link } from "react-router-dom";


const Thrift = () => {




  return (

    <main className='bg-[#070624]'>
      <div className='w-100 md:w-[100%] lg:p-16 p-4  grid lg:grid-cols-2 h-[80vh] lg:gap-0 gap-4 mb-4'>
        <div className="grid grid-col gap-0">
          <h1 className='text-[25px] md:text-[30px] font-bold capitalize  text-[#BD5FB8]' >ThriftChain: Your Key to Financial Freedom </h1>
          <h2 className='text-[25px] md:text-[20px] font-bold capitalize  text-white'>Unlock Savings, Achieve Dreams, Secure Tomorrow</h2>
           <Link to='/log-in'><button class="bg-gradient-to-r from-[#9C0F94] to-[#142698] hover:bg-blue-700 text-white font-semibold py-2 rounded border-white border-spacing-1 ">
            Start Saving    </button> </Link>
          <h1 className='text-[30px] md:text-[30px] font-bold capitalize  text-white' >About ThriftChain </h1>
          <p className="text-[15px] md:text-[15px] text-white mb-4">ThriftChain is a blockchain-based financial management platform. It enables individual and
            <br></br>group savings, contributions, and goal achievement. Users can track progress in real-time,
            <br></br>and blockchain technology ensures security and transparency. ThriftChain encourages
            <br></br>financial discipline, making it a powerful tool for both individual and group financial
            <br></br>planning.</p>

        </div>
        <div >
          <img src={objects} alt='objects' class='mb-4' />

        </div>
      </div>
    </main>









  )



}


export default Thrift;