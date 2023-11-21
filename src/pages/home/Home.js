import React from "react";
import { HomeParent,HomeWrapper } from "./home.styles";
import Hero from "../../components/hero/Hero";
import Thrift from "../../components/thrift/Thrift";
import Key from "../../components/key/index";
import Great from "../../components/great/index";


const Home = () => {




    return (
        <HomeParent>

            <HomeWrapper>
                <Hero/>
                <Thrift/>
                <Key/>
                <Great/>
            </HomeWrapper>
        </HomeParent>
       






  

    )

}


export default Home;