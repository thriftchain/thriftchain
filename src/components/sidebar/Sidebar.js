import React from "react";
import { BsBoxArrowLeft } from "react-icons/bs";
import {
  SidebarParent,
  LogoutArea,
  SidebarLinksContainer,
  StyledNavLink
  } from "./sidebar.styles";

import { useNavigate } from "react-router-dom";

const Sidebar = ({ routes }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    localStorage.removeItem("userToken");

    navigate("/log-in");
  };

  return (
    <SidebarParent>
      
      
      <SidebarLinksContainer>
        {routes.map((link) => (
          <StyledNavLink
            to={link.path}
            style={{ textDecoration: "none" }}
            key={link.text}
          >
            <span>{link.icon}</span>
            <h3>{link.text}</h3>
          </StyledNavLink>
        ))}
      </SidebarLinksContainer>
      <LogoutArea onClick={handleLogout}>
        <span><BsBoxArrowLeft size={25} /></span>
        <h3>Logout</h3>
      </LogoutArea>
    </SidebarParent>
  );
};

export default Sidebar;