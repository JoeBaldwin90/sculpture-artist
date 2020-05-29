import React from "react";
import { FooterContainer, FooterLinks } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <div>
          <h5>Social</h5>
          <p>Instagram</p>
          <p>LinkedIn</p>
        </div>
        <div>
          <h5>Press Releases</h5>
          <p>The Telegraph</p>
          <p>Blair on Ice</p>
          <p>Frozen</p>
        </div>
        <div>
          <h5>Contact</h5>
          <p>12345678910</p>
          <p>email@gmail.com</p>
        </div>
        <div>
          <h5>Prices</h5>
          <p>Please enquire</p>
          <p>for bespoke prices</p>
        </div>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
