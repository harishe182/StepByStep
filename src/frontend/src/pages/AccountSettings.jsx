import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./AccountSettings.css";
import { ArrowLeft, Moon, Eye, Type, User, BookOpen } from "lucide-react";

export default function AccountSettings() {
  const navigate = useNavigate();

  // State for toggles
  const [darkMode, setDarkMode] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState("Medium");

  // Applied settings (only update on Save Changes)
  const [appliedTheme, setAppliedTheme] = useState("light"); // light, dark, high-contrast
  const [appliedFontSize, setAppliedFontSize] = useState("Medium");

  // Load theme/fontSize from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedFontSize = localStorage.getItem("fontSize");

    if (savedTheme) setAppliedTheme(savedTheme);
    if (savedFontSize) setAppliedFontSize(savedFontSize);

    setDarkMode(savedTheme === "dark");
    setHighContrast(savedTheme === "high-contrast");
    setFontSize(savedFontSize || "Medium");
  }, []);

  // Apply theme/fontSize whenever applied settings change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", appliedTheme);
    document.documentElement.style.fontSize =
      appliedFontSize === "Small"
        ? "16px"
        : appliedFontSize === "Medium"
        ? "18px"
        : appliedFontSize === "Large"
        ? "20px"
        : "16px";
  }, [appliedTheme, appliedFontSize]);

  // Save changes and persist to localStorage
  const handleSaveChanges = () => {
    const theme = highContrast ? "high-contrast" : darkMode ? "dark" : "light";

    setAppliedTheme(theme);
    setAppliedFontSize(fontSize);

    localStorage.setItem("theme", theme);
    localStorage.setItem("fontSize", fontSize);
  };

  // Back button
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <button className="back-btn" onClick={handleBack}>
          <ArrowLeft size={18} />
        </button>
        <h2>Settings</h2>
        <button className="save-btn" onClick={handleSaveChanges}>
          💾 Save Changes
        </button>
      </div>

      {/* Profile Information */}
      <div className="settings-section">
        <div className="section-header">
          <div className="icon profile-icon">
            <User size={20} />
          </div>
          <div>
            <h3>Profile Information</h3>
            <p>Update your personal details</p>
          </div>
        </div>
        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value="John Doe" readOnly />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value="John.Doe@school.edu" readOnly />
          </div>
          <div className="form-group">
            <label>Grade Level</label>
            <select defaultValue="Grade 9">
              <option>Grade 8</option>
              <option>Grade 9</option>
              <option>Grade 10</option>
            </select>
          </div>
          <div className="form-group">
            <label>Preferred Difficulty</label>
            <select defaultValue="Normal">
              <option>Easy</option>
              <option>Normal</option>
              <option>Hard</option>
            </select>
          </div>
        </div>
      </div>

      {/* Accessibility & Display */}
      <div className="settings-section">
        <div className="section-header">
          <div className="icon accessibility-icon">
            <Eye size={20} />
          </div>
          <div>
            <h3>Accessibility & Display</h3>
            <p>Customize your learning experience</p>
          </div>
        </div>
        <div className="toggle-row">
          <div>
            <h4>
              <Moon size={16} /> Dark Mode
            </h4>
            <p>Switch to dark theme</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="toggle-row">
          <div>
            <h4>
              <Eye size={16} /> High Contrast
            </h4>
            <p>Enhance color visibility</p>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={highContrast}
              onChange={() => setHighContrast(!highContrast)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="form-group">
          <label>
            <Type size={16} /> Font Size
          </label>
          <select
            value={fontSize}
            onChange={(e) => setFontSize(e.target.value)}
          >
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
      </div>

            {/* Learning Progress */}
<div className="settings-section">
  <div className="section-header">
    <div className="icon learning-icon">
      <BookOpen size={20} />
    </div>
    <div>
      <h3>Learning Progress</h3>
      <p>Manage your learning data</p>
    </div>
  </div>

  {/* Retake Diagnostic Test */}
  <div className="progress-card retake-card theme-card">
    <div>
      <h4>Retake Diagnostic Test</h4>
      <p>Take a new diagnostic to update your personalized learning path</p>
    </div>
    <button className="retake-btn theme-btn">
      Retake
    </button>
  </div>

  {/* Reset All Progress */}
  <div className="progress-card reset-card theme-card">
    <div>
      <h4>Reset All Progress</h4>
      <p>This will permanently delete all your learning data, quiz history, and progress</p>
    </div>
    <button className="reset-btn theme-btn">
      Reset
    </button>
  </div>
</div>
      </div>
  );
}


