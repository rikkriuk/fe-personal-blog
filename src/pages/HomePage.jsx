import React from "react";
import HeroComponent from "../components/HeroComponent";
import RecentBlogContainer from "../containers/RecentBlogContainer";
import AllBlogContainer from "../containers/AllBlogContainer";
import HeadComponent from "../components/HeadComponent";

const HomePage = () => {
   return (
      <main className="main-page">
         <HeadComponent
            title="Home - My Blog"
            description="Welcome to My Blog, your go-to source for the latest articles, tips, and insights."
            keywords="home, blog, latest articles, tips"
         />
         <HeroComponent text={"THE BLOG"} />
         <RecentBlogContainer />
         <AllBlogContainer />
      </main>
   )
}

export default HomePage;