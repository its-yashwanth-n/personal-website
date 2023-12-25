import React from "react";
import { Section } from "@/styles/CommonStyles";
import { Typography } from "@mui/material";
import { ThemeIcon } from "@/components/ThemeIcon";

const Intro = () => {
  return (
    <Section id="intro-section" name="intro">
      <ThemeIcon />
      <Typography>Intro</Typography>
    </Section>
  );
};

export default Intro;
