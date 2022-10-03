import Hero from "./Hero";
import Header from "./Header";
import SubHero from "./SubHero";
import Features from "./Features";
import SubFeatures from "./SubFeatures";
import Footer from "./Footer";
import React from "react";


function HomeScreen(props) {
    return(
        <div>
            <Header />
             <Hero />
             <SubHero />
             <Features />
            <SubFeatures />
            <Footer />
        </div>

    );
    
}

export default HomeScreen;