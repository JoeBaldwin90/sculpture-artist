import React, { Fragment } from 'react';
import Hero from './components/hero/Hero';
import GlobalStyles from "./theme/GlobalStyles";

const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Hero />
    </Fragment>
  );
}

export default App;
