import React from "react";
import { GalleryContainer, Image, ProjectBlock, FlexBox } from "./FigureStyles";

import nala from "../../images/nala.jpg";
import nala2 from "../../images/nala2.jpg";

const Portraits = () => {
  return (
    <GalleryContainer>
      <ProjectBlock>
        <FlexBox>
          <div style={{ width: "40%" }}>
            <Image
              src={nala2}
              style={{ height: "100%", paddingRight: ".5em" }}
            />
          </div>
          <div style={{ width: "60%" }}>
            <Image src={nala} style={{ height: "100%" }} />
          </div>
        </FlexBox>
      </ProjectBlock>
    </GalleryContainer>
  );
};

export default Portraits;
