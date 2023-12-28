"use client";
import React from "react";
import styled from "@emotion/styled";
import { GeneralText } from "@/styles/CommonStyles";

const Footer = () => {
  return (
    <StyledFooter id="footer">
      <GeneralText>Built by Yashwanth Nagaraju</GeneralText>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
`;
