import React from "react";
import Logo from "../logo/Logo";
import {
  HeroBackground,
  ClayImage,
  ColourCover,
  FadeCover
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroBackground>
      <Logo />
      <ClayImage />
      <ColourCover/>
      <FadeCover/>
    </HeroBackground>
  );
};

export default Hero;
