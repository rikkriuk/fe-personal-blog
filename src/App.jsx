import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import FooterComponent from "./components/FooterComponent";
import AboutPage from "./pages/AboutPage";
import NewsletterPage from "./pages/NewsletterPage";
import DetailPage from "./pages/DetailPage";
import "./App.css"
import NotFoundComponent from "./components/NotFoundComponent";

export default function App() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <Router>
      <div className={`xl:px-40 md:px-16 px-6 ${theme === "light" ? "bg-white" : "bg-dark"}`}>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/blog/:year/:month/:day/:slug" element={<DetailPage />} />
          <Route path="/*" element={<NotFoundComponent />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}
