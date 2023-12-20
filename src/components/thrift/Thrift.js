import React from "react";
import objects from "../../assets/objects.svg";



const Thrift = () => {




  return (

    <main className='bg-[#070624]'>
      <div className='container mx-auto px-4 sm:px-[80px] py-[100px]'>
        <div className="md:mx-56 sm:mx-4">
          <div>
            <img src={objects} alt='objects' />

          </div>
          <div>
            <h1 className='text-[30px] md:text-[30px] font-bold capitalize  text-white md:mx-28 sm:mx-4 sm:text-sm' >About ThriftChain </h1>
            <p className="text-[15px] md:text-[15px] text-white mb-4 sm:text-sm">ThriftChain is a blockchain-based financial management platform. It enables individual and
              <br></br>group savings, contributions, and goal achievement. Users can track progress in real-time,
              <br></br>and blockchain technology ensures security and transparency. ThriftChain encourages
              <br></br>financial discipline, making it a powerful tool for both individual and group financial
              <br></br>planning.</p>
          </div>

        </div>

      </div>
    </main>









  )



}


export default Thrift;