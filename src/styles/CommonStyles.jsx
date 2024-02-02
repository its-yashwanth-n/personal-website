import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Element, Link } from "react-scroll";
import { SlideInBtmAmt } from "./CommonAnimations";

export const Section = styled(Element)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconDiv = styled.div`
  @media (min-width: 900px) {
    display: block;
    position: fixed;
    bottom: 0px;
    padding-bottom: 3.5vh;
    -webkit-animation: ${SlideInBtmAmt};
    animation: ${SlideInBtmAmt};
  }
  display: none;
`;

//common style components for texts

export const GeneralText = styled(Typography)`
  font-family: var(--font-primary);
  color: var(--primary-text-color);
  font-size: 16px;
  @media (min-width: 900px) {
    font-size: 18px;
  }
`;

// common style components for links and buttons

export const IconList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
`;

export const ListItems = styled.li`
  &&& {
    cursor: pointer;
    padding: 40% 0%;
  }
`;

export const ScrollLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const IconButton = styled.button`
  z-index: 1;
  background-color: transparent;
  padding: 0%;
  border: none;
  cursor: pointer;
`;
