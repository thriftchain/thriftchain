import React from "react";
import Hero from "../../components/hero/Hero";
import Thrift from "../../components/thrift/Thrift";
import Key from "../../components/key/index";
import Great from "../../components/great/index";


const Home = () => {




    return (
        <main class='bg-[#070624] w-screen'>
        
                <Hero/>
                <div>
                <Thrift/>
                </div>
                <div class='mt-32'>
                <Key/>
                </div>
                <Great/>
           
       </main>






  

    )

}


export default Home;