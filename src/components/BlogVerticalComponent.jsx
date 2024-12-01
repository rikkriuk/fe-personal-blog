import PropTypes from "prop-types";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { FiArrowUp } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogVerticalComponent = ({ type, blogs, loading }) => {
   const { theme } = useSelector((state) => state.theme);

   return (
      <div className={`w-full ${type === "horizontal" && "block gap-10 mt-5 xl:flex"}`}>
         <div className={`w-full ${type === "horizontal" ? "xl:w-1/2 lg:w-1/2" : "md:w-full"}`}>
            {loading ? (
               <Skeleton height={228} className="w-full skeleton-shimmer" />
            ) : (
               <img
                  src={blogs?.thumb}
                  alt={blogs?.title}
                  className="w-full h-[228px] object-cover"
               />
            )}
         </div>

         <div className={`${type === "horizontal" ? "xl:w-1/2 lg:w-1/2" : "md:w-full"}`}>
            <span className="text-[#6941C6] text-sm font-semibold">
               {loading ? <Skeleton width={100} className="skeleton-shimmer" /> : `${blogs?.author} • ${blogs?.time}`}
            </span>

            <div className="flex justify-between my-5">
               <Link
                  to={`/blog/${blogs?.key}`}
                  className={`${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"} text-2xl font-semibold line-clamp-2 ${loading && "disable"}`}
               >
               {loading ? (
                  <Skeleton width={200} height={30} className="skeleton-shimmer" />
               ) : (
                  `${blogs?.title}`
               )}
               </Link>

               {loading ? (
                  <Skeleton height={30} className="skeleton-shimmer" />
               ): (
                  <Link to={`/blog/${blogs?.key}`} className="rotate-45">
                     <FiArrowUp className="text-black" size={24} />
                  </Link>
               )}
            </div>

            <p
               className={`${theme === "light" ? "text-[#667085]" : "text-[#C0C5D0]"} text-base font-normal ${
                  type === "horizontal" ? "line-clamp-7" : "line-clamp-3"
               }`}
            >
               {loading ? <Skeleton count={3} className="skeleton-shimmer" /> : blogs?.desc}
            </p>

            <div className="mt-5 flex gap-2">
               {loading ? (
                  <Skeleton width={80} height={32} className="rounded-full skeleton-shimmer" />
               ) : (
                  <span className="text-[#C11574] bg-[#FDF2FA] text-sm font-medium rounded-full px-4 py-1">
                     {blogs?.tag}
                  </span>
               )}
            </div>
         </div>
      </div>
   );
};

BlogVerticalComponent.propTypes = {
   type: PropTypes.string,
   blogs: PropTypes.object,
   loading: PropTypes.bool,
};

export default BlogVerticalComponent;
