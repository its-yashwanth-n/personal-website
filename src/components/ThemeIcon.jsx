import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";
import { IconButton } from "@/styles/CommonStyles";
import { PuffOutCenter, PulsateForward } from "@/styles/CommonAnimations";
import styled from "@emotion/styled";

const ThemeIcon = ({ iconSize }) => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }
  return (
    <ThemeButton
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
    </ThemeButton>
  );
};

export default ThemeIcon;

const ThemeButton = styled(IconButton)`
  &:active {
    -webkit-animation: ${PuffOutCenter} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1)
      both;
    animation: ${PuffOutCenter} 1.5s cubic-bezier(0.165, 0.84, 0.44, 1) both;
  }
  &:hover {
    -webkit-animation: ${PulsateForward} 0.8s ease-in-out infinite both;
    animation: ${PulsateForward} 0.8s ease-in-out infinite both;
  }
  transition: background-color 2s ease;
`;
