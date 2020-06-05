import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer, FooterLinks } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <div>
          <h5>Social</h5>
          <p>Instagram</p>
          <p>Pintrest</p>
        </div>
        <div>
          <h5>Press</h5>
          <ul>
            <li>
              <a href='https://www.standard.co.uk/showbiz/eddie-redmayne-waxwork-unveiled-at-londons-madame-tussauds-a3749386.html'>
                Eddie Redmayne
              </a>
            </li>
            <li>
              <a href='https://www.bbc.co.uk/news/world-asia-india-35818832'>
                Meeting Modi
              </a>
            </li>
            <li>
              <a href='https://www.standard.co.uk/showbiz/eddie-redmayne-waxwork-unveiled-at-londons-madame-tussauds-a3749386.html'>
                Eddie Redmayne
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <p>12345678910</p>
          <p>email@gmail.com</p>
        </div>
        <div>
          <h5>Prices</h5>
          <p>Please enquire via my</p>
          <Link exact to="/contact">contact page</Link>
          <p>for bespoke prices</p>
        </div>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
