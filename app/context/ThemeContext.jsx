import { createContext, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  const value = localStorage.getItem("theme");
  return value || "light"; //if the local storahe is empty make it light
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};
