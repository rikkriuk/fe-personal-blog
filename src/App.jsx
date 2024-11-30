import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import HomePage from "./pages/HomePage";
import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";

export default function App() {
  const { theme } = useSelector((state) => state);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className={`xl:px-40 md:px-16 px-6 ${theme === "light" ? "bg-white" : "bg-dark"}`}>
            <HeaderComponent />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}
