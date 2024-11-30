import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BlogHorizontalComponent = () => {
   const { theme } = useSelector((state) => state);

   return (
      <section className="block md:flex gap-10">
         <div className="w-full md:w-1/2">
            <img src="https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg" className="w-full h-[200px] object-cover" alt="image" />
         </div>

         <div className="mt-6 md:mt-0 w-full md:w-1/2">
            <span className="text-[#6941C6] text-sm font-semibold">Phoenix Baker • 1 Jan 2023</span>

            <div className="my-5">
               <Link to={"/"} className={`${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"} text-2xl font-semibold`}>Migrating to Linear 101</Link>
            </div>

            <p className={`${theme === "light" ? "text-[#667085]" : "text-[#C0C5D0]"} text-base font-normal line-clamp-3`}>
            A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
            </p>

            <div className="mt-5 flex gap-2">
               <span className="text-[#027A48] bg-[#ECFDF3] text-sm font-medium rounded-full px-4 py-1">Design</span>
               <span className="text-[#C11574] bg-[#FDF2FA] text-sm font-medium rounded-full px-4 py-1">Research</span>
            </div>
         </div>
      </section>
   )
}

export default BlogHorizontalComponent;