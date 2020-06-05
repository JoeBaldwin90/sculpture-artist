import React, { Fragment, useRef, useState, useEffect } from "react";
import Hero from "../hero/Hero";
import Footer from "../footer/Footer";
import hannah from "../../images/hannah.png";
import wip from "../../images/head.png";
import { Image, MainGrid, ContentWide, ContentTall } from "./HomepageStyles";

const Homepage = () => {
  const imageRef = useRef(null);
  const [inView, setInView] = useState(false);

  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.bottom >= 0 && rect.top <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    setInView(isInView());
    return () => {
      window.removeEventListener("scroll", scrollHandler); // clean-up function
    };
  });

  return (
    <Fragment>
      <Hero />
      <MainGrid>
        <ContentWide>
          <Image src={hannah} ref={imageRef} inView={inView} width={"100%"} />
          <div>
            <p>
              I commission bespoke figurative, bust or portrait sculptures from
              my studio in London. It's my passion to craft a piece of art that
              you will love for a lifetime. I'm able to finish sculptures in
              concrete, bronze or plaster.
            </p>
            <p>
              All of my work is tailored to your style and budget. If you'd like
              me to commission a sculpture of someone you love, someone that
              inspires you or simply add to your collection, I'd love to hear
              from you. All quotes and initial consulatations are free of
              charge.
            </p>
          </div>
        </ContentWide>

        <ContentTall>
          <Image src={wip} inView={true} />
          <p>
            I'm a classically trained sculptor with over seven years experience
            working for Madame Tussauds, the world-famous waxwork franchise.
            I've been lucky enough to meet and sculpt some of the highest
            profile figures on the planet, but I embrace the intimacy and
            creative freedom of working with private clients. 
          </p>
        </ContentTall>
      </MainGrid>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
