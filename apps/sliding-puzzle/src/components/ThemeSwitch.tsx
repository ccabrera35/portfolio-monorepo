import "@theme-toggles/react/css/Horizon.css";
import { Horizon } from "@theme-toggles/react";
import { useTheme } from "../hooks/useThemeConfig";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    // @ts-expect-error suppress missing props from Horizon type definition
    <Horizon
      placeholder=""
      className="
        w-[3rem] h-[3rem] text-3xl mt-auto mb-5 ml-auto mr-5
       text-[#ffe668] dark:text-[#F6B17A] 
        bg-transparent bg-opacity-80 
        backdrop-blur-[0.5rem]  
        shadow-2xl rounded-full 
        flex items-center justify-center 
        hover:scale-[1.15] active:scale-105 transition-all"
      onToggle={toggleTheme}
      toggled={theme === "dark"}
    />
  );
}
