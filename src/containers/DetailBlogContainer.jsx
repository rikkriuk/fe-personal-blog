import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogVerticalComponent from "../components/BlogVerticalComponent";
import DetailBlogComponent from "../components/DetailBlogComponent";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogsDetail, fetchRecentBlogs } from "../redux/async/blogSlice";
import NotFoundComponent from "../components/NotFoundComponent";

const DetailBlogContainer = () => {
   const { year, month, day, slug } = useParams();
   const { blogDetail, blogs, loading, error } = useSelector((state) => state.blogs);
   const dispatch = useDispatch();

   useEffect(() => {
      const blogKey = `${year}/${month}/${day}/${slug}`;
      dispatch(fetchBlogsDetail(blogKey));
      dispatch(fetchRecentBlogs());
   }, [dispatch, year, month, day, slug]);

   if (error || !blogDetail) return <NotFoundComponent text="Blog not found" />;

   return (
      <section className="grid grid-cols-1 md:grid-cols-[3fr_7fr] gap-10 mt-10">
         <div className="mt-16 order-2 md:order-1 flex flex-col gap-10">
            {blogs?.map((blog, index) => {
               if (index < 4) {
                  return <BlogVerticalComponent key={blog.key} blogs={blog} loading={loading} />;
               }
                  return null;
            })}
         </div>
         <div className="order-1 md:order-2">
            <DetailBlogComponent blogDetail={blogDetail} loading={loading} />
         </div>
      </section>
   )
}

export default DetailBlogContainer;