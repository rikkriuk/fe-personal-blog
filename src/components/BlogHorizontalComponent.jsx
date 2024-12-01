import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import PropTypes from "prop-types";

const BlogHorizontalComponent = ({ blogs, loading }) => {
   const { theme } = useSelector((state) => state.theme);

   // Schema JSON-LD
   const blogSchema = blogs && !loading ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": blogs?.title,
      "image": blogs?.thumb,
      "author": {
         "@type": "Person",
         "name": blogs?.author || "Anonymous"
      },
      "datePublished": blogs?.time,
      "description": blogs?.desc || "No description available",
      "articleSection": blogs?.tag || "Uncategorized",
      "url": `/blog/${blogs?.key}`,
   } : null;

   return (
      <section className="block md:flex gap-10">
         <div className="w-full md:w-1/2">
            {loading ? (
               <Skeleton height={200} className="w-full" />
            ) : (
               <img src={blogs?.thumb} alt={blogs?.title} className="w-full h-full object-cover" />
            )}
         </div>

         <div className="mt-6 md:mt-0 w-full md:w-1/2">
            <span className="text-[#6941C6] text-sm font-semibold">
               {loading ? (
                  <Skeleton width={120} height={20} />
               ) : (
                  `${blogs?.author} • ${blogs?.time}`
               )}
            </span>

            <div className="my-5">
               <Link
                  to={`blog/${blogs?.key}`}
                  className={`${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"} text-2xl line-clamp-2 font-semibold`}
               >
                  {loading ? (
                     <Skeleton width={200} height={30} />
                  ) : (
                     `${blogs?.title}`
                  )}
               </Link>
            </div>

            <p className={`${theme === "light" ? "text-[#667085]" : "text-[#C0C5D0]"} text-base font-normal line-clamp-3`}>
               {loading ? (
                  <Skeleton count={3} width="100%" height={15} />
               ) : (
                  `${blogs?.desc}`
               )}
            </p>

            <div className="mt-5 flex gap-2">
               {loading ? (
                  <Skeleton width={80} height={25} />
               ) : (
                  <span className="text-[#C11574] bg-[#FDF2FA] text-sm font-medium rounded-full px-4 py-1">{blogs?.tag}</span>
               )}
            </div>
         </div>

         {/* Schema */}
         {!loading && blogSchema && (
            <script type="application/ld+json">
               {JSON.stringify(blogSchema)}
            </script>
         )}
      </section>
   );
};

BlogHorizontalComponent.propTypes = {
   blogs: PropTypes.object,
   loading: PropTypes.bool,
};

export default BlogHorizontalComponent;
