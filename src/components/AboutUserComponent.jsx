import React from "react";
import { useSelector } from "react-redux";

const AboutUserComponent = () => {
   const { theme } = useSelector((state) => state.theme);

   return (
      <section className="flex flex-col gap-10 md:gap-13 mt-10">
         <img
            src="https://letsenhance.io/static/03620c83508fc72c6d2b218c7e304ba5/11499/UpscalerAfter.jpg"
            alt="user"
            className="w-full object-cover"
         />

         <div>
            <h3 className={`text-2xl font-semibold ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>
               About Me
            </h3>
            <p className={`text-base mt-5 font-normal ${theme === "light" ? "text-primary-color" : "text-[#C0C5D0]"}`}>
               As a passionate and experienced UI designer, I am dedicated to creating intuitive and engaging user experiences
               that meet the needs of my clients and their users. I have a strong understanding of design principles and a
               proficiency in design tools, and I am comfortable working with cross-functional teams to bring projects to fruition.
               I am confident in my ability to create designs that are both visually appealing and functional, and I am always
               looking for new challenges and opportunities to grow as a designer.
            </p>
         </div>

         <div>
            <h3 className={`text-2xl font-semibold ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>
               Skills:
            </h3>
            <ul className="mt-5 list-disc ml-5">
               {[
                  "Extensive experience in UI design, with a strong portfolio of completed projects",
                  "Proficiency in design tools such as Adobe Creative Suite and Sketch",
                  "Excellent visual design skills, with a strong understanding of layout, color theory, and typography",
                  "Ability to create wireframes and prototypes to communicate design concepts",
                  "Strong communication and collaboration skills, with the ability to work effectively with cross-functional teams",
                  "Experience conducting user research and gathering insights to inform design decisions",
                  "Proficiency in HTML, CSS, and JavaScript",
               ].map((skill, index) => (
                  <li
                     key={index}
                     className={`text-base font-normal ${
                        theme === "light" ? "text-primary-color" : "text-[#C0C5D0]"
                     }`}
                  >
                     {skill}
                  </li>
               ))}
            </ul>
         </div>

         <div>
            <h3 className={`text-2xl font-semibold ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>
               Experience:
            </h3>
            <ul className="mt-5 list-disc ml-5">
               {[
                  "5 years of experience as a UI designer, working on a variety of projects for clients in the tech and retail industries",
                  "Led the design of a successful e-commerce website, resulting in a 25% increase in online sales",
                  "Created wireframes and prototypes for a mobile banking app, leading to a 20% increase in app usage",
                  "Conducted user research and usability testing to inform the redesign of a healthcare provider's website, resulting in a 15% increase in website traffic",
               ].map((experience, index) => (
                  <li
                     key={index}
                     className={`text-base font-normal ${
                        theme === "light" ? "text-primary-color" : "text-[#C0C5D0]"
                     }`}
                  >
                     {experience}
                  </li>
               ))}
            </ul>
         </div>

         <div>
            <h3 className={`text-2xl font-semibold ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>
               Education:
            </h3>
            <ul className="mt-5 list-disc ml-5">
               {["Bachelor's degree in Graphic Design", "Certified User Experience Designer (CUED)"].map((education, index) => (
                  <li
                     key={index}
                     className={`text-base font-normal ${
                        theme === "light" ? "text-primary-color" : "text-[#C0C5D0]"
                     }`}
                  >
                     {education}
                  </li>
               ))}
            </ul>
         </div>
      </section>
   );
};

export default AboutUserComponent;
