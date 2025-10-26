import logo from "../../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 mb-4 lg:mb-8">
      <img src={logo} alt="logo" loading="lazy" className="w-60 lg:w-80" />
    </header>
  );
};

export default Header;
