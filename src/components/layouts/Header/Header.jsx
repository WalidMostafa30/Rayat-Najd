import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 mb-4 lg:mb-6">
      <img src={logo} alt="logo" loading="lazy" className="w-60" />
    </header>
  );
};

export default Header;
