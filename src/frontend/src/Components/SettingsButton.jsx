import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Settings } from "lucide-react";

export default function SettingsButton() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light");

  // Load theme from localStorage so it stays consistent
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
  }, []);

  // Determine icon color based on theme
  const getIconColor = () => {
    if (theme === "dark") return "#ffffff"; // white for dark mode
    if (theme === "high-contrast") return "#ffff00"; // bright yellow for high contrast
    return "#333"; // default light mode color
  };

  return (
    <button
      onClick={() => navigate("/settings")}
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        background: "none",
        border: "none",
        cursor: "pointer",
      }}
    >
      <Settings size={24} color={getIconColor()} />
    </button>
  );
}
