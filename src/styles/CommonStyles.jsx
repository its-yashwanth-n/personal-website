import styled from "@emotion/styled";
import { Element, Link } from "react-scroll";

export const Section = styled(Element)`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ScrollLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

// Logo Styles

export const IconButton = styled.button`
  z-index: 1;
  background-color: transparent;
  padding: 0%;
  border: none;
  cursor: pointer;
`;
