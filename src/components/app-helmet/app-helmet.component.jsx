import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

const AppHelmet = () => {
  const { t } = useTranslation();
  return (
    <Helmet>
      <title>{t("page.title")}</title>
      <link rel="icon" type="image/png" href="/icon.png" />
    </Helmet>
  );
};

export default AppHelmet;
