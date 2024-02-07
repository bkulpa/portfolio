import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import LanguageSwitcher from "../language-switcher/language-switcher";

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <>
      <Link to="/">{t("navigation.home")}</Link>
      <Link to="/experience">{t("navigation.experience")}</Link>
      <Link to="/skills">{t("navigation.skills")}</Link>
      <Link to="/contact">{t("navigation.contact")}</Link>
      <Link to="/projects">{t("navigation.projects")}</Link>
    </>
  );
};

export default Navigation;
