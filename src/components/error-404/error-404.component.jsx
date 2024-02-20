import { useTranslation } from "react-i18next";

import {
  ErrorCode,
  ErrorContainer,
  ErrorMessage,
  ErrorMessageContainer,
  VerticalLine,
} from "./error-404.styles";

const Error404 = () => {
  const { t } = useTranslation();
  return (
    <ErrorContainer>
      <ErrorMessageContainer>
        <ErrorCode>404</ErrorCode>
        <VerticalLine />
        <ErrorMessage>{t("page.title.404")}</ErrorMessage>
      </ErrorMessageContainer>
    </ErrorContainer>
  );
};

export default Error404;
