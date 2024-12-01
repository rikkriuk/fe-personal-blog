import React from "react";
import HeroComponent from "../components/HeroComponent";
import AboutUserComponent from "../components/AboutUserComponent";
import HeadComponent from "../components/HeadComponent";

const AboutPage = () => {
   return (
      <main>
         <HeadComponent
            title="About - My Blog"
            description="Learn more about the mission and vision of My Blog."
            keywords="about, blog, mission, vision"
         />
         <HeroComponent text={"John Doe"} />
         <AboutUserComponent  />
      </main>
   )
}

export default AboutPage;