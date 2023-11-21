import React from "react";
import Intro from "@/app/sections/Intro";
import Skills from "@/app/sections/Skills";
import { Container } from "@mui/material";
import Experience from "@/app/sections/Experience";
import Projects from "@/app/sections/Projects";
import Contact from "@/app/sections/Contact";
import styled from "@emotion/styled";

const Main = () => {
  return (
    <React.Fragment>
      <MainContainer maxWidth="xl" id="home-content">
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </MainContainer>
    </React.Fragment>
  );
};

export default Main;

const MainContainer = styled(Container)``;
