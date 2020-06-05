import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import {
  FormInput,
  FormText,
  Label,
  SubmitButton,
  FormContainer,
} from "./ContactStyles";

const Contact = () => {
  return (
    <Fragment>
      <FormContainer>
        <form action='https://formspree.io/moqkejgp' method='POST'>
          <Label>
            Your full name:
            <FormInput type='text' name='name' />
          </Label>
          <Label>
            Your email:
            <FormInput type='text' name='_replyto' />
          </Label>
          <Label>
            Your message:
            <FormText name='message'></FormText>
          </Label>
          <input type='text' name='_gotcha' style={{ display: "none" }} />
          <SubmitButton type='submit'>Send</SubmitButton>
        </form>
      </FormContainer>
      <Footer />
    </Fragment>
  );
};

export default Contact;
