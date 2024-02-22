import { NavLink } from "react-router-dom";
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
      <NavLink to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <ErrorMessageContainer>
          <ErrorCode>404</ErrorCode>
          <VerticalLine />
          <ErrorMessage>{t("page.title.404")}</ErrorMessage>
        </ErrorMessageContainer>
      </NavLink>
    </ErrorContainer>
  );
};

export default Error404;
