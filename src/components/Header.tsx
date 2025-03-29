import { useTheme } from "../hooks/useTheme";
import ToggleThemeButton from "./ToggleThemeButton";

export const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme} p-4 flex justify-center items-center`}>
      <h1 className="p-4 text-5xl font-bold">hno</h1>
      <ToggleThemeButton />
    </header>
  );
};

export default Header;
