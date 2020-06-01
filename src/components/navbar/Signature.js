import React from "react";
import styled from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";

const Name = styled.h2`
  font-family: ${fonts.signature};
  font-size: 1.2em;
  color: ${colors.wetTerracotta};
  transition: all 0.5s ease;
`;

const Occupation = styled.h1`
  font-family: ${fonts.title};
  font-size: 1.2em;
  text-transform: uppercase;
  color: ${colors.wetTerracotta};
  transition: all 0.5s ease;
`;

const SignatureContainer = styled.div`
  text-align: center;
  &:hover {
    h1,
    h2 {
      color: ${colors.coffeeCupBlue};
    }
  }
`;

const Signature = () => (
  <SignatureContainer>
    <Name>Hannah Farrow</Name>
    <Occupation>Sculpture</Occupation>
  </SignatureContainer>
);

export default Signature;
