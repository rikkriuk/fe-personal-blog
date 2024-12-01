import React from "react";
import DetailBlogContainer from "../containers/DetailBlogContainer";
import HeadComponent from "../components/HeadComponent";

const DetailPage = () => {
   return (
      <main className="detail-page">
         <HeadComponent
            title={"Blog Detail Post - My Blog"}
            description={"Read detailed information about blog post."}
            keywords={"blog post, blog details"}
         />
         <DetailBlogContainer />
      </main>
   )
}

export default DetailPage;