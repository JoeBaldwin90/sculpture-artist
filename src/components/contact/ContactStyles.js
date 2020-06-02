import styled from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";

export const FormContainer = styled.section`
  padding: 6em 2em 5em 2em;
  max-width: 720px;
  margin: 0 auto;
`;

export const Form = styled.form``;

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
  height: 25vh;
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
`;
