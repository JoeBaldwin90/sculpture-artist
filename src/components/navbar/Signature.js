import React from "react";
import styled from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";

const Name = styled.h2`
  font-family: ${fonts.signature};
  font-size: 1.5em;
  color: ${colors.wetTerracotta};
`;

const Occupation = styled.h1`
  font-family: ${fonts.title};
  font-size: 1.75em;
  text-transform: uppercase;
  color: ${colors.wetTerracotta};
`;

const SignatureContainer = styled.div`
  text-align: center;
`;

const Signature = () => (
  <SignatureContainer>
    <Name>Hannah Farrow</Name>
    <Occupation>Sculpture</Occupation>
  </SignatureContainer>
);

export default Signature;
