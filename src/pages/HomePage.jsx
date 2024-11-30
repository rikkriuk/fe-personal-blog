import React from "react";
import HeroComponent from "../components/HeroComponent";
import RecentBlogContainer from "../containers/RecentBlogContainer";

const HomePage = () => {
   return (
      <main>
         <HeroComponent />
         <RecentBlogContainer />
      </main>
   )
}

export default HomePage;