import React, { Fragment } from "react";
import Footer from "../footer/Footer";
import { GalleryContainer, Image, ProjectBlock, FlexBox } from "./WorkStyles";

import chest from "../../images/chest.png";
import forearm from "../../images/forearm.png";
import kneedetail from "../../images/kneedetail.png";
import jacksonSide from "../../images/JacksonFront.png";
import jacksonBack from "../../images/JacksonSide.png";
import claudiaBack from "../../images/ClaudiaBack.png";
import claudiaFront from "../../images/ClaudiaFront.png";

const Work = () => {
  return (
    <Fragment>
      <GalleryContainer>
        <ProjectBlock>
          <FlexBox>
            <div style={{ width: "40%" }}>
              <Image
                src={kneedetail}
                style={{ height: "100%", paddingRight: "1em" }}
              />
            </div>
            <div style={{ width: "60%" }}>
              <Image src={forearm} style={{ height: "50%" }} />
              <Image src={chest} style={{ height: "50%", paddingTop: "1em" }} />
            </div>
          </FlexBox>
        </ProjectBlock>

        <ProjectBlock>
          <FlexBox>
            <Image src={jacksonSide} style={{ width: "50%" }} />
            <Image
              src={jacksonBack}
              style={{ width: "50%", paddingLeft: "1em" }}
            />
          </FlexBox>
        </ProjectBlock>

        <ProjectBlock>
          <FlexBox>
            <Image src={claudiaBack} style={{ width: "60%" }} />
            <Image
              src={claudiaFront}
              style={{ width: "40%", paddingLeft: "1em" }}
            />
          </FlexBox>
        </ProjectBlock>
      </GalleryContainer>
      <Footer />
    </Fragment>
  );
};

export default Work;