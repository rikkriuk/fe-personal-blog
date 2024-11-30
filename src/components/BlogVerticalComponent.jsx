import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { useSelector } from "react-redux";

const BlogVerticalComponent = () => {
   const { theme } = useSelector((state) => state);

   return (
      <div className="w-full">
         <img src="https://letsenhance.io/static/a31ab775f44858f1d1b80ee51738f4f3/11499/EnhanceAfter.jpg" alt="image" className="w-full h-[228px] object-cover" />

         <div className="mt-6">
            <span className="text-[#6941C6] text-sm font-semibold">Olivia Rhye • 1 Jan 2023</span>

            <div className="flex justify-between my-5">
               <h3 className={`${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"} text-2xl font-semibold`}>UX review presentations</h3>
               <div className="rotate-45">
                  <FaArrowUp className="text-black" size={24} />
               </div>
            </div>

            <p className={`${theme === "light" ? "text-[#667085]" : "text-[#C0C5D0]"} text-base font-normal line-clamp-3`}>
            How do you create compelling presentations that wow your colleagues and impress your managers?
            </p>

            <div className="mt-5 flex gap-2">
               <span className="text-[#6941C6] bg-[#F9F5FF] text-sm font-medium rounded-full px-4 py-1">Design</span>
               <span className="text-[#3538CD] bg-[#EEF4FF] text-sm font-medium rounded-full px-4 py-1">Research</span>
               <span className="text-[#C11574] bg-[#FDF2FA] text-sm font-medium rounded-full px-4 py-1">Presentation</span>
            </div>
         </div>
      </div>
   )
}

export default BlogVerticalComponent;