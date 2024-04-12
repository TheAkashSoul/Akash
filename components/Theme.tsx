"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Theme = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setTheme("dark");
  }, []);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <button
      onClick={toggleTheme}
      className="border border-[#F3F3F3] dark:border-[#165C56] hover:dark:border-[#165C56]/30 px-3 py-2 rounded-full"
    >
      {theme === "light" ? (
        <MdDarkMode size={18} color="#000000" />
      ) : (
        <MdLightMode size={18} color="#FFFFFF" />
      )}
    </button>
  );
};

export default Theme;
