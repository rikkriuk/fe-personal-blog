import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import FooterComponent from "./components/FooterComponent";

export default function App() {
  const { theme } = useSelector((state) => state);

  return (
    <Router>
      <div className={`xl:px-40 md:px-16 px-6 ${theme === "light" ? "bg-white" : "bg-dark"}`}>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <FooterComponent />
      </div>
    </Router>
  );
}
