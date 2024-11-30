import React from "react";
import BlogVerticalComponent from "../components/BlogVerticalComponent";
import BlogHorizontalComponent from "../components/BlogHorizontalComponent";
import { useSelector } from "react-redux";

const RecentBlogContainer = () => {
   const { theme } = useSelector((state) => state);

   return (
      <section className="py-5">
         <h2 className={`text-2xl my-10 font-semibold ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>Recent blog posts</h2>
         <div className="flex gap-10 flex-col xl:flex-row">
            <BlogVerticalComponent />
            <div className="w-full flex flex-col gap-9">
               <BlogHorizontalComponent />
               <BlogHorizontalComponent />
            </div>
         </div>
      </section>
   )
}

export default RecentBlogContainer;