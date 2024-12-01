import React from "react";
import BlogVerticalComponent from "../components/BlogVerticalComponent";
import DetailBlogComponent from "../components/DetailBlogComponent";

const DetailBlogContainer = () => {
   return (
      <section className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-10 mt-10">
         <div className="mt-16 order-2 md:order-1">
            <BlogVerticalComponent />
         </div>
         <div className="order-1 md:order-2">
            <DetailBlogComponent />
         </div>
      </section>
   )
}

export default DetailBlogContainer;