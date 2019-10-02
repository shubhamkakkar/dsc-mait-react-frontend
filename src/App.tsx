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
    const scrollToRef = React.useRef<HTMLDivElement>(null);
    // @ts-ignore
    const scrollTo = () => scrollToRef.current.scrollIntoView({behavior: "smooth"});
    return (
        <React.Fragment>
            <LandingPage {...{scrollTo}} />
            <TechnologiesWeWillTeach ref={scrollToRef}/>
            <Events/>
            <Team/>
            <Footer/>
        </React.Fragment>
    );
};

export default App;
