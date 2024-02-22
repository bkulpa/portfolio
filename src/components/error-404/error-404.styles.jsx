import styled from "styled-components";

export const ErrorArrowContainer = styled.div`
  color: rgb(226, 232, 240);
  font-weight: bold;
  width: 16px;
  height: 16px;
  margin-left: 4px;
  margin-top: 8px;
  transition: transform 0.3s ease;
`;

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

  &:hover {
    color: rgb(94, 234, 212);
  }

  &:hover ${ErrorArrowContainer} {
    color: rgb(94, 234, 212);
    transform: translate(5px, -5px);
  }
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
