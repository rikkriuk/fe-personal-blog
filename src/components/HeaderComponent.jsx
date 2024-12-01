import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../redux/slices/themeSlice";

const HeaderComponent = () => {
   const [isOpen, setIsOpen] = useState(false);
   const { theme } = useSelector((state) => state.theme);
   const dispatch = useDispatch();

   // Function to close/open the menu
   const handleOpen = () => {
      setIsOpen(!isOpen);
   };
   
   // Function to close the menu when a link is clicked
   const handleLink = () => {
      setIsOpen(false);
   };

   return (
        <header className={`flex justify-between items-center py-10 ${theme === "light" ? "bg-white" : "bg-dark"}`}>
            <h1 className={`text-2xl font-semibold ${theme === "light" ? "text-primary-color" : "text-white"}`}>LumosBlog</h1>

            <button className={`md:hidden xl:hidden ${theme === "light" ? "text-primary-color" : "text-white"}`} onClick={handleOpen}>
               <FiMenu size={24} />
            </button>
            
            <nav className={`bg-dark ${theme === "light" ? "md:bg-white" : "bg-dark"} md:static fixed left-0 right-0 top-0 bottom-0 md:translate-x-0 ${isOpen ? "translate-x-0" : "translate-x-[800px]"} flex items-center flex-col justify-center md:flex-row gap-10`}>
               <ul className="flex flex-col md:flex-row items-center gap-5">
                  <button className="absolute right-7 top-10 transition duration-150 hover:text-red-500 md:hidden xl:hidden text-white" onClick={handleOpen}>
                     <FaTimes size={24} />
                  </button>

                  <Link to={"https://www.instagram.com/amiyourkey/"} className="text-white md:hidden md:text-primary-color mb-4 font-medium">John Doe</Link>

                  <li>
                     <Link onClick={handleLink} className={`text-white ${theme === "light" ? "md:text-primary-color" : "md:text-white"} text-sm p-2 transition duration-500 ease-in-out hover:text-gray-900`} to={"/"}>
                     Blog
                     </Link>
                  </li>
                  <li>
                     <Link onClick={handleLink} className={`text-white ${theme === "light" ? "md:text-primary-color" : "md:text-white"} text-sm p-2 transition duration-500 ease-in-out hover:text-gray-900`} to={"/about"}>About</Link>
                  </li>
                  <li>
                     <Link onClick={handleLink} className={`text-white ${theme === "light" ? "md:text-primary-color" : "md:text-white"} text-sm p-2 transition duration-500 ease-in-out hover:text-gray-900`} to={"/newsletter"}>Newsletter</Link>
                  </li>

                  {theme === "light" ? (
                     <button className="border-2 rounded-full" onClick={() => dispatch(setTheme("dark"))}><svg width="96" height="40" viewBox="0 0 96 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="96" height="40" rx="20" fill="#090D1F"/>
                        <path d="M28 27.25C24 27.25 20.75 24 20.75 20C20.75 16 24 12.75 28 12.75C32 12.75 35.25 16 35.25 20C35.25 24 32 27.25 28 27.25ZM28 14.25C24.83 14.25 22.25 16.83 22.25 20C22.25 23.17 24.83 25.75 28 25.75C31.17 25.75 33.75 23.17 33.75 20C33.75 16.83 31.17 14.25 28 14.25Z" fill="white"/>
                        <path d="M28 30.96C27.45 30.96 27 30.55 27 30V29.92C27 29.37 27.45 28.92 28 28.92C28.55 28.92 29 29.37 29 29.92C29 30.47 28.55 30.96 28 30.96ZM35.14 28.14C34.88 28.14 34.63 28.04 34.43 27.85L34.3 27.72C33.91 27.33 33.91 26.7 34.3 26.31C34.69 25.92 35.32 25.92 35.71 26.31L35.84 26.44C36.23 26.83 36.23 27.46 35.84 27.85C35.65 28.04 35.4 28.14 35.14 28.14ZM20.86 28.14C20.6 28.14 20.35 28.04 20.15 27.85C19.76 27.46 19.76 26.83 20.15 26.44L20.28 26.31C20.67 25.92 21.3 25.92 21.69 26.31C22.08 26.7 22.08 27.33 21.69 27.72L21.56 27.85C21.37 28.04 21.11 28.14 20.86 28.14ZM38 21H37.92C37.37 21 36.92 20.55 36.92 20C36.92 19.45 37.37 19 37.92 19C38.47 19 38.96 19.45 38.96 20C38.96 20.55 38.55 21 38 21ZM18.08 21H18C17.45 21 17 20.55 17 20C17 19.45 17.45 19 18 19C18.55 19 19.04 19.45 19.04 20C19.04 20.55 18.63 21 18.08 21ZM35.01 13.99C34.75 13.99 34.5 13.89 34.3 13.7C33.91 13.31 33.91 12.68 34.3 12.29L34.43 12.16C34.82 11.77 35.45 11.77 35.84 12.16C36.23 12.55 36.23 13.18 35.84 13.57L35.71 13.7C35.52 13.89 35.27 13.99 35.01 13.99ZM20.99 13.99C20.73 13.99 20.48 13.89 20.28 13.7L20.15 13.56C19.76 13.17 19.76 12.54 20.15 12.15C20.54 11.76 21.17 11.76 21.56 12.15L21.69 12.28C22.08 12.67 22.08 13.3 21.69 13.69C21.5 13.89 21.24 13.99 20.99 13.99ZM28 11.04C27.45 11.04 27 10.63 27 10.08V10C27 9.45 27.45 9 28 9C28.55 9 29 9.45 29 10C29 10.55 28.55 11.04 28 11.04Z" fill="white"/>
                        <rect x="56" y="8" width="24" height="24" rx="12" fill="white"/>
                        </svg>
                     </button>
                  ) : (
                     <button className="border-2 rounded-full" onClick={() => dispatch(setTheme("light"))}>
                        <svg width="96" height="40" viewBox="0 0 96 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="96" height="40" rx="20" fill="white"/>
                        <rect x="16" y="8" width="24" height="24" rx="12" fill="#090D1F"/>
                        <path d="M28 27.25C24 27.25 20.75 24 20.75 20C20.75 16 24 12.75 28 12.75C32 12.75 35.25 16 35.25 20C35.25 24 32 27.25 28 27.25ZM28 14.25C24.83 14.25 22.25 16.83 22.25 20C22.25 23.17 24.83 25.75 28 25.75C31.17 25.75 33.75 23.17 33.75 20C33.75 16.83 31.17 14.25 28 14.25Z" fill="#090D1F"/>
                        <path d="M28 30.96C27.45 30.96 27 30.55 27 30V29.92C27 29.37 27.45 28.92 28 28.92C28.55 28.92 29 29.37 29 29.92C29 30.47 28.55 30.96 28 30.96ZM35.14 28.14C34.88 28.14 34.63 28.04 34.43 27.85L34.3 27.72C33.91 27.33 33.91 26.7 34.3 26.31C34.69 25.92 35.32 25.92 35.71 26.31L35.84 26.44C36.23 26.83 36.23 27.46 35.84 27.85C35.65 28.04 35.4 28.14 35.14 28.14ZM20.86 28.14C20.6 28.14 20.35 28.04 20.15 27.85C19.76 27.46 19.76 26.83 20.15 26.44L20.28 26.31C20.67 25.92 21.3 25.92 21.69 26.31C22.08 26.7 22.08 27.33 21.69 27.72L21.56 27.85C21.37 28.04 21.11 28.14 20.86 28.14ZM38 21H37.92C37.37 21 36.92 20.55 36.92 20C36.92 19.45 37.37 19 37.92 19C38.47 19 38.96 19.45 38.96 20C38.96 20.55 38.55 21 38 21ZM18.08 21H18C17.45 21 17 20.55 17 20C17 19.45 17.45 19 18 19C18.55 19 19.04 19.45 19.04 20C19.04 20.55 18.63 21 18.08 21ZM35.01 13.99C34.75 13.99 34.5 13.89 34.3 13.7C33.91 13.31 33.91 12.68 34.3 12.29L34.43 12.16C34.82 11.77 35.45 11.77 35.84 12.16C36.23 12.55 36.23 13.18 35.84 13.57L35.71 13.7C35.52 13.89 35.27 13.99 35.01 13.99ZM20.99 13.99C20.73 13.99 20.48 13.89 20.28 13.7L20.15 13.56C19.76 13.17 19.76 12.54 20.15 12.15C20.54 11.76 21.17 11.76 21.56 12.15L21.69 12.28C22.08 12.67 22.08 13.3 21.69 13.69C21.5 13.89 21.24 13.99 20.99 13.99ZM28 11.04C27.45 11.04 27 10.63 27 10.08V10C27 9.45 27.45 9 28 9C28.55 9 29 9.45 29 10C29 10.55 28.55 11.04 28 11.04Z" fill="#090D1F"/>
                        <path d="M67.9793 30.241L67.9793 30.2409L67.9722 30.2406C62.6203 30.0017 58.1504 25.686 57.7787 20.4447L57.7787 20.4442C57.4543 15.9413 60.0583 11.7296 64.2629 9.9614C64.8155 9.73167 65.191 9.72373 65.4306 9.77165C65.6701 9.81954 65.8177 9.93194 65.9002 10.0174L65.9002 10.0175L65.9064 10.0237C65.9912 10.1084 66.0995 10.2551 66.1442 10.4845C66.1887 10.713 66.1792 11.0694 65.9518 11.5899L65.9513 11.5911C65.4636 12.7149 65.2195 13.9138 65.23 15.1434C65.2518 19.8463 69.1486 23.8185 73.8985 24.0097C74.5886 24.0414 75.2652 23.9881 75.9173 23.8724L75.9194 23.872C76.5024 23.7661 76.8651 23.8384 77.0844 23.9351C77.3035 24.0317 77.4219 24.1714 77.4845 24.2729C77.5493 24.3777 77.6232 24.5483 77.6141 24.7885C77.6049 25.0286 77.5109 25.3863 77.1582 25.8625L77.1563 25.865C75.1319 28.6343 71.9128 30.2501 68.4599 30.2501C68.2875 30.2501 68.1322 30.25 67.9793 30.241ZM58.2711 20.4044L58.2712 20.4057C58.6297 25.4243 62.8995 29.5182 67.987 29.7396C71.4443 29.9073 74.7243 28.3307 76.7432 25.5757L76.7433 25.5757L76.7468 25.5707C76.9192 25.3294 77.0111 25.1411 77.0581 25.0157L77.2837 24.4141L76.6452 24.3432C76.514 24.3286 76.3031 24.3182 75.9974 24.3787C75.3054 24.5016 74.5833 24.549 73.8699 24.5205L73.8698 24.5205C68.8528 24.321 64.7492 20.1062 64.7199 15.1587C64.7201 13.8467 64.9764 12.5869 65.4965 11.4041C65.6239 11.1228 65.6527 10.9194 65.6661 10.8121L65.7363 10.2501H65.1699C65.0001 10.2501 64.7738 10.2891 64.4658 10.4194C60.4609 12.1015 57.9763 16.1191 58.2711 20.4044Z" stroke="#090D1F"/>
                     </svg>
                     </button>
                  )}

               </ul>

            </nav>
        </header>
    )
}

export default HeaderComponent;