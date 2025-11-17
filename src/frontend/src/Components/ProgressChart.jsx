import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function ProgressChart({ data }) {
  // Access CSS variables for theme-aware colors
  const rootStyles = getComputedStyle(document.documentElement);
  const bgColor = rootStyles.getPropertyValue("--card-bg") || "#ffffff";
  const textColor = rootStyles.getPropertyValue("--card-text") || "#000000";
  const lineColor = rootStyles.getPropertyValue("--text-color") || "#3498db"; // can adapt line for high contrast

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        background: bgColor,
        borderRadius: "10px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        padding: "15px",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <h3 style={{ textAlign: "center", marginBottom: "10px", color: textColor }}>
        Quiz Progress
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <LineChart data={data} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
          <CartesianGrid stroke={textColor} strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke={textColor} />
          <YAxis domain={[0, 100]} stroke={textColor} />
          <Tooltip
            contentStyle={{ backgroundColor: bgColor, color: textColor }}
            labelStyle={{ color: textColor }}
          />
          <Line
            type="monotone"
            dataKey="percentage"
            stroke={lineColor}
            strokeWidth={2}
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ProgressChart;


