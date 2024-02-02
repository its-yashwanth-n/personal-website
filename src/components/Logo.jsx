import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useTheme } from "next-themes";
import { ScrollLink } from "@/styles/CommonStyles";
import Image from "next/image";
import { useMediaQuery } from "@mui/material";

const Logo = () => {
  const { theme } = useTheme();
  const isMobile = !useMediaQuery("(min-width:900px)");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  const logoPath =
    theme === "light" ? "/assets/Light_Logo.svg" : "/assets/Dark_Logo.svg";

  return (
    <ScrollLink to="intro" spy={true} smooth={true} duration={500} tabIndex={1}>
      <LogoImage
        ismobile={isMobile.toString()}
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
  font-size: ${(props) => (props.ismobile === true ? "2.25rem" : "3.5rem")};
  color: var(--primary-text-color);
`;
