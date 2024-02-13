"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import SunIcon from "@icons/SunIcon";
import MoonIcon from "@icons/MoonIcon";

// ThemeSwitcher component
function ThemeSwitcher() {
  // State to track whether the component has mounted
  const [mounted, setMounted] = useState(false);

  // Theme-related functions from useTheme hook
  const { theme, setTheme } = useTheme();

  // useEffect to set mounted to true after component mounts
  useEffect(() => {
    setMounted(true);
  }, []);

  // If the component is not yet mounted, return null
  if (!mounted) return null;

  // Save current theme to localStorage
  const saveThemeToLocalStorage = (selectedTheme: string) => {
    localStorage.setItem("theme", selectedTheme);
  };

  // Determine which icon to display based on the current theme
  const getIconBasedOnTheme = () => {
    return theme === "dark" ? <MoonIcon /> : <SunIcon />;
  };

  // JSX for displaying current theme, icon, and switch component
  return (
    <div className="flex justify-items-center">
      <Switch
        label={theme === "light" ? "Light Mode" : "Dark Mode"}
        checked={theme === "dark"}
        onChange={() => {
          const newTheme = theme === "light" ? "dark" : "light";
          setTheme(newTheme);
          saveThemeToLocalStorage(newTheme);
        }}
        startContent={getIconBasedOnTheme()}
        endContent={getIconBasedOnTheme()}
      />
    </div>
  );
}

// Exporting the ThemeSwitcher component
export default ThemeSwitcher;
