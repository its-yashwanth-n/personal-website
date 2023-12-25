"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { IconButton } from "@/styles/CommonStyles";

export const ThemeIcon = ({ iconSize = 24 }) => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    <IconButton
      id="theme-icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={
        theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
      }
    >
      {theme === "light" ? (
        <FiMoon size={iconSize} />
      ) : (
        <FiSun size={iconSize} />
      )}
    </IconButton>
  );
};
