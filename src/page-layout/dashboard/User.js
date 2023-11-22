import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {


    UserParent,
    UserWrapper,


} from "./user.styles";
import { sideBarLinks } from "./user.routes";
import UserHome from "../../pages/user-home/index";
import { Routes, Route } from "react-router-dom";
import UserOverview from "../../pages/overview/UserOverview";





const User = () => {
    return (
        <UserParent>
            <Sidebar routes={sideBarLinks} />
            <UserWrapper>


                <div
                    className=""
                    style={{
                        height: "100%",
                        overflowX: "hidden",
                        overflowY: "auto",
                    }}
                >
                    <Routes>
                        
                            <Route index element={<UserHome />} />
                            <Route path="/" element={<UserHome />} />
                            <Route path="/overview" element={<UserOverview />} />

                       


                    </Routes>
                    
                </div>





            </UserWrapper>
        </UserParent >
    );
};

export default User;