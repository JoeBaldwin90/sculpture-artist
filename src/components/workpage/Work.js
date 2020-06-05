import React, { Fragment } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./WorkTransitionStyles.scss";

import colors from "../../theme/Colors";
import Footer from "../footer/Footer";
import Figures from "./Figures";
import Portraits from "./Portraits";
import Commercial from "./Commercial";
import { WorkNav, WorkLinks, StyledLink, Container } from "./WorkStyles";

const activeStyles = {
  color: `${colors.coffeeCupBlue}`,
};

const Work = ({ location }) => {
  return (
    <Fragment>
      <Container>
        <WorkNav>
          <WorkLinks>
            {["figurative", "portrait", "commercial"].map((link, i) => (
              <li key={i}>
                <StyledLink
                  exact
                  to={`/work/${link}`}
                  activeStyle={activeStyles}
                >
                  {link}
                </StyledLink>
              </li>
            ))}
          </WorkLinks>
        </WorkNav>
        <TransitionGroup className='transition-group'>
          <CSSTransition
            key={location.key}
            timeout={{ enter: 300, exit: 100 }}
            classNames='fade'
          >
            <Switch>
              <Route exact path='/work/figurative' component={Figures} />
              <Route exact path='/work/portrait' component={Portraits} />
              <Route exact path='/work/commercial' component={Commercial} />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default withRouter(Work);
