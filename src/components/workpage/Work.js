import React, { Fragment } from "react";
import styled from "styled-components";
import Footer from "../footer/Footer";
// import DynamicImage from "./Image";

const chest = "../../images/chest.png";
const forearm = "../../images/forearm.png";
const kneedetail = "../../images/kneedetail.png";
const jacksonSide = "../../images/JacksonFront.png";
const jacksonBack = "../../images/JacksonSide.png";
const claudiaBack = "../../images/ClaudiaBack.png";
const claudiaFront = "../../images/ClaudiaFront.png";

const GalleryContainer = styled.section`
  padding: 62px 1em;
`;

const Work = () => {
  return (
    <Fragment>
      <GalleryContainer>
        <div>
          <img src={kneedetail} />
          <div>
            <img src={forearm} />
            <img src={chest} />
          </div>
        </div>
        <div>
          <img src={jacksonSide} />
          <img src={jacksonBack} />
        </div>
        <div>
          <img src={claudiaBack} />
          <img src={claudiaFront} />
        </div>
      </GalleryContainer>
      <Footer />
    </Fragment>
  );
};

export default Work;
