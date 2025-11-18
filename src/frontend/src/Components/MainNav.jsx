import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { label: "History", to: "/" },
  { label: "Units", to: "/units" },
  { label: "Settings", to: "/settings" },
];

export default function MainNav() {
  return (
    <nav className="main-nav">
      <div className="nav-brand">BitByBit</div>
      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) =>
              `nav-link${isActive ? " active" : ""}`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
