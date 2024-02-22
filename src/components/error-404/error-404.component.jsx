import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrowIcon from "../icons/icons/Arrow";

import {
  ErrorArrowContainer,
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
          <div style={{ display: "flex" }}>
            <ErrorMessage>{t("page.title.404")}</ErrorMessage>
            <ErrorArrowContainer>
              <ArrowIcon />
            </ErrorArrowContainer>
          </div>
        </ErrorMessageContainer>
      </NavLink>
    </ErrorContainer>
  );
};

export default Error404;
