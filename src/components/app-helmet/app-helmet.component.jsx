import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const AppHelmet = () => {
  const { t } = useTranslation();
  const pageTitleKey = useSelector((state) => state.pageTitle);

  return (
    <Helmet>
      <title>{t(pageTitleKey)}</title>
      <link rel="icon" type="image/png" href="/icon.png" />
      <meta property="og:url" content="https://www.bkulpa.pl/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Bartosz Kulpa - Portfolio" />
      <meta property="og:description" content="Bartosz Kulpa - Portfolio" />

      <meta
        property="og:image"
        content="https://bkulpa.pl/page-fb-cover-photo.png"
      />
    </Helmet>
  );
};

export default AppHelmet;
