"use client";
import React, { useState } from "react";
import Logo from "@/components/Logo";
import {
  AppBar,
  Box,
  Container,
  Hidden,
  useMediaQuery,
  Slide,
} from "@mui/material";
import styled from "@emotion/styled";
import Hamburger from "hamburger-react";
import NavLinks from "@/components/NavLinks";
import GenericIcon from "@/components/GenericIcon";
import ThemeIcon from "@/components/ThemeIcon";
import {
  GITHUB_LABEL,
  GITHUB_LINK,
  LINKEDIN_LABEL,
  LINKEDIN_LINK,
  MOBILE_ICON_SIZE,
  githubID,
  linkedInID,
} from "@/utils/constants";

const NavigationBar = () => {
  const isMobile = !useMediaQuery("(min-width:900px)");
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <React.Fragment>
      <NavBar id="navigation-bar" position="fixed" component="header">
        <NavContainer maxWidth="inherit">
          <Logo isMobile={isMobile} />
          <Hidden mdUp>
            <Hamburger
              color="var(--primary-text-color)"
              label="show menu"
              style={{ display: "flex-end", zIndex: 5 }}
              toggled={isDrawerOpen}
              toggle={setDrawerOpen}
              duration={0.8}
              size={24}
            />
          </Hidden>
          <NavTextBox
            id="navigation-text-box"
            sx={{ display: { xs: "none", md: "flex" }, gap: "1.5vw" }}
          >
            <NavLinks handleDrawer={handleDrawer} />
          </NavTextBox>
        </NavContainer>
      </NavBar>
      <Hidden mdUp>
        <Slide
          id="mobile-navigation-bar"
          direction="left"
          in={isDrawerOpen}
          mountOnEnter
          unmountOnExit
        >
          <SideNav open={isDrawerOpen}>
            <MobileNav>
              <NavLinks handleDrawer={handleDrawer} />
              <IconContainer id="mobile-icons-div">
                <GenericIcon
                  iconId={linkedInID}
                  iconLink={LINKEDIN_LINK}
                  iconSize={MOBILE_ICON_SIZE}
                  ariaLabel={LINKEDIN_LABEL}
                />
                <GenericIcon
                  iconId={githubID}
                  iconLink={GITHUB_LINK}
                  iconSize={MOBILE_ICON_SIZE}
                  ariaLabel={GITHUB_LABEL}
                />
                <ThemeIcon iconSize={MOBILE_ICON_SIZE} />
                {/* <SoundIcon iconSize={MOBILE_ICON_SIZE} /> */}
              </IconContainer>
            </MobileNav>
          </SideNav>
        </Slide>
      </Hidden>
    </React.Fragment>
  );
};

export default NavigationBar;

const NavBar = styled(AppBar)`
  && {
    padding-top: 1vh;

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
    height: fit-content;
    justify-content: space-between;
  }
`;

const NavTextBox = styled(Box)`
  flex-grow: 1;
  align-items: center;
  justify-content: flex-end;
`;

const SideNav = styled.aside`
  &&& {
    right: 0;
    z-index: 2;
    width: 100%;
    height: 100vh;
    display: flex;
    position: fixed;
    overflow-x: hidden;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-bg-color);
    box-shadow: -10px 0px 30px -10px var(--primary-bg-color-dark);

    @media (min-width: 465px) {
      width: 60%;
    }
  }
`;

const MobileNav = styled.nav`
  gap: 15vh;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
`;

const IconContainer = styled(Container)`
  && {
    display: flex;
    justify-content: center;
    gap: 6vw;
  }
`;
