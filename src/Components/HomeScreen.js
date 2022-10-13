import Hero from "./Hero";
import SubHero from "./SubHero";
import Features from "./Features";
import SubFeatures from "./SubFeatures";
import React from "react";


function HomeScreen(props) {
    return(
        <React.Fragment>

             <Hero />
             <SubHero />
             <Features />
            <SubFeatures />
        
        </React.Fragment>

    );
    
}

export default HomeScreen;