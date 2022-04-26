import React from "react";

//COMPONENTS
import Hero from './sections/hero';
import Separate from './sections/separate';
import Section1 from "./sections/section1";
import Section2 from "./sections/section2";
import Section3 from "./sections/section3";
import Section4 from "./sections/section4";
import Separate2 from './sections/separate2';
import Section5 from "./sections/section5";

function Home() {
    return (
      <>
        <Hero />        
        {/* SEPARATE */}
        <Separate />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        {/* SEPARATE */}
        <Separate2 />
        <Section5 />
      </>
    );
  }
  
  export default Home;
  