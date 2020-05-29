import styled from "styled-components";
import colors from "../../theme/Colors";
import clay from "../../images/clay.jpg";

export const HeroBackground = styled.section`
  background-color: ${colors.wetTerracotta};
  width: 100vw;
  height: 105vh;
  position: relative;
`;

export const ClayImage = styled.img.attrs({
  src: clay,
  alt: "Cracked Clay Ground",
})`
  position: absolute;
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ColourCover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colors.wetTerracotta};
  opacity: 0.2;
  z-index: 1;
`;

export const FadeCover = styled.div`
  position: absolute;
  width: 100%;
  height: 120px;
  bottom: 0;
  background: #fff;
  background: linear-gradient(#362d1d00, #f5f5f4);
  z-index: 2;
`;
