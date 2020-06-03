import React from "react";
import Homepage from "./components/homepage/Homepage";
import NavBar from "./components/navbar/NavBar";
import Contact from "./components/contact/Contact";
import Work from "./components/workpage/Work";
import GlobalStyles from "./theme/GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <Route exact path='/' component={Homepage} />
      <Route exact path='/work' component={Work} />
      <Route exact path='/contact' component={Contact} />
    </Router>
  );
};

export default App;
