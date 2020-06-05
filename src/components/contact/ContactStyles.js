import styled from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";

export const FormContainer = styled.section`
  padding: 6em 2em 5em 2em;
  max-width: 720px;
  margin: 0 auto;
  @media (max-width: 425px) {
    padding: 5em 1em 5em 1em;
  }
`;

export const FormInput = styled.input`
  font-family: ${fonts.body};
  font-size: 1em;
  color: ${colors.organicGreen};
  background: transparent;
  display: block;
  width: 100%;
  margin-bottom: 1em;
  border: solid 3px ${colors.wetTerracotta};
  padding: 1em;
  margin-top: 0.5em;
  margin-bottom: 2em;

  @media (max-width: 425px) {
    padding: 0.5em;
  }
`;

export const FormText = styled.textarea`
  font-family: ${fonts.body};
  font-size: 1em;
  color: ${colors.organicGreen};
  background: transparent;
  display: block;
  width: 100%;
  margin-bottom: 1em;
  border: solid 3px ${colors.wetTerracotta};
  padding: 1em;
  margin-top: 0.5em;
  margin-bottom: 2em;
  height: 40vh;

  @media (max-width: 425px) {
    padding: 0.5em;
  }
`;

export const Label = styled.label`
  color: #8c5656;
  display: block;
  font-family: ${fonts.body};
`;

export const SubmitButton = styled.button`
  background: ${colors.wetTerracotta};
  color: ${colors.sunbeamGrey};
  font-family: ${fonts.body};
  text-transform: uppercase;
  padding: 0.5em;
  font-size: 1.1em;
  width: 100%;
  border: none;
  
  &:active {
    background: ${colors.shavantPink};
  }
`;
