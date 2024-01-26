import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../language-switcher/language-switcher";

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="/">{t("home")}</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/skills">Skills</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/projects">Projects</Link>
      <LanguageSwitcher />
    </>
  );
};

export default Header;
