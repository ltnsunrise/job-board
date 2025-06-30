import { useEffect, useState } from "react";

export const useIsDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const controller = new AbortController();
    if (typeof window === "undefined") return () => controller.abort();
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (event: MediaQueryListEvent) => {
      setIsDarkMode(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange, { signal: controller.signal });

    return () => {
      controller.abort();
    };
  }, []);

  return isDarkMode;
};
