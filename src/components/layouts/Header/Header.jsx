
import Search from "./Search";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 mb-4 lg:mb-6">
      <img src="/logo.png" alt="logo" loading="lazy" className="w-60" />

      <Search />
    </header>
  );
};

export default Header;
