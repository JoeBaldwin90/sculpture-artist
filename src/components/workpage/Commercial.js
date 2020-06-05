import React from "react";
import { GalleryContainer, Image, ProjectBlock, FlexBox } from "./FigureStyles";

import ant from "../../images/ant.png";
import claudia from "../../images/claudia.png";
import reba from "../../images/reba.png";
import hardwell from "../../images/hardwell.png";

const Commercial = () => {
  return (
    <GalleryContainer>
      <ProjectBlock>
        <FlexBox>
          <div style={{ width: "60%" }}>
            <Image
              src={ant}
              style={{ height: "100%", paddingRight: ".5em" }}
            />
          </div>
          <div style={{ width: "40%" }}>
            <Image src={claudia} style={{ height: "100%" }} />
          </div>
        </FlexBox>
      </ProjectBlock>
      <ProjectBlock>
        <FlexBox>
          <div style={{ width: "40%" }}>
            <Image
              src={reba}
              style={{ height: "100%", paddingRight: ".5em" }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <Image src={hardwell} style={{ height: "100%" }} />
          </div>
        </FlexBox>
      </ProjectBlock>
    </GalleryContainer>
  );
};

export default Commercial;
