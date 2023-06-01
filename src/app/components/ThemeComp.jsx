"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeComp = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const themeMode = theme === 'system' ? systemTheme : theme;

  return (
    <div>
    {
      mounted && (
        themeMode === 'dark' ?
        <MdLightMode onClick={() => setTheme('light')} className="cursor-pointer" size={25} /> :
      <MdDarkMode onClick={() => setTheme('dark')} className="cursor-pointer" size={25} /> 
      
      )
    }
    </div>
  );
};

export default ThemeComp;
