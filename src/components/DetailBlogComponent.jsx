import React from "react";
import NewsletterComponent from "./NewsletterComponent";

const DetailBlogComponent = () => {
   return (
      <section>
         <span className="text-[#6941C6]">Sunday, 1 Jan 2023</span>
         <h2 className="text-4xl font-bold my-5">Grid system for better Design User Interface</h2>

         <div>
            <img src="https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg" alt="gamber" className="w-full object-cover" />
         </div>

         <div className="mt-10">
            <p className="font-normal text-base text-primary-color">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>

            <p className="font-normal text-base text-primary-color mt-5">A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.</p>
         </div>

         <div className="mt-24 mb-5">
            <NewsletterComponent />
         </div>
      </section>
   )
}

export default DetailBlogComponent;