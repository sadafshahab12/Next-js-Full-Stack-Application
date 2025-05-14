"use client";
import { FaMoon } from "react-icons/fa";
import styles from "./themeToggle.module.css";
import { LuSunMedium } from "react-icons/lu";
import { useContext } from "react";
import { ThemeContext } from "@/app/context/ThemeContext";
const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "#0f172a" }
      }
    >
      <FaMoon width={12} height={12} className="text-purple-300"  />
      <div
        className={styles.ball}
        style={
          theme === "dark"
            ? { left: 1, backgroundColor: "#0f172a" }
            : { right: 1, backgroundColor: "white" }
        }
      ></div>
      <LuSunMedium width={14} height={14} className="text-black" />
    </div>
  );
};

export default ThemeToggle;
