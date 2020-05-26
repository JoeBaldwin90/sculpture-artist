import React from "react";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import GlobalStyles from "./theme/GlobalStyles";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <Route exact path='/' component={Homepage} />
      <Route exact path='/work' component={Footer} />
      <Route exact path='/contact' component={Footer} />
    </Router>
  );
};

export default App;
