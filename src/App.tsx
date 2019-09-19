import React from 'react';
import {
  Events,
  Footer,
  NavBar,
  LandingPage,
  Team,
  TechnologiesWeWillTeach
} from "./container"
const App: React.FC = () => {
  return (
    <React.Fragment>
      <LandingPage />
      <TechnologiesWeWillTeach />
      <Events />
      <Team />
      <Footer />
    </React.Fragment>

  );
};

export default App;
