import React from "react";
import NewsletterComponent from "../components/NewsletterComponent";
import AllBlogContainer from "../containers/AllBlogContainer";

const NewsletterPage = () => {
   return (
      <main>
         <NewsletterComponent />
         <AllBlogContainer sumItem={3} preview={true} />
      </main>
   )
}

export default NewsletterPage;