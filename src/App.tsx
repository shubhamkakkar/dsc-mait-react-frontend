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
    <>
      <NavBar />
      <LandingPage />
      <TechnologiesWeWillTeach />
      <Events />
      <Team />
      <Footer />
    </>

  );
};

export default App;
