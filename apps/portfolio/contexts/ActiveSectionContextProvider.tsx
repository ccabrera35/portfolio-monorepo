"use client";

import React, { useState, createContext } from "react";
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
