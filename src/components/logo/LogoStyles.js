import styled from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";
import float from "../../theme/Keyframes";
import arrow from "../../images/arrow.svg";

export const Title = styled.h1`
  font-family: ${fonts.title};
  font-size: 5em;
  text-transform: uppercase;
  color: ${colors.sunbeamGrey};
  text-shadow: 1px 1px 5px ${colors.organicGreen};
  @media (max-width: 425px) {
    font-size: 2.5em;
  }
`;

export const Signature = styled.h2`
  font-family: ${fonts.signature};
  font-size: 5em;
  color: ${colors.sunbeamGrey};
  text-shadow: 1px 1px 5px ${colors.organicGreen};
  @media (max-width: 425px) {
    font-size: 2.5em;
  }
`;

export const Subtitle = styled.h3`
  font-family: ${fonts.body};
  letter-spacing: 15px;
  text-transform: uppercase;
  font-size: 1.5em;
  color: ${colors.sunbeamGrey};
  text-shadow: 1px 1px 5px ${colors.organicGreen};
  @media (max-width: 425px) {
    font-size: 1em;
    letter-spacing: 4px;
  }
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  top: calc(50% - 5vh);
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fadeIn 2s ease;
`;

export const DownArrow = styled.img.attrs({
  src: arrow,
  alt: "Clickable down arrow",
})`
  width: 25px;
  margin-top: 2em;
  cursor: pointer;
  animation: ${float} 1s linear infinite alternate;
`;
