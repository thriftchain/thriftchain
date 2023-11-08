import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import {

   
    UserParent,
    UserWrapper,
    

} from "./user.styles";
import { sideBarLinks } from "./user.routes";
import UserHome from "../../components/user-home/Userhome";





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
                 <UserHome/>   
                </div>





            </UserWrapper>
        </UserParent >
    );
};

export default User;