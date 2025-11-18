import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import QuizHistory from "./pages/QuizHistory";
import AccountSettings from "./pages/AccountSettings";
import Units from "./pages/Units";
import UnitDetail from "./pages/UnitDetail";
import Diagnostic from "./pages/Diagnostic";
import Practice from "./pages/Practice";
import MiniQuiz from "./pages/MiniQuiz";
import UnitTest from "./pages/UnitTest";
import MainNav from "./Components/MainNav";
import "./App.css";

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
    <div className="app-shell">
      <MainNav />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<QuizHistory />} />
          <Route path="/settings" element={<AccountSettings />} />
          <Route path="/units" element={<Units />} />
          <Route path="/units/:unitId" element={<UnitDetail />} />
          <Route path="/units/:unitId/diagnostic" element={<Diagnostic />} />
          <Route path="/units/:unitId/practice" element={<Practice />} />
          <Route path="/units/:unitId/mini-quiz" element={<MiniQuiz />} />
          <Route path="/units/:unitId/unit-test" element={<UnitTest />} />
        </Routes>
      </main>
    </div>
  );
}



