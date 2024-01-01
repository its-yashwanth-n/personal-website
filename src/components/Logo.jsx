import React from "react";
import styled from "@emotion/styled";
import { useTheme } from "next-themes";
import { ScrollLink } from "@/styles/CommonStyles";
import Image from "next/image";

const Logo = ({ isMobile }) => {
  const { theme } = useTheme();
  const logoPath =
    theme === "light" ? "/assets/Light_Logo.svg" : "/assets/Dark_Logo.svg";
  return (
    <ScrollLink to="intro" spy={true} smooth={true} duration={500} tabIndex={1}>
      <LogoImage
        isMobile={isMobile}
        src={logoPath}
        width={isMobile ? 80 : 96}
        height={isMobile ? 70 : 84}
        alt="<Y/>"
        priority
      ></LogoImage>
    </ScrollLink>
  );
};

export default Logo;

const LogoImage = styled(Image)`
  font-family: var(--font-logo);
  font-size: ${(props) => (props.isMobile ? "2.25rem" : "3.5rem")};
  color: var(--primary-text-color);
`;
