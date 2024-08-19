"use client";

import React, { useState, createContext, useContext } from "react";
import { links } from "portfolio/lib/data";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type SectionName = (typeof links)[number]["name"];

type ActiveSectionContext = {
  activeSection: SectionName | null;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext = createContext<ActiveSectionContext | null>(
  null
);

export default function ActiveSectionContextProvider({
  children
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

// export function useActiveSectionContext() {
//   const context = useContext(ActiveSectionContext);

//   if (!context) {
//     throw new Error(
//       "usActiveSectionContext must be used within an ActiveSectionContextProvider"
//     );
//   }
//   return context;
// }
