import styled from "styled-components";

export const Image = styled.img.attrs((props) => ({
         src: props.src,
         alt: props.alt,
       }))`
  width: ${(props) => props.width};
  margin-bottom: 3em;
  opacity: ${(props) => (props.inView ? 1 : 0)};
  transition: opacity 1s ease;
   @media (max-width: 425px) {
    margin-bottom: 2em;
   }
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

  @media (max-width: 425px) {
    margin-bottom: 2em;

    div {
      display: block;
      p {
        width: 100%;
        text-align: justify;
        line-height: 1.2;
        margin-bottom: 1em;
      }
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

  @media (max-width: 425px) {
    display: block;

    img {
      width: 100%;
      margin-right: 0;
    }

    p {
      text-align: justify;
      line-height: 1.2;
    }
  }
`;
