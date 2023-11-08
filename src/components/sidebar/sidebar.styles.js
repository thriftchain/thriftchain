import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from '../../utils/device';

export const SidebarParent = styled.aside`
  width: 20%;
  height: 100vh;
  background: #060E37;
  border-right: 1px solid #060E37;
  border-bottom: 1px solid #060E37;
  display: flex;
  flex-direction: column;
  }

  @media ${devices.lg} {
    width: 10rem;
    height: 100%;
    background: #060E37;
    border-right: 1px solid #060E37;
    display: flex;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    
    &:hover {
      width: 20%;
      display: flex;
      flex-direction: column;
      transition: 0.5s ease-in-out;
      opacity: 1;

      & h1 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }

      & h3 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;


  export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  color: #000;
  align-items: center;
  padding: 2rem;

  

  @media ${devices.lg} {
    text-decoration: none;
    display: flex;
    width: 90%;
    align-items: center;
    color: #fff;
    padding: 2rem;

    & span {
      margin-left: 2rem;
      margin-right: 0.5rem;  
    }

    & h3 {
      font-family: "Inter";
      font-weight: 400;
      font-size: 1rem;
      line-height: 1rem;
      
    }

    &.active {
      background: #060E37;
      color: #fff;
    }

    &.active span {
      background: #BD5FB8;
      color: #fff;
    }
  }
`;

export const SidebarLinksContainer = styled.section`
 display:flex;
  flex-direction: column;
  flex: 100%;
  margin-top: 3rem;
 
`;

export const LogoutArea = styled.div`
    flex: 10%;
    width: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    color: #fff;

    

  @media ${devices.lg} {
    margin-bottom: 1rem;
    padding: 1rem 1rem;

    & span {
      margin-left: 1rem;
      margin-right: 0.5rem;
    }

    & h3 {
      font-family: "Inter";
      font-weight: 400;
      font-size: 1.3rem;
      line-height: 1.5rem;
     
    }
  }
`;