import React from "react";
import { HomeParent,HomeWrapper } from "./home.styles";
import Hero from "../../components/hero/Hero";
import Thrift from "../../components/thrift/Thrift";
import Key from "../../components/key/Key";
import KeyF from "../../components/key/KeyF";
import Great from "../../components/great/Great";


const Home = () => {




    return (
        <HomeParent>

            <HomeWrapper>
                <Hero/>
                <Thrift/>
                <Key/>
                <KeyF/>
                <Great/>
            </HomeWrapper>
        </HomeParent>
       






  

    )

}


export default Home;