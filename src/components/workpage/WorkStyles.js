import styled from "styled-components";

export const GalleryContainer = styled.section`
  padding: 62px 1em;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 1em;
`;

export const Image = styled.img`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const ProjectBlock = styled.div`
  grid-column: 2 / span 10;
`;

export const FlexBox = styled.div`
  display: flex;
`;
