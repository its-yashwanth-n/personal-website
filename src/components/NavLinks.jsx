import React from "react";
import { ScrollLink } from "@/styles/CommonStyles";
import { NAV_ROUTES } from "@/utils/routes";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";

const NavLinks = ({ handleDrawer }) => (
  <>
    {NAV_ROUTES.map((item) => (
      <NavText
        key={item.id}
        fontSize={{ xs: "2rem", sm: "1.75rem", md: "1.5rem", lg: "1.75rem" }}
      >
        <ScrollLink
          to={item.to}
          spy={true}
          smooth={true}
          onClick={handleDrawer}
          duration={500}
          tabIndex={1}
        >
          {item.text}
          <Span>( )</Span>
        </ScrollLink>
      </NavText>
    ))}
  </>
);

export default NavLinks;

const Span = styled.span`
  color: var(--secondary-text-color);
`;

const NavText = styled(Typography)`
  && {
    cursor: pointer;
    color: var(--grey-text);
    font-family: var(--font-secondary);
    &:hover {
      color: var(--primary-text-color);
    }
  }
`;