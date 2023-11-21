import React from 'react';




const Great = () => {


    return (
        <div className='bg-[#070624] '>

            <div className="container mx-auto px-4 sm:px-[80px] py-[100px]">

                <h2 className="text-white text-3xl pb-[48px] font-bold leading-10">
                ThriftChain is great for: 

                </h2>
                <div className='bg-[#070624] grid-cols-4 gap-4 md:flex md:flex-row'>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-[#060E37] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                        <div className="w-full h-1/2 shadow-md mx-2">
                            <h3 className="font-bold text-white text-lg">
                            Individual Savers
                            </h3>
                            <p className="font-normal text-justify text-white text-sm">
                            Individuals looking to save for specific goals and 
                            <br></br>earn interest on their savings.


                            </p>

                        </div>
                        
                    </div>

                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-[#060E37] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">

                        <div className="w-full h-1/2  shadow-md mx-2">
                            <h3 className="font-bold text-white text-lg">
                            Group Savers
                            </h3>
                            <p className="font-normal text-justify text-white text-sm">
                            Communities, organizations, or friends with 
                            <br></br>shared financial objectives, such as purchasing 
                            <br></br>assets collectively or achieving specific targets.


                            </p>


                        </div>
                        

                    </div>
                    <div
                        class="mx-3 mt-6 flex flex-col rounded-lg bg-[#060E37] sm:shrink-0 sm:grow sm:basis-0 border-white border-2">
                        <div className="w-full h-1/2 shadow-md mx-2">
                            <h3 className="font-bold text-white text-lg">
                            Asset Managers
                            </h3>
                            <p className="font-normal text-justify text-white text-sm ">
                            Professionals responsible for overseeing and 
                            <br></br>managing diverse assets within the platform.
                            </p>

                        </div>
                        
                    </div>



                </div>
               
            </div>
        </div>


    )


}


export default Great;




