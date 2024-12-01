import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";
import { setLoading, setTimeoutSuccess, subscribe } from "../redux/async/subscribeSlice";

const NewsletterComponent = () => {
   const { theme } = useSelector((state) => state.theme);
   const { loading, success } = useSelector((state) => state.subscribe || {});
   const [email, setEmail] = useState("");
   const dispatch = useDispatch();

   // Function to handle input changes
   const handleChange = (e) => {
      const clean = DOMPurify.sanitize(e.target.value);
      setEmail(clean);
   }

   // Function to handle form submission
   const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch(setLoading(true));
    
      try {
        await dispatch(subscribe({ email }));
        dispatch(setTimeoutSuccess());
      } catch (error) {
        console.error("Error subscribing:", error);
      } finally {
        dispatch(setLoading(false));
      }
    
      setEmail("");
    };
    
   return (
      <section className="flex justify-center flex-col items-center">
         <span className="text-[#7F56D9] font-semibold">Newlatters</span>
         <h2 className={`text-5xl text-center font-semibold my-5 ${theme === "light" ? "text-primary-color" : "text-[#FFFFFF]"}`}>Stories and interviews</h2>
         <p className={`w-full lg:w-full xl:w-[60%] text-center ${theme === "light" ? "text-primary-color" : "text-[#C0C5D0]"} font-normal text-xl`}>Subscribe to learn about new product features, the latest in technology, solutions, and updates.</p>

         <form onSubmit={handleSubmit} className="mt-5 flex flex-col">
            <div className="flex flex-col md:flex-row items-center gap-0 lg:gap-5">
               <input type="email" value={email} onChange={handleChange} placeholder="Enter your email" className={`w-96 border text-[#667085] focus:outline-none border-[#C0C5D0] rounded-md p-2 px-4 my-5 text-base ${loading && "cursor-wait"}`}  disabled={loading} required />
               <button type="submit" className={`bg-[#7F56D9] text-white py-2 px-4 text-base font-medium rounded-md ${loading && "cursor-wait"}`} disabled={loading}>Subscribe</button>
            </div>
            {success && <p className="text-green-700 text-center lg:text-start my-2 text-sm">Subscribed successfully!</p>}
            <p className={`text-sm text-center lg:text-start ${theme === "light" ? "text-primary-color" : "text-[#C0C5D0]"}`}>We care about your data in our <Link to="/" className="underline">privacy policy</Link></p>
         </form>
      </section>
   )
}

export default NewsletterComponent;