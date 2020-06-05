import React from "react";
import {
  FooterContainer,
  FooterLinks,
  RouteLink,
  ExternalLink,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <div>
          <h5>Social</h5>
          <p>
            <ExternalLink href='https://www.instagram.com/hannahfarrowstudio/'>
              Instagram
            </ExternalLink>
          </p>
        </div>
        <div>
          <h5>Press</h5>
          <ul>
            <li>
              <ExternalLink href='https://www.standard.co.uk/showbiz/eddie-redmayne-waxwork-unveiled-at-londons-madame-tussauds-a3749386.html'>
                Eddie Redmayne
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href='https://www.bbc.co.uk/news/world-asia-india-35818832'>
                Meeting Modi
              </ExternalLink>
            </li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <p>Please visit my</p>
          <p>
            <RouteLink exact to='/contact'>
              contact page
            </RouteLink>
          </p>
        </div>
      </FooterLinks>
    </FooterContainer>
  );
};

export default Footer;
