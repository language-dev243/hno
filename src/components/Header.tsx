import { useTheme } from "../hooks/useTheme";

export const Header: React.FC = () => {
  const { theme } = useTheme();

  return (
    <header className={`header ${theme} p-2 flex justify-center items-center`}>
      <h1 className="p-2 text-5xl font-extrabold">hno</h1>
    </header>
  );
};

export default Header;
