import React from "react";
import { useSelector } from "react-redux";

const BlogHorizontalComponent = () => {
   const { theme } = useSelector((state) => state);

   return (
      <section className="block md:flex gap-10">
         <img src="https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg" className="w-[320px] h-[200px] object-cover" alt="image" />

         <div className="mt-6 md:mt-0">
            <span className="text-[#6941C6] text-sm font-semibold">Phoenix Baker • 1 Jan 2023</span>

            <h3 className={`${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"} text-2xl my-5 font-semibold`}>Migrating to Linear 101</h3>

            <p className={`${theme === "light" ? "text-[#667085]" : "text-[#C0C5D0]"} text-base font-normal line-clamp-3`}>
            Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...
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