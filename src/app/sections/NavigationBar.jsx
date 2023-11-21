"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import {
  AppBar,
  Box,
  Container,
  Hidden,
  Toolbar,
  Typography,
  useMediaQuery,
  Slide,
} from "@mui/material";
import { NAV_ROUTES } from "@/utils/routes";
import { Link } from "react-scroll";
import styled from "@emotion/styled";
import Hamburger from "hamburger-react";

const NavigationBar = () => {
  const isMobile = !useMediaQuery("(min-width:900px)");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <AppBar id="navigation-bar" position="fixed" component="header">
        <Container maxWidth="inherit" sx={{ height: "fit-content" }}>
          <Toolbar disableGutters>
            <Logo isMobile={isMobile} />
            <NavTextBox
              id="navigation-text-box"
              sx={{ display: { xs: "none", md: "flex" }, gap: "1.5vw" }}
            >
              {NAV_ROUTES.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  spy={true}
                  smooth={true}
                  onClick={handleDrawer}
                  duration={500}
                  tabIndex={1}
                >
                  <Typography>{item.text}</Typography>
                </Link>
              ))}
            </NavTextBox>
            <Hidden mdUp>
              <Hamburger
                label="show menu"
                toggled={isDrawerOpen}
                toggle={setDrawerOpen}
                duration={0.8}
                size={24}
              />
            </Hidden>
          </Toolbar>
        </Container>
      </AppBar>
      <Slide
        id="mobile-navigation-bar"
        direction="left"
        in={isDrawerOpen}
        mountOnEnter
        unmountOnExit
      >
        <SideNav open={isDrawerOpen}>
          <MobileNav>
            {NAV_ROUTES.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                spy={true}
                smooth={true}
                onClick={handleDrawer}
                duration={500}
                tabIndex={1}
              >
                <Typography>{item.text}</Typography>
              </Link>
            ))}
          </MobileNav>
        </SideNav>
      </Slide>
    </React.Fragment>
  );
};

export default NavigationBar;

const NavTextBox = styled(Box)`
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;

const MobileNav = styled.nav`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  gap: 15vh;
`;

const SideNav = styled.aside`
  &&& {
    background-color: grey;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
    @media (min-width: 900px) {
      display: none;
    }
    @media (min-width: 465px) {
      width: 60%;
    }
  }
`;
