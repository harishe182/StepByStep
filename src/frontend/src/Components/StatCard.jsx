import React from "react";

function StatCard({ title, value }) {
  const theme = localStorage.getItem("theme") || "light";

  const cardStyle = {
    backgroundColor: "var(--card-bg)", // uses CSS variable
    borderRadius: "12px",
    padding: "25px 20px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    flex: "1",
    minWidth: "200px",
    transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s, color 0.3s",
    cursor: "default",
  };

  const titleStyle = {
    fontSize: "14px",
    color: "var(--text-color)", // uses CSS variable
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.8px",
  };

  const valueStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "var(--text-color)", // uses CSS variable
  };

  const hoverStyle = {
    ...cardStyle,
    transform: "translateY(-4px)",
    boxShadow: "0 6px 16px rgba(0, 0, 0, 0.15)",
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={isHovered ? hoverStyle : cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={titleStyle}>{title}</div>
      <div style={valueStyle}>{value}</div>
    </div>
  );
}

export default StatCard;

