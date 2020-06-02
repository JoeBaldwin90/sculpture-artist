import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import {
  Form,
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
        <Form action='https://formspree.io/moqkejgp' method='POST'>
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
          <SubmitButton type='submit'>Send</SubmitButton>
        </Form>
      </FormContainer>
      <Footer />
    </Fragment>
  );
};

export default Contact;
