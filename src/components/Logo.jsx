import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-scroll";

const Logo = ({ isMobile }) => {
  return (
    <Link
      to="intro"
      spy={true}
      smooth={true}
      duration={500}
      tabIndex={1}
    >
      <LogoImage
        isMobile={isMobile}
        src={"/assets/Dark_Logo.svg"}
        width={isMobile ? 80 : 96}
        height={isMobile ? 70 : 84}
        alt="<Y/>"
      ></LogoImage>
    </Link>
  );
};

export default Logo;

const LogoImage = styled.img``;
