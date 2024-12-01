import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

const HeroComponent = ({ text }) => {
   const { theme } = useSelector((state) => state.theme);

   return (
      <section className="border-t-2 border-b-2 border-gray-300 flex overflow-hidden">
         <h2 className={`${theme === "light" ? "text-primary-color" : "text-white"} font-bolf text-center w-full text-[16.5vw] whitespace-nowrap`}>
            {text}
         </h2>
      </section>

   )
}

// Props validation
HeroComponent.propTypes = {
   text: PropTypes.string.isRequired,
}

export default HeroComponent;