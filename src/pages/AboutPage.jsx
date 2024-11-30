import React from "react";
import HeroComponent from "../components/HeroComponent";
import AboutUserComponent from "../components/AboutUserComponent";

const AboutPage = () => {
   return (
      <main>
         <HeroComponent text={"John Doe"} />
         <AboutUserComponent  />
      </main>
   )
}

export default AboutPage;