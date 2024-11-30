import React from "react";
import HeroComponent from "../components/HeroComponent";
import RecentBlogContainer from "../containers/RecentBlogContainer";
import AllBlogContainer from "../containers/AllBlogContainer";

const HomePage = () => {
   return (
      <main>
         <HeroComponent />
         <RecentBlogContainer />
         <AllBlogContainer />
      </main>
   )
}

export default HomePage;