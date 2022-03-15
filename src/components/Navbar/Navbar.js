import React, { useState, useEffect } from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn,
} from "./Navbar.elements";

import { FaTimes, FaBars } from "react-icons/fa";
import logo from "../../assets/logo.svg";

function Navbar(props) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => setClicked(!clicked);

  const [button, setButton] = useState(true);
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <img src={logo} alt="logo" height="50px" />
        </NavLogo>
        <MobileIcon onClick={handleClick}>
          {clicked ? <FaTimes /> : <FaBars />}
        </MobileIcon>
        <NavMenu onClick={handleClick} click={clicked}>
          <NavItem>
            <NavLinks to="/">Home</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/services">Skills</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/get-in-touch">Projects</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="/get-in-touch">Get in touch</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}

export default Navbar;
