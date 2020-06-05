import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import colors from "../../theme/Colors";
import Footer from "../footer/Footer";
import Figures from "./Figures";
import Portraits from "./Portraits";
import Commercial from "./Commercial";
import { WorkNav, WorkLinks, StyledLink } from "./WorkStyles";

const activeStyles = {
  color: `${colors.coffeeCupBlue}`,
};

const Work = () => {
  return (
    <Fragment>
      <WorkNav>
        <WorkLinks>
          {["figurative", "portrait", "commercial"].map((link, i) => (
            <li key={i}>
              <StyledLink exact to={`/work/${link}`} activeStyle={activeStyles}>
                {link}
              </StyledLink>
            </li>
          ))}
        </WorkLinks>
      </WorkNav>
      <Switch>
        <Route exact path='/work/figurative' component={Figures} />
        <Route exact path='/work/portrait' component={Portraits} />
        <Route exact path='/work/commercial' component={Commercial} />
      </Switch>
      <Footer />;
    </Fragment>
  );
};

export default Work;
