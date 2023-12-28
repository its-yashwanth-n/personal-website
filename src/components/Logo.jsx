import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "next-themes";
import { ScrollLink } from "@/styles/CommonStyles";

const Logo = ({ isMobile }) => {
  const { theme, setTheme } = useTheme();
  return (
    <ScrollLink to="intro" spy={true} smooth={true} duration={500} tabIndex={1}>
      <LogoImage
        isMobile={isMobile}
        src={
          theme === "light" ? "/assets/Light_Logo.svg" : "/assets/Dark_Logo.svg"
        }
        width={isMobile ? 80 : 96}
        height={isMobile ? 70 : 84}
        alt="<Y/>"
      ></LogoImage>
    </ScrollLink>
  );
};

export default Logo;

const LogoImage = styled.img`
  font-family: var(--font-logo);
  font-size: ${(props) => (props.isMobile ? "2.25rem" : "3.5rem")};
  color: var(--primary-text-color);
`;
