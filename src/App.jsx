import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import FooterComponent from "./components/FooterComponent";
import AboutPage from "./pages/AboutPage";
import NewsletterPage from "./pages/NewsletterPage";
import DetailPage from "./pages/DetailPage";

export default function App() {
  const { theme } = useSelector((state) => state);

  return (
    <Router>
      <div className={`xl:px-40 md:px-16 px-6 ${theme === "light" ? "bg-white" : "bg-dark"}`}>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/blog/:id" element={<DetailPage />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}
