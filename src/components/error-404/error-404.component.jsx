import {
  ErrorCode,
  ErrorContainer,
  ErrorMessage,
  ErrorMessageContainer,
  VerticalLine,
} from "./error-404.styles";

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorMessageContainer>
        <ErrorCode>404</ErrorCode>
        <VerticalLine />
        <ErrorMessage>This page could not be found</ErrorMessage>
      </ErrorMessageContainer>
    </ErrorContainer>
  );
};

export default ErrorPage;
