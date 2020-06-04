import React, { Fragment } from "react";
import { Switch, Route, Link } from "react-router-dom";
import Footer from "../footer/Footer";
import Figures from './Figures';

const Work = () => {
  return (
    <Fragment>
      <nav style={{ paddingTop: "100px" }}>
        <ul>
          {["figurative", "portrait", "commercial"].map((link, i) => (
            <li key={i}>
              <Link exact to={`/work/${link}`}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Switch>
        <Route exact path='/work/figurative' component={Figures} />
        {/* <Route exact path='/work/portrait' component={Portraits} />
        <Route exact path='/work/commercial' component={Commercial} /> */}
      </Switch>
      <Footer />;
    </Fragment>
  );
};

export default Work;
