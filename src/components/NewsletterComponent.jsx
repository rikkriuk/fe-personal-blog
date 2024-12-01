import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsletterComponent = () => {
   const { theme } = useSelector((state) => state.theme);

   return (
      <section className="flex justify-center flex-col items-center">
         <span className="text-[#7F56D9] font-semibold">Newlatters</span>
         <h2 className={`text-5xl text-center font-semibold my-5 ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>Stories and interviews</h2>
         <p className={`w-full lg:w-full xl:w-[60%] text-center ${theme === "light" ? "text-primary-color" : "text-[#C0C5D0]"} font-normal text-xl`}>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>

         <form className="mt-5 flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-0 lg:gap-5">
               <input type="email" placeholder="Enter your email" className="w-96 border text-[#667085] focus:outline-none border-[#C0C5D0] rounded-md p-2 px-4 my-5 text-base" />
               <button className="bg-[#7F56D9] text-white py-2 px-4 text-base font-medium rounded-md">Subscribe</button>
            </div>
            <p className={`text-sm text-center lg:text-start ${theme === "light" ? "text-primary-color" : "text-[#C0C5D0]"}`}>We care about your data in our <Link to="/" className="underline">privacy policy</Link></p>
         </form>
      </section>
   )
}

export default NewsletterComponent;