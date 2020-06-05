import styled from "styled-components";

export const GalleryContainer = styled.section`
  padding: 1em 1em 5em 1em;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0.5em;
`;

export const Image = styled.img`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ProjectBlock = styled.div`
  grid-column: 2 / span 10;

  @media (max-width: 425px) {
    grid-column: span 12;
  }
`;

export const FlexBox = styled.div`
  display: flex;

  @media (max-width: 425px) {
    display: block;
    div {
      width: 100% !important;
      img {
        padding-right: 0 !important;
        padding-left: 0 !important;
        padding-bottom: 0.5em !important;
        width: 100% !important;
      }
    }
  }
`;
