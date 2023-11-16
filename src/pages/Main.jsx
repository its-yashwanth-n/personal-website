"use client";
import React from "react";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";
import { Container } from "@mui/material";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import styled from "@emotion/styled";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

const Main = () => {
  return (
    <React.Fragment>
      <NavigationBar/>
      <MainContainer maxWidth="xl" id="home-content">
        <Intro />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </MainContainer>
      <Footer/>
    </React.Fragment>
  );
};

export default Main;

const MainContainer = styled(Container)`

`;
