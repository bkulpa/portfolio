import { useTranslation } from "react-i18next";
import ArrowIcon from "../icons/icons/Arrow";

import {
  LanguageArrowContainer,
  LanguageFieldMainBox,
  LanguageStyledH3,
} from "./language-switcher.styles";

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const currentLanguage = i18n.language;

  return (
    <LanguageFieldMainBox
      onClick={() => changeLanguage(currentLanguage === "en" ? "pl" : "en")}
    >
      <LanguageStyledH3>{t("language-switcher.description")}</LanguageStyledH3>
      <LanguageArrowContainer>
        <ArrowIcon />
      </LanguageArrowContainer>
    </LanguageFieldMainBox>
  );
};

export default LanguageSwitcher;
