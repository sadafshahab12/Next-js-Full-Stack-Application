"use client";

import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
const ThemeProvider = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return <div className={theme}>Theme Provider</div>;
};

export default ThemeProvider;
