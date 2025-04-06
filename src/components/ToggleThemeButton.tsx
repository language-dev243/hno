import { useTheme } from "../hooks/useTheme";

const ToggleThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className={`toggle-theme-button ${theme} flex-end`}>
      {theme === "light" ? "Dark" : "Light"}
    </button>
  );
};

export default ToggleThemeButton;
