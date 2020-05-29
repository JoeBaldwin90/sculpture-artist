import React, { Fragment } from "react";
import NavBar from '../navbar/NavBar';
import Hero from "../hero/Hero";
import Footer from "../footer/Footer";
import {
  HannahImage,
  WIPImage,
  MainGrid,
  ContentWide,
  ContentTall,
} from "./HomepageStyles";

const Homepage = () => {

  return (
    <Fragment>
      <Hero />
      <MainGrid>
        <ContentWide>
          <HannahImage />
          <div>
            <p>
              One quick fox jumped over a lake. Try it. One quick fox jumped
              over a lake. Try it. One quick fox jumped over a lake. Try it. One
              quick fox jumped over a lake. Try it.
            </p>
            <p>
              One quick fox jumped over a lake. Try it. One quick fox jumped
              over a lake. Try it. One quick fox jumped over a lake. Try it. One
              quick fox jumped over a lake. Try it. One quick fox jumped over a
              lake. Try it. One quick fox jumped over a lake. Try it.
            </p>
          </div>
        </ContentWide>

        <ContentTall>
          <WIPImage />
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </ContentTall>
      </MainGrid>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
