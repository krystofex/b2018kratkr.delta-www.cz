import { HistoriesLogo } from '../elements/Icons';

const Navbar = () => {
  return (
    <nav className="h-16 w-full border-b border-[#D8DBDE] shadow-sm text-gray-800">
      <div className="max-w-4xl m-auto h-full w-full flex items-center justify-between px-4">
        <a className="h-8" href="https://www.histories.cc">
          <HistoriesLogo />
        </a>

        <div className="flex gap-2">
          <a className="navbar-button" href="https://www.histories.cc/login">
            Přihlásit se
          </a>          <a
            className="navbar-button-primary"
            href="https://www.histories.cc/register"
          >
            Zaregistrovat se
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
