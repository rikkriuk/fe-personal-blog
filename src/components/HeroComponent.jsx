import React from "react";
import { useSelector } from "react-redux";

const HeroComponent = () => {
   const { theme } = useSelector((state) => state);
   console.log(theme);
   return (
      <section className="border-t-2 border-b-2 border-gray-300">
         <h2 className={`${theme === "light" ? "text-primary-color" : "text-white"} font-bolf text-justify w-full text-[16.5vw] whitespace-nowrap`}>
            THE BLOG
         </h2>
      </section>

   )
}

export default HeroComponent;