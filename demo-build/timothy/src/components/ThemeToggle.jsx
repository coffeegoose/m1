import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <div className="transition duration-500 ease-in-out rounded-full p-2">
      {theme === "dark" ? (
        <HiMoon
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-off-white2 text-5xl cursor-pointer"
        />
      ) : (
        <HiSun
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="text-off-white2 text-5xl cursor-pointer"
        />
      )}
    </div>
  );
};

export default Toggle;