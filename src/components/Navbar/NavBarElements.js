import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: #151515;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 90%;
  max-width: 1300px;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: 500;
  text-decoration: none;
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 80px;
`;

export const MobileIcon = styled.button`
  display: none;

  @media screen and (max-width: 945px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
    border: none;
    background-color: transparent;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 945px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  &.active {
    border-color: #ed1c24;
  }
`;

export const NavLinksR = styled(LinkR)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;

  &.active {
    border-color: #ed1c24;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #ed1c24;
  }
`;

export const Flag = styled.button`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border: none;
  background-color: transparent;

  span {
    margin-left: 10px;
    font-size: 0.5rem;
  }

  span:hover {
    transition: all 0.2s ease-in-out;
    color: #ed1c24;
  }
`;

export const NavBtnLink = styled(LinkR)`
  height: 50%;
  margin-top: 20px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  background: #ed1c24;
  white-space: nowrap;
  padding: 10px 20px;
  color: #f6f7f8;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: white;
    color: #ed1c24;
  }

  @media screen and (max-width: 945px) {
    display: none;
  }
`;
