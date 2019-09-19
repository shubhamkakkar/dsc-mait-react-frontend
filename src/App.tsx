import React from 'react';
import {
    Events,
    Footer,
    NavBar,
    LandingPage,
    Team,
    TechnologiesWeWillTeach
} from "./container"
import Grid from "@material-ui/core/Grid";

const App: React.FC = () => {
    return (
        <React.Fragment>
            <LandingPage/>
            <NavBar/>
            <TechnologiesWeWillTeach/>
            <Events/>
            <Team/>
            <Footer/>
        </React.Fragment>
    );
};

export default App;
