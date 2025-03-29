import ToggleThemeButton from "./ToggleThemeButton";

export const Header: React.FC = () => {

  return (
    <header>
      <h1 className="text-5xl font-bold">hno</h1>
      <ToggleThemeButton />
    </header>
  );
};

export default Header