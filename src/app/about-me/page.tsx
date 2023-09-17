import About from "@/components/AboutPage/About";
import Funfacts from "@/components/AboutPage/Fun-facts";
import Skills from "@/components/AboutPage/Skills";
import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <>
      <About />
      <Skills />
      <Funfacts />
    </>
  );
};

export default AboutMe;
