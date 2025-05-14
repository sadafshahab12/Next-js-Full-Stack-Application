"use client";
import { FaMoon } from "react-icons/fa";
import styles from "./themeToggle.module.css";
import { LuSunMedium } from "react-icons/lu";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container}>
      <FaMoon width={12} height={12} className="text-white" />
      <div className={styles.ball}></div>
      <LuSunMedium width={14} height={14} className="text-yellow-300" />
    </div>
  );
};

export default ThemeToggle;
