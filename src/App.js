import React from "react";
import Homepage from "./components/homepage/Homepage";
import NavBar from "./components/navbar/NavBar";
import Contact from "./components/contact/Contact";
import Work from "./components/workpage/Work";
import GlobalStyles from "./theme/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/work' component={Work} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
