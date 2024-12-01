import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogVerticalComponent from "../components/BlogVerticalComponent";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { fetchAllBlogs } from "../redux/async/blogSlice";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NotFoundComponent from "../components/NotFoundComponent";

const AllBlogContainer = ({ sumItem = 6, preview = false }) => {
   const [page, setPage] = useState(1);  // Add page state
   const { blogs, loading, error } = useSelector((state) => state.blogs);
   const { theme } = useSelector((state) => state.theme);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchAllBlogs(page));
   }, [page, dispatch]);

   const handleNextPage = () => {
      setPage((prevPage) => (prevPage === 5 ? 1 : prevPage + 1));
   };

   const handlePreviousPage = () => {
      setPage((prevPage) => (prevPage === 1 ? 5 : prevPage - 1));
   };

   if (error) return <NotFoundComponent text="Something went wrong!" />;

   return (
      <section className="py-5">
         <h2 className={`text-2xl my-10 font-semibold ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>All blog posts</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-b pb-10">
            {blogs?.map((blog, index) => {
               if (index < sumItem) {
                  return <BlogVerticalComponent key={blog.key} blogs={blog} loading={loading} /> 
               }
               return null
            })}
         </div>

         <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between mt-10">
            {preview ? (
               <Link
                  to={"/"}
                  className={`flex gap-2 ${theme === "light" ? "text-[#667085]" : "text-[#EFEFEF]"} font-medium`}
               >
                  View More
                  <FiArrowRight className="text-2xl" />
               </Link>
            ) : (
               <>
                  <button
                     onClick={handlePreviousPage}
                     className={`flex gap-2 ${theme === "light" ? "text-[#667085]" : "text-[#EFEFEF]"} font-medium`}
                  >
                     <FiArrowLeft className="text-2xl" />
                     Previous
                  </button>

                  <button
                     onClick={handleNextPage}
                     className={`flex gap-2 ${theme === "light" ? "text-[#667085]" : "text-[#EFEFEF]"} font-medium`}
                  >
                     Next
                     <FiArrowRight className="text-2xl" />
                  </button>   
               </>
            )}
         </div>
      </section>
   );
};

AllBlogContainer.propTypes = {
   sumItem: PropTypes.number,
   preview: PropTypes.bool,
};

export default AllBlogContainer;
