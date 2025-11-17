import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import QuizHistory from "./pages/QuizHistory";
import AccountSettings from "./pages/AccountSettings";

export default function App() {
  useEffect(() => {
    // Load saved theme and font size from localStorage
    const theme = localStorage.getItem("theme") || "light";
    const fontSize = localStorage.getItem("fontSize") || "Medium";

    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.fontSize =
      fontSize === "Small" ? "14px" : fontSize === "Medium" ? "16px" : "18px";
  }, []);

  return (
    <Routes>
      <Route path="/" element={<QuizHistory />} />
      <Route path="/settings" element={<AccountSettings />} />
    </Routes>
  );
}





