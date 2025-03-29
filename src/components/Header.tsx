import { useTheme } from "../hooks/useTheme";
import ToggleThemeButton from "./ToggleThemeButton";

export const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme}`}>
      <h1>hno</h1>
      <ToggleThemeButton />
    </header>
  );
};

export default Header;
