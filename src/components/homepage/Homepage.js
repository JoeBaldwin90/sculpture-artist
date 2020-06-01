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
              One quick fox jumped over a lake. Try it. One quick fox jumped
              over a lake. Try it. One quick fox jumped over a lake. Try it. One
              quick fox jumped over a lake. Try it.
            </p>
            <p>
              One quick fox jumped over a lake. Try it. One quick fox jumped
              over a lake. Try it. One quick fox jumped over a lake. Try it. One
              quick fox jumped over a lake. Try it. One quick fox jumped over a
              lake. Try it. One quick fox jumped over a lake. Try it.
            </p>
          </div>
        </ContentWide>

        <ContentTall>
          <Image src={wip} inView={true} />
          <p>
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
            ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </ContentTall>
      </MainGrid>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
