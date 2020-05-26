import styled from "styled-components";
// import colors from "../../theme/Colors";
import hannah from "../../images/hannah.png";
import wip from "../../images/head.png";

export const HannahImage = styled.img.attrs({
  src: hannah,
  alt: "Hannah Farrow sculpture artist in action",
})`
  width: 100%;
  margin-bottom: 3em;
`;

export const WIPImage = styled.img.attrs({
  src: wip,
  alt: "Hannah Farrow sculpture artist in action",
})`
  width: 50%;
`;

export const MainGrid = styled.main`
  max-width: 1080px;
  padding: 6em 1em 0em 1em;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2em;
  grid-auto-flow: dense;
  margin: 0 auto;
  margin-bottom: 5em;
`;

export const ContentWide = styled.div`
  grid-column: span 12;
  margin-bottom: 4em;
  div {
    display: flex;
    justify-content: space-between;
    p {
      width: calc(50% - 1em);
    }
  }
`;

export const ContentTall = styled.div`
  grid-column: span 12;
  margin-bottom: 4em;
  display: flex;
  flex-direction: row;
  align-items: center;
  img {
    width: 50%;
    margin-right: 2em;
  }
`;
