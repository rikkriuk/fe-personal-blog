import React, { useEffect } from "react";
import BlogVerticalComponent from "../components/BlogVerticalComponent";
import BlogHorizontalComponent from "../components/BlogHorizontalComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecentBlogs } from "../redux/async/blogSlice";

const RecentBlogContainer = () => {
   const { blogs, loading, error } = useSelector((state) => state.blogs);
   const { theme } = useSelector((state) => state.theme);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchRecentBlogs())
   }, [])

   const selectedBlogs = blogs.filter((_, index) => index >= 0 && index <= 3);
   return (
      <section className="py-5">
         <h2 className={`text-2xl my-10 font-semibold ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>Recent blog posts</h2>
         <div className="flex gap-10 flex-col">
            <div className="flex flex-col gap-10 xl:flex-row">
               <BlogVerticalComponent blogs={selectedBlogs[0]} loading={loading} />
               <div className="w-full flex flex-col gap-9">
                  <BlogHorizontalComponent blogs={selectedBlogs[1]} loading={loading} />
                  <BlogHorizontalComponent blogs={selectedBlogs[2]} loading={loading} />
               </div>
            </div>
            <BlogVerticalComponent type={"horizontal"} blogs={selectedBlogs[3]} loading={loading} />
         </div>
      </section>
   )
}

export default RecentBlogContainer;