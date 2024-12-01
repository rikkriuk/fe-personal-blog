import React from "react";
import NewsletterComponent from "./NewsletterComponent";
import PropTypes from "prop-types";
import DOMPurify from 'dompurify';
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"

const styles = [
   "text-[#6941C6] bg-[#F9F5FF]",
   "text-[#3538CD] bg-[#EEF4FF]",
   "text-[#C11574] bg-[#FDF2FA]",
];

const DetailBlogComponent = ({ blogDetail, loading }) => {
   const cleanHTML = DOMPurify.sanitize(blogDetail?.content);

   const getRandomStyle = () => styles[Math.floor(Math.random() * styles.length)];

   return (
      <section>
         <span className="text-[#6941C6]">
            {loading ? <Skeleton width={150} className="skeleton-shimmer" /> : blogDetail?.date}
         </span>
         
         <h2 className="text-4xl font-bold my-5">
            {loading ? <Skeleton height={40} className="w-full skeleton-shimmer" /> : blogDetail?.title}
         </h2>

         <div className="flex gap-4 my-5">
            {loading ? (
               <Skeleton width={100} height={30} className="skeleton-shimmer" />
            ) : (
               blogDetail?.categories.map((category, index) => (
                  <span key={index} className={`${getRandomStyle()} text-sm font-medium rounded-full px-4 py-1`}>
                     {category}
                  </span>
               ))
            )}
         </div>

         <div>
            {loading ? (
               <>
                  <Skeleton height={400} className="w-full my-4 skeleton-shimmer" />
                  <Skeleton count={3} height={15} className="skeleton-shimmer" />
                  <Skeleton height={400} className="w-full my-4 skeleton-shimmer" />
                  <Skeleton count={5} height={15} className="skeleton-shimmer" />
               </>
            ) : (
               cleanHTML && <div className="blog-detail-content" dangerouslySetInnerHTML={{ __html: cleanHTML }} />
            )}
         </div>

         <div className="mt-24 mb-5">
            {loading ? <Skeleton height={200} className="w-full skeleton-shimmer" /> : <NewsletterComponent />}
         </div>
      </section>
   );
}

DetailBlogComponent.propTypes = {
   blogDetail: PropTypes.object.isRequired,
   loading: PropTypes.bool.isRequired,
}

export default DetailBlogComponent;
