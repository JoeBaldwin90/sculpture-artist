import React from "react";
import styled from "styled-components";
import colors from '../../theme/Colors';

const ImageContainer = styled.div.attrs({
  className: "project",
})`
  position: relative;
  overflow: hidden;
  &:hover > p {
    transform: translateY(0%);
  }
`;

const Image = styled.img`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

const Label = styled.p`
  color: ${colors.sunbeamGrey};
  position: absolute;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 1em;
  background: linear-gradient(
    180deg,
    rgba(245, 245, 244, 0) 0%,
    rgb(12, 17, 23) 90%
  );
  transition: transform 0.5s ease;
  transform: translateY(100%);
`;

const DynamicImage = () => {

  return (
    <ImageContainer>
      <Label>Hello</Label>
    </ImageContainer>
  );
};

export default DynamicImage;
