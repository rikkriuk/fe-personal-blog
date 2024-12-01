import React from "react";
import NewsletterComponent from "../components/NewsletterComponent";
import AllBlogContainer from "../containers/AllBlogContainer";
import HeadComponent from "../components/HeadComponent";

const NewsletterPage = () => {
   return (
      <main>
         <HeadComponent
            title="Newsletter - My Blog"
            description="Stay updated with the latest news and articles from My Blog."
            keywords="newsletter, blog updates, latest news"
         />
         <NewsletterComponent />
         <AllBlogContainer sumItem={3} preview={true} />
      </main>
   )
}

export default NewsletterPage;