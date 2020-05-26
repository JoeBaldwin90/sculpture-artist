import React from "react";
import {
  Title,
  Signature,
  Subtitle,
  LogoContainer,
  DownArrow,
} from "./LogoStyles";

const Logo = () => {
  const scroll = () =>
    window.scrollTo({
      top: window.innerHeight + (0.05 * window.innerHeight),
      behavior: "smooth",
    });

  return (
    <LogoContainer>
      <Signature>Hannah Farrow</Signature>
      <Title>Sculpture</Title>
      <Subtitle>commissions</Subtitle>
      <DownArrow onClick={scroll} />
    </LogoContainer>
  );
};
export default Logo;
