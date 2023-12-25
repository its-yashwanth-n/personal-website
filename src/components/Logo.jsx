import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-scroll";
import { useTheme } from "next-themes";

const Logo = ({ isMobile }) => {
  const { theme, setTheme } = useTheme();
  return (
    <Link to="intro" spy={true} smooth={true} duration={500} tabIndex={1}>
      <LogoImage
        isMobile={isMobile}
        src={
          theme === "dark" ? "/assets/Dark_Logo.svg" : "/assets/Light_Logo.svg"
        }
        width={isMobile ? 80 : 96}
        height={isMobile ? 70 : 84}
        alt="<Y/>"
      ></LogoImage>
    </Link>
  );
};

export default Logo;

const LogoImage = styled.img``;
