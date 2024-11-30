import React from "react";
import { useSelector } from "react-redux";
import BlogVerticalComponent from "../components/BlogVerticalComponent";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const AllBlogContainer = () => {
   const { theme } = useSelector((state) => state);

   return (
      <section className="py-5">
         <h2 className={`text-2xl my-10 font-semibold ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>All blog posts</h2>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-b pb-10">
            {Array.from({ length: 6}).map((_, index) => {
               return <BlogVerticalComponent key={index} />
            })}
         </div>

         <div className="flex flex-col items-center gap-5 md:flex-row md:justify-between mt-10">
            <button className={`flex gap-2 ${theme === "light" ? "text-[#667085]" : "text-[#EFEFEF]"} font-medium`}>
               <FiArrowLeft className="text-2xl" />
               Previous
            </button>

            <button className={`flex gap-2 ${theme === "light" ? "text-[#667085]" : "text-[#EFEFEF]"} font-medium`}>
               Next
               <FiArrowRight className="text-2xl" />
            </button>
         </div>
      </section>
   )
}

export default AllBlogContainer;