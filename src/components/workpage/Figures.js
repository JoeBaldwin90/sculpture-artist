import React from "react";
import { GalleryContainer, Image, ProjectBlock, FlexBox } from "./FigureStyles";

import chest from "../../images/chest.png";
import forearm from "../../images/forearm.png";
import kneedetail from "../../images/kneedetail.png";
import jacksonSide from "../../images/JacksonFront.png";
import jacksonBack from "../../images/JacksonSide.png";
import claudiaBack from "../../images/ClaudiaBack.png";
import claudiaFront from "../../images/ClaudiaFront.png";

const Figures = () => {
  return (
    <GalleryContainer>
      <ProjectBlock>
        <FlexBox>
          <div style={{ width: "40%" }}>
            <Image
              src={kneedetail}
              style={{ height: "100%", paddingRight: ".5em" }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <Image src={forearm} style={{ height: "50%" }} />
            <Image src={chest} style={{ height: "50%", paddingTop: ".5em" }} />
          </div>
        </FlexBox>
      </ProjectBlock>

      <ProjectBlock>
        <FlexBox>
          <div>
            <Image src={jacksonSide} style={{ width: "50%" }} />
            <Image
              src={jacksonBack}
              style={{ width: "50%", paddingLeft: ".5em" }}
            />
          </div>
        </FlexBox>
      </ProjectBlock>

      <ProjectBlock>
        <FlexBox>
          <div>
            <Image src={claudiaBack} style={{ width: "60%" }} />
            <Image
              src={claudiaFront}
              style={{ width: "40%", paddingLeft: ".5em" }}
            />
          </div>
        </FlexBox>
      </ProjectBlock>
    </GalleryContainer>
  );
};

export default Figures;
