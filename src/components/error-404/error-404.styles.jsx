import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: rgb(148, 163, 184);
`;

export const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ErrorCode = styled.h1`
  font-size: 24px;
  font-weight: 500;
`;

export const VerticalLine = styled.div`
  height: 50px;
  width: 0.5px;
  background-color: rgba(39, 48, 73, 255);
`;

export const ErrorMessage = styled.h2`
  font-size: 14px;
  font-weight: 400;
`;
