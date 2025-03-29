import { useTheme } from "../hooks/useTheme";

const ToggleThemeButton: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className="toggle-theme-button">
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ToggleThemeButton;
