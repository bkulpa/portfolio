import { useTranslation } from "react-i18next";

import { ArrowContainer } from "../experience-field/experience-field.styles";
import ArrowIcon from "../icons/icons/Arrow";
import { CVLink } from "../experience-field/experience-field.styles";

import Menu from "../menu/menu.component";
import StyledH1 from "../styled-tags/styled-h1.styles";
import StyledH2 from "../styled-tags/styled-h2.styles";
import StyledP from "../styled-tags/styled-p.styles";
import LanguageSwitcher from "../language-switcher/language-switcher.component";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div style={{ marginTop: "100px" }}>
      <StyledH1>{t("home.nameAndSurname")}</StyledH1>
      <StyledH2>{t("home.jobTitle")}</StyledH2>
      <div style={{ maxWidth: "320px", marginTop: "16px" }}>
        <StyledP>{t("home.jobTitleDescription")}</StyledP>
      </div>
      <LanguageSwitcher />
      <div style={{ display: "flex" }}>
        <CVLink
          href="CV - Bartosz Kulpa.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t("home.experienceField.resume")}
          <ArrowContainer>
            <ArrowIcon />
          </ArrowContainer>
        </CVLink>
      </div>

      <Menu />
    </div>
  );
};

export default Header;
