import React from "react";
import NewsletterComponent from "../components/NewsletterComponent";
import AllBlogContainer from "../containers/AllBlogContainer";

const NewsletterPage = () => {
   return (
      <main>
         <NewsletterComponent />
         <AllBlogContainer />
      </main>
   )
}

export default NewsletterPage;