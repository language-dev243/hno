import { useState, useEffect } from "react";

type Theme = "light" | "dark";

export const useTheme = () => {
  // Function to detect system color scheme preference
  const getSystemPreference = (): Theme => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  // Initialize theme from localStorage or system preference
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("app-theme");
    // If there's a saved preference, use it; otherwise use system preference
    return savedTheme ? (savedTheme as Theme) : getSystemPreference();
  });

  // Apply theme class to document
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Handler for system preference changes
    const handleSystemPreferenceChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't explicitly set a preference
      if (!localStorage.getItem("app-theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    // Add listener for system preference changes
    mediaQuery.addEventListener("change", handleSystemPreferenceChange);

    // Initial theme application
    document.documentElement.classList.add(theme);

    // Cleanup
    return () => {
      mediaQuery.removeEventListener("change", handleSystemPreferenceChange);
    };
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  return { theme, toggleTheme };
};