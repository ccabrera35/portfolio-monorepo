import type { SectionName } from "./types";
import { useContext, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ThemeContext } from "portfolio/contexts/ThemeContextProvider";
import { ActiveSectionContext } from "portfolio/contexts/ActiveSectionContextProvider";

export function useSectionInView(sectionName: SectionName, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref
  };
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "usActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }
  return context;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }
  return context;
}
