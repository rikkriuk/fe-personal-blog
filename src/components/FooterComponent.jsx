import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FooterComponent = () => {
   const { theme } = useSelector((state) => state.theme);

   return (
        <footer className={`flex flex-col-reverse md:flex-row items-center gap-4 py-5 ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"} text-sm mt-20 lg:mt-10`}>
            <p className="text-xl">© 2024</p>
            <ul className="flex flex-col md:flex-row items-center gap-4">
               <li>
                  <Link to={"/"} className="text-xl font-normal">Twitter</Link>
               </li>
               <li>
                  <Link to={"/"} className="text-xl font-normal">LinkedIn</Link>
               </li>
               <li>
                  <Link to={"/"} className="text-xl font-normal">Email</Link>
               </li>
               <li>
                  <Link to={"/"} className="text-xl font-normal">RSS feed</Link>
               </li>
               <li>
                  <Link to={"/"} className="text-xl font-normal">Add to Feedly</Link>
               </li>
            </ul>
        </footer>
    )
}

export default FooterComponent;