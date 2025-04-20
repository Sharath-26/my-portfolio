import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa"; // Importing new icons from Font Awesome

const Themetoggle = () => {
  const savedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(savedTheme || "light"); // Fallback to "light" if theme is null
  
  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Determine icon color based on theme
  const iconColor = theme === "dark" ? "#fff" : "#000"; // White for dark mode, black for light mode
  
  return (
    <div 
      className="nav_ac" 
      onClick={themeToggle} 
    >
      {theme === "dark" ? (
        <FaMoon color={iconColor} />
      ) : (
        <FaSun color={iconColor} />
      )}
    </div>
  );
};

export default Themetoggle;
