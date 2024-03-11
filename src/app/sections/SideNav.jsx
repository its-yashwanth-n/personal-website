import React, { useRef, useState } from "react";
import NavLinks from "@/components/NavLinks";
import { Container, Hidden, Slide } from "@mui/material";
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
import styled from "@emotion/styled";
import Hamburger from "hamburger-react";
import useOnClickAway from "@/hooks/useOnClickAway";

export const SideNav = ({}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const modalRef = useRef();
  useOnClickAway(modalRef, () => setDrawerOpen(false), "hamburger-react");

  const handleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <Hidden mdUp>
      <Hamburger
        color="var(--primary-text-color)"
        label="show menu"
        toggled={isDrawerOpen}
        toggle={setDrawerOpen}
        duration={0.8}
        size={24}
      />
      <Slide
        id="mobile-navigation-bar"
        direction="left"
        in={isDrawerOpen}
        mountOnEnter
        unmountOnExit
      >
        <Modal open={isDrawerOpen} ref={modalRef}>
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
        </Modal>
      </Slide>
    </Hidden>
  );
};

const MobileNav = styled.nav`
  gap: 10vh;
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

const Modal = styled.aside`
  &&& {
    right: 0;
    z-index: -1;
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
