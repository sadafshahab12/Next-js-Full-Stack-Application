import { FaMoon } from "react-icons/fa";
import styles from "./themeToggle.module.css";
import { LuSunMedium } from "react-icons/lu";
const ThemeToggle = () => {
  return (
    <div className={styles.container}>
      <FaMoon width={12} height={12} className="text-white" />
      <div className={styles.ball}></div>
      <LuSunMedium width={14} height={14} className="text-yellow-300" />
    </div>
  );
};

export default ThemeToggle;
