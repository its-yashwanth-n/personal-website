"use client";
import React from "react";
import Logo from "@/components/Logo";
import { AppBar, Box, Container } from "@mui/material";
import styled from "@emotion/styled";
import NavLinks from "@/components/NavLinks";
import { SideNav } from "./SideNav";

const NavigationBar = () => {
  return (
    <React.Fragment>
      <NavBar id="navigation-bar" position="fixed" component="header">
        <NavContainer maxWidth="inherit">
          <Logo />
          <NavTextBox
            id="navigation-text-box"
            sx={{ display: { xs: "none", md: "flex" }, gap: "1.5vw" }}
          >
            <NavLinks />
          </NavTextBox>
        </NavContainer>
        <SideNav />
      </NavBar>
    </React.Fragment>
  );
};

export default NavigationBar;

const NavBar = styled(AppBar)`
  && {
    display: flex;
    padding: 0px 24px;
    flex-direction: row;

    box-shadow: none;
    background-color: transparent;
    background-filter: blur(10px);

    @media (min-width: 900px) {
      box-shadow: 0 10px 30px -10px var(--secondary-bg-color);
      background-color: var(--nav-bg-color);
      backdrop-filter: blur(1px);
      background-filter: none;
    }
  }
`;

const NavContainer = styled(Container)`
  && {
    display: flex;
    padding: 1vh 0px 0px 0px;
    height: fit-content;
    justify-content: space-between;
  }
`;

const NavTextBox = styled(Box)`
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`;
